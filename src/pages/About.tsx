import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  HeartPulse,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";
import csrImg from "@/assets/future.jpg";
import operatingTheatreImg from "@/assets/NXS.webp";

const stats = [
  { icon: Award, value: "44+", label: "Years of Service" },
  { icon: HeartPulse, value: "1000+", label: "Solutions Delivered" },
  { icon: Users, value: "500+", label: "Healthcare Facilities" },
  { icon: Shield, value: "15+", label: "Global Partners" },
];

const values = [
  "Customer-centric approach with tailored solutions",
  "Expert installation, training & after-sales support",
  "Partnerships with world-leading manufacturers",
  "Comprehensive coverage across East Africa",
  "Continuous innovation in medical technology",
  "Commitment to healthcare excellence",
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Premier distributor of medical equipment in East Africa since 1980"
        backgroundImage={operatingTheatreImg}
      />

      {/* Who We Are */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={csrImg}
                  alt="NXS Team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-2">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Nairobi X-Ray Supplies Ltd
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A subsidiary of The Vanguard Group, Nairobi X-Ray Supplies Ltd
                (NXS) has been a premier distributor of medical equipment in
                East Africa since 1980. We specialize in providing comprehensive
                healthcare solutions across radiology, surgical, critical care,
                and diagnostic domains.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of experienced biomedical engineers and healthcare
                consultants ensures seamless deployment, from initial
                consultation and system design through installation, training,
                and ongoing maintenance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With partnerships spanning world-renowned manufacturers
                including GE Healthcare, Trumpf Medical, Nihon Kohden, Leica
                Microsystems, Sony Medical, and Nipro, we deliver cutting-edge
                technology and expert support to healthcare facilities across
                the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class medical equipment and healthcare
                solutions that empower healthcare facilities across East Africa
                to deliver exceptional patient care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading and most trusted partner for healthcare
                technology solutions in Sub-Saharan Africa, driving innovation
                and accessibility in medical care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-accent/50 border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-heading font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose NXS
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-primary-foreground/10 rounded-xl p-5"
              >
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
