import {
  Radiation,
  Scan,
  ShieldCheck,
  FlaskConical,
  Printer,
  ScanSearch,
  LampCeiling,
  MonitorDot,
  HeartPulse,
  Droplets,
  Ear,
  Brain,
  Microscope,
  Baby,
  type LucideIcon,
} from "lucide-react";
import type { IconMotion } from "@/components/AnimatedIcon";

export interface SolutionLink {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  motion: IconMotion;
}

/** The Radiology family: four product lines grouped under one heading. */
export const radiologyGroup = {
  label: "Radiology",
  description: "Complete imaging: equipment, protection, contrast & printing",
  icon: Radiation,
  motion: "spin" as IconMotion,
  items: [
    {
      label: "Radiology Equipment",
      href: "/solutions/radiology",
      description: "Digital X-ray, fluoroscopy & mobile imaging",
      icon: Scan,
      motion: "pulse",
    },
    {
      label: "Radiology Consumables",
      href: "/solutions/consumables",
      description: "Lead aprons, shields & protective wear",
      icon: ShieldCheck,
      motion: "pop",
    },
    {
      label: "Contrast Media",
      href: "/solutions/contrast-media",
      description: "Diagnostic contrast agents",
      icon: FlaskConical,
      motion: "wiggle",
    },
    {
      label: "Printers",
      href: "/solutions/sony-printers",
      description: "Sony medical-grade printers",
      icon: Printer,
      motion: "bounce",
    },
  ] satisfies SolutionLink[],
};

/** Standalone specialties, each with its own page. */
export const specialtySolutions: SolutionLink[] = [
  {
    label: "Endoscopy & MAS",
    href: "/solutions/endoscopy",
    description: "GI endoscopy & minimally invasive surgery",
    icon: ScanSearch,
    motion: "wiggle",
  },
  {
    label: "Operating Theatre",
    href: "/solutions/operating-theatre",
    description: "Surgical lights, booms & anaesthesia",
    icon: LampCeiling,
    motion: "swing",
  },
  {
    label: "ICU Monitoring",
    href: "/solutions/icu",
    description: "Patient monitoring & critical care",
    icon: MonitorDot,
    motion: "pulse",
  },
  {
    label: "Cardiology",
    href: "/solutions/cardiology",
    description: "ECG, stress & cardiac diagnostics",
    icon: HeartPulse,
    motion: "beat",
  },
  {
    label: "Renal Care",
    href: "/solutions/renal-care",
    description: "Dialysis systems & consumables",
    icon: Droplets,
    motion: "bounce",
  },
  {
    label: "Hearing Solutions",
    href: "/solutions/cochlear",
    description: "Cochlear implants & processors",
    icon: Ear,
    motion: "wiggle",
  },
  {
    label: "Neurology",
    href: "/solutions/neurology",
    description: "EEG, EMG & neurodiagnostics",
    icon: Brain,
    motion: "pulse",
  },
  {
    label: "Operating Microscopy",
    href: "/solutions/microscopy",
    description: "Surgical microscopes by Leica",
    icon: Microscope,
    motion: "swing",
  },
  {
    label: "Maternal & Infant Care",
    href: "/solutions/maternal-infant-care",
    description: "Incubators, warmers & fetal monitoring",
    icon: Baby,
    motion: "bounce",
  },
];

export const allSolutions: SolutionLink[] = [
  ...radiologyGroup.items,
  ...specialtySolutions,
];

export const solutionByHref = (href: string) =>
  allSolutions.find((s) => s.href === href);
