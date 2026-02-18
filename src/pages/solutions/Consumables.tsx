import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import radiologyImg from "@/assets/radiology.jpg";

interface Product {
  name: string;
  description: string;
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
    intro: "Zittron offers a comprehensive range of lead goggles designed for superior radiation protection, comfort, and durability. Whether you need advanced eye shielding for medical, industrial, or research applications, Zittron provides high-quality, innovative goggles that ensure maximum safety while maintaining a lightweight and ergonomic design. Using state-of-the-art materials and precision manufacturing, Zittron delivers reliable eye protection tailored to your specific needs.",
    products: [
      {
        name: "Zittron Radiation Protection Eyewear",
        description: "Zittron's collection of eyewear offers a blend of elegance and functionality. These eyeglasses are not only stylish but also lightweight, making them comfortable to wear. They are designed to accommodate prescription lenses, although certain limitations apply to curved frames. The lenses have undergone rigorous testing in accordance with IEC 61331-1:2014 standards by LMG, achieving a protection level of 0.8mm Pb with a tolerance of 5%. What sets these lenses apart is their durability, as they are crafted by leading experts in the industry and are designed to resist yellowing over time.",
      },
    ],
  },
  {
    id: "double-apron",
    label: "Double Sided Apron",
    intro: "The Double Sided Apron, also referred to as a Wrap, is a favoured choice for X-ray-assisted procedures, offering comprehensive protection to healthcare professionals in the room. It guarantees protection from scattered radiation with a minimum of 0.35mm Pb shielding in the front and 0.25mm Pb in the back, in compliance with the IEC 61331-3:2014 standards adopted by numerous countries worldwide.",
    products: [
      {
        name: "Double Sided Apron Model - Merge",
        description: "The Zittron Double-Sided Apron Model – Merge offers superior radiation protection with a balanced weight distribution for enhanced comfort during extended use. Designed for medical, industrial, and research applications, this apron provides full front and back coverage, ensuring maximum safety without compromising mobility. Crafted with high-quality, durable materials, the Merge model combines advanced shielding technology with an ergonomic fit.",
      },
      {
        name: "Double Sided Apron Model - Cross",
        description: "The Zittron Double-Sided Apron Model – Cross is designed for maximum radiation protection with an ergonomic cross-back design that evenly distributes weight, reducing strain during extended wear. Ideal for medical, industrial, and research applications, this apron provides full front and back coverage while ensuring comfort and mobility.",
      },
    ],
  },
  {
    id: "coat-apron",
    label: "Coat Apron",
    intro: "Frontal Coat Apron is a traditional protective garment primarily used in the X-ray room but its application can extend to lengthy surgical procedures. This type of apron shields the front area of the body, spanning from the shoulders to just below the knees and is crafted in accordance with the IEC 61331-3:2014 standards. It is classified as an open-front apron with a minimum protection level of 0.25mm Pb available with either velcro or buckle closure.",
    products: [
      {
        name: "Coat Apron Model - Buckle Closure",
        description: "The Zittron Coat Apron Model – Buckle Closure offers superior radiation protection with a convenient and secure buckle fastening system for a snug and adjustable fit. Designed for medical, industrial, and research applications, this apron provides full front and partial back coverage while ensuring ease of movement and comfort during extended wear.",
      },
      {
        name: "Coat Apron Model - Reversible",
        description: "Zittron introduces the first Reversible Apron. A frontal apron which can be worn from both sides. Reversible Apron makes the apron more hygienic and more user friendly. It enhances the life of the product substantially because of dual side use.",
      },
    ],
  },
  {
    id: "thyroid",
    label: "Thyroid Shield",
    intro: "Protective thyroid shields come in two distinct variations, each of which can be equipped with either Velcro or magnet closures. These shields constitute an indispensable component of the comprehensive set of protective apparel essential for healthcare personnel. They must meet a minimum requirement of 0.5mm Pb in accordance with the IEC 61331-3:2014 standards.",
    products: [
      {
        name: "Reversible Model - Universal",
        description: "The Zittron Reversible Model – Universal is designed for maximum flexibility, allowing dual-sided wear for enhanced durability and hygiene. This innovative apron provides superior radiation protection while maintaining a lightweight, ergonomic fit for all-day comfort.",
      },
      {
        name: "Reversible Model - Sleek",
        description: "The Zittron Reversible Model – Sleek combines cutting-edge radiation protection with a modern, ergonomic design. Engineered for dual-sided use, this apron enhances durability, hygiene, and versatility while maintaining a lightweight and comfortable fit.",
      },
    ],
  },
  {
    id: "gonad",
    label: "Gonad Shield",
    intro: "The Zittron Gonad Shield is designed to provide essential radiation protection for reproductive health during medical imaging procedures. Crafted from high-quality, lead-equivalent materials, it ensures maximum shielding while maintaining comfort and ease of use. Ideal for patients of all ages, the ergonomic design offers secure coverage without restricting movement.",
    products: [
      {
        name: "Gonad Shield",
        description: "Gonad Shields are available in a single design suitable for both genders, meeting the mandatory protection standards with a level of 1.0mm Pb.",
      },
    ],
  },
  {
    id: "lead-glass",
    label: "Lead Glass",
    intro: "Lead glass is a specialized radiation-shielding material designed to protect healthcare professionals and patients from harmful ionizing radiation in medical imaging environments. It offers high transparency while effectively blocking X-ray and gamma-ray exposure, making it ideal for use in observation windows, protective barriers, and radiation therapy rooms. With excellent optical clarity and durability, lead glass ensures safety without compromising visibility, supporting precision in radiology, fluoroscopy, and other diagnostic applications.",
    products: [],
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
          <div className="flex overflow-x-auto -mb-px">
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
            </div>

            {activeCategory.products.length > 0 && (
              <div className="space-y-12">
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
            )}

            <div className="mt-12 text-center">
              <a
                href="https://zittron.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
              >
                Visit Zittron <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Consumables;
