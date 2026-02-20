import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import shimadzuLogo from "@/assets/partners/shimadzu.jpg";
import baxterGambroLogo from "@/assets/partners/baxter-gambro.png";
import geHealthcareLogo from "@/assets/partners/ge-healthcare.png";
import trumpfLogo from "@/assets/partners/trumpf.png";
import leicaLogo from "@/assets/partners/leica.png";
import eskayLogo from "@/assets/partners/eskay.jpg";
import wegoLogo from "@/assets/partners/wego.png";
import vanguardLogo from "@/assets/vanguard-logo.png";

const partners = [
  {
    name: "Olympus",
    logo: null,
    specialty: "Endoscopy & Surgical Equipment",
    description: "A Japanese world leader of endoscopy and surgical equipment.",
  },
  {
    name: "Shimadzu",
    logo: shimadzuLogo,
    specialty: "Precision & Medical Instruments",
    description: "A Japanese public company, manufacturing precision instruments, measuring instruments and medical equipment, based in Kyoto, Japan.",
  },
  {
    name: "Baxter Gambro",
    logo: baxterGambroLogo,
    specialty: "Renal Care & Critical Care",
    description: "A world leading health care company which primarily focuses on products to treat hemophilia, kidney disease, immune disorders and other chronic and acute medical conditions.",
  },
  {
    name: "GE Healthcare",
    logo: geHealthcareLogo,
    specialty: "Medical Imaging & Diagnostics",
    description: "GE HealthCare is a global medical technology and diagnostics company headquartered in the United States specializing in medical imaging, patient monitoring, diagnostics, and digital health solutions.",
  },
  {
    name: "Trumpf Medical",
    logo: trumpfLogo,
    specialty: "Operating Theatre Solutions",
    description: "A company that develops and manufactures medical equipment for operating rooms, intensive care units, and related clinical areas that provide the best-possible support for hospital staff and the efficient and safe care of patients.",
  },
  {
    name: "Cochlear",
    logo: null,
    specialty: "Hearing Implant Solutions",
    description: "A global biotechnology company that designs, manufactures and supplies the Nucleus cochlear implant, the Hybrid electro-acoustic implant and the Baha bone conduction implant.",
  },
  {
    name: "Leica",
    logo: leicaLogo,
    specialty: "Precision Optics & Imaging",
    description: "Leica is a global leader in precision optics and imaging solutions, dedicated to revealing the invisible and empowering professionals in science, medicine, and industry. With a strong commitment to innovation, Leica continuously advances visualization and analysis technologies, helping customers make informed decisions and optimize workflows.",
  },
  {
    name: "Eskay Fine Chemicals",
    logo: eskayLogo,
    specialty: "Contrast Media & Speciality Chemicals",
    description: "Eskay Speciality Chemicals, established in 2006, is located in the Special Economic Zone at Sachin, Surat, Gujarat. As an Export Oriented Unit (EOU) with a USFDA NDC number for all its products, the company is committed to maintaining high-quality standards.",
  },
  {
    name: "WEGO",
    logo: wegoLogo,
    specialty: "Renal Care & Hemodialysis",
    description: "A leading manufacturer of hemodialysis equipment, dialyzers, blood circuits, and fistula needles, providing comprehensive renal care solutions worldwide.",
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
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-16 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-heading font-bold text-primary">{partner.name}</span>
                  )}
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
