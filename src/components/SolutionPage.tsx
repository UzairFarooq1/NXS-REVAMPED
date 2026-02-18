import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export interface SolutionProduct {
  name: string;
  description: string;
}

export interface SolutionPageData {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string[];
  partner: string;
  products: SolutionProduct[];
  features: string[];
}

interface SolutionPageProps {
  data: SolutionPageData;
}

const SolutionPage = ({ data }: SolutionPageProps) => {
  return (
    <Layout>
      <PageHero title={data.title} subtitle={data.subtitle} backgroundImage={data.heroImage} />

      {/* Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-2">
              Overview
            </p>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">{data.title}</h2>
            {data.overview.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
            ))}
            <p className="text-sm font-heading font-semibold text-primary mt-6">
              Principal Partner: {data.partner}
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-foreground">Products & Solutions</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border rounded-xl p-6"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
              Key Features & Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-accent/50"
                >
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
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

export default SolutionPage;
