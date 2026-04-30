import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { QuoteModal } from "./QuoteModal";

// ─── Local patient images ───────────────────────────────────────────────────
import before01 from "../../imports/veneers_patient_before_01.png";
import after01 from "../../imports/veneers_patient_after_01.png";

import before02 from "../../imports/veneers_patient_before_02.png";
import after02 from "../../imports/veneers_patient_after_02.png";

import before03 from "../../imports/veneers_patient_before_03.png";
import after03 from "../../imports/veneers_patient_after_03.png";

import before04 from "../../imports/veneers_patient_before_04.png";
import after04 from "../../imports/veneers_patient_after_04.png";

import before05 from "../../imports/veneers_patient_before_05.png";
import after05 from "../../imports/veneers_patient_after_05.png";

import before06 from "../../imports/veneers_patient_before_06.png";
import after06 from "../../imports/veneers_patient_after_06.png";

import bgheader from "../../imports/bg-marble.png";
// ───────────────────────────────────────────────────────────────────────────

const TRANSFORMATIONS = [
  {
    id: 1,
    label: "Charlann B.",
    treatment: "Porcelain Veneers",
    before: before01,
    after: after01,
  },
  {
    id: 2,
    label: "Jeremy F.",
    treatment: "Emax Makeover",
    // Replace with: before: before02, after: after02
    before: before02,
    after: after02,
  },
  {
    id: 3,
    label: "Erika M.",
    treatment: "Porcelain Veneers",
    // Replace with: before: before03, after: after03
    before: before03,
    after: after03,
  },
  {
    id: 4,
    label: "Chris B.",
    treatment: "Emax Veneers",
    // Replace with: before: before04, after: after04
    before: before04,
    after: after04,
  },
  {
    id: 5,
    label: "Katerina K.",
    treatment: "Emax Veneers",
    // Replace with: before: before05, after: after05
    before: before05,
    after: after05,
  },
  {
    id: 6,
    label: "Elena M.",
    treatment: "Zirconia Veneers",
    // Replace with: before: before05, after: after05
    before: before06,
    after: after06,
  },
];

