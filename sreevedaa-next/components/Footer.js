import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      background: '#111f18',
      color: 'rgba(255,255,255,0.6)',
      padding: '2rem 3rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem',
    }}>
      {/* Left — Logo + name + address */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '6px', flexShrink: 0 }}>
          <Image
            src="/sreevedaa-logo.png"
            alt="Sree Vedaa Logo"
            width={100}
            height={75}
            style={{ objectFit: 'contain', width: 100, height: 'auto', display: 'block' }}
          />
        </div>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.9)', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Sree Vedaa Sujok &amp; Acupuncture Therapy Centre
          </div>
          <div>
            Plot No 7, Sector 12, MVP Colony, Visakhapatnam ·{' '}
            <a href="tel:9640553411" style={{ color: '#b5c98a', textDecoration: 'none' }}>9640553411</a>
          </div>
        </div>
      </div>

      {/* Right — SEO keywords + copyright */}
      <div style={{ textAlign: 'right' }}>
        <div>Acupuncture in Visakhapatnam · Sujok Therapy Vizag · Natural Pain Treatment Vizag</div>
        <div style={{ marginTop: '0.3rem' }}>© {new Date().getFullYear()} Sree Vedaa. All rights reserved.</div>
      </div>
    </footer>
  );
}
