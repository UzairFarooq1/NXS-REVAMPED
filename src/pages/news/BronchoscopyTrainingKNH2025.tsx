import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import bronchoscopyTraining1 from "@/assets/news-events/bronchoscopy-training-1.png";
import bronchoscopyTraining2 from "@/assets/news-events/bronchoscopy-training-2.png";
import bronchoscopyTraining3 from "@/assets/news-events/bronchoscopy-training-3.png";
import bronchoscopyTraining4 from "@/assets/news-events/bronchoscopy-training-4.png";
import bronchoscopyTraining5 from "@/assets/news-events/bronchoscopy-training-5.png";

const BronchoscopyTrainingKNH2025 = () => {
  return (
    <Layout>
      <PageHero
        title="Bronchoscopy & EBUS Training at KNH"
        subtitle="Spearheading MedTech innovation through education and training"
        backgroundImage={bronchoscopyTraining5}
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
              25-27 November 2025
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Empowering clinicians, transforming care in Kenya
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Spearheading innovative technology through education and
                training has long been a constant mindset for NXS in our MedTech
                journey. Olympus Corporation (OMETA) and Nairobi X-Ray Supplies
                Ltd remain committed to transforming healthcare practice in
                Kenya by supporting local and international training programmes.
              </p>
              <p>
                From 25-27 November 2025, experts from Nagasaki University led
                hands-on bronchoscopy and EBUS training at Kenyatta National
                Hospital (KNH), bringing together local clinicians, nurses, and
                engineers for an intensive three-day programme.
              </p>
              <p>
                The programme opened with a ceremony attended by Kenya&apos;s
                Deputy Minister of Health, Dr. Ouma Oluga, the Ambassador of
                Japan to Kenya, H.E. Hiroshi Matsuura, and KNH CEO, Dr. Richard
                Lesiyampe. Discussions highlighted the critical role of lung
                cancer diagnostics and bronchoscopic medicine, and the
                importance of sustainable local capacity-building.
              </p>
              <p>
                In collaboration with Olympus and our local and international
                partners, NXS provided equipment and technical support to help
                strengthen long-term bronchoscopy standards and better patient
                care outcomes in Kenya and across Africa.
              </p>
              <p>
                We thank Daisuke Seki, Bahaa Halwany, and Donald Onyango from
                OMETA, as well as our valued partners: Respiratory Society of
                Kenya, Kenyatta National Hospital, Dr. Jacqueline Wanjiku
                Kagima, Dr. Andrew Owuor, the Endoscopy Department at KNH, and
                the Nagasaki University team. The NXS team was also recognized
                for its steady, efficient, and best-in-class support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <img
                src={bronchoscopyTraining1}
                alt="Clinicians participating in bronchoscopy training at KNH"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={bronchoscopyTraining2}
                alt="Delegates and hospital leadership during bronchoscopy training event"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={bronchoscopyTraining3}
                alt="Hands-on endoscopy practical training session at KNH"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={bronchoscopyTraining4}
                alt="Group photo of local and international bronchoscopy training partners"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={bronchoscopyTraining5}
                alt="Live bronchoscopic procedure training with clinical team"
                className="w-full h-auto rounded-xl object-cover md:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BronchoscopyTrainingKNH2025;
