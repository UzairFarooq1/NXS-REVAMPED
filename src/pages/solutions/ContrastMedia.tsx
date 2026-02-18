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
    id: "barium",
    label: "Barium Solutions and Powders",
    intro: "Eskay Fine Chemicals, a pioneering manufacturer of high-quality Barium Sulphate formulations for radiological imaging. With their decades of expertise and commitment to excellence, Eskay's Microbar products align perfectly with our mission to provide cutting-edge radiology solutions that enhance diagnostic accuracy and patient care.",
    products: [
      {
        name: "Microbar Powder 3.5kg",
        description: "Microbar is a white, heavy powder with a sweet vanilla flavor, formulated using coarse particles of Barium Sulphate for optimal radiological imaging. It is highly palatable, resistant to flocculation, and cost-effective, making it ideal for routine upper GI tract examinations and follow-through studies. Available in 3.5 kg HDPE jars, the recommended dosage is 175 gm of powder mixed with 150 ml of water. Each 100 gm contains 92 gm of Barium Sulphate B.P., with a palatable base to ensure patient comfort during diagnostic procedures.",
      },
      {
        name: "Microbar Suspension 1 Litre bottle",
        description: "Microbar Suspension is the only liquid preparation designed for routine upper GI tract and follow-through examinations, offering a smooth, creamy suspension of coarse Barium Sulphate particles. Its non-gritty texture, excellent flow, and perfect adhesion ensure accurate diagnosis, while its fruity flavor and pink-colored formulation enhance patient comfort. Totally resistant to flocculation, it provides consistent imaging quality. Available in 1-liter bottles, the dosage includes 30 ml undiluted for mucosal patterns, with the remaining 120 ml mixed with 80 ml of water for complete studies.",
      },
      {
        name: "Microbar for ENEMA (Disposable Kit) 400 gm / 454 gm bags",
        description: "Microbar Enema Bag is a ready-to-use, disposable system designed for speed, convenience, and accuracy in large bowel X-ray diagnosis. It contains 400 gm/454 gm of Barium Sulphate powder, formulated with coarse particles for enhanced imaging. The one-way passage enema nozzle ensures efficient barium flow, controlled air insufflation, and secure retention with an inflatable cuff, preventing over-inflation. Available in PVC prefilled bags, the dosage varies based on patient size.",
      },
    ],
  },
  {
    id: "mri",
    label: "MRI Contrast Media",
    intro: "Eskay Fine Chemicals extends its expertise in radiological contrast agents with a specialised range of MRI Contrast Media, designed to enhance soft tissue visualisation and diagnostic accuracy.",
    products: [
      {
        name: "Microgad 20ml",
        description: "Microgad 20ml is a high-quality Gadolinium Based Contrast Agent (GBCA) designed for enhanced MRI Imaging, providing superior tissue differentiation and diagnostic accuracy. Its high relaxivity and low osmolality ensure patient safety and minimal adverse reactions, making it ideal for brain, spine, and vascular imaging. Manufactured under strict WHO-GMP standards, Microgad 20ml guarantees consistent performance and excellent imaging results. With its optimised formulation, it offers precise contrast enhancement, aiding radiologists in detecting abnormalities with confidence.",
      },
    ],
  },
  {
    id: "ct",
    label: "CT Contrast Media",
    intro: "Eskay Fine Chemicals offers high-quality CT Contrast Media, designed to provide exceptional vascular and tissue enhancement for Computed Tomography (CT) Imaging. Our Iodinated Contrast Agents ensure high radiodensity, rapid distribution, and excellent biocompatibility, making them ideal for a wide range of diagnostic applications, including angiography, organ imaging, and tumour detection.",
    products: [
      {
        name: "Microhex 350mg/100ml",
        description: "Microhex 350mg/100ml is a high-quality oral contrast agent formulated for enhanced imaging of the gastrointestinal tract during CT and X-ray examinations. With its optimised concentration of Iohexol, it ensures excellent contrast enhancement, providing clear differentiation of the GI tract for accurate diagnostics. The 350mg/100ml formulation offers superior biocompatibility and safety, making it ideal for routine and follow-up studies of the stomach, duodenum, and small bowel.",
      },
      {
        name: "Microhex 300mg/50ml",
        description: "Microhex 300mg/50ml is a non-ionic iodinated contrast media used in CT imaging for enhanced visualization of vascular structures and body tissues. It provides high radiopacity with excellent tolerability, ensuring clear and detailed diagnostic images. Its low osmolality and balanced iodine concentration help reduce patient discomfort while maintaining diagnostic accuracy.",
      },
    ],
  },
  {
    id: "oral",
    label: "Oral Contrast Media",
    intro: "Oral contrast plays a vital role in enhancing the visualisation of the gastrointestinal (GI) tract during diagnostic imaging procedures such as CT scans and X-rays. Microimage 250mg/100ml is a high-quality oral contrast agent specifically designed to improve the delineation of the stomach, duodenum, and small bowel.",
    products: [
      {
        name: "Microimage 250mg/100ml",
        description: "Microimage 250mg/100ml is a premium oral contrast agent designed for high-quality imaging of the gastrointestinal tract during X-ray and CT examinations. Its 250mg/100ml concentration ensures optimal contrast enhancement, aiding in the clear visualisation of the stomach, duodenum, and small bowel.",
      },
    ],
  },
];

const ContrastMedia = () => {
  const [activeTab, setActiveTab] = useState("barium");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Contrast Media"
        subtitle="Radiological contrast agents from Eskay Fine Chemicals"
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
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ContrastMedia;
