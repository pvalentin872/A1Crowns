import { useState } from "react";
import bgBanner from "../../imports/banner_cosmetic_dentistry.webp";
import bgBannerMobile from "../../imports/banner_cosmetic_dentistry_mob.webp";
import { QuoteModal } from "./QuoteModal";
import { useInView } from "../../hooks/useInView";

export function BannerCosmetic() {
  const { ref, visible } = useInView();
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#21201E" }}
    >
      {/* Background image con <picture> para responsive loading */}
      <div className="md:absolute md:inset-0 relative w-full">
        <picture>
          <source media="(max-width: 767px)" srcSet={bgBannerMobile} />
          <img
            src={bgBanner}
            alt=""
            className="w-full md:h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
        {/* Desktop gradient overlay */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(33,32,30,0) 40%, rgba(33,32,30,0.50) 50%, #21201E 100%)",
          }}
        />
        {/* Mobile gradient fade at bottom of image */}
        <div
          className="block md:hidden absolute bottom-0 left-0 right-0 h-20"
          style={{
            background:
              "linear-gradient(0deg, #21201E 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="md:relative md:z-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-16 md:flex">
        <div className=" md:w-1/2 order-1">
        </div>
        <div className="md:flex md:items-center md:justify-end  md:w-1/2 order-2 md:py-12">
          <div
            className="md:max-w-xl pt-8 pb-12 md:py-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(30px)",
              transition:
                "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <h2
              className="uppercase tracking-[0.18em] mb-3 text-[14px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#dfcc9e",
              }}
            >
              Smile Makeover With Dental Crowns in Mexico
            </h2>
            <h3
              className="text-[36px] md:text-[44px] leading-[1.1] mb-4"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#F9F9F9",
                fontWeight: 300,
              }}
            >
              Restore More Than Your Smile,{" "}
              <span
                style={{
                  fontWeight: 700,
                  color: "#C4A96A",
                }}
              >
                Restore Confidence
              </span>
            </h3>
            <p
              className="text-[18px] md:text-[20px] leading-[1.05]"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 300,
                color: "rgba(249,249,249,0.95)",
                maxWidth: "560px",
              }}
            >
              Many patients combine dental crowns in Mexico with cosmetic treatments for a complete smile makeover that restores both function and aesthetics..
            </p>
            <button
              onClick={() => setQuoteOpen(true)}
              className="w-full md:w-auto md:px-10 h-[54px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90 mt-6"
              style={{
                background:
                  "linear-gradient(135deg, #C4A96A, #A58E55)",
                color: "#F9F9F9",
                fontFamily: "Lato, sans-serif",
                fontSize: "17px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                boxShadow:
                  "0 8px 32px rgba(212, 180, 98, 0.45), 0 2px 8px rgba(109, 102, 102, 0.3)",
              }}
            >
              GET MY FREE QUOTE
            </button>
          </div>
        </div>
        
      </div>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </section>
  );
}
