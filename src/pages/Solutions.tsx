import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import heroImage from "@/assets/radiology_xray.jpg";

const Solutions = () => {
  return (
    <Layout>
      <PageHero
        title="Solutions"
        subtitle="Explore our comprehensive portfolio of medical equipment and healthcare solutions across all specialties."
        backgroundImage={heroImage}
      />
      <ServicesSection />
    </Layout>
  );
};

export default Solutions;

