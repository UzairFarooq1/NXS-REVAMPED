import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedIcon from "@/components/AnimatedIcon";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-muted/50">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-0 h-56 w-56 rounded-full bg-secondary/10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Upgrade Your Healthcare Facility?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with our team for expert consultation, equipment demonstrations,
            and customized solutions for your healthcare needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="font-heading font-semibold shadow-lg shadow-primary/25">
                <Link to="/contact">
                  Request a Quote
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-2 inline-flex"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="outline" className="font-heading" asChild>
                <a href="tel:+254733512802">
                  <AnimatedIcon
                    icon={Phone}
                    motion="ring"
                    trigger="loop"
                    repeatDelay={2}
                    wrapperClassName="mr-2"
                    className="h-5 w-5"
                  />
                  +254 (0) 703 700 766
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <AnimatedIcon icon={MapPin} motion="bounce" trigger="loop" repeatDelay={1.5} className="h-4 w-4 text-primary" />
            <span>Nairobi, Kenya — Serving East Africa</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
