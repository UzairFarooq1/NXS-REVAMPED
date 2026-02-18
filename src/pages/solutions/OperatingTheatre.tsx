import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import operatingTheatreImg from "@/assets/operating_theatre.jpg";
import trumpfLogo from "@/assets/partners/trumpf.png";
import baxterTrumpfLogo from "@/assets/partners/baxter-trumpf.png";
import baxterHillromLogo from "@/assets/partners/baxter-hillrom.png";
import geLogo from "@/assets/partners/ge-healthcare.png";

// Anesthesia images
import carestation750 from "@/assets/products/carestation-750.png";
import carestation600 from "@/assets/products/carestation-600.png";
import nxt9100c from "@/assets/products/9100c-nxt.png";

// Operating Lights images
import trulight3000 from "@/assets/products/trulight-3000.jpg";
import trulight5000 from "@/assets/products/trulight-5000.png";
import heluxPro from "@/assets/products/helux-pro.jpg";

// Operating Tables images
import pst300 from "@/assets/products/pst-300.jpg";
import pst500 from "@/assets/products/pst-500.jpg";
import ts7000 from "@/assets/products/ts7000.jpg";
import ts7500 from "@/assets/products/ts7500.jpg";

// Booms & Pendants images
import truportBoom from "@/assets/products/truport-boom.jpg";
import fcsBoom from "@/assets/products/fcs-boom.jpg";

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
  partnerLogo: string;
  partnerAlt: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "anesthesia",
    label: "Anesthesia",
    intro: "Every step you take to maintain life support matters in perioperative care. Discover how one integrated anesthesia care solution can support insightful decisions and individualized care. Our anesthesia delivery systems combine advanced clinical tools with intuitive interfaces for safe, efficient perioperative workflows.",
    partnerLogo: geLogo,
    partnerAlt: "GE HealthCare",
    products: [
      {
        name: "Carestation™ 750 Anesthesia Delivery System",
        description: "The Carestation 750 anesthesia workstation enhances perioperative care with advanced clinical tools for individualized therapy, including low-flow anesthesia and lung protective ventilation. Its intuitive interface provides easy access to key functions like Lung Recruitment, Maneuver and Pause Gas Flow, reducing stress in busy settings. A modular, ergonomic design streamlines workflows with self-guided checkout, simplifying case management and maintenance.",
        image: carestation750,
        link: "https://www.gehealthcare.com/products/anesthesia-solutions/carestation-750",
      },
      {
        name: "Carestation 600 Series Anesthesia Delivery Systems",
        description: "The Carestation™ 600 Series (620/650/650c) is a compact, versatile, and easy-to-use anesthesia platform designed to tackle modern challenges with a sleek, space-saving design, intuitive interface for enhanced workflows, and scalable technology for diverse patient needs.",
        image: carestation600,
        link: "https://www.gehealthcare.com/products/anesthesia-solutions/carestation-600-series",
      },
      {
        name: "9100c NXT Anesthesia Workstation",
        description: "The anesthesia workstation that gives you peace of mind. 9100c NXT is a precise anesthesia solution that gives you peace of mind by supporting an easy and trustful anesthesia delivery experience. It features reliable ventilation modes and comprehensive gas monitoring for safe patient care.",
        image: nxt9100c,
        link: "https://www.gehealthcare.in/products/anesthesia-delivery/9100c-nxt",
      },
    ],
  },
  {
    id: "operating-lights",
    label: "Operating Lights",
    intro: "Trumpf Medical specializes in innovative medical technology, offering advanced surgical lights designed to enhance efficiency and patient care in operating rooms and intensive care units. With a focus on ergonomic design, flexibility, and cutting-edge technology, Trumpf Medical solutions improve workflow, optimize theatre space, and support precision in surgical and critical care environments.",
    partnerLogo: baxterTrumpfLogo,
    partnerAlt: "Baxter | Trumpf Medical",
    products: [
      {
        name: "Trumpf TruLight 3000 Operating Theatre Lights",
        description: "The Trumpf TruLight 3000 is a high-performance surgical light designed for various medical environments, including emergency rooms, trauma centres, ambulatory care, and intensive care units. It offers adaptive lighting, high efficiency, and durability while being highly adjustable to meet different surgical needs. Additionally, it supports needs-based communication, enhancing usability in complex medical settings.",
        image: trulight3000,
        link: "https://www.hillrom.com/en/products/trulight_-3000-surgical-light/",
      },
      {
        name: "Trumpf TruLight 5000 Operating Theatre Lights",
        description: "The TruLight 5000 series combines comfort and power, delivering precision without compromise through advanced surgical LED lighting. Designed with innovation and user needs in mind, it offers high efficiency, flexibility, and energy savings while enhancing the surgical environment. Featuring Adaptive Light Control Plus technology, it ensures optimal illumination with a brightness of up to 160,000 lux, sterile control of lighting functions, and superior light distribution.",
        image: trulight5000,
        link: "https://www.hillrom.com/en/products/trulight_-5000-surgical-light/",
      },
      {
        name: "Helux Pro Surgical Lights",
        description: "The Helux Pro Surgical Light is designed to provide consistent illumination with advanced features such as shadow elimination, deep cavity lighting, and a non-imbedded laminar airflow system to maintain high-quality operating conditions. It seamlessly integrates with ORI systems, allowing real-time image routing via third-party equipment. The sterile light control helps reduce cross-contamination, while an intensity indicator alerts the surgical team to overlapping light fields, enhancing patient safety.",
        image: heluxPro,
        link: "https://www.hillrom.com/en/products/helux-pro-surgical-light/",
      },
    ],
  },
  {
    id: "operating-tables",
    label: "Operating Theatre Tables",
    intro: "Our operating tables are designed for versatile operation, and patient safety, meeting the demands of modern surgical environments. Featuring modular designs, ergonomic adjustments, and advanced positioning capabilities, these tables support a wide range of procedures, from general surgery to highly specialized interventions.",
    partnerLogo: baxterTrumpfLogo,
    partnerAlt: "Baxter | Trumpf Medical",
    products: [
      {
        name: "PST 300 Precision Surgical Table",
        description: "The versatile, easy-to-use table delivers a strong foundation, supporting the volume and variety of procedures your facility performs every day. So you can help more people. Perform more specialized procedures, spend more time with patients — and less time dealing with complex equipment. The PST 300 table does more of what matters most.",
        image: pst300,
        link: "https://www.hillrom.com/en/products/pst300-surgical-table/",
      },
      {
        name: "PST 500 Precision Surgical Table",
        description: "The PST 500 Precision Surgical Table is designed for versatility and stability in modern operating room environments. Built with advanced surgical table design, including a durable Patient Warming System, which helps maintain patient core temperature. The table leverages a platform for patient positioning, ensuring stability for a wide range of surgical procedures.",
        image: pst500,
        link: "https://www.hillrom.com/en/products/pst-500-precision-surgical-table/",
      },
      {
        name: "TS7000 Operating Table",
        description: "Nothing should get between you and your patient during procedures. That's why the TS7000 Operating Table is designed with your priorities in mind: to be patient-friendly, reliable, flexible, and expandable. It offers column design, built-in feedback systems, and a diverse set of safety features that allow you to concentrate on the patient — not on the surgical table.",
        image: ts7000,
        link: "https://www.hillrom.com/en/products/ts7000dv-operating-table/",
      },
      {
        name: "TS7500 Operating Table",
        description: "The TS7500 OR System Table by Trumpf Medical is designed for flexibility and efficiency, adapting to evolving surgical needs across fluid disciplines. With large adjustment zones for robust and patient positioning, it ensures versatility in procedures. Advanced yet easy-to-handle drive and pressure functions enable reliable operation on any surface, while a simple modular system improves ergonomics in daily workflow.",
        image: ts7500,
        link: "https://www.hillrom.com/en/products/ts7500/",
      },
    ],
  },
  {
    id: "booms-pendants",
    label: "Equipment Booms & Pendants",
    intro: "Baxter's equipment booms and pendants are designed to enhance workflow efficiency in medical environments by providing flexible, space-saving solutions for managing essential equipment. These systems improve accessibility by organizing medical devices, power outlets, and gas supply lines, reducing clutter and enabling healthcare professionals to focus on patient care. With customizable configurations, smooth articulation, and durable construction, Baxter's booms and pendants support critical care settings such as operating rooms and intensive care units, ensuring safety, efficiency, and ease of use.",
    partnerLogo: baxterHillromLogo,
    partnerAlt: "Baxter | Hillrom | Welch Allyn",
    products: [
      {
        name: "TruPort™ Ceiling Supply Units",
        description: "Ceiling-mounted supply units providing organized access to medical gases, electrical power, and data connections. Modular design allows customization for specific department needs with smooth 360° rotation and easy-to-clean surfaces for optimal hygiene.",
        image: truportBoom,
        link: "https://www.hillrom.com/en/products/truport-supply-unit/",
      },
      {
        name: "FCS Equipment Boom Systems",
        description: "Heavy-duty boom systems designed to support monitors, ventilators, and other critical equipment. Spring-assisted arms allow effortless positioning while maintaining stability, keeping the surgical field clear and organized for efficient workflow.",
        image: fcsBoom,
        link: "https://www.hillrom.com/en/products/fcs-boom/",
      },
    ],
  },
];

const OperatingTheatre = () => {
  const [activeTab, setActiveTab] = useState("anesthesia");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Operating Theatre"
        subtitle="Integrated operating theatre solutions from lights and tables to ceiling-suspended systems"
        backgroundImage={operatingTheatreImg}
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
              {activeCategory.partnerLogo && (
                <img
                  src={activeCategory.partnerLogo}
                  alt={activeCategory.partnerAlt}
                  className="w-40 h-auto object-contain flex-shrink-0"
                />
              )}
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

export default OperatingTheatre;
