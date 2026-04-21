import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import cochlearSwitchOn1 from "@/assets/news-events/cochlear-switch-on-1.png";
import cochlearSwitchOn2 from "@/assets/news-events/cochlear-switch-on-2.png";
import cochlearSwitchOn3 from "@/assets/news-events/cochlear-switch-on-3.png";

const CochlearSwitchOn = () => {
  return (
    <Layout>
      <PageHero
        title="The Gift of Hearing"
        subtitle="Switch-on completed for 56 cochlear implant recipients"
        backgroundImage={cochlearSwitchOn3}
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
              January 2026
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Cochlear and NXS celebrate 56 life-changing activations
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Cochlear and Nairobi X-Ray Supplies Ltd, together with our
                audiological partners Joseph Ayieko, Hellen Otunga, Angela
                Kiragu, the Kenyatta National Hospital Audiology team led by
                Isaac and Nancy, and the Moi Teaching and Referral Hospital
                team, completed the switch-on of all 56 recipients who received
                this life-changing technology.
              </p>
              <p>
                The programme was delivered through the Lalaa Asmaa Foundation
                of Morocco in collaboration with Kenya&apos;s First Lady&apos;s
                charitable organisation. For NXS, Cochlear remains a gift we
                are proud to be part of.
              </p>
              <p>
                For over a decade, we have witnessed how this technology brings
                immediate hope and life-changing possibilities to recipients and
                their families, changing the world of silence forever.
              </p>
              <p>
                We are excited and humbled to be part of these children&apos;s
                futures. The implant surgeries took place in November 2025 and
                the switch-on sessions were completed in January 2026.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <img
                src={cochlearSwitchOn1}
                alt="NXS and clinical team during cochlear switch-on session"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={cochlearSwitchOn2}
                alt="Young recipient wearing cochlear device during follow-up"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            <div className="mt-6">
              <img
                src={cochlearSwitchOn3}
                alt="Families and clinical team marking successful switch-on event"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CochlearSwitchOn;
