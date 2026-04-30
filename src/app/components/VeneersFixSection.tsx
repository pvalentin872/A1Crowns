import { useEffect, useRef, useState } from "react";
import svgPaths from "../../imports/Container/svg-ustnnnn2kn";
import veneersImg from "../../imports/Imagen_Carillas.png";
import veneersDesktopImg from "@/imports/EDIT_CARISHAS.png";

/* ─── Custom SVG icons from Figma ─── */

function IconStainedTeeth() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A58E55"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-dental-off"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.277 15.281c.463 -1.75 .723 -3.844 .723 -6.281c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5c-1.074 -.586 -2.583 -1.5 -4 -1.5m-2.843 1.153c-.707 .784 -1.157 2.017 -1.157 3.847c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c.305 -.402 .59 -.853 .852 -1.353" />
      <path d="M12 5.5l3 1.5" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

function IconChippedTeeth() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A58E55"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-dental-broken"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5" />
      <path d="M12 5.5l1 2.5l-2 2l2 2" />
    </svg>
  );
}

function IconGapsBetweenTeeth() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A58E55"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2" />
      <path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M12 8v8" />
    </svg>
  );
}

function IconUnevenSmile() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16C2 17.8385 2.36212 19.659 3.06568 21.3576C3.76926 23.0562 4.80048 24.5994 6.10051 25.8996C7.40053 27.1995 8.94388 28.2307 10.6424 28.9343C12.341 29.6379 14.1615 30 16 30C17.8385 30 19.659 29.6379 21.3576 28.9343C23.0562 28.2307 24.5994 27.1995 25.8996 25.8996C27.1995 24.5994 28.2307 23.0562 28.9343 21.3576C29.6379 19.659 30 17.8385 30 16C30 14.1615 29.6379 12.341 28.9343 10.6424C28.2307 8.94388 27.1995 7.40053 25.8996 6.10051C24.5994 4.80048 23.0562 3.76926 21.3576 3.06568C19.659 2.36212 17.8385 2 16 2C14.1615 2 12.341 2.36212 10.6424 3.06568C8.94388 3.76926 7.40053 4.80048 6.10051 6.10051C4.80048 7.40053 3.76926 8.94388 3.06568 10.6424C2.36212 12.341 2 14.1615 2 16Z"
        stroke="#A58E55"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3359 11.3335H11.3515"
        stroke="#A58E55"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6641 11.3335H20.6796"
        stroke="#A58E55"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1693 21.25C24.1693 19.317 22.7067 17.75 20.9026 17.75H11.1026C9.29847 17.75 7.83594 19.317 7.83594 21.25M24.1693 21.25C24.1693 23.183 22.7067 24.75 20.9026 24.75H11.1026C9.29847 24.75 7.83594 23.183 7.83594 21.25M24.1693 21.25C19.2693 22.125 12.7359 22.125 7.83594 21.25M16.0026 17.75V24.75M19.2693 17.75V24.75M12.7359 17.75V24.75"
        stroke="#A58E55"
        strokeWidth="1.16667"
      />
    </svg>
  );
}

function IconWornEnamel() {
  return (
    <svg
      fill="none"
      viewBox="0 0 31.9844 31.9844"
      width="32"
      height="32"
    >
      <path
        d={svgPaths.p1eda6600}
        stroke="#A58E55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconMinorMisalignment() {
  return (
    <svg
      fill="none"
      viewBox="0 0 31.9844 31.9844"
      width="32"
      height="32"
    >
      <path
        d={svgPaths.p15318d00}
        stroke="#A58E55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p2b1b6900}
        stroke="#A58E55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p33e3a800}
        stroke="#A58E55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p1204080}
        stroke="#A58E55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const fixes = [
  { Icon: IconStainedTeeth, label: "Stained Teeth" },
  { Icon: IconChippedTeeth, label: "Chipped Teeth" },
  { Icon: IconGapsBetweenTeeth, label: "Gaps Between Teeth" },
  { Icon: IconUnevenSmile, label: "Uneven Smile" },
  { Icon: IconWornEnamel, label: "Worn Enamel" },
  { Icon: IconMinorMisalignment, label: "Minor Misalignment" },
];

export function VeneersFixSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-stretch">
        {/* ── LEFT col: image (50%) ── */}
        <div
          className="relative w-full md:w-1/2"
          style={{ minHeight: "240px" }}
        >
          {/* Mobile image */}
          <img
            src={veneersImg}
            alt="Porcelain veneers on marble"
            className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
          />
          {/* Desktop image */}
          <img
            src={veneersDesktopImg}
            alt="Porcelain veneers on marble"
            className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
          />
          {/* fade bottom on mobile */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFFFFF 100%)",
            }}
          />
          {/* fade right edge on desktop */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 60%, #FFFFFF 100%)",
            }}
          />
        </div>

        {/* ── RIGHT col: content (50%) ── */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center gap-5 px-6 md:px-10 py-10 md:py-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(20px)",
            transition:
              "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {/* ── Text block ── */}
          <div className="flex flex-col gap-3">
            <p
              className="uppercase tracking-[0.18em] text-[14px]"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#A58E55",
              }}
            >
              COSMETIC DENTISTRY
            </p>
            <h2
              className="leading-[1.1] text-[40px] md:text-[48px]"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#21201E",
                fontWeight: 200,
              }}
            >
              What Veneers{" "}
              <span
                style={{ fontWeight: 700, color: "#A58E55" }}
              >
                Can Fix
              </span>
            </h2>
            <p
              className="text-[18px] md:text-[20px] leading-[1.05] mx-auto"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 300,
                color: "rgba(0,0,0,0.95)",
                maxWidth: "560px",
              }}
            >
              Veneers are ultra-thin, custom-crafted shells that
              cover the front surface of teeth — transforming
              your smile in just days.
            </p>
          </div>

          {/* ── 2×3 fix cards grid ── */}
          <div className="grid grid-cols-2 gap-3">
            {fixes.map(({ Icon, label }, i) => (
              <div
                key={i}
                className="flex items-center gap-1 rounded-[6px] bg-white"
                style={{
                  height: "74px",
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  border: "1.1px solid rgba(165,142,85,0.4)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.07}s, transform 0.5s ease ${0.2 + i * 0.07}s`,
                }}
              >
                <div
                  className="shrink-0 flex items-center justify-center rounded-[4px]"
                  style={{ width: "48px", height: "48px" }}
                >
                  <Icon />
                </div>
                <span
                  className="text-[15px] leading-[1.25]"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    color: "#21201E",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* ── Gold accent divider ── */}
        </div>
      </div>
    </section>
  );
}