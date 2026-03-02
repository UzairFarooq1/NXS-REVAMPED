import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import icuImg from "@/assets/products/infantcare.avif";
import geLogo from "@/assets/partners/ge-healthcare.png";

// Product images
import giraffeOmnibed from "@/assets/products/giraffe-omnibed.jpg";
import giraffeIncubator from "@/assets/products/giraffe-incubator.jpg";
import pandaWarmer from "@/assets/products/panda-warmer.webp";
import giraffeWarmer from "@/assets/products/giraffe-warmer.jpg";
import lullabyWarmer from "@/assets/products/lullaby-warmer.webp";
import bilisoft2 from "@/assets/products/bilisoft-2.jpg";
import giraffeBlueSpot from "@/assets/products/giraffe-blue-spot.jpg";
import lullabyLed from "@/assets/products/lullaby-led.jpg";
import corometrics250cx from "@/assets/products/corometrics-250cx.png";
import corometrics170 from "@/assets/products/corometrics-170.jpg";

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
}

const categories: Category[] = [
  {
    id: "incubators",
    label: "Incubators",
    intro:
      "GE Healthcare's incubators provide a controlled, protective environment for newborns, ensuring optimal temperature, humidity, and oxygen levels to support neonatal development. Designed for safety, comfort, and ease of use, these incubators feature advanced thermal regulation, intuitive controls, and seamless access for caregivers. With a focus on infection control and workflow efficiency, GE's incubators integrate innovative technology to enhance neonatal care, helping fragile infants thrive while supporting clinicians with reliable and precise monitoring.",
    products: [
      {
        name: "Giraffe OmniBed Carestation",
        description:
          "From delivery to discharge, the Giraffe OmniBed Carestation is designed to address the changing and complex demands of the NICU by utilizing advanced technology to provide supportive, family-centered care solutions, consistently-controlled thermal environments, warmth during transport, improved patient access and visibility, and reliable clinical performance.",
        image: giraffeOmnibed,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/giraffe-omnibed-carestation",
      },
      {
        name: "Giraffe Incubator Carestation",
        description:
          "Small but Mighty – Empowering Babies' NICU Journey. Combining innovative technology with exceptional thermal performance, the Giraffe Incubator Carestation is a state-of-the-art neonatal environment that promotes natural, peaceful healing, while fostering a close bond between families and their babies—allowing them to be present for every step of the journey.",
        image: giraffeIncubator,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/giraffe-incubator-carestation",
      },
    ],
  },
  {
    id: "infant-warmers",
    label: "Infant Warmers",
    intro:
      "Whether in the newborn nursery or NICU, our warmers will help keep your patients warm, comfortable, and healthy. We've designed all of our warmers to work with additional Infant Care products—and with you, your patients, and your workflow in mind.",
    products: [
      {
        name: "Panda Warmers",
        description:
          "The Panda Warmer helps you focus on caring for your patients. With simple and easy-to-use features such as hands-free alarm silence, full-color display, and an integrated scale, your caregivers can focus on the most critical aspects of their job—caring for newborns and their families.",
        image: pandaWarmer,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/warmers/panda-warmer",
      },
      {
        name: "Giraffe Warmer",
        description:
          "The Giraffe Warmer provides easy access to newborns with its innovative recessed heater design, allowing caregivers to work efficiently in tight spaces while ensuring optimal warmth. Its advanced pre-warming feature allows the bed to be heated in advance without triggering alarms, ensuring a ready environment for the infant.",
        image: giraffeWarmer,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/warmers",
      },
      {
        name: "Lullaby Warmer",
        description:
          'The Lullaby Warmer is designed to provide a stress-free newborn arrival with 66% faster warm-up and uniform heat distribution, ensuring optimal positioning and even warmth via the GelHood heater. Its "Walls of Warmth" prevent heat loss, creating a stable environment for neonatal care.',
        image: lullabyWarmer,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/warmers",
      },
    ],
  },
  {
    id: "phototherapy",
    label: "Phototherapy Systems",
    intro:
      "When you're caring for your newborn patients, you want reliable phototherapy equipment that puts infant safety first. GE Healthcare's line of phototherapy products helps you deliver exceptional, effective jaundice management and promote a family-care environment.",
    products: [
      {
        name: "BiliSoft 2.0 Phototherapy System",
        description:
          "The right touch—and blue light—can make all the difference for infants with jaundice. GE Healthcare's BiliSoft 2.0 Phototherapy System meets or exceeds the American Academy of Pediatrics (AAP) guidelines for intensive phototherapy to effectively treat hyperbilirubinemia and support even the tiniest patients with more comfort, better bonding, and higher quality developmental care.",
        image: bilisoft2,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/phototherapy/bilisoft-2-phototherapy-system",
      },
      {
        name: "Giraffe Blue Spot PT Lite Phototherapy System",
        description:
          "The Giraffe™ Blue Spot PT Lite is a advanced, patient-friendly solution for treating hyperbilirubinemia, a condition affecting 60% of full-term and 80% of preterm infants. With high-intensity light output and a large spot size, it ensures effective dosage and prompt results while supporting developmental care by minimizing heat, noise, and bulky overhead equipment.",
        image: giraffeBlueSpot,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/phototherapy",
      },
      {
        name: "Lullaby LED Phototherapy System",
        description:
          "The Lullaby™ LED Phototherapy System is a compact, efficient, and user-friendly solution for treating neonatal jaundice with optimal wavelength and uniform light distribution for effective bilirubin breakdown. Its adjustable irradiance settings allow customized treatment, while its long-lasting LEDs provide up to 50,000 hours of operation, ensuring cost-effectiveness.",
        image: lullabyLed,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/phototherapy",
      },
    ],
  },
  {
    id: "fetal-monitors",
    label: "Fetal Monitors",
    intro:
      "GE Healthcare's fetal monitors provide advanced, reliable monitoring for maternal and neonatal care, ensuring accurate tracking of fetal heart rate, uterine activity, and maternal vital signs. Designed for both routine and high-risk pregnancies, these monitors offer user-friendly interfaces, seamless integration with hospital systems, and advanced analytics to support informed decision-making.",
    products: [
      {
        name: "Corometrics 250cx Series Maternal/Fetal Monitor",
        description:
          "The Corometrics™ M250cx Series maternal/fetal monitoring system is a full antepartum/intrapartum fetal monitor that includes innovative features that helps you deliver a high quality birthing experience and enhanced patient care. It monitors uterine and fetal activity including fetal heart rate, and has enhanced maternal monitoring features including temperature, oxygen saturation, ECG and non-invasive blood pressure.",
        image: corometrics250cx,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/fetal-monitors/corometrics-250cx",
      },
      {
        name: "Corometrics 170",
        description:
          "The Corometrics 170 maternal monitor non-invasively tracks a baby's heart rate for non-stress tests to deliver accurate information. Compact, lightweight, and designed for antepartum applications in offices or hospitals, it's readily available when mothers need it most—helping create a better birthing experience for mother and baby.",
        image: corometrics170,
        link: "https://www.gehealthcare.com/products/maternal-infant-care/fetal-monitors",
      },
    ],
  },
  {
    id: "fetal-resuscitation",
    label: "Fetal Resuscitation System",
    intro:
      "GE Healthcare's Fetal Resuscitation System is designed to provide immediate and effective intervention for newborns in distress, ensuring optimal respiratory support during critical moments after birth. With intuitive controls, integrated oxygen and suction capabilities, and precise monitoring, the system enables clinicians to respond quickly and efficiently. Its ergonomic design allows seamless access to the infant, while its advanced safety features help regulate oxygen delivery and maintain thermoneutrality.",
    products: [
      {
        name: "Giraffe Stand-alone Infant Resuscitation System",
        description:
          "The Giraffe Stand-alone Infant Resuscitation System provides you with access to critical equipment you need for safe, effective resuscitation of the newborns in your care. And it's so portable that you can set it up anywhere you need it, from Labor and Delivery to NICU to well-baby nursery.",
        link: "https://www.gehealthcare.com/products/maternal-infant-care/giraffe-stand",
      },
      {
        name: "Lullaby Resus Plus",
        description:
          "The Lullaby™ Resus Plus is an integrated T-piece resuscitation solution designed for fast, error-free workflows, allowing caregivers to focus on the baby rather than the equipment. It ensures precise monitoring and control of Peak Inspiratory Pressure (PIP) for effective inspiration, the delivery of Positive End Expiratory Pressure (PEEP), and reliable pressure values to review across PIP and limit PEEP. Featuring accurate oxygen blending from 21% to 100%, it aligns with ILCOR guidelines for neonatal resuscitation.",
        link: "https://www.gehealthcare.com/products/maternal-infant-care",
      },
    ],
  },
];

const MaternalInfantCare = () => {
  const [activeTab, setActiveTab] = useState("incubators");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      <PageHero
        title="Maternal & Infant Care"
        subtitle="Advanced neonatal and maternal care solutions from GE Healthcare"
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
                src={geLogo}
                alt="GE Healthcare"
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

export default MaternalInfantCare;
