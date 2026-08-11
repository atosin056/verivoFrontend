// Design tokens (match Recivo design system)
const tokens = {
  paper: "#fbf9f3",
  border: "#e7e2d3",
  ink: "#1c1c1a",
  inkMuted: "#8c8a80",
};

export default function StatCard({
  label = "COMPLETED JOBS",
  value = 0,
  suffix = "",
  description = "",
  prefix = "",
}) {
  return (
    <div
      style={{
        background: "transparent",
        border: `1px solid #d6cdb8`,
        borderRadius: "16px",
        padding: "20px 22px",
        paddingBottom: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "fit-content",
        minWidth: "230px",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "0.22em",
          color: "#6b6055",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "40px",
          fontWeight: 400,
          color: tokens.ink,
          lineHeight: 1,
        }}
      >
        {prefix}
        {value}
        {suffix}
      </span>

      {description && (
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            color: tokens.inkMuted,
            lineHeight: 1.3,
          }}
        >
          {description}
        </span>
      )}
    </div>
  );
}

// Usage:
// <StatCard label="COMPLETED JOBS" value={0} />
// <StatCard
//   label="REPEAT CUSTOMERS"
//   value={0}
//   suffix="%"
//   description="Strongest predictor of skill."
// />
