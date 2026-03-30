import { Section } from "@/app/components/animations/Section";

interface SectionWrapperProps {
  children: React.ReactNode;
  bg?: "white" | "neutral-50" | "neutral-100" | "neutral-900" | "brand-500";
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, bg = "white", className = "", id }: SectionWrapperProps) {
  const bgMap: Record<string, string> = {
    "white": "bg-white",
    "neutral-50": "bg-[#FAFAFA]",
    "neutral-100": "bg-[#F5F5F5]",
    "neutral-900": "bg-[#0F2B57]",
    "brand-500": "bg-[#1E56A0]",
  };

  return (
    <Section id={id} className={`py-20 lg:py-28 ${bgMap[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {children}
      </div>
    </Section>
  );
}
