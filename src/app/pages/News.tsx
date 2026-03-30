import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { newsArticles } from "@/app/data/newsArticles";
import type { NewsArticle } from "@/app/data/newsArticles";

const ARTICLES_PER_PAGE = 6;

const CATEGORY_LABELS: Record<NewsArticle["category"], string> = {
  grant: "Grants",
  study: "Studies",
  leadership: "Leadership",
  accelerator: "Accelerators",
  award: "Awards",
  partnership: "Partnerships",
};

const CATEGORY_COLORS: Record<NewsArticle["category"], string> = {
  grant: "bg-[#1E56A0]/10 text-[#1E56A0]",
  study: "bg-[#0F2B57]/10 text-[#0F2B57]",
  leadership: "bg-amber-100 text-amber-700",
  accelerator: "bg-emerald-50 text-emerald-700",
  award: "bg-violet-50 text-violet-700",
  partnership: "bg-[#1E56A0]/10 text-[#1E56A0]",
};

function extractYear(dateStr: string): string {
  const match = dateStr.match(/(\d{4})/);
  return match ? match[1] : "";
}

export function News() {
  const prefersReducedMotion = useReducedMotion();
  const heroAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };

  const [activeCategory, setActiveCategory] = useState<
    NewsArticle["category"] | "all"
  >("all");
  const [activeYear, setActiveYear] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  const years = useMemo(() => {
    const set = new Set(newsArticles.map((a) => extractYear(a.date)));
    return Array.from(set)
      .filter(Boolean)
      .sort((a, b) => Number(b) - Number(a));
  }, []);

  const categories = useMemo(() => {
    const set = new Set(newsArticles.map((a) => a.category));
    return Array.from(set);
  }, []);

  const filteredArticles = useMemo(() => {
    let results = newsArticles;
    if (activeCategory !== "all") {
      results = results.filter((a) => a.category === activeCategory);
    }
    if (activeYear !== "all") {
      results = results.filter((a) => extractYear(a.date) === activeYear);
    }
    return results;
  }, [activeCategory, activeYear]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  function resetFilters() {
    setActiveCategory("all");
    setActiveYear("all");
    setVisibleCount(ARTICLES_PER_PAGE);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#EEF4FF]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div {...heroAnimation}>
            <p className="text-[#1E56A0] font-semibold text-sm tracking-widest uppercase mb-4">
              Updates
            </p>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-[#0F2B57] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              News &amp; Milestones
            </h1>
            <p className="text-xl text-[#737373]">
              Grants, studies, partnerships, and recognition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-[#E5E5E5]/60 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setVisibleCount(ARTICLES_PER_PAGE);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0] focus-visible:ring-offset-2 ${
                  activeCategory === "all"
                    ? "bg-[#0F2B57] text-white"
                    : "bg-white text-[#737373] border border-[#E5E5E5] hover:border-[#0F2B57]/30 hover:text-[#0F2B57]"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(ARTICLES_PER_PAGE);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0] focus-visible:ring-offset-2 ${
                    activeCategory === cat
                      ? "bg-[#0F2B57] text-white"
                      : "bg-white text-[#737373] border border-[#E5E5E5] hover:border-[#0F2B57]/30 hover:text-[#0F2B57]"
                  }`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>

            {/* Year select */}
            <div className="sm:ml-auto flex items-center gap-2">
              <label
                htmlFor="year-filter"
                className="text-xs font-semibold uppercase tracking-wider text-gray-400"
              >
                Year
              </label>
              <select
                id="year-filter"
                value={activeYear}
                onChange={(e) => {
                  setActiveYear(e.target.value);
                  setVisibleCount(ARTICLES_PER_PAGE);
                }}
                className="text-sm border border-[#E5E5E5] rounded-lg px-3 py-1.5 bg-white text-[#404040] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0] focus-visible:ring-offset-2"
              >
                <option value="all">All Years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <p className="text-sm text-gray-400 mb-8">
            Showing {visibleArticles.length} of {filteredArticles.length}{" "}
            article{filteredArticles.length !== 1 ? "s" : ""}
            {(activeCategory !== "all" || activeYear !== "all") && (
              <button
                onClick={resetFilters}
                className="ml-3 text-[#1E56A0] hover:text-[#163D7A] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0] focus-visible:ring-offset-2"
              >
                Clear filters
              </button>
            )}
          </p>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-4">
                No articles match your filters.
              </p>
              <button
                onClick={resetFilters}
                className="text-[#1E56A0] hover:text-[#163D7A] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0] focus-visible:ring-offset-2"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {visibleArticles.map((item, index) => (
                <FadeUp key={item.slug} delay={Math.min(index * 0.05, 0.4)}>
                  <Link
                    to={`/news/${item.slug}`}
                    className={`group block p-8 rounded-2xl border transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 ${
                      item.featured
                        ? "bg-[#1E56A0]/5 border-[#1E56A0]/20 shadow-[0_1px_3px_rgba(8,145,178,0.06),0_4px_12px_rgba(8,145,178,0.08)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.08),0_8px_20px_rgba(8,145,178,0.12)]"
                        : "bg-white border-[#E5E5E5]/60 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.04)] hover:shadow-[0_1px_3px_rgba(30,58,138,0.06),0_8px_20px_rgba(30,58,138,0.08)]"
                    }`}
                  >
                    <article>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-[#737373] uppercase tracking-wider">
                          {item.date}
                        </span>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[item.category]}`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h2
                        className={`text-xl font-bold mb-3 tracking-tight group-hover:text-[#1E56A0] transition-colors ${
                          item.featured ? "text-[#0F2B57]" : "text-[#171717]"
                        }`}
                      >
                        {item.title}
                      </h2>
                      <p className="text-[#737373] leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center text-[#1E56A0] font-semibold text-sm gap-2 group-hover:gap-3 transition-[gap]">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </article>
                  </Link>
                </FadeUp>
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  setVisibleCount((prev) => prev + ARTICLES_PER_PAGE)
                }
                className="border-[#0F2B57]/20 text-[#0F2B57] hover:bg-[#0F2B57]/5 hover:border-[#0F2B57]/40 transition-colors"
              >
                Load More Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-[#EEF4FF]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F2B57] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See What Real-Time Monitoring Looks Like
            </h2>
            <p className="text-xl text-[#737373] mb-10">
              Schedule a pilot configured for your specific use case
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#1E56A0] hover:bg-[#163D7A] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]"
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
                className="border-[#0F2B57]/20 text-[#0F2B57] hover:bg-[#0F2B57]/5 hover:border-[#0F2B57]/40 transition-colors"
              >
                <Link to="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
