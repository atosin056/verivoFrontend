import LinearContainer from "../components/LinearContainer";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import RegChoice from "../components/RegChoice";
export default function Register() {
  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <LinearContainer>
            <div
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
                <h4 className="logoText" style={{ color: "#fff" }}>
                  Verivo
                </h4>
              </div>
            </div>
            <div style={{ width: "80%" }}>
              <h4 className="mono-tabular-text">
                Field Interview - Lagos - 2026
              </h4>
              <h2 className="editorial-text">
                “If the customer can see I passed the test before hiring me, I
                dont need to beg for the job. The test is begging for me.”
              </h2>
              <figcaption class="figcaption">
                <span class="line"></span>
                <span style={{ fontFamily: "Poppins" }}>
                  <strong>Emeka</strong> · Phone repair · Computer Village
                </span>
              </figcaption>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h4 className="mono-tabular-text">
                  Skill is a verb. Prove it.
                </h4>
              </div>
              <div>
                <h4 className="mono-tabular-text">Verivo · v1.0</h4>
              </div>
            </div>
          </LinearContainer>
          <div
            style={{
              width: "100%",
              maxWidth: "700px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <Link to="/">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    justifyContent: "flex-end",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 12H5M5 12L11 6M5 12L11 18"
                      stroke="#2A2A28"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h4 className="auth-go-back">Back</h4>
                </div>
              </Link>
              <div>
                <div style={{ width: "70%" }}>
                  <h4
                    className="mono-tabular-text"
                    style={{
                      color: "#6b6055",
                      fontSize: "14px",
                      letterSpacing: "0.17em",
                    }}
                  >
                    Sign in or Join
                  </h4>
                  <h2
                    className="editorial-text"
                    style={{
                      color: "#14110f",
                      fontWeight: "500",
                      fontSize: "clamp(1.8rem, 5vw, 3.8rem)",
                      lineHeight: "0.96",
                      margin: 0,
                    }}
                  >
                    Are you here to{" "}
                    <span style={{ color: "#0f3d2e", fontStyle: "italic" }}>
                      do the <br /> work
                    </span>
                    , <br />
                    or to <span style={{ color: "#ea580c" }}>hire</span> it?
                  </h2>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "17px",
                      color: "#2a2521",
                      lineHeight: "27px",
                    }}
                  >
                    Recivo serves two sides. Pick one and we’ll tailor what
                    you’re asked to share. You can switch later.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <RegChoice
                    icon="../src/assets/workerTools.png"
                    iconBg="#E2E0D6"
                    eyebrow="01 — Artisans, technicians, craftspeople"
                    bigText="I do the work"
                    smallText="Prove a real trade. Get matched to jobs. Build a portable credential employers can replay before hiring."
                  />
                  <RegChoice
                    icon="../src/assets/employer.png"
                    iconBg="#F2E1D2"
                    hoverColor="#EA580C"
                    eyebrow="02 — Brands, SMEs, fleet managers"
                    bigText="I hire the work"
                    smallText="Post in plain language. Replay each worker's diagnostic interview. Fund per-job escrow. Release on completion."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
