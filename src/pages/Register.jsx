import LinearContainer from "../components/LinearContainer";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import RegChoice from "../components/RegChoice";
import Animate from "../components/Animate";
import AuthIntro from "../components/AuthIntro";
import RoleToggle from "../components/RoleToggle";
import FormField from "../components/FormField";
import TradeSelect from "../components/TradeSelect";
import AgreementCheckbox, {
  AgreementLink,
} from "../components/AgreementCheckbox";
export default function Register() {
  const [hover, setHover] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Seed role from whatever's in the URL the moment this mounts...
  const [role, setRole] = useState(() => searchParams.get("role"));
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    setRole(searchParams.get("role"));
  }, [searchParams]);

  return (
    <>
      <div>
        <div className="register-shell">
          <LinearContainer>
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
                <h4 className="logoText" style={{ color: "#fff" }}>
                  Verivo
                </h4>
              </div>
            </Animate>
            <Animate delay={0.16} style={{ width: "80%" }}>
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
            </Animate>
            <Animate
              delay={0.27}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <h4 className="mono-tabular-text">
                  Skill is a verb. Prove it.
                </h4>
              </div>
              <div>
                <h4 className="mono-tabular-text">Verivo · v1.0</h4>
              </div>
            </Animate>
          </LinearContainer>
          <div className="register-form-col" style={{ overflowY: "hidden" }}>
            <div className="register-form-inner">
              {role ? (
                <div className="register-form-inner-alt">
                  <Animate
                    delay={0.05}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <AuthIntro
                      eyebrow="Create your Recivo"
                      description="First, your phone. Then we open a Paystack Virtual Account in the background while you do the real work — the diagnostic interview."
                    >
                      <div>
                        Let’s set up the
                        <br />
                        <span style={{ color: "#0f3d2e", fontStyle: "italic" }}>
                          paperwork.
                        </span>
                      </div>
                    </AuthIntro>
                    <RoleToggle
                      value={role}
                      onChange={(next) =>
                        setSearchParams((prev) => {
                          const params = new URLSearchParams(prev);
                          params.set("role", next);
                          return params;
                        })
                      }
                    />
                    <div>
                      <FormField
                        type="text"
                        label="Your name"
                        required={true}
                        placeholder="Oluwatosin Akinfenwa"
                      />
                      <FormField
                        type="tel"
                        label="Phone number"
                        required={true}
                        placeholder="803 000 0000"
                        countryCode="+234"
                        countryLabel="NG"
                        underText="We'll send a one-time code. No password to remember."
                      />
                    </div>
                    <div>
                      <TradeSelect />
                    </div>
                    <div>
                      <AgreementCheckbox
                        checked={agreed}
                        onChange={setAgreed}
                        color="#0f3d2e"
                      >
                        I agree to the Recivo Terms and Privacy Notice .
                        NDPR-compliant; voice recordings deletable on request.
                      </AgreementCheckbox>
                    </div>
                  </Animate>
                </div>
              ) : (
                <>
                  <Link to="/">
                    <Animate
                      delay={0.05}
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
                    </Animate>
                  </Link>
                  <div>
                    <Animate delay={0.16}>
                      <AuthIntro
                        eyebrow="Sign in or Join"
                        description="Recivo serves two sides. Pick one and we’ll tailor what you’re asked to share. You can switch later."
                      >
                        Are you here to{" "}
                        <span style={{ color: "#0f3d2e", fontStyle: "italic" }}>
                          do the <br /> work
                        </span>
                        , <br />
                        or to <span style={{ color: "#ea580c" }}>hire</span> it?
                      </AuthIntro>
                    </Animate>
                    <Animate
                      stagger
                      delay={0.3}
                      step={0.1}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <Link to="?role=worker">
                        <RegChoice
                          icon="../src/assets/workerTools.png"
                          iconBg="#E2E0D6"
                          eyebrow="01 — Artisans, technicians, craftspeople"
                          bigText="I do the work"
                          smallText="Prove a real trade. Get matched to jobs. Build a portable credential employers can replay before hiring."
                        />
                      </Link>
                      <Link to="?role=employer">
                        <RegChoice
                          icon="../src/assets/employer.png"
                          iconBg="#F2E1D2"
                          hoverColor="#EA580C"
                          eyebrow="02 — Brands, SMEs, fleet managers"
                          bigText="I hire the work"
                          smallText="Post in plain language. Replay each worker's diagnostic interview. Fund per-job escrow. Release on completion."
                        />
                      </Link>
                    </Animate>
                    <Animate
                      delay={0.49}
                      style={{ paddingTop: "20px", paddingBottom: "20px" }}
                    >
                      <div className="register-bottom-row">
                        <h4 className="already-with-us">
                          Already with us?
                          <Link to="/auth/login">
                            <span
                              onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}
                              style={{
                                paddingLeft: "5px",
                                textDecoration: "underline",
                                textDecorationColor: "#c89a2a",
                                color: hover ? "#0f3d2e" : "#14110f",
                                textDecorationThickness: "2px",
                                textUnderlineOffset: "4px",
                                transition: "color 0.3s ease",
                              }}
                            >
                              Sign in
                            </span>
                          </Link>
                        </h4>
                        <div>
                          <Link to="/">
                            <h3
                              style={{
                                color: "#14110a",
                                fontFamily: "Poppins",
                                fontWeight: "400",
                                fontSize: "15px",
                              }}
                            >
                              Back to home
                            </h3>
                          </Link>
                        </div>
                      </div>
                    </Animate>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
