import { useState, useEffect, useRef } from "react";
import { QuoteModal } from "./QuoteModal";
import bgbanner from "../../imports/bg_banner_01.webp";
import bgbannermobile from "../../imports/bg_banner_mobile.webp";

export function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={ref}
        className="relative w-full overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
           <img
             src={bgbannermobile}
             alt="Playa del Carmen luxury"
             className="block md:hidden w-full h-full object-cover"
             style={{
               animation: "kenBurns2 18s ease-in-out infinite alternate",
               transformOrigin: "center bottom",
             }}
           />
           {/* Desktop */}
           <img
             src={bgbanner}
             alt="Playa del Carmen luxury"
            className="hidden md:block w-full h-full object-cover"
            style={{
              animation: "kenBurns2 18s ease-in-out infinite alternate",
              transformOrigin: "center bottom",
            }}
          />
        </div>

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,15,15,0.3) 0%, rgba(15,15,15,0.55) 40%, rgba(15,15,15,0.88) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative flex flex-col justify-center px-[0px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(30px)",
            transition:
              "opacity 0.9s ease, transform 0.9s ease",
            paddingTop: "90px",
            paddingBottom: "90px",
          }}
        >
          <div className="max-w-3xl mx-auto w-full text-center px-[40px]">
            <h2
              className="uppercase tracking-[0.18em] mb-3 text-[14px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "white",
              }}
            >
              Book Your Dental Veneers Consultation in Mexico
            </h2>

            <h3
              className="text-[36px] md:text-[48px] leading-[1.05] mb-5"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#F9F9F9",
                fontWeight: 200,
              }}
            >
              Your New{" "}
              <span
                style={{ fontWeight: 700, color: "#dabf80"}}
              >
                Smile Awaits
              </span>
            </h3>

            <p
              className="text-[18px] md:text-[20px] leading-[1.05] mb-4 mx-auto"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 300,
                color: "rgba(254,254,254,0.95)",
                maxWidth: "560px",
              }}
            >
              Ready to get veneers in Mexico? Schedule your consultation today, explore veneers cost in Mexico, and let our smile experts create a personalized porcelain veneers treatment in Cancun.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="w-full md:w-auto md:px-12 h-[58px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #C4A96A, #A58E55)",
                  color: "#F9F9F9",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  boxShadow:
                    "0 10px 40px rgba(165,142,85,0.5), 0 4px 12px rgba(0,0,0,0.4)",
                }}
              >
                GET MY FREE QUOTE
              </button>

              <a
                href="tel:+19999999999"
                className="w-full md:w-auto md:px-10 h-[58px] rounded-[6px] flex items-center justify-center transition-all hover:opacity-80"
                style={{
                  backgroundColor: "rgba(249,249,249,0.12)",
                  border: "1.5px solid rgba(249,249,249,0.25)",
                  backdropFilter: "blur(8px)",
                  color: "#F9F9F9",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
              >
                CALL US NOW
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex justify-center gap-6 mt-6 flex-wrap">
              {[
                "No commitment",
                "Free consultation",
                "Fast response",
              ].map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#A58E55" }}
                  />
                  <span
                    className="text-[16px]"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      color: "rgba(249,249,249,0.)",
                    }}
                  >
                    {label}
                  </span>
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

      <style>{`
        @keyframes kenBurns2 {
          0% { transform: scale(1.0) translate(0%, 0%); }
          100% { transform: scale(1.1) translate(1%, -1%); }
        }
      `}</style>
    </>
  );
}