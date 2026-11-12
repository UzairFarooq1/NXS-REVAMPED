import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import IntroStatement from "@/components/home/IntroStatement";
import SolutionsExplorer from "@/components/home/SolutionsExplorer";
import ServiceJourney from "@/components/home/ServiceJourney";
import LatestNews from "@/components/home/LatestNews";
import HomeCTA from "@/components/home/HomeCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PartnerMarquee />
      <IntroStatement />
      <SolutionsExplorer />
      <ServiceJourney />
      <LatestNews />
      <HomeCTA />
    </Layout>
  );
};

export default Index;
