import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import TodayHero from "../components/Todayhero.jsx";
import IseScoreCard from "../components/Isescorecard.jsx";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Topbar />
        <div style={{ padding: "50px" }}>
          <TodayHero
            name="Oluwatosin"
            iseScore={0}
            jobsCompleted={0}
            emphasis="No new matches yet"
            rest="match you today."
            onCtaClick={() => navigate("/jobs")}
          />
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", width: "100%", gap: "20px" }}>
              <div style={{ width: "55%" }}>
                <IseScoreCard
                  score={0}
                  knowledge={0}
                  trust={0}
                  footerText="Your Trust score grows on every Squad-confirmed payment. Going off-platform doesn't punish — it just stops rewarding while others compound."
                />
              </div>
              <div style={{ background: "blue", width: "45%" }}>T</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
