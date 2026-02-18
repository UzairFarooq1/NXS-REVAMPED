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
  moreLink?: string;
}

const categories: Category[] = [
  {
    id: "printers",
    label: "Sony Printers",
    intro: "Sony's medical printers are designed to meet the highest standards of quality and precision for healthcare environments. These printers offer high-resolution imaging and reliable performance for diagnostic purposes, ensuring clear and accurate prints of medical images. With a range of models that support various media and advanced connectivity, Sony printers are ideal for use in radiology, cardiology, and other medical imaging applications.",
    moreLink: "https://pro.sony.com/bbsc/ssr/cat-medicalproducts/cat-medicalprinters/",
    products: [
      {
        name: "UP-27MD Colour Printer",
        description: "The Sony UP-27MD is a compact, high-quality medical printer designed to deliver precise imaging outputs for a wide range of medical applications. It offers excellent image quality with high resolution, making it ideal for producing clear and detailed prints of diagnostic images. The printer features advanced connectivity and reliable performance, ensuring quick and efficient printing.",
      },
      {
        name: "UP-D898MD Digital Black and White Thermal Printer",
        description: "The UP-D898MD is a compact A6 medical grade black and white digital printer. It's designed to be integrated into a wide range of compatible medical imaging environments such as digital ultrasound systems, mobile C-arms or cardiac catheterisation laboratory.",
      },
    ],
  },
  {
    id: "paper",
    label: "Sony Printing Paper",
    intro: "Sony offers a comprehensive range of medical-grade printing paper and media specifically designed for use with Sony medical printers. These high-quality consumables ensure optimal print results with accurate colour reproduction and long-lasting image durability, essential for diagnostic documentation and patient records.",
    products: [
      {
        name: "UPP-210HD High Density Thermal Paper",
        description: "High density black and white thermal printing paper for A4 size prints. Designed for use with Sony UP series printers, delivering sharp and detailed monochrome images with excellent contrast.",
      },
      {
        name: "UPC-21L Colour Print Pack",
        description: "Colour print pack for Sony UP colour printers. Includes both ink ribbon and print paper for producing vibrant, high-resolution colour prints of medical images.",
      },
    ],
  },
];

const SonyPrinters = () => {
  const [activeTab, setActiveTab] = useState("printers");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Sony Printers"
        subtitle="Medical-grade printing solutions from Sony"
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

export default SonyPrinters;
