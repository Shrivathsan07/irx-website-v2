import { Link } from "react-router";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Wifi,
  Activity,
  Bell,
  Smartphone,
  Monitor,
  Lock,
  Zap,
  Eye,
  Clock,
  Server,
  Users,
  FileText,
  Radio,
  Lightbulb,
  Settings,
  Brain,
  GitBranch,
  MessageCircle,
  AlertTriangle,
  BarChart3,
  HeartPulse,
  TrendingUp,
  XCircle,
  Minus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { FadeUp } from "@/app/components/animations";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";
import { SplitHero } from "@/app/components/SplitHero";
import { BentoGrid } from "@/app/components/BentoGrid";
import { FloatingBadgeGroup } from "@/app/components/FloatingBadge";
import { TimelineTrack } from "@/app/components/TimelineTrack";
import { StatCard } from "@/app/components/StatCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";

const platformSections = ["pod", "app", "dashboard", "integration", "ai"];

/* ─── Product Visual for Hero ─── */
function PlatformVisual() {
  return (
    <div className="relative">
      {/* Main dashboard card */}
      <div
        className="relative bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8"
        style={{
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {/* Dashboard header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#1E56A0]" />
          <div className="w-3 h-3 rounded-full bg-[#1E56A0]/50" />
          <div className="w-3 h-3 rounded-full bg-[#1E56A0]/25" />
          <div className="ml-auto text-xs text-[#B0C4DE]/80 font-medium">
            iRxControl Center
          </div>
        </div>

        {/* Three product columns */}
        <div className="grid grid-cols-3 gap-4">
          {/* Pod */}
          <div className="bg-white/[0.06] rounded-xl p-4 border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-[#1E56A0]/20 flex items-center justify-center mb-3">
              <Radio className="w-4 h-4 text-[#1E56A0]" />
            </div>
            <div className="text-sm font-semibold text-white mb-1">Pod</div>
            <div className="text-xs text-[#B0C4DE]/80">IoT Device</div>
            <div className="mt-3 flex gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-green-400/60" />
              <div className="h-1.5 flex-1 rounded-full bg-green-400/40" />
              <div className="h-1.5 flex-1 rounded-full bg-green-400/20" />
            </div>
          </div>

          {/* App */}
          <div className="bg-white/[0.06] rounded-xl p-4 border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-[#1E56A0]/20 flex items-center justify-center mb-3">
              <Smartphone className="w-4 h-4 text-[#1E56A0]" />
            </div>
            <div className="text-sm font-semibold text-white mb-1">App</div>
            <div className="text-xs text-[#B0C4DE]/80">Patient</div>
            <div className="mt-3 flex gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-[#1E56A0]/60" />
              <div className="h-1.5 flex-1 rounded-full bg-[#1E56A0]/40" />
              <div className="h-1.5 flex-1 rounded-full bg-[#1E56A0]/20" />
            </div>
          </div>

          {/* Dashboard */}
          <div className="bg-white/[0.06] rounded-xl p-4 border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-[#1E56A0]/20 flex items-center justify-center mb-3">
              <Monitor className="w-4 h-4 text-[#1E56A0]" />
            </div>
            <div className="text-sm font-semibold text-white mb-1">
              Dashboard
            </div>
            <div className="text-xs text-[#B0C4DE]/80">Provider</div>
            <div className="mt-3 flex gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-[#0F2B57]/80" />
              <div className="h-1.5 flex-1 rounded-full bg-[#0F2B57]/50" />
              <div className="h-1.5 flex-1 rounded-full bg-[#0F2B57]/30" />
            </div>
          </div>
        </div>

        {/* Connecting data flow arrow */}
        <div className="mt-5 flex items-center gap-2 px-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[#1E56A0]/60 to-[#1E56A0]/20" />
          <Wifi className="w-4 h-4 text-[#1E56A0]/50" />
          <div className="h-px flex-1 bg-gradient-to-r from-[#1E56A0]/20 to-[#1E56A0]/60" />
        </div>

        {/* Stats row */}
        <div className="mt-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-[#1E56A0]">83%</div>
            <div className="text-[10px] text-[#B0C4DE]/80 uppercase tracking-wider">
              Adherence
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">Real-Time</div>
            <div className="text-[10px] text-[#B0C4DE]/80 uppercase tracking-wider">
              Monitoring
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-[#1E56A0]">HIPAA</div>
            <div className="text-[10px] text-[#B0C4DE]/80 uppercase tracking-wider">
              Compliant
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 bg-white/[0.1] backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 flex items-center gap-2">
        <Shield className="w-4 h-4 text-[#1E56A0]" />
        {/* TODO: Update to "FDA 510(k) Cleared" once clearance is granted */}
        <span className="text-xs font-semibold text-white">FDA 510(k) Pathway</span>
      </div>
    </div>
  );
}

export function Platform() {
  const activeSection = useSectionObserver(platformSections);

  return (
    <div className="bg-white">
      {/* Hero */}
      <SplitHero
        label="Platform"
        headline={
          <>
            One Platform.
            <br />
            Three Components.
          </>
        }
        tagline="Complete Visibility."
        subtitle="See exactly what's happening with your patients' medication behavior — from dispensing to adherence to intervention."
        primaryCta={{ label: "Schedule a Pilot", to: "/schedule-pilot" }}
        secondaryCta={{ label: "Calculate Your ROI", to: "/roi-calculator" }}
        trustItems={[
          // TODO: Update to "FDA 510(k) Cleared" once clearance is granted
          { icon: Shield, text: "FDA 510(k) Pathway" },
          { icon: Lock, text: "HIPAA Compliant" },
          { icon: Activity, text: "Real-Time Data" },
        ]}
        visual={<PlatformVisual />}
        variant="dark"
      />

      {/* Sticky Sub-Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-6 text-sm font-medium scrollbar-hide">
            {[
              { href: "#pod", id: "pod", label: "iLidRx Pod" },
              { href: "#app", id: "app", label: "iRxCapture App" },
              {
                href: "#dashboard",
                id: "dashboard",
                label: "iRxControl Center",
              },
              {
                href: "#integration",
                id: "integration",
                label: "EHR Integration",
              },
              {
                href: "#ai",
                id: "ai",
                label: "AI Intelligence",
              },
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

      {/* TODO: Add product image when available
          <img src="/images/product/ilidrx-pod.png" alt="iLidRx intelligent medication dispensing pod" /> */}
      {/* ═══ iLidRx Pod ═══ */}
      <section id="pod" className="py-24 bg-[#FAFAFA] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
                Smart Dispensing
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                iLidRx Pod
              </h2>
              <p className="text-xl text-[#404040] leading-relaxed">
                Pill organizers cause sorting errors that send patients to the
                ER. Bottle caps count openings but can&rsquo;t verify dosing.
                The iLidRx Pod dispenses the right medication, at the right
                time, one dose at a time.
              </p>
            </div>
          </FadeUp>

          {/* BentoGrid for pod features */}
          <div className="mt-14">
            <BentoGrid
              items={[
                {
                  icon: Clock,
                  title: "90-Day Supply Per Pod",
                  description:
                    "Pharmacist fills the pod. Patient never sorts pills. Zero sorting errors.",
                  span: "large",
                  stat: "90 Days",
                  color: "#0F2B57",
                },
                {
                  icon: Zap,
                  title: "Hold, Place, and Tilt\u2122",
                  description:
                    "Gesture-based activation ensures intentional dosing. Patients can\u2019t accidentally double-dose or catch up on missed doses.",
                  color: "#1E56A0",
                },
                {
                  icon: Activity,
                  title: "Real-Time Dose Recording",
                  description:
                    "Every dispensing event is automatically reported to your team. Compliance data can\u2019t be gamed.",
                  color: "#1E56A0",
                },
                {
                  icon: Wifi,
                  title: "Inductive Charging",
                  description:
                    "Place the pod on its stand to charge. No cables. Portable during the day, charges overnight.",
                },
              ]}
            />
          </div>

          {/* LED System + Specs side by side */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div
                className="h-full bg-white p-8 rounded-2xl border border-[#E5E5E5]/60"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  className="text-xl font-bold text-[#0F2B57] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  LED Color System
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      color: "bg-green-500",
                      ring: "ring-green-200",
                      label: "Green: Window Open",
                      desc: "Dosing window is active. Patient can dispense.",
                    },
                    {
                      color: "bg-yellow-400",
                      ring: "ring-yellow-200",
                      label: "Yellow: Mid-Window",
                      desc: "Gentle reminder. Dosing window is halfway through.",
                    },
                    {
                      color: "bg-red-500",
                      ring: "ring-red-200",
                      label: "Red: Window Closing",
                      desc: "Final alert before the window closes.",
                    },
                  ].map((led) => (
                    <div key={led.label} className="flex items-start gap-4">
                      <div
                        className={`w-8 h-8 ${led.color} rounded-full flex-shrink-0 mt-0.5 ring-4 ${led.ring}`}
                      />
                      <div>
                        <div className="font-semibold text-[#0F2B57] text-sm">
                          {led.label}
                        </div>
                        <div className="text-sm text-[#737373]">{led.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[#E5E5E5]/60">
                  <p
                    className="text-sm text-[#0F2B57] font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Patients take the right dose. Period.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div
                className="h-full bg-white p-6 md:p-8 rounded-2xl border border-[#E5E5E5]/60"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h3 className="text-lg font-bold text-[#0F2B57] mb-4">
                  Technical Specifications
                </h3>
                <Accordion type="multiple">
                  <AccordionItem value="pod-physical">
                    <AccordionTrigger>Physical Design</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 list-disc pl-4">
                        <li>
                          Compact form factor designed for nightstand or
                          countertop use
                        </li>
                        <li>
                          Medical-grade, BPA-free polymer construction
                        </li>
                        <li>Holds up to 90-day medication supply per pod</li>
                        <li>
                          Multi-color LED indicator system (green, yellow, red)
                          for dosing windows
                        </li>
                        <li>
                          Inductive (wireless) charging via charging stand
                        </li>
                        <li>Portable during the day, charges overnight</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="pod-dispensing">
                    <AccordionTrigger>Dispensing Mechanism</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 list-disc pl-4">
                        <li>
                          Patented Hold, Place, and Tilt&trade; gesture-based
                          activation
                        </li>
                        <li>
                          One dose dispensed per activation &mdash; prevents
                          double-dosing
                        </li>
                        <li>
                          Configurable dosing windows with LED color progression
                        </li>
                        <li>
                          Tamper-resistant design prevents unauthorized access
                        </li>
                        <li>
                          Lockout after dosing window closes to prevent catch-up
                          dosing
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="pod-connectivity">
                    <AccordionTrigger>
                      Connectivity &amp; Data
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 list-disc pl-4">
                        <li>
                          Bluetooth Low Energy (BLE) connection to iRxCapture
                          app
                        </li>
                        <li>
                          Real-time dose event recording with timestamp
                        </li>
                        <li>
                          Automatic data sync to iRxControl Center cloud
                          dashboard
                        </li>
                        <li>
                          Offline capability with data sync on reconnection
                        </li>
                        <li>End-to-end encrypted data transmission</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>


      {/* ═══ iRxCapture App ═══ */}
      <section id="app" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
                Patient App
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                iRxCapture App
              </h2>
              <p className="text-xl text-[#404040] leading-relaxed">
                Most reminders nag. Patients tune them out within weeks.
                iRxCapture only alerts when a patient actually
                forgets&nbsp;&mdash; turning reminders from annoying to
                meaningful.
              </p>
            </div>
          </FadeUp>

          {/* App features as BentoGrid */}
          <div className="mt-14">
            <BentoGrid
              items={[
                {
                  icon: Bell,
                  title: "Smart, Not Nagging",
                  description:
                    "Only alerts when the patient truly forgets. No alert fatigue — proven to maintain engagement beyond 90 days.",
                  span: "large",
                  color: "#1E56A0",
                },
                {
                  icon: FileText,
                  title: "Study Mode",
                  description:
                    "Enter study ID and participant ID. Auto-loads medications, education, and regimen schedules.",
                  color: "#0F2B57",
                },
                {
                  icon: Activity,
                  title: "Symptom Reporting",
                  description:
                    "Patients log symptoms directly in the app. Structured data flows to the care team in real time.",
                },
                {
                  icon: Lightbulb,
                  title: "Patient Education",
                  description:
                    "Medication-specific information delivered at the right moment — when the patient is engaging with their dose.",
                },
                {
                  icon: Eye,
                  title: "Adherence Visualization",
                  description:
                    "Patients see their own progress. Autonomy-oriented design encourages self-management, not surveillance.",
                  color: "#1E56A0",
                },
                {
                  icon: Settings,
                  title: "ESmCapture Surveys",
                  description:
                    "Customizable ecological momentary assessments for health behavior and symptom tracking.",
                },
              ]}
            />
          </div>

          <FadeUp delay={0.2}>
            <p
              className="mt-12 text-[#0F2B57] font-semibold text-center text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Adherence through support, not nagging.
            </p>
          </FadeUp>

          {/* App Specs */}
          <FadeUp delay={0.3}>
            <div
              className="mt-12 bg-[#FAFAFA] p-6 md:p-8 rounded-2xl border border-[#E5E5E5]/60"
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3 className="text-lg font-bold text-[#0F2B57] mb-4">
                App Details
              </h3>
              <Accordion type="multiple">
                <AccordionItem value="app-platforms">
                  <AccordionTrigger>Supported Platforms</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-4">
                      <li>iOS 14+ (iPhone 8 and later)</li>
                      <li>Android 10+ (most devices from 2019 onward)</li>
                      <li>
                        Optimized for older adult users &mdash; large touch
                        targets, high contrast text, simplified navigation
                      </li>
                      <li>
                        Accessibility features: VoiceOver / TalkBack compatible,
                        Dynamic Type support
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="app-clinical">
                  <AccordionTrigger>Clinical Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-4">
                      <li>
                        Study Mode for clinical trial enrollment &mdash; scan
                        study ID to auto-configure
                      </li>
                      <li>
                        ESmCapture ecological momentary assessments (EMA)
                        &mdash; customizable questionnaires triggered by time or
                        dose events
                      </li>
                      <li>
                        Symptom tracking with structured data capture
                      </li>
                      <li>
                        Medication-specific education materials loaded per
                        regimen
                      </li>
                      <li>
                        Personal adherence dashboard visible to patients &mdash;
                        autonomy-oriented design
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="app-notifications">
                  <AccordionTrigger>
                    Smart Notification System
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-4">
                      <li>
                        Context-aware &mdash; only sends alerts when a dose is
                        genuinely missed
                      </li>
                      <li>
                        Configurable escalation: push notification &rarr; SMS
                        &rarr; caregiver alert
                      </li>
                      <li>
                        No alert fatigue &mdash; proven to maintain engagement
                        beyond 90 days
                      </li>
                      <li>
                        Quiet hours respect patient sleep schedules
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ═══ iRxControl Center ═══ */}
      <section id="dashboard" className="py-24 bg-[#FAFAFA] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
                Provider Dashboard
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                iRxControl Center
              </h2>
              <p className="text-xl text-[#404040] leading-relaxed">
                You can&rsquo;t manage what you can&rsquo;t see. The iRxControl
                Center shows every dose&nbsp;&mdash; taken or
                missed&nbsp;&mdash; across your entire patient population, in
                real time.
              </p>
            </div>
          </FadeUp>

          {/* Dashboard features as BentoGrid */}
          <div className="mt-14">
            <BentoGrid
              items={[
                {
                  icon: Monitor,
                  title: "Deploy Regimens Remotely",
                  description:
                    "Set up and modify dosing schedules without patient visits or physical repackaging. Update regimens from your desk.",
                  span: "large",
                  color: "#0F2B57",
                },
                {
                  icon: Activity,
                  title: "Real-Time Adherence Data",
                  description:
                    "Summary views and individual medication adherence for every patient. No waiting for clinic visits.",
                  stat: "Live",
                  color: "#1E56A0",
                },
                {
                  icon: Eye,
                  title: "Calendar View",
                  description:
                    "Spot patterns of missed doses by day and time. Intervene proactively, not reactively.",
                },
                {
                  icon: Bell,
                  title: "Missed-Dose Alerts",
                  description:
                    "Your team gets notified the moment a patient misses a dose. Act before problems escalate.",
                  color: "#1E56A0",
                },
                {
                  icon: Users,
                  title: "Role-Based Access",
                  description:
                    "Assign team roles. Researchers, clinicians, and coordinators each see what they need.",
                  color: "#0F2B57",
                },
              ]}
            />
          </div>

          <FadeUp delay={0.2}>
            <p
              className="mt-12 text-[#0F2B57] font-semibold text-center text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Intervene early. Not after the ER visit.
            </p>
          </FadeUp>

          {/* Dashboard Specs */}
          <FadeUp delay={0.3}>
            <div
              className="mt-12 bg-white p-6 md:p-8 rounded-2xl border border-[#E5E5E5]/60"
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3 className="text-lg font-bold text-[#0F2B57] mb-4">
                Dashboard Capabilities
              </h3>
              <Accordion type="multiple">
                <AccordionItem value="dash-views">
                  <AccordionTrigger>
                    Data Views &amp; Analytics
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-4">
                      <li>
                        Population-level adherence summary &mdash; filterable by
                        cohort, medication, time period
                      </li>
                      <li>
                        Individual patient drill-down with calendar heatmap
                        (doses taken/missed by day and time)
                      </li>
                      <li>
                        Trend analysis &mdash; spot declining adherence patterns
                        before they become crises
                      </li>
                      <li>
                        Exportable reports for regulatory submissions and
                        clinical documentation
                      </li>
                      <li>
                        Real-time dashboards update within seconds of dose
                        events
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="dash-alerts">
                  <AccordionTrigger>
                    Alerts &amp; Interventions
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-4">
                      <li>
                        Configurable missed-dose alerts sent to assigned care
                        team members
                      </li>
                      <li>
                        Escalation rules: missed dose &rarr; team notification
                        &rarr; caregiver contact
                      </li>
                      <li>
                        Intervention logging &mdash; document outreach attempts
                        and outcomes
                      </li>
                      <li>
                        Priority queue &mdash; patients most at risk surfaced
                        first
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="dash-admin">
                  <AccordionTrigger>
                    Administration &amp; Security
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 list-disc pl-4">
                      <li>
                        Role-based access control (RBAC) &mdash; researcher,
                        clinician, coordinator, admin
                      </li>
                      <li>
                        Remote regimen deployment and modification &mdash; no
                        patient visit required
                      </li>
                      <li>Audit trail for all configuration changes</li>
                      <li>
                        Multi-site support for health system deployments
                      </li>
                      <li>SSO integration (SAML 2.0 / OAuth 2.0)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ═══ Hardware + Software Data Flow ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
                Connected Ecosystem
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0F2B57] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Hardware Meets Software
              </h2>
              <p className="text-lg text-[#404040] mt-4 max-w-2xl mx-auto">
                Data flows seamlessly from the physical device through the
                patient app to the provider dashboard — encrypted end-to-end.
              </p>
            </div>
          </FadeUp>

          {/* Data flow visualization */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <FadeUp delay={0.1}>
              <div
                className="text-center p-8 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5]/60"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0F2B57]/10 flex items-center justify-center mx-auto mb-5">
                  <Radio className="w-8 h-8 text-[#0F2B57]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#0F2B57] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  iLidRx Pod
                </h3>
                <p className="text-sm text-[#737373]">
                  IoT device records every dose event with precision timestamps
                </p>
              </div>
            </FadeUp>

            {/* Connecting arrows */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col items-center gap-6 py-4">
                <div className="flex items-center gap-3 w-full">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#0F2B57]/30 to-[#1E56A0]/30" />
                  <div className="w-10 h-10 rounded-full bg-[#1E56A0]/10 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-[#1E56A0]" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#1E56A0]/30 to-[#0F2B57]/30" />
                </div>
                <div
                  className="text-center p-6 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5]/60 w-full"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1E56A0]/10 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-7 h-7 text-[#1E56A0]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#0F2B57] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    iRxCapture App
                  </h3>
                  <p className="text-sm text-[#737373]">
                    Patient interface with smart alerts and education
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#1E56A0]/30 to-[#0F2B57]/30" />
                  <div className="w-10 h-10 rounded-full bg-[#1E56A0]/10 flex items-center justify-center">
                    <Server className="w-5 h-5 text-[#1E56A0]" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#0F2B57]/30 to-[#1E56A0]/30" />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div
                className="text-center p-8 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5]/60"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0F2B57]/10 flex items-center justify-center mx-auto mb-5">
                  <Monitor className="w-8 h-8 text-[#0F2B57]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#0F2B57] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  iRxControl Center
                </h3>
                <p className="text-sm text-[#737373]">
                  Provider dashboard with real-time population monitoring
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex justify-center">
            <FloatingBadgeGroup
              badges={[
                { icon: Lock, text: "End-to-End Encrypted" },
                { icon: Shield, text: "HIPAA Compliant" },
                { icon: CheckCircle2, text: "SOC 2 Type II" },
              ]}
            />
          </div>
        </div>
      </section>


      {/* ═══ EHR Integration ═══ */}
      <section id="integration" className="py-24 bg-[#FAFAFA] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
                Integration
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Works with Your EHR
              </h2>
              <p className="text-xl text-[#404040] leading-relaxed">
                Medication orders flow from the EHR. Adherence data flows back.
                No manual data entry. No workflow disruption.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div
                className="bg-white p-8 rounded-2xl border border-[#E5E5E5]/60 h-full"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  className="font-bold text-[#0F2B57] text-lg mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Integration
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Server,
                      title: "HL7 FHIR Compatible",
                      desc: "Industry-standard data exchange for maximum interoperability.",
                    },
                    {
                      icon: ArrowRight,
                      title: "Bi-Directional Data Flow",
                      desc: "Orders in. Adherence data out. Automated.",
                    },
                    {
                      icon: Zap,
                      title: "Zero Manual Entry",
                      desc: "Automated workflows eliminate duplicate data entry for your staff.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Epic, Cerner, Allscripts Ready",
                      desc: "Pre-built connectors for major EHR platforms.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1E56A0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-[#1E56A0]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0F2B57] text-sm">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#737373]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div
                className="bg-white p-8 rounded-2xl border border-[#E5E5E5]/60 h-full"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  className="font-bold text-[#0F2B57] text-lg mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Security &amp; Compliance
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Shield,
                      title: "HIPAA Compliant",
                      desc: "Full compliance with healthcare data privacy regulations.",
                    },
                    {
                      icon: Lock,
                      title: "End-to-End Encryption",
                      desc: "All patient data encrypted in transit and at rest.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "SOC 2 Type II Certified",
                      desc: "Third-party audited security controls.",
                    },
                    {
                      icon: Shield,
                      title: "FDA Class II Clearance Pathway",
                      desc: "Led by Dr. Fred Ma, MD PhD\u2009\u2014\u20091,200+ clinical trials and 200+ drugs/devices through FDA clearance.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0F2B57]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-[#0F2B57]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0F2B57] text-sm">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#737373]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Implementation Timeline — using TimelineTrack horizontal */}
          <div className="mt-16">
            <FadeUp>
              <h3
                className="font-bold text-[#0F2B57] text-xl mb-8 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Implementation Timeline
              </h3>
            </FadeUp>
            <TimelineTrack
              orientation="horizontal"
              items={[
                {
                  label: "Week 1–2",
                  title: "Technical Planning",
                  description:
                    "EHR mapping, data model alignment, and integration architecture.",
                  icon: FileText,
                  color: "#0F2B57",
                },
                {
                  label: "Week 3–4",
                  title: "Development",
                  description:
                    "Build connectors and run sandbox testing with your EHR environment.",
                  icon: Settings,
                  color: "#1E56A0",
                },
                {
                  label: "Week 5–6",
                  title: "UAT",
                  description:
                    "User acceptance testing with your clinical and IT teams.",
                  icon: Users,
                  color: "#0F2B57",
                },
                {
                  label: "Week 7",
                  title: "Go Live",
                  description:
                    "Production launch with monitoring and dedicated support.",
                  icon: Zap,
                  color: "#1E56A0",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ═══ Integration Compatibility Logos ═══ */}
      <section className="py-16 bg-white border-t border-[#E5E5E5]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#737373] mb-10">
              Compatible With Leading EHR Systems
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {["Epic", "Cerner", "Allscripts", "Meditech"].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center p-6 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5]/60 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                >
                  <span className="text-lg font-bold text-[#737373]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ Platform Comparison — iRx vs Traditional ═══ */}
      <section className="py-24 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Why iRxReminder
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F2B57] text-center mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How It Compares
            </h2>
            <p className="text-lg text-[#404040] text-center mb-14 max-w-3xl mx-auto leading-relaxed">
              Every alternative allows overdose or relies on patient self-reporting. iRxReminder is the only platform with controlled single-dose dispensing, pharmacy-filled pods, and real-time care team connectivity.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-sm font-semibold text-[#737373] uppercase tracking-wider pb-4 pr-4 w-[180px]">
                      Capability
                    </th>
                    <th className="text-center text-sm font-bold text-white uppercase tracking-wider pb-4 px-3 bg-[#1E56A0] rounded-t-xl w-[110px]">
                      iRxReminder
                    </th>
                    <th className="text-center text-sm font-semibold text-[#737373] uppercase tracking-wider pb-4 px-3 w-[100px]">
                      Pill Organizers
                    </th>
                    <th className="text-center text-sm font-semibold text-[#737373] uppercase tracking-wider pb-4 px-3 w-[100px]">
                      Smart Caps
                    </th>
                    <th className="text-center text-sm font-semibold text-[#737373] uppercase tracking-wider pb-4 px-3 w-[100px]">
                      Text Reminders
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Controlled Dispensing", irx: true, organizers: false, caps: false, text: false },
                    { feature: "Prevents Double-Dosing", irx: true, organizers: false, caps: false, text: false },
                    { feature: "Real-Time Monitoring", irx: true, organizers: false, caps: "partial", text: false },
                    { feature: "Dose Verification", irx: true, organizers: false, caps: false, text: false },
                    { feature: "No Patient Sorting", irx: true, organizers: false, caps: true, text: true },
                    { feature: "Provider Dashboard", irx: true, organizers: false, caps: "partial", text: false },
                    { feature: "RPM/RTM Billable", irx: true, organizers: false, caps: "partial", text: false },
                    { feature: "AI Clinical Intelligence", irx: true, organizers: false, caps: false, text: false },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                      <td className="text-sm font-medium text-[#404040] py-3.5 pr-4 pl-3 rounded-l-lg">{row.feature}</td>
                      {[row.irx, row.organizers, row.caps, row.text].map((val, j) => (
                        <td key={j} className={`text-center py-3.5 px-3 ${j === 0 ? "bg-[#1E56A0]/5" : ""} ${j === 3 ? "rounded-r-lg" : ""}`}>
                          {val === true ? (
                            <CheckCircle2 className={`w-5 h-5 mx-auto ${j === 0 ? "text-[#1E56A0]" : "text-green-500"}`} />
                          ) : val === "partial" ? (
                            <Minus className="w-5 h-5 mx-auto text-yellow-500" />
                          ) : (
                            <XCircle className="w-5 h-5 mx-auto text-gray-300" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-center text-[#737373] mt-10 text-sm">
              iRxReminder is the only platform that{" "}
              <strong className="text-[#0F2B57]">prevents</strong> overdose — not just tracks it.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══ Platform Stats Band ═══ */}
      <section className="py-20 bg-[#EEF4FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#1E56A0] mb-4">
              Platform Impact
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F2B57] text-center mb-14 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Numbers Speak for Themselves
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              end={83}
              suffix="%"
              label="Medication Adherence"
              description="Verified by real-time dose data"
              variant="glass"
            />
            <StatCard
              end={40}
              suffix="%"
              label="Fewer Hospitalizations"
              description="Reduced acute care events"
              variant="glass"
              color="#3B7DD8"
            />
            <StatCard
              end={7}
              label="Week EHR Integration"
              description="From kickoff to production"
              variant="glass"
              color="#1E56A0"
            />
            <StatCard
              end={500}
              suffix="K+"
              label="Doses Monitored"
              description="Across health system deployments"
              variant="glass"
              color="#3B7DD8"
            />
          </div>
        </div>
      </section>

      {/* ═══ AI Clinical Intelligence — Tabbed Modules ═══ */}
      <section id="ai" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Clinical Intelligence
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0F2B57] text-center mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not a Commodity Dispenser.
            </h2>
            <p
              className="text-2xl md:text-3xl font-bold text-[#1E56A0] text-center mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Clinical Intelligence Platform.
            </p>
            <p className="text-xl text-[#404040] text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              iRxReminder goes beyond dispensing and monitoring. Five AI modules transform raw medication data into clinical insights that drive better outcomes.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Tabs defaultValue="overview" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="flex-wrap gap-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="predictive">Predictive Risk</TabsTrigger>
                  <TabsTrigger value="intervention">Intervention Pathways</TabsTrigger>
                  <TabsTrigger value="withdrawal">Withdrawal Detection</TabsTrigger>
                  <TabsTrigger value="engagement">Patient Engagement</TabsTrigger>
                  <TabsTrigger value="analytics">Data Analysis</TabsTrigger>
                </TabsList>
              </div>

              {/* ── Overview Tab ── */}
              <TabsContent value="overview">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Brain,
                      title: "Predictive Non-Adherence Risk",
                      description: "Forecast dropout and non-adherence risk over the next 72 hours. Prioritize outreach to highest-risk patients.",
                      color: "#1E56A0",
                      tab: "predictive",
                    },
                    {
                      icon: GitBranch,
                      title: "Intervention Pathways",
                      description: "Automated escalation from patient reminder to caregiver alert to clinician outreach to crisis protocol.",
                      color: "#0F2B57",
                      tab: "intervention",
                    },
                    {
                      icon: AlertTriangle,
                      title: "Withdrawal Detection",
                      description: "Early withdrawal risk detection to improve OUD induction safety. Key differentiator in the fentanyl era.",
                      color: "#1E56A0",
                      tab: "withdrawal",
                    },
                    {
                      icon: MessageCircle,
                      title: "Patient Engagement",
                      description: "HIPAA-safe coaching and adherence reinforcement. 24/7 support that reduces staff workload.",
                      color: "#0F2B57",
                      tab: "engagement",
                    },
                    {
                      icon: BarChart3,
                      title: "Data Analysis",
                      description: "Quantify outcomes: retention, ER visits, relapse markers. ROI dashboards for payers and providers.",
                      color: "#1E56A0",
                      tab: "analytics",
                    },
                    {
                      icon: HeartPulse,
                      title: "TDtect\u2122 Diagnostic AI",
                      description: "NIMH-funded AI system for remote detection and monitoring of Tardive Dyskinesia in behavioral health populations.",
                      color: "#0F2B57",
                      tab: null,
                    },
                  ].map((feature, i) => (
                    <FadeUp key={feature.title} delay={0.05 + i * 0.04}>
                      <div
                        className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60 h-full hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
                        style={{
                          boxShadow:
                            "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                        }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                          style={{ backgroundColor: `${feature.color}10` }}
                        >
                          <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2B57] mb-3">{feature.title}</h3>
                        <p className="text-[#404040] text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </TabsContent>

              {/* ── Module 1: Predictive Non-Adherence Risk ── */}
              <TabsContent value="predictive">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1E56A0]/10">
                      <Brain className="w-7 h-7 text-[#1E56A0]" />
                    </div>
                    <h3
                      className="text-3xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      AI Module 1: Predictive Non-Adherence Risk
                    </h3>
                    <p className="text-xl text-[#404040] leading-relaxed mb-6">
                      Forecast dropout and non-adherence risk over the next 72 hours. Don&rsquo;t wait for a patient to disappear&nbsp;&mdash; intervene while you can still make a difference.
                    </p>
                    <div
                      className="text-5xl font-extrabold text-[#1E56A0] tracking-tight mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      72hr
                    </div>
                    <p className="text-[#737373] font-medium">predictive window for risk forecasting</p>
                  </div>
                  <div className="space-y-5">
                    <div
                      className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)" }}
                    >
                      <h4 className="font-bold text-[#0F2B57] mb-4">Key Capabilities</h4>
                      <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                        {[
                          "AI models analyze dosing patterns to predict which patients are at risk of dropping off",
                          "Prioritize outreach to the highest-risk patients first",
                          "Improve retention and reduce adverse events before they happen",
                          "Effective data input component for continuous self-improvement",
                        ].map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAFAFA] to-[#eef5ff] p-6 rounded-2xl border border-[#0F2B57]/10">
                      <p className="text-sm text-[#404040] leading-relaxed">
                        <strong className="text-[#0F2B57]">Why it matters:</strong> Traditional systems only tell you a patient missed a dose <em>after</em> it happened. Predictive risk scoring lets you act <em>before</em> the pattern becomes a crisis.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* ── Module 2: Intervention Pathways ── */}
              <TabsContent value="intervention">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0F2B57]/10">
                      <GitBranch className="w-7 h-7 text-[#0F2B57]" />
                    </div>
                    <h3
                      className="text-3xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      AI Module 2: Intervention Pathways
                    </h3>
                    <p className="text-xl text-[#404040] leading-relaxed mb-6">
                      Automated escalation workflows that standardize care and reduce staff burden. Individualized actions and decisions, not broad categories.
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div
                      className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)" }}
                    >
                      <h4 className="font-bold text-[#0F2B57] mb-4">Escalation Workflow</h4>
                      <div className="space-y-4">
                        {[
                          { step: "1", label: "Patient Reminder", desc: "Context-aware nudge only when a dose is genuinely at risk of being missed" },
                          { step: "2", label: "Caregiver Alert", desc: "Family member or assigned caregiver is notified if the patient doesn\u2019t respond" },
                          { step: "3", label: "Clinician Outreach", desc: "Care team member receives prioritized alert with patient history context" },
                          { step: "4", label: "Crisis Protocol", desc: "Automated escalation to emergency contacts and clinical intervention team" },
                        ].map((item) => (
                          <div key={item.step} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#1E56A0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-bold text-[#1E56A0]">{item.step}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-[#0F2B57] text-sm">{item.label}</div>
                              <p className="text-sm text-[#737373]">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAFAFA] to-[#eef5ff] p-6 rounded-2xl border border-[#0F2B57]/10">
                      <p className="text-sm text-[#404040] leading-relaxed">
                        <strong className="text-[#0F2B57]">Collaboration-driven:</strong> Every interaction feeds back into the system, creating an effective data input component for continuous self-improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* ── Module 3: Withdrawal Detection ── */}
              <TabsContent value="withdrawal">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1E56A0]/10">
                      <AlertTriangle className="w-7 h-7 text-[#1E56A0]" />
                    </div>
                    <h3
                      className="text-3xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      AI Module 3: Withdrawal Detection
                    </h3>
                    <p className="text-xl text-[#404040] leading-relaxed mb-6">
                      Early withdrawal risk detection to improve OUD induction safety. A key differentiator in the fentanyl era.
                    </p>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border border-red-100">
                      <p className="text-sm text-[#404040] leading-relaxed">
                        <strong className="text-red-700">Critical for behavioral health:</strong> Supports micro-dosing and retention protocols where early withdrawal detection can prevent relapse and save lives.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div
                      className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)" }}
                    >
                      <h4 className="font-bold text-[#0F2B57] mb-4">Key Capabilities</h4>
                      <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                        {[
                          "AI-enabled behavioral analysis detects early signs of medication withdrawal",
                          "Substance use relapse pattern recognition from dosing behavior",
                          "Supports micro-dosing protocols for OUD induction safety",
                          "Enables proactive clinical intervention before crisis escalation",
                          "Integrated with TDtect\u2122 for comprehensive behavioral health monitoring",
                        ].map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* ── Module 4: Patient Engagement ── */}
              <TabsContent value="engagement">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0F2B57]/10">
                      <MessageCircle className="w-7 h-7 text-[#0F2B57]" />
                    </div>
                    <h3
                      className="text-3xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      AI Module 4: Patient Engagement
                    </h3>
                    <p className="text-xl text-[#404040] leading-relaxed mb-6">
                      HIPAA-safe coaching and adherence reinforcement that provides 24/7 support&nbsp;&mdash; without adding to staff workload.
                    </p>
                    <div
                      className="text-5xl font-extrabold text-[#1E56A0] tracking-tight mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      24/7
                    </div>
                    <p className="text-[#737373] font-medium">always-on patient support</p>
                  </div>
                  <div className="space-y-5">
                    <div
                      className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)" }}
                    >
                      <h4 className="font-bold text-[#0F2B57] mb-4">Key Capabilities</h4>
                      <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                        {[
                          "HIPAA-safe coaching that reinforces adherence behavior",
                          "Context-aware messaging \u2014 only activates when a patient genuinely needs support",
                          "24/7 automated support reduces staff workload for agencies",
                          "No alert fatigue \u2014 proven to maintain engagement beyond 90 days",
                        ].map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAFAFA] to-[#eef5ff] p-6 rounded-2xl border border-[#0F2B57]/10">
                      <p className="text-sm text-[#404040] leading-relaxed">
                        <strong className="text-[#0F2B57]">Staff impact:</strong> Agencies spend significant staff time on manual follow-up calls and medication check-ins. AI engagement automates the routine interactions so your team can focus on patients who need human attention.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* ── Module 5: Data Analysis ── */}
              <TabsContent value="analytics">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1E56A0]/10">
                      <BarChart3 className="w-7 h-7 text-[#1E56A0]" />
                    </div>
                    <h3
                      className="text-3xl font-bold text-[#0F2B57] mb-4 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      AI Module 5: Data Analysis
                    </h3>
                    <p className="text-xl text-[#404040] leading-relaxed mb-6">
                      Quantify outcomes across retention, ER visits, and relapse markers. Generate evidence packages for payers, providers, and pharma sponsors.
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div
                      className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)" }}
                    >
                      <h4 className="font-bold text-[#0F2B57] mb-4">Output Capabilities</h4>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {[
                          { icon: TrendingUp, label: "Retention Analytics", desc: "Track patient retention and adherence trends across cohorts" },
                          { icon: BarChart3, label: "ROI Dashboards", desc: "Real-time dashboards for payers and providers showing financial impact" },
                          { icon: FileText, label: "Evidence Packages", desc: "Publication-ready data for pharma sponsors and trial reporting" },
                        ].map((item, i) => (
                          <div key={i} className="bg-[#FAFAFA] p-5 rounded-xl border border-[#E5E5E5]/60 text-center">
                            <div className="w-10 h-10 rounded-lg bg-[#1E56A0]/10 flex items-center justify-center mx-auto mb-3">
                              <item.icon className="w-5 h-5 text-[#1E56A0]" />
                            </div>
                            <div className="font-semibold text-[#0F2B57] text-sm mb-1">{item.label}</div>
                            <p className="text-xs text-[#737373]">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="bg-white p-7 rounded-2xl border border-[#E5E5E5]/60"
                      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)" }}
                    >
                      <h4 className="font-bold text-[#0F2B57] mb-4">Key Metrics Tracked</h4>
                      <ul className="text-[#404040] space-y-2.5 leading-relaxed">
                        {[
                          "Medication adherence rates by patient, cohort, and facility",
                          "ER visit reduction and hospitalization avoidance metrics",
                          "Relapse markers and early warning indicators",
                          "Cost savings and reimbursement revenue per patient",
                          "Population-level trend analysis for strategic planning",
                        ].map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#1E56A0] flex-shrink-0 mt-1" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-center text-sm text-[#737373] mt-12">
              Protected by 12 US patents covering dispensing, monitoring, and clinical intelligence technologies.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 bg-[#EEF4FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See What Real-Time Monitoring Looks Like
            </h2>
            <p className="text-xl text-[#404040] mb-8">
              Calculate your potential ROI or schedule a personalized pilot
            </p>
            <FloatingBadgeGroup
              className="justify-center mb-10"
              badges={[
                // TODO: Update to "FDA 510(k) Cleared" once clearance is granted
                { icon: Shield, text: "FDA 510(k) Pathway" },
                { icon: Lock, text: "HIPAA Compliant" },
                { icon: CheckCircle2, text: "SOC 2 Type II" },
              ]}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#1E56A0] hover:bg-[#163D7A] text-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.15),0_8px_28px_rgba(0,0,0,0.12)] transition-[background-color,box-shadow]"
              >
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0F2B57]/20 bg-white hover:border-[#0F2B57]/40 hover:bg-[#FAFAFA] text-[#0F2B57] transition-colors"
              >
                <Link to="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
