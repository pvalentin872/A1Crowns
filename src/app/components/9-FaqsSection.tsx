import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "Why do patients choose to get veneers in Mexico?",
    answer:
      "Patients choose to get veneers in Mexico, getting veneers in Mexico, and dental veneers Mexico because they can access premium cosmetic dentistry at lower prices. Whether you're searching for Dental Veneers Cancun, Porcelain Veneers Cancun, or the best place to get veneers in Mexico, many patients travel for expert smile design, natural-looking results, and personalized care.",
  },
  {
    id: 2,
    question: "How much are veneers in Mexico?",
    answer:
      "Many patients ask how much are veneers in Mexico, how much is veneers in Mexico, or how much veneers cost in Mexico before starting treatment. The final veneers Mexico price depends on the number of veneers, the material selected, and your smile goals. Dental veneers in Mexico often cost significantly less than in the U.S. while maintaining premium quality.",
  },
  {
    id: 3,
    question: "How much do veneers cost in Mexico?",
    answer:
      "If you're researching how much do veneers cost in Mexico, how much does veneers cost in Mexico, or cost of veneers in Mexico, pricing varies depending on treatment complexity, dentist expertise, and veneer material. Patients comparing veneers cost in Mexico often find premium porcelain options at exceptional value.",
  },
  {
    id: 4,
    question: "How much do porcelain veneers cost in Mexico?",
    answer:
      "Patients looking for how much do porcelain veneers cost in Mexico, how much are porcelain veneers in Mexico, porcelain veneers cost Mexico, or porcelain veneers Mexico cost often choose porcelain because of its natural appearance, durability, and long-term results. Porcelain veneers in Mexico remain one of the most requested cosmetic dental treatments.",
  },
  {
    id: 5,
    question: "How much is a full set of veneers in Mexico?",
    answer:
      "If you're asking how much is a full set of veneers in Mexico, full set veneers cost Mexico, or full set of veneers cost Mexico, treatment depends on how many teeth are included in your smile makeover. Patients researching veneers in Mexico cost often choose full smile transformations for maximum aesthetic impact.",
  },
  {
    id: 6,
    question: "Is it safe to get veneers in Mexico?",
    answer:
      "A common question is is it safe to get veneers in Mexico. The answer depends on choosing the best dentist in Mexico for veneers with proven experience, modern technology, and high-quality materials. Top providers offering Dental Veneers Mexico and Porcelain Veneers Mexico follow international standards for cosmetic dentistry.",
  },
  {
    id: 7,
    question: "How do I find the best dentist in Mexico for veneers?",
    answer:
      "If you're searching for the best dentist in Mexico for veneers or the best place to get veneers in Mexico, look for experience in smile design, before-and-after cases, patient reviews, and expertise with porcelain veneers in Mexico. Leading clinics in Cancun specialize in natural-looking, customized smile transformations.",
  },
  {
    id: 8,
    question: "Are veneers in Mexico really worth it?",
    answer:
      "Patients comparing veneers in Mexico price, veneers Mexico price, cheapest veneers in Mexico, or even offers like $2500 veneers Cancun often discover that value goes beyond price. Choosing dental veneers Cancun, Porcelain Veneers Mexico, or get veneers in Mexico means balancing affordability, quality, aesthetics, and long-term durability.",
  },
];

export function FaqsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(FAQS[0].id);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            className="uppercase tracking-[0.18em] mb-2 text-[14px] text-center"
            style={{
              fontFamily: "Lato, sans-serif",
              color: "#A58E55",
            }}
          >
            Frequently Asked Questions
          </p>
          <h2
            className="text-[36px] md:text-[44px] leading-[1.1] mb-10 text-center"
            style={{
              fontFamily: "Oswald, sans-serif",
              color: "#21201E",
              fontWeight: 300,
            }}
          >
            Everything You Need to{" "}
            <span style={{ fontWeight: 700, color: "#C4A96A" }}>
              Know
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.65s ease ${0.08 + i * 0.06}s, transform 0.65s ease ${0.08 + i * 0.06}s`,
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left px-5 md:px-7 py-4 md:py-5 rounded-[8px] transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: isOpen ? "#FFF" : "#F3F3F3",
                    border: isOpen
                      ? "1px solid rgba(207, 183, 123, 0.5)"
                      : "1px solid rgba(0,0,0,0.05)",
                    fontFamily: "Oswald, sans-serif",
                    color: "#21201E",
                    fontSize: "18px",
                  }}
                  aria-expanded={isOpen}
                >
                  <h3 
                  className="pr-4"
                  style={{
                    fontWeight: isOpen ? 600 : 400,
                  }}>
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    color="#A58E55"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.35s ease",
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden px-5 md:px-7"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    transition: "max-height 0.35s ease, padding 0.35s ease",
                    paddingTop: isOpen ? "16px" : "0px",
                    paddingBottom: isOpen ? "20px" : "0px",
                  }}
                >
                  <p
                    className="text-[15px] md:text-[16px] leading-[1.30]"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 400,
                      color: "rgba(33,32,30,0.9)",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
