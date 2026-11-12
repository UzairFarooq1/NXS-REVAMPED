import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MessagesSquare, Truck, GraduationCap, Wrench } from "lucide-react";
import AnimatedIcon, { type IconMotion } from "@/components/AnimatedIcon";
import type { LucideIcon } from "lucide-react";

const steps: {
  icon: LucideIcon;
  motion: IconMotion;
  title: string;
  text: string;
}[] = [
  {
    icon: MessagesSquare,
    motion: "wiggle",
    title: "Consult & design",
    text: "Our biomedical engineers assess your needs and plan the right system for your facility.",
  },
  {
    icon: Truck,
    motion: "bounce",
    title: "Supply & install",
    text: "Genuine equipment from world-leading manufacturers, delivered and installed to specification.",
  },
  {
    icon: GraduationCap,
    motion: "swing",
    title: "Train your team",
    text: "Hands-on training so clinicians and technicians get the most from every system.",
  },
  {
    icon: Wrench,
    motion: "wiggle",
    title: "Maintain & support",
    text: "Preventive maintenance, repairs and technical support for the life of the equipment.",
  },
];

/** The four-step service lifecycle, with a progress line that draws as you scroll. */
const ServiceJourney = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-heading font-semibold uppercase tracking-[0.25em] text-primary">
            How we work
          </p>
          <h2 className="text-3xl font-heading font-bold leading-tight text-foreground md:text-5xl">
            With you from first plan to final service
          </h2>
          <p className="mt-5 text-muted-foreground">
            ISO 13485:2016 certified for sales, distribution, installation,
            maintenance and technical support of medical equipment.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* connecting line (desktop) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-border md:block">
            <motion.div
              style={{ scaleX }}
              className="h-full origin-left bg-gradient-to-r from-primary to-secondary"
            />
          </div>

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover="hover"
                  className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-background shadow-lg shadow-primary/10 ring-1 ring-border"
                >
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-heading font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <AnimatedIcon
                    icon={s.icon}
                    motion={s.motion}
                    trigger="loop"
                    repeatDelay={3 + i * 0.8}
                    className="h-7 w-7 text-primary"
                  />
                </motion.div>
                <h3 className="mb-2 text-lg font-heading font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mx-auto max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceJourney;
