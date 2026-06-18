import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';
import { blogPosts, getBlogPost } from '../../data/blogPosts';

const CATEGORY_COLORS = {
  'Sujok Therapy': { bg: '#e8f0db', text: '#5a6e2a' },
  'Acupuncture': { bg: '#dce8e0', text: '#2D4B3B' },
  'Ayurveda': { bg: '#f0e8d8', text: '#7a4e1e' },
};

function renderContent(content) {
  const lines = content.split('\n');
  const elements = [];
  let listItems = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem', color: '#444', lineHeight: 1.8 }}>
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line) => {
    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={key++} style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#1a2e24',
          marginTop: '2rem',
          marginBottom: '0.75rem',
        }}>
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('- ')) {
      const rawText = line.replace('- ', '');
      listItems.push(
        <li key={key++} style={{ marginBottom: '0.4rem' }}>
          <span dangerouslySetInnerHTML={{ __html: rawText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
        </li>
      );
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
      elements.push(
        <p key={key++} style={{ color: '#444', lineHeight: 1.8, marginBottom: '0.6rem' }}>
          <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
        </p>
      );
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={key++} style={{ color: '#444', lineHeight: 1.8, marginBottom: '1.1rem', fontSize: '0.96rem' }}>
          <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>') }} />
        </p>
      );
    }
  });

  flushList();
  return elements;
}

export default function BlogPost({ post, related }) {
  if (!post) {
    return (
      <>
        <Navbar />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8F5F0' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#1a2e24' }}>Post not found</h1>
            <Link href="/blog" style={{ color: '#2D4B3B', fontWeight: 600 }}>← Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const catStyle = CATEGORY_COLORS[post.category] || { bg: '#e8f0db', text: '#5a6e2a' };

  return (
    <>
      <Head>
        <title>{post.title} — Sree Vedaa Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Navbar />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a2e24 0%, #2D4B3B 60%, #3d6450 100%)',
        paddingTop: '8rem',
        paddingBottom: '3rem',
        color: 'white',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem' }}>
          <Link href="/blog" style={{
            color: '#b5c98a',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '1.5rem',
          }}>
            ← Back to Blog
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{
              background: catStyle.bg,
              color: catStyle.text,
              borderRadius: '2rem',
              padding: '0.2rem 0.75rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>{post.category}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>{post.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>{post.readTime}</span>
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: '1rem',
          }}>
            {post.title}
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem', lineHeight: 1.7 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      <main style={{ background: '#F8F5F0', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          {/* Article body */}
          <article style={{
            background: 'white',
            borderRadius: '1rem',
            padding: 'clamp(1.5rem, 5vw, 3rem)',
            boxShadow: '0 4px 24px rgba(45,75,59,0.08)',
            marginBottom: '3rem',
            lineHeight: 1.8,
          }}>
            {renderContent(post.content)}
          </article>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #2D4B3B, #3d6450)',
            borderRadius: '1rem',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
            marginBottom: '3rem',
          }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              Ready to Start Healing Naturally?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              Book a consultation at Sree Vedaa in Visakhapatnam. Our practitioners will design a personalised treatment plan for you.
            </p>
            <a
              href="https://admin.ayurgrid.com/doctor/websiteappointments/createAppointment?doctor_id=1111"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white',
                color: '#2D4B3B',
                padding: '0.75rem 2rem',
                borderRadius: '2rem',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.88rem',
                display: 'inline-block',
              }}
            >
              📅 Book Appointment
            </a>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem',
                color: '#1a2e24',
                marginBottom: '1.25rem',
              }}>
                Related Articles
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}>
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                      background: 'white',
                      borderRadius: '0.875rem',
                      padding: '1.25rem',
                      boxShadow: '0 2px 12px rgba(45,75,59,0.07)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(45,75,59,0.12)'; }}
                      onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(45,75,59,0.07)'; }}
                    >
                      <span style={{
                        background: CATEGORY_COLORS[r.category]?.bg || '#e8f0db',
                        color: CATEGORY_COLORS[r.category]?.text || '#5a6e2a',
                        borderRadius: '2rem',
                        padding: '0.15rem 0.6rem',
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        display: 'inline-block',
                        marginBottom: '0.6rem',
                      }}>{r.category}</span>
                      <h4 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#1a2e24',
                        lineHeight: 1.35,
                        marginBottom: '0.4rem',
                      }}>{r.title}</h4>
                      <span style={{ fontSize: '0.72rem', color: '#999' }}>{r.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPost(params.slug);
  const related = blogPosts
    .filter((p) => p.slug !== params.slug && p.category === post?.category)
    .slice(0, 3);

  return {
    props: { post: post || null, related },
  };
}
