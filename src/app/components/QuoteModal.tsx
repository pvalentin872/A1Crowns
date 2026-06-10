import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({
  isOpen,
  onClose,
}: QuoteModalProps) {
  const [submitted, setSubmitted] =
    useState(false);

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+1",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const inputStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E4D8C1",
    color: "#21201E",
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
      /^[0-9\s()+-]{7,20}$/;

    let newErrors = {
      email: "",
      phone: "",
    };

    let hasError = false;

    if (!emailRegex.test(form.email)) {
      newErrors.email =
        "Please enter a valid email.";
      hasError = true;
    }

    if (!phoneRegex.test(form.phone)) {
      newErrors.phone =
        "Please enter a valid phone number.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    const cleanPhone =
      form.countryCode.replace("-ca", "") +
      form.phone.replace(/\D/g, "");

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

  const handleClose = () => {
    setSubmitted(false);

    setErrors({
      email: "",
      phone: "",
    });

    setForm({
      firstName: "",
      lastName: "",
      countryCode: "+1",
      phone: "",
      email: "",
      message: "",
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{
        backgroundColor:
          "rgba(15,15,15,0.85)",
        backdropFilter: "blur(4px)",
      }}
      onClick={handleClose}
    >
      <div
        className="w-full max-w-[430px] rounded-[12px] overflow-hidden"
        style={{
          backgroundColor: "#F9F9F9",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div>
            <p
              className="uppercase tracking-[0.12em] text-[11px]"
              style={{
                fontFamily:
                  "Lato, sans-serif",
                color: "#A58E55",
              }}
            >
              FREE CONSULTATION
            </p>

            <h2
              className="text-[24px]"
              style={{
                fontFamily:
                  "Oswald, sans-serif",
                color: "#21201E",
              }}
            >
              Get Your Free Quote
            </h2>
          </div>

           <button
             onClick={handleClose}
             className="w-10 h-10 rounded-full flex items-center justify-center"
             style={{
               backgroundColor: "#ECECEC",
             }}
             aria-label="Close"
           >
            <X
              size={18}
              color="#21201E"
            />
          </button>
        </div>

        <div
          className="mx-6 h-[1px]"
          style={{
            backgroundColor: "#A58E55",
            opacity: 0.25,
          }}
        />

        <div className="px-6 py-6">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Names */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      firstName:
                        e.target.value,
                    })
                  }
                  className="h-12 px-4 rounded-[6px] outline-none"
                  style={inputStyle}
                />

                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      lastName:
                        e.target.value,
                    })
                  }
                  className="h-12 px-4 rounded-[6px] outline-none"
                  style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div>
                <div
                  className="flex h-12 rounded-[6px] overflow-hidden"
                  style={{
                    border:
                      "1px solid #E4D8C1",
                    backgroundColor:
                      "#FFFFFF",
                  }}
                >
                  <select
                    value={
                      form.countryCode
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        countryCode:
                          e.target
                            .value,
                      })
                    }
                    className="outline-none px-3"
                    style={{
                      backgroundColor:
                        "#EFEFEF",
                      color:
                        "#21201E",
                      borderRight:
                        "1px solid #E4D8C1",
                      fontFamily:
                        "Lato, sans-serif",
                    }}
                  >
                    <option value="+1">
                      US +1
                    </option>
                    <option value="+1-ca">
                      CA +1
                    </option>
                    <option value="+52">
                      MX +52
                    </option>
                    <option value="+34">
                      ES +34
                    </option>
                    <option value="+44">
                      UK +44
                    </option>
                  </select>

                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone:
                          e.target
                            .value,
                      })
                    }
                    className="flex-1 px-4 outline-none"
                    style={{
                      color:
                        "#21201E",
                      fontFamily:
                        "Lato, sans-serif",
                    }}
                  />
                </div>

                {errors.phone && (
                  <p
                    className="mt-2 text-[12px]"
                    style={{
                      color:
                        "#C45B5B",
                    }}
                  >
                    {
                      errors.phone
                    }
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
                      email:
                        e.target.value,
                    })
                  }
                  className="w-full h-12 px-4 rounded-[6px] outline-none"
                  style={inputStyle}
                />

                {errors.email && (
                  <p
                    className="mt-2 text-[12px]"
                    style={{
                      color:
                        "#C45B5B",
                    }}
                  >
                    {
                      errors.email
                    }
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
                    message:
                      e.target.value,
                  })
                }
                className="px-4 py-3 rounded-[6px] outline-none resize-none"
                style={inputStyle}
              />

              {/* Submit */}
              <button
                type="submit"
                className="h-[52px] rounded-[6px]"
                style={{
                  background:
                    "linear-gradient(135deg,#B89D60,#A58E55)",
                  color:
                    "#F9F9F9",
                  fontFamily:
                    "Lato, sans-serif",
                  fontWeight: 700,
                  letterSpacing:
                    "0.08em",
                }}
              >
                SEND MY FREE QUOTE
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle
                size={48}
                color="#A58E55"
              />

              <h3
                className="text-[24px]"
                style={{
                  fontFamily:
                    "Oswald, sans-serif",
                  color:
                    "#21201E",
                }}
              >
                Quote Sent!
              </h3>

              <p
                className="text-center"
                style={{
                  color: "#666",
                }}
              >
                Thank you,{" "}
                {form.firstName}.
                We'll contact
                you within 24
                hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}