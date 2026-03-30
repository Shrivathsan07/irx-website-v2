import { FadeUp } from "@/app/components/animations/FadeUp";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}

export function SectionHeader({ label, title, subtitle, align = "left", variant = "light" }: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = variant === "dark";

  return (
    <FadeUp>
      <div className={isCenter ? "text-center" : ""}>
        <p className={`text-xs font-semibold uppercase tracking-[0.05em] mb-3 ${isDark ? "text-[#B3CCFF]" : "text-[#1E56A0]"}`}>
          {label}
        </p>
        <h2
          className={`font-display text-4xl lg:text-[2.25rem] font-bold leading-[1.2] tracking-[-0.01em] max-w-2xl ${isCenter ? "mx-auto" : ""} ${isDark ? "text-white" : "text-[#0F2B57]"}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`text-xl leading-relaxed mt-4 max-w-xl ${isCenter ? "mx-auto" : ""} ${isDark ? "text-[#B0C4DE]" : "text-[#737373]"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeUp>
  );
}
