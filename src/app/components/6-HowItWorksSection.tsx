import { useState } from "react";
import { Phone, Camera, FileText, Plane } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { useInView } from "../../hooks/useInView";
import patternTile from "../../imports/Patterns_Tile.webp";

type LucideIcon = React.ComponentType<{
  size?: number;
  strokeWidth?: number;
  color?: string;
}>;

const STEPS: {
  number: string;
  title:
    | "Book Your Free Consultation"
    | "Send Your Smile Photos"
    | "Receive Your Treatment Plan & Quote"
    | "Travel to Playa del Carmen & Smile Again";
  description: string;
  icon: LucideIcon;
  highlight: boolean;
}[] = [
  {
    number: "01",
    title: "Book Your Free Consultation",
    description:
      "Fill out our quick form or call us directly. Our smile specialists will get in touch within 24 hours.",
    icon: Phone,
    highlight: true,
  },
  {
    number: "02",
    title: "Send Your Smile Photos",
    description:
      "Share a few photos of your current smile and we'll start building your personalized treatment plan.",
    icon: Camera,
    highlight: false,
  },
  {
    number: "03",
    title: "Receive Your Treatment Plan & Quote",
    description:
      "We'll send you a detailed digital smile preview and a transparent, no-surprise quote.",
    icon: FileText,
    highlight: false,
  },
  {
    number: "04",
    title: "Travel to Playa del Carmen & Smile Again",
    description:
      "Fly to Playa del Carmen, enjoy our luxury clinic, and return home with the smile you've always dreamed of.",
    icon: Plane,
    highlight: false,
  },
];

export function HowItWorksSection() {
  const { ref, visible } = useInView();
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        className="relative isolate py-12 md:py-16 overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        {/* Pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${patternTile})`,
            backgroundRepeat: "repeat",
            backgroundSize: "140px 140px",
            opacity: 0.8,
          }}
        />

        {/* Soft gradient (same style as original, lighter) */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(to top, #F9F9F9 0%, rgba(249,249,249,0.88) 18%, rgba(249,249,249,0.62) 38%, rgba(249,249,249,0.22) 62%, rgba(249,249,249,0) 82%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
          {/* Headline UI */}
          <div
            className="text-center mb-12 md:mb-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <h2
              className="uppercase tracking-[0.18em] mb-2 text-[14px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#A58E55",
              }}
            >
              Getting Dental Crowns in Mexico – Step-by-Step
            </h2>
            <h3
              className="text-[36px] md:text-[48px] leading-[1.1] mb-4"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#21201E",
                fontWeight: 300,
              }}
            >
              A Simple Way to  {" "}
              <span
                style={{ fontWeight: 700, color: "#A58E55" }}
              >
                Restore Your Smile
              </span>
            </h3>
            <p
              className="text-[18px] md:text-[20px] leading-[1.05] mx-auto"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 300,
                color: "rgba(0,0,0,0.95)",
                maxWidth: "700px",
              }}
            >
             Getting dental crowns in Mexico is simple. From consultation to treatment, we provide a smooth, stress-free experience every step of the way.
            </p>
          </div>

          {/* ── MOBILE: Vertical timeline ── */}
          <div className="relative flex flex-col gap-0 md:hidden">
            <div
              className="absolute left-[27px] top-8 bottom-8 w-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, #A58E55 0%, rgba(165,142,85,0.2) 100%)",
              }}
            />
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="relative flex gap-5 pb-6"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: step.highlight
                        ? "linear-gradient(135deg, #C4A96A, #A58E55)"
                        : "#21201E",
                      boxShadow: step.highlight
                        ? "0 4px 16px rgba(165,142,85,0.4)"
                        : "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <step.icon
                      size={32}
                      strokeWidth={1.5}
                      color="#F9F9F9"
                    />
                  </div>
                </div>
                <div
                  className="flex-1 rounded-[6px] p-5 mt-1"
                  style={{
                    backgroundColor: step.highlight
                      ? "#21201E"
                      : "#fff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    border: step.highlight
                      ? "none"
                      : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    className="uppercase tracking-wider text-[16px]"
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      color: "#A58E55",
                      fontWeight: 600,
                    }}
                  >
                    STEP {step.number}
                  </span>
                  <h4
                    className="leading-[1.2] mt-1 mb-2 text-[20px]"
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      color: step.highlight
                        ? "#F9F9F9"
                        : "#21201E",
                      fontWeight: 600,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="leading-[1.6] text-[16px]"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      color: step.highlight
                        ? "rgba(249,249,249,0.7)"
                        : "#777",
                    }}
                  >
                    {step.description}
                  </p>
                  {step.highlight && (
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className="flex-1 w-full h-[44px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90 mt-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #C4A96A, #A58E55)",
                        color: "#F9F9F9",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      Get Quote
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── DESKTOP: Horizontal timeline ── */}
          <div className="hidden md:block">
            <div className="relative flex gap-6 mb-0">
              {/* Background line across circles */}
              <div
                className="absolute top-[27px] left-[52px] right-[52px] h-[2px] z-0"
                style={{
                  background:
                    "linear-gradient(90deg, #A58E55 0%, rgba(165,142,85,0.3) 100%)",
                }}
              />
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="flex-1 flex flex-col items-center text-center z-10"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5 shrink-0"
                    style={{
                      background: step.highlight
                        ? "linear-gradient(135deg, #C4A96A, #A58E55)"
                        : "#21201E",
                      boxShadow: step.highlight
                        ? "0 4px 20px rgba(165,142,85,0.45)"
                        : "0 4px 16px rgba(0,0,0,0.2)",
                      border: step.highlight
                        ? "none"
                        : "2px solid rgba(165,142,85,0.25)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <step.icon
                      size={32}
                      strokeWidth={1.5}
                      color="#F9F9F9"
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="w-full rounded-[6px] p-5 text-left"
                    style={{
                      backgroundColor: step.highlight
                        ? "#21201E"
                        : "#fff",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
                      border: step.highlight
                        ? "1px solid rgba(165,142,85,0.2)"
                        : "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <span
                      className="text-[11px] uppercase tracking-wider"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        color: "#A58E55",
                        fontWeight: 600,
                      }}
                    >
                      STEP {step.number}
                    </span>
                    <h4
                      className="text-[22px] leading-[1.25] mt-1.5 mb-2"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        color: step.highlight
                          ? "#F9F9F9"
                          : "#21201E",
                        fontWeight: 500,
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-[16px] leading-[1.6]"
                      style={{
                        fontFamily: "Lato, sans-serif",
                        color: step.highlight
                          ? "rgba(249,249,249,0.7)"
                          : "#888",
                      }}
                    >
                      {step.description}
                    </p>
                    {step.highlight && (
                      <button
                        onClick={() => setQuoteOpen(true)}
                        className="flex-1 w-full h-[44px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90 mt-4"
                        style={{
                          background:
                            "linear-gradient(135deg, #C4A96A, #A58E55)",
                          color: "#F9F9F9",
                          fontFamily: "Lato, sans-serif",
                          fontSize: "18px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        Get Quote
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}