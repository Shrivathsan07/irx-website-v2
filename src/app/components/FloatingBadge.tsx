import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface FloatingBadgeProps {
  icon: React.ElementType;
  text: string;
  variant?: "glass" | "elevated";
}

export function FloatingBadge({
  icon: Icon,
  text,
  variant = "elevated",
}: FloatingBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const isGlass = variant === "glass";

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
      animate={
        prefersReducedMotion
          ? {}
          : isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.9 }
      }
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
        isGlass
          ? "bg-white/[0.05] backdrop-blur-sm border border-white/10 text-white"
          : "bg-white border border-[#E5E5E5]/60 text-[#0F2B57] shadow-sm"
      }`}
    >
      <Icon className="w-4 h-4 text-[#1E56A0]" />
      {text}
    </motion.div>
  );
}

export function FloatingBadgeGroup({
  badges,
  variant = "elevated",
  className = "",
}: {
  badges: { icon: React.ElementType; text: string }[];
  variant?: "glass" | "elevated";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <FloatingBadge
          key={badge.text}
          icon={badge.icon}
          text={badge.text}
          variant={variant}
        />
      ))}
    </div>
  );
}
