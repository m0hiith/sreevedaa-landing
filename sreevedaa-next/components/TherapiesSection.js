import { useState } from 'react';

const therapies = [
  {
    title: "Acupuncture Therapy",
    short_description: "Relieves pain and restores your body's natural energy balance.",
    full_content: "Acupuncture is a time-honoured healing method where ultra-fine needles are gently placed at precise points on the body to restore balanced energy flow. It supports the body in healing itself — improving blood circulation, calming the nervous system, and easing pain at its root rather than masking it. Completely chemical-free and deeply safe, it is trusted for conditions like back pain, migraines, stress, and hormonal imbalances.",
    icon: "🪡",
    tag: "Most Popular",
    accent: "linear-gradient(135deg, #e8f0e3 0%, #f5f0e8 100%)",
  },
  {
    title: "Sujok Therapy",
    short_description: "Healing your whole body through pressure points on hands and feet.",
    full_content: "Sujok therapy rests on a beautiful principle — your hands and feet are a mirror of your entire body. By applying gentle pressure to specific reflex points, it wakes up the body's own healing intelligence. It requires no medications and carries no side effects, making it ideal for people of all ages. Commonly used for pain relief, stress, diabetes support, thyroid conditions, and digestive concerns.",
    icon: "🖐️",
    tag: "Drug-Free",
    accent: "linear-gradient(135deg, #f0ede8 0%, #e8f0ec 100%)",
  },
  {
    title: "Cupping Therapy",
    short_description: "Draws out toxins and revives circulation with gentle suction.",
    full_content: "Cupping therapy places warm suction cups on the skin to lift and loosen the soft tissue beneath. This gentle pull encourages fresh blood to flow into tired or tense areas, flushes out accumulated toxins, and deeply relaxes tight muscles. People often describe a sense of lightness and relief immediately after. It works beautifully for chronic pain, fatigue, stress, and sluggish circulation — all without any medications.",
    icon: "🫙",
    tag: "Detox",
    accent: "linear-gradient(135deg, #ede8f0 0%, #f5f0e8 100%)",
  },
  {
    title: "Reflexology",
    short_description: "Precise pressure on feet and hands that heals from within.",
    full_content: "Reflexology is founded on the understanding that specific zones on your feet, hands, and ears correspond directly to every organ and system in your body. By applying targeted pressure to these zones, a trained therapist stimulates organ function, improves circulation, and helps the body reset and recover. It is wonderfully effective for stress relief, improving sleep quality, and supporting healthy digestion.",
    icon: "🦶",
    tag: "Full Body",
    accent: "linear-gradient(135deg, #e8f0e3 0%, #ede8f0 100%)",
  },
  {
    title: "Panchakarma",
    short_description: "Ayurveda's deepest cleanse — for body, mind, and immunity.",
    full_content: "Panchakarma is the cornerstone of Ayurvedic medicine and one of the most thorough detox journeys available. It systematically eliminates accumulated toxins from every tissue and channel in the body, restoring the natural harmony of all three doshas. The result is sharper immunity, stronger digestion, lighter energy, and a renewed sense of overall well-being — achieved entirely through gentle, natural Ayurvedic methods.",
    icon: "🌿",
    tag: "Ayurvedic",
    accent: "linear-gradient(135deg, #e0ede6 0%, #f5f0e8 100%)",
  },
  {
    title: "Shirodhara",
    short_description: "Warm oil therapy that melts away stress and quiets the mind.",
    full_content: "Shirodhara is one of Ayurveda's most serene and powerful therapies. A continuous, steady stream of warm medicated oil is poured over the centre of the forehead, directly calming the nervous system at its source. The experience is deeply meditative — reducing stress, dissolving anxiety, and relieving chronic insomnia. Many guests report a profound stillness of mind and improved mental clarity that stays with them long after the session.",
    icon: "🫧",
    tag: "Signature",
    accent: "linear-gradient(135deg, #f5f0e8 0%, #e8f0e3 100%)",
  },
];

const ICONS = {
  chevron: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  leaf: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
};

