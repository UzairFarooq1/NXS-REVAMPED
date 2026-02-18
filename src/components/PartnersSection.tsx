import { motion } from "framer-motion";
import vanguardLogo from "@/assets/vanguard-logo.png";
import trumpfLogo from "@/assets/partners/trumpf.png";
import nihonKohdenLogo from "@/assets/partners/nihon-kohden.png";
import geHealthcareLogo from "@/assets/partners/ge-healthcare.png";
import leicaLogo from "@/assets/partners/leica.png";
import sonyLogo from "@/assets/partners/sony.png";
import niproLogo from "@/assets/partners/nipro.png";

const partners = [
  { name: "Trumpf Medical", specialty: "Operating Theatre Solutions", logo: trumpfLogo },
  { name: "Nihon Kohden", specialty: "Patient Monitoring & Neurology", logo: nihonKohdenLogo },
  { name: "GE Healthcare", specialty: "Imaging & ICU Monitoring", logo: geHealthcareLogo },
  { name: "Leica Microsystems", specialty: "Surgical Microscopy", logo: leicaLogo },
  { name: "Sony Medical", specialty: "Medical Imaging & Printers", logo: sonyLogo },
  { name: "Nipro", specialty: "Renal Care & Dialysis", logo: niproLogo },
];

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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="h-12 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-primary-foreground/60">{partner.specialty}</p>
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
