// WorkshopCard.jsx — De MenstruatieSchool (updated palette)

const WorkshopCard = ({ workshop, onSelect }) => {
  const {
    title,
    type,
    date,
    location,
    spotsLeft,
    color,
    tag,
    tagColor,
    tagBg,
  } = workshop;
  const s = workshopCardStyles;
  return (
    <div style={s.card} onClick={() => onSelect(workshop)}>
      <div style={{ ...s.cardHeader, background: color }}>
        <span style={s.typeTag}>{type}</span>
      </div>
      <div style={s.cardBody}>
        <div style={s.overline}>{date}</div>
        <div style={s.title}>{title}</div>
        <div style={s.location}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            style={{ flexShrink: 0, marginTop: 1 }}
          >
            <circle
              cx="6"
              cy="5"
              r="2.5"
              stroke="#999"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M6 12 C6 12 1 7.5 1 5 A5 5 0 0 1 11 5 C11 7.5 6 12 6 12Z"
              stroke="#999"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
          {location}
        </div>
        <div style={s.footer}>
          <span style={{ ...s.tag, background: tagBg, color: tagColor }}>
            {tag}
          </span>
          <button
            style={s.btn}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(workshop);
            }}
          >
            Info →
          </button>
        </div>
      </div>
    </div>
  );
};

const workshopCardStyles = {
  card: {
    borderRadius: 8,
    overflow: "hidden",
    border: "1px solid #F0F0F0",
    background: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 4px rgba(26,20,16,0.06)",
  },
  cardHeader: {
    height: 90,
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    padding: "10px 14px",
  },
  typeTag: {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)",
    background: "rgba(0,0,0,0.18)",
    padding: "3px 9px",
    borderRadius: 999,
  },
  cardBody: {
    padding: "16px 18px 18px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  overline: {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#999",
  },
  title: {
    fontFamily: "'Urbanist', sans-serif",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.15,
    color: "#1A1410",
    marginBottom: 3,
  },
  location: {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 12,
    color: "#999",
    display: "flex",
    alignItems: "flex-start",
    gap: 5,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  tag: {
    display: "inline-block",
    padding: "3px 9px",
    borderRadius: 999,
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 11,
    letterSpacing: "0.04em",
  },
  btn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: 13,
    color: "#D42818",
    padding: 0,
  },
};

Object.assign(window, { WorkshopCard });
