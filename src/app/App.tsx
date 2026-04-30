import { HeroSection } from "./components/HeroSection";
import { VeneersFixSection } from "./components/VeneersFixSection";
import { PackagesSection } from "./components/PackagesSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { FooterSection } from "./components/FooterSection";
import { StickyBar } from "./components/StickyBar";

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
        {/* 1. Hero */}
        <HeroSection />

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

        {/* 9. Footer — extra bottom padding for sticky bar */}
        <div style={{ paddingBottom: "76px" }}>
          <FooterSection />
        </div>

        {/* Sticky CTA bar */}
        <StickyBar />
      </div>
    </>
  );
}
