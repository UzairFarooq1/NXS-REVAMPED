import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import csrImg from "@/assets/csr.jpg";
import wegoLogo from "@/assets/partners/wego.png";
import baxterGambroLogo from "@/assets/partners/baxter-gambro.png";

// Product images
import mixLiteImg from "@/assets/products/mix-lite.jpg";
import mixMaestroImg from "@/assets/products/mix-maestro.jpg";
import wegoDialyzerImg from "@/assets/products/wego-dialyzer.jpg";
import wegoFistulaNeedleImg from "@/assets/products/wego-fistula-needle.jpg";
import wegoBloodCircuitImg from "@/assets/products/wego-blood-circuit.jpg";

interface Product {
  name: string;
  description: string;
  image?: string;
}

interface Category {
  id: string;
  label: string;
  intro: string;
  partnerLogo?: string;
  partnerName?: string;
  products: Product[];
  moreLink?: string;
}

const categories: Category[] = [
  {
    id: "machines",
    label: "Hemodialysis Machine",
    intro:
      "WEGO Healthcare offers a comprehensive range of hemodialysis machines designed to meet the clinical needs of modern dialysis centres. Co-developed with the Institute of Automation of the Chinese Academy of Sciences and Germany's D.med Company, the MIX series was honoured with the 2024 French Design Award. These machines feature advanced multi-touch interfaces, dual arterial pressure monitoring, and multiple treatment profiles for personalised therapy.",
    partnerLogo: wegoLogo,
    partnerName: "WEGO Healthcare",
    products: [
      {
        name: "MIX Maestro Dialysis System",
        description:
          "The MIX Maestro combines ease of operation with powerful functionality. Its Dynamic Substitution Fluid Adjustment System intelligently calculates and adjusts substitution fluid volume, enhancing toxin clearance efficiency. The ADAS (Automated Dialysis Assistance System) automatically performs online priming, blood drawing, blood return, and fluid discharge, significantly reducing clinical workload.",
        image: mixMaestroImg,
      },
      {
        name: "MIX Lite Dialysis System",
        description:
          "Guided by the philosophy of 'Quality Illuminates Life,' the MIX Lite delivers simplistic yet extraordinary performance. Features include multi-touch technology, dual arterial pressure monitoring, multiple treatment profiles, and data communication capabilities. Optional modules include online clearance monitoring (Kt/V), automatic blood pressure monitoring, and online blood volume monitoring.",
        image: mixLiteImg,
      },
    ],
  },
  {
    id: "consumables",
    label: "Hemodialysis Consumables",
    intro:
      "WEGO Healthcare manufactures and supplies all the consumables required for efficient dialysis treatment. From blood circuits to fistula needles, WEGO also supplies dialyzers and dialyzing solutions for accurate and safe patient treatment.",
    partnerLogo: wegoLogo,
    partnerName: "WEGO Healthcare",
    products: [
      {
        name: "Hollow Fiber Dialyzers (Low Flux High Performance)",
        description:
          "WEGO's polysulfone hollow fiber dialyzers feature a 40μm wall thickness with 200μm inner diameter. Available in HF17 (1.7m²), HF19 (1.9m²), HF20 (2.0m²), and HF21 (2.1m²) effective surface areas. Designed for enhanced phosphate clearance to address CKD-MBD, with radiation sterilization and polycarbonate housing.",
        image: wegoDialyzerImg,
      },
      {
        name: "A.V. Fistula Needle Sets",
        description:
          "Available in 15G, 16G, and 17G gauges with 25mm and 32mm needle lengths. Features rotary wing design for easy manipulation and improved blood flow through multi-directional shunting. Available with back eye, clamp, and 300mm tube length in both fixed and rotary wing configurations.",
        image: wegoFistulaNeedleImg,
      },
      {
        name: "Extracorporeal Blood Circuits",
        description:
          "Over ten models compatible with most dialysis machines on the market. Features include a wide range of accessories such as infusion lines, pre-fill connectors, and waste bags. Double lateral branch waste bag design standardizes pre-fill operations. CE certified and CFDA approved.",
        image: wegoBloodCircuitImg,
      },
    ],
  },
  {
    id: "crrt",
    label: "CRRT",
    intro:
      "Baxter's Continuous Renal Replacement Therapy (CRRT) solutions are designed for critically ill patients with acute kidney injury (AKI), providing continuous, gentle, and effective blood purification. Baxter offers advanced CRRT machines, such as the Prismaflex and PrisMax systems, which deliver customizable therapy options, ensuring optimal fluid and toxin removal while maintaining hemodynamic stability. These systems support various treatment modalities, including CVVH, CVVHD, and CVVHDF, allowing healthcare professionals to tailor treatments based on patient needs.",
    partnerLogo: baxterGambroLogo,
    partnerName: "Baxter Gambro",
    products: [],
  },
  {
    id: "peritoneal",
    label: "Peritoneal Dialysis",
    intro:
      "Baxter has been a pioneer in Peritoneal Dialysis (PD) since introducing the first PD solution in 1960, continuously advancing home dialysis solutions to improve patient outcomes. PD allows patients with End-Stage Renal Disease (ESRD) to maintain independence and a better quality of life while offering potentially improved clinical outcomes at a lower cost than hemodialysis. Baxter's comprehensive PD portfolio includes innovative solutions like Automated Peritoneal Dialysis (APD) with Remote Patient Management (RPM), enabling real-time monitoring to enhance care and reduce hospitalizations.",
    partnerLogo: baxterGambroLogo,
    partnerName: "Baxter Gambro",
    products: [],
  },
];

const RenalCare = () => {
  const [activeTab, setActiveTab] = useState("machines");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Renal Care"
        subtitle="Comprehensive dialysis equipment and renal care solutions for kidney disease management"
        backgroundImage={csrImg}
      />

      {/* Tabs */}
      <section className="bg-muted/50 border-b">
        <div className="container">
          <div className="flex overflow-x-auto -mb-px justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`whitespace-nowrap px-6 py-4 text-sm font-heading font-semibold border-b-2 transition-colors ${
                  activeTab === cat.id
                    ? "border-secondary text-secondary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category content */}
      <section className="py-16">
        <div className="container">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            {/* Intro with partner logo */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-14">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {activeCategory.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {activeCategory.intro}
                </p>
              </div>
              {activeCategory.partnerLogo ? (
                <img
                  src={activeCategory.partnerLogo}
                  alt={activeCategory.partnerName}
                  className="w-40 h-auto object-contain flex-shrink-0"
                />
              ) : activeCategory.partnerName ? (
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary tracking-wide">
                    {activeCategory.partnerName}
                  </span>
                </div>
              ) : null}
            </div>

            {activeCategory.products.length > 0 && (
              <div className="space-y-10">
                {activeCategory.products.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center"
                  >
                    {product.image && (
                      <div className="w-full md:w-56 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-auto object-contain rounded-lg max-h-48"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* More info link */}
            {activeCategory.moreLink && (
              <div className="mt-12 text-center">
                <a
                  href={activeCategory.moreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
                >
                  More Info <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default RenalCare;
