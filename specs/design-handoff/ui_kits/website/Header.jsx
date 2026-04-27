// Header.jsx — De MenstruatieSchool (updated palette)

const Header = ({ currentPage, onNavigate }) => {
  const navLinks = [
    { label: "Workshops", page: "workshops" },
    { label: "Over ons", page: "about" },
    { label: "Kennis", page: "kennis" },
    { label: "Contact", page: "contact" },
  ];
  const s = headerStyles;
  return (
    <header style={s.header}>
      <div style={s.inner}>
        <button onClick={() => onNavigate("home")} style={s.logoBtn}>
          <div style={s.logoMark}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle
                cx="14"
                cy="14"
                r="13"
                stroke="#D42818"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M6 14 A8 8 0 0 1 22 14Z" fill="#D42818" />
              <circle cx="14" cy="14" r="3" fill="#fff" />
            </svg>
          </div>
          <div style={s.logoText}>
            <span style={s.logoLine1}>De Menstruatie</span>
            <span style={s.logoLine2}>School</span>
          </div>
        </button>
        <nav style={s.nav}>
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              style={{
                ...s.navLink,
                ...(currentPage === link.page ? s.navLinkActive : {}),
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button onClick={() => onNavigate("workshops")} style={s.ctaBtn}>
          Aanmelden
        </button>
      </div>
    </header>
  );
};

const headerStyles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "#fff",
    borderBottom: "1px solid #F0F0F0",
  },
  inner: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 32px",
    height: 64,
    display: "flex",
    alignItems: "center",
    gap: 40,
  },
  logoBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  logoMark: { flexShrink: 0 },
  logoText: { display: "flex", flexDirection: "column", lineHeight: 1.1 },
  logoLine1: {
    fontFamily: "'Urbanist', sans-serif",
    fontWeight: 200,
    fontSize: 12,
    letterSpacing: "0.06em",
    color: "#1A1410",
  },
  logoLine2: {
    fontFamily: "'Urbanist', sans-serif",
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: "0.04em",
    color: "#D42818",
  },
  nav: { display: "flex", alignItems: "center", gap: 2, flex: 1 },
  navLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    letterSpacing: "0.04em",
    color: "#5A4F48",
    padding: "6px 14px",
    borderRadius: 4,
    transition: "color 0.2s ease",
  },
  navLinkActive: { color: "#1A1410", background: "#F5F5F5" },
  ctaBtn: {
    background: "#D42818",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 13,
    letterSpacing: "0.10em",
    padding: "9px 22px",
    borderRadius: 4,
    transition: "background 0.25s ease",
    whiteSpace: "nowrap",
  },
};

Object.assign(window, { Header });
