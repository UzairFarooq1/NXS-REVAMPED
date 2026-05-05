import { motion } from "framer-motion";
import vanguardLogo from "@/assets/vanguard-logo.png";
import shimadzuLogo from "@/assets/partners/shimadzu.png";
import baxterGambroLogo from "@/assets/partners/baxter-gambro.png";
import geHealthcareLogo from "@/assets/partners/ge-healthcare.png";
import trumpfLogo from "@/assets/partners/trumpf.png";
import leicaLogo from "@/assets/partners/leica.png";
import eskayLogo from "@/assets/partners/eskay.jpg";
import wegoLogo from "@/assets/partners/wego.png";
import olympuslogo from "@/assets/partners/olympus.png";
import cochlearlogo from "@/assets/partners/cochlear.jpeg";
import HillromLogo from "@/assets/partners/baxter-hillrom.png";

const partners = [
  {
    name: "Olympus",
    specialty: "Endoscopy & Surgical Equipment",
    logo: olympuslogo,
  },
  {
    name: "Shimadzu",
    specialty: "Precision & Medical Instruments",
    logo: shimadzuLogo,
  },
  { name: "WEGO", specialty: "Renal Care & Hemodialysis", logo: wegoLogo },

  {
    name: "GE Healthcare",
    specialty: "Medical Imaging & Diagnostics",
    logo: geHealthcareLogo,
  },
  {
    name: "Baxter",
    specialty: "Operating Theatre Solutions",
    logo: HillromLogo,
  },
  {
    name: "Cochlear",
    specialty: "Hearing Implant Solutions",
    logo: cochlearlogo,
  },
  { name: "Leica", specialty: "Precision Optics & Imaging", logo: leicaLogo },
  {
    name: "Eskay Fine Chemicals",
    specialty: "Contrast Media & Chemicals",
    logo: eskayLogo,
  },
];

const hasWhiteLogoBackground = (name: string) =>
  ["WEGO", "GE Healthcare", "Leica", "Shimadzu", "Olympus", "Baxter"].includes(
    name,
  );

const PartnersSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-heading font-semibold tracking-widest uppercase text-primary-foreground/70 mb-2">
            World-Class Partnerships
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-primary-foreground/15 transition-colors"
            >
              <div
                className={`flex items-center justify-center ${
                  partner.name === "Olympus" || partner.name === "Shimadzu"
                    ? "h-24"
                    : "h-16"
                }`}
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`w-auto object-contain ${
                      partner.name === "Olympus"
                        ? "max-h-20"
                        : partner.name === "Shimadzu"
                          ? "max-h-20"
                          : "max-h-12"
                    } ${
                      hasWhiteLogoBackground(partner.name)
                        ? "bg-white rounded-md p-2"
                        : ""
                    }`}
                  />
                ) : (
                  <span className="text-lg font-heading font-bold opacity-90">
                    {partner.name}
                  </span>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-sm mb-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-primary-foreground/60">
                  {partner.specialty}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <img
            src={vanguardLogo}
            alt="Vanguard Group"
            className="h-14 md:h-16 w-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
