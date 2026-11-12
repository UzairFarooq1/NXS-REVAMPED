import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import news from "@/assets/news.jpg";
import { newsItems } from "@/data/news";

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const News = () => {
  return (
    <Layout>
      <PageHero
        title="News & Events"
        subtitle="Stay updated with the latest from NXS and the healthcare technology industry"
        backgroundImage={news}
      />

      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {newsItems.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(item.date)}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
