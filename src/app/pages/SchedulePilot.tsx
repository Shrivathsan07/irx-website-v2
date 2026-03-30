import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Shield, TrendingUp, Award, Lock, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { FloatingBadgeGroup } from "@/app/components/FloatingBadge";

interface PilotFormData {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}

export function SchedulePilot() {
  const prefersReducedMotion = useReducedMotion();
  const heroAnimation = prefersReducedMotion ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PilotFormData>();

  const onSubmit = (data: PilotFormData) => {
    console.log("Pilot request submitted:", data);
    alert(
      "Thank you! We will contact you within 24 hours to discuss your pilot program."
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero — Light */}
      <section className="bg-[#EEF4FF]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 text-center">
          <motion.div {...heroAnimation}>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-4">
              Get Started
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#171717] mb-3 tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
              Schedule a Pilot Program
            </h1>
            <p
              className="text-xl sm:text-2xl font-bold text-[#1E56A0] tracking-[-0.01em] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Started in 30 Days
            </p>
            <p className="text-xl text-[#737373] max-w-2xl mx-auto">
              See firsthand how iRxReminder improves medication adherence,
              reduces readmissions, and generates reimbursable revenue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeUp>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white border border-[#E5E5E5]/60 rounded-2xl p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#171717] mb-6 tracking-[-0.01em]">
                    Pilot Program Information
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          {...register("title", { required: "Title is required" })}
                          aria-describedby={errors.title ? "title-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.title && (
                          <p id="title-error" className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        {...register("organization", { required: "Organization is required" })}
                        aria-describedby={errors.organization ? "organization-error" : undefined}
                        className="mt-1.5"
                      />
                      {errors.organization && (
                        <p id="organization-error" className="text-sm text-red-500 mt-1">{errors.organization.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email address",
                            },
                          })}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone", { required: "Phone is required" })}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your organization, patient population, or what you're hoping to achieve with a pilot program."
                        {...register("message")}
                        className="mt-1.5 min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#1E56A0] hover:bg-[#163D7A] text-white transition-colors hover:shadow-md hover:shadow-[#1E56A0]/20"
                    >
                      Submit Pilot Request
                    </Button>
                    <div className="mt-4">
                      <FloatingBadgeGroup
                        badges={[
                          { icon: Shield, text: "FDA 510(k) Pathway" },
                          { icon: Lock, text: "HIPAA Compliant" },
                          { icon: CheckCircle2, text: "SOC 2 Type II" },
                        ]}
                      />
                    </div>
                  </div>
                </form>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]/60 shadow-sm">
                  <h3 className="font-bold text-[#171717] mb-4">
                    Why Pilot with iRxReminder?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Shield, label: "83% Adherence", sub: "Clinically validated improvement", color: "#0F2B57" },
                      { icon: TrendingUp, label: "3\u00d7 ROI", sub: "Via RPM/RTM billing", color: "#1E56A0" },
                      { icon: Award, label: "NIH-Funded", sub: "Federally validated research", color: "#0F2B57" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                        <div>
                          <div className="font-semibold text-[#171717] text-sm">
                            {item.label}
                          </div>
                          <div className="text-xs text-[#737373]">
                            {item.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]/60 shadow-sm">
                  <h3 className="font-bold text-[#171717] mb-3">Trusted By</h3>
                  <div className="space-y-1.5 text-sm text-[#737373]">
                    {[
                      "Harvard University",
                      "MetroHealth",
                      "University of Michigan",
                      "Kent State University",
                      "Brown University",
                      "Butler Hospital",
                    ].map((name) => (
                      <div key={name}>{name}</div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]/60 shadow-sm">
                  <h3 className="font-bold text-[#171717] mb-2">Questions?</h3>
                  <p className="text-sm text-[#737373] mb-3">
                    Our team is here to help
                  </p>
                  <a
                    href="tel:3308068675"
                    className="text-[#1E56A0] font-semibold hover:text-[#163D7A] transition-colors"
                  >
                    330.806.8675
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
