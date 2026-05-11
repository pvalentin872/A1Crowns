import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import logoNavbar from "../../imports/logo-navbar.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(15,15,15,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(165,142,85,0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-24 h-[64px] md:h-[80px]">
          {/* Logo */}
          <a href="#" className="no-underline select-none flex items-center gap-3">
            <img
              src={logoNavbar}
              alt="A1 Smile Design"
              className="h-[40px] md:h-[44px] w-auto object-contain"
            />
          </a>

          {/* Right actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Call button */}
            <a
              href="tel:+18889812138"
              className="flex items-center gap-2 px-3 md:px-5 h-[40px] rounded-[6px] transition-all hover:opacity-80 no-underline"
              style={{
                border: "1px solid rgba(249,249,249,0.25)",
                color: "#F9F9F9",
                fontFamily: "Lato, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              <Phone size={18} color="#ffffff" />
              <span className="hidden sm:inline text-nowrap">
                CALL NOW
              </span>
            </a>

            {/* Free Quote button */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-4 md:px-6 h-[40px] rounded-[6px] transition-all hover:opacity-90 text-nowrap"
              style={{
                background:
                  "linear-gradient(135deg, #C4A96A, #A58E55)",
                color: "#F9F9F9",
                fontFamily: "Lato, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              <Calendar size={18} color="#F9F9F9" />
              <span className="hidden sm:inline">
              FREE QUOTE
              </span>
            </button>
          </div>
        </div>
      </nav>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
