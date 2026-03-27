export default function HeroSection() {
  return (
    <section id="hero" style={{
      minHeight: '85vh',
      background: 'linear-gradient(155deg, #e8ede3 0%, #f5f0e8 40%, #eae5d8 100%)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '8rem 3rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }} className="hero-section">
      {/* bg accent */}
      <div style={{
        content: '', position: 'absolute', top: 0, right: 0,
        width: '55%', height: '100%',
        background: 'linear-gradient(135deg, rgba(45,75,59,0.06) 0%, rgba(140,157,94,0.1) 100%)',
        clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
        pointerEvents: 'none',
      }} />

      {/* Leaf decorations */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
        {[{ t: '10%', l: '5%', fs: '6rem', d: '0s' }, { t: '60%', r: '8%', fs: '10rem', d: '-3s' }, { b: '10%', l: '30%', fs: '5rem', d: '-5s' }].map((s, i) => (
          <div key={i} style={{
            position: 'absolute', opacity: 0.07, fontSize: s.fs,
            top: s.t, left: s.l, right: s.r, bottom: s.b,
            animation: `floatLeaf 8s ease-in-out infinite`,
            animationDelay: s.d,
          }}>🍃</div>
        ))}
      </div>

      {/* Content */}
      <div className="fade-up hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(45,75,59,0.08)', border: '1px solid rgba(45,75,59,0.15)',
          padding: '0.4rem 1rem', borderRadius: '2rem',
          fontSize: '0.78rem', color: '#2D4B3B', fontWeight: 500, letterSpacing: '0.06em',
          marginBottom: '1.5rem', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, background: '#8C9D5E', borderRadius: '50%', display: 'inline-block' }} />
          Natural Healing · Drug-Free · Visakhapatnam
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
          fontWeight: 400, lineHeight: 1.15, color: '#2D4B3B',
          marginBottom: '1.2rem',
        }}>
          Heal Naturally with{' '}
          <em style={{ fontStyle: 'italic', color: '#8C9D5E' }}>Sujok &amp; Acupuncture</em>
          {' '}Therapy
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#6b7068', lineHeight: 1.7, maxWidth: 500, marginBottom: '2.5rem', fontWeight: 300 }}>
          Permanent relief from back pain, stress, PCOD, and lifestyle diseases — without medicines or side effects. Trusted by 1000+ patients in Vizag.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="tel:9640553411" style={{
            background: 'linear-gradient(135deg, #2D4B3B, #3d6450)',
            color: 'white', padding: '0.9rem 2rem', borderRadius: '3rem',
            fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(45,75,59,0.25)',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s',
          }}>📅 Book Appointment</a>
          <a href="https://wa.me/919640553411?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Sree%20Vedaa" target="_blank" rel="noreferrer" style={{
            background: '#25D366', color: 'white', padding: '0.9rem 2rem', borderRadius: '3rem',
            fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s',
          }}>💬 Chat on WhatsApp</a>
        </div>

        <div style={{
          display: 'flex', gap: '2.5rem', marginTop: '3rem',
          paddingTop: '2rem', borderTop: '1px solid rgba(45,75,59,0.12)',
        }} className="hero-stats">
          {[['1000+', 'Happy Patients'], ['15+', 'Therapy Types'], ['10+', 'Years Experience']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: '#2D4B3B', lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7068', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.2rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual card */}
      <div className="hero-visual" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 380, height: 480 }}>
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(145deg, rgba(45,75,59,0.05), rgba(140,157,94,0.12))',
            borderRadius: '2rem', border: '1px solid rgba(45,75,59,0.1)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', backdropFilter: 'blur(4px)', overflow: 'hidden', position: 'relative',
          }}>
            <div style={{ fontSize: '5rem' }}>🌿</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#2D4B3B', fontWeight: 600, textAlign: 'center' }}>Sree Vedaa Therapy</div>
            <div style={{ fontSize: '0.85rem', color: '#6b7068', textAlign: 'center', maxWidth: 240, lineHeight: 1.5 }}>Authentic Ayurvedic &amp; Acupuncture healing at MVP Colony, Visakhapatnam</div>
          </div>
          {[
            { style: { top: -15, right: -20, animationDelay: '-1s' }, icon: '🎯', text: 'Drug-Free Healing' },
            { style: { bottom: 60, left: -30, animationDelay: '-2s' }, icon: '✅', text: '1000+ Cured' },
            { style: { bottom: -15, right: 30, animationDelay: '-3s' }, icon: '🏡', text: 'Home Services' },
          ].map(({ style, icon, text }) => (
            <div key={text} style={{
              position: 'absolute', background: 'white', borderRadius: '1rem',
              padding: '0.7rem 1rem', boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.8rem', fontWeight: 500, color: '#2c2c2c',
              animation: 'float 4s ease-in-out infinite', ...style,
            }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-section { grid-template-columns: 1fr !important; text-align: center; padding: 7rem 2rem 4rem !important; }
          .hero-visual { display: none !important; }
          .hero-stats { justify-content: center; }
        }
        @media (max-width: 600px) {
          .hero-stats { flex-direction: column; align-items: center; gap: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
