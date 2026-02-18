import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import radiologyImg from "@/assets/radiology_xray.jpg";
import shimadzuLogo from "@/assets/partners/shimadzu.jpg";

// Product images
import radspeedFit from "@/assets/products/radspeed-fit.avif";
import radspeedProSr5 from "@/assets/products/radspeed-pro-sr5.webp";
import radspeedMc from "@/assets/products/radspeed-mc.avif";
import mobiledartMx8 from "@/assets/products/mobiledart-mx8.avif";
import mobileartEco from "@/assets/products/mobileart-eco.webp";
import opescopeActenoFd from "@/assets/products/opescope-acteno-fd.webp";
import opescopeActeno from "@/assets/products/opescope-acteno.avif";
import flexavisionF4 from "@/assets/products/flexavision-f4.avif";
import flexavisionSf from "@/assets/products/flexavision-sf.avif";
import triniasB12s from "@/assets/products/trinias-b12s.avif";
import triniasB8s from "@/assets/products/trinias-b8s.avif";

interface Product {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface Category {
  id: string;
  label: string;
  intro: string;
  products: Product[];
  moreLink: string;
}

const categories: Category[] = [
  {
    id: "general",
    label: "General X-ray",
    intro: "Shimadzu offers a comprehensive range of Digital and Analogue General X-ray systems designed for superior imaging quality, efficiency, and patient care. Whether you require advanced digital radiography (DR) solutions for enhanced workflow and image clarity or analogue systems for reliable and cost-effective imaging, Shimadzu delivers innovative solutions tailored to your needs.",
    moreLink: "https://www.shimadzu.com/med/products/radio/index.html",
    products: [
      {
        name: "RADspeed fit",
        description: "This radiography system integrates ease-of-use features from top-class systems in a simple manner. The system is equipped with a floating tabletop that can support up to 320 kg, and a detachable grid to reduce patient exposure. Furthermore, with its high image quality due to the large output power and simple operability, this radiography system provides a sense of ease and comfort operation for users.",
        image: radspeedFit,
        link: "https://www.shimadzu.com/med/products/radio/m-k25cur00000060q2.html",
      },
      {
        name: "RADspeed Pro style edition SR5",
        description: "The Shimadzu RADspeed Pro SR5 is a high-performance general radiography system designed for versatile and efficient X-ray imaging. It offers advanced automation, superior image quality, and flexible configurations to meet the needs of hospitals, imaging centers, and clinics.",
        image: radspeedProSr5,
        link: "https://www.shimadzu-usa.com/products/radio/radspeed_pro_sr5.html",
      },
      {
        name: "RADspeed Pro style edition MC",
        description: "The RADspeed MF general radiographic system is equipped with an advanced-level generator designed using state-of-the-art high-frequency inverter technology, which produces sharp and high-contrast X-ray images. User-friendly Sequential Multidirectional Radiography functions allow the operator to register and then utilize up to 7 sequential preset memory parameters.",
        image: radspeedMc,
        link: "https://www.shimadzu-usa.com/products/radio/radspeed_mc.html",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile X-ray",
    intro: "Shimadzu's Mobile X-ray Systems offer the perfect balance of mobility, performance, and reliability for bedside imaging in hospitals, ICUs, emergency rooms, and remote locations. Available in both digital (DR) and analogue (CR/film) configurations, these systems ensure high-quality imaging with ease of use in various clinical settings.",
    moreLink: "https://www.shimadzu.com/med/products/mobile/index.html",
    products: [
      {
        name: "MobileDaRt Evolution MX8 Version",
        description: "The Shimadzu MobileDaRt Evolution MX8 Version is an advanced digital mobile X-ray system designed for seamless bedside imaging. It features wireless DR technology, a compact and lightweight design, and enhanced maneuverability for use in ICUs, ERs, and operating rooms.",
        image: mobiledartMx8,
        link: "https://www.shimadzu.com/med/products/mobile/m-od0gjn000000g71j.html",
      },
      {
        name: "MOBILEART eco (MUX-10)",
        description: "The Shimadzu MOBILEART eco (MUX-10) is a compact and energy-efficient analogue mobile X-ray system, ideal for bedside imaging in hospitals, clinics, and emergency settings. Designed for ease of maneuverability, it features a lightweight body, a long-reach arm, and quiet operation, making it perfect for use in confined spaces.",
        image: mobileartEco,
        link: "https://www.shimadzu.com/med/products/mobile/m-k25cur000000606v.html",
      },
    ],
  },
  {
    id: "carm",
    label: "C-Arm",
    intro: "Shimadzu's Digital & Analogue C-Arm systems offer versatile, high-quality X-ray imaging for surgical, orthopedic, and trauma procedures. Designed for precision, mobility, and ease of use, these systems provide exceptional image clarity and efficient workflow, making them essential for modern healthcare facilities.",
    moreLink: "https://www.shimadzu.com/med/products/c-arm/index.html",
    products: [
      {
        name: "Opescope Acteno FD type",
        description: "Inheriting the easy operability for both the doctor and the operator from the conventional model, ACTENO FD type meets the challenge of \"how to reduce stress for the doctor and the surgical staff\" with the OPESCOPE cleverly designed operability.",
        image: opescopeActenoFd,
        link: "https://www.shimadzu.com/med/products/c-arm/acteno-fd.html",
      },
      {
        name: "Opescope Acteno",
        description: "Free and easy positioning achieves optimal performance to meet the demands of the operation room and emergency room. The total system pursues both high image quality and ease of use. This is the pinnacle of our evolving OPESCOPE-series.",
        image: opescopeActeno,
        link: "https://www.shimadzu.com/med/products/c-arm/m-k25cur00000057ii.html",
      },
    ],
  },
  {
    id: "fluoro",
    label: "Fluoroscopy",
    intro: "Fluoroscopy is essential for real-time imaging in various medical procedures, and Shimadzu delivers solutions that prioritize clarity, efficiency, and patient safety. Whether choosing a digital system for instant, high-resolution imaging or an analogue system for cost-effective reliability, Shimadzu offers cutting-edge technology tailored to modern healthcare needs.",
    moreLink: "https://www.shimadzu.com/med/products/fluoro/index.html",
    products: [
      {
        name: "FLEXAVISION F4 package",
        description: "FLEXAVISION F4 package is the latest model of our evolving FLEXAVISION-series equipped with a 17″×17″ FPD which is capable of fluoroscopy and wireless radiography. The high-performance system provides further evolution of its flexibility in fluoroscopic examination, with extensive possibilities in general radiography using a large field of view, wireless FPD.",
        image: flexavisionF4,
        link: "https://www.shimadzu.com/med/products/fluoro/flexavision_f4.html",
      },
      {
        name: "FLEXAVISION SF/HB/FD package",
        description: "Offering various kinds of table, high-voltage generator, X-ray tube, image intensifier and image processing units, FLEXAVISION enables you to create an optimal system that accommodates both your patient throughput requirement and all your examination types.",
        image: flexavisionSf,
        link: "https://www.shimadzu.com/med/products/fluoro/m-k25cur0000002uuh.html",
      },
    ],
  },
  {
    id: "angio",
    label: "Angiography",
    intro: "Shimadzu's cath lab angiography systems offer advanced imaging solutions for precise diagnosis and treatment of cardiovascular diseases. Utilizing cutting-edge digital subtraction angiography (DSA) and high-resolution fluoroscopy, Shimadzu's systems provide exceptional image clarity while minimizing radiation exposure.",
    moreLink: "https://www.shimadzu.com/med/products/angio/index.html",
    products: [
      {
        name: "Trinias B12s/C16s/C12s/F12s with SCORE Opera",
        description: "The Shimadzu Trinias series with SCORE Opera is a Crossover Angiography System designed for various clinical fields, including cardiology, neurology, oncology, emergency/trauma, radiology, surgery, and ICU applications.",
        image: triniasB12s,
        link: "https://www.shimadzu.com/med/products/angio/trinias_b12sc16sc12sf12s_with_score_opera.html",
      },
      {
        name: "Trinias B8s/C8s/F8s with SCORE Opera",
        description: "The Shimadzu Trinias B8s/C8s/F8s with SCORE Opera is a state-of-the-art cardiology-focused angiography system designed for interventional cardiology and peripheral studies. It features an 8″x8″ Flat Panel Detector (FPD) for high-resolution imaging and incorporates SCORE Opera technology.",
        image: triniasB8s,
        link: "https://www.shimadzu.com/med/products/angio/trinias_b8sc8sf8s_with_score_opera.html",
      },
    ],
  },
];

const Radiology = () => {
  const [activeTab, setActiveTab] = useState("general");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Radiology Equipment"
        subtitle="Complete digital and analogue radiography solutions from Shimadzu"
        backgroundImage={radiologyImg}
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
                  Digital &amp; Analogue {activeCategory.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {activeCategory.intro}
                </p>
              </div>
              <img
                src={shimadzuLogo}
                alt="Shimadzu"
                className="w-40 h-auto object-contain flex-shrink-0"
              />
            </div>

            {/* Products */}
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
                  <div className="md:w-2/5 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto rounded-xl object-contain max-h-72"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      View on Shimadzu <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More info link */}
            <div className="mt-12 text-center">
              <a
                href={activeCategory.moreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
              >
                View Full {activeCategory.label} Range <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Radiology;
