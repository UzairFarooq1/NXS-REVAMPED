import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedIcon, { type IconMotion } from "@/components/AnimatedIcon";
import { radiologyGroup, specialtySolutions } from "@/data/solutions";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import radiologyImg from "@/assets/products/radiology.jpg";
// Endoscopy and Operating Theatre images supplied by NXS (Olympus tower and TruLight theatre).
import endoscopyImg from "@/assets/home/olympus-tower.jpg";
import operatingTheatreImg from "@/assets/home/trulight-theatre.jpg";
import icuImg from "@/assets/monitoring.avif";
import cardioImg from "@/assets/products/cardioday.png";
import renalImg from "@/assets/wego.jfif";
import cochlearImg from "@/assets/cochlearkid.png";
import neurologyImg from "@/assets/neurology.jpg";
import microscopyImg from "@/assets/microscopy.webp";
import maternalImg from "@/assets/maternal.avif";

interface Entry {
  label: string;
  href: string;
  blurb: string;
  image: string;
  /** CSS object-position, to keep the subject in frame when the photo is cropped. */
  position?: string;
  /** Product cut-out on white: shown whole on a light backdrop instead of full-bleed. */
  cutout?: boolean;
  icon: LucideIcon;
  motion: IconMotion;
  children?: { label: string; href: string }[];
}

const images: Record<string, string> = {
  "/solutions/endoscopy": endoscopyImg,
  "/solutions/operating-theatre": operatingTheatreImg,
  "/solutions/icu": icuImg,
  "/solutions/cardiology": cardioImg,
  "/solutions/renal-care": renalImg,
  "/solutions/cochlear": cochlearImg,
  "/solutions/neurology": neurologyImg,
  "/solutions/microscopy": microscopyImg,
  "/solutions/maternal-infant-care": maternalImg,
};

const positions: Record<string, string> = {
  // Keep both surgical light heads in frame.
  "/solutions/operating-theatre": "center 30%",
};

const cutouts = new Set(["/solutions/endoscopy"]);

const blurbs: Record<string, string> = {
  "/solutions/endoscopy":
    "Olympus endoscopy towers, scopes and minimally invasive surgery systems for GI, ENT, urology and pulmonology.",
  "/solutions/operating-theatre":
    "Integrated surgical lights, ceiling booms and anaesthesia workstations for modern operating theatres.",
  "/solutions/icu":
    "GE HealthCare patient monitoring and central stations for faster decisions in critical care.",
  "/solutions/cardiology":
    "Resting and stress ECG, Holter and cardiac data management for confident cardiovascular diagnosis.",
  "/solutions/renal-care":
    "WEGO dialysis machines, dialyzers and blood circuits for dependable renal care.",
  "/solutions/cochlear":
    "Cochlear implants and sound processors, with switch-on and audiology support for every recipient.",
  "/solutions/neurology":
    "Natus EEG, EMG, nerve conduction and evoked-potential systems for neurodiagnostics.",
  "/solutions/microscopy":
    "Leica surgical microscopes for neurosurgery, ophthalmology, ENT and dental care.",
  "/solutions/maternal-infant-care":
    "Incubators, warmers, phototherapy and fetal monitoring for safer births and neonatal care.",
};

const entries: Entry[] = [
  {
    label: radiologyGroup.label,
    href: "/solutions/radiology",
    blurb:
      "Complete imaging under one roof: Shimadzu X-ray and fluoroscopy, radiation protection wear, contrast media and Sony medical printers.",
    image: radiologyImg,
    icon: radiologyGroup.icon,
    motion: "spin",
    children: radiologyGroup.items.map(({ label, href }) => ({ label, href })),
  },
  ...specialtySolutions.map((s) => ({
    label: s.label,
    href: s.href,
    blurb: blurbs[s.href] ?? s.description,
    image: images[s.href],
    position: positions[s.href],
    cutout: cutouts.has(s.href),
    icon: s.icon,
    motion: s.motion,
  })),
];

