import { useState } from 'react';

/* ═══════════════════════════════════════════════════════════
   Pricing Data
   ═══════════════════════════════════════════════════════════ */

const singleSessionPrices = [
  { name: 'Siro Abhyanga (Head Massage)', price: '₹499' },
  { name: 'Abhyanga (Body Massage)', price: '₹1499' },
  { name: 'Shirodhara', price: '₹1999' },
  { name: 'Cream Full Body Massage', price: '₹1999' },
  { name: 'Karna Purana', price: '₹799' },
  { name: 'Netra Tarpana', price: '₹499' },
  { name: 'Udwarthana', price: '₹1799' },
  { name: 'Shashtika Shali Pinda Sweda (SSPS)', price: '₹1999' },
  { name: 'Churna Pinda Sweda', price: '₹1799' },
  { name: 'Patra Potli Sweda (PPS)', price: '₹1799' },
  { name: 'Face Massage', price: '₹499' },
  { name: 'Foot Massage', price: '₹799' },
  { name: 'Janu Vasti (Arthritis)', price: '₹999' },
  { name: 'Kati Vasti (Back & Sciatica)', price: '₹999' },
  { name: 'Greeva Vasti (Spondylitis)', price: '₹999' },
  { name: 'Merudanda Vasti', price: '₹1199' },
  { name: 'Mud Pack', price: '₹899' },
  { name: 'Uttara Vasti', price: '₹799' },
];

const autismTherapyPrices = [
  { name: 'Thalam', price: '₹499' },
  { name: 'Thalapothichil', price: '₹499' },
  { name: 'Shiro Abhyanga', price: '₹499' },
  { name: 'Abhyanga', price: '₹1999' },
  { name: 'Shirodhara', price: '₹1999' },
  { name: 'Shashtika Shali Pinda Sweda', price: '₹2499' },
  { name: 'Nasya', price: '₹999' },
  { name: 'Udwarthana', price: '₹1799' },
  { name: 'Churna Pinda Sweda', price: '₹1799' },
  { name: 'Pizhichil', price: '₹1999' },
  { name: 'Nabhi Vasti', price: '₹1999' },
  { name: 'Vasti Oil', price: '₹1999' },
  { name: 'Vasti Kashaya', price: '₹2499' },
];

const specialPackages = [
  { num: 1, name: 'Abhyanga + Swedhana', duration: '3 Months, 10 Sessions', price: '₹13,499' },
  { num: 2, name: 'Udwarthana', duration: '4 Months, 12 Sessions', price: '₹19,999' },
  { num: 3, name: 'Shirodhara', duration: '4 Months, 16 Sessions', price: '₹29,999' },
  { num: 4, name: 'Virechana Detox Package', duration: '10 Days', price: '₹14,999' },
];

const TABS = [
  { id: 'single', label: 'Single Session Prices' },
  { id: 'autism', label: 'Autism Therapy Packages' },
  { id: 'special', label: 'Special Packages' },
];

/* ═══════════════════════════════════════════════════════════
   Dotted-Leader Price Row
   ═══════════════════════════════════════════════════════════ */
