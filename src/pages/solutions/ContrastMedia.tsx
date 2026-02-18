import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import radiologyImg from "@/assets/radiology.jpg";
import eskayLogo from "@/assets/partners/eskay.jpg";

// Product images
import microbarPowder from "@/assets/products/microbar-powder.jpg";
import microbarSuspension from "@/assets/products/microbar-suspension.png";
import microbarEnema from "@/assets/products/microbar-enema.png";
import microgad from "@/assets/products/microgad.png";
import microhex350 from "@/assets/products/microhex-350.png";
import microhex300 from "@/assets/products/microhex-300.png";
import microimage from "@/assets/products/microimage.png";

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
  moreLink?: string;
}

const categories: Category[] = [
  {
    id: "barium",
    label: "Barium Solutions and Powders",
    intro: "Eskay Fine Chemicals, a pioneering manufacturer of high-quality Barium Sulphate formulations for radiological imaging. With their decades of expertise and commitment to excellence, Eskay's Microbar products align perfectly with our mission to provide cutting-edge radiology solutions that enhance diagnostic accuracy and patient care.",
    moreLink: "http://www.microbar.co.in/product.html",
    products: [
      {
        name: "Microbar Powder 3.5kg",
        description: "Microbar is a white, heavy powder with a sweet vanilla flavor, formulated using coarse particles of Barium Sulphate for optimal radiological imaging. It is highly palatable, resistant to flocculation, and cost-effective, making it ideal for routine upper GI tract examinations and follow-through studies. Available in 3.5 kg HDPE jars, the recommended dosage is 175 gm of powder mixed with 150 ml of water.",
        image: microbarPowder,
        link: "http://www.microbar.co.in/powder.htm",
      },
      {
        name: "Microbar Suspension 1 Litre bottle",
        description: "Microbar Suspension is the only liquid preparation designed for routine upper GI tract and follow-through examinations, offering a smooth, creamy suspension of coarse Barium Sulphate particles. Its non-gritty texture, excellent flow, and perfect adhesion ensure accurate diagnosis, while its fruity flavor and pink-colored formulation enhance patient comfort.",
        image: microbarSuspension,
        link: "http://www.microbar.co.in/suspension.htm",
      },
      {
        name: "Microbar for ENEMA (Disposable Kit) 400 gm / 454 gm bags",
        description: "Microbar Enema Bag is a ready-to-use, disposable system designed for speed, convenience, and accuracy in large bowel X-ray diagnosis. It contains 400 gm/454 gm of Barium Sulphate powder, formulated with coarse particles for enhanced imaging.",
        image: microbarEnema,
        link: "http://www.microbar.co.in/enema.htm",
      },
    ],
  },
  {
    id: "mri",
    label: "MRI Contrast Media",
    intro: "Eskay Fine Chemicals extends its expertise in radiological contrast agents with a specialised range of MRI Contrast Media, designed to enhance soft tissue visualisation and diagnostic accuracy.",
    moreLink: "https://www.sk1932.com/eskay-speciality-chemicals",
    products: [
      {
        name: "Microgad 20ml",
        description: "Microgad 20ml is a high-quality Gadolinium Based Contrast Agent (GBCA) designed for enhanced MRI Imaging, providing superior tissue differentiation and diagnostic accuracy. Its high relaxivity and low osmolality ensure patient safety and minimal adverse reactions, making it ideal for brain, spine, and vascular imaging. Manufactured under strict WHO-GMP standards.",
        image: microgad,
      },
    ],
  },
  {
    id: "ct",
    label: "CT Contrast Media",
    intro: "Eskay Fine Chemicals offers high-quality CT Contrast Media, designed to provide exceptional vascular and tissue enhancement for Computed Tomography (CT) Imaging. Our Iodinated Contrast Agents ensure high radiodensity, rapid distribution, and excellent biocompatibility.",
    moreLink: "https://www.sk1932.com/eskay-speciality-chemicals",
    products: [
      {
        name: "Microhex 350mg/100ml",
        description: "Microhex 350mg/100ml is a high-quality oral contrast agent formulated for enhanced imaging of the gastrointestinal tract during CT and X-ray examinations. With its optimised concentration of Iohexol, it ensures excellent contrast enhancement, providing clear differentiation of the GI tract for accurate diagnostics.",
        image: microhex350,
      },
      {
        name: "Microhex 300mg/50ml",
        description: "Microhex 300mg/50ml is a non-ionic iodinated contrast media used in CT imaging for enhanced visualization of vascular structures and body tissues. It provides high radiopacity with excellent tolerability, ensuring clear and detailed diagnostic images.",
        image: microhex300,
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
        image: microimage,
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
                src={eskayLogo}
                alt="Eskay Fine Chemicals"
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
                        View Details <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
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

export default ContrastMedia;
