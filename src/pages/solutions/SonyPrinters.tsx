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
    intro: "Sony offers high-quality medical printing paper in both color and black & white formats, designed for use with its range of medical printers. The color printing paper provides vibrant and precise image reproduction, ideal for applications requiring detailed visualization, such as ultrasound and endoscopy.",
    products: [
      {
        name: "UPC Color Print Pack",
        description: "The UPC21L color print pack is designed for use with a range of Sony medical printers, including the UP-27MD, UP-D25MD, UP-25MD, UP-D23MD, UP-21MD, and UP-20. It offers high-quality color printing, ensuring vibrant and accurate image reproduction essential for medical imaging applications.",
      },
      {
        name: "UPP-110HG Black and White high glossy print media",
        description: "The UPP-110HG is a high-glossy, black-and-white thermal print media designed for Sony medical printers. Ideal for ultrasound and other medical imaging applications, this premium print media helps maintain sharpness, contrast, and smooth tonal gradations while reducing the risk of print curling. It is specifically compatible with Sony printers like UP-X898MD, D898MD, D898DC, 897MD, and D897.",
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
