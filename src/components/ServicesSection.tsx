import { motion } from "framer-motion";
import radiologyImg from "@/assets/radiology_xray.jpg";
import operatingTheatreImg from "@/assets/operating_theatre.jpg";
import endoscopyImg from "@/assets/endoscopy.jpg";
import radiologyConsImg from "@/assets/radiology.jpg";
import icuImg from "@/assets/icu-monitoring.avif";
import microscopyImg from "@/assets/microscopy.webp";
import csrImg from "@/assets/csr.jpg";
import operatingTableImg from "@/assets/operating_table.jpg";

const services = [
  {
    title: "Radiology / X-Ray",
    description: "Complete digital radiography & fluoroscopy systems",
    image: radiologyImg,
    href: "/solutions/radiology",
  },
  {
    title: "Endoscopy",
    description: "Advanced endoscopic solutions for GI & surgical procedures",
    image: endoscopyImg,
    href: "/solutions/endoscopy",
  },
  {
    title: "Operating Theatre",
    description: "LED surgical lights, tables & ceiling-suspended systems",
    image: operatingTheatreImg,
    href: "/solutions/operating-theatre",
  },
  {
    title: "ICU Monitoring",
    description: "Patient monitoring solutions for critical care",
    image: icuImg,
    href: "/solutions/icu",
  },
  {
    title: "Operating Microscopy",
    description: "Precision surgical microscopes for neurosurgery & ophthalmology",
    image: microscopyImg,
    href: "/solutions/microscopy",
  },
  {
    title: "Renal Care",
    description: "Dialysis machines & renal care consumables",
    image: csrImg,
    href: "/solutions/renal-care",
  },
  {
    title: "Operating Tables",
    description: "Electronic surgical tables including bariatric solutions",
    image: operatingTableImg,
    href: "/solutions/operating-theatre",
  },
  {
    title: "Radiology Consumables",
    description: "Protective wear, contrast media & imaging accessories",
    image: radiologyConsImg,
    href: "/solutions/consumables",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
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
            <motion.a
              key={service.title}
              href={service.href}
              variants={item}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300"
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
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
