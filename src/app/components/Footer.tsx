import { Link } from "react-router";
import { Linkedin, Shield, Award, FileCheck, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#171717] text-[#A3A3A3]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <span
              className="text-xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              iRx<span className="text-[#A3A3A3]">Reminder</span>
            </span>
            <p className="text-sm text-[#737373] mt-3 mb-4 leading-relaxed">
              Empowering patients and care teams to achieve high medication adherence.
            </p>
            <a
              href="https://www.linkedin.com/company/irxreminder-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <p className="text-xs text-[#525252] mt-3">Cleveland, OH</p>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4
              className="text-xs font-semibold text-[#D4D4D4] uppercase tracking-wider mb-4"
            >
              Platform
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/platform", label: "iRxControl Center" },
                { to: "/platform", label: "iRxCapture Pro" },
                { to: "/platform", label: "iLidRx Pod" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#737373] hover:text-white transition-colors block py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4
              className="text-xs font-semibold text-[#D4D4D4] uppercase tracking-wider mb-4"
            >
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About" },
                { to: "/news", label: "News" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#737373] hover:text-white transition-colors block py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4
              className="text-xs font-semibold text-[#D4D4D4] uppercase tracking-wider mb-4"
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/evidence", label: "Evidence" },
                { to: "/roi-calculator", label: "ROI Calculator" },
                { to: "/schedule-pilot", label: "Schedule a Pilot" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#737373] hover:text-white transition-colors block py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap items-center gap-6 mt-12">
          {[
            { icon: Shield, text: "HIPAA Compliant" },
            { icon: GraduationCap, text: "NIH-Funded Research" },
            { icon: Award, text: "12 Patents" },
            { icon: FileCheck, text: "IRB-Approved Studies" },
          ].map((badge) => (
            <span key={badge.text} className="flex items-center gap-2 text-xs text-[#525252]">
              <badge.icon className="w-4 h-4" strokeWidth={1.5} />
              {badge.text}
            </span>
          ))}
        </div>

        {/* Divider + Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#262626]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#525252]">
            <p>&copy; {new Date().getFullYear()} iRxReminder LLC &middot; Cleveland, OH</p>
            <div className="flex gap-6">
              <Link to="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 rounded-sm">
                HIPAA Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
