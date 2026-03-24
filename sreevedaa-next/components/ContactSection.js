export default function ContactSection() {
  return (
    <section id="contact" className="fade-up" style={{
      background: 'linear-gradient(160deg, #2D4B3B 0%, #1b3326 100%)',
      color: 'white', padding: '5rem 3rem',
    }}>
      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#b5c98a', fontWeight: 600, marginBottom: '0.75rem' }}>Find Us</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 400, color: 'white', lineHeight: 1.2, marginBottom: '3rem' }}>
        Book Your<br />Free Consultation
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="contact-grid">
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { icon: '📞', label: 'Call Us', values: [
                { text: 'P Kalyani — 9640553411', href: 'tel:9640553411' },
                { text: 'P Uma Shankar Rao — 6281949281', href: 'tel:6281949281' },
              ]},
              { icon: '📍', label: 'Address', values: [{ text: 'Plot No 7, Sector 12, MVP Colony, Visakhapatnam, Andhra Pradesh' }] },
              { icon: '🕐', label: 'Clinic Hours', values: [{ text: 'Monday – Saturday: 7:00 AM – 8:00 PM' }, { text: 'Sunday by appointment', muted: true }] },
              { icon: '🏠', label: 'Home Services', values: [{ text: 'Available across Visakhapatnam' }] },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(255,255,255,0.1)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{item.label}</div>
                  {item.values.map(v => (
                    <div key={v.text} style={{ fontSize: '0.95rem', color: v.muted ? 'rgba(255,255,255,0.5)' : 'white', fontWeight: v.muted ? 400 : 500 }}>
                      {v.href ? <a href={v.href} style={{ color: 'white', textDecoration: 'none' }}>{v.text}</a> : v.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="tel:9640553411" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0.9rem 1.5rem', borderRadius: '3rem', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', transition: 'all 0.2s' }}>
              📞 Call P Kalyani — 9640553411
            </a>
            <a href="tel:6281949281" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0.9rem 1.5rem', borderRadius: '3rem', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', transition: 'all 0.2s' }}>
              📞 Call P Uma Shankar Rao — 6281949281
            </a>
            <a href="https://wa.me/919640553411?text=Hi%2C%20I'd%20like%20to%20book%20a%20free%20consultation%20at%20Sree%20Vedaa" target="_blank" rel="noreferrer" style={{ background: '#25D366', color: 'white', padding: '0.9rem 1.5rem', borderRadius: '3rem', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', transition: 'all 0.2s' }}>
              💬 WhatsApp for Appointment
            </a>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1.25rem', overflow: 'hidden', minHeight: 320, border: '1px solid rgba(255,255,255,0.1)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6!2d83.3425!3d17.7384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943b6f5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sMVP%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%" height="100%"
            style={{ border: 'none', minHeight: 320 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sree Vedaa on Google Maps"
          />
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .contact-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
