import { conditions } from '../data/conditions';

export default function ConditionsSection() {
  return (
    <section id="conditions" className="fade-up" style={{
      background: 'linear-gradient(160deg, #2D4B3B 0%, #1e3829 100%)',
      color: 'white', position: 'relative', overflow: 'hidden', padding: '5rem 3rem',
    }}>
      <div style={{ content:'', position:'absolute', top:'-50%', right:'-10%', width:600, height:600, borderRadius:'50%', background:'rgba(140,157,94,0.08)', pointerEvents:'none' }} />
      <div style={{ textAlign:'center', marginBottom:'3rem', position:'relative', zIndex:1 }}>
        <div style={{ fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'0.12em', color:'#b5c98a', fontWeight:600, marginBottom:'0.75rem' }}>Conditions We Treat</div>
        <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(2rem,3vw,2.8rem)', fontWeight:400, color:'white', lineHeight:1.2, marginBottom:'1rem' }}>
          We Heal What<br />Medicines Can&apos;t Fix
        </h2>
        <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.6)', lineHeight:1.7, maxWidth:560, margin:'0 auto', fontWeight:300 }}>
          Looking for natural pain treatment in Vizag? We treat these conditions with zero side effects.
        </p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem', position:'relative', zIndex:1 }} className="conditions-grid">
        {conditions.map(c => (
          <div key={c.name} className="condition-item" style={{
            background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:'1rem', padding:'1.5rem', transition:'all 0.3s',
          }}>
            <div style={{ fontSize:'1.8rem', marginBottom:'0.75rem' }}>{c.icon}</div>
            <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.1rem', fontWeight:600, color:'white', marginBottom:'0.3rem' }}>{c.name}</div>
            <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.5)', lineHeight:1.4 }}>{c.note}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign:'center', marginTop:'3rem', position:'relative', zIndex:1 }}>
        <a href="tel:9640553411" style={{
          background:'linear-gradient(135deg,#2D4B3B,#3d6450)', color:'white',
          padding:'0.9rem 2rem', borderRadius:'3rem', fontSize:'0.9rem', fontWeight:500,
          textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'0.5rem',
          boxShadow:'0 8px 24px rgba(45,75,59,0.25)',
        }}>📞 Talk to Our Expert — Free</a>
      </div>
      <style>{`
        .condition-item:hover { background:rgba(140,157,94,0.15) !important; border-color:rgba(140,157,94,0.3) !important; transform:translateY(-4px); }
        @media(max-width:1024px){ .conditions-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
