import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import csrImg from "@/assets/cochlearkid.png";
import cochlearlogo from "@/assets/partners/cochlear.jpeg";
import baha6 from "@/assets/products/baha6.png";
import ci600 from "@/assets/products/ci600.png";
import processors from "@/assets/products/processors.png";

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
  partnerLogo?: string;
  partnerName?: string;
  products: Product[];
  moreLink?: string;
}

const categories: Category[] = [
  {
    id: "implant-systems",
    label: "Implant Systems",
    intro:
      "Cochlear is a global leader in implantable hearing solutions, offering advanced cochlear implant systems designed to restore hearing and improve quality of life. These systems combine innovative implant technology with powerful sound processors and a wide range of accessories to deliver clear, reliable hearing performance tailored to each patient.",
    partnerName: "Cochlear",
    partnerLogo: cochlearlogo,
    products: [
      {
        name: "Cochlear Implants (CI500 & CI600 Series)",
        description:
          "The Cochlear™ Nucleus® CI500 and CI600 series are advanced cochlear implant systems designed to treat severe to profound sensorineural hearing loss. Built for long-term reliability and consistent hearing performance, both series utilize proven electrode technology to deliver clear and precise sound by directly stimulating the cochlea. The CI600 series represents the latest innovation, featuring enhanced MRI compatibility, allowing for both 1.5T and 3T scans without magnet removal, as well as improved implant design for easier identification and surgical handling. Together, the CI500 and CI600 series form part of the Cochlear Nucleus system and are compatible with modern sound processors such as the Nucleus 8, ensuring a seamless and future-ready hearing solution.",
        link: "https://www.cochlear.com/us/en/home/products-and-accessories",
        image: ci600,
      },
      {
        name: "Sound Processors & Accessories",
        description:
          "Cochlear™ sound processors, including the Nucleus® 8 (N8), Nucleus® 7 (N7), N7S, N7SE, and the Kanso® 2, are designed to deliver clear, personalized hearing through advanced sound processing technology. The Nucleus 8 is the latest and smallest behind-the-ear (BTE) processor, featuring enhanced noise reduction with SmartSound® iQ 2 and SCAN 2, as well as improved ForwardFocus for better speech understanding in noisy environments. The Nucleus 7 remains a widely trusted, lightweight BTE option with reliable performance and direct streaming from compatible Apple and Android devices. The Kanso 2 offers a discreet, off-the-ear (OTE) design with an all-in-one form factor, ideal for users seeking comfort and simplicity. Across the range, users benefit from wireless connectivity, water resistance, and flexible power options. In addition, we offer a comprehensive range of compatible accessories, including wireless microphones, TV streamers, remote controls, rechargeable batteries, and mobile app solutions to enhance connectivity, convenience, and everyday listening experiences.",
        link: "https://www.cochlear.com/us/en/home/products-and-accessories",
        image: processors,
      },
    ],
  },
  {
    id: "baha",
    label: "BAHA (Bone Anchored Hearing Aid)",
    intro:
      "Cochlear Bone Anchored Hearing Solutions (BAHA) provide an effective alternative for patients with conductive hearing loss, mixed hearing loss, or single-sided deafness by transmitting sound directly through bone conduction.",
    partnerName: "Cochlear",
    partnerLogo: cochlearlogo,
    products: [
      {
        name: "Cochlear™ Baha® 6 Max Sound Processor",
        description:
          "The Cochlear™ Baha® 6 Max Sound Processor is a compact yet powerful bone conduction device designed to deliver clear sound even in noisy environments, with a 55dB fitting range. It supports direct streaming from both Apple and Android™ devices, features automatic sound adjustments through SmartSound® iQ technology, and offers improved battery performance. Users can easily control and personalize their hearing experience using the Baha Smart App, ensuring convenience, comfort, and enhanced everyday listening.",
        link: "https://www.cochlear.com/us/en/home/products-and-accessories",
        image: baha6,
      },
    ],
  },
];

const Cochlear = () => {
  const [activeTab, setActiveTab] = useState("implant-systems");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Cochlear"
        subtitle="Advanced implantable hearing solutions designed to restore hearing and improve quality of life"
        backgroundImage={csrImg}
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
                  {activeCategory.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {activeCategory.intro}
                </p>
              </div>
              {activeCategory.partnerLogo ? (
                <img
                  src={activeCategory.partnerLogo}
                  alt={activeCategory.partnerName}
                  className="w-40 h-auto object-contain flex-shrink-0"
                />
              ) : activeCategory.partnerName ? (
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary tracking-wide">
                    {activeCategory.partnerName}
                  </span>
                </div>
              ) : null}
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
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <a
                      href={product.link}
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

            {/* More info link */}
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

export default Cochlear;
