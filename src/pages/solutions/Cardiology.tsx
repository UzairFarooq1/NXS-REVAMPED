import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import icuImg from "@/assets/icu-monitoring.avif";
import geHealthcareLogo from "@/assets/partners/ge-healthcare.png";

// Category images
import restingEcgImg from "@/assets/products/resting-ecg.jpg";
import stressEcgImg from "@/assets/products/stress-ecg.jpg";
import holterEcgImg from "@/assets/products/holter-ecg.jpg";
import ambulatoryBpImg from "@/assets/products/ambulatory-bp.jpg";
import museNxImg from "@/assets/products/muse-nx.jpg";

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
  categoryImage?: string;
  moreLink?: string;
}

const categories: Category[] = [
  {
    id: "resting",
    label: "Resting ECG",
    intro:
      "GE Healthcare's resting ECG systems deliver accurate, efficient, and user-friendly cardiac assessments, designed to meet the needs of healthcare providers across various settings. With advanced signal processing, these systems ensure high-quality ECG readings, aiding in the early detection of cardiac conditions. Features such as streamlined workflows, intuitive interfaces, and connectivity options enhance efficiency, while portable designs support flexibility in clinical environments.",
    moreLink: "https://www.gehealthcare.com/products/diagnostic-ecg",
    categoryImage: restingEcgImg,
    products: [
      {
        name: "MAC 5 Resting ECG",
        description:
          "The MAC 5 was designed so you can focus on patient care. Even when confronting high patient volumes and complex cases, your team now has the power to care for more patients, more efficiently and effectively than ever.",
      },
      {
        name: "MAC 7 Resting ECG",
        description:
          "MAC 7 features bidirectional communication with MUSE™, CardioSoft™, your EMR and other cardiology systems. It also enables data exchange in multiple data formats such as DICOM, HL7, PDF and XML. As a result, your ADT, patient data, orders and test results can transfer effortlessly—all to support a seamless ECG workflow and comprehensive patient record.",
      },
      {
        name: "MAC VU360 Resting ECG",
        description:
          "Infinitely smart, integrated, and secure to help deliver high ECG quality and speed—even in challenging situations. Delivering quality and speed with a 360 degree view of your world, MAC VU 360™ is designed to provide the high-quality resting ECG workstation that you need.",
      },
    ],
  },
  {
    id: "stress",
    label: "Stress ECG",
    intro:
      "At the heart of your practice, every heartbeat matters. Helping you unlock insights fast while ensuring seamless data flow throughout your enterprise is critical for cardiac patients. GE's scalable portfolio provides on-demand access to high-quality ECG data while integrating into workflows. Advanced tools support diverse CVD patients, empower confident diagnosis and help you promptly put patients on the right care pathway.",
    moreLink: "https://www.gehealthcare.com/products/diagnostic-ecg",
    categoryImage: stressEcgImg,
    products: [
      {
        name: "CASE Cardiac Assessment System",
        description:
          "Get a broader perspective of heart health with an ergonomic workstation designed for today. Connect to a range of devices, workstations, and imaging systems for the flexibility you need. The wireless design, bi-directional connectivity and advanced decision-support tools enhance productivity, support accurate diagnosis, and improve patient care.",
      },
      {
        name: "CardioSoft Cardiac Testing System",
        description:
          "Get a broader perspective of heart health with broader measurements to give you a better picture, broader flexibility to test a wider variety of patients and broader connectivity that allows you to streamline care collaboration every step of the way.",
      },
    ],
  },
  {
    id: "holter",
    label: "Holter ECG",
    intro:
      "GE Healthcare's Holter ECG solutions provide continuous, high-quality cardiac monitoring, enabling the detection of arrhythmias and other heart conditions over extended periods. Designed for patient comfort and ease of use, these systems deliver accurate data with advanced signal processing and noise reduction technology. Intuitive software streamlines data analysis, offering clear visualization and automated reporting for efficient diagnosis.",
    moreLink: "https://www.gehealthcare.com/products/diagnostic-ecg",
    categoryImage: holterEcgImg,
    products: [
      {
        name: "CardioDay Holter ECG",
        description:
          "Managing Holter volume can be challenging for many ECG departments. Is there a way to maintain your high quality standards while still achieving high throughput, day in and day out? The answer is yes – with the latest generation of CardioDay® Holter ECG from GE Health Care. CardioDay delivers a powerful combination of clinical quality and workflow advantages you won't find elsewhere.",
      },
      {
        name: "SEER 1000",
        description:
          "The SEER™ 1000 Holter ECG system from GE Healthcare combines simplicity, reliability, and advanced technology to ensure accurate, high-quality cardiac monitoring. A custom app provides visual guidance for lead placement and signal quality checks, reducing the risk of poor data collection. Its slim, lightweight design allows patients to go about their daily activities while seamlessly capturing essential cardiac data, empowering healthcare providers with reliable insights for better clinical decisions.",
      },
    ],
  },
  {
    id: "abp",
    label: "Ambulatory BP",
    intro:
      "GE Healthcare's Ambulatory ECG monitoring solutions deliver both clinical quality and workflow advantages. Clear, graphic data visualization enables quick, intuitive operation for fast and consistent reporting.",
    moreLink: "https://www.gehealthcare.com/products/diagnostic-ecg",
    categoryImage: ambulatoryBpImg,
    products: [
      {
        name: "Tonoport VI",
        description:
          "The Tonoport VI Ambulatory Blood Pressure (ABP) monitor from GE Healthcare provides reliable, continuous blood pressure monitoring to support accurate hypertension diagnosis and management. Designed for patient comfort and ease of use, its lightweight, compact design allows for uninterrupted daily activities while capturing precise readings over 24 hours. Advanced data analysis and seamless integration with GE's CardioSoft™ software ensure efficient workflow and accurate reporting, enabling healthcare providers to make informed treatment decisions with confidence.",
      },
      {
        name: "CardioSoft™ Cardiac Testing System",
        description:
          "The CardioSoft™ cardiac testing system seamlessly integrates with the Tonoport VI Ambulatory Blood Pressure (ABP) monitor, providing a comprehensive solution for cardiovascular assessment. This integration enables efficient data management, allowing clinicians to analyze blood pressure trends alongside other cardiac parameters for a more complete patient profile. With advanced reporting tools and intuitive workflows, CardioSoft™ enhances diagnostic accuracy and streamlines hypertension monitoring, helping healthcare providers make informed treatment decisions with greater confidence.",
      },
    ],
  },
  {
    id: "muse",
    label: "MUSE™ NX",
    intro:
      "MUSE™ NX is a powerful cardiology data management system that seamlessly integrates with GE Healthcare's Resting ECG, Stress ECG, Holter ECG, and Ambulatory Blood Pressure (ABP) monitoring solutions. By centralizing and streamlining the storage, analysis, and retrieval of diagnostic data, MUSE™ NX enhances workflow efficiency and clinical decision-making. Its advanced algorithms and customizable reporting tools provide comprehensive insights into cardiovascular health, enabling healthcare providers to compare and track patient data over time.",
    moreLink: "https://www.gehealthcare.com/products/diagnostic-ecg",
    categoryImage: museNxImg,
    products: [
      {
        name: "MUSE™ NX Data Management System",
        description:
          "MUSE™ NX centralizes cardiology data management, integrating with Resting ECG, Stress ECG, Holter ECG, and Ambulatory Blood Pressure monitoring. Its advanced algorithms and customizable reporting tools provide comprehensive cardiovascular insights, enabling providers to compare and track patient data over time for better clinical outcomes.",
      },
    ],
  },
];

const Cardiology = () => {
  const [activeTab, setActiveTab] = useState("resting");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Cardiology Equipment"
        subtitle="Comprehensive cardiac diagnostics and monitoring solutions from GE Healthcare"
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
            {/* Intro with partner logo */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-14">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {activeCategory.label} Systems
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {activeCategory.intro}
                </p>
              </div>
              <img
                src={geHealthcareLogo}
                alt="GE Healthcare"
                className="w-40 h-auto object-contain flex-shrink-0"
              />
            </div>

            {/* Category Image */}
            {activeCategory.categoryImage && (
              <div className="mb-14 rounded-xl overflow-hidden border">
                <img
                  src={activeCategory.categoryImage}
                  alt={activeCategory.label}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Products */}
            <div className="space-y-10">
              {activeCategory.products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border rounded-xl p-8"
                >
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* More info link */}
            {activeCategory.moreLink && (
              <div className="mt-12 text-center">
                <a
                  href={activeCategory.moreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
                >
                  View Full {activeCategory.label} Range{" "}
                  <ExternalLink className="h-4 w-4" />
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

export default Cardiology;
