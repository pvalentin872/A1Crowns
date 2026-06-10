import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle,
} from "lucide-react";

export function FooterSection() {
  const [submitted, setSubmitted] = useState(false);

  const phoneNumbers = [
  {
    label: "USA",
    number: "+1 (888) 981-2138",
    href: "tel:+18889812138",
  },
  {
    label: "MEXICO",
    number: "+52 (998) 387-0239",
    href: "tel:+529983870239",
  },
  {
    label: "CANADA",
    number: "+1 (888) 551-0905",
    href: "tel:+18885510905",
  },
];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+1",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s0-9]{7,20}$/;

    const cleanPhone =
      form.countryCode.replace("-ca", "") +
      form.phone.replace(/\D/g, "");

    let newErrors = {
      email: "",
      phone: "",
    };

    let hasError = false;

    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }

    if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    const formData = {
      firstName: form.firstName,
      lastName: form.lastName,
      countryCode: form.countryCode,
      phone: form.phone,
      cleanPhone: cleanPhone,
      email: form.email,
      message: form.message,
    };

    setSubmitted(true);
  };

  return (
    <footer style={{ backgroundColor: "#0F0F0F" }}>
      {/* Gold line */}
      <div
        className="h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #A58E55, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="uppercase tracking-[0.2em] text-[14px] mb-2"
            style={{
              fontFamily: "Lato, sans-serif",
              color: "#A58E55",
            }}
          >
            Live an All-Inclusive Experience at A1 Smile Design
          </h2>

          <h3
            className="text-[42px] md:text-[56px] leading-none"
            style={{
              fontFamily: "Oswald, sans-serif",
              color: "#F9F9F9",
              fontWeight: 600,
            }}
          >
            Start Your Smile Journey
          </h3>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mb-14">
          {/* LEFT SIDE */}
          <div
            className="rounded-[12px] p-6 md:p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(165,142,85,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Schedule */}
            <div className="mb-10">
              <h4
                className="text-[28px] mb-4"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  color: "#F9F9F9",
                }}
              >
                Clinic Schedule
              </h4>

              <p
                className="text-[16px] leading-[1.8]"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 300,
                  color: "rgba(254,254,254,0.95)",
                }}
              >
                Monday - Friday:{" "}
                <span style={{ fontWeight: 700 }}>
                  10:00 AM - 6:00 PM
                </span>
                <br />
                Saturday: <span style={{ fontWeight: 700 }}> 8:00 AM - 12:00 PM </span>
                <br />
                Sunday: <span style={{ fontWeight: 700 }}> Closed </span>
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h4
                className="text-[28px] mb-5"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  color: "#F9F9F9",
                }}
              >
                Direct Contact
              </h4>

              <div className="flex flex-col gap-4 items-align-center">
                  {/* Phone */}
                  <div className="flex flex-row md:flex-row md:items-start gap-4">
                    <div
                        className="w-11 h-11 rounded-[6px] flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "rgba(165,142,85,0.12)",
                        }}
                      >
                        <Phone
                          size={18}
                          strokeWidth={1.5}
                          color="#A58E55"
                        />
                    </div>
                    {phoneNumbers.map((phone, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center gap-0 md:gap-4"
                        >
                          {/* Phone block */}
                          <div className="">
                            <p
                              className="text-[13px] uppercase mb-1"
                              style={{
                                fontFamily: "Lato, sans-serif",
                                color: "#A58E55",
                              }}
                            >
                              {phone.label}
                            </p>
                            <a
                              href={phone.href}
                              className="text-[14px] hover:opacity-80 transition-opacity"
                              style={{
                                fontFamily: "Lato, sans-serif",
                                color: "rgba(249,249,249,0.9)",
                              }}
                            >
                              <u>{phone.number}</u>
                            </a>
                          </div>

                          {/* Divider */}
                          {index < phoneNumbers.length - 1 && (
                            <>
                              <div
                                className="h-[40px] w-[1px]"
                                style={{
                                  backgroundColor: "rgba(255,255,255,0.3)",
                                }}
                              />
                            </>
                          )}
                        </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div
                      className="w-11 h-11 rounded-[6px] flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "rgba(165,142,85,0.12)",
                      }}
                    >
                      <Mail
                        size={18}
                        strokeWidth={1.5}
                        color="#A58E55"
                      />
                    </div>

                    <div>
                      <p
                        className="text-[13px] uppercase mb-1"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          color: "#A58E55",
                        }}
                      >
                        Email
                      </p>

                      <a
                        href="mailto:smile@a1smiledesign.com"
                        className="text-[16px] hover:opacity-80 transition-opacity"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          color: "rgba(249,249,249,0.9)",
                        }}
                      >
                        <u>smile@a1smiledesign.com</u>
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-[6px] flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "rgba(165,142,85,0.12)",
                    }}
                  >
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      color="#A58E55"
                    />
                  </div>

                  <div>
                    <p
                      className="text-[13px] uppercase mb-1"
                      style={{
                        fontFamily: "Lato, sans-serif",
                        color: "#A58E55",
                      }}
                    >
                      Location
                    </p>

                    <a
                      className="text-[16px]"
                      href="https://maps.app.goo.gl/jY8nPPyHP1L4efJy5"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "Lato, sans-serif",
                        color: "rgba(249,249,249,0.9)",
                      }}
                    >
                      <u> Mz 08, Lote 07 en 20 Av. Sur, Col. Aviación entre Calle Primera Sur y Av. Benito Juárez, CP: 77713, Playa del Carmen, Quintana Roo, Mexico.</u>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4
                className="text-[28px] mb-5"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  color: "#F9F9F9",
                }}
              >
                Follow Us
              </h4>

              <div className="flex gap-3">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/a1smiledesign",
                    label: "Instagram",
                  },
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/A1SmileDesign/",
                    label: "Facebook",
                  },
                  {
                    icon: Youtube,
                    href: "https://www.youtube.com/channel/UC-5vRoc82gCxJ_TpijXApUg",
                    label: "YouTube",
                  },
                  {
                    href: "https://www.tiktok.com/@a1smiledesign",
                    label: "TikTok",
                    custom: true,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-[6px] flex items-center justify-center transition-all hover:opacity-80 hover:scale-[1.03]"
                    style={{
                      backgroundColor: "rgba(165,142,85,0.12)",
                      border: "1px solid rgba(165,142,85,0.2)",
                    }}
                  >
                    {social.custom ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#F9F9F9"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
                      </svg>
                    ) : (
                      <social.icon
                        size={18}
                        strokeWidth={1.5}
                        color="#F9F9F9"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="rounded-[12px] p-6 md:p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(165,142,85,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p
              className="uppercase tracking-[0.12em] text-[11px] mb-2"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#A58E55",
              }}
            >
              FREE CONSULTATION
            </p>

            <h4
              className="text-[34px] mb-8"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#F9F9F9",
                fontWeight: 600,
              }}
            >
              Get Your Free Quote
            </h4>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  {/* First Name */}
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        firstName: e.target.value,
                      })
                    }
                    className="h-12 px-4 rounded-[6px] outline-none placeholder:text-white/35"
                    style={{
                      pointerEvents: "auto",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(165,142,85,0.18)",
                      color: "#F9F9F9",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "15px",
                    }}
                  />

                  {/* Last Name */}
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        lastName: e.target.value,
                      })
                    }
                    className="h-12 px-4 rounded-[6px] outline-none placeholder:text-white/35"
                    style={{
                      pointerEvents: "auto",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(165,142,85,0.18)",
                      color: "#F9F9F9",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "15px",
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <div>
                    <div
                      className="flex h-12 rounded-[6px] overflow-hidden"
                      style={{
                        border:
                          "1px solid rgba(165,142,85,0.18)",
                        backgroundColor:
                          "rgba(255,255,255,0.06)",
                      }}
                    >
                      {/* Country Code Selector */}
                       <select
                         aria-label="Country code"
                         value={form.countryCode}
                         onChange={(e) =>
                           setForm({
                             ...form,
                             countryCode: e.target.value,
                           })
                         }
                         className="outline-none px-3 cursor-pointer"
                        style={{
                          backgroundColor:
                            "rgba(0,0,0,0.8)",
                          color: "#F9F9F9",
                          borderColor: "transparent",
                          borderRight:
                            "1px solid rgba(165,142,85,0.18)",
                          fontFamily: "Lato, sans-serif",
                          appearance: "none",
                        }}
                      >
                        <option value="+1">US +1</option>
                        <option value="+1-ca">CA +1</option>
                        <option value="+52">MX +52</option>
                        <option value="+34">ES +34</option>
                        <option value="+44">UK +44</option>
                      </select>

                      {/* Phone Number */}
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            phone: e.target.value,
                          })
                        }
                        className="flex-1 px-4 outline-none placeholder:text-white/35"
                        style={{
                          backgroundColor: "transparent",
                          color: "#F9F9F9",
                          fontFamily: "Lato, sans-serif",
                          fontSize: "15px",
                        }}
                      />
                    </div>

                    {errors.phone && (
                      <p
                        className="mt-2 text-[12px]"
                        style={{
                          color: "#D87A7A",
                          fontFamily: "Lato, sans-serif",
                        }}
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {errors.phone && (
                    <p
                      className="mt-2 text-[12px]"
                      style={{
                        color: "#D87A7A",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="w-full h-12 px-4 rounded-[6px] outline-none placeholder:text-white/35"
                    style={{
                      pointerEvents: "auto",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(165,142,85,0.18)",
                      color: "#F9F9F9",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "15px",
                    }}
                  />

                  {errors.email && (
                    <p
                      className="mt-2 text-[12px]"
                      style={{
                        color: "#D87A7A",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <textarea
                  rows={4}
                  placeholder="Tell us about your smile goals..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="px-4 py-3 rounded-[6px] outline-none resize-none placeholder:text-white/35"
                  style={{
                    pointerEvents: "auto",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(165,142,85,0.18)",
                    color: "#F9F9F9",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "15px",
                  }}
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-[54px] rounded-[6px] transition-all hover:scale-[1.01]"
                  style={{
                    background:
                      "linear-gradient(135deg, #B89D60, #A58E55)",
                    color: "#F9F9F9",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  SEND MY FREE QUOTE
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center py-8">
                <CheckCircle size={48} color="#A58E55" />

                <h4
                  className="mt-4 text-[28px]"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    color: "#F9F9F9",
                  }}
                >
                  Request Sent!
                </h4>

                <p
                  className="text-center mt-3 text-[16px]"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    color: "rgba(249,249,249,0.65)",
                  }}
                >
                  We'll contact you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="h-[1px] mb-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />

        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <p
            className="text-[14px]"
            style={{
              fontFamily: "Lato, sans-serif",
              color: "rgba(249,249,249,0.5)",
            }}
          >
            © {new Date().getFullYear()} A1 Smile Design. All
            rights reserved.
          </p>

          <div className="flex gap-4 flex-wrap">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[14px] hover:opacity-70"
                style={{
                  fontFamily: "Lato, sans-serif",
                  color: "rgba(249,249,249,0.5)",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}