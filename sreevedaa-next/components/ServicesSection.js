import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="fade-up" style={{ background: 'white', padding: '5rem 3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8C9D5E', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          Our Therapies
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, color: '#2D4B3B', lineHeight: 1.2, marginBottom: '1rem' }}>
          Ancient Healing,<br />Modern Care
        </h2>
        <p style={{ fontSize: '1rem', color: '#6b7068', lineHeight: 1.7, maxWidth: 560, margin: '0 auto', fontWeight: 300 }}>
          Each therapy is personalized to your body&apos;s needs — rooted in centuries-old traditions of Ayurveda and natural healing.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="services-grid">
        {services.map((s, i) => (
          <div key={s.name} className="service-card" style={{
            background: '#F8F5F0', border: '1px solid rgba(45,75,59,0.08)',
            borderRadius: '1.25rem', padding: '2rem 1.75rem',
            transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)', cursor: 'pointer',
            position: 'relative', overflow: 'hidden',
            animationDelay: `${i * 0.08}s`,
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 600, color: '#2D4B3B', marginBottom: '0.5rem' }}>{s.name}</div>
            <div style={{ fontSize: '0.85rem', color: '#6b7068', lineHeight: 1.5 }}>{s.benefit}</div>
            {s.tag && (
              <div style={{ display: 'inline-block', marginTop: '1rem', background: 'rgba(45,75,59,0.08)', color: '#2D4B3B', fontSize: '0.72rem', padding: '0.25rem 0.7rem', borderRadius: '1rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {s.tag}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        .service-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#2D4B3B,#8C9D5E); transform:scaleX(0); transform-origin:left; transition:transform 0.3s; }
        .service-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(45,75,59,0.1); }
        .service-card:hover::after { transform:scaleX(1); }
        @media(max-width:1024px){ .services-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:600px){ .services-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
