import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface ComparisonMetric {
  label: string;
  without: number;
  withIrx: number;
  unit?: string;
  /** Format: "percentage" shows as %, "currency" shows with $, "number" is plain */
  format?: "percentage" | "currency" | "number";
}

interface ComparisonChartProps {
  metrics: ComparisonMetric[];
  withoutLabel?: string;
  withLabel?: string;
  className?: string;
  /** "glass" for dark backgrounds — uses light text */
  variant?: "default" | "glass";
}

function formatValue(value: number, format?: string): string {
  if (format === "percentage") return `${value}%`;
  if (format === "currency") return `$${value.toLocaleString()}`;
  return value.toLocaleString();
}

export function ComparisonChart({
  metrics,
  withoutLabel = "Without iRxReminder",
  withLabel = "With iRxReminder",
  className = "",
  variant = "default",
}: ComparisonChartProps) {
  const isGlass = variant === "glass";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      if (prefersReducedMotion) {
        setAnimated(true);
      } else {
        const timer = setTimeout(() => setAnimated(true), 100);
        return () => clearTimeout(timer);
      }
    }
  }, [isInView, animated, prefersReducedMotion]);

  const maxValue = Math.max(...metrics.flatMap((m) => [m.without, m.withIrx]));

  return (
    <div ref={ref} className={`space-y-8 ${className}`}>
      {/* Legend */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#D4D4D4]" />
          <span className={`font-medium ${isGlass ? "text-[#A3A3A3]" : "text-[#737373]"}`}>{withoutLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#1E56A0]" />
          <span className={`font-semibold ${isGlass ? "text-white" : "text-[#171717]"}`}>{withLabel}</span>
        </div>
      </div>

      {/* Bars */}
      {metrics.map((metric, i) => {
        const withoutWidth = (metric.without / maxValue) * 100;
        const withWidth = (metric.withIrx / maxValue) * 100;

        return (
          <div key={metric.label} className="space-y-3">
            <div className={`text-sm font-semibold ${isGlass ? "text-white" : "text-[#171717]"}`}>{metric.label}</div>
            <div className="space-y-2">
              {/* Without bar */}
              <div className="flex items-center gap-3">
                <div className={`flex-1 h-10 rounded-lg overflow-hidden ${isGlass ? "bg-white/10" : "bg-[#F5F5F5]"}`}>
                  <div
                    className={`h-full rounded-lg transition-[width] ease-out flex items-center justify-end pr-3 ${isGlass ? "bg-white/20" : "bg-[#D4D4D4]"}`}
                    style={{
                      width: animated ? `${withoutWidth}%` : "0%",
                      transitionDuration: prefersReducedMotion ? "0ms" : `${600 + i * 150}ms`,
                    }}
                  >
                    <span className={`text-xs font-bold whitespace-nowrap ${isGlass ? "text-[#A3A3A3]" : "text-[#525252]"}`}>
                      {formatValue(metric.without, metric.format)}
                    </span>
                  </div>
                </div>
              </div>
              {/* With bar */}
              <div className="flex items-center gap-3">
                <div className={`flex-1 h-10 rounded-lg overflow-hidden ${isGlass ? "bg-[#1E56A0]/10" : "bg-[#1E56A0]/5"}`}>
                  <div
                    className="h-full bg-[#1E56A0] rounded-lg transition-[width] ease-out flex items-center justify-end pr-3"
                    style={{
                      width: animated ? `${withWidth}%` : "0%",
                      transitionDuration: prefersReducedMotion ? "0ms" : `${800 + i * 150}ms`,
                    }}
                  >
                    <span className="text-xs font-bold text-white whitespace-nowrap">
                      {formatValue(metric.withIrx, metric.format)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
