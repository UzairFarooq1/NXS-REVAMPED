import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import ccskMonitoring from "@/assets/news-events/ccsk-ge-monitoring-2025.png";

const CcskGeMonitoring2025 = () => {
  return (
    <Layout>
      <PageHero
        title="NXS at CCSK Conference 2025"
        subtitle="Showcasing advanced GE critical care monitoring solutions"
        backgroundImage={ccskMonitoring}
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
              9-11 April 2025
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Exciting days ahead at CCSK
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Nairobi X-Ray Supplies Ltd was proud to be part of the CCSK
                Conference, a key event for critical care practitioners.
              </p>
              <p>
                At Booth B10, NXS showcased GE HealthCare&apos;s advanced
                monitoring solutions, including the CARESCAPE Canvas and B155M
                systems, designed to support confident clinical decisions and
                better patient outcomes.
              </p>
              <p>
                The event created an excellent platform for insightful
                conversations and hands-on interaction with the latest
                monitoring technology for acute and critical care environments.
              </p>
            </div>

            <div className="mt-8">
              <img
                src={ccskMonitoring}
                alt="GE HealthCare critical care monitoring solutions showcased at CCSK"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CcskGeMonitoring2025;
