import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      className="about-section"
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
        borderBottom: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 1.5rem',
      }}
    >
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Header Block */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto clamp(2.5rem, 4vw, 3.5rem)',
          }}
        >
          <span
            className="eyebrow"
            style={{
              color: 'var(--tone-gold, #8a7a62)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '0.85rem',
            }}
          >
            ABOUT VITTESA
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.15rem, 4.2vw, 3.25rem)',
              lineHeight: 1.18,
              fontWeight: 400,
              color: 'var(--ink-primary, #181716)',
              margin: '0 0 1rem 0',
            }}
          >
            Where Culinary Artistry Meets Structural Perfection.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              fontWeight: 500,
              letterSpacing: '0.03em',
              color: 'var(--ink-secondary, #5c5854)',
              margin: 0,
            }}
          >
            Commercial Porcelain Tableware. Designed for Hospitality.
          </p>
        </div>

        {/* Narrative Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.75rem)',
            marginBottom: 'clamp(3rem, 5vw, 4.5rem)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p
              style={{
                fontSize: '1.025rem',
                lineHeight: 1.78,
                color: 'var(--ink-secondary, #44403c)',
                margin: 0,
              }}
            >
              Welcome to VITTESA, where culinary artistry meets structural perfection. We are a
              dedicated manufacturer and exporter of commercial-grade porcelain tableware, engineered
              exclusively for the demanding, high-volume environment of the international HoReCa
              (Hotels, Restaurants, and Catering) ecosystem.
            </p>
            <p
              style={{
                fontSize: '1.025rem',
                lineHeight: 1.78,
                color: 'var(--ink-secondary, #44403c)',
                margin: 0,
              }}
            >
              VITTESA specialises in supplying thoughtfully designed porcelain tableware for hotels,
              restaurants, resorts, catering businesses and hospitality distributors. Our collections
              bring together contemporary aesthetics, functional design and the performance
              requirements of professional dining environments.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p
              style={{
                fontSize: '1.025rem',
                lineHeight: 1.78,
                color: 'var(--ink-secondary, #44403c)',
                margin: 0,
              }}
            >
              Crafted using select raw materials and fired at high temperatures, our porcelain
              balances contemporary design with industrial resilience. We aim to empower chefs,
              hoteliers and hospitality leaders with tableware that elevates dining presentations
              while meeting the practical demands of everyday commercial use.
            </p>
            <p
              style={{
                fontSize: '1.025rem',
                lineHeight: 1.78,
                color: 'var(--ink-secondary, #44403c)',
                margin: 0,
              }}
            >
              From coordinated tableware collections to bulk supply and tailored manufacturing
              solutions, we work with hospitality businesses and trade partners seeking dependable
              products for their dining operations.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div
          style={{
            paddingTop: 'clamp(2.5rem, 4vw, 3.5rem)',
            borderTop: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            <span
              style={{
                color: 'var(--tone-gold, #8a7a62)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'inline-block',
              }}
            >
              WHAT WE OFFER
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.5rem',
              marginBottom: 'clamp(3rem, 4.5vw, 4rem)',
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: 'var(--bg-porcelain-alt, #F9F8F5)',
                border: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
                borderRadius: '4px',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--ink-primary, #181716)',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.3,
                }}
              >
                Commercial Porcelain Tableware
              </h3>
              <p
                style={{
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--ink-secondary, #5c5854)',
                  margin: 0,
                }}
              >
                Dinner plates, bowls, serving pieces and coordinated dining collections designed for
                professional hospitality environments.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: 'var(--bg-porcelain-alt, #F9F8F5)',
                border: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
                borderRadius: '4px',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--ink-primary, #181716)',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.3,
                }}
              >
                HoReCa Supply Solutions
              </h3>
              <p
                style={{
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--ink-secondary, #5c5854)',
                  margin: 0,
                }}
              >
                Tableware solutions for hotels, restaurants, resorts and catering establishments.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundColor: 'var(--bg-porcelain-alt, #F9F8F5)',
                border: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
                borderRadius: '4px',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--ink-primary, #181716)',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.3,
                }}
              >
                Bulk Supply
              </h3>
              <p
                style={{
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--ink-secondary, #5c5854)',
                  margin: 0,
                }}
              >
                Structured B2B supply for international importers, distributors and hospitality
                projects.
              </p>
            </div>

            {/* Card 4 */}
            <div
              style={{
                backgroundColor: 'var(--bg-porcelain-alt, #F9F8F5)',
                border: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
                borderRadius: '4px',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--ink-primary, #181716)',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.3,
                }}
              >
                Custom Manufacturing
              </h3>
              <p
                style={{
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--ink-secondary, #5c5854)',
                  margin: 0,
                }}
              >
                Tailored product development and private-label solutions, subject to project
                requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2.5rem 1.5rem 0',
            borderTop: '1px solid var(--border-subtle, rgba(0, 0, 0, 0.08))',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
              lineHeight: 1.6,
              color: 'var(--ink-primary, #181716)',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            &ldquo;At VITTESA, we believe tableware is more than a functional necessity. It is an
            essential part of the dining experience, bringing together presentation, practicality
            and lasting value.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
