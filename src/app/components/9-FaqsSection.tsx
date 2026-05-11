import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "What are porcelain veneers?",
    answer:
      "Porcelain veneers are ultra-thin, custom-made shells designed to cover the front surface of your teeth. They mimic the natural look of enamel, correcting imperfections such as discoloration, chips, gaps, and minor misalignment for an instantly transformed smile.",
  },
  {
    id: 2,
    question: "How long do veneers last?",
    answer:
      "With proper care — regular brushing, flossing, and routine dental visits — porcelain veneers can last 10 to 15 years or more. At A1 Smile Design, we use high-quality materials and advanced bonding techniques to ensure maximum durability.",
  },
  {
    id: 3,
    question: "Is the procedure painful?",
    answer:
      "Most patients experience little to no discomfort. The procedure is performed under local anesthesia, and our team prioritizes your comfort at every stage. Any mild sensitivity after treatment typically subsides within a few days.",
  },
  {
    id: 4,
    question: "How many appointments are needed?",
    answer:
      "The full process usually requires two to three visits. The first is a consultation and digital smile design, the second is tooth preparation and temporary veneers, and the third is the final placement of your custom porcelain veneers.",
  },
  {
    id: 5,
    question: "Do veneers stain over time?",
    answer:
      "Porcelain is highly resistant to staining. However, the bonding edges can accumulate pigment over time if oral hygiene is neglected. We recommend avoiding excessive consumption of coffee, tea, and tobacco to keep your veneers looking their best.",
  },
  {
    id: 6,
    question: "What is the cost of veneers at A1 Smile Design?",
    answer:
      "Our pricing is competitive and significantly lower than in the US or Canada, without compromising quality. Contact us for a personalized quote — we offer transparent pricing with no hidden fees and flexible payment options.",
  },
  {
    id: 7,
    question: "Can I finance my veneer treatment?",
    answer:
      "Yes. We offer financing options to make your smile transformation accessible. Speak with our team during your consultation to find a plan that fits your budget.",
  },
  {
    id: 8,
    question: "How do I care for my veneers after treatment?",
    answer:
      "Care for your veneers just like natural teeth — brush twice a day, floss daily, and visit your dentist regularly. Avoid using your teeth as tools (opening packages, biting nails) and consider a night guard if you grind your teeth.",
  },
];

export function FaqsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

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
          <h2
            className="uppercase tracking-[0.18em] mb-2 text-[14px] text-center"
            style={{
              fontFamily: "Lato, sans-serif",
              color: "#A58E55",
            }}
          >
            Frequently Asked Questions
          </h2>
          <h3
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
          </h3>
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
                    fontWeight: 400,
                    fontSize: "18px",
                    letterSpacing: "0.02em",
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
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
