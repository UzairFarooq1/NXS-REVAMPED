import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import radiologyImg from "@/assets/products/radiology.jpg";
import operatingTheatreImg from "@/assets/products/trulight-5000.png";
import endoscopyImg from "@/assets/endoscopyTower.jpg";
import radiologyConsImg from "@/assets/radiology_cons.jpg";
import contrast from "@/assets/contrastmedia.jpg";
import sony from "@/assets/sony.jpg";
import icuImg from "@/assets/monitoring.avif";
import cardio from "@/assets/products/cardioday.png";
import microscopyImg from "@/assets/microscopy.webp";
import csrImg from "@/assets/maternal.avif";
import renal from "@/assets/wego.jfif";
import cochlear from "@/assets/cochlearkid.png";

const services = [
  {
    title: "Radiology Equipment",
    description:
      "Digital radiography, fluoroscopy and advanced imaging equipment.",
    image: radiologyImg,
    href: "/solutions/radiology",
  },
  {
    title: "Radiology Consumables",
    description: "Protective wear and imaging accessories.",
    image: radiologyConsImg,
    href: "/solutions/consumables",
  },
  {
    title: "Contrast Media",
    description:
      "High-quality contrast agents to support accurate diagnostic imaging.",
    image: contrast,
    href: "/solutions/contrast-media",
  },
  {
    title: "Printers",
    description:
      "Medical-grade printing solutions for radiology and theatre environments.",
    image: sony,
    href: "/solutions/sony-printers",
  },
  {
    title: "Endoscopy & MAS",
    description:
      "Endoscopic and minimally invasive surgery solutions for GI and surgical care.",
    image: endoscopyImg,
    href: "/solutions/endoscopy",
  },
  {
    title: "Operating Theatre",
    description:
      "Integrated operating theatre lights, booms and anesthesia systems.",
    image: operatingTheatreImg,
    href: "/solutions/operating-theatre",
  },
  {
    title: "ICU Monitoring",
    description:
      "Patient monitoring and critical care solutions for intensive care units.",
    image: icuImg,
    href: "/solutions/icu",
  },
  {
    title: "Cardiology",
    description: "Cardiovascular monitoring and diagnostic solutions.",
    image: cardio,
    href: "/solutions/cardiology",
  },
  {
    title: "Renal Care",
    description: "Dialysis systems and renal care consumables.",
    image: renal,
    href: "/solutions/renal-care",
  },
  {
    title: "Hearing Solutions",
    description: "Cochlear Implants and Processors",
    image: cochlear,
    href: "/solutions/cochlear",
  },
  {
    title: "Operating Microscopy",
    description:
      "Precision surgical microscopes for neurosurgery and ophthalmology.",
    image: microscopyImg,
    href: "/solutions/microscopy",
  },
  {
    title: "Maternal & Infant Care",
    description: "Solutions focused on maternal health and neonatal care.",
    image: csrImg,
    href: "/solutions/maternal-infant-care",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Solutions
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Link
                to={service.href}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 block"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                    <h3 className="font-heading font-semibold text-base mb-0.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-primary-foreground/75 leading-snug">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
