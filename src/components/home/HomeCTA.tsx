import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import IsoCertifiedBadge from "@/components/IsoCertifiedBadge";

/** Closing call-to-action: a single bold gradient panel. */
const HomeCTA = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-nxs-navy px-8 py-16 text-primary-foreground md:px-16 md:py-20"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-secondary/30 blur-3xl"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="mb-4 max-w-2xl text-3xl font-heading font-bold leading-tight md:text-5xl">
              Let's equip your facility for what's next.
            </h2>
            <p className="max-w-xl text-lg text-primary-foreground/80">
              Talk to our team about a quote, a product demonstration or a
              full department fit-out.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 font-heading font-semibold text-primary shadow-lg"
                >
                  Request a quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="tel:+254703700766"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-7 py-3 font-heading font-semibold transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
                >
                  <AnimatedIcon
                    icon={Phone}
                    motion="ring"
                    trigger="loop"
                    repeatDelay={2}
                    className="h-5 w-5"
                  />
                  +254 (0) 703 700 766
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden items-center gap-4 rounded-2xl bg-primary-foreground/10 p-5 ring-1 ring-primary-foreground/20 backdrop-blur-md lg:flex"
          >
            <IsoCertifiedBadge className="h-20 w-20 flex-shrink-0" />
            <div>
              <p className="font-heading font-bold">ISO 13485:2016</p>
              <p className="text-sm text-primary-foreground/70">
                Certified quality management
                <br />
                for medical devices
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeCTA;
