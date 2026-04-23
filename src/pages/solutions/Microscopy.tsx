import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import microscopyImg from "@/assets/products/leicamicroscope.webp";
import leicaLogo from "@/assets/partners/leica.png";
import { ExternalLink } from "lucide-react";

// Ophthalmology microscope images
import leicaM220 from "@/assets/products/leica-m220-f12.jpg";
import leicaM620 from "@/assets/products/leica-m620-f20.png";
import myveoHeadset from "@/assets/products/my-veo.png";
import leicaM822 from "@/assets/products/leica-m822.jpg";
import leicaProveo8 from "@/assets/products/leica-proveo-8.jpg";

// Surgical microscope images
import leicaM320 from "@/assets/products/leica-m320.jpg";
import leicaM525 from "@/assets/products/leica-m525-f20.jpg";
import leicaProvido from "@/assets/products/leica-provido.jpg";
import leicaArveo8 from "@/assets/products/leica-arveo-8.jpg";

interface Product {
  name: string;
  description: string;
  image: string;
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
    id: "ophthalmology",
    label: "Ophthalmology Microscopes",
    intro:
      "Leica ophthalmic surgical microscopes are designed for precision, efficiency, and versatility across a wide range of ophthalmic procedures, from routine cataract surgery to complex vitreoretinal and corneal procedures. Featuring high-resolution optics, advanced illumination systems, and ergonomic designs, Leica microscopes provide superior visualization, enhancing surgical precision and efficiency. Leica ophthalmic surgical microscopes support complex procedures, improving patient outcomes and optimizing workflow in modern operating rooms.",
    products: [
      {
        name: "Leica M220 F12",
        description:
          "The Leica M220 F12 is a high-performance, one-of-a-kind ophthalmic surgical microscope designed for precision, efficiency, and value. Featuring a motorized 5-step APO-chromatic magnification changer and LED illumination without fibre optics cables for direct and instant Red Reflex, with a wider depth of focus to reduce refocusing, a paper-like detail on thin surfaces. The compact design offers a long-reach stand system, providing a high degree of positioning freedom in a cost-effective yet feature-rich platform. The Leica M220 F12 supports elegant cataract operations, encouraging flexibility and high-quality performance for years of ophthalmic procedures.",
        image: leicaM220,
        link: "https://www.leica-microsystems.com/applications/medical/",
      },
      {
        name: "LEICA M620 F20",
        description:
          "The Leica M620 F20 is an ideal microscope designed for precision and efficiency in anterior segment surgery. Featuring Leica FusionOptics for natural, sharp, high-contrast, and excellent depth of focus. The hands-on zoom maintains blur-free images in real time, even in challenging cases. The handrest on the boom increases stability, boosting confidence, and enhancing precision while the high-speed's centre of gravity control delivers extraordinary stability. Its accurate and clear LED illumination provides even, white light for natural colour rendering. The Leica M620 F20 delivers brighter visualisation in a more compact microscope that helps to reduce eye fatigue during long procedures.",
        image: leicaM620,
        link: "https://www.leica-microsystems.com/applications/medical/",
      },
      // {
      //   name: "M844 F40",
      //   description:
      //     "The Leica M844 F40 is designed for exceptional optical clarity, providing surgeons with a high-contrast image through its APO Optics apochromatic optics, with enhanced resolution and depth of focus. The Integrated QuadZoom system delivers brilliant and fine-detailed image clarity and consistent red-reflex illumination under a variety of conditions, in both dimmed- and high-ambient-light conditions. It combines Leica's outstanding FusionOptics technology, delivering superior brightness, colour fidelity, and contrast while operating at low light levels, enhancing safety for both patients and surgeons. The advanced depth-of-focus in retro-vitreal ophthalmic microscopy is outstanding, adding visibility of fine structures and surface detail on sensitive tissues.",
      //   image: leicaM844,
      // },
      {
        name: "M822",
        description:
          "The Leica M822 ophthalmic surgical microscope combines LED illumination with its elegant, ultra-bright LED and halogen optics. It provides a brighter and stable red reflex for enhanced visualisation during cataract or retinal operations. The SPOT Optic luminaire system provides a clean, high-resolution, and high-contrast surgical image with a superior depth of field. Designed for efficiency and elegance with its M822 offers clean, comfortable solutions with focus, power-on, and manual zoom and macro controls. Together with the FusionOptics vision tech, surgeons get constant comfort at lowest light levels, providing better contrast and resolution as well as stronger safety protection of the patient's retina. Additionally, the M822 also features a 3D/4K 2D recording, a 4K Open Architecture video processing sensor and wide accessories/disposables for documentation.",
        image: leicaM822,
        link: "https://www.leica-microsystems.com/applications/medical/",
      },
      {
        name: "Proveo 8 Ophthalmic Surgical Microscope",
        description:
          "The Leica Proveo 8 ophthalmic surgical microscope is designed for precision, efficiency, and seamless workflow in both anterior and posterior eye procedures. Featuring a comprehensive CoAx 4 coaxial illumination for perfectly stable red reflex. The Integrated Image Guided Systems (IOLcompass guidance) provides a steady, high-resolution, current real-time image for the precise alignment of IOLs. Leica's advanced depth-of-field with a 3D/4K 2D coverage, a change of view and a variable field-of-view system, ensures smooth and accurate surgical process with FusionOptics. Proveo 8 delivers ultra-stable performance and versatility, offering cutting-edge digital solution for optimal patient outcomes.",
        image: leicaProveo8,
        link: "https://www.leica-microsystems.com/applications/medical/",
      },
    ],
  },
  {
    id: "surgical",
    label: "Surgical Microscopes",
    intro:
      "Leica surgical microscopes are designed for precision and versatility across multiple specialties, including ENT (ear, nose, and throat), neurosurgery, and dental procedures. Featuring high-resolution optics, advanced illumination systems, and ergonomic designs, Leica microscopes provide superior visualization, enhancing surgical precision and efficiency. Leica surgical microscopes support complex procedures, improving patient outcomes and optimizing workflow in modern operating rooms.",
    products: [
      {
        name: "M320 microscope",
        description:
          "The Leica M320 is a compact and versatile surgical microscope designed to deliver exceptional optical performance in a variety of surgical applications. Featuring high-definition optics, built-in FusionOptics, and an ergonomic design, it offers superior visualization for ENT, dental, and routine surgical procedures. The M320 combines ease of use with a long reach stand system, the ability to handle complex procedures, integration with media capture and documentation systems, and compatibility with various surgical discipline-specific accessories.",
        image: leicaM320,
        link: "https://www.leica-microsystems.com/applications/medical/",
      },
      // {
      //   name: "M525 F20",
      //   description:
      //     "The Leica M525 F20 is a multi-purpose surgical microscope combining cost-efficiency and convenience. Features, such as the fluorescence module Leica FL800, BrightCare, HD documentation, and others, make it the ideal microscope for procedures in Neurosurgery, Spine, Otolaryngology, and Plastic Reconstructive Surgery. The system provides quality and reliability in every respect: the optics, design, engineering, materials, components, operation, ergonomics and use.",
      //   image: leicaM525,
      // },
      // {
      //   name: "PROvido with FusionOptics",
      //   description:
      //     "The PROvido multidisciplinary surgical microscope is designed to provide enhanced visibility and seamless workflow for demanding surgical procedures. Featuring a groundbreaking FusionOptics technology, it combines an extended depth of field with high-resolution optics for a natural, crisp view. The handrest increases stability, boosting confidence and enhancing precision while the high-speed's centre of gravity control delivers extraordinary stability. The PROvido offers gentle patient-eye-care benefits, superior visualization with constant comfort and the ability to reach your surgical best with ease. With the SpeedSwitch system for quick mounting, and an optional light guided FusionOptics Multiplier, it provides efficient, effective ergonomic workstation with customized optical solutions.",
      //   image: leicaProvido,
      //   link: "https://www.leica-microsystems.com/applications/medical/",
      // },
      {
        name: "MyVeo All-In-One Surgical Visualization Headset",
        description:
          "The MyVeo surgical visualization headset by Leica Microsystems introduces a new era of immersive 3D visualization for neurosurgery, ophthalmology, and other complex procedures. Designed to work seamlessly with the ARveo 8 and Proveo 8x digital microscopes, MyVeo delivers a unified visual experience by integrating critical clinical data directly into the surgeon’s field of view in real time. Surgeons benefit from enhanced focus and uninterrupted workflow without the need to look at multiple screens. Its ergonomic, lightweight design promotes natural posture, reduces strain during long procedures, and allows freedom of movement with flip-up near-eye displays. MyVeo also enhances collaboration by enabling up to three users to simultaneously view surgery in real-time 3D, making it a powerful tool for teaching and team coordination. With customizable image orientations, augmented reality integration, and seamless access to imaging data, MyVeo empowers surgical teams with precision, comfort, and efficiency in the operating room.",
        image: myveoHeadset,
        link: "https://www.leica-microsystems.com/applications/medical/",
      },
      {
        name: "ARveo 8",
        description:
          "The ARveo 8 digital visualization microscope from Leica Microsystems is a breakthrough in neurosurgical digital technology, delivering enhanced AR (augmented reality) visualization capabilities. It features AI-powered 3D visualizations, MRI data overlays, and advanced image-guided visualization tools for brain tumour surgery. Leica Microsystems IT-based intelligent microscope ecosystems is designed for neurosurgery, spine surgery and oncology, developing cutting-edge digital solution for optimal patient outcomes.",
        image: leicaArveo8,
        link: "https://www.leica-microsystems.com/applications/medical/",
      },
    ],
  },
];

const Microscopy = () => {
  const [activeTab, setActiveTab] = useState("ophthalmology");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Operating Microscopes"
        subtitle="Premium surgical microscopes from Leica Microsystems for ophthalmology, neurosurgery, ENT, and more"
        backgroundImage={microscopyImg}
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
            {/* Header */}
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
                src={leicaLogo}
                alt="Leica Microsystems"
                className="w-40 h-auto object-contain flex-shrink-0"
              />
            </div>

            {/* Products */}
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
                  <div className="md:w-2/5 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto rounded-xl object-contain max-h-72"
                    />
                  </div>
                  <div className="md:w-3/5">
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
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Microscopy;
