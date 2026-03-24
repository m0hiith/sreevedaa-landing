const benefits = [
  { icon: '🌿', title: '100% Drug-Free', desc: 'No medicines, no chemicals, no addiction. Pure natural healing.' },
  { icon: '❤️', title: 'Improves Blood Circulation', desc: 'Therapies stimulate lymphatic and circulatory flow throughout the body.' },
  { icon: '😴', title: 'Better Sleep & Relaxation', desc: 'Deep healing sessions promote restorative sleep naturally.' },
  { icon: '🧹', title: 'Full Body Detoxification', desc: 'Remove toxins accumulated from stress, diet and environment.' },
  { icon: '🎯', title: 'Personalized Treatment Plan', desc: 'Every patient gets a custom therapy plan based on their body type and condition.' },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="fade-up" style={{ background: '#F8F5F0', padding: '5rem 3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="benefits-wrap">
        <div>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8C9D5E', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'block', width: 30, height: 1, background: '#8C9D5E' }} /> Why Choose Natural
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, color: '#2D4B3B', lineHeight: 1.2, marginBottom: '1rem' }}>
            Healing Without<br />Harmful Side Effects
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7068', lineHeight: 1.7, maxWidth: 560, fontWeight: 300, marginBottom: '2rem' }}>
            Unlike conventional medicine, our treatments work with your body — not against it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {benefits.map(b => (
              <div key={b.title} className="benefit-row" style={{
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                padding: '1.2rem', borderRadius: '1rem',
                background: 'white', border: '1px solid rgba(45,75,59,0.07)',
                transition: 'all 0.25s',
              }}>
                <div style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(45,75,59,0.08)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  {b.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#2D4B3B' }}>{b.title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#6b7068', marginTop: '0.2rem', lineHeight: 1.4 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(145deg, #2D4B3B, #1e3829)',
          borderRadius: '2rem', padding: '3rem', color: 'white', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ content: "'🌿'", position: 'absolute', fontSize: '8rem', bottom: '-1rem', right: '-1rem', opacity: 0.1 }}>🌿</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 400, marginBottom: '0.75rem' }}>Heal from the Root,<br />Not Just the Symptom</div>
          <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Sree Vedaa&apos;s integrated approach targets the root cause of your ailments using time-tested therapies from Sujok, Acupuncture and Kerala Ayurveda — all under one roof in Visakhapatnam.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['🏠 Home Visits', '✅ Safe & Effective', '🎓 Certified Experts', '🌿 Holistic Wellness'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 0.9rem', borderRadius: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .benefit-row:hover { box-shadow:0 8px 24px rgba(45,75,59,0.08); transform:translateX(4px); }
        @media(max-width:1024px){ .benefits-wrap{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
