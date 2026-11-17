import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import AnimatedIcon, { type IconMotion } from "@/components/AnimatedIcon";
import { radiologyGroup, specialtySolutions } from "@/data/solutions";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import radiologyImg from "@/assets/products/radiology.jpg";
import radiologyEquipmentImg from "@/assets/radiology.jpg";
import radiologyConsumablesImg from "@/assets/radiology_cons.jpg";
import contrastMediaImg from "@/assets/contrastmedia.jpg";
import printersImg from "@/assets/sony.jpg";
// Endoscopy, Operating Theatre and Maternal images supplied by NXS.
import endoscopyImg from "@/assets/home/olympus-tower.jpg";
import trulightTheatre from "@/assets/home/trulight-theatre.jpg";
import giraffeBlueSpot from "@/assets/home/giraffe-bluespot.jpg";
import renalImg from "@/assets/wego.jfif";
import cochlearImg from "@/assets/cochlearkid.png";
import neurologyImg from "@/assets/neurology.jpg";
import microscopyImg from "@/assets/microscopy.webp";

// ICU & Monitoring carousel
import icuBedside from "@/assets/monitoring.avif";
import carevance from "@/assets/products/carevance.jpg";
import carescapeCanvas from "@/assets/products/carescape-canvas.jpg";
import b1x5m from "@/assets/products/b1x5m-monitor.png";
import portraitVsm from "@/assets/products/portrait-vsm.png";

// Operating Theatre carousel
import carestation750 from "@/assets/products/carestation-750.png";
import nxt9100c from "@/assets/products/9100c-nxt.png";
import trulight5000 from "@/assets/products/trulight-5000.png";
import heluxPro from "@/assets/products/helux-pro.jpg";
import operatingTheatre from "@/assets/operating_theatre.jpg";

// Cardiology carousel
import mac5 from "@/assets/products/mac5.png";
import macVu360 from "@/assets/products/mac-vu360.png";
import caseEcg from "@/assets/products/case-ecg.png";
import cardiosoftStress from "@/assets/products/cardiosoft-stress.png";
import seer1000 from "@/assets/products/seer-1000.png";
import cardioday from "@/assets/products/cardioday.png";

interface Slide {
  src: string;
  /** Product or scene name shown in the caption chip. */
  caption?: string;
  /** Product line the slide belongs to, e.g. "Stress ECG". */
  tag?: string;
  /** CSS object-position, to keep the subject in frame when the photo is cropped. */
  position?: string;
  /** Product cut-out on white: shown whole on a light backdrop instead of full-bleed. */
  cutout?: boolean;
}

interface Entry {
  key: string;
  label: string;
  /** Absent for categories (Radiology), which only reveal their product lines. */
  href?: string;
  blurb: string;
  slides: Slide[];
  icon: LucideIcon;
  motion: IconMotion;
  children?: ProductLine[];
}

interface ProductLine {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  motion: IconMotion;
  blurb: string;
  slide: Slide;
}

/** Picture and longer blurb for each Radiology product line, keyed by href. */
const productLines: Record<string, { blurb: string; slide: Slide }> = {
  "/solutions/radiology": {
    blurb: "Shimadzu digital X-ray, fluoroscopy and mobile imaging systems.",
    slide: { src: radiologyEquipmentImg },
  },
  "/solutions/consumables": {
    blurb: "Zittron lead aprons, coats and protective eyewear for staff and patients.",
    slide: { src: radiologyConsumablesImg, position: "center 20%" },
  },
  "/solutions/contrast-media": {
    blurb: "Diagnostic contrast media from Eskay for clear, confident imaging.",
    slide: { src: contrastMediaImg },
  },
  "/solutions/sony-printers": {
    blurb: "Sony medical-grade printers for crisp, reliable diagnostic hard copies.",
    slide: { src: printersImg, cutout: true },
  },
};

