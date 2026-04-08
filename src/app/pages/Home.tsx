import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Shield,
  Award,
  FileCheck,
  Pill,
  Hand,
  BellRing,
  Activity,
  LayoutDashboard,
  Smartphone,
  Cpu,
  Check,
  X as XIcon,
  Minus,
  Brain,
  FlaskConical,
  Heart,
  Quote,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "@/app/components/animations/FadeUp";
import { Section } from "@/app/components/animations/Section";
import { CountUp } from "@/app/components/animations/CountUp";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

/* ——— Hero Product Visual ——— */
function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Product image — pod with phone showing dashboard */}
        <div className="rounded-2xl overflow-hidden shadow-lg shadow-[#1E56A0]/10 border border-[#E5E5E5]/60 bg-white">
          <img
            src="/images/product/with-phone.jpg"
            alt="iLidRx smart medication pod alongside smartphone showing 95% adherence dashboard"
            className="w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Floating pod notification */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-4 -left-6 bg-white rounded-xl p-3 shadow-lg shadow-[#1E56A0]/10 border border-[#E5E5E5]/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#1E56A0]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0F2B57]">iLidRx Pod</div>
              <div className="text-[10px] text-[#10B981]">Dose dispensed</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ——— Main Home Component ——— */
export function Home() {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  // Form state removed — dedicated Contact page handles form submissions

  return (
    <div className="bg-white">

      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section className="bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-4">
                  Medication Adherence Platform
                </p>
                <h1
                  className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[#0F2B57] leading-[1.1] tracking-[-0.02em] mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  80%+ Medication Adherence. Clinically Proven.
                </h1>
                <p className="text-xl text-[#737373] leading-relaxed max-w-lg">
                  iRxReminder combines IoT dispensing control, smart alerting, and real-time
                  monitoring to eliminate dosing errors — validated through NIH-funded clinical studies.
                </p>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center gap-4 mt-8"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else navigate("/contact");
                  }}
                  className="bg-[#1E56A0] text-white px-6 py-3 rounded-xl font-semibold text-[0.9375rem] transition-colors hover:bg-[#163D7A] hover:shadow-md hover:shadow-[#1E56A0]/20 focus:ring-2 focus:ring-[#1E56A0] focus:ring-offset-2 focus-visible:outline-none"
                >
                  Request a Demo
                </button>
                <Link
                  to="/evidence"
                  className="text-[#1E56A0] font-semibold text-[0.9375rem] hover:text-[#163D7A] inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
                >
                  See the Evidence
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>

              {/* Social proof logo bar */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12"
              >
                <p className="text-sm text-[#525252] mb-3">
                  Backed by federal research grants and validated at leading universities
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {["NIH", "Kent State", "Brown", "U of Michigan", "OCEAN"].map((name) => (
                    <span
                      key={name}
                      className="text-xs font-semibold uppercase tracking-wider text-[#525252] opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Visual */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden lg:block"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2: THE PROBLEM (dark) ═══════ */}
      <Section className="py-20 lg:py-28 bg-[#0F2B57]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#B3CCFF] mb-3">
              The Problem
            </p>
            <h2
              className="font-bold text-4xl lg:text-[2.25rem] text-white leading-[1.2] tracking-[-0.01em] max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The $320 Billion Crisis No One Has Solved
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                number: "700K",
                label: "ER Visits",
                description: "Every year, medication errors send 700,000 Americans to emergency rooms.",
              },
              {
                number: "125K",
                label: "Deaths",
                description: "Non-adherence directly causes 125,000 preventable deaths annually.",
              },
              {
                number: "$320B",
                label: "Wasted",
                description: "The US healthcare system loses $320 billion per year to avoidable medication-related costs.",
              },
            ].map((stat, i) => (
              <FadeUp key={stat.label} delay={0.1 + i * 0.08}>
                <div className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="font-bold text-5xl lg:text-6xl text-white" style={{ fontFamily: "var(--font-display)" }}>
                    <CountUp
                      end={parseFloat(stat.number.replace(/[^0-9.]/g, ""))}
                      prefix={stat.number.startsWith("$") ? "$" : ""}
                      suffix={stat.number.includes("K") ? "K" : stat.number.includes("B") ? "B" : ""}
                    />
                  </div>
                  <p className="text-xs text-[#B0C4DE] uppercase tracking-wider mt-2">{stat.label}</p>
                  <p className="text-base text-[#D4D4D4] mt-3 leading-relaxed">{stat.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-12 max-w-2xl">
              <p className="text-xl text-[#B0C4DE] leading-relaxed">
                Despite decades of innovation — from pill organizers to smart caps to connected
                pillboxes — no technology has meaningfully solved this problem.
              </p>
              <p className="text-white font-semibold mt-4">Until now.</p>
              <p className="text-sm text-[#8BA3C4] mt-4">Source: Centers for Disease Control and Prevention</p>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ═══════ SECTION 3: HOW IT WORKS ═══════ */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-3 text-center">
              How It Works
            </p>
            <h2
              className="font-bold text-4xl lg:text-[2.25rem] text-[#0F2B57] leading-[1.2] tracking-[-0.01em] max-w-2xl mx-auto text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From Pharmacy to Patient to Care Team — in Real Time
            </h2>
          </FadeUp>

          {/* Pod Usage Steps — Real Product Images */}
          <div className="mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { img: "/images/how-it-works/1-filling-pod.png", title: "Pharmacy Fills", desc: "The pharmacist loads and programs the iLidRx pod. No patient sorting." },
                { img: "/images/how-it-works/3-place-pod.png", title: "Place on Base", desc: "Pod snaps onto its inductive charging base. Always ready." },
                { img: "/images/how-it-works/6-tilt-pod.png", title: "Tilt to Dispense", desc: "Hold, Place, Tilt\u2122. One dose at a time. Overdose? Physically impossible." },
                { img: "/images/how-it-works/7-pill-dispensed.png", title: "Dose Recorded", desc: "Medication dispensed and logged automatically. Care team sees it in real time." },
              ].map((step, i) => (
                <FadeUp key={step.title} delay={0.1 + i * 0.1} className="text-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-3 -left-1 w-8 h-8 rounded-full bg-[#1E56A0] text-white font-bold text-sm flex items-center justify-center z-10" style={{ fontFamily: "var(--font-display)" }}>
                      {i + 1}
                    </div>
                    <div className="bg-white rounded-2xl border border-[#E5E5E5]/60 overflow-hidden shadow-sm shadow-[#1E56A0]/5">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full aspect-square object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-base text-[#0F2B57]" style={{ fontFamily: "var(--font-display)" }}>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#737373] max-w-[220px] mx-auto leading-relaxed">
                    {step.desc}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.7} className="text-center mt-12">
            <p className="text-xl text-[#404040] font-medium max-w-2xl mx-auto">
              iRxReminder is the only platform that physically prevents overdosing while providing real-time adherence data to care teams.
            </p>
            <Link
              to="/platform"
              className="inline-flex items-center gap-1.5 text-[#1E56A0] font-semibold text-[0.9375rem] mt-6 hover:text-[#163D7A] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
            >
              See the Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </Section>

      {/* ═══════ SECTION 4: PLATFORM OVERVIEW ═══════ */}
      <Section className="py-20 lg:py-28 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-3">
              The Platform
            </p>
            <h2
              className="font-bold text-4xl lg:text-[2.25rem] text-[#0F2B57] leading-[1.2] tracking-[-0.01em] max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Three Components. One Connected System.
            </h2>
            <p className="text-xl text-[#737373] mt-4 max-w-xl leading-relaxed">
              Cloud intelligence, patient empowerment, and physical medication control — working together in real time.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                accent: "#1E56A0",
                icon: LayoutDashboard,
                title: "iRxControl Center",
                desc: "Cloud-based command center for healthcare teams. Deploy regimens, monitor adherence, and intervene — all in real time.",
                features: ["Real-time patient adherence dashboards", "Regimen deployment and management", "Alert configuration and escalation rules", "EHR/EDC integration ready"],
              },
              {
                accent: "#10B981",
                icon: Smartphone,
                title: "iRxCapture Pro",
                desc: "Patient app that empowers — not nags. Smart alerts, adherence tracking, and medication education in one place.",
                features: ["Smart dosing window alerts", "Snooze and skip flexibility", "Visual adherence graphs", "Patient education materials"],
              },
              {
                accent: "#f59e0b",
                icon: Cpu,
                title: "iLidRx Pod",
                desc: "The breakthrough. Pharmacy-filled, IoT-connected medication dispenser with physical overdose prevention.",
                features: ["Hold, Place, Tilt\u2122 dispensing", "Dosing window prevents overdose", "No patient sorting required", "Automatic dose recording"],
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={0.1 + i * 0.08}>
                <div className="bg-white rounded-2xl border border-[#E5E5E5]/60 p-8 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1E56A0]/5 h-full flex flex-col">
                  {/* Accent band */}
                  <div className="h-1 rounded-full -mt-4 mb-6 -mx-4" style={{ backgroundColor: card.accent }} />

                  <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-[#1E56A0]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-xl text-[#0F2B57] mt-4" style={{ fontFamily: "var(--font-display)" }}>
                    {card.title}
                  </h3>
                  <p className="text-base text-[#737373] mt-3 leading-relaxed">{card.desc}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-[#404040]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/platform"
                    className="inline-flex items-center gap-1.5 text-[#1E56A0] font-semibold text-[0.9375rem] mt-6 hover:text-[#163D7A] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ SECTION 5: CTA BANNER ═══════ */}
      <section className="bg-[#1E56A0] py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Improve Adherence?
          </h2>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else navigate("/contact");
            }}
            className="mt-6 bg-white text-[#1E56A0] px-6 py-3 rounded-xl font-semibold text-[0.9375rem] transition-colors hover:bg-[#F5F5F5] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1E56A0] focus-visible:outline-none"
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* ═══════ SECTION 6: COMPARISON TABLE ═══════ */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-3">
              Why iRxReminder
            </p>
            <h2
              className="font-bold text-4xl lg:text-[2.25rem] text-[#0F2B57] leading-[1.2] tracking-[-0.01em] max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Technology Gap — And How We Close It
            </h2>
            <p className="text-xl text-[#737373] mt-4 max-w-xl leading-relaxed">
              Existing solutions fail on the metrics that matter most.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mt-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-semibold text-[#737373] uppercase tracking-wider pb-4 pr-4 w-[220px]">
                      Capability
                    </th>
                    {["Pill Organizers", "Smart Caps", "Connected Pillboxes"].map((col) => (
                      <th key={col} className="text-center text-xs font-semibold text-[#737373] uppercase tracking-wider pb-4 px-3 w-[130px]">
                        {col}
                      </th>
                    ))}
                    <th className="text-center text-xs font-bold text-white uppercase tracking-wider pb-4 px-4 bg-[#1E56A0] rounded-t-xl w-[130px]">
                      iRxReminder
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Prevents overdose", vals: [false, false, false, true] },
                    { feature: "No patient sorting required", vals: [false, true, false, true] },
                    { feature: "Alerts only when late", vals: [false, false, false, true] },
                    { feature: "Real-time adherence data", vals: [false, "partial", "partial", true] },
                    { feature: "Complex regimen support (7-9x/day)", vals: [false, false, false, true] },
                    { feature: "Clinically proven 80%+ adherence", vals: [false, false, false, true] },
                    { feature: "EHR/EDC integration", vals: [false, false, "partial", true] },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                      <td className="text-sm font-medium text-[#404040] py-4 pr-4 pl-3 rounded-l-lg">
                        {row.feature}
                      </td>
                      {row.vals.map((val, j) => {
                        const isIrx = j === 3;
                        return (
                          <td
                            key={j}
                            className={`text-center py-4 px-3 ${isIrx ? "bg-[#EEF4FF]/50" : ""} ${j === 3 ? "rounded-r-lg" : ""}`}
                          >
                            {val === true ? (
                              <Check className={`w-5 h-5 mx-auto ${isIrx ? "text-[#10B981]" : "text-[#10B981]"}`} />
                            ) : val === "partial" ? (
                              <Minus className="w-5 h-5 mx-auto text-amber-500" />
                            ) : (
                              <XIcon className="w-5 h-5 mx-auto text-[#D4D4D4]" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile comparison cards */}
            <div className="md:hidden mt-12 space-y-4">
              {[
                { name: "Pill Organizers", vals: [false, false, false, false, false, false, false] },
                { name: "Smart Caps", vals: [false, true, false, "partial", false, false, false] },
                { name: "Connected Pillboxes", vals: [false, false, false, "partial", false, false, "partial"] },
                { name: "iRxReminder", vals: [true, true, true, true, true, true, true], highlight: true },
              ].map((competitor) => (
                <div
                  key={competitor.name}
                  className={`rounded-2xl border p-5 ${
                    competitor.highlight ? "bg-[#EEF4FF] border-[#1E56A0]/20" : "bg-white border-[#E5E5E5]/60"
                  }`}
                >
                  <h4 className={`font-semibold text-base mb-3 ${competitor.highlight ? "text-[#1E56A0]" : "text-[#0F2B57]"}`}>
                    {competitor.name}
                  </h4>
                  <ul className="space-y-2">
                    {["Prevents overdose", "No sorting", "Smart alerts", "Real-time data", "Complex regimens", "80%+ adherence", "EHR/EDC integration"].map(
                      (feat, j) => (
                        <li key={feat} className="flex items-center gap-2 text-sm">
                          {competitor.vals[j] === true ? (
                            <Check className="w-4 h-4 text-[#10B981]" />
                          ) : competitor.vals[j] === "partial" ? (
                            <Minus className="w-4 h-4 text-amber-500" />
                          ) : (
                            <XIcon className="w-4 h-4 text-[#D4D4D4]" />
                          )}
                          <span className="text-[#404040]">{feat}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-[#737373] italic">
              12 patents protect iRxReminder&rsquo;s unique dispensing control technology.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ═══════ SECTION 7: USE CASES ═══════ */}
      <Section className="py-20 lg:py-28 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-3">
              Solutions
            </p>
            <h2
              className="font-bold text-4xl lg:text-[2.25rem] text-[#0F2B57] leading-[1.2] tracking-[-0.01em] max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for Your Challenge
            </h2>
          </FadeUp>

          {/* Tab bar */}
          <div className="flex gap-2 mt-10 overflow-x-auto pb-2">
            {[
              { label: "Mental Health", icon: Brain },
              { label: "Clinical Research", icon: FlaskConical },
              { label: "Pharma", icon: Pill },
              { label: "Aging in Place", icon: Heart },
            ].map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === i
                    ? "bg-[#1E56A0] text-white"
                    : "bg-[#F5F5F5] text-[#404040] hover:bg-[#E5E5E5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {[
              {
                eyebrow: "For Behavioral Health",
                title: "Stabilize Patients. Increase Revenue. Reduce Staff Burnout.",
                pain: "Mental health agencies struggle with medication non-adherence driving patient instability, repeat hospitalizations, and staff exhaustion.",
                solution: "iRxReminder gives your care team real-time visibility into patient medication-taking behavior, enabling early intervention before crises occur.",
                metrics: [
                  { value: "80%+", label: "Adherence rate" },
                  { value: "\u2193 ER visits", label: "With monitoring" },
                  { value: "\u2191 Revenue", label: "Via med reviews" },
                ],
                cta: { label: "Learn More About Mental Health Solutions", to: "/solutions#mental-health" },
                img: "/images/app/adherence-screen.png",
                imgAlt: "iRxReminder adherence dashboard showing 75% total adherence with per-medication breakdown",
              },
              {
                eyebrow: "For Researchers",
                title: "Cut Dropout Rates from 30% to Under 5%.",
                pain: "Clinical trials budget an extra 30% for participant dropout due to non-adherence — wasting time, money, and potentially life-saving data.",
                solution: "iRxReminder provides real-time protocol compliance monitoring, automatic adherence tracking, and early intervention for at-risk participants.",
                metrics: [
                  { value: "5%", label: "Dropout rate" },
                  { value: "Real-time", label: "Data" },
                  { value: "NIH-funded", label: "Validation" },
                ],
                cta: { label: "Learn More About Research Solutions", to: "/solutions#research" },
                img: "/images/banners/irx_banner_research.jpg",
                imgAlt: "Two clinicians in a hospital hallway with the iLidRx pod — clinical research setting",
              },
              {
                eyebrow: "For Pharma Companies",
                title: "Protect Drug Efficacy. Prove Real-World Outcomes.",
                pain: "Non-adherence undermines drug efficacy data and commercialization ROI. With 40+ oral chemotherapy drugs now approved, the adherence gap is widening.",
                solution: "iRxReminder ensures patients take medications as prescribed, generating clean real-world evidence and building brand loyalty.",
                metrics: [
                  { value: "$400K", label: "Savings/patient" },
                  { value: "50%", label: "Gap closable" },
                  { value: "12", label: "Patents" },
                ],
                cta: { label: "Learn More About Pharma Solutions", to: "/solutions#pharma" },
                img: "/images/product/frontIsolated.jpg",
                imgAlt: "iLidRx smart medication pod — front view with green LED indicator",
              },
              {
                eyebrow: "For Home Health",
                title: "Independence Without Risk.",
                pain: "Complex regimens, failing memory, and caregiver burden put aging adults at constant risk of medication errors and ER visits.",
                solution: "iRxReminder\u2019s pharmacy-filled pods eliminate sorting, prevent overdose, and keep caregivers connected — enabling safer independence at home.",
                metrics: [
                  { value: "Zero", label: "Sorting errors" },
                  { value: "Smart", label: "Alerts" },
                  { value: "Connected", label: "Caregivers" },
                ],
                cta: { label: "Learn More About Aging in Place", to: "/solutions#aging" },
                img: "/images/banners/irx_banner_home-1.jpg",
                imgAlt: "iLidRx pod on a kitchen counter with an elderly couple in the background — home health setting",
              },
            ].map(
              (content, idx) =>
                activeTab === idx && (
                  <motion.div
                    key={content.eyebrow}
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[320px]"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-2">
                        {content.eyebrow}
                      </p>
                      <h3
                        className="font-bold text-2xl text-[#0F2B57] leading-[1.2]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {content.title}
                      </h3>
                      <p className="text-base text-[#737373] mt-4 leading-relaxed">{content.pain}</p>
                      <p className="text-base text-[#404040] mt-3 leading-relaxed font-medium">{content.solution}</p>

                      {/* Metrics */}
                      <div className="flex gap-8 mt-6">
                        {content.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-xl font-bold text-[#1E56A0]" style={{ fontFamily: "var(--font-display)" }}>
                              {m.value}
                            </p>
                            <p className="text-xs text-[#737373] mt-1">{m.label}</p>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={content.cta.to}
                        className="inline-flex items-center gap-1.5 text-[#1E56A0] font-semibold text-[0.9375rem] mt-6 hover:text-[#163D7A] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
                      >
                        {content.cta.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Use-case visual */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="rounded-2xl overflow-hidden border border-[#E5E5E5]/60 bg-white shadow-sm shadow-[#1E56A0]/5">
                        <img
                          src={content.img}
                          alt={content.imgAlt}
                          className="w-full h-full object-cover max-h-[400px]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* ═══════ SECTION 8: TESTIMONIALS ═══════ */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-3 text-center">
              Trusted by Researchers and Clinicians
            </p>
            <h2
              className="font-bold text-4xl lg:text-[2.25rem] text-[#0F2B57] leading-[1.2] tracking-[-0.01em] max-w-2xl mx-auto text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Our Partners Say
            </h2>
          </FadeUp>

          {/* Pending approval notice */}
          <FadeUp delay={0.05}>
            <p className="text-center text-xs text-[#A3A3A3] mt-4 bg-[#FAFAFA] inline-block mx-auto px-3 py-1 rounded-full border border-[#E5E5E5]">
              Partner quotes pending final approval. Names and affiliations to be confirmed.
            </p>
          </FadeUp>

          {/* Replace with real testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                quote: "iRxReminder\u2019s platform gave us real-time visibility into patient adherence we never had before. We could intervene within hours instead of waiting for the next appointment.",
                name: "Dr. Research Partner",
                role: "Clinical Researcher",
                org: "Kent State University",
                initials: "RP",
              },
              {
                quote: "The dosing window is a game-changer. For the first time, we have a system that makes it physically impossible for patients to accidentally overdose. That\u2019s not a feature — it\u2019s a safety guarantee.",
                name: "Healthcare Professional",
                role: "Medical Director",
                org: "Partner Organization",
                initials: "HP",
              },
              {
                quote: "Our study dropout rate went from the expected 30% down to under 5%. The data quality was exceptional — every dose recorded automatically.",
                name: "Study Coordinator",
                role: "Clinical Research",
                org: "University Partner",
                initials: "SC",
              },
            ].map((t, i) => (
              <FadeUp key={t.name} delay={0.1 + i * 0.08}>
                <div className="bg-white rounded-2xl border border-[#E5E5E5]/60 p-8 h-full flex flex-col transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1E56A0]/5">
                  <Quote className="w-10 h-10 text-[#D9E5FF] mb-2" />
                  <p className="text-base text-[#404040] italic leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex items-center justify-center">
                      <span className="font-semibold text-sm text-[#1E56A0]">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#0F2B57]">{t.name}</p>
                      <p className="text-xs text-[#737373]">{t.role} &middot; {t.org}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ SECTION 9: GET STARTED CTA ═══════ */}
      <Section id="contact" className="py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA */}
            <FadeUp>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#1E56A0] mb-3">
                  Get Started
                </p>
                <h2
                  className="font-bold text-4xl lg:text-[2.25rem] text-[#0F2B57] leading-[1.2] tracking-[-0.01em] max-w-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  See iRxReminder in Action
                </h2>
                <p className="text-xl text-[#737373] mt-4 max-w-xl leading-relaxed mb-8">
                  Schedule a 15-minute personalized demo configured for your specific use case.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/schedule-pilot"
                    className="inline-flex items-center justify-center gap-2 bg-[#1E56A0] text-white px-7 py-3.5 rounded-xl font-semibold transition-colors hover:bg-[#163D7A] hover:shadow-md hover:shadow-[#1E56A0]/20 focus:ring-2 focus:ring-[#1E56A0] focus:ring-offset-2 focus-visible:outline-none"
                  >
                    Schedule a Pilot
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-[#1E56A0]/20 text-[#1E56A0] px-7 py-3.5 rounded-xl font-semibold transition-colors hover:bg-[#1E56A0] hover:text-white focus:ring-2 focus:ring-[#1E56A0] focus:ring-offset-2 focus-visible:outline-none"
                  >
                    Contact Us
                  </Link>
                </div>
                <p className="text-sm text-[#737373] mt-6">
                  Prefer email?{" "}
                  <a href="mailto:info@irxreminder.com" className="text-[#1E56A0] hover:underline">
                    info@irxreminder.com
                  </a>
                </p>
              </div>
            </FadeUp>

            {/* Right: What happens next */}
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E5E5]/60">
                <h3
                  className="font-semibold text-xl text-[#0F2B57] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  What happens next
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      num: "1",
                      title: "Quick discovery call",
                      desc: "We\u2019ll learn about your organization, patient population, and specific adherence challenges.",
                    },
                    {
                      num: "2",
                      title: "Personalized demo",
                      desc: "See the iRxControl dashboard, iRxCapture app, and iLidRx pod in action — tailored to your use case.",
                    },
                    {
                      num: "3",
                      title: "Custom proposal",
                      desc: "We\u2019ll provide a deployment plan and ROI projection based on your specific situation.",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1E56A0] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0F2B57]">{step.title}</h4>
                        <p className="text-sm text-[#737373] mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>
    </div>
  );
}
