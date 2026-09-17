import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import ksaConference1 from "@/assets/news-events/ksa-2026-conference-1.jpg";
import ksaConference2 from "@/assets/news-events/ksa-2026-conference-2.jpg";

const Ksa2026Conference = () => {
  return (
    <Layout>
      <PageHero
        title="NXS at the 33rd KSA Annual Scientific Conference"
        subtitle="Showcasing GE HealthCare technology in Mombasa"
        backgroundImage={ksaConference2}
      />

      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Events
            </Link>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              19-21 August 2026
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Partnering with GE HealthCare at the 33rd KSA Annual Scientific
              Conference
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                NXS took part in the 33rd Kenya Surgical Association (KSA)
                Annual Scientific Conference, held from 19th to 21st August
                2026 at Sarova Whitesands Beach Resort & Spa, Mombasa.
              </p>
              <p>
                Alongside GE HealthCare, our team showcased a range of
                critical care and anesthesia solutions, including advanced
                patient monitoring systems and anesthesia machines, giving
                delegates a hands-on look at technologies built to support
                better clinical decisions and improved patient outcomes.
              </p>
              <p>
                The conference brought together surgeons and healthcare
                professionals from across Kenya, providing a valuable
                platform for NXS to engage directly with the clinical
                community and reinforce our long-standing partnership with
                GE HealthCare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <img
                src={ksaConference2}
                alt="NXS and GE HealthCare team at the KSA 2026 conference booth"
                className="w-full h-auto rounded-xl object-cover md:col-span-2"
              />
              <img
                src={ksaConference1}
                alt="NXS and GE HealthCare exhibition booth at KSA 2026"
                className="w-full h-auto rounded-xl object-cover md:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ksa2026Conference;