const slides: Record<string, Slide[]> = {
  "/solutions/endoscopy": [{ src: endoscopyImg, cutout: true }],
  "/solutions/operating-theatre": [
    { src: trulightTheatre, tag: "Operating Theatre", caption: "TruLight in theatre", position: "center 30%" },
    { src: carestation750, tag: "Anaesthesia", caption: "Carestation 750", cutout: true },
    { src: trulight5000, tag: "Operating Lights", caption: "TRUMPF TruLight 5000" },
    { src: nxt9100c, tag: "Anaesthesia", caption: "9100c NXT", cutout: true },
    { src: heluxPro, tag: "Operating Lights", caption: "Helux Pro", position: "center 20%" },
    { src: operatingTheatre, tag: "Operating Theatre", caption: "Integrated operating room" },
  ],
  "/solutions/icu": [
    { src: carevance, tag: "Patient Monitors", caption: "Carevance", position: "left center" },
    { src: carescapeCanvas, tag: "Patient Monitors", caption: "CARESCAPE Canvas", cutout: true },
    { src: icuBedside, tag: "Patient Monitors", caption: "Bedside monitoring" },
    { src: b1x5m, tag: "Patient Monitors", caption: "B1x5M", cutout: true },
    { src: portraitVsm, tag: "Patient Monitors", caption: "Portrait VSM", cutout: true },
  ],
  "/solutions/cardiology": [
    { src: mac5, tag: "Resting ECG", caption: "MAC 5", cutout: true },
    { src: macVu360, tag: "Resting ECG", caption: "MAC VU360", cutout: true },
    { src: caseEcg, tag: "Stress ECG", caption: "CASE", cutout: true },
    { src: cardiosoftStress, tag: "Stress ECG", caption: "CardioSoft", cutout: true },
    { src: seer1000, tag: "Holter ECG", caption: "SEER 1000", position: "center 30%" },
    { src: cardioday, tag: "Holter ECG", caption: "CardioDay" },
  ],
  "/solutions/renal-care": [{ src: renalImg }],
  "/solutions/cochlear": [{ src: cochlearImg }],
  "/solutions/neurology": [{ src: neurologyImg }],
  "/solutions/microscopy": [{ src: microscopyImg }],
  "/solutions/maternal-infant-care": [
    { src: giraffeBlueSpot, caption: "Giraffe Blue Spot PT Lite", position: "center 40%" },
  ],
};

const blurbs: Record<string, string> = {
  "/solutions/endoscopy":
    "Olympus endoscopy towers, scopes and minimally invasive surgery systems for GI, ENT, urology and pulmonology.",
  "/solutions/operating-theatre":
    "Anaesthesia workstations, surgical lights and integrated theatres for modern surgery.",
  "/solutions/icu":
    "GE HealthCare patient monitors and central stations for faster decisions in critical care.",
  "/solutions/cardiology":
    "Resting ECG, stress ECG and Holter monitoring for confident cardiovascular diagnosis.",
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
    key: "radiology",
    label: radiologyGroup.label,
    blurb:
      "Complete imaging under one roof. Choose a product line to explore.",
    slides: [{ src: radiologyImg }],
    icon: radiologyGroup.icon,
    motion: "spin",
    children: radiologyGroup.items.map(({ label, href, description, icon, motion }) => ({
      label,
      href,
      description,
      icon,
      motion: motion as IconMotion,
      blurb: productLines[href]?.blurb ?? description,
      slide: productLines[href]?.slide ?? { src: radiologyImg },
    })),
  },
  ...specialtySolutions.map((s) => ({
    key: s.href,
    label: s.label,
    href: s.href,
    blurb: blurbs[s.href] ?? s.description,
    slides: slides[s.href] ?? [],
    icon: s.icon,
    motion: s.motion,
  })),
];

const SLIDE_MS = 3500;

