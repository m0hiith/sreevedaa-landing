import React from 'react';

export default function AnnouncementBanner() {
  const singleText = (
    <>
      🌿 Follow us on <strong className="highlight">Instagram</strong> &amp; <strong className="highlight">YouTube</strong> and get 10% OFF your first therapy session! &middot; @sreevedaa &middot; Subscribe now and heal naturally &middot;&nbsp;
    </>
  );

  const fullText = (
    <>
      {singleText}
      {singleText}
      {singleText}
    </>
  );

  return (
    <>
      <div className="announcement-banner">
        <div className="announcement-track">
          <div className="announcement-content">{fullText}</div>
          <div className="announcement-content">{fullText}</div>
        </div>
      </div>
      <style>{`
        .announcement-banner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 36px;
          background-color: #2D4B3B;
          color: white;
          display: flex;
          align-items: center;
          overflow: hidden;
          z-index: 1001;
          font-family: 'Jost', sans-serif;
        }

        .announcement-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: scrollBanner 35s linear infinite;
        }

        .announcement-content {
          padding-right: 0.5rem;
          font-size: 13.5px;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
        }

        .highlight {
          font-weight: 700;
          color: #8C9D5E; /* Brand olive green */
        }

        @keyframes scrollBanner {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1024px) {
          .announcement-banner {
            height: 32px;
          }
          .announcement-content {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
