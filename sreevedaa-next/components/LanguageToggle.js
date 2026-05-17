"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export default function LanguageToggle() {
  const [activeLang, setActiveLang] = useState('en');
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const retryRef = useRef(null);
  const pollRef = useRef(null);

  // Parse translation cookie on client side to preserve state on refreshes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const transCookie = getCookie('googtrans');
    if (transCookie) {
      const parts = transCookie.split('/');
      const lang = parts[parts.length - 1];
      if (lang === 'te' || lang === 'en') {
        setActiveLang(lang);
      }
    }
  }, []);

  // Initialize Google Translate Element
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Bug 3 fix: If script already added but google.translate not ready yet, poll for it
    if (window.__gtScriptAdded || document.getElementById('google-translate-script')) {
      if (window.google?.translate) {
        setScriptLoaded(true);
      } else {
        // Poll until google.translate becomes available (race condition on hot-reload)
        pollRef.current = setInterval(() => {
          if (window.google?.translate) {
            setScriptLoaded(true);
            clearInterval(pollRef.current);
            pollRef.current = null;
          }
        }, 200);
        // Give up after 5 seconds
        setTimeout(() => {
          if (pollRef.current) {
            clearInterval(pollRef.current);
            pollRef.current = null;
          }
        }, 5000);
      }
      return;
    }

    // Google Translate Init Callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,te',
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
        setScriptLoaded(true);
      }
    };

    // Load the script in <head>
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    if (document.head) {
      document.head.appendChild(script);
      window.__gtScriptAdded = true;
    }

    return () => {
      if (retryRef.current) clearInterval(retryRef.current);
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  // Bug 1 fix: Reach into iframe to find .goog-te-combo
  const doTranslate = useCallback((langCode) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return false;

    // 1. Try the main document first (sometimes it's not in an iframe)
    let selectEl = document.querySelector('.goog-te-combo');

    // 2. If not found, search inside Google Translate's iframe
    if (!selectEl) {
      const iframe =
        document.querySelector('iframe.goog-te-menu-frame') ||
        document.querySelector('#\\:1\\.container iframe');

      // 3. Fallback: scan all iframes for anything Google Translate-related
      const gtFrame =
        iframe ||
        Array.from(document.querySelectorAll('iframe')).find(
          (f) =>
            f.src?.includes('translate.google') ||
            f.className?.includes('goog')
        );

      if (gtFrame) {
        try {
          const iframeDoc =
            gtFrame.contentDocument || gtFrame.contentWindow?.document;
          selectEl = iframeDoc?.querySelector('.goog-te-combo');
        } catch (_) {
          // Cross-origin iframe — can't access, fall through
        }
      }
    }

    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  }, []);

  // Main language handler
  const switchLanguage = useCallback(
    (langCode) => {
      if (typeof window === 'undefined') return;
      if (langCode === activeLang) return;
      setActiveLang(langCode);

      // Bug 4 fix: English revert using the official restore API
      if (langCode === 'en') {
        // Try the official restore API first — this is the only reliable way
        const instance = window.google?.translate?.TranslateElement?.getInstance?.();
        if (instance?.restore) {
          instance.restore();
        } else {
          // Fallback: clear cookies + reload
          const domain = window.location.hostname;
          document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain}`;
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
          window.location.reload();
        }
        return;
      }

      // Handle Telugu (or any non-English target)
      const done = doTranslate(langCode);
      if (!done) {
        // Widget is likely still loading — poll until it's ready
        let attempts = 0;
        if (retryRef.current) clearInterval(retryRef.current);

        retryRef.current = setInterval(() => {
          attempts++;
          const success = doTranslate(langCode);
          if (success || attempts > 20) {
            clearInterval(retryRef.current);
            retryRef.current = null;
          }
        }, 500);
      }
    },
    [activeLang, doTranslate]
  );

  return (
    <>
      {/* Hidden Google Translate standard target */}
      <div
        id="google_translate_element"
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          width: 0,
          height: 0,
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Modern Pill Toggle Button UI */}
      <div className="lang-toggle" role="group" aria-label="Language selector">
        <button
          type="button"
          className={`lang-btn${activeLang === 'en' ? ' lang-btn--active' : ''}`}
          onClick={() => switchLanguage('en')}
          aria-pressed={activeLang === 'en'}
          title="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          className={`lang-btn${activeLang === 'te' ? ' lang-btn--active' : ''}`}
          onClick={() => switchLanguage('te')}
          aria-pressed={activeLang === 'te'}
          title="తెలుగులోకి మార్చు"
        >
          తెలుగు
        </button>
      </div>

      <style>{`
        /* ── Toggle container ── */
        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(45, 75, 59, 0.08);
          border-radius: 999px;
          padding: 3px;
          flex-shrink: 0;
        }

        /* ── Individual button ── */
        .lang-btn {
          position: relative;
          padding: 0.35rem 0.85rem;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: #2D4B3B;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }

        .lang-btn:hover:not(.lang-btn--active) {
          background: rgba(45, 75, 59, 0.10);
          color: #2D4B3B;
        }

        /* ── Active state ── */
        .lang-btn--active {
          background: #2D4B3B;
          color: #fff;
          box-shadow: 0 2px 8px rgba(45, 75, 59, 0.25);
          font-weight: 600;
        }
        .lang-btn--active:hover {
          background: #3d6450;
        }

        /* ── Focus ring for accessibility ── */
        .lang-btn:focus-visible {
          outline: 2px solid #8C9D5E;
          outline-offset: 2px;
        }

        /* ── Mobile responsiveness ── */
        @media (max-width: 1024px) {
          .lang-toggle {
            padding: 2px;
          }
          .lang-btn {
            padding: 0.3rem 0.65rem;
            font-size: 0.72rem;
          }
        }

        /* ══════════════════════════════════════════════
           Comprehensive Google Translate UI Hiding CSS
           ══════════════════════════════════════════════ */

        /* Top banner, tooltip frame, widgets wrappers */
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-ftab-link,
        .goog-tooltip,
        .goog-tooltip:hover,
        div#goog-gt-,
        .goog-te-banner,
        .goog-te-banner-frame.skiptranslate,
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
          display: none !important;
          visibility: hidden !important;
        }

        /* Prevent Google Translate from shifting the body down */
        body {
          top: 0 !important;
          position: static !important;
        }

        /* Bug 2 fix: Hide skiptranslate elements BUT exclude our
           #google_translate_element container so the widget can render */
        .skiptranslate:not(#google_translate_element) {
          display: none !important;
          height: 0 !important;
          width: 0 !important;
          visibility: hidden !important;
        }
        body > .skiptranslate:not(#google_translate_element) {
          display: none !important;
          height: 0 !important;
          width: 0 !important;
          visibility: hidden !important;
        }
        iframe.skiptranslate {
          display: none !important;
          height: 0 !important;
          width: 0 !important;
          visibility: hidden !important;
        }

        /* Strip highlighting styles on translated hover */
        font[style],
        font {
          background: none !important;
          box-shadow: none !important;
        }

        /* Override the inline margins set on html element by Google */
        html,
        html.translated-ltr,
        html.translated-rtl {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        /* Google gadget dropdown hiding rules */
        .goog-te-gadget {
          font-size: 0 !important;
          color: transparent !important;
        }
        .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
        }
        .goog-te-gadget > span {
          display: none !important;
        }

        /* VNPage toolbar override */
        #\\:0\\.container,
        .VIpgJd-ZVi9od-ORHb-OEVmcd,
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc {
          display: none !important;
        }
      `}</style>
    </>
  );
}
