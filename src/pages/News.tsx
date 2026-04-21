import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import news from "@/assets/news.jpg";

const newsItems = [
  {
    date: "2026-04-21",
    title: "NXS Engineers Participate in Endoscopy Skills Training",
    excerpt:
      "At the Surgical Society of Kenya Annual Conference pre-workshop, our engineer joined hands-on endoscopy training alongside clinical leaders, reinforcing our commitment to delivering the best service through continuous engineer training.",
    category: "Training",
    link: "/news/endoscopy-training-society-of-kenya-2026",
  },
  {
    date: "2026-01-20",
    title: "The Gift of Hearing: 56 Cochlear Recipients Switched On",
    excerpt:
      "NXS and Cochlear, together with audiology teams from Kenyatta National Hospital and Moi Teaching and Referral Hospital, completed switch-on for 56 recipients supported by Lalaa Asmaa Foundation and Kenya's First Lady's charitable initiative.",
    category: "Event",
    link: "/news/cochlear-switch-on-56-recipients",
  },
  {
    date: "2025-11-27",
    title: "Olympus and NXS Advance Bronchoscopy Training at KNH",
    excerpt:
      "Guided by our long-standing mindset of innovation through education and training, Olympus Corporation (OMETA) and NXS supported a three-day bronchoscopy and EBUS programme at Kenyatta National Hospital, strengthening local clinical and engineering capability for better patient outcomes.",
    category: "Training",
    link: "/news/bronchoscopy-ebus-training-knh-2025",
  },
  {
    date: "2025-10-11",
    title: "NXS and WEGO Showcase MIX Dialysis Innovation at KRACON 2025",
    excerpt:
      "In partnership with WEGO Blood Purification Business Group, NXS participated in the Kenya Renal Association Annual Scientific Conference in Mombasa, where the next-generation MIX Series Dialysis Machine drew strong interest for its patient-centered and efficiency-focused design.",
    category: "Conference",
    link: "/news/wego-kracon-2025",
  },
  {
    date: "2026-06-12",
    title: "Cochlear Introduces the Nucleus Nexa Smart Implant System",
    excerpt:
      "Cochlear has introduced the Nucleus Nexa System, described as the world's first and only smart cochlear implant system, combining internal memory, connected care, and future-ready firmware updates to support long-term hearing outcomes.",
    category: "Innovation",
    link: "/news/cochlear-nucleus-nexa-system",
  },
  {
    date: "2025-06-9",
    title: "First Spiration Valve Recipient in Africa Treated in Nairobi",
    excerpt:
      "NXS and Olympus Medical Systems EMEA reached a major milestone with Africa's first Spiration Valve recipient, while supporting a week of charitable pulmonology interventional surgeries in Nairobi through expert collaboration and on-site technical support.",
    category: "Milestone",
    link: "/news/spiration-valve-first-recipient-africa",
  },
  {
    date: "2025-04-11",
    title: "NXS Showcases GE Critical Care Monitoring at CCSK 2025",
    excerpt:
      "At the CCSK Conference, NXS presented GE HealthCare's advanced monitoring portfolio, including CARESCAPE Canvas and B155M systems, with hands-on demonstrations focused on faster clinical decisions and improved patient outcomes.",
    category: "Conference",
    link: "/news/ccsk-ge-monitoring-2025",
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