function PriceRow({ name, price, index }) {
  return (
    <div className="price-row" style={{ animationDelay: `${index * 0.04}s` }}>
      <span className="price-name">{name}</span>
      <span className="price-dots" />
      <span className="price-value">{price}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════ */
export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('single');

  return (
    <section id="pricing" className="fade-up pricing-section">
      {/* ── Section Heading ── */}
      <div className="pricing-header">
        <div className="pricing-eyebrow">Plans &amp; Pricing</div>
        <h2 className="pricing-title">
          <span className="leaf-deco left">🌿</span>
          Our Therapy Prices
          <span className="leaf-deco right">🌿</span>
        </h2>
        <p className="pricing-subtitle">
          Transparent, honest pricing — no hidden charges. Heal naturally at Sree Vedaa.
        </p>
      </div>

      {/* ── Tab Switcher ── */}
      <div className="pricing-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`pricing-tab${activeTab === tab.id ? ' pricing-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab Content ── */}
      <div className="pricing-panel-wrapper">
        {/* Tab 1 — Single Session */}
        {activeTab === 'single' && (
          <div className="pricing-panel pricing-panel--enter" key="single">
            <div className="price-list-card">
              {singleSessionPrices.map((item, i) => (
                <PriceRow key={item.name} name={item.name} price={item.price} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Tab 2 — Autism Therapy */}
        {activeTab === 'autism' && (
          <div className="pricing-panel pricing-panel--enter" key="autism">
            <div className="price-list-card">
              {autismTherapyPrices.map((item, i) => (
                <PriceRow key={item.name} name={item.name} price={item.price} index={i} />
              ))}
            </div>
            {/* Highlighted Card */}
            <div className="massage-chair-card">
              <div className="massage-chair-icon">🪑</div>
              <div className="massage-chair-info">
                <div className="massage-chair-title">Advanced 3D Massage Chair</div>
                <div className="massage-chair-prices">
                  <span className="mc-badge">Monthly (20 Sessions): <strong>₹2,499</strong></span>
                  <span className="mc-divider">·</span>
                  <span className="mc-badge">Single Session: <strong>₹199</strong></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3 — Special Packages */}
        {activeTab === 'special' && (
          <div className="pricing-panel pricing-panel--enter" key="special">
            <div className="special-packages-grid">
              {specialPackages.map((pkg) => (
                <div key={pkg.num} className="package-card" style={{ animationDelay: `${pkg.num * 0.1}s` }}>
                  <div className="special-num">{String(pkg.num).padStart(2, '0')}</div>
                  <div className="special-body">
                    <div className="special-name">{pkg.name}</div>
                    <div className="special-duration">{pkg.duration}</div>
                  </div>
                  <div className="special-price">{pkg.price}</div>
                </div>
              ))}
            </div>
            <div className="best-value-badge">
              ✨ Best Value Packages for Long-Term Wellness &amp; Results
            </div>
          </div>
        )}
      </div>

      {/* ── Free Consultation Banner ── */}
      <div className="consult-banner">
        <span className="consult-icon">🎁</span>
        <div>
          <strong className="consult-title">Free First Consultation — No Commitment Needed</strong>
          <span className="consult-desc">Come in, share your concerns, and get a personalized treatment recommendation at zero cost.</span>
        </div>
      </div>

      {/* ── Contact Footer ── */}
      <div className="pricing-contact">
        <span>📍 Visit Us Today for Natural Healing</span>
        <span className="pricing-contact-sep">·</span>
        <a href="tel:+919640553411">📞 +91 9640553411</a>
        <span className="pricing-contact-sep">·</span>
        <a href="tel:+916281949281">📞 +91 6281949281</a>
      </div>

      <p className="pricing-disclaimer">* Prices are indicative. Exact pricing shared after consultation.</p>

      {/* ═══════════════════════════════════════════════════
          Styles
          ═══════════════════════════════════════════════════ */}
      <style>{`
        /* ── Section ── */
        .pricing-section {
          background: #FAF3E8;
          padding: 5rem 2rem 4rem;
          max-width: 100%;
          overflow: hidden;
        }

        /* ── Header ── */
        .pricing-header { text-align: center; margin-bottom: 2.5rem; }
        .pricing-eyebrow {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #B8860B;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        .pricing-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 400;
          font-style: italic;
          color: #2D4B3B;
          line-height: 1.25;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
        }
        .leaf-deco {
          font-style: normal;
          font-size: 1.1em;
          display: inline-block;
        }
        .leaf-deco.left { transform: scaleX(-1); }
        .pricing-subtitle {
          font-size: 0.95rem;
          color: #6b7068;
          line-height: 1.7;
          max-width: 540px;
          margin: 0.75rem auto 0;
          font-weight: 300;
        }

        /* ── Tabs ── */
        .pricing-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .pricing-tab {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          padding: 0.6rem 1.5rem;
          border-radius: 2rem;
          border: 1.5px solid rgba(45, 75, 59, 0.25);
          background: transparent;
          color: #2D4B3B;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }
        .pricing-tab:hover:not(.pricing-tab--active) {
          background: rgba(45, 75, 59, 0.07);
          border-color: rgba(45, 75, 59, 0.4);
        }
        .pricing-tab--active {
          background: #2D4B3B;
          color: #fff;
          border-color: #2D4B3B;
          box-shadow: 0 4px 16px rgba(45, 75, 59, 0.25);
        }

        /* ── Panel wrapper ── */
        .pricing-panel-wrapper {
          max-width: 780px;
          margin: 0 auto;
        }

        /* ── Fade-in animation ── */
        @keyframes panelFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pricing-panel--enter {
          animation: panelFadeIn 0.45s ease-out both;
        }

        /* ── Price List Card (dotted leaders) ── */
        .price-list-card {
          background: white;
          border-radius: 1.25rem;
          padding: 2rem 2.25rem;
          border: 1px solid rgba(45, 75, 59, 0.08);
          box-shadow: 0 4px 24px rgba(45, 75, 59, 0.06);
        }

        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .price-row {
          display: flex;
          align-items: baseline;
          padding: 0.65rem 0;
          border-bottom: 1px solid rgba(45, 75, 59, 0.05);
          animation: rowSlideIn 0.35s ease-out both;
        }
        .price-row:last-child { border-bottom: none; }
        .price-name {
          font-size: 0.88rem;
          color: #2c2c2c;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .price-dots {
          flex: 1;
          border-bottom: 2px dotted rgba(45, 75, 59, 0.18);
          margin: 0 0.5rem;
          min-width: 1rem;
          position: relative;
          top: -4px;
        }
        .price-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #2D4B3B;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ── Massage Chair Highlight ── */
        .massage-chair-card {
          margin-top: 1.5rem;
          background: linear-gradient(135deg, #2D4B3B, #1e3829);
          border-radius: 1.25rem;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          color: white;
          animation: panelFadeIn 0.5s ease-out 0.2s both;
        }
        .massage-chair-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        .massage-chair-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }
        .massage-chair-prices {
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          opacity: 0.9;
        }
        .mc-badge strong { color: #B8860B; }
        .mc-divider { opacity: 0.5; }

        /* ── Special Packages Grid ── */
        .special-packages-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @keyframes cardPop {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .package-card {
          background: white;
          border-radius: 1.25rem;
          padding: 1.5rem;
          border: 1px solid rgba(45, 75, 59, 0.08);
          box-shadow: 0 4px 16px rgba(45, 75, 59, 0.05);
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s;
          animation: cardPop 0.4s ease-out both;
        }
        .package-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(45, 75, 59, 0.12);
        }
        .special-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          background: #2D4B3B;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .special-body { flex: 1; min-width: 0; }
        .special-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #2D4B3B;
          margin-bottom: 0.15rem;
        }
        .special-duration {
          font-size: 0.78rem;
          color: #6b7068;
        }
        .special-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #B8860B;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .best-value-badge {
          margin-top: 1.5rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(184, 134, 11, 0.08), rgba(45, 75, 59, 0.06));
          border: 1px solid rgba(184, 134, 11, 0.2);
          border-radius: 2rem;
          padding: 0.85rem 1.5rem;
          font-size: 0.88rem;
          font-weight: 500;
          color: #B8860B;
          font-style: italic;
          animation: panelFadeIn 0.5s ease-out 0.4s both;
        }

        /* ── Free Consult Banner ── */
        .consult-banner {
          max-width: 780px;
          margin: 2.5rem auto 0;
          background: linear-gradient(135deg, rgba(184, 134, 11, 0.08), rgba(45, 75, 59, 0.05));
          border: 1px solid rgba(184, 134, 11, 0.18);
          border-radius: 1.25rem;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .consult-icon { font-size: 1.8rem; flex-shrink: 0; }
        .consult-title {
          display: block;
          color: #2D4B3B;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
        }
        .consult-desc {
          font-size: 0.82rem;
          color: #6b7068;
        }

        /* ── Contact Footer ── */
        .pricing-contact {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.88rem;
          color: #2D4B3B;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          font-style: italic;
        }
        .pricing-contact a {
          color: #2D4B3B;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }
        .pricing-contact a:hover { color: #B8860B; }
        .pricing-contact-sep { opacity: 0.35; }

        .pricing-disclaimer {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.78rem;
          color: #6b7068;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .pricing-section { padding: 3.5rem 1rem 3rem; }
          .pricing-tabs { gap: 0.4rem; }
          .pricing-tab { font-size: 0.74rem; padding: 0.5rem 1rem; }
          .price-list-card { padding: 1.25rem 1rem; }
          .price-name { font-size: 0.8rem; }
          .price-value { font-size: 1rem; }
          .special-packages-grid { grid-template-columns: 1fr; }
          .special-price { font-size: 1.15rem; }
          .massage-chair-card { flex-direction: column; text-align: center; padding: 1.25rem; }
          .massage-chair-prices { justify-content: center; }
          .consult-banner { flex-direction: column; text-align: center; }
          .pricing-contact { font-size: 0.82rem; flex-direction: column; gap: 0.35rem; }
          .pricing-contact-sep { display: none; }
        }
      `}</style>
    </section>
  );
}
