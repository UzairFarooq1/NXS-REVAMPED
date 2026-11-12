import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "@/components/CountUp";

const statement =
  "Since 1980, we have equipped East Africa's hospitals with world-class medical technology, and stayed to install, train and support every system we deliver.";

// Words drawn in brand blue as they light up.
const accent = new Set(["world-class", "medical", "technology,", "support"]);

const stats = [
  { value: "45+", label: "Years of service" },
  { value: "1,000+", label: "Solutions delivered" },
  { value: "500+", label: "Healthcare facilities" },
  { value: "15+", label: "Global partners" },
];

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.28em] inline-block ${accent.has(children) ? "text-primary" : ""}`}
    >
      {children}
    </motion.span>
  );
};

/** Big editorial statement that lights up word-by-word as you scroll, then the key numbers. */
const IntroStatement = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = statement.split(" ");

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-sm font-heading font-semibold uppercase tracking-[0.25em] text-primary"
        >
          Who we are
        </motion.p>
        <p
          ref={ref}
          className="text-2xl font-heading font-semibold leading-snug text-foreground md:text-4xl md:leading-tight lg:text-[2.75rem]"
        >
          {words.map((w, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {w}
            </Word>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary"
          >
            <span className="border-b border-primary/30 pb-0.5 transition-colors group-hover:border-primary">
              More about NXS
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-y-10 border-t pt-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`px-2 md:px-6 ${i > 0 ? "md:border-l" : ""}`}
            >
              <CountUp
                value={s.value}
                className="block text-4xl font-heading font-bold text-foreground md:text-5xl"
              />
              <span className="mt-2 block text-sm text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroStatement;
