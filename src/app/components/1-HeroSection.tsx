import { useState, useEffect } from "react";
import { Star, Smile, TrendingDown } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import bg_hero from "../../imports/bg-hero.webp";
import video_hero from "../../imports/vide_hero_mobile.mp4";


export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          {/* Desktop: static image with Ken Burns */}
          <img
            src={bg_hero}
            alt="Beautiful smile"
            className="hidden md:block w-full h-full object-cover"
            fetchPriority="high"
            style={{
              animation:
                "kenBurns 16s ease-in-out infinite alternate",
              transformOrigin: "center center",
            }}
          />
          {/* Mobile: autoplay video */}
          <video
            className="block md:hidden w-full h-full object-cover"
            src={video_hero}

            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,15,15,0.65) 8%, rgba(15,15,15,0.10) 45%, rgba(15,15,15,0.6) 75%, rgba(15,15,15,0.92) 100%)",
          }}
        />

        {/* Main content — desktop 2-col, mobile single col */}
        <div
          className="absolute inset-0 flex items-end z-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(20px)",
            transition:
              "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-0 md:pb-16">
            <div className="flex flex-col md:flex-row md:items-end md:gap-12 lg:gap-20">
              {/* Left — headline + CTA */}
              <div className="flex-1 mb-6 md:mb-0">
                <h1
                  className="uppercase tracking-[0.18em] mb-3 text-[14px]"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  Dental Crowns in Mexico
                </h1>
                <h2
                  className="text-[44px] md:text-[56px] lg:text-[64px] leading-[1.05] mb-5"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    color: "#F9F9F9",
                    fontWeight: 300,
                  }}
                >
                  High-Quality, Affordable{" "}
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#C4A96A",
                    }}
                  >
                    Smile Restoration
                  </span>
                </h2>
                <p
                  className="text-[18px] md:text-[20px] pb-4 leading-[1.05]"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 300,
                    color: "rgba(249,249,249,0.95)",
                    maxWidth: "560px",
                  }}
                >
                  Restore your smile with <b>high-quality dental crowns in Mexico</b> and enjoy <b>natural-looking results at affordable prices.</b>
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full md:w-auto md:px-10 h-[54px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, #C4A96A, #A58E55)",
                    color: "#F9F9F9",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    boxShadow:
                      "0 8px 32px rgba(165,142,85,0.45), 0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  GET MY FREE QUOTE
                </button>
              </div>

              {/* Right — trust metrics */}
              <div className="md:w-[300px] lg:w-[340px] shrink-0">
                {/* Mobile: horizontal row */}
                <div
                  className="grid grid-cols-3 gap-2 px-2 py-4 rounded-[8px] md:hidden"
                  style={{
                    background: "rgba(33,32,30,0.65)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(165,142,85,0.2)",
                  }}
                >
                  {[
                    {
                      icon: (
                        <Smile
                          size={32}
                          strokeWidth={1.5}
                          color="#A58E55"
                        />
                      ),
                      number: "1,000+",
                      label: "Smiles Designed",
                    },
                    {
                      icon: (
                        <TrendingDown
                          size={32}
                          strokeWidth={1.5}
                          color="#A58E55"
                        />
                      ),
                      number: "70%",
                      label: "Avg. Savings",
                    },
                    {
                      icon: (
                        <Star
                          size={32}
                          strokeWidth={1.5}
                          color="#A58E55"
                          fill="#A58E55"
                        />
                      ),
                      number: "5-Star",
                      label: "Patient Experience",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1"
                    >
                      {item.icon}
                      <span
                        className="text-[16px]"
                        style={{
                          fontFamily: "Oswald, sans-serif",
                          color: "#F9F9F9",
                          fontWeight: 600,
                          lineHeight: 1,
                        }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="text-[10px] text-center leading-tight"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          color: "rgba(249,249,249,0.65)",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Desktop: vertical stat cards */}
                <div className="hidden md:flex flex-col gap-3">
                  {[
                    {
                      icon: (
                        <Smile
                          size={32}
                          strokeWidth={1.5}
                          color="#A58E55"
                        />
                      ),
                      number: "1,000+",
                      label: "Smiles Designed",
                      sub: "Happy patients & counting",
                    },
                    {
                      icon: (
                        <TrendingDown
                          size={32}
                          strokeWidth={1.5}
                          color="#A58E55"
                        />
                      ),
                      number: "Up to 70%",
                      label: "Avg. Savings",
                      sub: "vs. U.S. dental prices",
                    },
                    {
                      icon: (
                        <Star
                          size={32}
                          strokeWidth={1.5}
                          color="#A58E55"
                          fill="#A58E55"
                        />
                      ),
                      number: "5-Star",
                      label: "Rated Experience",
                      sub: "Google & patient reviews",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 px-5 py-4 rounded-[6px]"
                      style={{
                        background: "rgba(33,32,30,0.72)",
                        backdropFilter: "blur(14px)",
                        border:
                          "1px solid rgba(165,142,85,0.2)",
                      }}
                    >
                      <div
                        className="w-14 h-14 rounded-[4px] flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor:
                            "rgba(165,142,85,0.15)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className="text-[20px] leading-none"
                          style={{
                            fontFamily: "Oswald, sans-serif",
                            color: "#F9F9F9",
                            fontWeight: 700,
                          }}
                        >
                          {item.number}
                        </p>
                        <p
                          className="text-[13px]"
                          style={{
                            fontFamily: "Lato, sans-serif",
                            color: "#A58E55",
                            fontWeight: 700,
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-[11px]"
                          style={{
                            fontFamily: "Lato, sans-serif",
                            color: "rgba(249,249,249,0.5)",
                          }}
                        >
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.0) translate(0%, 0%); }
          100% { transform: scale(1.12) translate(-2%, -1%); }
        }
      `}</style>
    </>
  );
}