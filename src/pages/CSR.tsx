import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Leaf, Users } from "lucide-react";
import csrImg from "@/assets/csr.jfif";

const initiatives = [
  {
    icon: Heart,
    title: "Healthcare Access",
    description:
      "Supporting community health facilities with equipment donations and maintenance programs to improve healthcare access in underserved areas.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description:
      "Sponsoring biomedical engineering students and providing hands-on training programs to build local healthcare technology expertise.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "Responsible disposal and recycling of medical equipment, and promoting energy-efficient healthcare technology solutions.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Partnering with local organizations for health awareness campaigns, medical camps, and community wellness programs across East Africa.",
  },
];

const CSR = () => {
  return (
    <Layout>
      <PageHero
        title="Corporate Social Responsibility"
        subtitle="Giving back to the communities we serve across East Africa"
        backgroundImage={csrImg}
      />

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Commitment to Society
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At NXS, we believe that healthcare is a fundamental right. Our CSR
              initiatives focus on expanding healthcare access, building local
              expertise, and contributing to the well-being of communities
              across East Africa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={csrImg}
                alt="CSR Activities"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Making a Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the decades, NXS has supported numerous healthcare
                facilities across Kenya, Uganda, Tanzania, and the broader East
                African region. Our commitment extends beyond providing
                equipment—we invest in people, processes, and communities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From sponsoring medical training programs to donating
                refurbished equipment to rural clinics, every initiative is
                driven by our belief that better healthcare technology leads to
                better patient outcomes and healthier communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CSR;
