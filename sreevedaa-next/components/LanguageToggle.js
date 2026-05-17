import { useState, useEffect, useRef, useCallback } from 'react';

export default function LanguageToggle() {
  const [activeLang, setActiveLang] = useState('en');
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const retryRef = useRef(null);

  // Initialize Google Translate
  useEffect(() => {
    // Prevent double-init across hot reloads
    if (window.__gtScriptAdded) {
      setScriptLoaded(true);
      return;
    }

    // Google Translate init callback
    window.googleTranslateElementInit = () => {
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
    };

    // Load the script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
    window.__gtScriptAdded = true;

    return () => {
      if (retryRef.current) clearInterval(retryRef.current);
    };
  }, []);

  // Trigger language change via the hidden Google Translate <select>
  const doTranslate = useCallback((langCode) => {
    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  }, []);

  const switchLanguage = useCallback(
    (langCode) => {
      if (langCode === activeLang) return;
      setActiveLang(langCode);

      // If switching to English, also clear the translate cookie to fully revert
      if (langCode === 'en') {
        // Clear the googtrans cookie
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;

        // Try to revert via the select dropdown
        const done = doTranslate('en');
        if (!done) {
          // If the widget isn't ready, just reload to clear translation
          window.location.reload();
          return;
        }
        return;
      }

      // Try immediately
      const done = doTranslate(langCode);
      if (!done) {
        // Widget may still be loading — poll until the <select> appears
        let attempts = 0;
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
      {/* Hidden Google Translate widget — positioned off-screen */}
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

      {/* Toggle UI */}
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

        /* ── Focus ring for a11y ── */
        .lang-btn:focus-visible {
          outline: 2px solid #8C9D5E;
          outline-offset: 2px;
        }

        /* ── Mobile responsive ── */
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
           Hide ALL Google Translate default UI
           ══════════════════════════════════════════════ */

        /* Top banner */
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-ftab-link,
        .goog-tooltip,
        .goog-tooltip:hover,
        div#goog-gt- {
          display: none !important;
          visibility: hidden !important;
        }

        /* Remove body.top shift that Google adds */
        body {
          top: 0 !important;
          position: static !important;
        }

        /* Hide iframe injected banner */
        iframe.goog-te-banner-frame {
          display: none !important;
          height: 0 !important;
          visibility: hidden !important;
        }

        /* Remove the fixed-position bar */
        .skiptranslate {
          display: none !important;
          height: 0 !important;
        }
        body > .skiptranslate {
          display: none !important;
          height: 0 !important;
        }
        iframe.skiptranslate {
          display: none !important;
          height: 0 !important;
          visibility: hidden !important;
        }

        /* Prevent translated text highlight styles */
        font[style],
        font {
          background: none !important;
          box-shadow: none !important;
        }

        /* Override the inline style Google sets on <html> */
        html.translated-ltr,
        html.translated-rtl {
          margin-top: 0 !important;
        }

        /* Clean up Google gadget bar */
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
        .VIpgJd-ZVi9od-ORHb-OEVmcd {
          display: none !important;
        }
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
          display: none !important;
        }
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc {
          display: none !important;
        }
      `}</style>
    </>
  );
}
