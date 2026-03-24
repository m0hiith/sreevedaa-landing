import { pricingPlans } from '../data/pricing';

export default function PricingSection() {
  return (
    <section id="pricing" className="fade-up" style={{ background: 'white', padding: '5rem 3rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8C9D5E', fontWeight: 600, marginBottom: '0.75rem' }}>Plans &amp; Pricing</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, color: '#2D4B3B', lineHeight: 1.2, marginBottom: '1rem' }}>
          Affordable Natural<br />Healing for Everyone
        </h2>
        <p style={{ fontSize: '1rem', color: '#6b7068', lineHeight: 1.7, maxWidth: 560, margin: '0 auto', fontWeight: 300 }}>
          Transparent, honest pricing — no hidden charges.
        </p>
      </div>

      {/* Free consultation banner */}
      <div style={{ background: 'linear-gradient(135deg,rgba(197,155,109,0.1),rgba(45,75,59,0.05))', border: '1px solid rgba(197,155,109,0.2)', borderRadius: '1.25rem', padding: '1.5rem 2rem', margin: '2rem 0 3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '1.8rem' }}>🎁</span>
        <div>
          <strong style={{ display: 'block', color: '#2D4B3B', fontSize: '1rem', marginBottom: '0.2rem' }}>Free First Consultation — No Commitment Needed</strong>
          <span style={{ fontSize: '0.85rem', color: '#6b7068' }}>Come in, share your concerns, and get a personalized treatment recommendation at zero cost.</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="pricing-grid">
        {pricingPlans.map(plan => (
          <div key={plan.name} className="price-card" style={{
            borderRadius: '1.5rem', overflow: 'hidden', position: 'relative',
            border: plan.featured ? '2px solid #2D4B3B' : '1px solid rgba(45,75,59,0.1)',
            boxShadow: plan.featured ? '0 8px 30px rgba(45,75,59,0.15)' : 'none',
            transition: 'all 0.3s',
          }}>
            {plan.badge && (
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#b8952a', color: 'white', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.25rem 0.7rem', borderRadius: '2rem' }}>
                {plan.badge}
              </div>
            )}
            <div style={{ padding: '2rem 1.75rem 1.5rem', background: plan.featured ? 'linear-gradient(135deg,#2D4B3B,#1e3829)' : '#F8F5F0' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 600, color: plan.featured ? 'white' : '#2D4B3B' }}>{plan.name}</div>
              <div style={{ fontSize: '0.8rem', color: plan.featured ? 'rgba(255,255,255,0.65)' : '#6b7068', marginTop: '0.25rem' }}>{plan.desc}</div>
            </div>
            <div style={{ padding: '1.75rem' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 600, color: '#2D4B3B', lineHeight: 1, marginBottom: '0.25rem' }}>
                {plan.price}<span style={{ fontSize: '1rem', fontWeight: 400 }}>{plan.priceSuffix}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#6b7068', textDecoration: 'line-through', marginBottom: '1.25rem' }}>{plan.originalPrice}</div>
              <ul style={{ listStyle: 'none', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ fontSize: '0.85rem', color: '#2c2c2c', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#8C9D5E', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href={plan.cta.href} target={plan.cta.external ? '_blank' : undefined} rel={plan.cta.external ? 'noreferrer' : undefined}
                style={{
                  display: 'block', textAlign: 'center', width: '100%',
                  background: plan.featured ? '#b8952a' : '#ede8e0',
                  color: plan.featured ? 'white' : '#2D4B3B',
                  border: plan.featured ? 'none' : '1px solid rgba(45,75,59,0.2)',
                  padding: '0.8rem', borderRadius: '2rem',
                  fontSize: '0.88rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer',
                }}
                className="btn-book">
                {plan.cta.text}
              </a>
            </div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.82rem', color: '#6b7068' }}>* Prices are indicative. Exact pricing shared after consultation. All packages include free first session.</p>
      <style>{`
        .price-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(45,75,59,0.12) !important; }
        .btn-book:hover { background:#2D4B3B !important; color:white !important; }
        @media(max-width:1024px){ .pricing-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
