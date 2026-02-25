import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import leadGlass1 from "@/assets/products/mix-maestro.jpg";
import leadGlass2 from "@/assets/products/carestation-600.jpg";
import leicaArveo8 from "@/assets/products/urology-gynaecology.jpg";

const productImages = [leadGlass1, leadGlass2, leicaArveo8];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (productImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        {productImages.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

      <div className="relative z-10 container h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-primary-foreground"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base font-heading font-semibold tracking-widest uppercase mb-4 text-primary-foreground/80"
          >
            Since 1980
          </motion.p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Your Trusted Medical{" "}
            <span className="text-secondary">Equipment</span> Partner
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
            Delivering world-class healthcare solutions across East Africa for
            over four decades.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold"
            >
              <Link to="/solutions">
                Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground/20 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/30 font-heading backdrop-blur-sm"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
