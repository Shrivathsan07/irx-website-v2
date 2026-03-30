import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Phone, Mail, MapPin, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  title: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const heroAnimation = prefersReducedMotion ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    alert("Thank you for your inquiry. We will contact you soon!");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF4FF]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div {...heroAnimation}>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F2B57] mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Let&rsquo;s Talk About Better
              <br />
              <span className="text-[#1E56A0]">Medication Outcomes</span>
            </h1>
            <p className="text-xl text-[#737373]">
              Get in touch with our team to learn more about iRxReminder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <FadeUp>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization">
                        Organization / Health System *
                      </Label>
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
                    <div>
                      <Label htmlFor="title">Role / Title</Label>
                      <Input
                        id="title"
                        {...register("title")}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                      <Controller
                        name="inquiryType"
                        control={control}
                        rules={{ required: "Please select an inquiry type" }}
                        render={({ field }) => (
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="mt-1.5" aria-describedby={errors.inquiryType ? "inquiry-error" : undefined}>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pilot">Schedule a Pilot</SelectItem>
                              <SelectItem value="demo">Request a Demo</SelectItem>
                              <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                              <SelectItem value="research">Research Collaboration</SelectItem>
                              <SelectItem value="general">General Question</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.inquiryType && (
                        <p id="inquiry-error" className="text-sm text-red-500 mt-1">{errors.inquiryType.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      {...register("message", { required: "Message is required" })}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="mt-1.5"
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1E56A0] hover:bg-[#163D7A] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
                  >
                    Submit
                  </Button>
                </form>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]/60" style={{ boxShadow: "0 1px 3px rgba(30,58,138,0.04), 0 4px 12px rgba(30,58,138,0.06)" }}>
                  <h3 className="font-bold text-[#171717] mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#1E56A0] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-[#171717]">
                          Phone
                        </div>
                        <a
                          href="tel:3308068675"
                          className="text-sm text-[#737373] hover:text-[#1E56A0] transition-colors"
                        >
                          330.806.8675
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#1E56A0] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-[#171717]">
                          General Inquiries
                        </div>
                        <a
                          href="mailto:info@irxreminder.com"
                          className="text-sm text-[#737373] hover:text-[#1E56A0] transition-colors"
                        >
                          info@irxreminder.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#1E56A0] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-[#171717]">
                          Address
                        </div>
                        <address className="text-sm text-[#737373] not-italic">
                          1768 E 25th St #308
                          <br />
                          Cleveland, OH 44114
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]/60" style={{ boxShadow: "0 1px 3px rgba(30,58,138,0.04), 0 4px 12px rgba(30,58,138,0.06)" }}>
                  <h3 className="font-bold text-[#171717] mb-4">
                    Direct Contacts
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-medium text-[#171717]">
                        Sales &amp; Partnerships
                      </div>
                      <a
                        href="mailto:ltusick@irxreminder.com"
                        className="text-[#1E56A0] hover:text-[#163D7A] transition-colors"
                      >
                        Larry Tusick, CBO
                        <br />
                        ltusick@irxreminder.com
                      </a>
                    </div>
                    <div className="pt-3 border-t border-[#E5E5E5]">
                      <div className="font-medium text-[#171717]">
                        Management / Investment
                      </div>
                      <a
                        href="mailto:asterns@irxreminder.com"
                        className="text-[#1E56A0] hover:text-[#163D7A] transition-colors"
                      >
                        Anthony Sterns, PhD, CEO
                        <br />
                        asterns@irxreminder.com
                      </a>
                    </div>
                    <div className="pt-3 border-t border-[#E5E5E5]">
                      <div className="font-medium text-[#171717]">
                        Operations / FDA
                      </div>
                      <a
                        href="mailto:fma@irxreminder.com"
                        className="text-[#1E56A0] hover:text-[#163D7A] transition-colors"
                      >
                        Fred Ma, MD PhD, COO
                        <br />
                        fma@irxreminder.com
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]/60" style={{ boxShadow: "0 1px 3px rgba(30,58,138,0.04), 0 4px 12px rgba(30,58,138,0.06)" }}>
                  <h3 className="font-bold text-[#171717] mb-2">
                    Business Hours
                  </h3>
                  <p className="text-sm text-[#737373]">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </FadeUp>

              {/* Alternative CTAs */}
              <FadeUp delay={0.25}>
                <div className="space-y-3">
                  <Link
                    to="/schedule-pilot"
                    className="flex items-center justify-between p-4 bg-[#1E56A0]/5 rounded-xl border border-[#1E56A0]/10 hover:border-[#1E56A0]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#1E56A0]" />
                      <span className="font-medium text-[#171717] text-sm">
                        Schedule a Pilot
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1E56A0] group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/roi-calculator"
                    className="flex items-center justify-between p-4 bg-[#0F2B57]/5 rounded-xl border border-[#0F2B57]/10 hover:border-[#0F2B57]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[#0F2B57]" />
                      <span className="font-medium text-[#171717] text-sm">
                        Calculate Your ROI
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#0F2B57] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
