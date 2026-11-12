import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Award, ChevronDown, HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedIcon from "@/components/AnimatedIcon";

import leadGlass1 from "@/assets/products/wego-machine.jpeg";
import leadGlass2 from "@/assets/products/carestation-600.jpg";
import leicaArveo8 from "@/assets/products/urology-gynaecology.jpg";

const productImages = [leadGlass1, leadGlass2, leicaArveo8];

const headline = ["Your", "Trusted", "Medical", "Equipment", "Partner"];

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
};
const word: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: -40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const highlights = [
  { icon: Award, label: "45+ Years", motion: "swing" as const, delay: 1.1 },
  { icon: ShieldCheck, label: "ISO 13485:2016", motion: "pop" as const, delay: 1.3 },
  { icon: HeartPulse, label: "500+ Facilities", motion: "beat" as const, delay: 1.5 },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (productImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative h-[70vh] min-h-[540px] max-h-[720px] overflow-hidden">
      {/* Slides with slow Ken Burns zoom */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${productImages[currentIndex]})` }}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                opacity: { duration: 1.2 },
                scale: { duration: 7, ease: "linear" },
              },
            }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />

      {/* Drifting glow orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-secondary/25 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs md:text-sm font-heading font-semibold tracking-widest uppercase text-primary-foreground/90 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Since 1980
          </motion.p>

          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 [perspective:600px]"
          >
            {headline.map((w) => (
              <motion.span
                key={w}
                variants={word}
                className={`inline-block mr-[0.25em] ${
                  w === "Equipment" ? "text-primary" : ""
                }`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg"
          >
            Delivering world-class healthcare solutions across East Africa for
            over four decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold shadow-lg shadow-primary/30"
            >
              <Link to="/solutions">
                Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground/20 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/30 font-heading backdrop-blur-sm"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Floating highlight chips */}
          <div className="mt-8 hidden sm:flex flex-wrap gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  opacity: { delay: h.delay, duration: 0.5 },
                  y: {
                    delay: h.delay,
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-heading font-semibold backdrop-blur-md"
              >
                <AnimatedIcon
                  icon={h.icon}
                  motion={h.motion}
                  trigger="loop"
                  repeatDelay={3 + i}
                  className="h-4 w-4 text-secondary"
                />
                {h.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {productImages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setCurrentIndex(i)}
            className="relative h-1.5 w-8 overflow-hidden rounded-full bg-primary-foreground/30"
          >
            {i === currentIndex && (
              <motion.span
                key={currentIndex}
                className="absolute inset-y-0 left-0 bg-primary-foreground"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-5 right-6 z-10 hidden md:flex text-primary-foreground/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
