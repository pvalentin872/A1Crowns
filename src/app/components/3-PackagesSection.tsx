import { useState } from "react";
import { X, ChevronRight, Check } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import patternTile from "../../imports/Patterns_Tile.webp";
import packageImg from "../../imports/dental_crowns_a1_smile_design.webp";
import { useInView } from "../../hooks/useInView";

const FEATURED_PACKAGE = {
  id: 1,
  name: "Full Mouth Crowns Cost in Mexico",
  tagline: "TAGLINE",
  startingPrice: "$12,000",
  unit: "/ full set",
  image: packageImg,
  description:
    "Package description goes here.",
  includes: [
    "20 eMax Porcelain Crowns",
    "8 Zirconia Crowns (Molar Crowns)",
    "A1 Luxury Suite + Transportation",
  ],
};

interface PackageDetailModalProps {
  pkg: typeof FEATURED_PACKAGE | null;
  onClose: () => void;
  onGetQuote: () => void;
}

function PackageDetailModal({
  pkg,
  onClose,
  onGetQuote,
}: PackageDetailModalProps) {
  if (!pkg) return null;
  return (
    <div
      className="fixed inset-0 z-[998] flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundColor: "rgba(15,15,15,0.88)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="w-full md:max-w-[860px] rounded-[12px] overflow-hidden flex flex-col md:flex-row"
        style={{
          backgroundColor: "#F9F9F9",
          maxHeight: "90vh",
          maxWidth: "min(92vw, 860px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── LEFT: Image (full width on mobile, 50% on desktop) ── */}
        <div className="relative w-full md:w-1/2 shrink-0 h-[260px] md:h-auto md:min-h-[420px]">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Bottom fade — mobile only */}
          <div className="absolute inset-0 md:hidden" />
          {/* Right-edge fade — desktop only */}
          <div className="absolute inset-0 hidden md:block" />

           {/* Close button — sits on image on mobile */}
           <button
             onClick={onClose}
             className="md:hidden absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
             aria-label="Close"
           >
            <X size={20} strokeWidth={1.5} color="#930000" />
          </button>

          {/* Mobile: name + tagline overlay at bottom of image */}
          <div className="md:hidden absolute bottom-4 left-5 right-14">
            <p
              className="uppercase tracking-[0.15em] text-[12px] mb-1"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#F9F9F9",
              }}
            >
              {pkg.tagline}
            </p>
            <h3
              className="text-[24px] leading-[1.15]"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#F9F9F9",
                fontWeight: 600,
              }}
            >
              {pkg.name}
            </h3>
          </div>
        </div>

        {/* ── RIGHT: Content (full width on mobile, 50% on desktop) ── */}
        <div className="flex-1 overflow-y-auto px-2 py-2 md:px-4 md:py-4 relative">
           {/* Close button — desktop only, top-right of content panel */}
           <button
             onClick={onClose}
             className="hidden md:flex absolute top-4 right-4 w-9 h-9 rounded-full items-center justify-center transition-colors hover:bg-black/10"
             style={{ backgroundColor: "rgba(15,15,15,0.07)" }}
             aria-label="Close"
           >
            <X size={20} strokeWidth={1.5} color="#21201E" />
          </button>

          {/* Desktop: tagline + name */}
          <div className="hidden md:block mb-5 pr-10">
            <p
              className="uppercase tracking-[0.15em] text-[10px] md:text-[14px] mb-1"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#A58E55",
              }}
            >
              {pkg.tagline}
            </p>
            <h3
              className="text-[28px] md:text-[32px] leading-[1.1]"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#21201E",
                fontWeight: 600,
              }}
            >
              {pkg.name}
            </h3>
          </div>

          {/* Price pill */}
          <div
            className="flex items-baseline gap-2 mb-4 px-4 py-3 rounded-[4px] drop-shadow-lg"
            style={{ backgroundColor: "#FFFFFF"}}
          >
            <span
              className="text-[32px]"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#A58E55",
                fontWeight: 700,
              }}
            >
              {pkg.startingPrice}
            </span>
            <span
              className="text-[13px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#8A7A5A",
              }}
            >
              starting{pkg.unit}
            </span>
          </div>

          {/* Description */}
          <p
            className="text-[14px] md:text-[18px] leading-[1.3] mb-5"
            style={{
              fontFamily: "Lato, sans-serif",
              color: "#21201E",
            }}
          >
            {pkg.description}
          </p>

          {/* Includes */}
          <p
            className="text-[14px] mb:text-[14px] uppercase tracking-wider mb-3"
            style={{
              fontFamily: "Lato, sans-serif",
              color: "#A58E55",
              fontWeight: 800,
            }}
          >
            WHAT'S INCLUDED
          </p>
          <div className="flex flex-col gap-2 mb-6">
            {pkg.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F0EAD8" }}
                >
                  <Check
                    size={14}
                    strokeWidth={3}
                    color="#A58E55"
                  />
                </div>
                <span
                  className="text-[14px]"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    color: "#21201E",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              onClose();
              onGetQuote();
            }}
            className="w-full h-[52px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #C4A96A, #A58E55)",
              color: "#F9F9F9",
              fontFamily: "Lato, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              boxShadow: "0 8px 24px rgba(165,142,85,0.35)",
            }}
          >
            GET MY FREE QUOTE
          </button>
        </div>
      </div>
    </div>
  );
}

