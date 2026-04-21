import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import wegoKracon1 from "@/assets/news-events/wego-kracon-1.png";
import wegoKracon2 from "@/assets/news-events/wego-kracon-2.png";
import wegoKracon3 from "@/assets/news-events/wego-kracon-3.png";
import wegoKracon4 from "@/assets/news-events/wego-kracon-4.png";
import wegoKracon5 from "@/assets/news-events/wego-kracon-5.png";

const WegoKracon2025 = () => {
  return (
    <Layout>
      <PageHero
        title="NXS x WEGO at KRACON 2025"
        subtitle="Advancing renal care with innovation and compassion"
        backgroundImage={wegoKracon5}
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
              8-11 October 2025
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Showcasing next-generation dialysis technology in Mombasa
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                NXS, in partnership with WEGO Blood Purification Business Group,
                was honored to participate in the 22nd Annual Scientific
                Conference of the Kenya Renal Association in Mombasa.
              </p>
              <p>
                At this important event, WEGO showcased the next-generation MIX
                Series Dialysis Machine, designed to simplify dialysis
                procedures, enhance clinical efficiency, and improve patient
                care outcomes in day-to-day renal practice.
              </p>
              <p>
                The technology attracted significant attention and became one of
                the highlights of the exhibition, reflecting strong momentum for
                patient-centered innovation in renal care.
              </p>
              <p>
                NXS and WEGO remain committed to advancing renal care with
                reliable, compassionate, and practical solutions for dialysis
                centers across Kenya and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <img
                src={wegoKracon1}
                alt="Visitors engaging with WEGO MIX dialysis machine at KRACON"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={wegoKracon2}
                alt="NXS team explaining dialysis technology to conference attendees"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={wegoKracon3}
                alt="KRACON participants at the WEGO exhibition stand"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={wegoKracon4}
                alt="Hands-on demonstration of MIX Series dialysis system features"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={wegoKracon5}
                alt="Crowd engagement at NXS and WEGO booth during KRACON 2025"
                className="w-full h-auto rounded-xl object-cover md:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WegoKracon2025;
