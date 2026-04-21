import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import spirationValve1 from "@/assets/news-events/spiration-valve-1.png";
import spirationValve2 from "@/assets/news-events/spiration-valve-2.png";
import spirationValve3 from "@/assets/news-events/spiration-valve-3.png";
import spirationValve4 from "@/assets/news-events/spiration-valve-4.png";
import spirationValve5 from "@/assets/news-events/spiration-valve-5.png";

const SpirationValveAfrica = () => {
  return (
    <Layout>
      <PageHero
        title="Love for Lungs"
        subtitle="Celebrating Africa's first Spiration Valve recipient in Nairobi"
        backgroundImage={spirationValve5}
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
              April 2026
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              A pioneering milestone in interventional pulmonology
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A week ago, this milestone was marked by the recovery of a
                patient following multi-valve placement surgery in her lungs.
                It was a moment of celebration for Nairobi X-Ray Supplies Ltd
                and Olympus Medical Systems EMEA, as she became the first
                recipient of the Spiration Valve in Africa.
              </p>
              <p>
                Beyond this achievement, the week also celebrated the continued
                charitable work of Naveed Merali and Sammy Onyancha, who for
                the second year running carried out a full week of
                interventional pulmonology surgeries in Nairobi, helping many
                patients lead better lives.
              </p>
              <p>
                It was truly a celebration of love for lungs, made possible by
                the unstinting support of Julia Schlette, Bahaa Halwany, and
                the wider OMETA team, both on-site and off-site.
              </p>
              <p>
                NXS remains committed to bringing cutting-edge technologies that
                heal, while supporting clinicians and care teams who use these
                technologies to improve patient outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <img
                src={spirationValve1}
                alt="Training and interventional pulmonology team at an Olympus-supported session"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={spirationValve2}
                alt="Clinical and partner representatives during respiratory care milestone event"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={spirationValve3}
                alt="Hands-on demonstration supporting pulmonary intervention procedures"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={spirationValve4}
                alt="Close-up of a Spiration Valve used in the intervention programme"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={spirationValve5}
                alt="Pulmonology team performing live bronchoscopic intervention"
                className="w-full h-auto rounded-xl object-cover md:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpirationValveAfrica;
