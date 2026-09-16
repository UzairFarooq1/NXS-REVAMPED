import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Download } from "lucide-react";
import IsoCertifiedBadge from "@/components/IsoCertifiedBadge";
import isoCertificateImage from "@/assets/news-events/iso-13485-2016-certificate.jpg";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const IsoCertification2026 = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <Layout>
      <PageHero
        title="NXS Achieves ISO 13485:2016 Certification"
        subtitle="A milestone in our commitment to quality-managed medical device distribution and support"
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
              16 September 2026
            </div>

            <div className="flex items-center gap-4 mb-8 bg-primary/5 border border-primary/10 rounded-xl p-5">
              <IsoCertifiedBadge className="h-16 w-16 flex-shrink-0" />
              <div>
                <p className="font-heading font-semibold text-foreground">
                  ISO 13485:2016 Certified
                </p>
                <p className="text-sm text-muted-foreground">
                  Certificate No. 26UMAM62 &middot; Assurance Quality
                  Certification LLC (AQC)
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Nairobi X-Ray Supplies Ltd is now ISO 13485:2016 certified
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We are proud to announce that Nairobi X-Ray Supplies Ltd
                (NXS) has been assessed and certified to ISO 13485:2016, the
                internationally recognized standard for Medical Device
                Quality Management Systems. The certification was awarded on
                16 September 2026 by Assurance Quality Certification LLC
                (AQC), under United Accreditation Foundation (UAF)
                accreditation and recognized through the International
                Accreditation Forum (IAF) Multilateral Recognition
                Arrangement.
              </p>
              <p>
                The certification covers the full scope of our operations:
                sales, distribution, installation, preventive and corrective
                maintenance, servicing, and technical support of medical
                equipment and consumables.
              </p>
              <p>
                This achievement formalizes the quality standards NXS has
                built over decades of serving hospitals and healthcare
                providers across East Africa, and reflects our continued
                investment in structured processes, traceability, and
                consistent service quality across every stage of the medical
                equipment lifecycle.
              </p>
            </div>

            {/* <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-card border rounded-xl p-4">
                <p className="text-muted-foreground">Certificate No.</p>
                <p className="font-heading font-semibold text-foreground">
                  26UMAM62
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <p className="text-muted-foreground">Initial Registration</p>
                <p className="font-heading font-semibold text-foreground">
                  16 September 2026
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <p className="text-muted-foreground">1st Surveillance Due</p>
                <p className="font-heading font-semibold text-foreground">
                  16 August 2027
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <p className="text-muted-foreground">Date of Expiry</p>
                <p className="font-heading font-semibold text-foreground">
                  15 September 2029
                </p>
              </div>
            </div> */}

            <div className="mt-10">

              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="block max-w-sm mx-auto sm:mx-0 border rounded-xl overflow-hidden bg-card cursor-zoom-in"
              >
                <img
                  src={isoCertificateImage}
                  alt="NXS ISO 13485:2016 Certificate of Registration"
                  className="w-full h-auto"
                />
              </button>
              <div className="mt-4">
                <a
                  href="/documents/NXS-ISO-13485-2016-Certificate.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>

              <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogContent className="max-w-3xl p-2 bg-transparent border-none shadow-none">
                  <DialogTitle className="sr-only">
                    NXS ISO 13485:2016 Certificate of Registration
                  </DialogTitle>
                  <img
                    src={isoCertificateImage}
                    alt="NXS ISO 13485:2016 Certificate of Registration"
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IsoCertification2026;
