import { ArrowUpRight } from "lucide-react";

const tokens = {
  emerald: "#0F3D2E",
  bone: "#EFEBE0",
  ink: "#1C1C1C",
  inkMuted: "#6B6B63",
  gold: "#B08D57",
};

// Time-based greeting — pull out to its own hook/util if used elsewhere too
function useGreeting() {
  const hour = new Date().getHours();
  const period = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return { period, date };
}

function Greeting({ name }) {
  const { period, date } = useGreeting();
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: tokens.inkMuted,
        margin: 0,
      }}
    >
      Good {period}, {name} · {date}
    </p>
  );
}

export default function TodayHero({
  name,
  iseScore,
  jobsCompleted,
  emphasis, // e.g. "No new matches yet"
  rest, // e.g. "match you today."
  ctaLabel = "See matched jobs",
  onCtaClick,
}) {
  return (
    <div style={{ padding: "0 0 24px 0" }}>
      <Greeting name={name} />

      <h1
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "38px",
          fontWeight: 400,
          color: tokens.ink,
          margin: "10px 0 12px 0",
          lineHeight: 1.1,
        }}
      >
        <em style={{ color: tokens.emerald, fontStyle: "italic" }}>
          {emphasis}
        </em>{" "}
        {rest}
      </h1>

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          color: tokens.inkMuted,
          margin: "0 0 20px 0",
        }}
      >
        Your Işẹ́ Score is {iseScore}/100. {jobsCompleted} completed jobs on
        Verivo.
      </p>

      <button
        type="button"
        onClick={onCtaClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 20px",
          borderRadius: "999px",
          border: "none",
          background: tokens.emerald,
          color: tokens.bone,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {ctaLabel}
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
}
