import { useState } from "react";
import { QuoteModal } from "./QuoteModal";
import svgPaths from "../../imports/Container/svg-ustnnnn2kn";
import veneersImg from "../../imports/Imagen.webp";
import { useInView } from "../../hooks/useInView";

export function CrownsFixSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, visible } = useInView();


  return (
    <section
      className="md:py-12 md:px-12"
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-stretch md:gap-4">
        {/* ── RIGHT col: content (50%) ── */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center gap-3 px-6 pt-8 pb-6  md:pl-4 md:pr-6 md:pt-2 md:pt-0 md:order-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(20px)",
            transition:
              "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {/* ── Text block ── */}
          <div className="flex flex-col gap-2 ">
            <h2
              className="uppercase tracking-[0.18em] text-[14px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#A58E55",
              }}
            >
              Dental Crowns in Mexico, Benefits, Cost & Treatment
            </h2>
            <h3
              className="leading-[1.1] text-[40px] md:text-[48px]"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#21201E",
                fontWeight: 200,
              }}
            >
              <span
                style={{ fontWeight: 700, color: "#A58E55" }}
              >
                Restore Your Smile {" "}
              </span>
              With Natural-Looking Crowns
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
              Dental crowns restore damaged teeth, improve appearance, and strengthen your smile. Patients choose getting crowns in Mexico for high-quality care at lower costs.
            </p>

            <button
                  onClick={() => setModalOpen(true)}
                  className="w-full md:w-auto md:px-10 h-[54px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90 mt-4"
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
        </div>

        {/* ── LEFT col: image (50%) ── */}
        <div
          className="relative w-full md:w-1/2 md:order-1 aspect-[1/1] md:aspect-[5/4] rounded-md"
        >
          <img
            src={veneersImg}
            alt="Porcelain veneers on marble"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-t-xl md:rounded-xl"
            fetchPriority="high"
            decoding="async"
          />
          {/* fade bottom on mobile */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
            }}
          />
          {/* fade right edge on desktop */}
        </div>
      </div>
    </section>
  );
}