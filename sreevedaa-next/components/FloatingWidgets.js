export default function FloatingWidgets() {
  return (
    <>
      {/* Sticky call bar — mobile only */}
      <a href="tel:9640553411" style={{
        display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999,
        background: '#2D4B3B', color: 'white',
        textAlign: 'center', padding: '1rem',
        fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none',
      }} className="sticky-call">
        📞 Call Now — Free Consultation
      </a>

      {/* WhatsApp bubble */}
      <a href="https://wa.me/919640553411?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 998,
          width: 56, height: 56, borderRadius: '50%',
          background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', textDecoration: 'none',
          animation: 'pulse-wa 3s ease-in-out infinite',
          transition: 'all 0.3s',
        }} className="wa-float">
        💬
      </a>

      <style>{`
        @media(max-width:1024px){
          .sticky-call { display: block !important; }
          .wa-float { bottom: 80px !important; }
        }
      `}</style>
    </>
  );
}
