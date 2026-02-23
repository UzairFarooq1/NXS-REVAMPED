import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import endoscopyImg from "@/assets/endoscopy.jpg";
import olympusLogo from "@/assets/partners/olympus.png";

// Product images
import flexibleEndoscope from "@/assets/products/olympus-flexible-endoscope.jpg";
import endotherapyAccessories from "@/assets/products/endotherapy-accessories.jpg";
import laparoscopyOr from "@/assets/products/laparoscopy-or.jpg";
import urologyGynaecology from "@/assets/products/urology-gynaecology.jpg";
import thunderbeat from "@/assets/products/thunderbeat.jpg";
import powerseal from "@/assets/products/powerseal.jpg";
import sonicbeat from "@/assets/products/sonicbeat.jpg";
import hicura from "@/assets/products/hicura.jpg";
import entOverview from "@/assets/products/ent-overview.jpg";

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
}

const categories: Category[] = [
  {
    id: "flexible-endoscopy",
    label: "Flexible Endoscopy",
    intro: "Olympus is the world recognised leader in the flexible endoscopy market. With a custom built workshop to cater to all minor repairs within the country, NXS together with Olympus have maintained the worldwide standards of Olympus Technology, Quality and Service.",
    products: [
      {
        name: "Video Gastroscopes",
        description: "High-definition flexible gastroscopes for upper GI diagnostics and therapeutic procedures, featuring advanced imaging technologies including Narrow Band Imaging (NBI) for enhanced mucosal visualization.",
        image: flexibleEndoscope,
      },
      {
        name: "Video Colonoscopes",
        description: "Advanced colonoscopes with enhanced visualization for colorectal screening and intervention. Featuring variable stiffness technology and responsive insertion tubes for improved patient comfort.",
      },
      {
        name: "Video Bronchoscopes",
        description: "Flexible bronchoscopes designed for diagnostic and therapeutic procedures in pulmonology, offering exceptional image quality and maneuverability for airway examination.",
      },
      {
        name: "Duodenoscopes",
        description: "Specialized side-viewing endoscopes for ERCP procedures, enabling access to the biliary and pancreatic ducts for diagnostic and therapeutic interventions.",
      },
      {
        name: "Video Processors & Light Sources",
        description: "Advanced video processors with image enhancement technology including NBI, providing superior diagnostic visualization paired with high-intensity light sources for optimal illumination.",
      },
    ],
  },
  {
    id: "endotherapy-accessories",
    label: "Endotherapy Accessories",
    intro: "The right tools for the right job. With single use options, NXS with Olympus offer a large range of accessories for flexible endoscopy.",
    products: [
      {
        name: "Biopsy Forceps",
        description: "Single-use and reusable biopsy forceps for tissue sampling during endoscopic procedures, available in various jaw designs for different clinical applications.",
        image: endotherapyAccessories,
      },
      {
        name: "Polypectomy Snares",
        description: "Electrosurgical snares for the removal of polyps during colonoscopy and upper GI endoscopy, designed for precise loop placement and reliable cutting.",
      },
      {
        name: "Guidewires & Cannulas",
        description: "ERCP guidewires and cannulas for biliary and pancreatic duct access, featuring hydrophilic coatings for smooth navigation through complex anatomy.",
      },
      {
        name: "Hemostasis Accessories",
        description: "Clips, injection needles, and coagulation devices for endoscopic hemostasis, providing reliable solutions for bleeding management during procedures.",
      },
      {
        name: "Dilation Devices",
        description: "Balloon dilators and bougie systems for stricture management across the GI tract, offering controlled and safe dilation for improved patient outcomes.",
      },
    ],
  },
  {
    id: "laparoscopy",
    label: "Laparoscopy",
    intro: "Minimal Invasive Surgery, Laparoscopy and Integrated OR's are the tools for the modern surgeon. With a wide array of imaging solutions, software, state of the art instruments and ancillary products from insufflators to unique diathermy and ultrasound scalpels.",
    products: [
      {
        name: "4K/3D Camera Systems",
        description: "Ultra-high definition 4K and 3D camera systems providing exceptional depth perception and image clarity for minimally invasive surgical procedures.",
        image: laparoscopyOr,
      },
      {
        name: "Insufflators",
        description: "Advanced CO₂ insufflation systems with precise pressure control and high flow rates, ensuring optimal pneumoperitoneum maintenance during laparoscopic surgery.",
      },
      {
        name: "Laparoscopic Instruments",
        description: "Comprehensive range of reusable and single-use laparoscopic instruments including graspers, dissectors, scissors, and needle holders for all surgical specialties.",
      },
      {
        name: "Integrated OR Solutions",
        description: "Complete operating room integration systems for routing, recording, and managing video and data from multiple surgical devices through a unified platform.",
      },
    ],
  },
  {
    id: "urology-gynaecology",
    label: "Urology & Gynaecology",
    intro: "From Lower Tract urology to upper Tract urology, NXS and Olympus offer a comprehensive portfolio of innovative solutions designed to meet diverse urological and gynaecological needs. Our range includes laser machines, saline (bipolar) resection systems, flexible cystoscopes and ureteroscopes, as well as Narrow Band Imaging (NBI) technology for enhanced bladder tumour detection. In addition, we provide a complete stone management consumable portfolio. Complementing our urology solutions, we also offer a full range of rigid and flexible hysteroscopes, alongside a broader selection of laparoscopic equipment and instrumentation, ensuring a complete, high-performance suite for minimally invasive surgical (MIS) procedures in gynaecology.",
    products: [
      {
        name: "Cystoscopes & Ureteroscopes",
        description: "Flexible and rigid cystoscopes and ureteroscopes with NBI technology for enhanced bladder tumour detection and urinary tract examination.",
        image: urologyGynaecology,
      },
      {
        name: "Resection Systems",
        description: "Saline (bipolar) resection systems for transurethral resection of the prostate (TURP) and bladder tumours, offering precise tissue removal with reduced complications.",
      },
      {
        name: "Hysteroscopes",
        description: "Rigid and flexible hysteroscopes for diagnostic and operative gynaecological procedures, enabling minimally invasive examination and treatment of the uterine cavity.",
      },
      {
        name: "Stone Management",
        description: "Complete stone management portfolio including laser lithotripsy systems, retrieval baskets, and access sheaths for effective kidney and ureteral stone treatment.",
      },
    ],
  },
  {
    id: "surgical-energy",
    label: "Surgical Energy",
    intro: "Specialised units for Flexible Endoscopy to all inclusive Surgical Tissue Management Systems for the surgical environment. Olympus and NXS have the complete electrosurgical platform for every requirement.",
    products: [
      {
        name: "Thunderbeat",
        description: "The world's first device that combines both bipolar energy and ultrasonic energy into a single instrument. This dual-energy approach enhances vessel sealing, precise dissection, and coagulation in a single step, reducing surgery time and minimizing thermal spread to surrounding tissues.",
        image: thunderbeat,
      },
      {
        name: "Powerseal",
        description: "An innovative bipolar vessel-sealing instrument designed for consistent and reliable sealing of large vessels and tissue bundles. It provides strong hemostasis with minimal thermal spread, ensuring safe and effective tissue management in laparoscopic and open surgeries.",
        image: powerseal,
      },
      {
        name: "Sonicbeat",
        description: "An advanced ultrasonic dissector that delivers high-speed cutting and coagulation with minimal thermal damage. It enhances surgical precision, reduces blood loss, and improves efficiency in procedures requiring delicate tissue handling.",
        image: sonicbeat,
      },
      {
        name: "HiCura + HiQ+",
        description: "Hand instruments that offer superior ergonomics, durability, and precision for laparoscopic procedures. These instruments provide surgeons with enhanced control and maneuverability, improving surgical outcomes in minimally invasive surgery.",
        image: hicura,
      },
    ],
  },
  {
    id: "ent",
    label: "ENT",
    intro: "FESS to Stroboscopy, Rigid scopes and Flexible scopes are available from Olympus. NBI compatible systems are making a breakthrough in ENT detection and surgical assistance.",
    products: [
      {
        name: "Rigid Sinuscopes",
        description: "High-definition rigid sinuscopes for Functional Endoscopic Sinus Surgery (FESS), available in multiple angles for comprehensive sinus examination and surgical access.",
        image: entOverview,
      },
      {
        name: "Flexible Nasopharyngoscopes",
        description: "Slim, flexible nasopharyngoscopes for diagnostic examination of the nasal passages, pharynx, and larynx, featuring NBI technology for enhanced mucosal assessment.",
      },
      {
        name: "Stroboscopy Systems",
        description: "Advanced stroboscopy systems for voice and laryngeal assessment, providing detailed visualization of vocal cord vibration patterns for accurate diagnosis.",
      },
      {
        name: "ENT Surgical Instruments",
        description: "Comprehensive range of powered and manual instruments for ENT surgery, including microdebriders, drill systems, and specialized forceps for ear, nose, and throat procedures.",
      },
    ],
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
                src={olympusLogo}
                alt="Olympus"
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

export default Endoscopy;
