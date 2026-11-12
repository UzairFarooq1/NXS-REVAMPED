import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_main.png";
import IsoCertifiedBadge from "@/components/IsoCertifiedBadge";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  radiologyGroup,
  specialtySolutions,
  type SolutionLink,
} from "@/data/solutions";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions", isMega: true },
  { label: "Partners", href: "/partners" },
  { label: "CSR", href: "/csr" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut", staggerChildren: 0.03 },
  },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

/* ---------- Desktop mega-menu pieces ---------- */

const RadiologyLink = ({
  item,
  active,
  onNavigate,
}: {
  item: SolutionLink;
  active: boolean;
  onNavigate: () => void;
}) => (
  <motion.div variants={linkVariants}>
  <motion.div whileHover="hover">
    <Link
      to={item.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
        active
          ? "bg-primary-foreground/20"
          : "hover:bg-primary-foreground/10",
      )}
    >
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-primary-foreground/15">
        <AnimatedIcon
          icon={item.icon}
          motion={item.motion}
          className="h-[18px] w-[18px] text-primary-foreground"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-heading font-semibold text-primary-foreground">
          {item.label}
        </span>
        <span className="block text-xs leading-snug text-primary-foreground/70">
          {item.description}
        </span>
      </span>
    </Link>
  </motion.div>
  </motion.div>
);

const SpecialtyLink = ({
  item,
  active,
  onNavigate,
}: {
  item: SolutionLink;
  active: boolean;
  onNavigate: () => void;
}) => (
  <motion.div variants={linkVariants}>
  <motion.div whileHover="hover">
    <Link
      to={item.href}
      onClick={onNavigate}
      className={cn(
        "group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors",
        active ? "bg-accent" : "hover:bg-accent",
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md transition-colors",
          active
            ? "bg-primary text-primary-foreground"
            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
        )}
      >
        <AnimatedIcon
          icon={item.icon}
          motion={item.motion}
          className="h-[18px] w-[18px]"
        />
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block text-sm font-heading font-semibold transition-colors",
            active ? "text-primary" : "text-foreground group-hover:text-primary",
          )}
        >
          {item.label}
        </span>
        <span className="block text-xs leading-snug text-muted-foreground">
          {item.description}
        </span>
      </span>
    </Link>
  </motion.div>
  </motion.div>
);

