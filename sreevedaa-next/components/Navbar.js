import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';
import AnnouncementBanner from './AnnouncementBanner';


const NAV_ITEMS = [
  ['#home', 'Home'],
  ['#therapies', 'Therapies'],
  ['#kerala', 'Kerala Ayurvedic Treatments'],
  ['#testimonials', 'Testimonies'],
  ['#contact', 'Reach Us'],
  ['/blog', 'Blog'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const router = useRouter();
  const isOnBlog = router.pathname.startsWith('/blog');

  useEffect(() => {
    if (isOnBlog) return;
    const sectionIds = NAV_ITEMS
      .filter(([href]) => href.startsWith('#'))
      .map(([href]) => href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isOnBlog]);

  const handleClick = (e, href) => {
    if (!href.startsWith('#')) {
      setMenuOpen(false);
      return;
    }
    e.preventDefault();
    if (isOnBlog) {
      router.push(`/${href}`);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <AnnouncementBanner />
      <nav
        id="navbar"
        className="main-navbar"
        style={{
          position: 'fixed', left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.5rem 3rem',
          background: 'rgba(248,245,240,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(45,75,59,0.1)',
          transition: 'all 0.3s',
        }}
      >
        {/* Logo — clickable, links to homepage */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Image
            src="/sreevedaa-logo.png"
            alt="Sree Vedaa — Heal Naturally Live Happily"
            width={90}
            height={90}
            priority
            style={{ objectFit: 'contain', width: 90, height: 'auto' }}
          />
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV_ITEMS.map(([href, label]) => {
            const isActive = href.startsWith('#') ? activeSection === href : router.pathname.startsWith(href);
            const linkEl = href.startsWith('#') ? (
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#2D4B3B' : '#2c2c2c',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s, font-weight 0.2s',
                  borderBottom: isActive ? '2px solid #8C9D5E' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                }}
                onMouseOver={e => (e.target.style.color = '#2D4B3B')}
                onMouseOut={e => { if (!isActive) e.target.style.color = '#2c2c2c'; }}
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#2D4B3B' : '#2c2c2c',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s, font-weight 0.2s',
                  borderBottom: isActive ? '2px solid #8C9D5E' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                }}
              >
                {label}
              </Link>
            );
            return <li key={href}>{linkEl}</li>;
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Language Toggle */}
          <LanguageToggle />
          {/* Book Now CTA — hidden on mobile */}
          <a
            href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=1111"
            target="_blank"
            rel="noopener noreferrer"
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
            📅 Book Now
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
        <div className="mobile-menu" style={{
          position: 'fixed', left: 0, right: 0, zIndex: 999,
          background: 'rgba(248,245,240,0.97)',
          backdropFilter: 'blur(12px)',
          padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        }}>
          {NAV_ITEMS.map(([href, label]) => {
            const isActive = href.startsWith('#') ? activeSection === href : router.pathname.startsWith(href);
            return href.startsWith('#') ? (
              <a key={href} href={href} onClick={(e) => handleClick(e, href)}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#2D4B3B' : '#2c2c2c',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                }}>
                {label}
              </a>
            ) : (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#2D4B3B' : '#2c2c2c',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                }}>
                {label}
              </Link>
            );
          })}
          {/* Language Toggle in mobile menu */}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.25rem' }}>
            <LanguageToggle />
          </div>
          <a href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=1111" target="_blank" rel="noopener noreferrer" style={{
            background: '#2D4B3B', color: 'white',
            padding: '0.8rem', borderRadius: '2rem',
            textAlign: 'center', textDecoration: 'none', fontWeight: 600,
          }}>
            📅 Book Now
          </a>
        </div>
      )}

      <style>{`
        html { scroll-behavior: smooth; }
        .main-navbar { top: 36px; }
        .mobile-menu { top: 112px; }
        @media (max-width: 1024px) {
          .main-navbar { top: 32px; }
          .mobile-menu { top: 108px; }
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0.5rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
