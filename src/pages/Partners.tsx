import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import trumpfLogo from "@/assets/partners/trumpf.png";
import nihonKohdenLogo from "@/assets/partners/nihon-kohden.png";
import geHealthcareLogo from "@/assets/partners/ge-healthcare.png";
import leicaLogo from "@/assets/partners/leica.png";
import sonyLogo from "@/assets/partners/sony.png";
import niproLogo from "@/assets/partners/nipro.png";
import vanguardLogo from "@/assets/vanguard-logo.png";

const partners = [
  {
    name: "Trumpf Medical",
    logo: trumpfLogo,
    specialty: "Operating Theatre Solutions",
    description: "World-leading manufacturer of surgical lights, operating tables, and ceiling-suspended supply systems for the modern operating theatre.",
  },
  {
    name: "Nihon Kohden",
    logo: nihonKohdenLogo,
    specialty: "Patient Monitoring & Neurology",
    description: "Japanese pioneer in patient monitoring systems, EEG, EMG, and clinical information systems for critical care and neurology departments.",
  },
  {
    name: "GE Healthcare",
    logo: geHealthcareLogo,
    specialty: "Imaging & ICU Monitoring",
    description: "Global leader in medical imaging, patient monitoring, and healthcare IT solutions including CARESCAPE monitoring platforms.",
  },
  {
    name: "Leica Microsystems",
    logo: leicaLogo,
    specialty: "Surgical Microscopy",
    description: "Premium surgical microscopes for neurosurgery, ophthalmology, ENT, and spine surgery with advanced visualization technology.",
  },
  {
    name: "Sony Medical",
    logo: sonyLogo,
    specialty: "Medical Imaging & Printers",
    description: "High-definition medical displays, printers, and recording solutions for surgical imaging and diagnostic applications.",
  },
  {
    name: "Nipro",
    logo: niproLogo,
    specialty: "Renal Care & Dialysis",
    description: "Specialist in dialysis equipment, medical devices, and pharmaceutical packaging for renal care departments worldwide.",
  },
];

const Partners = () => {
  return (
    <Layout>
      <PageHero
        title="Our Partners"
        subtitle="World-class partnerships delivering cutting-edge healthcare technology"
      />

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{partner.name}</h3>
                <p className="text-sm font-heading font-semibold text-primary mb-3">{partner.specialty}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vanguard */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <p className="text-sm font-heading font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            A Subsidiary Of
          </p>
          <img src={vanguardLogo} alt="The Vanguard Group" className="h-16 w-auto mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            NXS operates as a subsidiary of The Vanguard Group, one of East Africa's leading
            conglomerates with interests spanning healthcare, technology, and industrial solutions.
            With over 85 years of heritage, The Vanguard Group provides the foundation for NXS's
            commitment to excellence and reliability.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