/* ---------- Navbar ---------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [radiologyOpen, setRadiologyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number>();
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };
  const inRadiology = radiologyGroup.items.some(
    (i) => i.href === location.pathname,
  );

  // Close menus whenever the route changes
  useEffect(() => {
    setIsOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      setSolutionsOpen(location.pathname.startsWith("/solutions"));
      setRadiologyOpen(inRadiology);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMegaSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <motion.a
              href="tel:+254733512802"
              whileHover="hover"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <AnimatedIcon icon={Phone} motion="ring" className="h-3.5 w-3.5" />
              +254 (0) 703 700 766
            </motion.a>
            <motion.a
              href="mailto:info@nxsltd.com"
              whileHover="hover"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <AnimatedIcon icon={Mail} motion="bounce" className="h-3.5 w-3.5" />
              info@nxsltd.com
            </motion.a>
          </div>
          <span className="text-primary-foreground/70">
            Part of The Vanguard Group
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
          scrolled
            ? "bg-background/90 shadow-md"
            : "bg-background/95 shadow-sm",
        )}
      >
        <div
          className={cn(
            "container relative flex items-center justify-between transition-[height] duration-300",
            scrolled ? "h-16" : "h-16 lg:h-20",
          )}
        >
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Nairobi X-Ray Supplies Ltd"
                className={cn(
                  "w-auto transition-all duration-300",
                  scrolled ? "h-10" : "h-10 lg:h-12",
                )}
              />
            </Link>
            <div className="block w-px h-8 sm:h-10 lg:h-12 bg-border" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <IsoCertifiedBadge
                className="h-10 lg:h-12 w-10 lg:w-12 flex-shrink-0"
                title="ISO 13485:2016 Certified Company"
              />
              <span className="text-[9px] sm:text-[11px] lg:text-xs font-heading font-bold leading-tight text-foreground/80">
                ISO 13485:2016
                <br />
                Certified Company
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-stretch self-stretch gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              if (item.isMega) {
                return (
                  <div
                    key={item.label}
                    className="flex items-center"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMegaSoon}
                  >
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      onClick={() => setMegaOpen((o) => !o)}
                      className={cn(
                        "relative flex items-center gap-1 px-3 py-2 text-sm font-medium font-heading transition-colors",
                        active || megaOpen
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary",
                      )}
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: megaOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {megaOpen && (
                        <div className="absolute right-0 top-full z-50 pt-2 w-[min(880px,calc(100vw-2rem))]">
                          <motion.div
                            variants={panelVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="grid grid-cols-[300px_1fr] overflow-hidden rounded-2xl border bg-card shadow-2xl"
                          >
                            {/* Radiology group */}
                            <motion.div
                              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                              className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-nxs-navy p-5"
                            >
                              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground/10 blur-2xl" />
                              <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-secondary/30 blur-2xl" />
                              <motion.div
                                variants={linkVariants}
                                className="relative mb-4 flex items-center gap-3"
                              >
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15 ring-1 ring-primary-foreground/20">
                                  <AnimatedIcon
                                    icon={radiologyGroup.icon}
                                    motion="spin"
                                    trigger="loop"
                                    repeatDelay={3}
                                    className="h-6 w-6 text-primary-foreground"
                                  />
                                </span>
                                <span>
                                  <span className="block text-base font-heading font-bold text-primary-foreground">
                                    {radiologyGroup.label}
                                  </span>
                                  <span className="block text-xs leading-snug text-primary-foreground/75">
                                    {radiologyGroup.description}
                                  </span>
                                </span>
                              </motion.div>
                              <div className="relative space-y-1">
                                {radiologyGroup.items.map((r) => (
                                  <RadiologyLink
                                    key={r.href}
                                    item={r}
                                    active={location.pathname === r.href}
                                    onNavigate={() => setMegaOpen(false)}
                                  />
                                ))}
                              </div>
                            </motion.div>

                            {/* Standalone specialties */}
                            <div className="flex flex-col p-5">
                              <motion.p
                                variants={linkVariants}
                                className="mb-2 px-3 text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground"
                              >
                                Specialties
                              </motion.p>
                              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                                {specialtySolutions.map((s) => (
                                  <SpecialtyLink
                                    key={s.href}
                                    item={s}
                                    active={location.pathname === s.href}
                                    onNavigate={() => setMegaOpen(false)}
                                  />
                                ))}
                              </div>
                              <motion.div
                                variants={linkVariants}
                                className="mt-auto border-t pt-3"
                              >
                                <Link
                                  to="/solutions"
                                  onClick={() => setMegaOpen(false)}
                                  className="group inline-flex items-center gap-1.5 px-3 text-sm font-heading font-semibold text-primary"
                                >
                                  View all solutions
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={item.label} className="flex items-center">
                  <Link
                    to={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium font-heading transition-colors",
                      active
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline-flex"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t bg-background"
            >
              <div className="container max-h-[calc(100vh-4rem)] overflow-y-auto py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.isMega ? (
                      <button
                        type="button"
                        aria-expanded={solutionsOpen}
                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                        className={cn(
                          "flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium font-heading transition-colors",
                          isActive(item.href)
                            ? "text-primary"
                            : "text-foreground/80 hover:text-primary",
                        )}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: solutionsOpen ? 180 : 0 }}
                          className="inline-flex"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "block px-3 py-2.5 text-sm font-medium font-heading transition-colors",
                          isActive(item.href)
                            ? "text-primary"
                            : "text-foreground/80 hover:text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}

                    <AnimatePresence initial={false}>
                      {item.isMega && solutionsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 space-y-1 border-l pl-3 pb-2">
                            {/* Radiology group (nested) */}
                            <button
                              type="button"
                              aria-expanded={radiologyOpen}
                              onClick={() => setRadiologyOpen(!radiologyOpen)}
                              className={cn(
                                "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-heading font-semibold transition-colors",
                                inRadiology
                                  ? "text-primary"
                                  : "text-foreground/80 hover:text-primary",
                              )}
                            >
                              <radiologyGroup.icon className="h-4 w-4 text-primary" />
                              <span className="flex-1 text-left">
                                {radiologyGroup.label}
                              </span>
                              <motion.span
                                animate={{ rotate: radiologyOpen ? 180 : 0 }}
                                className="inline-flex"
                              >
                                <ChevronDown className="h-4 w-4" />
                              </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                              {radiologyOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 space-y-0.5 border-l border-primary/30 pl-3">
                                    {radiologyGroup.items.map((r) => (
                                      <MobileSolutionLink
                                        key={r.href}
                                        item={r}
                                        active={location.pathname === r.href}
                                      />
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Standalone specialties */}
                            {specialtySolutions.map((s) => (
                              <MobileSolutionLink
                                key={s.href}
                                item={s}
                                active={location.pathname === s.href}
                              />
                            ))}
                            <Link
                              to="/solutions"
                              className="flex items-center gap-1.5 px-3 py-2 text-sm font-heading font-semibold text-primary"
                            >
                              View all solutions
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const MobileSolutionLink = ({
  item,
  active,
}: {
  item: SolutionLink;
  active: boolean;
}) => (
  <Link
    to={item.href}
    className={cn(
      "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
      active
        ? "bg-accent text-primary"
        : "text-foreground/70 hover:text-primary hover:bg-accent/60",
    )}
  >
    <item.icon className="h-4 w-4 flex-shrink-0 text-primary/80" />
    {item.label}
  </Link>
);

export default Navbar;
