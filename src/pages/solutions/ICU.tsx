import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import icuImg from "@/assets/icu-monitoring.avif";
import geLogo from "@/assets/partners/ge-healthcare.png";

// Product images
import carescapeCanvas from "@/assets/products/carescape-canvas.jpg";
import carescapeOne from "@/assets/products/carescape-one.png";
import b1x5mMonitor from "@/assets/products/b1x5m-monitor.png";
import portraitVsm from "@/assets/products/portrait-vsm.png";
import centralStation from "@/assets/products/carescape-central-station.jpg";

interface Product {
  name: string;
  description: string;
  image?: string;
  link?: string;
}

interface Category {
  id: string;
  label: string;
  intro: string;
  products: Product[];
  moreLink?: string;
}

const categories: Category[] = [
  {
    id: "patient-monitors",
    label: "Patient Monitors",
    intro:
      "Informed decisions start with accurate data. From ambulatory patients to the most critical cases, GE Healthcare's monitoring technologies deliver clinical information you can trust. With world-class algorithms for arrhythmia, temperature, NIBP, SpO2, and more, our solutions deliver insights to help you identify, anticipate, and treat patient needs to the best of your ability, across the continuum of care.",
    products: [
      {
        name: "CARESCAPE Canvas™ Monitoring Platform",
        description:
          "CARESCAPE Canvas is a unified monitoring approach for your entire hospital ecosystem. It offers individualized monitoring of patients and bed-specific scalable levels of acuity while retaining the same intuitive user experience everywhere.",
        image: carescapeCanvas,
        link: "https://www.gehealthcare.com/products/patient-monitoring",
      },
      {
        name: "CARESCAPE™ ONE Monitor — All in ONE",
        description:
          "The CARESCAPE ONE monitor helps make patient transport almost effortless. A large screen highlights a slim, lightweight unit that travels on a simple bed mount. Parameters are easily added through miniaturized plug-and-play micro-modules. World-class GE Healthcare algorithms provide precision, accuracy, and specificity.",
        image: carescapeOne,
        link: "https://www.gehealthcare.com/products/patient-monitoring",
      },
      {
        name: "B1X5M Patient Monitor Systems",
        description:
          "The B1x5M range of patient monitors deliver excellent performance for inpatient monitoring while providing exceptional value. It provides accurate and timely medical data, powering enhanced care for patients across care areas.",
        image: b1x5mMonitor,
        link: "https://www.gehealthcare.com/products/patient-monitoring",
      },
      {
        name: "Portrait™ VSM Vital Signs Monitor",
        description:
          "Building on the trusted DINAMAP legacy with innovative and future-focused capabilities, the Portrait VSM vital signs monitor provides measurements you can count on while increasing patient comfort and efficiency. Automated workflow and customization options simplify your patient admissions, routine spot checks and observations — giving you more time with patients.",
        image: portraitVsm,
        link: "https://www.gehealthcare.com/products/patient-monitoring",
      },
    ],
  },
  {
    id: "central-station",
    label: "Central Station",
    intro:
      "Designed for space optimization and workflow efficiency, the CARESCAPE™ Central Station transforms an ordinary centralization into a clinician-centric workstation. By integrating monitoring and historical data from multiple sources, it helps you make fast, confident decisions, all in an efficient, space-saving package.",
    products: [
      {
        name: "CARESCAPE Central Station with Integrated CPU, Dual Display",
        description:
          "CARESCAPE Central Station is designed to make the most out of limited spaces. Its all-in-one drive and fanless design with embedded processor require fewer cables — making it compact and efficient. Central monitoring technicians will appreciate the alarm notification display and flashing title bar, making it easy to identify and drill down to an individual patient in an alarm state. The ability to share a single mouse and keyboard across up to four central stations further streamlines workflow.",
        image: centralStation,
        link: "https://www.gehealthcare.com/products/patient-monitoring",
      },
    ],
  },
];

const ICU = () => {
  const [activeTab, setActiveTab] = useState("patient-monitors");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="ICU & Monitoring"
        subtitle="Advanced patient monitoring solutions for critical care environments"
        backgroundImage={icuImg}
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
            <div className="flex flex-col md:flex-row gap-8 items-start mb-14">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {activeCategory.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {activeCategory.intro}
                </p>
              </div>
              <img
                src={geLogo}
                alt="GE Healthcare"
                className="w-40 h-auto object-contain flex-shrink-0"
              />
            </div>

            <div className="space-y-16">
              {activeCategory.products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {product.image && (
                    <div className="md:w-2/5 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto rounded-xl object-contain max-h-72"
                      />
                    </div>
                  )}
                  <div className={product.image ? "md:w-3/5" : "w-full"}>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {product.description}
                    </p>
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        More Info <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ICU;
