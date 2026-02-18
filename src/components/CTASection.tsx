import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
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
            <Button size="lg" className="font-heading font-semibold">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="font-heading">
              <Phone className="mr-2 h-5 w-5" />
              +254 20 260 6426
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>Nairobi, Kenya — Serving East Africa</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
