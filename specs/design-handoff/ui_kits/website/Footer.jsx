// Footer.jsx — De MenstruatieSchool (updated palette)

const Footer = () => {
  const s = footerStyles;
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.brand}>
          <div style={s.logoWrap}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#D42818" strokeWidth="1.5" fill="none"/>
              <path d="M6 14 A8 8 0 0 1 22 14Z" fill="#D42818"/>
              <circle cx="14" cy="14" r="3" fill="#fff"/>
            </svg>
            <span style={s.logoText}>De MenstruatieSchool</span>
          </div>
          <p style={s.tagline}>Toegankelijke kennis over de menstruatiecyclus — van jong tot oud.</p>
        </div>
        <div style={s.cols}>
          <div style={s.col}>
            <div style={s.colTitle}>Programma</div>
            {['Workshops', 'Online lessen', 'Voor scholen', 'Voor werkgevers'].map(l =>
              <div key={l} style={s.colLink}>{l}</div>
            )}
          </div>
          <div style={s.col}>
            <div style={s.colTitle}>Organisatie</div>
            {['Over ons', 'Missie', 'Team', 'Contact'].map(l =>
              <div key={l} style={s.colLink}>{l}</div>
            )}
          </div>
          <div style={s.col}>
            <div style={s.colTitle}>Nieuwsbrief</div>
            <p style={s.newsletterText}>Blijf op de hoogte van nieuwe workshops en kennis.</p>
            <div style={s.emailRow}>
              <input style={s.emailInput} type="email" placeholder="jij@voorbeeld.nl"/>
              <button style={s.emailBtn}>→</button>
            </div>
          </div>
        </div>
      </div>
      <div style={s.bottom}>
        <span style={s.copy}>© 2025 De MenstruatieSchool</span>
        <span style={s.copy}>Privacy · Voorwaarden</span>
      </div>
    </footer>
  );
};

const footerStyles = {
  footer: { background: '#1A1410', paddingTop: 56 },
  inner: {
    maxWidth: 1140, margin: '0 auto', padding: '0 32px 48px',
    display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64,
  },
  brand: { display: 'flex', flexDirection: 'column', gap: 14 },
  logoWrap: { display: 'flex', alignItems: 'center', gap: 10 },
  logoText: {
    fontFamily: "'Urbanist', sans-serif", fontWeight: 700,
    fontSize: 15, letterSpacing: '0.04em', color: '#fff',
  },
  tagline: {
    fontFamily: "'Barlow', sans-serif", fontWeight: 300,
    fontSize: 13, lineHeight: 1.6, color: '#5A4F48', maxWidth: 220,
  },
  cols: { display: 'grid', gridTemplateColumns: '1fr 1fr 1.4fr', gap: 32 },
  col: { display: 'flex', flexDirection: 'column', gap: 10 },
  colTitle: {
    fontFamily: "'Barlow', sans-serif", fontWeight: 300,
    fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#5A4F48', marginBottom: 4,
  },
  colLink: {
    fontFamily: "'Barlow', sans-serif", fontWeight: 300,
    fontSize: 14, color: '#999', cursor: 'pointer',
  },
  newsletterText: {
    fontFamily: "'Barlow', sans-serif", fontWeight: 300,
    fontSize: 13, color: '#5A4F48', lineHeight: 1.5, marginBottom: 12,
  },
  emailRow: { display: 'flex' },
  emailInput: {
    flex: 1, background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.10)', borderRight: 'none',
    borderRadius: '4px 0 0 4px', padding: '10px 14px', color: '#fff',
    fontFamily: "'Barlow', sans-serif", fontWeight: 300,
    fontSize: 13, outline: 'none',
  },
  emailBtn: {
    background: '#D42818', color: '#fff', border: 'none', cursor: 'pointer',
    padding: '10px 16px', borderRadius: '0 4px 4px 0',
    fontSize: 15, transition: 'background 0.25s ease',
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.07)',
    maxWidth: 1140, margin: '0 auto', padding: '18px 32px',
    display: 'flex', justifyContent: 'space-between',
  },
  copy: {
    fontFamily: "'Barlow', sans-serif", fontWeight: 300,
    fontSize: 12, color: '#5A4F48',
  },
};

Object.assign(window, { Footer });
