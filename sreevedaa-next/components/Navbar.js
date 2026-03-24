import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        id="navbar"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.5rem 3rem',
          background: 'rgba(248,245,240,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(45,75,59,0.1)',
          transition: 'all 0.3s',
        }}
      >
        {/* Logo — clickable, links to homepage */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Image
            src="/sreevedaa-logo.png"
            alt="Sree Vedaa — Heal Naturally Live Happily"
            width={90}
            height={65}
            priority
            style={{ objectFit: 'contain', width: 90, height: 'auto' }}
          />
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            ['#services', 'Therapies'],
            ['#conditions', 'Conditions'],
            ['#special', 'Special Care'],
            ['#pricing', 'Pricing'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                style={{ textDecoration: 'none', color: '#2c2c2c', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseOver={e => (e.target.style.color = '#2D4B3B')}
                onMouseOut={e => (e.target.style.color = '#2c2c2c')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Book Now CTA — hidden on mobile */}
          <a
            href="tel:9640553411"
            className="nav-desktop-links"
            style={{
              background: '#2D4B3B', color: 'white',
              padding: '0.6rem 1.5rem', borderRadius: '2rem',
              fontSize: '0.85rem', fontWeight: 500,
              textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s',
            }}
            onMouseOver={e => { e.currentTarget.style.background = '#3d6450'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseOut={e => { e.currentTarget.style.background = '#2D4B3B'; e.currentTarget.style.transform = 'none'; }}
          >
            📞 Book Now
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', flexDirection: 'column', gap: 4, cursor: 'pointer', background: 'none', border: 'none', padding: 4 }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#2D4B3B', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#2D4B3B', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#2D4B3B', borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 76, left: 0, right: 0, zIndex: 999,
          background: 'rgba(248,245,240,0.97)',
          backdropFilter: 'blur(12px)',
          padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        }}>
          {[
            ['#services', 'Therapies'],
            ['#conditions', 'Conditions'],
            ['#special', 'Special Care'],
            ['#pricing', 'Pricing'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none', color: '#2c2c2c', fontSize: '0.95rem', fontWeight: 500 }}>
              {label}
            </a>
          ))}
          <a href="tel:9640553411" style={{
            background: '#2D4B3B', color: 'white',
            padding: '0.8rem', borderRadius: '2rem',
            textAlign: 'center', textDecoration: 'none', fontWeight: 600,
          }}>
            📞 Book Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0.5rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
