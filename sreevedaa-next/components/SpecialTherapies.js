import { useState } from 'react';

export default function SpecialTherapies() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="special" className="fade-up" style={{ background: 'white', padding: '5rem 3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8C9D5E', fontWeight: 600, marginBottom: '0.75rem' }}>Signature Experiences</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, color: '#2D4B3B', lineHeight: 1.2, marginBottom: '1rem' }}>
          Special Therapies<br />Only at Sree Vedaa
        </h2>
        <p style={{ fontSize: '1rem', color: '#6b7068', lineHeight: 1.7, maxWidth: 560, margin: '0 auto', fontWeight: 300 }}>
          Premium healing modalities that set us apart from any other clinic in Visakhapatnam.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }} className="special-grid">
        {/* Kerala Card */}
        <div id="kerala" className="special-card" style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(45,75,59,0.1)', transition: 'all 0.3s' }}>
          <div style={{ padding: '2.5rem 2rem 2rem', background: 'linear-gradient(135deg,#e8f0e3 0%,#f5f0e8 100%)', position: 'relative' }}>
            <div style={{ display: 'inline-block', background: 'rgba(45,75,59,0.08)', color: '#2D4B3B', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: '2rem', border: '1px solid rgba(45,75,59,0.15)', marginBottom: '1rem' }}>Kerala Authentic</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600, color: '#2D4B3B', marginBottom: '0.5rem' }}>Kerala Ayurvedic Therapies</div>
            <div style={{ fontSize: '0.85rem', color: '#6b7068', lineHeight: 1.5 }}>Transported from God&apos;s Own Country — now in Vizag</div>
            <div style={{ position: 'absolute', right: '2rem', top: '2rem', fontSize: '3rem', opacity: 0.6 }}>🌴</div>
          </div>
          <div style={{ padding: '2rem' }}>
            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {['Panchakarma', 'Shirodhara', 'Mud Bath', 'Steam Bath'].map(t => (
                <span key={t} style={{ background: '#F8F5F0', border: '1px solid rgba(45,75,59,0.1)', padding: '0.4rem 0.9rem', borderRadius: '2rem', fontSize: '0.8rem', color: '#2D4B3B', fontWeight: 500 }}>{t}</span>
              ))}
            </div>

            {/* Intro paragraph — always visible */}
            <p style={{ fontSize: '0.85rem', color: '#6b7068', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Kerala Ayurvedic treatments are traditional healing therapies that focus on balancing the body, mind, and spirit using natural methods. These treatments include Panchakarma, Shirodhara, therapeutic massages, steam baths, and mud therapy, all designed to cleanse the body and restore internal balance.
            </p>

            {/* Expandable content */}
            <div
              className="kerala-expandable"
              style={{
                maxHeight: expanded ? '600px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out, opacity 0.4s ease',
                opacity: expanded ? 1 : 0,
              }}
            >
              <p style={{ fontSize: '0.85rem', color: '#6b7068', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Ayurveda works on the principle that health is achieved when the body&apos;s energies are in harmony. It uses herbal oils, natural medicines, and specialized therapies to support this balance.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#6b7068', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Unlike modern medicines that often target only symptoms, Ayurvedic treatments aim to identify and treat the root cause of health issues. These therapies are gentle, natural, and free from harmful chemicals, making them safe for long-term use.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#6b7068', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Kerala is especially famous for its authentic Ayurvedic practices, preserved and perfected over thousands of years.
              </p>

              {/* Benefits */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2D4B3B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>Benefits</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                  {['Improves blood circulation', 'Reduces stress', 'Relieves muscle stiffness', 'Detoxifies the body', 'Improves sleep quality', 'Supports weight management'].map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#4a5248' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#8C9D5E', flexShrink: 0 }} />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions treated */}
              <div style={{ marginBottom: '0.5rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2D4B3B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>Conditions Treated</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {['Joint pain', 'Back pain', 'Stress', 'Fatigue', 'Overall wellness'].map(c => (
                    <span key={c} style={{ background: 'rgba(140,157,94,0.12)', border: '1px solid rgba(140,157,94,0.25)', padding: '0.3rem 0.7rem', borderRadius: '2rem', fontSize: '0.75rem', color: '#2D4B3B', fontWeight: 500 }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Read More / Read Less toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#8C9D5E', fontSize: '0.82rem', fontWeight: 600,
                padding: '0.3rem 0', marginTop: '0.25rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                transition: 'color 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#6b7d42')}
              onMouseOut={e => (e.currentTarget.style.color = '#8C9D5E')}
            >
              {expanded ? 'Read Less ▲' : 'Read More ▼'}
            </button>

            {/* CTA Button */}
            <div style={{ marginTop: '1.25rem' }}>
              <a
                href="tel:9640553411"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'linear-gradient(135deg,#2D4B3B,#3d6450)', color: 'white',
                  padding: '0.75rem 1.8rem', borderRadius: '3rem',
                  fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(45,75,59,0.25)',
                  transition: 'all 0.3s',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(45,75,59,0.3)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(45,75,59,0.25)'; }}
              >
                Book Ayurvedic Session →
              </a>
            </div>
          </div>
        </div>

        {/* Chair Card */}
        <div className="special-card" style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(45,75,59,0.1)', transition: 'all 0.3s' }}>
          <div style={{ padding: '2.5rem 2rem 2rem', background: 'linear-gradient(135deg,#1e3829 0%,#2D4B3B 100%)', position: 'relative' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '1rem' }}>Advanced Technology</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>3D Therapeutic Massage Chair</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>22 Wellness Modes for full-body relief</div>
            <div style={{ position: 'absolute', right: '2rem', top: '2rem', fontSize: '3rem', opacity: 0.6 }}>💺</div>
          </div>
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {['Kneading', 'Shiatsu', 'Tapping', 'Knocking'].map(t => (
                <span key={t} style={{ background: 'rgba(45,75,59,0.08)', border: '1px solid rgba(45,75,59,0.15)', padding: '0.4rem 0.9rem', borderRadius: '2rem', fontSize: '0.8rem', color: '#2D4B3B', fontWeight: 500 }}>{t}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#6b7068', lineHeight: 1.6 }}>Our advanced 3D massage chair simulates expert hand techniques across 22 precise modes. Available as both single sessions and subscription packages.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <div style={{ background: '#b8952a', color: 'white', fontSize: '0.8rem', fontWeight: 600, padding: '0.4rem 1rem', borderRadius: '2rem' }}>22 Wellness Modes</div>
              <span style={{ fontSize: '0.8rem', color: '#6b7068' }}>Subscription available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cleansing banner */}
      <div style={{ background: 'linear-gradient(135deg,rgba(197,155,109,0.12),rgba(45,75,59,0.06))', border: '1px solid rgba(197,155,109,0.2)', borderRadius: '1.5rem', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '3rem' }}>🧬</div>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#2D4B3B', marginBottom: '0.4rem' }}>Special Cleansing Therapy</div>
          <div style={{ fontSize: '0.9rem', color: '#6b7068', lineHeight: 1.6, maxWidth: 600 }}>We help cleanse and eliminate chronic diseases like <strong style={{ color: '#2D4B3B' }}>Migraine, Ringworm, Psoriasis, PCOD, PCOS</strong> and many other health disorders through deep cellular cleansing protocols.</div>
        </div>
        <a href="tel:9640553411" style={{ marginLeft: 'auto', whiteSpace: 'nowrap', background: 'linear-gradient(135deg,#2D4B3B,#3d6450)', color: 'white', padding: '0.9rem 2rem', borderRadius: '3rem', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Learn More
        </a>
      </div>

      <style>{`
        .special-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(45,75,59,0.12); }
        @media(max-width:1024px){ .special-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
