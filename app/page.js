'use client'

import { useState } from 'react'

export default function Home() {
  const [showEvaluation, setShowEvaluation] = useState(false)

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>ARAN Logo Design</h1>
        <p style={styles.subtitle}>Business & Trade Theme</p>

        {/* Main Logo Display */}
        <div style={styles.logoContainer}>
          <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Background subtle pattern */}
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#e2e8f0', stopOpacity: 1}} />
              </linearGradient>

              {/* Professional navy gradient */}
              <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#1e40af', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#0f172a', stopOpacity: 1}} />
              </linearGradient>

              {/* Gold accent gradient */}
              <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
              </linearGradient>
            </defs>

            <rect width="400" height="200" fill="url(#bgGradient)" rx="8"/>

            {/* Icon: Connected hexagon network suggesting trade/business connectivity */}
            <g transform="translate(50, 80)">
              {/* Central hexagon */}
              <polygon
                points="30,0 45,8.66 45,25.98 30,34.64 15,25.98 15,8.66"
                fill="url(#accentGradient)"
                stroke="#d97706"
                strokeWidth="2"
              />

              {/* Connected nodes suggesting network/trade */}
              <circle cx="30" cy="-15" r="6" fill="url(#mainGradient)" opacity="0.8"/>
              <circle cx="55" cy="5" r="6" fill="url(#mainGradient)" opacity="0.8"/>
              <circle cx="55" cy="30" r="6" fill="url(#mainGradient)" opacity="0.8"/>
              <circle cx="5" cy="30" r="6" fill="url(#mainGradient)" opacity="0.8"/>
              <circle cx="5" cy="5" r="6" fill="url(#mainGradient)" opacity="0.8"/>

              {/* Connection lines */}
              <line x1="30" y1="-9" x2="30" y2="0" stroke="#1e40af" strokeWidth="2" opacity="0.6"/>
              <line x1="50" y1="8" x2="45" y2="12" stroke="#1e40af" strokeWidth="2" opacity="0.6"/>
              <line x1="50" y1="27" x2="45" y2="23" stroke="#1e40af" strokeWidth="2" opacity="0.6"/>
              <line x1="10" y1="27" x2="15" y2="23" stroke="#1e40af" strokeWidth="2" opacity="0.6"/>
              <line x1="10" y1="8" x2="15" y2="12" stroke="#1e40af" strokeWidth="2" opacity="0.6"/>
            </g>

            {/* ARAN Text - Professional Typography */}
            <text
              x="130"
              y="115"
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontSize="64"
              fontWeight="700"
              letterSpacing="4"
              fill="url(#mainGradient)"
            >
              ARAN
            </text>

            {/* Tagline */}
            <text
              x="135"
              y="135"
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontSize="11"
              fontWeight="400"
              letterSpacing="3"
              fill="#64748b"
            >
              BUSINESS & TRADE
            </text>

            {/* Refined accent line under text */}
            <rect x="130" y="120" width="240" height="2" fill="url(#accentGradient)" opacity="0.6"/>
          </svg>
        </div>

        {/* Logo Variations */}
        <div style={styles.variationsContainer}>
          <div style={styles.variation}>
            <h3 style={styles.variationTitle}>Light Background</h3>
            <div style={{...styles.variationBox, background: '#ffffff'}}>
              <svg width="180" height="80" viewBox="0 0 180 80">
                <g transform="translate(15, 25)">
                  <polygon
                    points="15,0 22.5,4.33 22.5,12.99 15,17.32 7.5,12.99 7.5,4.33"
                    fill="#f59e0b"
                    stroke="#d97706"
                    strokeWidth="1.5"
                  />
                  <circle cx="15" cy="-7" r="3" fill="#1e40af" opacity="0.8"/>
                  <circle cx="27" cy="2" r="3" fill="#1e40af" opacity="0.8"/>
                  <circle cx="27" cy="15" r="3" fill="#1e40af" opacity="0.8"/>
                  <circle cx="3" cy="15" r="3" fill="#1e40af" opacity="0.8"/>
                  <circle cx="3" cy="2" r="3" fill="#1e40af" opacity="0.8"/>
                </g>
                <text x="50" y="48" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" letterSpacing="2" fill="#0f172a">ARAN</text>
              </svg>
            </div>
          </div>

          <div style={styles.variation}>
            <h3 style={styles.variationTitle}>Dark Background</h3>
            <div style={{...styles.variationBox, background: '#0f172a'}}>
              <svg width="180" height="80" viewBox="0 0 180 80">
                <g transform="translate(15, 25)">
                  <polygon
                    points="15,0 22.5,4.33 22.5,12.99 15,17.32 7.5,12.99 7.5,4.33"
                    fill="#f59e0b"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                  />
                  <circle cx="15" cy="-7" r="3" fill="#60a5fa" opacity="0.9"/>
                  <circle cx="27" cy="2" r="3" fill="#60a5fa" opacity="0.9"/>
                  <circle cx="27" cy="15" r="3" fill="#60a5fa" opacity="0.9"/>
                  <circle cx="3" cy="15" r="3" fill="#60a5fa" opacity="0.9"/>
                  <circle cx="3" cy="2" r="3" fill="#60a5fa" opacity="0.9"/>
                </g>
                <text x="50" y="48" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" letterSpacing="2" fill="#ffffff">ARAN</text>
              </svg>
            </div>
          </div>

          <div style={styles.variation}>
            <h3 style={styles.variationTitle}>Monochrome</h3>
            <div style={{...styles.variationBox, background: '#f8fafc'}}>
              <svg width="180" height="80" viewBox="0 0 180 80">
                <g transform="translate(15, 25)">
                  <polygon
                    points="15,0 22.5,4.33 22.5,12.99 15,17.32 7.5,12.99 7.5,4.33"
                    fill="#334155"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  <circle cx="15" cy="-7" r="3" fill="#64748b"/>
                  <circle cx="27" cy="2" r="3" fill="#64748b"/>
                  <circle cx="27" cy="15" r="3" fill="#64748b"/>
                  <circle cx="3" cy="15" r="3" fill="#64748b"/>
                  <circle cx="3" cy="2" r="3" fill="#64748b"/>
                </g>
                <text x="50" y="48" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" letterSpacing="2" fill="#1e293b">ARAN</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Design Evaluation Button */}
        <button
          onClick={() => setShowEvaluation(!showEvaluation)}
          style={styles.evaluationButton}
        >
          {showEvaluation ? 'Hide Evaluation' : 'Show Design Evaluation'}
        </button>

        {showEvaluation && (
          <div style={styles.evaluationPanel}>
            <h2 style={styles.evaluationTitle}>Design Evaluation</h2>

            <div style={styles.evaluationSection}>
              <h3 style={styles.sectionTitle}>✓ Business & Trade Alignment</h3>
              <ul style={styles.evaluationList}>
                <li><strong>Network Symbol:</strong> Connected hexagonal nodes represent business networks, partnerships, and trade routes</li>
                <li><strong>Professional Typography:</strong> Bold, spaced letters convey authority and reliability</li>
                <li><strong>Color Psychology:</strong> Navy blue = trust/professionalism; Gold = success/premium value</li>
                <li><strong>Geometric Precision:</strong> Clean lines suggest organized, systematic business operations</li>
              </ul>
            </div>

            <div style={styles.evaluationSection}>
              <h3 style={styles.sectionTitle}>✓ Professional Standards</h3>
              <ul style={styles.evaluationList}>
                <li><strong>Scalability:</strong> Vector-based design scales perfectly from business cards to billboards</li>
                <li><strong>Versatility:</strong> Works on light, dark, and monochrome backgrounds</li>
                <li><strong>Memorability:</strong> Unique hexagon network is distinctive and recognizable</li>
                <li><strong>Timeless Design:</strong> Modern yet classic approach avoids trendy elements</li>
              </ul>
            </div>

            <div style={styles.evaluationSection}>
              <h3 style={styles.sectionTitle}>✓ Trade Concept Integration</h3>
              <ul style={styles.evaluationList}>
                <li><strong>Connectivity:</strong> Lines between nodes symbolize trade connections and partnerships</li>
                <li><strong>Central Hub:</strong> Golden hexagon represents ARAN as a central trading entity</li>
                <li><strong>Growth Pattern:</strong> Radiating structure suggests expansion and opportunity</li>
                <li><strong>Global Appeal:</strong> Geometric design transcends cultural boundaries</li>
              </ul>
            </div>

            <div style={styles.refinementNote}>
              <strong>Final Assessment:</strong> The logo successfully captures business professionalism and trade connectivity.
              The design is production-ready with strong brand recognition potential. No major refinements needed -
              the balance of symbol and typography creates a cohesive, authoritative identity suitable for business and trade contexts.
            </div>
          </div>
        )}

        {/* Design Specifications */}
        <div style={styles.specs}>
          <h3 style={styles.specsTitle}>Design Specifications</h3>
          <div style={styles.specsGrid}>
            <div style={styles.specItem}>
              <strong>Primary Colors</strong>
              <div style={styles.colorSwatch}>
                <div style={{...styles.colorBox, background: '#1e40af'}}></div>
                <span>Navy #1e40af</span>
              </div>
              <div style={styles.colorSwatch}>
                <div style={{...styles.colorBox, background: '#f59e0b'}}></div>
                <span>Gold #f59e0b</span>
              </div>
            </div>
            <div style={styles.specItem}>
              <strong>Typography</strong>
              <p style={styles.specText}>Helvetica Neue Bold</p>
              <p style={styles.specText}>Letter-spacing: 4px</p>
            </div>
            <div style={styles.specItem}>
              <strong>Symbol</strong>
              <p style={styles.specText}>Connected Hexagon Network</p>
              <p style={styles.specText}>Represents trade connectivity</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  subtitle: {
    fontSize: '18px',
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: '40px',
    letterSpacing: '2px',
  },
  logoContainer: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    marginBottom: '40px',
  },
  variationsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  variation: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  variationTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#334155',
    marginBottom: '12px',
    textAlign: 'center',
  },
  variationBox: {
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px',
  },
  evaluationButton: {
    width: '100%',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
    marginBottom: '20px',
  },
  evaluationPanel: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    marginBottom: '40px',
  },
  evaluationTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '30px',
    borderBottom: '3px solid #f59e0b',
    paddingBottom: '10px',
  },
  evaluationSection: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: '15px',
  },
  evaluationList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  refinementNote: {
    background: '#f0fdf4',
    border: '2px solid #86efac',
    borderRadius: '8px',
    padding: '20px',
    color: '#166534',
    lineHeight: '1.6',
    marginTop: '20px',
  },
  specs: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  specsTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '24px',
    textAlign: 'center',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
  },
  specItem: {
    textAlign: 'center',
  },
  colorSwatch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
    fontSize: '14px',
    color: '#64748b',
  },
  colorBox: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  specText: {
    fontSize: '14px',
    color: '#64748b',
    margin: '8px 0',
  },
}
