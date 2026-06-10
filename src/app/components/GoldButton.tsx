import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  size?: "md" | "lg";
}

const sizeStyles = {
  md: { height: "44px", fontSize: "16px", letterSpacing: "0.08em" },
  lg: { height: "54px", fontSize: "17px", letterSpacing: "0.12em" },
};

export function GoldButton({
  children,
  fullWidth = false,
  size = "lg",
  style,
  ...rest
}: GoldButtonProps) {
  return (
    <button
      className={`rounded-[6px] transition-all active:scale-[0.97] hover:opacity-90 ${fullWidth ? "w-full" : ""}`}
      style={{
        background: "linear-gradient(135deg, #C4A96A, #A58E55)",
        color: "#F9F9F9",
        fontFamily: "Lato, sans-serif",
        fontWeight: 700,
        boxShadow: "0 8px 32px rgba(165,142,85,0.45), 0 2px 8px rgba(0,0,0,0.3)",
        ...sizeStyles[size],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
