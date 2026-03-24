import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="fade-up" style={{ background: '#ede8e0', padding: '5rem 3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8C9D5E', fontWeight: 600, marginBottom: '0.75rem' }}>Patient Stories</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, color: '#2D4B3B', lineHeight: 1.2, marginBottom: '1rem' }}>
          Real People,<br />Real Recovery
        </h2>
        <p style={{ fontSize: '1rem', color: '#6b7068', lineHeight: 1.7, maxWidth: 560, margin: '0 auto', fontWeight: 300 }}>
          Hear from patients who found lasting relief through natural therapy in Visakhapatnam.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="testi-grid">
        {testimonials.map(t => (
          <div key={t.name} className="testi-card" style={{
            background: 'white', borderRadius: '1.25rem', padding: '2rem',
            border: '1px solid rgba(45,75,59,0.07)', transition: 'all 0.3s',
            position: 'relative',
          }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '5rem', lineHeight: 1, color: 'rgba(45,75,59,0.07)', position: 'absolute', top: '0.5rem', left: '1.5rem' }}>&quot;</div>
            <div style={{ color: '#b8952a', fontSize: '0.9rem', marginBottom: '1rem' }}>{'★'.repeat(t.stars)}</div>
            <p style={{ fontSize: '0.9rem', color: '#6b7068', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>&ldquo;{t.text}&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #8C9D5E, #2D4B3B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'white', flexShrink: 0 }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#2c2c2c' }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7068' }}>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .testi-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(45,75,59,0.1); }
        @media(max-width:1024px){ .testi-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
