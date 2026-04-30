import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(15,15,15,0.85)", backdropFilter: "blur(4px)" }}
      onClick={handleClose}
    >
      <div
        className="w-full max-w-[430px] rounded-[12px] overflow-hidden"
        style={{ backgroundColor: "#F9F9F9", maxHeight: "92vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-4 pt-6">
          <div>
            <p
              className="uppercase tracking-[0.12em] text-[11px]"
              style={{ fontFamily: "Lato, sans-serif", color: "#A58E55" }}
            >
              FREE CONSULTATION
            </p>
            <h2
              className="text-[22px]"
              style={{ fontFamily: "Oswald, sans-serif", color: "#21201E", fontWeight: 600 }}
            >
              Get Your Free Quote
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#EBEBEB" }}
          >
            <X size={32} strokeWidth={1.5} color="#21201E" />
          </button>
        </div>

        {/* Gold divider */}
        <div className="mx-6 h-[1px]" style={{ backgroundColor: "#A58E55", opacity: 0.3 }} />

        <div className="px-6 py-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="block text-[12px] mb-1 uppercase tracking-wider"
                    style={{ fontFamily: "Lato, sans-serif", color: "#8A8A8A" }}
                  >
                    First Name *
                  </label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full h-12 px-4 rounded-[4px] outline-none border"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "#fff",
                      borderColor: "#E0D5C0",
                      color: "#21201E",
                      fontSize: "15px",
                    }}
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    className="block text-[12px] mb-1 uppercase tracking-wider"
                    style={{ fontFamily: "Lato, sans-serif", color: "#8A8A8A" }}
                  >
                    Last Name *
                  </label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full h-12 px-4 rounded-[4px] outline-none border"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "#fff",
                      borderColor: "#E0D5C0",
                      color: "#21201E",
                      fontSize: "15px",
                    }}
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-[12px] mb-1 uppercase tracking-wider"
                  style={{ fontFamily: "Lato, sans-serif", color: "#8A8A8A" }}
                >
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-12 px-4 rounded-[4px] outline-none border"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    backgroundColor: "#fff",
                    borderColor: "#E0D5C0",
                    color: "#21201E",
                    fontSize: "15px",
                  }}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  className="block text-[12px] mb-1 uppercase tracking-wider"
                  style={{ fontFamily: "Lato, sans-serif", color: "#8A8A8A" }}
                >
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-[4px] outline-none border"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    backgroundColor: "#fff",
                    borderColor: "#E0D5C0",
                    color: "#21201E",
                    fontSize: "15px",
                  }}
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-[12px] mb-1 uppercase tracking-wider"
                  style={{ fontFamily: "Lato, sans-serif", color: "#8A8A8A" }}
                >
                  Tell Us About Your Smile Goals
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-[4px] outline-none border resize-none"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    backgroundColor: "#fff",
                    borderColor: "#E0D5C0",
                    color: "#21201E",
                    fontSize: "15px",
                  }}
                  placeholder="E.g. I'd like to fix gaps and stained teeth..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-[52px] rounded-[6px] mt-2 transition-all active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #B89D60, #A58E55)",
                  color: "#F9F9F9",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  boxShadow: "0 8px 24px rgba(165,142,85,0.35)",
                }}
              >
                SEND MY FREE QUOTE REQUEST
              </button>

              <p
                className="text-center text-[12px]"
                style={{ fontFamily: "Lato, sans-serif", color: "#9A9A9A" }}
              >
                No spam. We'll respond within 24 hours.
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F0EAD8" }}
              >
                <CheckCircle size={32} strokeWidth={1.5} color="#A58E55" />
              </div>
              <h3
                className="text-[24px] text-center"
                style={{ fontFamily: "Oswald, sans-serif", color: "#21201E", fontWeight: 600 }}
              >
                Quote Request Sent!
              </h3>
              <p
                className="text-center text-[15px]"
                style={{ fontFamily: "Lato, sans-serif", color: "#666", lineHeight: 1.6 }}
              >
                Thank you, {form.firstName}! Our smile specialists will reach out within 24 hours with your personalized quote.
              </p>
              <button
                onClick={handleClose}
                className="w-full h-[52px] rounded-[6px] mt-2"
                style={{
                  background: "linear-gradient(135deg, #B89D60, #A58E55)",
                  color: "#F9F9F9",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}