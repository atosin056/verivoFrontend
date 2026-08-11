import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import TodayHero from "../components/Todayhero.jsx";
import IseScoreCard from "../components/Isescorecard.jsx";
import WalletCard from "../components/Walletcard.jsx";
import StatCard from "../components/StatCard.jsx";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ overflowY: "scroll", flex: 1, minHeight: 0 }}>
          <Topbar />
          <div
            style={{
              padding: "50px",
              overflowY: "scroll",
              flex: 1,
              minHeight: 0,
            }}
          >
            <TodayHero
              name="Oluwatosin"
              iseScore={0}
              jobsCompleted={0}
              emphasis="No new matches yet"
              rest="match you today."
              onCtaClick={() => navigate("/jobs")}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "20px",
                }}
              >
                <div style={{ width: "60%" }}>
                  <IseScoreCard
                    score={0}
                    knowledge={0}
                    trust={0}
                    footerText="Your Trust score grows on every Squad-confirmed payment. Going off-platform doesn't punish — it just stops rewarding while others compound."
                  />
                </div>
                <div style={{ width: "40%" }}>
                  <WalletCard
                    provider="PAYSTACK VA"
                    bank="GTCO"
                    status="Active"
                    since="2026-03"
                    accountNumber="9012345678"
                    available={0}
                    inEscrow={0}
                    thisMonth={0}
                    onOpenWallet={() => navigate("/wallet")}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                }}
              >
                <StatCard label="COMPLETED JOBS" value={0} />
                <StatCard
                  label="Repeat customers"
                  value={0}
                  suffix="%"
                  description="Strongest predictor of skill."
                />
                <StatCard label="Accept latency" value={0} suffix="ms" />
                <StatCard label="In Escrow" value={0} prefix="₦" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
