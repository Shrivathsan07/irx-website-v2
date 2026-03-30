import { FadeUp } from "@/app/components/animations";

interface BentoItem {
  icon?: React.ElementType;
  title: string;
  description: string;
  /** Span config for asymmetric layouts */
  span?: "large" | "medium" | "default";
  color?: string;
  /** Optional stat to display prominently */
  stat?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {items.map((item, i) => {
        const spanClass =
          item.span === "large"
            ? "md:col-span-2 lg:col-span-2"
            : item.span === "medium"
              ? "md:col-span-1 lg:col-span-1"
              : "";

        const color = item.color || "#1E56A0";

        return (
          <FadeUp key={item.title} delay={0.05 + i * 0.06}>
            <div
              className={`group relative h-full p-7 md:p-8 rounded-2xl border border-[#E5E5E5]/60 bg-white transition-[box-shadow,transform] duration-300 hover:-translate-y-1 cursor-default
                shadow-sm hover:shadow-lg hover:shadow-[#1E56A0]/5
                ${spanClass}`}
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: color }}
              />

              {item.stat && (
                <div
                  className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                  style={{ color, fontFamily: "var(--font-display)" }}
                >
                  {item.stat}
                </div>
              )}

              {item.icon && (
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${color}1a` }}
                >
                  <item.icon
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ color }}
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-[#0F2B57] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#737373] leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
