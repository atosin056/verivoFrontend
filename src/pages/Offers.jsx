import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SectionHeader from "../components/Sectionheader";
export default function Offers() {
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
            <div>
              <SectionHeader
                eyebrow="OFFERS · INBOX"
                leadText="Read the offer."
                emphasisText="Counter it."
                trailText="Then accept."
                description="When an employer picks you, the offer lands here. Chat in your language, push back on the price, and accept when it's right. Escrow provisions the moment you say yes."
              />
            </div>
            <div>T</div>
          </div>
        </div>
      </div>
    </div>
  );
}
