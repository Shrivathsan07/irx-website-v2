import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface SplitHeroProps {
  label: string;
  headline: React.ReactNode;
  /** Optional tagline rendered below the headline at a smaller size */
  tagline?: string;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  trustItems?: { icon: React.ElementType; text: string }[];
  /** Visual element on the right side */
  visual?: React.ReactNode;
  /** Light variant: white bg; dark variant: neutral-900 bg */
  variant?: "dark" | "light";
}

export function SplitHero({
  label,
  headline,
  tagline,
  subtitle,
  primaryCta,
  secondaryCta,
  trustItems,
  visual,
  variant = "light",
}: SplitHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const heroAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      };
  const delayedAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      };
  const fadeAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.5 },
      };
  const visualAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 40, scale: 0.95 },
        animate: { opacity: 1, x: 0, scale: 1 },
        transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
      };

  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-[#0F2B57]" : "bg-[#EEF4FF]"}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div {...heroAnim}>
              <p className={`font-semibold text-xs tracking-[0.05em] uppercase mb-6 ${isDark ? "text-[#B0C4DE]" : "text-[#1E56A0]"}`}>
                {label}
              </p>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.08] ${tagline ? "mb-3" : "mb-6"} ${isDark ? "text-white" : "text-[#0F2B57]"}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {headline}
              </h1>
              {tagline && (
                <p
                  className={`text-xl sm:text-2xl font-bold tracking-[-0.01em] mb-6 ${isDark ? "text-[#B0C4DE]" : "text-[#1E56A0]"}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tagline}
                </p>
              )}
              <p className={`text-xl leading-relaxed mb-10 max-w-xl ${isDark ? "text-[#B0C4DE]" : "text-[#737373]"}`}>
                {subtitle}
              </p>
            </motion.div>

            {(primaryCta || secondaryCta) && (
              <motion.div {...delayedAnim} className="flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#1E56A0] hover:bg-[#163D7A] text-white text-lg px-8 py-6 shadow-md hover:shadow-lg transition-[background-color,box-shadow]"
                  >
                    <Link to={primaryCta.to}>
                      {primaryCta.label}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className={
                      isDark
                        ? "border-white/30 hover:border-white hover:bg-white/10 text-white text-lg px-8 py-6 transition-colors"
                        : "border-[#1E56A0]/20 text-[#1E56A0] hover:bg-[#1E56A0] hover:text-white text-lg px-8 py-6 transition-colors"
                    }
                  >
                    <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </motion.div>
            )}

            {trustItems && trustItems.length > 0 && (
              <motion.div
                {...fadeAnim}
                className={`mt-14 flex flex-wrap items-center gap-6 text-sm ${isDark ? "text-[#B0C4DE]" : "text-[#737373]"}`}
              >
                {trustItems.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#1E56A0]" />
                    {item.text}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: Visual */}
          {visual && (
            <motion.div {...visualAnim} className="hidden lg:block">
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
