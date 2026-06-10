import { useRef, useState } from "react";
import imgTower from "../../imports/A1_tower_collage_2-1.webp";
import imgDental from "../../imports/a1web-digital_design.webp";
import imgTech from "../../imports/6_montaje_3.2.1-1.webp";
import { useInView } from "../../hooks/useInView";

const ROWS = [
  {
    id: 1,
    imageLeft: true,
    image: imgTower,
    tagline: "LUXURY EXPERIENCE",
    headingParts: [
      { text: "Clinic + Suites, The", weight: 300 },
      { text: " A1 Tower", weight: 600 },
    ],
    body: [
      "At A1 Tower, the clinic and luxury suites are just floors apart for your convenience. The first two floors are equipped for dental procedures, while the upper floors host A1 Luxury Suites.",
    ],
  },
  {
    id: 2,
    imageLeft: false,
    image: imgTech,
    tagline: "PREMIUM DENTISTRY",
    headingParts: [
      { text: "Dental Service", weight: 600 },
      { text: " at Your Door", weight: 300 },
    ],
    body: [
      "Having the clinic and suites in the same building means effortless access to your appointments, with total comfort and flexibility at any time.",
    ],
  },
  {
    id: 3,
    imageLeft: true,
    image: imgDental,
    tagline: "IN-HOUSE LABORATORY",
    headingParts: [
      { text: "High Tech Dentistry ", weight: 700 },
      { text: "in Playa del Carmen, Mexico", weight: 300 },
    ],
    body: [
      "Our in-house lab crafts your veneers steps from the chair — no outsourcing or delays, ensuring precise, same-building quality control.",
    ],
  },
];

export function WhyChooseSection() {
  const { ref, visible } = useInView(0.08);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) setCurrentSlide((p) => Math.min(p + 1, ROWS.length - 1));
    if (diff < -50) setCurrentSlide((p) => Math.max(p - 1, 0));
  };

  return (
    <section
      ref={ref}
      className="py-12 md:py-16"
      style={{ backgroundColor: "#21201E" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
        {/* ── Header ── */}
        <div
          className="text-center mb-4 md:mb-6"
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
            Best Dentist in Mexico for Crowns
          </h2>
          <h3
            className="text-[36px] md:text-[44px] leading-[1.1] mb-4"
            style={{
              fontFamily: "Oswald, sans-serif",
              color: "#F9F9F9",
              fontWeight: 300,
            }}
          >
            Trusted Care{" "}
            <span style={{ fontWeight: 700, color: "#C4A96A" }}>
               for Natural Lasting Results
            </span>
            
          </h3>
          <p
            className="text-[18px] md:text-[20px] leading-[1.1] mx-auto"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 300,
              color: "rgba(249,249,249,0.9)",
              maxWidth: "700px",
            }}
          >
            Patients choose A1 Smile Design for experienced specialists, advanced technology, and natural-looking results that last.
          </p>
        </div>

        {/* ── Rows ── */}
        <div className="flex flex-col gap-6">

          {/* ── MOBILE: Slider ── */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-[8px]">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.35s ease",
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {ROWS.map((row, i) => (
                  <div
                    key={row.id}
                    className="min-w-full overflow-hidden rounded-[8px] flex flex-col"
                    style={{
                      backgroundColor: "rgba(249,249,249,0.04)",
                      border: "1px solid rgba(165,142,85,0.12)",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(28px)",
                      transition: `opacity 0.65s ease ${0.1 + i * 0.15}s, transform 0.65s ease ${0.1 + i * 0.15}s`,
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-full h-[240px] shrink-0">
                      <img
                        src={row.image}
                        alt={row.headingParts.map((p) => p.text).join("")}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center gap-2 p-6">
                      <p
                        className="uppercase tracking-[0.15em] text-[10px]"
                        style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}
                      >
                        {row.tagline}
                      </p>
                      <h4
                        className="text-[22px] leading-[1.2]"
                        style={{ fontFamily: "Oswald, sans-serif", color: "#F9F9F9" }}
                      >
                        {row.headingParts.map((part, j) => (
                          <span key={j} style={{ fontWeight: part.weight }}>{part.text}</span>
                        ))}
                      </h4>
                      <div className="flex flex-col gap-3 mt-1">
                        {row.body.map((para, j) => (
                          <p
                            key={j}
                            className="text-[15px] leading-[1.65]"
                            style={{ fontFamily: "Lato, sans-serif", fontWeight: 400, color: "rgba(249,249,249,0.75)" }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* Dot indicators */}
             <div className="flex justify-center gap-2 mt-4">
                {ROWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    style={{
                      width: i === currentSlide ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "100px",
                      backgroundColor: i === currentSlide ? "#A58E55" : "rgba(249,249,249,0.25)",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "width 0.3s ease, background-color 0.3s ease",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
             </div>
          </div>

          {/* ── DESKTOP: 3-column grid ── */}
          <div className="hidden md:grid grid-cols-3 gap-5 md:gap-6">
            {ROWS.map((row, i) => (
              <div
                key={row.id}
                className="flex flex-col overflow-hidden rounded-[8px]"
                style={{
                  backgroundColor: "rgba(249,249,249,0.04)",
                  border: "1px solid rgba(165,142,85,0.12)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.65s ease ${0.1 + i * 0.15}s, transform 0.65s ease ${0.1 + i * 0.15}s`,
                }}
              >
                {/* Image */}
                <div className="relative w-full h-[200px] shrink-0">
                  <img
                    src={row.image}
                    alt={row.headingParts.map((p) => p.text).join("")}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center gap-2 p-5">
                  <p
                    className="uppercase tracking-[0.15em] text-[10px]"
                    style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}
                  >
                    {row.tagline}
                  </p>
                  <h4
                    className="text-[20px] leading-[1.2]"
                    style={{ fontFamily: "Oswald, sans-serif", color: "#F9F9F9" }}
                  >
                    {row.headingParts.map((part, j) => (
                      <span key={j} style={{ fontWeight: part.weight }}>{part.text}</span>
                    ))}
                  </h4>
                  <div className="flex flex-col gap-3 mt-1">
                    {row.body.map((para, j) => (
                      <p
                        key={j}
                        className="text-[14px] leading-[1.6]"
                        style={{ fontFamily: "Lato, sans-serif", fontWeight: 300, color: "rgba(249,249,249,0.75)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Gold accent */}
        <div className="flex justify-center mt-10 md:mt-14"></div>
      </div>
    </section>
  );
}