export function PackagesSection() {
  const { ref, visible } = useInView();
  const [selectedPkg, setSelectedPkg] = useState<
    typeof FEATURED_PACKAGE | null
  >(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        className="relative py-12 md:py-16"
        style={{
          backgroundColor: "#21201E",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
        {/* Tile pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${patternTile})`,
            backgroundRepeat: "repeat",
            backgroundSize: "140px 140px",
            opacity: 0.8,
          }}
        />
        <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
          {/* Headline UI */}
          

          {/* Desktop: 2/3 text + 1/3 card | Mobile: stack vertical */}
          <div
            className="flex flex-col md:flex-row gap-2 md:gap-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* ─── LEFT 2/3: Text content ─── */}
            <div className="w-full md:w-2/3 flex flex-col justify-center gap-1 md:gap-6 ">
              {/* Tagline */}
              <div className="text-center mb-4 md:mb-6">
                <h2
                  className="uppercase tracking-[0.18em] mb-2 text-[14px] text-left"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    color: "#A58E55",
                  }}
                >
                  Dental Crown Cost in Mexico & Affordable Packages
                </h2>
                <h3
                  className="text-[40px] md:text-[48px] leading-[1.1] mb-4 text-left"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    color: "#F9F9F9",
                    fontWeight: 300,
                  }}
                >
                  <span
                    style={{ fontWeight: 700, color: "#C4A96A" }}
                  >
                    Premium Dental Care {" "}
                  </span>
                  at an Affordable Cost
                </h3>
                <p
                  className="text-[18px] md:text-[20px] leading-[1.05] mx-auto text-left"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 300,
                    color: "rgba(249,249,249,0.95)",
                    maxWidth: "700px",
                  }}
                >
                Save on dental crowns in Mexico without compromising quality. From single crowns to full mouth restoration, we offer transparent pricing and personalized care.
                </p>
              </div>
             
            </div>

            {/* ─── RIGHT 1/3: Original card (EXACTLY as before) ─── */}
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <div
                className="relative overflow-hidden rounded-[8px] flex flex-col"
                style={{
                  boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                  minHeight: "320px",
                }}
              >
                <img
                  src={FEATURED_PACKAGE.image}
                  alt={FEATURED_PACKAGE.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 35%, rgba(10,10,10,0) 65%)",
                  }}
                />
                <div className="relative flex flex-col justify-between h-full min-h-[480px] md:min-h-[540px] pl-0 pr-5 md:pr-6 py-5 md:py-6">
                  <div
                    className="flex items-center gap-1.5 pl-4 pr-5 md:pr-6 py-1.5 md:py-2 self-start shrink-0 opacity-90"
                    style={{
                      backgroundColor: "#F9F9F9",
                      borderRadius: "0 100px 100px 0",
                    }}
                  >
                    <span
                      className="text-[28px] md:text-[30px] lg:text-[34px]"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        color: "#A58E55",
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      {FEATURED_PACKAGE.startingPrice}
                    </span>
                    <span
                      className="text-[22px] md:text-[28px] lg:text-[30px]"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        color: "#21201E",
                        fontWeight: 400,
                        lineHeight: 1.2,
                      }}
                    >
                      USD
                    </span>
                  </div>

                  <div className="flex flex-col gap-[4px] pl-[12px] pr-[0px] py-[0px] text-[32px]">
                    <p
                      className="text-[28px] lg:text-[30px] mb-1 leading-[1.15]"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        color: "#F9F9F9",
                        fontWeight: 400,
                      }}
                    >
                      {FEATURED_PACKAGE.name}
                    </p>

                    <div className="flex flex-col gap-[4px] mb-3">
                      <p
                        className="text-[16px] lg:text-[18px]"
                        style={{
                          fontFamily: "Oswald, sans-serif",
                          color: "rgba(249,249,249,0.9)",
                          fontWeight: 100,
                          lineHeight: 1.2,
                        }}
                      >
                        This package Includes:
                      </p>
                      {FEATURED_PACKAGE.includes
                        .slice(0, 3)
                        .map((item, j) => (
                          <p
                            key={j}
                            className="text-[18px] lg:text-[20px]"
                            style={{
                              fontFamily: "Oswald, sans-serif",
                              color: "#F9F9F9",
                              fontWeight: 400,
                              lineHeight: 1.3,
                            }}
                          >
                            {item}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="flex-1 h-[44px] rounded-[6px] transition-all active:scale-[0.95]"
                  style={{
                    background: "#A58E55",
                    color: "#F9F9F9",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Get Your Free Quote
                </button>

                <button
                  onClick={() => setSelectedPkg(FEATURED_PACKAGE)}
                  className="flex items-center gap-1 px-3 h-[44px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-80"
                  style={{
                    backgroundColor: "rgba(249,249,249,0.12)",
                    border: "1px solid rgba(249,249,249,0.2)",
                    backdropFilter: "blur(8px)",
                    color: "#F9F9F9",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Details
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PackageDetailModal
        pkg={selectedPkg}
        onClose={() => setSelectedPkg(null)}
        onGetQuote={() => setQuoteOpen(true)}
      />
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}