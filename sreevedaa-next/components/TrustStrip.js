const trustItems = [
  { icon: '🌿', text: 'Drug-Free Treatment' },
  { icon: '🏅', text: 'Certified Therapists' },
  { icon: '🏠', text: 'Home Services Available' },
  { icon: '🕐', text: 'Open 7AM – 8PM Daily' },
  { icon: '📞', text: 'Free First Consultation' },
];

export default function TrustStrip() {
  return (
    <div style={{
      background: '#2D4B3B', padding: '1rem 3rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: '3rem', flexWrap: 'wrap',
    }}>
      {trustItems.map(({ icon, text }) => (
        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 500 }}>
          <span style={{ fontSize: '1rem' }}>{icon}</span> {text}
        </div>
      ))}
    </div>
  );
}
