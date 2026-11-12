import { motion, type TargetAndTransition, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconMotion =
  | "pulse"
  | "beat"
  | "wiggle"
  | "swing"
  | "bounce"
  | "spin"
  | "pop"
  | "float"
  | "ring";

const keyframes: Record<IconMotion, TargetAndTransition> = {
  pulse: { scale: [1, 1.18, 1], transition: { duration: 0.6 } },
  beat: { scale: [1, 1.25, 1, 1.15, 1], transition: { duration: 0.9 } },
  wiggle: { rotate: [0, -14, 12, -8, 6, 0], transition: { duration: 0.6 } },
  swing: { rotate: [0, 18, -12, 6, 0], transition: { duration: 0.8 } },
  bounce: { y: [0, -5, 0, -2, 0], transition: { duration: 0.6 } },
  spin: { rotate: [0, 360], transition: { duration: 0.9, ease: "easeInOut" } },
  pop: { scale: [1, 0.85, 1.2, 1], transition: { duration: 0.5 } },
  float: { y: [0, -6, 0], transition: { duration: 2.4, ease: "easeInOut" } },
  ring: {
    rotate: [0, -18, 18, -14, 14, -8, 8, 0],
    transition: { duration: 0.8 },
  },
};

const withRepeat = (kf: TargetAndTransition, repeatDelay: number) => ({
  ...kf,
  transition: {
    ...(kf.transition as object),
    repeat: Infinity,
    repeatDelay,
  },
});

interface AnimatedIconProps {
  icon: LucideIcon;
  motion?: IconMotion;
  /**
   * - "parent": animates when an ancestor motion element enters its "hover"
   *   variant (e.g. `<motion.a whileHover="hover">`). Default.
   * - "self":   animates when this icon itself is hovered.
   * - "loop":   plays continuously, pausing `repeatDelay` seconds between runs.
   */
  trigger?: "parent" | "self" | "loop";
  repeatDelay?: number;
  className?: string;
  wrapperClassName?: string;
  strokeWidth?: number;
}

const AnimatedIcon = ({
  icon: Icon,
  motion: kind = "pulse",
  trigger = "parent",
  repeatDelay = 2.5,
  className,
  wrapperClassName,
  strokeWidth,
}: AnimatedIconProps) => {
  const origin = kind === "swing" ? { originY: 0 } : undefined;
  const variants: Variants = { rest: {}, hover: keyframes[kind] };

  if (trigger === "loop") {
    return (
      <motion.span
        className={cn("inline-flex", wrapperClassName)}
        style={origin}
        animate={withRepeat(keyframes[kind], repeatDelay)}
      >
        <Icon className={className} strokeWidth={strokeWidth} aria-hidden />
      </motion.span>
    );
  }

  return (
    <motion.span
      className={cn("inline-flex", wrapperClassName)}
      style={origin}
      variants={variants}
      {...(trigger === "self" ? { initial: "rest", whileHover: "hover" } : {})}
    >
      <Icon className={className} strokeWidth={strokeWidth} aria-hidden />
    </motion.span>
  );
};

export default AnimatedIcon;
