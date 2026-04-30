import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function FooterSection() {
  return (
    <footer style={{ backgroundColor: "#0F0F0F" }}>
      {/* Top gold line */}
      <div className="h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #A58E55, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-8">

        {/* Desktop: 4-col grid | Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">

          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            <p
              className="tracking-[0.2em] text-[10px] uppercase mb-1"
              style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}
            >
              PREMIUM DENTAL TOURISM
            </p>
            <h2
              className="text-[22px] md:text-[24px] tracking-[0.06em] uppercase mb-3"
              style={{ fontFamily: "Oswald, sans-serif", color: "#F9F9F9", fontWeight: 700 }}
            >
              A1 SMILE DESIGN
            </h2>
            <p
              className="leading-[1.65] mb-5 text-[18px]"
              style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.45)" }}
            >
              Premium dental veneers in Cancun, Mexico. Trusted by thousands of U.S. patients every year.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { icon: <Instagram size={32} strokeWidth={1.5} color="#F9F9F9" />, label: "Instagram" },
                { icon: <Facebook size={32} strokeWidth={1.5} color="#F9F9F9" />, label: "Facebook" },
                { icon: <Youtube size={32} strokeWidth={1.5} color="#F9F9F9" />, label: "YouTube" },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F9F9F9">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
                    </svg>
                  ),
                  label: "TikTok",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-[4px] flex items-center justify-center transition-all hover:opacity-80"
                  style={{
                    backgroundColor: "rgba(165,142,85,0.12)",
                    border: "1px solid rgba(165,142,85,0.2)",
                    textDecoration: "none",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}
            >
              QUICK LINKS
            </p>
            <div className="flex flex-col gap-3">
              {["Veneers", "Before & After", "Packages", "Process", "Testimonials", "Free Quote", "About Us", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition-colors hover:text-[#A58E55] text-[16px]"
                  style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.55)", textDecoration: "none" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Treatments */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}
            >
              TREATMENTS
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Composite Veneers",
                "Porcelain Veneers",
                "Full Smile Makeover",
                "Teeth Whitening",
                "Dental Crowns",
                "Gum Contouring",
                "Dental Implants",
                "Smile Design",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition-colors hover:text-[#A58E55] text-[16px]"
                  style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.55)", textDecoration: "none" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}
            >
              CONTACT US
            </p>
            <div className="flex flex-col gap-4 mb-6">
              <a href="tel:+19999999999" className="flex items-start gap-3" style={{ textDecoration: "none" }}>
                <div className="w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(165,142,85,0.15)" }}>
                  <Phone size={32} strokeWidth={1.5} color="#A58E55" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider mb-0.5" style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}>Phone</p>
                  <span className="text-[16px]" style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.65)" }}>+1 (999) 999-9999</span>
                </div>
              </a>
              <a href="mailto:info@a1smiledesign.com" className="flex items-start gap-3" style={{ textDecoration: "none" }}>
                <div className="w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(165,142,85,0.15)" }}>
                  <Mail size={32} strokeWidth={1.5} color="#A58E55" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider mb-0.5" style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}>Email</p>
                  <span className="text-[16px]" style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.65)" }}>info@a1smiledesign.com</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(165,142,85,0.15)" }}>
                  <MapPin size={32} strokeWidth={1.5} color="#A58E55" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider mb-0.5" style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}>Location</p>
                  <span className="text-[16px]" style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.65)" }}>Cancun, Quintana Roo, Mexico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] mb-6" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[12px]" style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.25)" }}>
            © {new Date().getFullYear()} A1 Smile Design. All rights reserved. Results may vary. Individual outcomes are not guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Lato, sans-serif", color: "rgba(249,249,249,0.35)", textDecoration: "none" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}