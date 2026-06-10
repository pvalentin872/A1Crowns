import { lazy, Suspense } from "react";
import { HeroSection } from "./components/1-HeroSection";
import { CrownsFixSection } from "./components/2-CrownsFixSection";
import { Navbar } from "./components/Navbar";
import { ErrorBoundary } from "./components/ErrorBoundary";

const PackagesSection = lazy(() =>
  import("./components/3-PackagesSection").then((m) => ({
    default: m.PackagesSection,
  })),
);
const BeforeAfterSection = lazy(() =>
  import("./components/4-BeforeAfterSection").then((m) => ({
    default: m.BeforeAfterSection,
  })),
);
const BannerRestorative = lazy(() =>
  import("./components/11-BannerRestorative").then((m) => ({
    default: m.BannerRestorative,
  })),
);
const WhyChooseSection = lazy(() =>
  import("./components/5-WhyChooseSection").then((m) => ({
    default: m.WhyChooseSection,
  })),
);
const HowItWorksSection = lazy(() =>
  import("./components/6-HowItWorksSection").then((m) => ({
    default: m.HowItWorksSection,
  })),
);
const TestimonialsSection = lazy(() =>
  import("./components/7-TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const BannerCosmetic = lazy(() =>
  import("./components/12-BannerCosmetic").then((m) => ({
    default: m.BannerCosmetic,
  })),
);
const FaqsSection = lazy(() =>
  import("./components/9-FaqsSection").then((m) => ({
    default: m.FaqsSection,
  })),
);
const FooterSection = lazy(() =>
  import("./components/10-FooterSection").then((m) => ({
    default: m.FooterSection,
  })),
);

function SectionFallback() {
  return (
    <div
      className="w-full"
      style={{ height: "200px", backgroundColor: "#0F0F0F" }}
    />
  );
}

export default function App() {
  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        * { -webkit-tap-highlight-color: transparent; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div
        className="relative w-full min-h-screen"
        style={{ backgroundColor: "#0F0F0F", fontFamily: "Lato, sans-serif" }}
      >
        <Navbar />

        <HeroSection />

        <CrownsFixSection />

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <PackagesSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <BeforeAfterSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <BannerRestorative />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <WhyChooseSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <HowItWorksSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <BannerCosmetic />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <FaqsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionFallback />}>
            <div style={{ paddingBottom: "40px" }}>
              <FooterSection />
            </div>
          </Suspense>
        </ErrorBoundary>

      </div>
    </>
  );
}
