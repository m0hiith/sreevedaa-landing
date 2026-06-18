import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import { blogPosts } from '../../data/blogPosts';

const CATEGORY_COLORS = {
  'Sujok Therapy': { bg: '#e8f0db', text: '#5a6e2a' },
  'Acupuncture': { bg: '#dce8e0', text: '#2D4B3B' },
  'Ayurveda': { bg: '#f0e8d8', text: '#7a4e1e' },
};

export default function BlogIndex() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <Head>
        <title>Blog — Sree Vedaa | Ayurveda, Acupuncture & Sujok Therapy Insights</title>
        <meta
          name="description"
          content="Expert articles on Ayurveda, Sujok therapy, and acupuncture from Sree Vedaa in Visakhapatnam. Natural healing insights for pain, stress, diabetes, and more."
        />
      </Head>

      <Navbar />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a2e24 0%, #2D4B3B 60%, #3d6450 100%)',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(140,157,94,0.25)',
            color: '#b5c98a',
            borderRadius: '2rem',
            padding: '0.3rem 1rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Healing Wisdom
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            The Sree Vedaa Blog
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            Evidence-informed articles on Ayurveda, Sujok therapy, and acupuncture — written by our practitioners to help you heal naturally.
          </p>
        </div>
      </section>

      <main style={{ background: '#F8F5F0', minHeight: '60vh', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: 'white',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(45,75,59,0.08)',
              marginBottom: '3rem',
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(45,75,59,0.14)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(45,75,59,0.08)'; }}
              className="featured-card"
            >
              {/* Decorative image panel */}
              <div style={{
                background: 'linear-gradient(135deg, #2D4B3B, #8C9D5E)',
                minHeight: 280,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
              }}>
                <span style={{ fontSize: '5rem' }}>🌿</span>
              </div>

              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{
                    background: CATEGORY_COLORS[featured.category]?.bg || '#e8f0db',
                    color: CATEGORY_COLORS[featured.category]?.text || '#5a6e2a',
                    borderRadius: '2rem',
                    padding: '0.2rem 0.75rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>{featured.category}</span>
                  <span style={{ color: '#888', fontSize: '0.78rem' }}>Featured</span>
                </div>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                  fontWeight: 700,
                  color: '#1a2e24',
                  lineHeight: 1.3,
                  marginBottom: '0.9rem',
                }}>
                  {featured.title}
                </h2>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: '#888' }}>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid of remaining posts */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 2px 16px rgba(45,75,59,0.07)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(45,75,59,0.13)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(45,75,59,0.07)'; }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, #2D4B3B, #8C9D5E)',
                    height: 140,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                  }}>
                    {post.category === 'Sujok Therapy' ? '🖐️' : post.category === 'Acupuncture' ? '✨' : '🌿'}
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      background: CATEGORY_COLORS[post.category]?.bg || '#e8f0db',
                      color: CATEGORY_COLORS[post.category]?.text || '#5a6e2a',
                      borderRadius: '2rem',
                      padding: '0.18rem 0.65rem',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      display: 'inline-block',
                      marginBottom: '0.75rem',
                    }}>{post.category}</span>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#1a2e24',
                      lineHeight: 1.35,
                      marginBottom: '0.6rem',
                      flex: 1,
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.74rem', color: '#999', marginTop: 'auto' }}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWidgets />

      <style>{`
        @media (max-width: 700px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
