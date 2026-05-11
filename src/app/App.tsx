import { HeroSection } from "./components/1-HeroSection";
import { VeneersFixSection } from "./components/2-VeneersFixSection";
import { PackagesSection } from "./components/3-PackagesSection";
import { BeforeAfterSection } from "./components/4-BeforeAfterSection";
import { WhyChooseSection } from "./components/5-WhyChooseSection";
import { HowItWorksSection } from "./components/6-HowItWorksSection";
import { TestimonialsSection } from "./components/7-TestimonialsSection";
import { FinalCTASection } from "./components/8-FinalCTASection";
import { FaqsSection } from "./components/9-FaqsSection";
import { FooterSection } from "./components/10-FooterSection";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <>
      <style>{`
        /* Scrollbar hiding utility */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Tap highlight removal */
        * { -webkit-tap-highlight-color: transparent; }

        /* Smooth scroll */
        html { scroll-behavior: smooth; }
      `}</style>

      <div
        className="relative w-full min-h-screen"
        style={{ backgroundColor: "#0F0F0F", fontFamily: "Lato, sans-serif" }}
      >
        {/* Fixed Navbar */}
        <Navbar />

        {/* 1. Hero */}
        <HeroSection />

        {/* Sections after hero need top padding to clear fixed navbar */}
        <div className="pt-[64px] md:pt-[80px]">
          {/* 2. What Veneers Fix */}
          <VeneersFixSection />

          {/* 3. Packages */}
          <PackagesSection />

          {/* 4. Before & After */}
          <BeforeAfterSection />

          {/* 5. Why Choose A1 */}
          <WhyChooseSection />

          {/* 6. How It Works */}
          <HowItWorksSection />

          {/* 7. Testimonials */}
          <TestimonialsSection />

          {/* 8. Final CTA */}
          <FinalCTASection />

          {/* 9. Faqs */}
          <FaqsSection />

          {/* 10. Footer — extra bottom padding for sticky bar */}
          <div style={{ paddingBottom: "40px" }}>
            <FooterSection />
          </div>
        </div>
      </div>
    </>
  );
}
