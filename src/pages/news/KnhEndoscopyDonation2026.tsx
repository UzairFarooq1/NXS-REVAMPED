import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import knhDonation1 from "@/assets/news-events/knh-endoscopy-donation-1.jpg";
import knhDonation2 from "@/assets/news-events/knh-endoscopy-donation-2.jpg";
import knhDonation3 from "@/assets/news-events/knh-endoscopy-donation-3.jpg";
import knhDonation4 from "@/assets/news-events/knh-endoscopy-donation-4.jpg";
import knhDonation7 from "@/assets/news-events/knh-endoscopy-donation-7.jpg";

const KnhEndoscopyDonation2026 = () => {
  return (
    <Layout>
      <PageHero
        title="NXS Donates Endoscopy Equipment to Kenyatta National Hospital"
        subtitle="Supporting continued endoscopic training and patient care through the Olympus Emerging Markets Initiative"
        backgroundImage={knhDonation3}
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
              23 October 2026
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Strengthening endoscopy training at KNH through the Olympus
              Emerging Markets Initiative
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Nairobi X-Ray Supplies Ltd (NXS) has proudly served as the
                distributor of Olympus endoscopic and surgical equipment in
                Kenya since 2004. As part of our commitment to advancing
                healthcare, we donated Olympus endoscopy equipment to
                Kenyatta National Hospital (KNH), through the "Emerging
                Markets Initiative" launched by Olympus, during a ceremony
                marked by a ribbon-cutting at the hospital's Endoscopy Unit.
              </p>
              <p>
                KNH has long served as a training ground for endoscopists in
                Kenya and the wider region. As a referral hospital with a
                high volume of patients requiring specialised treatment, its
                Endoscopy Department also functions as the WEO/WGO
                authorised Nairobi Gastro Training Centre, welcoming
                world-renowned endoscopists to train local doctors.
              </p>
              <p>
                We, together with Olympus, have partnered with KNH for over
                20 years in supporting high-end endoscopic training. This
                donation draws on Olympus' "Emerging Markets Initiative,"
                launched to
                address a common challenge across Sub-Saharan Africa: donated
                or procured equipment that falls out of service due to
                limited funding for repairs and maintenance, disrupting both
                patient care and training.
              </p>
              <p>
                To address this directly, the donated equipment is tied to a
                3-year comprehensive service contract between us and
                Olympus, valued approximately KSh 18 million
                in total equipment value. This ensures high uptime and
                reliability, minimizing downtime so that patients continue to
                receive timely, effective care and training at the centre
                continues uninterrupted.
              </p>
              <p>
                As long-term partners with Kenyatta National Hospital, we
                remain proud to continue supporting the institution's role
                in advancing endoscopy skills and standards across the
                region.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <img
                src={knhDonation1}
                alt="Dignitaries arriving at Kenyatta National Hospital for the endoscopy equipment handover"
                className="w-full h-auto rounded-xl object-cover md:col-span-2"
              />
              <img
                src={knhDonation2}
                alt="Ribbon-cutting ceremony at the KNH endoscopy unit"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={knhDonation3}
                alt="NXS and partners group photo outside Kenyatta National Hospital"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={knhDonation4}
                alt="Handover of donation certificate to Kenyatta National Hospital representatives"
                className="w-full h-auto rounded-xl object-cover"
              />
              <img
                src={knhDonation7}
                alt="Demonstration of the donated Olympus endoscopy equipment at KNH"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KnhEndoscopyDonation2026;
