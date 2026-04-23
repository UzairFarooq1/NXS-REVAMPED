import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import endoscopyImg from "@/assets/products/endoscopy.jfif";
import olympusLogo from "@/assets/partners/olympus.png";

// Category images
import pulmonology from "@/assets/products/pulmonology.jpg";
import flexibleEndoscope from "@/assets/products/olympus-flexible-endoscope.jpg";
import endotherapyAccessories from "@/assets/products/endotherapy-accessories.jpg";
import laparoscopyOr from "@/assets/products/laparoscopy-or.jpg";
import urologyGynaecology from "@/assets/products/urology-gynaecology.jpg";
import entOverview from "@/assets/products/ent-overview.jpg";

// Surgical Energy product images
import thunderbeat from "@/assets/products/thunderbeat.jpg";
import powerseal from "@/assets/products/powerseal.jpg";
import sonicbeat from "@/assets/products/sonicbeat.jpg";
import hicura from "@/assets/products/hicura.jpg";

interface SurgicalProduct {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface Category {
  id: string;
  label: string;
  intro: string;
  image?: string;
  link?: string;
  products?: SurgicalProduct[];
}

const categories: Category[] = [
  {
    id: "flexible-endoscopy",
    label: "Flexible Endoscopy",
    intro:
      "Olympus is the world recognised leader in the flexible endoscopy market. With a custom built workshop to cater to all minor repairs within the country, NXS together with Olympus have maintained the worldwide standards of Olympus Technology, Quality and Service.",
    image: flexibleEndoscope,
    link: "https://www.olympus-europa.com/medical/en/Home/",
  },
  {
    id: "Pulmonology",
    label: "Pulmonology",
    intro:
      "Olympus is a globally recognized leader in advanced medical technologies, offering innovative pulmonology solutions for the diagnosis and treatment of respiratory conditions. Through cutting-edge systems such as the EVIS X1 bronchoscopy platform, EBUS-TBNA and peripheral bronchoscopy solutions, as well as specialized pediatric tools, Olympus continues to set high standards in minimally invasive care. Together with NXS, these technologies are supported with a commitment to excellence in quality, service, and continuous learning through initiatives like the Lung-Term Learning program, ensuring healthcare professionals stay at the forefront of modern pulmonology practice.",
    image: pulmonology,
    link: "https://www.olympus-europa.com/medical/en/Home/",
  },
  {
    id: "endotherapy-accessories",
    label: "Endotherapy Accessories",
    intro:
      "The right tools for the right job. With single use options, NXS with Olympus offer a large range of accessories for flexible endoscopy.",
    image: endotherapyAccessories,
    link: "https://www.olympus-europa.com/medical/en/Home/",
  },
  {
    id: "laparoscopy",
    label: "Laparoscopy",
    intro:
      "Minimal Invasive Surgery, Laparoscopy and Integrated OR's are the tools for the modern surgeon. With a wide array of imaging solutions, software, state of the art instruments and ancillary products from insufflators to unique diathermy and ultrasound scalpels.",
    image: laparoscopyOr,
    link: "https://www.olympus-europa.com/medical/en/Home/",
  },
  {
    id: "urology-gynaecology",
    label: "Urology & Gynaecology",
    intro:
      "Innovative solutions designed to meet diverse urological and gynaecological needs. Our range includes laser machines, saline (bipolar) resection systems, flexible cystoscopes and ureteroscopes, as well as Narrow Band Imaging (NBI) technology for enhanced bladder tumour detection. In addition, we provide a complete stone management consumable portfolio.\n\nComplementing our urology solutions, we also offer a full range of rigid and flexible hysteroscopes, alongside a broader selection of laparoscopic equipment and instrumentation, ensuring a complete, high-performance suite for minimally invasive surgical (MIS) procedures in gynaecology.",
    image: urologyGynaecology,
    link: "https://www.olympus-europa.com/medical/en/Home/",
  },
  {
    id: "surgical-energy",
    label: "Surgical Energy",
    intro:
      "Specialised units for Flexible Endoscopy to all inclusive Surgical Tissue Management Systems for the surgical environment. Olympus and NXS have the complete electrosurgical platform for every requirement.",
    products: [
      {
        name: "Thunderbeat",
        description:
          "The world's first device combining both bipolar energy and ultrasonic energy in a single instrument. This dual-energy approach enhances vessel sealing, precise dissection, and coagulation in a single step, reducing surgery time and minimizing thermal spread to surrounding tissues.",
        image: thunderbeat,
        link: "https://www.olympus-europa.com/medical/en/Home/",
      },
      {
        name: "PowerSeal",
        description:
          "An innovative bipolar vessel-sealing instrument designed for consistent and reliable sealing of large vessels and tissue bundles. It provides strong hemostasis with minimal thermal spread, ensuring safe and effective tissue management in laparoscopic and open surgeries.",
        image: powerseal,
        link: "https://www.olympus-europa.com/medical/en/Home/",
      },
      {
        name: "Sonicbeat",
        description:
          "An advanced ultrasonic dissector that delivers high-speed cutting and coagulation with minimal thermal damage. It enhances surgical precision, reduces blood loss, and improves efficiency in procedures requiring delicate tissue handling.",
        image: sonicbeat,
        link: "https://www.olympus-europa.com/medical/en/Home/",
      },
      {
        name: "HiCura + HiQ+",
        description:
          "Hand instruments that offer superior ergonomics, durability, and precision for laparoscopic procedures, improving outcomes in minimally invasive surgery.",
        image: hicura,
        link: "https://www.olympus-europa.com/medical/en/Home/",
      },
    ],
  },
  {
    id: "ent",
    label: "ENT",
    intro:
      "FESS to Stroboscopy, Rigid scopes and Flexible scopes are available from Olympus. NBI compatible systems are making a breakthrough in ENT detection and surgical assistance.",
    image: entOverview,
    link: "https://www.olympus-europa.com/medical/en/Home/",
  },
];

const Endoscopy = () => {
  const [activeTab, setActiveTab] = useState("flexible-endoscopy");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Endoscopy & Minimal Access Surgery"
        subtitle="Comprehensive endoscopic and minimally invasive surgical solutions from Olympus"
        backgroundImage={endoscopyImg}
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
            {/* Header with title, intro, and Olympus logo */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {activeCategory.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {activeCategory.intro}
                </p>
                {activeCategory.link && (
                  <a
                    href={activeCategory.link}
                    target="blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-4"
                  >
                    More Info <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <img
                src={olympusLogo}
                alt="Olympus"
                className="w-40 h-auto object-contain flex-shrink-0"
              />
            </div>

            {/* Single image for non-product categories */}
            {activeCategory.image && (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.label}
                  className="w-full h-auto max-h-[500px] object-cover rounded-xl"
                />
              </div>
            )}

            {/* Product list for Surgical Energy */}
            {activeCategory.products && (
              <div className="space-y-12">
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
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      {product.link && (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          More info <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Endoscopy;
