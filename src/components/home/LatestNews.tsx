import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { formatNewsDate, latestNews } from "@/data/news";
import { cn } from "@/lib/utils";

/** Bento layout: one featured story and two supporting ones. */
const LatestNews = () => {
  const [featured, ...rest] = latestNews(3);

  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-heading font-semibold uppercase tracking-[0.25em] text-primary">
              News & events
            </p>
            <h2 className="text-3xl font-heading font-bold leading-tight text-foreground md:text-5xl">
              Latest from NXS
            </h2>
          </div>
          <Link
            to="/news"
            className="group inline-flex items-center gap-2 self-start rounded-full border px-5 py-2.5 text-sm font-heading font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground md:self-auto"
          >
            All news
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
          {[featured, ...rest].map((item, i) => {
            const isFeatured = i === 0;
            return (
              <motion.div
                key={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={cn(isFeatured && "lg:row-span-2")}
              >
                <Link
                  to={item.link}
                  className={cn(
                    "group relative flex h-full overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10",
                    isFeatured ? "min-h-[420px] flex-col" : "min-h-[200px] flex-col sm:flex-row",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      isFeatured ? "h-64 lg:h-auto lg:flex-1" : "h-48 sm:h-auto sm:w-2/5",
                    )}
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className={cn("flex flex-1 flex-col p-6", isFeatured && "lg:p-8")}>
                    <time
                      dateTime={item.date}
                      className="mb-2 text-xs font-medium text-muted-foreground"
                    >
                      {formatNewsDate(item.date)}
                    </time>
                    <h3
                      className={cn(
                        "mb-3 font-heading font-bold leading-snug text-foreground transition-colors group-hover:text-primary",
                        isFeatured ? "text-2xl" : "text-lg",
                      )}
                    >
                      {item.title}
                    </h3>
                    {isFeatured && (
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {item.excerpt}
                      </p>
                    )}
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary">
                      Read story
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
