import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import cochlearNexaImage from "@/assets/news-events/cochlear-nexa-system.png";

const CochlearNexaSystem = () => {
  return (
    <Layout>
      <PageHero
        title="Cochlear Nucleus Nexa System"
        subtitle="A new generation of smart cochlear implant technology"
        backgroundImage={cochlearNexaImage}
      />

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Events
            </Link>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              April 2026
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              The world&apos;s first smart cochlear implant system
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Cochlear has introduced the Nucleus Nexa System, positioned as
                the world&apos;s first and only smart cochlear implant system.
                The platform combines the Nucleus Nexa Implant with Nucleus 8
                Nexa and Kanso 3 Nexa sound processor options.
              </p>
              <p>
                Key highlights include responsive hearing technology, a
                connected ecosystem of care, and a future-ready architecture
                designed to access new innovations through firmware updates.
              </p>
              <p>
                The system also emphasizes long-term continuity by storing
                unique hearing information on the implant itself, helping
                support personalized care pathways over time.
              </p>
            </div>

            <div className="mt-8">
              <img
                src={cochlearNexaImage}
                alt="Cochlear Nucleus Nexa implant and sound processors"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            <div className="mt-8">
              <a
                href="https://www.cochlear.com/us/en/home/products-and-accessories/nucleus-nexa-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Read official product page <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CochlearNexaSystem;
