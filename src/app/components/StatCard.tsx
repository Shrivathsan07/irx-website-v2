import { CountUp } from "@/app/components/animations";

interface StatCardProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description?: string;
  variant?: "glass" | "elevated";
  color?: string;
}

export function StatCard({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  description,
  variant = "elevated",
  color = "#1E56A0",
}: StatCardProps) {
  const isGlass = variant === "glass";

  return (
    <div
      className={`group relative p-6 md:p-8 rounded-2xl text-center overflow-hidden min-w-0 transition-transform duration-300 hover:-translate-y-0.5 ${
        isGlass
          ? "bg-white/[0.05] backdrop-blur-sm border border-white/10"
          : "bg-white border border-[#E5E5E5]/60 shadow-sm hover:shadow-lg hover:shadow-[#1E56A0]/5"
      }`}
    >
      <CountUp
        end={end}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight block"
        style={{ color, fontFamily: "var(--font-display)" }}
      />
      <div
        className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
          isGlass ? "text-[#B0C4DE]" : "text-[#737373]"
        }`}
      >
        {label}
      </div>
      {description && (
        <p
          className={`text-sm leading-relaxed ${
            isGlass ? "text-[#D4D4D4]" : "text-[#737373]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
