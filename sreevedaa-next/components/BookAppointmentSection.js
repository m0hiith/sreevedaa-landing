export default function BookAppointmentSection() {
  const appointmentUrl =
    'https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=1111';

  return (
    <section
      id="book-appointment"
      className="fade-up"
      style={{
        background: '#ffffff',
        padding: '5rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-60px',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(140,157,94,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-40px',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(45,75,59,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content wrapper */}
      <div
        style={{
          maxWidth: 680,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(45,75,59,0.06)',
            border: '1px solid rgba(45,75,59,0.12)',
            padding: '0.35rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.72rem',
            color: '#2D4B3B',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: '#8C9D5E',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }}
          />
          Online Booking
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            color: '#2D4B3B',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}
        >
          Book Your Appointment
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: '1.05rem',
            color: '#6b7068',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto 2.5rem',
            fontWeight: 300,
          }}
        >
          Schedule your consultation quickly and easily with our clinic.
        </p>

        {/* CTA Button */}
        <a
          href={appointmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="book-appt-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'linear-gradient(135deg, #2D4B3B 0%, #3d6450 50%, #4a7a5e 100%)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '3rem',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow:
              '0 8px 30px rgba(45,75,59,0.30), 0 2px 8px rgba(45,75,59,0.15)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            letterSpacing: '0.02em',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Calendar icon SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          Book Appointment
        </a>

        {/* Trust text */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.82rem',
            color: '#9a9e96',
            fontWeight: 400,
          }}
        >
          {/* Shield icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8C9D5E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          Secure online appointment booking available 24/7
        </div>

        {/* Divider line */}
        <div
          style={{
            width: 60,
            height: 2,
            background:
              'linear-gradient(90deg, transparent, rgba(140,157,94,0.4), transparent)',
            margin: '2rem auto 0',
            borderRadius: 2,
          }}
        />
      </div>

      <style>{`
        .book-appt-btn:hover {
          transform: scale(1.05) translateY(-2px) !important;
          box-shadow: 0 14px 40px rgba(45,75,59,0.35), 0 4px 12px rgba(45,75,59,0.2) !important;
        }
        .book-appt-btn:active {
          transform: scale(0.98) !important;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        @media (max-width: 768px) {
          #book-appointment {
            padding: 4rem 1.5rem !important;
          }
          .book-appt-btn {
            width: 100%;
            justify-content: center;
            padding: 1.1rem 2rem !important;
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}
