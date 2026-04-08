import { Link } from "react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  FileText,
  GraduationCap,
  Quote,
  ShieldCheck,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { FadeUp, CountUp } from "@/app/components/animations";
import { StatCard } from "@/app/components/StatCard";
import { ComparisonChart } from "@/app/components/ComparisonChart";
import { TimelineTrack } from "@/app/components/TimelineTrack";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";

const evidenceSections = ["problem", "trials", "comparison", "timeline", "grants", "partners", "publications", "awards"];

export function Evidence() {
  const prefersReducedMotion = useReducedMotion();
  const activeSection = useSectionObserver(evidenceSections);
  const heroAnimation = prefersReducedMotion ? {} : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, type: "spring", stiffness: 200, damping: 25 } };
  const heroSubAnim = prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.4 } };

  return (
    <div className="bg-white">
      {/* ======= HERO — Animated massive stat ======= */}
      <section className="relative overflow-hidden bg-[#EEF4FF]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          <motion.div {...heroAnimation}>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-8">
              Clinical Evidence
            </p>
            {/* Massive animated number */}
            <div className="mb-6">
              <CountUp
                end={83}
                suffix="%"
                className="text-8xl md:text-[10rem] font-extrabold tracking-tighter leading-none"
                style={{ color: "#1E56A0", fontFamily: "var(--font-display)" }}
              />
            </div>
          </motion.div>
          <motion.div {...heroSubAnim}>
            <p className="text-2xl md:text-3xl text-[#0F2B57] font-bold mb-4 tracking-tight">
              Medication Adherence Rate
            </p>
            <p className="text-lg text-[#404040] max-w-xl mx-auto leading-relaxed">
              Validated across 350+ participants in NIH-funded clinical trials.
              Peer-reviewed. Patent-protected. FDA clearance pathway underway.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======= STICKY SUB-NAVIGATION ======= */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,58,138,0.04)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-6 text-sm font-medium scrollbar-hide">
            {[
              { href: "#problem", id: "problem", label: "The Crisis" },
              { href: "#trials", id: "trials", label: "Clinical Trials" },
              { href: "#comparison", id: "comparison", label: "Comparison" },
              { href: "#timeline", id: "timeline", label: "Timeline" },
              { href: "#grants", id: "grants", label: "NIH Grants" },
              { href: "#partners", id: "partners", label: "Partners" },
              { href: "#publications", id: "publications", label: "Publications" },
              { href: "#awards", id: "awards", label: "Awards" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap transition-colors pb-2 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm ${
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

      {/* ======= LEAD STAT — NIH Funding ======= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <CountUp
                end={2.8}
                prefix="$"
                suffix="M"
                className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none"
                style={{ color: "#1E56A0", fontFamily: "var(--font-display)" }}
              />
              <p className="text-xl md:text-2xl text-[#0F2B57] font-bold mt-4 mb-2">
                Total NIH Phase I &amp; II Grant Awards
              </p>
              <p className="text-[#737373]">Phase IIB pending</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ======= TRACTION METRICS STRIP ======= */}
      <section className="py-10 bg-[#FAFAFA] border-y border-[#E5E5E5]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { end: 20, label: "Projects" },
              { end: 350, suffix: "+", label: "Clinical Subjects" },
              { end: 200, suffix: "+", label: "AI-Enabled Evaluations" },
              { end: 16, label: "Letters of Intent" },
              { end: 5, label: "Communities Awaiting Delivery" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.06}>
                <div>
                  <CountUp
                    end={item.end}
                    suffix={item.suffix}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight"
                    style={{ color: "#0F2B57", fontFamily: "var(--font-display)" }}
                  />
                  <p className="text-sm text-[#737373] mt-1">{item.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CENTRAL STAT BAND ======= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { end: 700, suffix: "K", label: "ER Visits/Year", color: "#0F2B57" },
                { end: 341, suffix: "K", label: "Hospitalizations", color: "#1E56A0" },
                { end: 125, suffix: "K", label: "Deaths/Year", color: "#0F2B57" },
                { end: 300, prefix: "$", suffix: "B+", label: "Avoidable Costs", color: "#1E56A0" },
              ].map((item, i) => (
                <FadeUp key={item.label} delay={i * 0.08}>
                  <StatCard {...item} variant="elevated" />
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ======= THE NON-ADHERENCE CRISIS ======= */}
      <section id="problem" className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              The Crisis
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              The Numbers Don&rsquo;t Lie
            </h2>
            <p className="text-xl text-[#404040] mb-16 max-w-3xl">
              Medication non-adherence is one of healthcare&rsquo;s most
              expensive unsolved problems.
            </p>
          </FadeUp>

          {/* AMA Blockquote */}
          <FadeUp delay={0.1}>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)] mb-16">
              <Quote className="w-10 h-10 text-[#1E56A0]/20 absolute top-6 left-6" />
              <div className="pl-8 md:pl-12">
                <blockquote className="text-xl md:text-2xl text-[#0F2B57] italic leading-relaxed mb-4">
                  &ldquo;Poor medication adherence takes the lives of 125,000
                  Americans annually, and costs the healthcare system as much
                  as $300 billion a year.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#1E56A0]" />
                  <span className="text-[#0F2B57] font-semibold">American Medical Association</span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Clinical research banner */}
          <FadeUp delay={0.12}>
            <div className="mb-16 rounded-2xl overflow-hidden border border-[#E5E5E5]/60 shadow-sm shadow-[#1E56A0]/5">
              <img
                src="/images/banners/irx_banner_research.jpg"
                alt="Two clinicians in scrubs examining the iLidRx pod in a hospital hallway — clinical research setting"
                className="w-full object-cover max-h-[320px]"
                loading="lazy"
              />
            </div>
          </FadeUp>

          {/* Why Existing Solutions Fail */}
          <FadeUp delay={0.15}>
            <h3 className="text-3xl font-bold text-[#0F2B57] mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Why Current Tools Fail
            </h3>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pill Packing",
                subtitle: "PillPak, ExactCare",
                problem: "Skip a day, take a double dose. Regimen changes require complete repackaging.",
                solution: "Flexible dosing windows. Real-time regimen adjustments. No repackaging.",
              },
              {
                title: "Wireless Pill Bottles",
                subtitle: "MEMSCaps, GlowCaps, AdhereTech",
                problem: "Count openings, not doses. Patients can take any amount. Passive alerts get ignored.",
                solution: "Controlled dispensing. Gesture activation. Can\u2019t overdose or game data.",
              },
              {
                title: "Smart Organizers",
                subtitle: "Consumer devices",
                problem: "Patient sorts pills (error-prone). No real-time data. Easy to game.",
                solution: "Pharmacist-filled. Automatic dose recording. Tamper-proof data.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={0.15 + i * 0.08}>
                <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full flex flex-col hover:shadow-[0_1px_3px_rgba(30,86,160,0.06),0_8px_20px_rgba(30,86,160,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                  <h4 className="text-xl font-bold text-[#0F2B57] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#737373] mb-5">{item.subtitle}</p>
                  <div className="flex items-start gap-2.5 mb-4">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Problem</span>
                      <p className="text-sm text-[#404040] mt-1">{item.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 mt-auto pt-4 border-t border-gray-50">
                    <CheckCircle2 className="w-5 h-5 text-[#1E56A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1E56A0]">iRxReminder</span>
                      <p className="text-sm text-[#404040] mt-1">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>


      {/* ======= CLINICAL TRIALS ======= */}
      <section id="trials" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Clinical Trials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Rigorous Studies. Real-World Results.
            </h2>
            <p className="text-xl text-[#404040] mb-16 max-w-2xl">
              Multi-site studies validating adherence outcomes in diverse patient populations
            </p>
          </FadeUp>

          <div className="space-y-6">
            {/* TDtect Study */}
            <FadeUp>
              <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-[#1E56A0]/30 shadow-[0_1px_3px_rgba(30,86,160,0.06),0_8px_20px_rgba(30,86,160,0.1),0_24px_48px_rgba(30,58,138,0.1)]">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Active
                  </span>
                  <span className="text-xs text-[#737373] font-medium">NIMH-Funded</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2B57] mb-3">TDtect&trade; Diagnostic Study</h3>
                <p className="text-[#404040] mb-6 max-w-3xl">
                  NIMH-funded study for Tardive Dyskinesia detection and remote
                  monitoring in behavioral health populations. First patients
                  enrolled August 2023.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Funding", value: "NIMH (March 2023)" },
                    { label: "Focus", value: "Behavioral Health" },
                    { label: "Grant Amount", value: "$871,153" },
                  ].map((detail) => (
                    <div key={detail.label} className="bg-[#FAFAFA] px-5 py-4 rounded-xl">
                      <div className="text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1">{detail.label}</div>
                      <div className="text-sm font-bold text-[#0F2B57]">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* NIH Adherence Study */}
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0F2B57] px-3 py-1 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                  <span className="text-xs text-[#737373] font-medium">350+ Participants</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2B57] mb-3">NIH Adherence Improvement Study</h3>
                <p className="text-[#404040] mb-6 max-w-3xl">
                  Multi-site study across behavioral health networks.
                  Result: <strong className="text-[#0F2B57]">48% to 80%+ medication adherence improvement</strong>.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Participants", value: "350+" },
                    { label: "Outcome", value: "48% \u2192 80%+ adherence" },
                    { label: "Networks", value: "Behavioral health" },
                  ].map((detail) => (
                    <div key={detail.label} className="bg-[#FAFAFA] px-5 py-4 rounded-xl">
                      <div className="text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1">{detail.label}</div>
                      <div className="text-sm font-bold text-[#0F2B57]">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* UMich Cancer Center */}
            <FadeUp delay={0.15}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0F2B57] px-3 py-1 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                  <span className="text-xs text-[#737373] font-medium">HOPA-Funded</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2B57] mb-3">University of Michigan Cancer Center</h3>
                <p className="text-[#404040] mb-6 max-w-3xl">
                  Oncology adherence study.
                  Result: <strong className="text-[#0F2B57]">25% reduction in clinical trial dropouts</strong>.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Funding", value: "HOPA" },
                    { label: "Outcome", value: "25% fewer dropouts" },
                    { label: "Focus", value: "Oncology adherence" },
                  ].map((detail) => (
                    <div key={detail.label} className="bg-[#FAFAFA] px-5 py-4 rounded-xl">
                      <div className="text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1">{detail.label}</div>
                      <div className="text-sm font-bold text-[#0F2B57]">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* 83% Callout */}
            <FadeUp delay={0.2}>
              <div className="relative bg-gradient-to-br from-[#071A38] via-[#0A1E3D] to-[#0F2B57] p-8 md:p-10 rounded-2xl overflow-hidden">
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <CountUp end={83} suffix="%" className="text-6xl md:text-7xl font-extrabold text-[#1E56A0] tracking-tight" style={{ fontFamily: "var(--font-display)" }} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Consistent Adherence Rate</h3>
                    <p className="text-[#B0C4DE] max-w-xl">
                      Across multiple studies and diverse populations, iRxReminder
                      consistently achieves 83% medication adherence&nbsp;&mdash;
                      far exceeding industry benchmarks.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ======= COMPARISON VISUALIZATION ======= */}
      <section id="comparison" className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Side-by-Side
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Without vs. With iRxReminder
            </h2>
            <p className="text-xl text-[#404040] mb-16 max-w-2xl">
              See the measurable difference across key clinical outcomes
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
              <ComparisonChart
                metrics={[
                  { label: "Medication Adherence", without: 48, withIrx: 83, format: "percentage" },
                  { label: "Clinical Trial Retention", without: 70, withIrx: 95, format: "percentage" },
                  { label: "Dose Verification Accuracy", without: 35, withIrx: 100, format: "percentage" },
                ]}
              />
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ======= RESEARCH TIMELINE ======= */}
      <section id="timeline" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Research Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              15 Years of Clinical Validation
            </h2>
            <p className="text-xl text-[#404040] mb-16 max-w-2xl">
              From NIH pilot grants to multi-site clinical trials
            </p>
          </FadeUp>

          <TimelineTrack
            orientation="vertical"
            items={[
              { label: "2010", title: "NIH Pilot Grant Awarded", description: "Grant No. 1R43AG033500 — First federal funding validates iRxReminder concept for stroke recovery and aging populations.", color: "#0F2B57" },
              // TODO: Update to "FDA 510(k) Cleared" once Class II clearance is granted
              { label: "2013", title: "FDA Registration & Class I Listing", description: "iRxReminder achieves FDA registration as a Class I medical device — one of the first IoT medication management systems to reach this regulatory milestone. FDA 510(k) Class II clearance currently in progress.", color: "#1E56A0" },
              { label: "2015–2018", title: "University Research Partnerships", description: "Clinical collaborations established with Harvard, University of Michigan, Kent State, Brown, MetroHealth, and Butler Hospital.", color: "#0F2B57" },
              { label: "2018–2020", title: "Multi-Site Adherence Trials", description: "NIH-funded study across behavioral health networks enrolls 350+ participants. Outcome: adherence improves from 48% to 80%+.", color: "#1E56A0" },
              { label: "2022", title: "Oncology Trial at U of Michigan", description: "HOPA-funded study at the University of Michigan Cancer Center demonstrates 25% reduction in clinical trial dropouts.", color: "#0F2B57" },
              { label: "2023", title: "NIMH AI Telehealth Grant", description: "$871,153 awarded for TDtect\u2122 study — AI-powered Tardive Dyskinesia detection and medication monitoring in behavioral health.", color: "#1E56A0" },
              { label: "Present", title: "TDtect\u2122 Study Enrolling", description: "First patients enrolled. Active NIMH-funded diagnostic study combining AI telehealth with real-time medication monitoring.", color: "#0F2B57" },
            ]}
          />
        </div>
      </section>

      {/* ======= FDA CLEARANCE — Prominent section ======= */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071A38] via-[#0A1E3D] to-[#0F2B57]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-14">
              {/* TODO: Update badges and copy once FDA 510(k) Class II clearance is granted */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                FDA Regulatory Pathway
              </h3>
              <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed">
                iRxReminder is an FDA-registered medical device pursuing 510(k)
                Class II clearance. Led by Dr. Fred Ma, MD PhD&nbsp;&mdash;
                1,200+ clinical trials and 200+ drugs/devices through FDA
                validation. This isn&rsquo;t a wellness app. It&rsquo;s a
                regulated medical platform.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ======= NIH & FEDERAL GRANTS ======= */}
      <section id="grants" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Federal Funding
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              NIH &amp; Federal Grants
            </h2>
            <p className="text-xl text-[#404040] mb-16 max-w-2xl">
              Peer-reviewed federal grants validating scientific merit
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full hover:shadow-[0_1px_3px_rgba(30,86,160,0.06),0_8px_20px_rgba(30,86,160,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#0F2B57]/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-[#0F2B57]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2B57] mb-2">NIMH AI Telehealth Grant</h3>
                <div className="text-3xl font-extrabold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>$871,153</div>
                <p className="text-sm text-[#737373] mb-4">
                  <strong className="text-[#404040]">Awarded:</strong> March 2023
                </p>
                <p className="text-[#404040] text-sm leading-relaxed">
                  Funding for TDtect&trade; study&nbsp;&mdash; AI-powered Tardive
                  Dyskinesia detection and medication monitoring.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full hover:shadow-[0_1px_3px_rgba(30,86,160,0.06),0_8px_20px_rgba(30,86,160,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#1E56A0]/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-[#1E56A0]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2B57] mb-2">NIH Grant No. 1R43AG033500</h3>
                <p className="text-sm text-[#737373] mb-4">
                  <strong className="text-[#404040]">Focus:</strong> Stroke Recovery &amp; Aging
                </p>
                <p className="text-[#404040] text-sm leading-relaxed">
                  Pilot study validating medication adherence technology for
                  stroke recovery patients. Demonstrated platform potential.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="bg-gradient-to-br from-[#FAFAFA] to-[#eef5ff] p-8 rounded-2xl border border-[#0F2B57]/10">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#1E56A0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#0F2B57] mb-3">What NIH Funding Means</h3>
                  <p className="text-[#404040] text-sm leading-relaxed">
                    NIH grants undergo rigorous peer review for scientific merit,
                    innovation, and public health impact. Federal funding validates
                    iRxReminder&rsquo;s clinical approach and research methodology.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ======= UNIVERSITY PARTNERS ======= */}
      <section id="partners" className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Research Network
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              University &amp; Research Partners
            </h2>
            <p className="text-xl text-[#404040] mb-16 max-w-2xl">
              Collaborating with leading institutions
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Harvard University", description: "Gerontechnology research — aging population medication management and cognitive impairment studies.", color: "#0F2B57" },
              { name: "MetroHealth", description: "Cleveland's safety-net health system — real-world deployment in underserved populations.", color: "#1E56A0" },
              { name: "University of Michigan", description: "Cancer Center oncology adherence study — 25% reduction in clinical trial dropouts.", color: "#0F2B57" },
              { name: "Kent State University", description: "College of Nursing research — behavioral health population studies.", color: "#1E56A0" },
              { name: "Brown University", description: "Psychiatry and Human Behavior — behavioral health medication adherence research.", color: "#0F2B57" },
              { name: "Butler Hospital", description: "Brown-affiliated psychiatric hospital — clinical site for adherence trials with 350+ participants.", color: "#1E56A0" },
            ].map((partner, i) => (
              <FadeUp key={partner.name} delay={i * 0.06}>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(30,86,160,0.06),0_8px_20px_rgba(30,86,160,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${partner.color}10` }}>
                    <GraduationCap className="w-6 h-6" style={{ color: partner.color }} />
                  </div>
                  <div className="font-bold text-[#0F2B57] text-center mb-2">{partner.name}</div>
                  <p className="text-xs text-[#737373] text-center leading-relaxed">{partner.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ======= PUBLICATIONS ======= */}
      <section id="publications" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Research
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Publications &amp; Studies
            </h2>
            <p className="text-xl text-[#404040] mb-16 max-w-2xl">
              Peer-reviewed research documenting platform outcomes
            </p>
          </FadeUp>

          {/* TODO: Ask William/Dr. Sterns for the complete list of iRxReminder-specific publications.
              Dr. Sterns has 33 total publications. There may be additional iRxReminder papers
              not found through public search. The HOPA/Michigan study and TDtect study
              may have conference presentations or preprints available.
              Google Scholar profile: https://scholar.google.com/citations?hl=en&user=dkBa8G8AAAAJ */}
          <div className="space-y-5 mb-10">
            {[
              {
                title: "Randomized Controlled Feasibility Trial of Two Telemedicine Medication Reminder Systems for Older Adults with Heart Failure",
                journal: "Journal of Telemedicine and Telecare",
                date: "2014",
                authors: "Goldstein, Gathright, Dolansky, Gunstad, Sterns, Redle, Josephson, Hughes",
                description: "NIH-funded randomized controlled trial (N=60) across Kent State, Case Western Reserve, and Summa Health. Tested iRxReminder smartphone app vs. electronic pillbox for heart failure medication adherence. Demonstrated 78-80% adherence with telemedicine monitoring.",
                color: "#0F2B57",
                url: "https://pubmed.ncbi.nlm.nih.gov/24958355/",
              },
              {
                title: "Adherence to Antidepressant Medications: A Randomized Controlled Trial of Medication Reminding in College Students",
                journal: "Journal of American College Health",
                date: "2015",
                authors: "Hammonds, Rickert, Goldstein, Gathright, Gilmore, Derflinger, Bennett, Sterns, Drew, Hughes",
                description: "RCT (N=57) demonstrating smartphone medication reminder apps show strong trend toward improving antidepressant adherence. Identified health beliefs and professional care type as key adherence factors.",
                color: "#1E56A0",
                url: "https://pubmed.ncbi.nlm.nih.gov/25338175/",
              },
              {
                title: "Smart Home Technologies as Cognitive Prosthetics to Extend Older Adult Independence",
                journal: "Gerontechnology — International Society for Gerontechnology Conference",
                date: "2018",
                authors: "Sterns, Smith, Hughes",
                description: "Presented iRxReminder platform results: 83% medication adherence across clinical participants using IoT dispensing + smartphone app. Demonstrated value of real-time accurate data vs. unreliable patient self-reports.",
                color: "#0F2B57",
                url: "https://irxreminder.com/news/article/isg-2018/236",
              },
              {
                title: "HOPA-Funded Oral Chemotherapy Adherence Study — University of Michigan Cancer Center",
                journal: "Hematology Oncology Pharmacy Association",
                date: "2017",
                authors: "Kraft, Sterns, Dorsch",
                description: "First clinical deployment of iLidRx pod in oncology. Tested medication adherence for oral chemotherapy patients at U-M Cancer Center. Validated the complete 3-component platform in a real clinical setting.",
                color: "#1E56A0",
                url: null as string | null,
              },
              {
                title: "NIMH AI Telehealth Grant — TDtect\u2122 Tardive Dyskinesia Detection and Monitoring",
                journal: "NIH / NIMH — $871,153 Grant Award",
                date: "2023 — Ongoing",
                authors: "Sterns et al. (Kent State, Brown University, Butler Hospital, Videra Health)",
                description: "AI-powered detection of Tardive Dyskinesia and remote medication monitoring in behavioral health populations. Collaboration across 5 institutions. Study in progress.",
                color: "#0F2B57",
                url: null as string | null,
              },
            ].map((pub, i) => (
              <FadeUp key={pub.title} delay={i * 0.08}>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-8 rounded-2xl border-l-4 border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(30,86,160,0.06),0_8px_20px_rgba(30,86,160,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 cursor-pointer group"
                    style={{ borderLeftColor: pub.color }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${pub.color}10` }}>
                        <FileText className="w-5 h-5" style={{ color: pub.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#0F2B57] mb-1 group-hover:text-[#1E56A0] transition-colors">{pub.title}</h3>
                        <p className="text-sm text-[#1E56A0] font-medium mb-1">{pub.authors}</p>
                        <p className="text-sm text-[#737373] mb-3">{pub.journal} &bull; {pub.date}</p>
                        <p className="text-sm text-[#404040] leading-relaxed">{pub.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E56A0] transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </a>
                ) : (
                  <div
                    className="bg-white p-8 rounded-2xl border-l-4 border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)]"
                    style={{ borderLeftColor: pub.color }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${pub.color}10` }}>
                        <FileText className="w-5 h-5" style={{ color: pub.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#0F2B57] mb-1">{pub.title}</h3>
                        <p className="text-sm text-[#1E56A0] font-medium mb-1">{pub.authors}</p>
                        <p className="text-sm text-[#737373] mb-3">{pub.journal} &bull; {pub.date}</p>
                        <p className="text-sm text-[#404040] leading-relaxed">{pub.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </FadeUp>
            ))}
          </div>

          {/* Google Scholar link */}
          <p className="text-center text-sm text-[#737373] mb-10">
            Dr. Sterns has authored 33 publications across gerontechnology, medication adherence, and health behavior.{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=dkBa8G8AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E56A0] hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
            >
              View full publication list on Google Scholar &rarr;
            </a>
          </p>

          {/* Research Impact */}
          <FadeUp delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,86,160,0.04),0_4px_12px_rgba(30,86,160,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
              <h4 className="font-bold text-[#0F2B57] mb-6">Research Impact</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { end: 33, label: "Publications", color: "#0F2B57" },
                  { end: 100, suffix: "+", label: "International presentations", color: "#1E56A0" },
                  { end: 12, label: "U.S. patents", color: "#0F2B57" },
                ].map((item) => (
                  <div key={item.label}>
                    <CountUp
                      end={item.end}
                      suffix={item.suffix}
                      className="text-3xl font-extrabold mb-1 tracking-tight"
                      style={{ color: item.color, fontFamily: "var(--font-display)" }}
                    />
                    <div className="text-sm text-[#737373]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ======= AWARDS ======= */}
      <section id="awards" className="py-24 md:py-32 bg-[#FAFAFA] scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] mb-16 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Awards &amp; Recognition
            </h2>
          </FadeUp>

          <TimelineTrack
            orientation="vertical"
            items={[
              { label: "2023", title: "$871K NIMH Grant for AI Telehealth Research", description: "Federal funding for TDtect\u2122 study", icon: Award, color: "#1E56A0" },
              { label: "2023", title: "First Patients Enrolled in TDtect\u2122 Study", description: "NIMH-funded diagnostic study begins enrollment", icon: TrendingUp, color: "#0F2B57" },
              { label: "2019", title: "AMIA PitchIT Grand Prize \u2014 $12,500", description: "American Medical Informatics Association national competition. Recognized for potential to transform medication adherence.", icon: Trophy, color: "#1E56A0" },
              { label: "2019", title: "Best Tech Startup in Cleveland", description: "Recognized as the leading technology startup in the region", icon: Award, color: "#0F2B57" },
              { label: "2017", title: "AARP/MedCity \u201850+ Innovation Leader\u2019", description: "Dr. Anthony Sterns recognized for leadership in aging and technology", icon: Award, color: "#1E56A0" },
            ]}
          />
        </div>
      </section>

      {/* ======= ACCELERATORS & RECOGNITION ======= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Accelerators &amp; Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B57] text-center mb-16 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Backed by Leading Programs
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AMIA",
                "I-Corps at NIH",
                "OCEAN",
                "Whatif Ventures",
                "OHTec",
                "Village Capital",
                "MedStartr",
                "TiE",
                "Conscious Venture Lab",
                "NewChip",
                "BioEnterprise",
              ].map((name) => (
                <div
                  key={name}
                  className="bg-[#FAFAFA] px-5 py-3 rounded-xl text-sm font-medium text-[#404040] border border-[#E5E5E5]/60 hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300"
                  style={{
                    boxShadow: "0 1px 3px rgba(30,58,138,0.04)",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071A38] via-[#0A1E3D] to-[#0F2B57]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              The Evidence Speaks for Itself
            </h2>
            <p className="text-xl text-[#B0C4DE] mb-6">
              See how clinically validated technology can transform adherence for your patients
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#1E56A0] hover:bg-[#163D7A] text-white shadow-[0_1px_3px_rgba(30,86,160,0.3),0_6px_20px_rgba(30,86,160,0.25)] transition-[background-color,box-shadow]">
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/80 bg-white/5 hover:border-white hover:bg-white/15 text-white transition-colors">
                <Link to="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
