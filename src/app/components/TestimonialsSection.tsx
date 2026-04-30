import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { QuoteModal } from "./QuoteModal";

const VIDEOS = [
  { id: "KShzYg-RASo" },
  { id: "3_st3ytrdRQ" },
  { id: "lxUgDlG93yc" },
  { id: "k6i7NvQKBpI" },
];

function buildSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&rel=0&playsinline=1&modestbranding=1`;
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const prev = () =>
    setCurrentIndex((i) =>
      i === 0 ? VIDEOS.length - 1 : i - 1,
    );
  const next = () =>
    setCurrentIndex((i) =>
      i === VIDEOS.length - 1 ? 0 : i + 1,
    );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <>
      <section
        ref={ref}
        className="py-8 md:py-12"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <div
            className="text-center mb-4 md:mb-6 px-3 md:px-5"
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
              PATIENT STORIES
            </p>
            <h2
              className="text-[36px] md:text-[48px] leading-[1.1] mb-4"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#21201E",
                fontWeight: 300,
              }}
            >
              What Our{" "}
              <span
                style={{ fontWeight: 700, color: "#A58E55" }}
              >
                Patients Say
              </span>
            </h2>
            <p
              className="text-[18px] md:text-[20px] leading-[1.05] mx-auto"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 300,
                color: "rgba(0,0,0,0.95)",
                maxWidth: "560px",
              }}
            >
              Real stories from real patients who trusted us
              with their smiles — and never looked back.
            </p>
          </div>

          {/* ── MOBILE: single-video carousel ── */}
          <div
            className="md:hidden flex flex-col items-center gap-2 px-5"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Video */}
            <div
              className="w-full rounded-[12px] overflow-hidden"
              style={{
                maxWidth: "320px",
                aspectRatio: "9 / 16",
                boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
              }}
            >
              {visible && (
                <iframe
                  key={currentIndex}
                  src={buildSrc(VIDEOS[currentIndex].id)}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none" }}
                  title={`Patient story video ${currentIndex + 1}`}
                />
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-5">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90"
                style={{
                  border: "1px solid rgba(165,142,85,0.45)",
                  backgroundColor: "rgba(165,142,85,0.08)",
                }}
                aria-label="Previous video"
              >
                <ChevronLeft
                  size={20}
                  strokeWidth={1.5}
                  color="#A58E55"
                />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {VIDEOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className="rounded-full transition-all"
                    style={{
                      width:
                        i === currentIndex ? "20px" : "8px",
                      height: "8px",
                      backgroundColor:
                        i === currentIndex
                          ? "#A58E55"
                          : "rgba(33,32,30,0.25)",
                    }}
                    aria-label={`Go to video ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90"
                style={{
                  border: "1px solid rgba(165,142,85,0.45)",
                  backgroundColor: "rgba(165,142,85,0.08)",
                }}
                aria-label="Next video"
              >
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  color="#A58E55"
                />
              </button>
            </div>
          </div>

          {/* ── DESKTOP: 4-column grid ── */}
          <div className="hidden md:grid md:grid-cols-4 gap-2 lg:gap-3 px-4 md:px-6 lg:px-8">
            {VIDEOS.map((video, i) => (
              <div
                key={video.id}
                className="rounded-[12px] overflow-hidden"
                style={{
                  aspectRatio: "9 / 16",
                  boxShadow: "0 16px 16px rgba(0,0,0,0.18)",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                {visible && (
                  <iframe
                    src={buildSrc(video.id)}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none" }}
                    title={`Patient story video ${i + 1}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Star rating summary */}
          <div
            className="mx-5 md:mx-10 lg:mx-16 mt-4 md:mt-8 p-5 md:p-7 rounded-2xl flex items-center gap-4 md:gap-6 border border-[#D8CBA3] shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm hover:scale-[1.01] transition-all duration-500"
            style={{
              background:
                "linear-gradient(135deg, #F7F2E3 0%, #EFE4C7 50%, #E7D8AF 100%)",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0px)"
                : "translateY(15px)",
              transition: "all 0.7s ease 0.4s",
            }}
          >
            {/* Rating */}
            <div className="text-center shrink-0 min-w-[110px]">
              <p
                className="text-[42px] md:text-[52px] leading-none tracking-tight"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  color: "#1F1D1A",
                  fontWeight: 700,
                }}
              >
                5.0
              </p>

              <div className="flex gap-0.5 justify-center mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={22}
                    strokeWidth={1.8}
                    color="#B08A2E"
                    fill="#B08A2E"
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-[#D6C89B]" />

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p
                  className="leading-none text-[24px] md:text-[28px]"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    color: "#1F1D1A",
                    fontWeight: 300,
                  }}
                >
                  Average Rating
                </p>

                {/* Google Icon */}
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm bg-[white]">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.7 39.5 16.3 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.2 5.4-6 7l6.2 5.2C39.1 36.7 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
                    />
                  </svg>
                </div>
              </div>

              <p
                className="text-[16px] md:text-[18px] leading-relaxed"
                style={{
                  fontFamily: "Lato, sans-serif",
                  color: "#6F6246",
                }}
              >
                Based on{" "}
                <span className="font-bold text-[#1F1D1A]">
                  1,000+
                </span>{" "}
                verified patient reviews on Google
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 md:px-10 lg:px-16 mt-8 md:mt-10">
            <button
              onClick={() => setQuoteOpen(true)}
              className="w-full md:max-w-sm md:mx-auto md:block h-[52px] rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, #C4A96A, #A58E55)",
                color: "#F9F9F9",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                boxShadow: "0 8px 24px rgba(165,142,85,0.3)",
              }}
            >
              JOIN OUR HAPPY PATIENTS
            </button>
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