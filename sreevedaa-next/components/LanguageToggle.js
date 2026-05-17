"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export default function LanguageToggle() {
  const [activeLang, setActiveLang] = useState('en');
  const retryRef = useRef(null);

  // Read existing cookie on mount
  useEffect(() => {
    const val = document.cookie
      .split('; ')
      .find(r => r.startsWith('googtrans='))
      ?.split('=')[1];
    if (val === '/en/te') setActiveLang('te');
  }, []);

  // Load Google Translate script once
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,te',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (retryRef.current) clearInterval(retryRef.current);
    };
  }, []);

  // Find the select inside Google's iframe
  const getSelectEl = useCallback(() => {
    // 1. Try direct DOM first (some configs render it outside iframe)
    const direct = document.querySelector('.goog-te-combo');
    if (direct) return direct;

    // 2. Search inside every iframe on the page
    for (const iframe of Array.from(document.querySelectorAll('iframe'))) {
      try {
        const sel = iframe.contentDocument?.querySelector('.goog-te-combo');
        if (sel) return sel;
      } catch {
        // cross-origin iframe, skip
      }
    }
    return null;
  }, []);

  const doTranslate = useCallback(
    (langCode) => {
      const sel = getSelectEl();
      if (!sel) return false;
      sel.value = langCode;
      sel.dispatchEvent(new Event('change'));
      return true;
    },
    [getSelectEl]
  );

  const switchLanguage = useCallback(
    (langCode) => {
      if (langCode === activeLang) return;
      setActiveLang(langCode);

      if (langCode === 'en') {
        // Clear googtrans cookie on all domain variants
        ['', `.${location.hostname}`, location.hostname].forEach((d) => {
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${d ? '; domain=' + d : ''}`;
        });

        // Try widget restore, fall back to reload
        const done = doTranslate('en');
        if (!done) window.location.reload();
        return;
      }

      // Telugu — poll until widget is ready
      const done = doTranslate(langCode);
      if (!done) {
        let attempts = 0;
        if (retryRef.current) clearInterval(retryRef.current);
        retryRef.current = setInterval(() => {
          attempts++;
          if (doTranslate(langCode) || attempts > 30) {
            clearInterval(retryRef.current);
            retryRef.current = null;
          }
        }, 300);
      }
    },
    [activeLang, doTranslate]
  );

  return (
    <>
      {/*
        IMPORTANT: Do NOT hide this div with display:none or visibility:hidden.
        Google needs it in the DOM to attach the widget.
        We push it off-screen instead.
      */}
      <div
        id="google_translate_element"
        style={{
          position: 'fixed',
          top: 0,
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      />

      <div className="lang-toggle" role="group" aria-label="Language selector">
        <button
          type="button"
          className={`lang-btn${activeLang === 'en' ? ' lang-btn--active' : ''}`}
          onClick={() => switchLanguage('en')}
          aria-pressed={activeLang === 'en'}
        >
          EN
        </button>
        <button
          type="button"
          className={`lang-btn${activeLang === 'te' ? ' lang-btn--active' : ''}`}
          onClick={() => switchLanguage('te')}
          aria-pressed={activeLang === 'te'}
        >
          తెలుగు
        </button>
      </div>

      <style>{`
        .lang-toggle {
          display: flex;
          align-items: center;
          background: rgba(45, 75, 59, 0.08);
          border-radius: 999px;
          padding: 3px;
          flex-shrink: 0;
        }
        .lang-btn {
          padding: 0.35rem 0.85rem;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: #2D4B3B;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }
        .lang-btn:hover:not(.lang-btn--active) {
          background: rgba(45, 75, 59, 0.10);
        }
        .lang-btn--active {
          background: #2D4B3B;
          color: #fff;
          box-shadow: 0 2px 8px rgba(45, 75, 59, 0.25);
          font-weight: 600;
        }
        .lang-btn:focus-visible {
          outline: 2px solid #8C9D5E;
          outline-offset: 2px;
        }

        /* ── Hide Google's UI chrome without breaking the widget ── */
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        iframe.goog-te-menu-frame {
          display: none !important;
        }

        /* Keep body in place — Google shifts it down 40px */
        body {
          top: 0 !important;
          position: static !important;
        }
        html, html.translated-ltr, html.translated-rtl {
          margin-top: 0 !important;
        }

        /* Hide branding text inside the gadget but NOT the select */
        .goog-te-gadget > span,
        .goog-te-gadget a {
          display: none !important;
        }
        .goog-te-gadget {
          font-size: 0 !important;
        }

        /* Strip highlight on hover */
        font[style], font {
          background: none !important;
          box-shadow: none !important;
        }

        @media (max-width: 1024px) {
          .lang-btn { padding: 0.3rem 0.65rem; font-size: 0.72rem; }
        }
      `}</style>
    </>
  );
}