/** The picture plus the dark scrim the white text sits on. */
const EntryVisual = ({ entry, lazy }: { entry: Entry; lazy?: boolean }) =>
  entry.cutout ? (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/70 to-accent" />
      <img
        src={entry.image}
        alt=""
        loading={lazy ? "lazy" : undefined}
        className="absolute inset-x-0 top-0 h-[64%] w-full object-contain p-4 mix-blend-multiply"
      />
      <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-nxs-navy via-nxs-navy/90 to-transparent" />
    </>
  ) : (
    <>
      <img
        src={entry.image}
        alt=""
        loading={lazy ? "lazy" : undefined}
        style={{ objectPosition: entry.position }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
    </>
  );

const SectionHeader = () => (
  <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="mb-3 text-sm font-heading font-semibold uppercase tracking-[0.25em] text-primary">
        What we do
      </p>
      <h2 className="max-w-xl text-3xl font-heading font-bold leading-tight text-foreground md:text-5xl">
        Solutions for every department
      </h2>
    </div>
    <Link
      to="/solutions"
      className="group inline-flex items-center gap-2 self-start rounded-full border px-5 py-2.5 text-sm font-heading font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground md:self-auto"
    >
      All solutions
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

/* ---------- Desktop: list + large preview ---------- */

const DesktopExplorer = () => {
  const [active, setActive] = useState(0);
  const current = entries[active];

  return (
    <div className="hidden gap-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <ul className="border-t">
        {entries.map((e, i) => {
          const isActive = i === active;
          return (
            <li key={e.href} className="border-b">
              <Link
                to={e.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group relative flex items-center gap-5 py-4 pl-4 pr-2"
              >
                {isActive && (
                  <motion.span
                    layoutId="explorer-indicator"
                    className="absolute inset-y-2 left-0 w-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={cn(
                    "w-7 text-xs font-heading font-semibold tabular-nums transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground/60",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "flex-1 text-lg font-heading font-semibold transition-all duration-300",
                    isActive
                      ? "translate-x-1 text-primary"
                      : "text-foreground/75 group-hover:text-foreground",
                  )}
                >
                  {e.label}
                  {e.children && (
                    <span className="ml-2 align-middle text-xs font-normal text-muted-foreground">
                      {e.children.length} product lines
                    </span>
                  )}
                </span>
                <ArrowUpRight
                  className={cn(
                    "h-5 w-5 transition-all duration-300",
                    isActive
                      ? "translate-x-0 text-primary opacity-100"
                      : "-translate-x-2 opacity-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="sticky top-28 h-[600px] self-start overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-primary/10">
        <AnimatePresence initial={false}>
          <motion.div
            key={current.href}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <EntryVisual entry={current} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25 backdrop-blur-md">
              <AnimatedIcon
                icon={current.icon}
                motion={current.motion}
                trigger="loop"
                repeatDelay={1.8}
                className="h-6 w-6"
              />
            </span>
            <h3 className="mb-2 text-3xl font-heading font-bold">
              {current.label}
            </h3>
            <p className="mb-5 max-w-md text-primary-foreground/80">
              {current.blurb}
            </p>
            {current.children && (
              <div className="mb-6 flex flex-wrap gap-2">
                {current.children.map((c) => (
                  <Link
                    key={c.href}
                    to={c.href}
                    className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-heading font-semibold backdrop-blur-sm transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              to={current.href}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-heading font-semibold text-primary transition-shadow hover:shadow-lg"
            >
              Explore {current.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ---------- Mobile / tablet: swipeable cards ---------- */

const MobileExplorer = () => (
  <div className="-mx-8 flex snap-x snap-mandatory scroll-px-8 gap-4 overflow-x-auto px-8 pb-4 [scrollbar-width:none] lg:hidden">
    {entries.map((e, i) => (
      <motion.div
        key={e.href}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: Math.min(i, 3) * 0.08 }}
        className="relative h-[420px] w-[78%] flex-shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[46%]"
      >
        <EntryVisual entry={e} lazy />
        <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
          <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/15 backdrop-blur-md">
            <e.icon className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="mb-1 text-xl font-heading font-bold">{e.label}</h3>
          <p className="mb-4 line-clamp-3 text-sm text-primary-foreground/80">
            {e.blurb}
          </p>
          {e.children && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {e.children.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className="rounded-full border border-primary-foreground/30 px-2.5 py-1 text-[11px] font-heading font-semibold"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          )}
          <Link
            to={e.href}
            className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold"
          >
            Explore <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
);

const SolutionsExplorer = () => (
  <section className="bg-muted/40 py-24 md:py-32">
    <div className="container">
      <SectionHeader />
      <DesktopExplorer />
      <MobileExplorer />
    </div>
  </section>
);

export default SolutionsExplorer;