function FullscreenModal({
  item,
  onClose,
}: {
  item: (typeof TRANSFORMATIONS)[0] | null;
  onClose: () => void;
}) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center z-10"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        onClick={onClose}
      >
        <X size={32} strokeWidth={1.5} color="#F9F9F9" />
      </button>
      <div
        className="w-full max-w-[640px]"
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className="text-center mb-4 uppercase tracking-[0.12em] text-[11px]"
          style={{
            fontFamily: "Lato, sans-serif",
            color: "#A58E55",
          }}
        >
          {item.treatment} — {item.label}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div
            className="relative rounded-[12px] overflow-hidden"
            style={{ height: "min(55vh, 420px)" }}
          >
            <img
              src={item.before}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div
              className="absolute bottom-0 left-0 right-0 py-2 text-center text-[12px] uppercase tracking-wider"
              style={{
                fontFamily: "Lato, sans-serif",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#ccc",
                fontWeight: 700,
              }}
            >
              BEFORE
            </div>
          </div>
          <div
            className="relative rounded-[12px] overflow-hidden"
            style={{ height: "min(55vh, 420px)" }}
          >
            <img
              src={item.after}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div
              className="absolute bottom-0 left-0 right-0 py-2 text-center text-[12px] uppercase tracking-wider"
              style={{
                fontFamily: "Lato, sans-serif",
                backgroundColor: "rgba(165,142,85,0.7)",
                color: "#F9F9F9",
                fontWeight: 700,
              }}
            >
              AFTER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<
    (typeof TRANSFORMATIONS)[0] | null
  >(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx =
      touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(
      e.changedTouches[0].clientY - touchStartY.current,
    );
    if (Math.abs(dx) < dy) return; // swipe más vertical → no cambiar slide
    if (dx > 40)
      setCurrentSlide((p) =>
        Math.min(p + 1, TRANSFORMATIONS.length - 1),
      );
    if (dx < -40) setCurrentSlide((p) => Math.max(p - 1, 0));
  };

  // Listener nativo no-pasivo: previene scroll de página durante swipe horizontal (Safari)
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      const dx = Math.abs(
        e.touches[0].clientX - touchStartX.current,
      );
      const dy = Math.abs(
        e.touches[0].clientY - touchStartY.current,
      );
      if (dx > dy) e.preventDefault();
    };
    el.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });
    return () =>
      el.removeEventListener("touchmove", onTouchMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={ref} style={{ backgroundColor: "#F9F9F9" }}>
        {/* Top hero-like banner with headline */}
        <div
          className="relative px-5 pt-16 pb-12 md:pt-24 md:pb-16"
          style={{
            backgroundImage: `url(${bgheader})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderBottomLeftRadius: "32px",
            borderBottomRightRadius: "32px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.75) 100%)",
              borderBottomLeftRadius: "32px",
              borderBottomRightRadius: "32px",
            }}
          />
          <div
            className="relative text-center max-w-2xl mx-auto"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p
              className="uppercase tracking-[0.18em] mb-2 text-[14px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#A58E55",
              }}
            >
              REAL PATIENT RESULTS
            </p>
            <h2
              className="text-[40px] md:text-[48px] leading-[1.1] mb-4"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#F9F9F9",
                fontWeight: 300,
              }}
            >
              See The{" "}
              <span
                style={{ fontWeight: 700, color: "#C4A96A" }}
              >
                Transformations
              </span>
            </h2>
            <p
              className="text-[18px] md:text-[20px] leading-[1.05] mx-auto"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 300,
                color: "rgba(249,249,249,0.95)",
                maxWidth: "400px",
              }}
            >
              Real patients. Real results. Every smile is
              custom-crafted to complement your unique facial
              features.
            </p>
          </div>
        </div>

        {/* Cards — carousel on mobile, grid on desktop */}
        <div className="py-6 md:py-8">
          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden px-5">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.35s ease",
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                ref={sliderRef}
              >
                {TRANSFORMATIONS.map((item, i) => (
                  <div
                    key={item.id}
                    className="min-w-full px-2"
                  >
                    <TransformCard
                      item={item}
                      index={i}
                      visible={visible}
                      onClick={() => setSelected(item)}
                      slider
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {TRANSFORMATIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  style={{
                    width: i === currentSlide ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "100px",
                    backgroundColor:
                      i === currentSlide
                        ? "#A58E55"
                        : "rgba(33,32,30,0.3)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition:
                      "width 0.3s ease, background-color 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 px-5 md:px-10 lg:px-16 max-w-6xl mx-auto">
            {TRANSFORMATIONS.map((item, i) => (
              <div
                key={item.id}
                className="transition-all duration-300 ease-out hover:scale-105 rounded-[8px]"
                style={{
                  willChange: "transform",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.10)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0,0,0,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)")
                }
              >
                <TransformCard
                  item={item}
                  index={i}
                  visible={visible}
                  onClick={() => setSelected(item)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-5 pb-14 md:pb-20 text-center max-w-md mx-auto">
          <button
            onClick={() => setQuoteOpen(true)}
            className="w-full h-[52px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90"
            style={{
              backgroundColor: "#21201E",
              color: "#F9F9F9",
              fontFamily: "Lato, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              border: "1.5px solid rgba(165,142,85,0.4)",
            }}
          >
            SEE MY SMILE OPTIONS
          </button>
        </div>
      </section>

      <FullscreenModal
        item={selected}
        onClose={() => setSelected(null)}
      />
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}

function TransformCard({
  item,
  index,
  visible,
  onClick,
  mobile = false,
  slider = false,
}: {
  item: (typeof TRANSFORMATIONS)[0];
  index: number;
  visible: boolean;
  onClick: () => void;
  mobile?: boolean;
  slider?: boolean;
}) {
  return (
    <div
      className={`${mobile ? "shrink-0 w-[220px]" : slider ? "w-full" : "w-full"} rounded-[8px] overflow-hidden cursor-pointer relative`}
      style={{
        scrollSnapAlign: mobile ? "start" : undefined,
        boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : "translateX(30px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
      onClick={onClick}
    >
      <div
        className="grid grid-cols-2"
        style={{ height: mobile ? "240px" : "280px" }}
      >
        <div className="relative">
          <img
            src={item.before}
            alt="Before"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 right-0 py-1.5 text-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.55)",
              fontFamily: "Lato, sans-serif",
              color: "#ccc",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            BEFORE
          </div>
        </div>
        <div className="relative">
          <img
            src={item.after}
            alt="After"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 right-0 py-1.5 text-center"
            style={{
              backgroundColor: "rgba(165,142,85,0.75)",
              fontFamily: "Lato, sans-serif",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            AFTER
          </div>
        </div>
      </div>

      <div
        className="px-3 py-3"
        style={{ backgroundColor: "#21201E" }}
      >
        <p
          className="text-[16px]"
          style={{
            fontFamily: "Oswald, sans-serif",
            color: "#F9F9F9",
            fontWeight: 500,
          }}
        >
          {item.label}
        </p>
        <p
          className="text-[14px]"
          style={{
            fontFamily: "Lato, sans-serif",
            color: "#A58E55",
          }}
        >
          {item.treatment}
        </p>
      </div>
    </div>
  );
}