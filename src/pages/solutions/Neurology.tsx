import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import heroImg from "@/assets/neurology.jpg";
import natus from "@/assets/Natus_logo.jpg";
import ultraProImg from "@/assets/products/natus-ultrapro-s100.png";
import nicoletOneImg from "@/assets/products/natus-nicoletone-veeg.jpg";
import veegAmpsImg from "@/assets/products/natus-veeg-amplifiers.jpg";

interface Product {
  name: string;
  description: string;
  features?: string[];
  image?: string;
  /** Tall product shots get a wider column and more height so they read clearly. */
  largeImage?: boolean;
  link?: string;
}

const intro =
  "Natus is a global leader in neurodiagnostics, backed by over 60 years of clinical knowledge in EMG diagnostic development. Alongside their electromyography (EMG), nerve conduction study (NCS) and evoked potential (EP) systems, we have also ventured into EEG with the Natus NicoletOne range — proven, field-tested platforms that deliver the essential features clinical teams rely on.";

const products: Product[] = [
  {
    name: "Natus® UltraPro S100",
    description:
      "The next generation UltraPro S100 builds on the success of the VikingQuest and previous UltraPro models for EMG, NCS and EP testing. Developed in close collaboration with physicians and technologists, its familiar, easy-to-use interface and superior signal quality help assess patients with a greater level of certainty. Available in two form factors — a lightweight system that travels easily in a roller case, or a mobile, cart-based system.",
    features: [
      "Simple, three-cable setup to start performing studies faster",
      "Familiar, customizable workflows and user-friendly interface",
      "High-Definition EMG™ delivers 4,800 points per trace in routine motor and sensory nerve conduction studies",
      "AANEM reference values automatically selected by patient age, height, gender and body mass index",
      "Built with industry-leading Natus Elite™ software powered by Viking or Synergy",
      "Choice of 3- or 4-channel amplifier, with electrical stimulator probe included",
      "Programmable stimulator buttons and triple-programmable footswitch for hands-free operation",
    ],
    image: ultraProImg,
    largeImage: true,
    link: "https://natus.com/ultrapro",
  },
  {
    name: "NicoletOne vEEG System",
    description:
      "The NicoletOne vEEG system offers excellent value without compromising quality, delivering essential features for efficient performance that make it ideal for your clinical needs. It provides all the features of sophisticated EEG systems such as photic stimulation, timers for hyperventilation, data remontaging, reports and more, and can be enhanced with optional add-on packages including digital video, spike and seizure detection or sleep analysis.",
    features: [
      "Synchronous video at up to 640 x 480 resolution",
      "Spike and seizure detection — online and offline, with user-configurable parameters and post-acquisition sensitivity adjustment via a slider control",
      "Trend analysis: envelope, total power, absolute and relative band power, amplitude integrated EEG, spectral edge and spectrogram, with unlimited simultaneous trends",
      "Topographic brain maps: band power, coherence and amplitude maps",
      "Remote control of a recording session over a Local Area Network (LAN), with the full functionality of the acquisition program",
      "Remote review of data over the Internet using a Citrix server, for timely patient care-related decisions",
      "Sleep analysis to transform the system into a fully-functional polysomnography system",
      "NicVue Connect HL7 to seamlessly connect diagnostic equipment to the Hospital Information System (HIS)",
    ],
    image: nicoletOneImg,
    largeImage: true,
    link: "https://www.natus.com",
  },
  {
    name: "vEEG Amplifiers & Headboxes (v32 and v44)",
    description:
      "Field-tested, rugged and reliable, the v32 and v44 amplifiers and headboxes are built for everyday clinical use. A passive headbox with a glow-in-the-dark overlay makes them easy to use in darkened environments, while an integrated impedance display lets you check impedance values right at the bedside.",
    features: [
      "Passive headbox with glow-in-the-dark overlay for ease of use in darkened environments",
      "Integrated impedance display — see impedance values right at the bedside",
      "Integrated SpO2 enabling sleep monitoring",
      "Ethernet amplifier interface for an industry-standard connection",
      "9 auxiliary pairs (AC or DC) for devices such as respiratory belts and thermistors",
      "Patient event button that creates entries in the event list",
      "One high level DC input (v32) or 12 high level DC inputs (v44) for devices such as CPAP",
    ],
    image: veegAmpsImg,
    link: "https://www.natus.com",
  },
];

const Neurology = () => {
  return (
    <Layout>
      <PageHero
        title="Neurology"
        subtitle="Neurodiagnostic solutions for EMG, nerve conduction, evoked potentials and EEG"
        backgroundImage={heroImg}
      />

      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Intro with partner name */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-14">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Neurodiagnostics
                </h2>
                <p className="text-muted-foreground leading-relaxed">{intro}</p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                {/* <span className="text-2xl font-bold text-primary tracking-wide">
                  Natus
                </span> */}
                <img src={natus} alt="natus logo" width={300} height={200} />
              </div>
            </div>

            <div className="space-y-16">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {product.image && (
                    <div
                      className={`flex-shrink-0 ${
                        product.largeImage ? "md:w-1/2" : "md:w-2/5"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-auto rounded-xl object-contain ${
                          product.largeImage ? "max-h-[34rem]" : "max-h-72"
                        }`}
                      />
                    </div>
                  )}

                  <div
                    className={
                      product.image
                        ? product.largeImage
                          ? "md:w-1/2"
                          : "md:w-3/5"
                        : "w-full"
                    }
                  >
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    {product.features && (
                      <ul className="mt-4 space-y-2">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        More info <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Neurology;
