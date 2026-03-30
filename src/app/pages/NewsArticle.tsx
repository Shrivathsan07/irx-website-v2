import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { getArticleBySlug, getRelatedArticles } from "@/app/data/newsArticles";

const categoryLabels: Record<string, string> = {
  grant: "Grant",
  study: "Clinical Study",
  leadership: "Leadership",
  accelerator: "Accelerator",
  award: "Award",
  partnership: "Partnership",
};

export function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const related = getRelatedArticles(article.slug, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero — Light */}
      <section className="bg-[#EEF4FF]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-[#737373] hover:text-[#1E56A0] text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 text-[#737373] text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#1E56A0]/10 text-[#1E56A0] px-3 py-1 rounded-full text-xs font-semibold">
                <Tag className="w-3 h-3" />
                {categoryLabels[article.category] || article.category}
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl font-bold text-[#0F2B57] tracking-[-0.02em] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <FadeUp>
            <div className="space-y-6">
              {article.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-[#525252] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <FadeUp>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0F2B57] mb-8 tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Related Articles
              </h2>
            </FadeUp>
            <div className="space-y-4">
              {related.map((item, i) => (
                <FadeUp key={item.slug} delay={i * 0.08}>
                  <Link
                    to={`/news/${item.slug}`}
                    className="group block bg-white p-6 rounded-xl border border-[#E5E5E5]/60 shadow-sm hover:shadow-lg hover:shadow-[#1E56A0]/5 transition-[box-shadow] duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#737373] uppercase tracking-wider">
                        {item.date}
                      </span>
                      <span className="text-xs text-[#1E56A0] font-medium">
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#0F2B57] group-hover:text-[#1E56A0] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center text-[#1E56A0] font-semibold text-sm gap-2 group-hover:gap-3 transition-[gap]">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#1E56A0] py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See What Real-Time Monitoring Looks Like
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Schedule a pilot configured for your specific use case
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#1E56A0] hover:bg-white/90 shadow-md transition-colors">
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 hover:border-white hover:bg-white/10 text-white transition-colors">
                <Link to="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
