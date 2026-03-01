import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import news from "@/assets/news.jpg";

const newsItems = [
  {
    date: "2025-01-15",
    title: "NXS Introduces Sony Medical Printing Solutions",
    excerpt:
      "Nairobi X-Ray Supplies is proud to announce the introduction of the latest Sony medical printers including the UPC-21 series for endoscopy and ultrasound documentation.",
    category: "Product Launch",
  },
  {
    date: "2024-11-20",
    title: "GE CARESCAPE ONE Platform Now Available",
    excerpt:
      "The next-generation GE CARESCAPE ONE monitoring platform is now available through NXS, offering advanced patient monitoring with seamless connectivity.",
    category: "Product Launch",
  },
  {
    date: "2024-09-10",
    title: "Trumpf Medical LED Lighting Upgrade Programme",
    excerpt:
      "NXS launches a comprehensive operating theatre lighting upgrade programme, helping hospitals transition from halogen to energy-efficient Trumpf LED surgical lights.",
    category: "Programme",
  },
  {
    date: "2024-07-05",
    title: "Annual Biomedical Engineering Workshop",
    excerpt:
      "NXS successfully hosted its annual biomedical engineering workshop, training over 50 hospital technicians on maintenance best practices for medical equipment.",
    category: "Event",
  },
  {
    date: "2024-05-18",
    title: "Leica M530 OH6 Installed at Leading Neurosurgery Centre",
    excerpt:
      "NXS completed the installation of the Leica M530 OH6 surgical microscope at a leading neurosurgery centre in Nairobi, enhancing fluorescence-guided surgery capabilities.",
    category: "Installation",
  },
  {
    date: "2024-03-22",
    title: "Partnership with Nipro Expands Renal Care Coverage",
    excerpt:
      "NXS expands its renal care offering through a strengthened partnership with Nipro, increasing dialysis equipment availability across East Africa.",
    category: "Partnership",
  },
];

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
                <Button
                  variant="link"
                  className="p-0 h-auto font-heading font-semibold text-primary"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
