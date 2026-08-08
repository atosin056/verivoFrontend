import { useState } from "react";
import Animate from "../components/Animate.jsx";
import logo from "../assets/logo.png";
import {
  Home,
  HandCoins,
  Briefcase,
  CreditCard,
  PieChart,
  Gavel,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const tokens = {
  emerald: "#0F3D2E",
  emeraldDark: "#0B2E22",
  bone: "#EFEBE0",
  boneDark: "#E5E0D2",
  ink: "#1C1C1C",
  inkMuted: "#6B6B63",
  inkFaint: "#2a2521",
  gold: "#B08D57",
};

const navItems = [
  { key: "today", label: "Today", icon: Home },
  { key: "offers", label: "Offers", icon: HandCoins },
  { key: "jobs", label: "Jobs", icon: Briefcase },
  { key: "wallet", label: "Wallet", icon: CreditCard },
  { key: "ise-score", label: "Işẹ́ Score", icon: PieChart },
  { key: "disputes", label: "Disputes", icon: Gavel },
  { key: "profile", label: "Profile", icon: User },
];

function SidebarLink({ label, icon: Icon, active, onClick, muted = false }) {
  const [hovered, setHovered] = useState(false);

  const baseStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
    padding: "12px 16px",
    borderRadius: "14px",
    border: "none",
    background: active
      ? tokens.emerald
      : hovered && !muted
        ? tokens.boneDark
        : "transparent",
    color: active ? tokens.bone : muted ? tokens.inkFaint : tokens.ink,
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14.5px",
    fontWeight: active ? 500 : 400,
    cursor: "pointer",
    transition: "background-color 150ms ease, color 150ms ease",
    textAlign: "left",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={baseStyle}
    >
      <Icon size={18} strokeWidth={2} style={{ flexShrink: 0 }} />
      <span>{label}</span>
    </button>
  );
}

function ProfileCard({ name, role, score }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 14px",
        borderRadius: "18px",
        border: `1px solid ${tokens.boneDark}`,
        background: "lab(94.6549% .590444 4.9919 / .7)",
      }}
    >
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "#0f1912",
          color: tokens.bone,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Fraunces', sans-serif",
          fontSize: "13px",
          fontWeight: 300,
          flexShrink: 0,
        }}
      >
        {initials}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "13.5px",
            fontWeight: 500,
            color: tokens.ink,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "12px",
            color: tokens.inkMuted,
            marginTop: "1px",
          }}
        >
          {role}
        </div>
      </div>

      <div style={{ textAlign: "center", flexShrink: 0 }}>
        <div
          style={{
            fontFamily: "'Fraunces', monospace",
            fontSize: "20px",
            fontWeight: 400,
            color: tokens.ink,
            lineHeight: 1,
          }}
        >
          {score}
        </div>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "10px",
            color: tokens.inkMuted,
            marginTop: "2px",
          }}
        >
          Işẹ́
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("today");

  return (
    <div
      style={{
        width: "23.5%",
        height: "100%",
        position: "sticky",
        left: "0",
        background: tokens.bone,
        border: `1px solid lab(5.29734% .960186 1.48356/.08)`,
        padding: "1.2rem",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div>
        <Animate
          delay={0.05}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div>
            <img src={logo} className="logo" alt="Verivo logo" />
          </div>
          <div>
            <h4 className="logoText" style={{ color: "#000" }}>
              Verivo
            </h4>
          </div>
        </Animate>
      </div>

      <div
        style={{
          height: "1px",
          background: tokens.boneDark,
          margin: "0 -16px 16px -16px",
        }}
      />

      {/* Profile card */}
      <ProfileCard name="Oluwatosin Akinfenwa" role="Phone Repair" score={0} />

      <div style={{ height: "18px" }} />

      {/* Nav links */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {navItems.map((item) => (
          <SidebarLink
            key={item.key}
            label={item.label}
            icon={item.icon}
            active={active === item.key}
            onClick={() => setActive(item.key)}
          />
        ))}
      </nav>

      {/* Spacer pushes bottom links down */}
      <div style={{ flex: 1 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <SidebarLink
          label="Settings"
          icon={Settings}
          active={false}
          muted
          onClick={() => {}}
        />
        <SidebarLink
          label="Sign out"
          icon={LogOut}
          active={false}
          muted
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
