// Hero.jsx — De MenstruatieSchool (updated palette)

const Hero = ({ onCTA }) => {
  const s = heroStyles;
  return (
    <section style={s.hero}>
      {/* Bold geometric background shape */}
      <div style={s.bgShape} aria-hidden="true"></div>
      {/* Amber accent circle */}
      <div style={s.amberCircle} aria-hidden="true"></div>

      <div style={s.content}>
        <div style={s.overline}>De MenstruatieSchool</div>
        <h1 style={s.headline}>
          Jouw cyclus,
          <br />
          <em style={s.headlineEm}>jouw kracht.</em>
        </h1>
        <p style={s.sub}>
          Kwalitatieve educatie over de menstruatiecyclus — toegankelijk,
          laagdrempelig en in je eigen buurt.
        </p>
        <div style={s.actions}>
          <button onClick={onCTA} style={s.btnPrimary}>
            Bekijk workshops
          </button>
          <button style={s.btnSecondary}>Meer over ons</button>
        </div>
        <div style={s.stats}>
          <div style={s.stat}>
            <span style={s.statNum}>2400</span>
            <span style={s.statLabel}>
              dagen menstrueert een vrouw gemiddeld
            </span>
          </div>
          <div style={s.statDivider}></div>
          <div style={s.stat}>
            <span style={s.statNum}>80%</span>
            <span style={s.statLabel}>
              ervaart hormoongerelateerde klachten
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const heroStyles = {
  hero: {
    position: "relative",
    background: "#fff",
    minHeight: 560,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    padding: "80px 0",
  },
  bgShape: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "42%",
    background: "#F9E0DE",
    clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
    pointerEvents: "none",
  },
  amberCircle: {
    position: "absolute",
    right: "10%",
    top: "50%",
    transform: "translateY(-50%)",
    width: 220,
    height: 220,
    borderRadius: "50%",
    background: "#F0A820",
    opacity: 0.22,
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: 580,
    marginLeft: "max(32px, calc(50vw - 570px))",
    padding: "0 32px",
  },
  overline: {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: 20,
  },
  headline: {
    fontFamily: "'Urbanist', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(44px, 6vw, 70px)",
    lineHeight: 1.0,
    letterSpacing: "-0.03em",
    color: "#1A1410",
    margin: "0 0 24px",
  },
  headlineEm: { fontStyle: "normal", color: "#D42818" },
  sub: {
    fontFamily: "'RedHatText', sans-serif",
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 1.7,
    color: "#5A4F48",
    margin: "0 0 36px",
    maxWidth: 460,
  },
  actions: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 52 },
  btnPrimary: {
    background: "#D42818",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    letterSpacing: "0.08em",
    padding: "13px 30px",
    borderRadius: 4,
    transition: "background 0.25s ease",
  },
  btnSecondary: {
    background: "transparent",
    color: "#1A1410",
    border: "1.5px solid #E0E0E0",
    cursor: "pointer",
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    letterSpacing: "0.08em",
    padding: "12px 30px",
    borderRadius: 4,
  },
  stats: { display: "flex", gap: 24, alignItems: "center" },
  stat: { display: "flex", flexDirection: "column", gap: 3 },
  statNum: {
    fontFamily: "'Urbanist', sans-serif",
    fontWeight: 800,
    fontSize: 30,
    color: "#D42818",
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 12,
    color: "#5A4F48",
    maxWidth: 140,
    lineHeight: 1.4,
  },
  statDivider: { width: 1, height: 44, background: "#E0E0E0" },
};

Object.assign(window, { Hero });
