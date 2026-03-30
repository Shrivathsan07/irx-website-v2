import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface TimelineItem {
  label: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  color?: string;
}

interface TimelineTrackProps {
  items: TimelineItem[];
  /** "vertical" for sidebar/milestone lists, "horizontal" for process steps */
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export function TimelineTrack({
  items,
  orientation = "vertical",
  className = "",
}: TimelineTrackProps) {
  if (orientation === "horizontal") {
    return <HorizontalTimeline items={items} className={className} />;
  }
  return <VerticalTimeline items={items} className={className} />;
}

function VerticalTimeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(trackRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={trackRef} className={`relative ${className}`}>
      {/* Animated connecting line */}
      <div className="absolute left-[23px] top-0 bottom-0 w-px hidden md:block">
        <div
          className="w-full bg-gradient-to-b from-[#1E56A0]/50 via-[#1E56A0]/20 to-transparent transition-[height] ease-out"
          style={{
            height: isInView ? "100%" : "0%",
            transitionDuration: prefersReducedMotion ? "0ms" : "1500ms",
          }}
        />
      </div>

      <div className="space-y-8">
        {items.map((item, i) => {
          const color = item.color || (i % 2 === 0 ? "#1E56A0" : "#163D7A");
          const Icon = item.icon;

          return (
            <FadeUp key={`${item.label}-${i}`} delay={i * 0.08}>
              <div className="flex items-start gap-5 md:gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}1a` }}
                  >
                    {Icon ? (
                      <Icon className="w-5 h-5" style={{ color }} />
                    ) : (
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1">
                    {item.label}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2B57] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </div>
  );
}

function HorizontalTimeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(trackRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      const timer = setTimeout(() => setLineWidth(100), 200);
      return () => clearTimeout(timer);
    }
    if (isInView && prefersReducedMotion) {
      setLineWidth(100);
    }
  }, [isInView, prefersReducedMotion]);

  return (
    <div ref={trackRef} className={className}>
      {/* Desktop: horizontal */}
      <div className="hidden md:block">
        {/* Connecting line */}
        <div className="relative mx-16 mb-8">
          <div className="h-px bg-[#E5E5E5] w-full" />
          <div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#1E56A0] to-[#163D7A] transition-[width] ease-out"
            style={{
              width: `${lineWidth}%`,
              transitionDuration: prefersReducedMotion ? "0ms" : "1200ms",
            }}
          />
          {/* Nodes on the line */}
          <div className="absolute inset-0 flex justify-between -top-2.5">
            {items.map((item, i) => {
              const color = item.color || (i % 2 === 0 ? "#1E56A0" : "#163D7A");
              return (
                <motion.div
                  key={`node-${i}`}
                  initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : isInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    delay: 0.3 + i * 0.15,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="w-5 h-5 rounded-full border-[3px] border-white"
                  style={{ backgroundColor: color, boxShadow: `0 0 0 2px ${color}4d` }}
                />
              );
            })}
          </div>
        </div>

        {/* Labels */}
        <div className="grid" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
          {items.map((item, i) => {
            const color = item.color || (i % 2 === 0 ? "#1E56A0" : "#163D7A");
            const Icon = item.icon;
            return (
              <FadeUp key={`label-${i}`} delay={0.3 + i * 0.1}>
                <div className="text-center px-3">
                  {Icon && (
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: `${color}1a` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                  )}
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1">
                    {item.label}
                  </div>
                  <h4 className="font-bold text-[#0F2B57] mb-1.5">{item.title}</h4>
                  <p className="text-sm text-[#737373] leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical fallback */}
      <div className="md:hidden">
        <VerticalTimeline items={items} className="" />
      </div>
    </div>
  );
}
