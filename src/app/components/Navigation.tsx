import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ChevronDown, Brain, FlaskConical, Pill, Heart } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const navLinks = [
  { to: "/platform", label: "Platform" },
  { to: "/evidence", label: "Evidence" },
  { to: "/about", label: "About" },
];

const solutionItems = [
  {
    icon: Brain,
    title: "Mental Health",
    description: "Real-time adherence monitoring for behavioral health agencies",
    to: "/solutions#mental-health",
  },
  {
    icon: FlaskConical,
    title: "Clinical Research",
    description: "Automated protocol compliance tracking for trials",
    to: "/solutions#research",
  },
  {
    icon: Pill,
    title: "Pharmaceutical",
    description: "Real-world evidence and adherence data for pharma",
    to: "/solutions#pharma",
  },
  {
    icon: Heart,
    title: "Aging in Place",
    description: "Safe medication management for independent living",
    to: "/solutions#aging",
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsTriggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setIsShrunk(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [location]);

  // Close solutions dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target as Node) &&
        solutionsTriggerRef.current &&
        !solutionsTriggerRef.current.contains(e.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = location.pathname === "/solutions";

  const handleDemoCTA = () => {
    if (location.pathname === "/") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/contact");
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b transition-[box-shadow,height] duration-300 ${
          isScrolled ? "shadow-sm border-[#E5E5E5]/50" : "border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className={`flex justify-between items-center transition-[height] duration-300 ${isShrunk ? "h-14" : "h-16"}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[#0F2B57]">iRx</span>
                <span className="text-[#404040]">Reminder</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[0.9375rem] font-medium transition-colors ${
                    isActive(link.to) ? "text-[#1E56A0]" : "text-[#404040] hover:text-[#1E56A0]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Solutions dropdown */}
              <div className="relative">
                <button
                  ref={solutionsTriggerRef}
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  className={`text-[0.9375rem] font-medium transition-colors inline-flex items-center gap-1 ${
                    isSolutionsActive ? "text-[#1E56A0]" : "text-[#404040] hover:text-[#1E56A0]"
                  }`}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      ref={solutionsRef}
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[360px] bg-white rounded-xl shadow-xl shadow-[#0F2B57]/10 border border-[#E5E5E5]/60 p-2 z-50"
                    >
                      {solutionItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <item.icon className="w-5 h-5 text-[#1E56A0]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#0F2B57] group-hover:text-[#1E56A0] transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-[#737373] mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[0.9375rem] font-medium transition-colors ${
                    isActive(link.to) ? "text-[#1E56A0]" : "text-[#404040] hover:text-[#1E56A0]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={handleDemoCTA}
                className="bg-[#1E56A0] text-white px-6 py-2.5 rounded-xl font-semibold text-[0.9375rem] transition-colors hover:bg-[#163D7A] hover:shadow-md hover:shadow-[#1E56A0]/20 focus:ring-2 focus:ring-[#1E56A0] focus:ring-offset-2 focus-visible:outline-none"
              >
                Request a Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#404040] hover:text-[#0F2B57] rounded-lg hover:bg-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/40 focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu — Full-screen overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 top-14 bg-white z-40 overflow-y-auto"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: "100%" }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: "100%" }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="px-5 py-6 pb-32">
                <Link
                  to="/platform"
                  className={`block py-3 border-b border-[#F5F5F5] text-2xl font-semibold ${
                    isActive("/platform") ? "text-[#1E56A0]" : "text-[#0F2B57]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Platform
                </Link>

                {/* Solutions accordion */}
                <div className="border-b border-[#F5F5F5]">
                  <button
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className={`flex items-center justify-between w-full py-3 text-2xl font-semibold ${
                      isSolutionsActive ? "text-[#1E56A0]" : "text-[#0F2B57]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Solutions
                    <ChevronDown className={`w-5 h-5 transition-transform ${isMobileSolutionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileSolutionsOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 space-y-1">
                          {solutionItems.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="flex items-center gap-3 py-2.5 text-base text-[#404040] hover:text-[#1E56A0]"
                            >
                              <item.icon className="w-5 h-5 text-[#1E56A0]" strokeWidth={1.5} />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/evidence"
                  className={`block py-3 border-b border-[#F5F5F5] text-2xl font-semibold ${
                    isActive("/evidence") ? "text-[#1E56A0]" : "text-[#0F2B57]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Evidence
                </Link>

                <Link
                  to="/about"
                  className={`block py-3 border-b border-[#F5F5F5] text-2xl font-semibold ${
                    isActive("/about") ? "text-[#1E56A0]" : "text-[#0F2B57]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  About
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile fixed bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-[#E5E5E5] z-50">
        <button
          onClick={handleDemoCTA}
          className="w-full bg-[#1E56A0] text-white py-3 rounded-xl font-semibold text-[0.9375rem] transition-colors hover:bg-[#163D7A] focus:ring-2 focus:ring-[#1E56A0] focus:ring-offset-2 focus-visible:outline-none"
        >
          Request a Demo
        </button>
      </div>
    </>
  );
}
