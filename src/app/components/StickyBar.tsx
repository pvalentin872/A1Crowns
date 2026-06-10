import { useState, useEffect } from "react";
import { QuoteModal } from "./QuoteModal";

export function StickyBar() {
  const [show, setShow] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          style={{
            background: "linear-gradient(135deg, #C4A96A, #A58E55)",
            padding: "12px 16px",
            paddingBottom: "max(12px, env(safe-area-inset-bottom))",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={() => setQuoteOpen(true)}
            className="w-full h-[48px] rounded-[6px] font-bold text-[16px] tracking-wider"
            style={{
              backgroundColor: "#21201E",
              color: "#F9F9F9",
              fontFamily: "Lato, sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            GET MY FREE QUOTE
          </button>
        </div>
      )}

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
