import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const FAQS = [
  {
    id: 1,
    question: "How much do crowns cost in Mexico?",
    answer:
      "The cost of dental crowns in Mexico depends on the material used, the number of crowns needed, and the complexity of treatment. Patients often save significantly compared to U.S. pricing while receiving high-quality restorative care. Crowns in Mexico can be an affordable solution for restoring damaged teeth and achieving a natural-looking smile.",
  },
  {
    id: 2,
    question: "How much is a dental crown in Mexico?",
    answer:
      "A dental crown in Mexico is generally much more affordable than in the United States. During your consultation, we provide a personalized estimate based on your smile goals and restorative needs.",
  },
  {
    id: 3,
    question: "How much does a crown cost in Mexico?",
    answer:
      "The final price depends on factors such as materials, dental condition, and whether additional procedures are required. We focus on transparent pricing and premium-quality care.",
  },
  {
    id: 4,
    question: "What is the average cost of a dental crown in Mexico?",
    answer:
      "The average cost of a dental crown in Mexico is considerably lower than U.S. dental fees, making it one of the most popular treatments for international dental patients.",
  },
  {
    id: 5,
    question: "How much are crowns in Mexico?",
    answer:
      "Patients choose Mexico because crowns are significantly more affordable while maintaining excellent quality standards and modern dental technology.",
  },
  {
    id: 6,
    question: "Is getting crowns in Mexico safe?",
    answer:
      "Yes. Receiving dental crowns in Mexico is safe when treatment is performed by experienced specialists using advanced technology and high-quality materials. We prioritize patient safety, comfort, and satisfaction throughout the entire process.",
  },
  {
    id: 7,
    question: "What is included in the dental crown cost in Mexico?",
    answer:
      "Your treatment may include consultation, digital imaging, crown preparation, temporary restorations, and final crown placement depending on your personalized treatment plan.",
  },
  {
    id: 8,
    question: "How much is a root canal and crown in Mexico?",
    answer:
      "The price of a root canal and crown in Mexico depends on the tooth condition and complexity of treatment. Combining procedures in Mexico is often significantly more affordable than in the U.S.",
  },
   {
    id: 9,
    question: "How much does a root canal and crown cost in Mexico?",
    answer:
      "Treatment costs vary by case, but patients frequently choose Mexico for restorative procedures due to lower costs and access to highly experienced dental professionals.",
  },
   {
    id: 10,
    question: "What are the benefits of getting dental crowns in Mexico?",
    answer:
      "Benefits include lower treatment costs, shorter wait times, high-quality materials, experienced specialists, and the opportunity to restore your smile at a fraction of U.S. prices.",
  },
   {
    id: 11,
    question: "Who is the best dentist in Mexico for crowns?",
    answer:
      "The best provider is one with experience in restorative dentistry, proven patient results, modern technology, and transparent treatment planning. Reviewing before-and-after cases and patient testimonials can help guide your decision.",
  },
   {
    id: 12,
    question: "Can I get full mouth crowns in Mexico?",
    answer:
      "Yes. Patients looking for full smile rehabilitation often explore full mouth crowns in Mexico because of the affordability and access to comprehensive restorative treatment plans.",
  },
];

export function FaqsSection() {
  const { ref, visible } = useInView(0.08);
  const [openId, setOpenId] = useState<number | null>(FAQS[0].id);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
            Dental Crowns in Mexico FAQs
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