/** One picture plus the scrim the white text sits on. */
const SlideVisual = ({ slide, lazy }: { slide: Slide; lazy?: boolean }) =>
  slide.cutout ? (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/70 to-accent" />
      <img
        src={slide.src}
        alt=""
        loading={lazy ? "lazy" : undefined}
        className="absolute inset-x-0 top-0 h-[64%] w-full object-contain p-6 pt-14 mix-blend-multiply"
      />
      <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-nxs-navy via-nxs-navy/90 to-transparent" />
    </>
  ) : (
    <>
      <img
        src={slide.src}
        alt=""
        loading={lazy ? "lazy" : undefined}
        style={{ objectPosition: slide.position }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
    </>
  );

/**
 * Cross-fading carousel of an entry's pictures. Auto-advances while `playing`
 * (and the user hasn't asked for reduced motion); dots let people jump.
 */
const Slideshow = ({
  slides,
  playing,
  lazy,
  compact,
}: {
  slides: Slide[];
  playing: boolean;
  lazy?: boolean;
  compact?: boolean;
}) => {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const many = slides.length > 1;

  useEffect(() => {
    if (!many || !playing || reduce) return;
    const t = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(t);
  }, [many, playing, reduce, slides.length]);

  const slide = slides[index] ?? slides[0];
  if (!slide) return null;
  const label = [slide.tag, slide.caption].filter(Boolean).join(" · ");

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <SlideVisual slide={slide} lazy={lazy} />
        </motion.div>
      </AnimatePresence>

      {(label || many) && (
        <div
          className={cn(
            "absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3",
            compact ? "p-4" : "p-6",
          )}
        >
          {label ? (
            <AnimatePresence mode="wait">
              <motion.span
                key={label}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "rounded-full bg-nxs-navy/75 font-heading font-semibold text-white backdrop-blur-md",
                  compact ? "px-2.5 py-1 text-[11px]" : "px-3.5 py-1.5 text-xs",
                )}
              >
                {label}
              </motion.span>
            </AnimatePresence>
          ) : (
            <span />
          )}
          {many && (
            <div className="flex items-center gap-1.5 rounded-full bg-nxs-navy/60 px-2.5 py-2 backdrop-blur-md">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show ${s.caption ?? `picture ${i + 1}`}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

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

/** What the big panel shows: a solution, or one Radiology product line. */
const toPanel = (e: Entry, line: ProductLine | null): Entry =>
  line
    ? {
        key: line.href,
        label: line.label,
        href: line.href,
        blurb: line.blurb,
        slides: [line.slide],
        icon: line.icon,
        motion: line.motion,
      }
    : e;

const DesktopExplorer = () => {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [line, setLine] = useState<number | null>(null);
  const [hoverPanel, setHoverPanel] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { amount: 0.4 });
  const entry = entries[active];
  const current = toPanel(entry, line !== null ? entry.children?.[line] ?? null : null);

  const activate = (i: number) => {
    setActive(i);
    setLine(null);
    if (!entries[i].children) setMenuOpen(false);
  };

  const rowClass = "group relative flex w-full items-center gap-5 py-4 pl-4 pr-2 text-left";

  const rowContent = (e: Entry, i: number, isActive: boolean) => (
    <>
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
          isActive ? "translate-x-1 text-primary" : "text-foreground/75 group-hover:text-foreground",
        )}
      >
        {e.label}
        {e.children && (
          <span className="ml-2 align-middle text-xs font-normal text-muted-foreground">
            {e.children.length} product lines
          </span>
        )}
      </span>
      {e.children ? (
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-all duration-300",
            isActive ? "text-primary opacity-100" : "opacity-40",
            menuOpen && isActive && "rotate-180",
          )}
        />
      ) : (
        <ArrowUpRight
          className={cn(
            "h-5 w-5 transition-all duration-300",
            isActive ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 opacity-0",
          )}
        />
      )}
    </>
  );

  return (
    <div className="hidden gap-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <ul className="border-t">
        {entries.map((e, i) => {
          const isActive = i === active;

          if (!e.href && e.children) {
            // A category: hovering opens a dropdown of its product lines (no page of its own).
            const open = menuOpen && isActive;
            return (
              <li
                key={e.key}
                className="relative z-20 border-b"
                onMouseEnter={() => {
                  activate(i);
                  setMenuOpen(true);
                }}
                onMouseLeave={() => {
                  setMenuOpen(false);
                  setLine(null);
                }}
                onKeyDown={(ev) => {
                  if (ev.key === "Escape") setMenuOpen(false);
                }}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onFocus={() => activate(i)}
                  onClick={() => {
                    activate(i);
                    setMenuOpen((o) => !o);
                  }}
                  className={rowClass}
                >
                  {rowContent(e, i, isActive)}
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      // pt-2 is an invisible bridge so the pointer can travel into the menu.
                      className="absolute inset-x-0 top-full origin-top pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border bg-background p-2 shadow-2xl shadow-primary/15">
                        {e.children.map((c, ci) => (
                          <motion.div
                            key={c.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.04 * ci }}
                          >
                            <Link
                              to={c.href}
                              onMouseEnter={() => setLine(ci)}
                              onFocus={() => {
                                setMenuOpen(true);
                                setLine(ci);
                              }}
                              className={cn(
                                "group/line flex items-center gap-4 rounded-xl p-3 transition-colors",
                                line === ci ? "bg-primary/10" : "hover:bg-muted",
                              )}
                            >
                              <span
                                className={cn(
                                  "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors",
                                  line === ci
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-primary/10 text-primary",
                                )}
                              >
                                <AnimatedIcon
                                  icon={c.icon}
                                  motion={c.motion}
                                  trigger={line === ci ? "loop" : "parent"}
                                  repeatDelay={1.2}
                                  className="h-5 w-5"
                                />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span
                                  className={cn(
                                    "block font-heading font-semibold",
                                    line === ci ? "text-primary" : "text-foreground",
                                  )}
                                >
                                  {c.label}
                                </span>
                                <span className="block text-sm leading-snug text-muted-foreground">
                                  {c.description}
                                </span>
                              </span>
                              <ArrowUpRight
                                className={cn(
                                  "h-4 w-4 flex-shrink-0 transition-all",
                                  line === ci
                                    ? "translate-x-0 text-primary opacity-100"
                                    : "-translate-x-1 opacity-0",
                                )}
                              />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          }

          return (
            <li key={e.key} className="border-b">
              <Link
                to={e.href ?? "/solutions"}
                onMouseEnter={() => activate(i)}
                onFocus={() => activate(i)}
                className={rowClass}
              >
                {rowContent(e, i, isActive)}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        ref={panelRef}
        onMouseEnter={() => setHoverPanel(true)}
        onMouseLeave={() => setHoverPanel(false)}
        className="sticky top-28 h-[600px] self-start overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-primary/10"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={current.key}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Slideshow slides={current.slides} playing={inView && !hoverPanel} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-x-0 bottom-0 z-10 p-8 text-primary-foreground"
          >
            {line !== null && (
              <p className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                {entry.label}
              </p>
            )}
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25 backdrop-blur-md">
              <AnimatedIcon
                icon={current.icon}
                motion={current.motion}
                trigger="loop"
                repeatDelay={1.8}
                className="h-6 w-6"
              />
            </span>
            <h3 className="mb-2 text-3xl font-heading font-bold">{current.label}</h3>
            <p className="mb-5 max-w-md text-primary-foreground/80">{current.blurb}</p>
            {current.children ? (
              <div className="flex flex-wrap gap-2">
                {current.children.map((c) => (
                  <Link
                    key={c.href}
                    to={c.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-heading font-semibold backdrop-blur-sm transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    <c.icon className="h-3.5 w-3.5" aria-hidden />
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              current.href && (
                <Link
                  to={current.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-heading font-semibold text-primary transition-shadow hover:shadow-lg"
                >
                  Explore {current.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ---------- Mobile / tablet: swipeable cards ---------- */

const MobileCard = ({ e, i }: { e: Entry; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(i, 3) * 0.08 }}
      className="relative h-[440px] w-[78%] flex-shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[46%]"
    >
      <Slideshow slides={e.slides} playing={inView} lazy compact />
      {e.children && (
        // Extra tint so the product-line buttons stay readable over a bright photo.
        <div className="absolute inset-0 bg-gradient-to-t from-nxs-navy via-nxs-navy/75 to-transparent" />
      )}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-primary-foreground">
        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/15 backdrop-blur-md">
          <e.icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mb-1 text-xl font-heading font-bold">{e.label}</h3>
        <p className="mb-4 line-clamp-3 text-sm text-primary-foreground/80">{e.blurb}</p>
        {e.children ? (
          <div className="grid grid-cols-2 gap-2">
            {e.children.map((c) => (
              <Link
                key={c.href}
                to={c.href}
                className="flex flex-col gap-1.5 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-2.5 text-xs font-heading font-semibold leading-tight backdrop-blur-md"
              >
                <c.icon className="h-4 w-4" aria-hidden />
                <span>{c.label}</span>
              </Link>
            ))}
          </div>
        ) : (
          e.href && (
            <Link
              to={e.href}
              className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          )
        )}
      </div>
    </motion.div>
  );
};

const MobileExplorer = () => (
  <div className="-mx-8 flex snap-x snap-mandatory scroll-px-8 gap-4 overflow-x-auto px-8 pb-4 [scrollbar-width:none] lg:hidden">
    {entries.map((e, i) => (
      <MobileCard key={e.key} e={e} i={i} />
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
