import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {backgroundImage && (
        <>
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-primary/85" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-primary" />}

      {/* Drifting decorative shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-6 h-48 w-48 rounded-full border border-primary-foreground/15"
        animate={{ y: [0, 20, 0], rotate: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-6 h-24 w-24 rounded-2xl border border-primary-foreground/15"
        animate={{ y: [0, -16, 0], rotate: [12, 50, 12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-1/4 -top-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container text-center text-primary-foreground">
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-1 bg-secondary mx-auto mt-6"
        />
      </div>
    </section>
  );
};

export default PageHero;
