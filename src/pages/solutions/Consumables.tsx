import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import radiologyImg from "@/assets/products/radcons.webp";
import zittronLogo from "@/assets/partners/zittron.png";

// Product images
import zittronEyewear from "@/assets/products/zittron-eyewear.webp";
import apronMerge from "@/assets/products/apron-merge.jpg";
import apronCross from "@/assets/products/apron-cross.jpg";
import coatBuckle from "@/assets/products/coat-apron-buckle.png";
import coatRev from "@/assets/products/coat-apron-rev.jpg";
import thyroidUniversal from "@/assets/products/thyroid-universal.png";
import thyroidSleek from "@/assets/products/thyroid-sleek.png";
import gonadShield from "@/assets/products/gonad-shield.jpg";
import leadGlass1 from "@/assets/products/lead-glass-1.webp";
import leadGlass2 from "@/assets/products/lead-glass-2.webp";

interface Product {
  name: string;
  description: string;
  image?: string;
}

interface Category {
  id: string;
  label: string;
  intro: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "goggles",
    label: "Lead Goggles",
    intro:
      "Zittron offers a comprehensive range of lead goggles designed for superior radiation protection, comfort, and durability. Whether you need advanced eye shielding for medical, industrial, or research applications, Zittron provides high-quality, innovative goggles that ensure maximum safety while maintaining a lightweight and ergonomic design. Using state-of-the-art materials and precision manufacturing, Zittron delivers reliable eye protection tailored to your specific needs.",
    products: [
      {
        name: "Zittron Radiation Protection Eyewear",
        description:
          "Zittron's collection of eyewear offers a blend of elegance and functionality. These eyeglasses are not only stylish but also lightweight, making them comfortable to wear. They are designed to accommodate prescription lenses, although certain limitations apply to curved frames. The lenses have undergone rigorous testing in accordance with IEC 61331-1:2014 standards by LMG, achieving a protection level of 0.8mm Pb with a tolerance of 5%.",
        image: zittronEyewear,
      },
    ],
  },
  {
    id: "double-apron",
    label: "Double Sided Apron",
    intro:
      "The Double Sided Apron, also referred to as a Wrap, is a favoured choice for X-ray-assisted procedures, offering comprehensive protection to healthcare professionals in the room. It guarantees protection from scattered radiation with a minimum of 0.35mm Pb shielding in the front and 0.25mm Pb in the back, in compliance with the IEC 61331-3:2014 standards.",
    products: [
      {
        name: "Double Sided Apron Model - Merge",
        description:
          "The Zittron Double-Sided Apron Model – Merge offers superior radiation protection with a balanced weight distribution for enhanced comfort during extended use. Designed for medical, industrial, and research applications, this apron provides full front and back coverage, ensuring maximum safety without compromising mobility.",
        image: apronMerge,
      },
      {
        name: "Double Sided Apron Model - Cross",
        description:
          "The Zittron Double-Sided Apron Model – Cross is designed for maximum radiation protection with an ergonomic cross-back design that evenly distributes weight, reducing strain during extended wear. Ideal for medical, industrial, and research applications, this apron provides full front and back coverage while ensuring comfort and mobility.",
        image: apronCross,
      },
    ],
  },
  {
    id: "coat-apron",
    label: "Coat Apron",
    intro:
      "Frontal Coat Apron is a traditional protective garment primarily used in the X-ray room but its application can extend to lengthy surgical procedures. This type of apron shields the front area of the body, spanning from the shoulders to just below the knees and is crafted in accordance with the IEC 61331-3:2014 standards. It is classified as an open-front apron with a minimum protection level of 0.25mm Pb available with either velcro or buckle closure.",
    products: [
      {
        name: "Coat Apron Model - Buckle Closure",
        description:
          "The Zittron Coat Apron Model – Buckle Closure offers superior radiation protection with a convenient and secure buckle fastening system for a snug and adjustable fit. Designed for medical, industrial, and research applications, this apron provides full front and partial back coverage while ensuring ease of movement and comfort during extended wear.",
        image: coatBuckle,
      },
      {
        name: "Coat Apron Model - Reversible",
        description:
          "Zittron introduces the first Reversible Apron. A frontal apron which can be worn from both sides. Reversible Apron makes the apron more hygienic and more user friendly. It enhances the life of the product substantially because of dual side use.",
        image: coatRev,
      },
    ],
  },
  {
    id: "thyroid",
    label: "Thyroid Shield",
    intro:
      "Protective thyroid shields come in two distinct variations, each of which can be equipped with either Velcro or magnet closures. These shields constitute an indispensable component of the comprehensive set of protective apparel essential for healthcare personnel. They must meet a minimum requirement of 0.5mm Pb in accordance with the IEC 61331-3:2014 standards.",
    products: [
      {
        name: "Reversible Model - Universal",
        description:
          "The Zittron Reversible Model – Universal is designed for maximum flexibility, allowing dual-sided wear for enhanced durability and hygiene. This innovative apron provides superior radiation protection while maintaining a lightweight, ergonomic fit for all-day comfort.",
        image: thyroidUniversal,
      },
      {
        name: "Reversible Model - Sleek",
        description:
          "The Zittron Reversible Model – Sleek combines cutting-edge radiation protection with a modern, ergonomic design. Engineered for dual-sided use, this apron enhances durability, hygiene, and versatility while maintaining a lightweight and comfortable fit.",
        image: thyroidSleek,
      },
    ],
  },
  {
    id: "gonad",
    label: "Gonad Shield",
    intro:
      "The Zittron Gonad Shield is designed to provide essential radiation protection for reproductive health during medical imaging procedures. Crafted from high-quality, lead-equivalent materials, it ensures maximum shielding while maintaining comfort and ease of use. Ideal for patients of all ages, the ergonomic design offers secure coverage without restricting movement.",
    products: [
      {
        name: "Gonad Shield",
        description:
          "Gonad Shields are available in a single design suitable for both genders, meeting the mandatory protection standards with a level of 1.0mm Pb.",
        image: gonadShield,
      },
    ],
  },
  {
    id: "lead-glass",
    label: "Lead Glass",
    intro:
      "Lead glass is a specialized radiation-shielding material designed to protect healthcare professionals and patients from harmful ionizing radiation in medical imaging environments. It offers high transparency while effectively blocking X-ray and gamma-ray exposure, making it ideal for use in observation windows, protective barriers, and radiation therapy rooms. With excellent optical clarity and durability, lead glass ensures safety without compromising visibility.",

    products: [
      // {
      //   name: "X-Ray Protective Lead Glass",
      //   description:
      //     "High-quality lead glass panels for use in observation windows, protective barriers, and radiation therapy rooms. Available in various sizes and thicknesses to suit different installation requirements.",
      //   image: leadGlass1,
      // },
    ],
  },
];

const Consumables = () => {
  const [activeTab, setActiveTab] = useState("goggles");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Radiology Consumable"
        subtitle="Radiation protection apparel and accessories from Zittron"
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
            <div className="flex flex-col md:flex-row gap-8 items-start mb-14">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {activeCategory.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {activeCategory.intro}
                </p>
              </div>
              {activeCategory.id !== "lead-glass" && (
                <img
                  src={zittronLogo}
                  alt="Zittron"
                  className="w-40 h-auto object-contain flex-shrink-0"
                />
              )}
            </div>

            {activeCategory.products.length > 0 && (
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
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      <a
                        href="https://zittron.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        More info <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              {/* <a
                href="https://zittron.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
              >
                Visit Zittron <ExternalLink className="h-4 w-4" />
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Consumables;