export default function TherapiesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="therapies" className="fade-up" style={{ background: '#F8F5F0', padding: '5rem 3rem' }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{
          fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em',
          color: '#8C9D5E', fontWeight: 600, marginBottom: '0.75rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
        }}>
          {ICONS.leaf}
          All Our Therapies
          {ICONS.leaf}
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2rem, 3vw, 2.8rem)',
          fontWeight: 400, color: '#2D4B3B', lineHeight: 1.2, marginBottom: '1rem',
        }}>
          Healing That Feels <br />Natural &amp; Safe
        </h2>
        <p style={{
          fontSize: '1rem', color: '#6b7068', lineHeight: 1.7,
          maxWidth: 560, margin: '0 auto', fontWeight: 300,
        }}>
          Every therapy we offer is drug-free, side-effect-free, and rooted in centuries of natural healing wisdom — personalised for your body.
        </p>
      </div>

      {/* Therapy accordion cards */}
      <div className="therapy-list" style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {therapies.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`therapy-card${isOpen ? ' therapy-card--open' : ''}`}
              onClick={() => toggleCard(index)}
              role="button"
              aria-expanded={isOpen}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleCard(index)}
              style={{
                background: 'white',
                border: `1px solid ${isOpen ? 'rgba(45,75,59,0.25)' : 'rgba(45,75,59,0.08)'}`,
                borderRadius: '1.25rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                boxShadow: isOpen ? '0 12px 40px rgba(45,75,59,0.09)' : '0 2px 10px rgba(45,75,59,0.04)',
              }}
            >
              {/* Card header row */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                padding: '1.5rem 2rem',
                background: isOpen ? item.accent : 'white',
                transition: 'background 0.4s ease',
              }}>
                {/* Icon bubble */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'rgba(45,75,59,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', flexShrink: 0,
                  transition: 'transform 0.3s',
                  transform: isOpen ? 'scale(1.08)' : 'scale(1)',
                }}>
                  {item.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.2rem', fontWeight: 600, color: '#2D4B3B',
                    }}>
                      {item.title}
                    </span>
                    {item.tag && (
                      <span style={{
                        background: 'rgba(45,75,59,0.08)', color: '#2D4B3B',
                        fontSize: '0.68rem', padding: '0.2rem 0.6rem',
                        borderRadius: '1rem', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p style={{
                    fontSize: '0.875rem', color: '#6b7068', lineHeight: 1.5,
                    margin: 0, fontWeight: 300,
                  }}>
                    {item.short_description}
                  </p>
                </div>

                {/* Chevron */}
                <div style={{
                  color: '#2D4B3B', flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  opacity: 0.7,
                }}>
                  {ICONS.chevron}
                </div>
              </div>

              {/* Expanded content */}
              <div className={`therapy-body${isOpen ? ' therapy-body--open' : ''}`}>
                <div style={{ padding: '0 2rem 1.75rem 4.75rem' }}>
                  <div style={{
                    width: '2.5rem', height: '2px',
                    background: 'linear-gradient(90deg,#2D4B3B,#8C9D5E)',
                    borderRadius: '2px', marginBottom: '1rem',
                  }} />
                  <p style={{
                    fontSize: '0.925rem', color: '#5a5f57', lineHeight: 1.8,
                    margin: 0, fontWeight: 300,
                  }}>
                    {item.full_content}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      marginTop: '1.25rem',
                      color: '#2D4B3B', fontSize: '0.83rem', fontWeight: 500,
                      textDecoration: 'none', letterSpacing: '0.02em',
                      borderBottom: '1px solid rgba(45,75,59,0.3)',
                      paddingBottom: '0.1rem',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                    className="therapy-link"
                  >
                    Book a session →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom trust note */}
      <div style={{
        textAlign: 'center', marginTop: '3rem',
        fontSize: '0.82rem', color: '#8C9D5E', fontWeight: 400,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
      }}>
        {ICONS.leaf}
        All therapies are 100% natural, drug-free &amp; personalised to your needs
        {ICONS.leaf}
      </div>

      <style>{`
        .therapy-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .therapy-body--open {
          max-height: 400px;
        }
        .therapy-card:focus-visible {
          outline: 2px solid rgba(45,75,59,0.4);
          outline-offset: 2px;
        }
        .therapy-link:hover {
          color: #8C9D5E !important;
          border-color: #8C9D5E !important;
        }
        @media (max-width: 640px) {
          #therapies { padding: 4rem 1.25rem !important; }
          .therapy-card > div:first-child { padding: 1.25rem 1rem !important; }
          .therapy-body--open > div { padding: 0 1rem 1.5rem 1rem !important; }
        }
      `}</style>
    </section>
  );
}
