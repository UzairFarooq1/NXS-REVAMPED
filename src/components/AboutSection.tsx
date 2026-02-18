import { motion } from "framer-motion";
import { Shield, Users, Award, HeartPulse } from "lucide-react";
import csrImg from "@/assets/csr.jpg";

const stats = [
  { icon: Award, value: "44+", label: "Years of Service" },
  { icon: HeartPulse, value: "1000+", label: "Solutions Delivered" },
  { icon: Users, value: "500+", label: "Healthcare Facilities" },
  { icon: Shield, value: "15+", label: "Global Partners" },
];

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={csrImg}
                alt="NXS team working in healthcare"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-5 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-heading font-bold">Since 1980</p>
              <p className="text-sm text-primary-foreground/80">Trusted Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Nairobi X-Ray Supplies Ltd
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A subsidiary of The Vanguard Group, Nairobi X-Ray Supplies Ltd (NXS) has been a premier
              distributor of medical equipment in East Africa since 1980. We specialize in providing
              comprehensive healthcare solutions across radiology, surgical, critical care, and
              diagnostic domains.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With partnerships spanning world-renowned manufacturers, we deliver cutting-edge
              technology, expert installation, training, and after-sales support to healthcare
              facilities across the region.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/50 border"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
