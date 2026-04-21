import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import endoscopyTraining1 from "@/assets/news-events/endoscopy-training-1.png";
import endoscopyTraining2 from "@/assets/news-events/endoscopy-training-2.png";

const EndoscopyTraining2026 = () => {
  return (
    <Layout>
      <PageHero
        title="Endoscopy Training 2026"
        subtitle="Building surgical capability and strengthening technical support"
        backgroundImage={endoscopyTraining1}
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
              21 April 2026
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Training the next generation, while training our own engineers
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                NXS is excited to support the upcoming Surgical Society of Kenya
                Annual Conference and pre-conference endoscopy training sessions
                made possible by generous sponsors Proximie and Olympus.
              </p>
              <p>
                The programme features an outstanding faculty of surgical
                leadership, including Dr. Michael Mwachiro, Dr. Lance Mayabi,
                Dr. B.N. Njihia (MBChB, FACS), Dr. Ramadhani Omari Abdalla, and
                Dr. Wycliffe Kaisha, helping equip the next generation of
                surgeons with practical, high-impact skills.
              </p>
              <p>
                Importantly, one of our engineers also participated in the
                training. At NXS, we continuously train our engineers so we can
                provide the best possible service to hospitals and clinicians,
                from setup and troubleshooting to long-term endoscopy system
                support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <img
                src={endoscopyTraining1}
                alt="Hands-on endoscopy training session with NXS engineer participation"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={endoscopyTraining2}
                alt="Training venue prepared for Surgical Society of Kenya conference workshop"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EndoscopyTraining2026;
