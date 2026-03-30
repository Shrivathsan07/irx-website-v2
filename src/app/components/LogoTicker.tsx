import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const partners = [
  "University of Michigan",
  "Harvard University",
  "Case Western Reserve University",
  "Kent State University",
  "Summa Health",
  "MetroHealth",
  "University Hospitals",
  "Brown University",
  "NIH / NIA / NIMH",
];

export function LogoTicker({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const prefersReducedMotion = useReducedMotion();

  const textColor = variant === "dark" ? "text-[#A3A3A3]" : "text-[#737373]";
  const separatorColor = variant === "dark" ? "bg-[#525252]" : "bg-[#D4D4D4]";
  const fadeFrom = variant === "dark" ? "from-[#171717]" : "from-white";
  const fadeTo = variant === "dark" ? "to-[#171717]/0" : "to-white/0";

  if (prefersReducedMotion) {
    return (
      <div className={`flex flex-wrap justify-center items-center gap-x-8 gap-y-4 ${textColor} font-medium`}>
        {partners.map((name) => (
          <span key={name} className="text-sm whitespace-nowrap">
            {name}
          </span>
        ))}
      </div>
    );
  }

  const doubled = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden group">
      <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r ${fadeFrom} ${fadeTo} z-10 pointer-events-none`} />
      <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l ${fadeFrom} ${fadeTo} z-10 pointer-events-none`} />

      <div
        className="flex items-center gap-8 animate-scroll-x group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-8">
            <span className={`text-sm font-medium whitespace-nowrap ${textColor}`}>
              {name}
            </span>
            {i < doubled.length - 1 && (
              <span className={`w-1 h-1 rounded-full ${separatorColor} flex-shrink-0`} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
