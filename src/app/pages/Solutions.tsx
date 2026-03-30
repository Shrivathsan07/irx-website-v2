import { Link } from "react-router";
import {
  Activity,
  Users,
  FlaskConical,
  Pill,
  Shield,
  DollarSign,
  Workflow,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  FileCheck,
  Beaker,
  Clock,
  Building2,
  Heart,
  BarChart3,
  Lock,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { FadeUp } from "@/app/components/animations";
import { SplitHero } from "@/app/components/SplitHero";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";

/* ─── Use Case Visual for Light Hero ─── */
function UseCaseVisual() {
  return (
    <div className="relative">
      <div
        className="bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8"
        style={{
          boxShadow:
            "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.08), 0 16px 40px rgba(15,43,87,0.10)",
        }}
      >
        <div className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-5">
          Configured For
        </div>
        <div className="space-y-3">
          {[
            {
              icon: FlaskConical,
              label: "Clinical Research",
              color: "#0F2B57",
              stat: "25% fewer dropouts",
            },
            {
              icon: Activity,
              label: "Behavioral Health",
              color: "#1E56A0",
              stat: "83% adherence",
            },
            {
              icon: Pill,
              label: "Pharmacies",
              color: "#1E56A0",
              stat: "90-day retention",
            },
            {
              icon: Building2,
              label: "Health Systems",
              color: "#0F2B57",
              stat: "3x cost recovery",
            },
            {
              icon: Heart,
              label: "Senior Living",
              color: "#1E56A0",
              stat: "Zero sorting errors",
            },
            {
              icon: BarChart3,
              label: "Health Plans",
              color: "#0F2B57",
              stat: "Verified data",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-3 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5]/60"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#0F2B57]">
                  {item.label}
                </div>
              </div>
              <div
                className="text-xs font-bold"
                style={{ color: item.color }}
              >
                {item.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const solutionSections = ["research", "mental-health", "pharmacies", "health-systems", "senior-living", "underwriters"];

export function Solutions() {
  const activeSection = useSectionObserver(solutionSections);

  return (
    <div className="bg-white">
      {/* ═══ Hero — Light Variant ═══ */}
      <SplitHero
        label="Solutions"
        headline="Your patients. Your data."
        tagline="Your peace of mind."
        subtitle="Whether you run clinical trials, manage behavioral health clients, fill prescriptions, or lead a health system — iRxReminder is configured for your use case."
        primaryCta={{ label: "Schedule a Pilot", to: "/schedule-pilot" }}
        secondaryCta={{ label: "See the Evidence", to: "/evidence" }}
        trustItems={[
          // TODO: Update to "FDA 510(k) Cleared" once clearance is granted
          { icon: Shield, text: "FDA 510(k) Pathway" },
          { icon: Lock, text: "HIPAA Compliant" },
          { icon: Activity, text: "Real-Time Data" },
        ]}
        visual={<UseCaseVisual />}
        variant="light"
      />

      {/* Sticky Sub-Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(15,43,87,0.04)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-6 text-sm font-medium scrollbar-hide">
            {[
              { href: "#research", id: "research", label: "Clinical Research" },
              { href: "#mental-health", id: "mental-health", label: "Behavioral Health" },
              { href: "#pharmacies", id: "pharmacies", label: "Pharmacies" },
              { href: "#health-systems", id: "health-systems", label: "Health Systems" },
              { href: "#senior-living", id: "senior-living", label: "Senior Living" },
              { href: "#underwriters", id: "underwriters", label: "Health Plans" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap transition-colors pb-2 border-b-2 ${
                  activeSection === item.id
                    ? "text-[#1E56A0] border-[#1E56A0] font-semibold"
                    : "text-[#737373] hover:text-[#1E56A0] border-transparent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>



      {/* ═══ SECTION 1: CLINICAL RESEARCH ═══ */}
      <section
        id="research"
        className="py-24 md:py-32 bg-white scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0F2B57]/10">
                  <FlaskConical className="w-7 h-7 text-[#0F2B57]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Finish Studies on Time, on Budget, with Data You Can Trust
                </h2>
                <p className="text-xl text-[#404040] leading-relaxed mb-6">
                  You&rsquo;ve designed a clean protocol. But 30% of
                  participants drop out unannounced. The ones who stay may not
                  be taking their medication on schedule. You&rsquo;re
                  collecting data that doesn&rsquo;t reflect what actually
                  happened.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#1E56A0] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  25%
                </div>
                <p className="text-[#737373] font-medium mt-1">
                  fewer clinical trial dropouts (University of Michigan)
                </p>
              </div>
            </FadeUp>

            <div className="space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <h4 className="font-bold text-[#0F2B57] mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                    {[
                      "Track every dose event in real time. See exactly who\u2019s following protocol.",
                      "Intervene with the 20% who need help instead of bothering the 80% who don\u2019t.",
                      "Automatic dose recording. Participants can\u2019t game compliance data.",
                      "ESmCapture surveys for patient-reported outcomes.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-gradient-to-br from-[#FAFAFA] to-[#EEF4FF] p-7 rounded-2xl border border-[#0F2B57]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Beaker className="w-4 h-4 text-[#0F2B57]" />
                    <h4 className="font-semibold text-[#0F2B57] text-sm">
                      Featured Study
                    </h4>
                  </div>
                  <p className="text-[#404040] text-sm leading-relaxed">
                    HOPA-funded oncology study at University of Michigan Cancer
                    Center: 25% reduction in trial dropouts using iRxReminder.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <Link
                  to="/schedule-pilot"
                  className="flex items-center justify-between p-5 bg-[#1E56A0]/5 rounded-xl border border-[#1E56A0]/15 hover:border-[#1E56A0]/30 transition-colors group"
                >
                  <div>
                    <span className="font-semibold text-[#0F2B57] block">
                      Configure a Research Pilot
                    </span>
                    <span className="text-sm text-[#737373]">
                      See how iRxReminder integrates with your study protocol
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#1E56A0] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="research-protocol">
                      <AccordionTrigger>
                        Protocol Integration Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Study Mode auto-configures from protocol ID &mdash;
                            no manual setup per participant
                          </li>
                          <li>
                            Supports complex multi-drug regimens with different
                            dosing schedules
                          </li>
                          <li>
                            ESmCapture ecological momentary assessments triggered
                            by dose events or time intervals
                          </li>
                          <li>
                            Exportable compliance data in formats compatible with
                            major CTMS platforms
                          </li>
                          <li>
                            Real-time protocol deviation alerts for study
                            coordinators
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="research-roi">
                      <AccordionTrigger>
                        Financial Impact for Sponsors
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Each dropout costs $20K&ndash;$40K in sunk
                            recruitment costs
                          </li>
                          <li>
                            25% dropout reduction at 100 participants =
                            $500K&ndash;$1M saved per trial
                          </li>
                          <li>
                            Cleaner adherence data reduces need for per-protocol
                            analysis adjustments
                          </li>
                          <li>
                            Faster enrollment-to-completion timelines through
                            better retention
                          </li>
                        </ul>
                        <Link
                          to="/roi-calculator"
                          className="inline-flex items-center gap-2 text-[#1E56A0] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Calculate your ROI{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 2: BEHAVIORAL HEALTH ═══ */}
      <section
        id="mental-health"
        className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <h4 className="font-bold text-[#0F2B57]">The Reality</h4>
                  </div>
                  <p className="text-[#404040] leading-relaxed">
                    Your clients leave inpatient care stabilized. Within weeks,
                    many stop taking medications. You find out when
                    they&rsquo;re back in crisis&nbsp;&mdash; not before.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <h4 className="font-bold text-[#0F2B57] mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                    {[
                      "Real-time dose tracking. See non-adherence the day it starts.",
                      "Intervene early. Avoid the crisis. Keep staff focused on care.",
                      "Telepsychiatry support with medication review and monitoring.",
                      "3x ROI via RPM/RTM billing codes. Patient monitoring is a billable event.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-gradient-to-br from-[#FAFAFA] to-[#EEF4FF] p-7 rounded-2xl border border-[#0F2B57]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0F2B57]/10 flex items-center justify-center">
                      <FileCheck className="w-4 h-4 text-[#0F2B57]" />
                    </div>
                    <h4 className="font-bold text-[#0F2B57]">
                      Clinical Evidence
                    </h4>
                  </div>
                  <p className="text-[#404040] leading-relaxed">
                    NIH-funded trial across 350+ participants in behavioral
                    health networks:{" "}
                    <strong className="text-[#0F2B57]">
                      48% &rarr; 80%+ adherence improvement
                    </strong>
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <Link
                  to="/schedule-pilot"
                  className="flex items-center justify-between p-5 bg-[#1E56A0]/5 rounded-xl border border-[#1E56A0]/15 hover:border-[#1E56A0]/30 transition-colors group"
                >
                  <div>
                    <span className="font-semibold text-[#0F2B57] block">
                      Schedule a Behavioral Health Pilot
                    </span>
                    <span className="text-sm text-[#737373]">
                      Purpose-built for OUD and SMI populations
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#1E56A0] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeUp>
            </div>

            <div className="order-1 lg:order-2">
              <FadeUp>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1E56A0]/10">
                  <Activity className="w-7 h-7 text-[#1E56A0]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Behavioral Health &amp; Relapse Prevention
                </h2>
                <p className="text-xl text-[#404040] leading-relaxed mb-4">
                  Non-compliant patients are more likely to require
                  hospitalization, incarceration, or crisis support. Your staff
                  burns out managing emergencies that could have been prevented.
                </p>
                <p className="text-[#404040] leading-relaxed mb-6">
                  Critical for OUD (opioid use disorder) and SMI (serious mental illness) populations where medication
                  adherence is the difference between stability and relapse. A $9.1B market
                  spanning 2,500+ behavioral health agencies and 14,000+ treatment centers.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#1E56A0] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  83%
                </div>
                <p className="text-[#737373] font-medium mt-1">
                  adherence rate for psychiatric medications
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 3: PHARMACIES ═══ */}
      <section
        id="pharmacies"
        className="py-24 md:py-32 bg-white scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1E56A0]/10">
                  <Pill className="w-7 h-7 text-[#1E56A0]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Differentiate with Technology Your Competitors Can&rsquo;t Match
                </h2>
                <p className="text-xl text-[#404040] leading-relaxed mb-6">
                  You fill prescriptions, but what happens after the patient
                  leaves? You have no visibility. iRxReminder changes that.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#1E56A0] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  90-day
                </div>
                <p className="text-[#737373] font-medium mt-1">
                  patient retention via pod refill cycles
                </p>
              </div>
            </FadeUp>

            <div className="space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <h4 className="font-bold text-[#0F2B57] mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                    {[
                      "Patient retention: Pods require 90-day fills at your pharmacy.",
                      "Real medication use data \u2014 not just fill data.",
                      "Customer intimacy through shared adherence data and tailored service.",
                      "Reduced liability from consumer sorting errors.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-gradient-to-br from-[#F5F5F5] to-[#EEF4FF] p-7 rounded-2xl border border-[#1E56A0]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#1E56A0]" />
                    <h4 className="font-semibold text-[#0F2B57] text-sm">
                      Simple Integration
                    </h4>
                  </div>
                  <p className="text-[#404040] text-sm leading-relaxed">
                    Pod-filling fits into existing pharmacy workflows. Training
                    takes less than 1 hour per pharmacist.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="pharmacy-revenue">
                      <AccordionTrigger>
                        New Revenue Streams
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            90-day pod refills create predictable recurring
                            revenue per patient
                          </li>
                          <li>
                            RPM/RTM billing codes generate additional
                            reimbursement for monitoring services
                          </li>
                          <li>
                            Adherence data enables value-based contracts with
                            payers and health plans
                          </li>
                          <li>
                            Differentiation attracts institutional partnerships
                            (health systems, behavioral health providers)
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pharmacy-competitive">
                      <AccordionTrigger>
                        Competitive Advantage
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Offer services mail-order and big-box pharmacies
                            cannot replicate
                          </li>
                          <li>
                            Real medication use data creates stickier patient
                            relationships
                          </li>
                          <li>
                            Pod technology requires your pharmacy for
                            refills&nbsp;&mdash; built-in retention
                          </li>
                          <li>
                            White-label reporting for prescriber partners
                          </li>
                        </ul>
                        <Link
                          to="/schedule-pilot"
                          className="inline-flex items-center gap-2 text-[#1E56A0] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Schedule a pilot{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 3B: HEALTH SYSTEMS ═══ */}
      <section
        id="health-systems"
        className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <h4 className="font-bold text-[#0F2B57] mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                    {[
                      "Post-discharge monitoring: Track medication behavior at home in real time.",
                      "Reduce readmission penalties with proactive intervention.",
                      "3x cost recovery via RPM/RTM billing codes.",
                      "100% EHR integration \u2014 no workflow disruption.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-gradient-to-br from-[#FAFAFA] to-[#EEF4FF] p-7 rounded-2xl border border-[#0F2B57]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-[#0F2B57]" />
                    <h4 className="font-semibold text-[#0F2B57] text-sm">
                      Compliance
                    </h4>
                  </div>
                  <p className="text-[#404040] text-sm leading-relaxed">
                    HIPAA compliant. SOC 2 certified. FDA Class II clearance
                    pathway.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="health-readmission">
                      <AccordionTrigger>
                        Readmission Reduction Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            CMS penalizes hospitals up to 3% of Medicare
                            reimbursement for excess readmissions
                          </li>
                          <li>
                            Post-discharge medication non-adherence is a leading
                            driver of 30-day readmissions
                          </li>
                          <li>
                            Real-time alerts allow care coordinators to
                            intervene before patients decompensate
                          </li>
                          <li>
                            Automated compliance reports for bundled payment
                            quality metrics
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="health-revenue">
                      <AccordionTrigger>
                        Revenue &amp; Billing Impact
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            RPM (99453, 99454, 99457, 99458) and RTM codes
                            generate $120&ndash;$180/patient/month
                          </li>
                          <li>
                            At 500 monitored patients, platform generates
                            $720K&ndash;$1.08M annually
                          </li>
                          <li>
                            Improved quality scores support value-based
                            contract bonuses
                          </li>
                          <li>
                            Reduced readmission penalties protect existing
                            Medicare revenue
                          </li>
                        </ul>
                        <Link
                          to="/roi-calculator"
                          className="inline-flex items-center gap-2 text-[#1E56A0] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Calculate your ROI{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>

            <div className="order-1 lg:order-2">
              <FadeUp>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0F2B57]/10">
                  <Building2 className="w-7 h-7 text-[#0F2B57]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Reduce Readmissions. Increase Bundled Payment Margins.
                </h2>
                <p className="text-xl text-[#404040] leading-relaxed mb-6">
                  Patients are discharged, and you have almost no visibility
                  into whether they&rsquo;re taking medications. Readmissions
                  erode margins. Post-discharge non-adherence is the silent
                  driver.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#0F2B57] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  3&times;
                </div>
                <p className="text-[#737373] font-medium mt-1">
                  cost recovery via RPM/RTM billing codes
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 4: SENIOR LIVING & HOME HEALTH ═══ */}
      <section
        id="senior-living"
        className="py-24 md:py-32 bg-white scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1E56A0]/10">
                  <Heart className="w-7 h-7 text-[#1E56A0]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Keep Residents Safe. Reduce Med Errors. Protect Your License.
                </h2>
                <p className="text-xl text-[#404040] leading-relaxed mb-4">
                  Assisted living and home health agencies manage dozens of
                  medication regimens daily. Manual administration tracking
                  leads to errors, omissions, and liability. iRxReminder
                  automates the hard part.
                </p>
                <p className="text-[#404040] leading-relaxed mb-6">
                  Serving 15,000+ aging communities and a 62M US aging population that is doubling by 2030.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#1E56A0] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  2&times;
                </div>
                <p className="text-[#737373] font-medium mt-1">
                  Older adult population growth by 2030
                </p>
              </div>
            </FadeUp>

            <div className="space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <h4 className="font-bold text-[#0F2B57] mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                    {[
                      "Pharmacist-filled pods eliminate staff sorting errors and med pass complexity.",
                      "Real-time records replace paper MAR sheets with verified digital documentation.",
                      "Remote monitoring for home health patients between visits.",
                      "Family member visibility reduces anxiety and support calls.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="senior-regulatory">
                      <AccordionTrigger>
                        Regulatory &amp; Compliance Benefits
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Digital MAR documentation for state survey readiness
                          </li>
                          <li>
                            Automated incident reporting for missed medications
                          </li>
                          <li>
                            Reduces medication error liability exposure
                          </li>
                          <li>
                            Supports Quality Measures reporting for CMS Star
                            Ratings
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="senior-staffing">
                      <AccordionTrigger>
                        Staffing &amp; Operational Impact
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Reduces med pass time by eliminating manual sorting
                            and counting
                          </li>
                          <li>
                            Frees nursing staff for higher-value clinical tasks
                          </li>
                          <li>
                            Supports independent living goals &mdash; residents
                            self-administer with safety guardrails
                          </li>
                          <li>
                            RPM/RTM billing generates revenue to offset platform
                            costs
                          </li>
                        </ul>
                        <Link
                          to="/schedule-pilot"
                          className="inline-flex items-center gap-2 text-[#1E56A0] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Schedule a pilot{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 5: HEALTHCARE UNDERWRITERS ═══ */}
      <section
        id="underwriters"
        className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <h4 className="font-bold text-[#0F2B57] mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                    {[
                      "Verified adherence data replaces self-reported compliance claims.",
                      "Risk stratification based on real-time medication behavior patterns.",
                      "Early intervention prevents costly hospitalizations and ER visits.",
                      "Population health analytics for covered lives.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div
                  className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="underwriter-data">
                      <AccordionTrigger>
                        Data &amp; Analytics Capabilities
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Aggregate adherence rates across covered populations
                          </li>
                          <li>
                            Identify high-risk members before adverse events
                            occur
                          </li>
                          <li>
                            Track intervention effectiveness with before/after
                            adherence metrics
                          </li>
                          <li>
                            Integration with claims data for total cost-of-care
                            analysis
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="underwriter-roi">
                      <AccordionTrigger>
                        Financial Impact for Payers
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            $300B+ annual cost of non-adherence &mdash; even
                            small improvements drive significant savings
                          </li>
                          <li>
                            Reduced hospitalization and ER utilization for
                            adherent members
                          </li>
                          <li>
                            Supports value-based care contract performance
                            metrics
                          </li>
                          <li>
                            Member satisfaction improvements from proactive
                            medication support
                          </li>
                        </ul>
                        <Link
                          to="/roi-calculator"
                          className="inline-flex items-center gap-2 text-[#1E56A0] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Calculate your ROI{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>

            <div className="order-1 lg:order-2">
              <FadeUp>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0F2B57]/10">
                  <BarChart3 className="w-7 h-7 text-[#0F2B57]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Better Data. Better Risk Models. Lower Claims.
                </h2>
                <p className="text-xl text-[#404040] leading-relaxed mb-6">
                  Payers and underwriters rely on self-reported adherence data
                  that is notoriously unreliable. iRxReminder provides
                  verified, dose-level medication behavior data that transforms
                  risk assessment and population health management.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#0F2B57] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  $300B+
                </div>
                <p className="text-[#737373] font-medium mt-1">
                  Annual cost of medication non-adherence in the U.S.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ PERSONA PATHS ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Decision Makers
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0F2B57] text-center mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Speak to Your C-Suite
            </h2>
            <p className="text-xl text-[#404040] text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Different stakeholders need different answers. Here&rsquo;s what
              each one hears.
            </p>
          </FadeUp>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
            {[
              {
                icon: Shield,
                title: "CMO",
                outcome:
                  "83% adherence. Fewer readmissions. Better patient outcomes across populations.",
                color: "#0F2B57",
                to: "/platform",
              },
              {
                icon: DollarSign,
                title: "CFO",
                outcome:
                  "3x cost recovery via RPM/RTM codes. Reduced readmission penalties. Measurable ROI.",
                color: "#1E56A0",
                to: "/roi-calculator",
              },
              {
                icon: Workflow,
                title: "Case Management",
                outcome:
                  "Simple dashboards. Reliable post-discharge data. Intervene before crisis.",
                color: "#0F2B57",
                to: "/platform#dashboard",
              },
              {
                icon: Pill,
                title: "Pharmacy Director",
                outcome:
                  "New revenue stream. Patient retention via 90-day pod fills. Real medication use data.",
                color: "#1E56A0",
                to: "/platform",
              },
            ].map((persona, i) => (
              <FadeUp key={persona.title} delay={0.1 + i * 0.08}>
                <Link
                  to={persona.to}
                  className="group block min-w-[260px] snap-start bg-white p-7 rounded-2xl border border-[#E5E5E5]/60 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 h-full"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,86,160,0.04), 0 4px 12px rgba(30,86,160,0.06), 0 16px 40px rgba(15,43,87,0.06)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${persona.color}10` }}
                  >
                    <persona.icon
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      style={{ color: persona.color }}
                    />
                  </div>
                  <div
                    className="font-bold text-lg text-[#0F2B57] mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {persona.title}
                  </div>
                  <p className="text-[#404040] text-sm leading-relaxed mb-5">
                    {persona.outcome}
                  </p>
                  <span className="inline-flex items-center text-[#1E56A0] font-semibold text-sm group-hover:gap-3 gap-2 transition-[gap]">
                    See details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 md:py-32 bg-[#EEF4FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#0F2B57] mb-6 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See how iRxReminder fits
              <br />
              <span className="text-[#1E56A0]">your use case</span>
            </h2>
            <p className="text-xl text-[#404040] mb-8 max-w-2xl mx-auto leading-relaxed">
              We&rsquo;ll configure a pilot around your specific
              needs&nbsp;&mdash; research, behavioral health, pharmacy, or
              health system.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#1E56A0] hover:bg-[#163D7A] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(30,86,160,0.3),0_6px_20px_rgba(30,86,160,0.25)] hover:shadow-[0_1px_3px_rgba(30,86,160,0.4),0_8px_28px_rgba(30,86,160,0.3)] transition-[background-color,box-shadow]"
              >
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0F2B57]/20 bg-white hover:border-[#0F2B57]/40 hover:bg-white/80 text-[#0F2B57] text-lg px-8 py-6 transition-colors"
              >
                <Link to="/evidence">See the Evidence</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
