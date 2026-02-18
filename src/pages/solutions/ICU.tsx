import SolutionPage from "@/components/SolutionPage";
import icuImg from "@/assets/icu-monitoring.avif";

const data = {
  title: "ICU Monitoring",
  subtitle: "Advanced patient monitoring solutions for critical care environments",
  heroImage: icuImg,
  partner: "GE Healthcare / Nihon Kohden",
  overview: [
    "NXS supplies comprehensive ICU monitoring solutions from GE Healthcare and Nihon Kohden, covering bedside monitors, central stations, and clinical information systems for critical care, emergency, and peri-operative environments.",
    "Our monitoring solutions enable continuous surveillance of vital signs, early warning of patient deterioration, and seamless data integration with hospital information systems.",
  ],
  products: [
    { name: "CARESCAPE Monitors", description: "GE CARESCAPE bedside patient monitors with modular parameters for ICU and OR monitoring." },
    { name: "Bedside Monitors", description: "Nihon Kohden BSM series patient monitors for adult, paediatric, and neonatal monitoring." },
    { name: "Central Monitoring Stations", description: "Multi-bed surveillance systems with alarm management and trend analysis for nursing stations." },
    { name: "Telemetry Systems", description: "Wireless patient monitoring for step-down units and ambulatory cardiac monitoring." },
    { name: "Clinical Information Systems", description: "Automated vital signs documentation and EMR integration for paperless ICU workflows." },
    { name: "Transport Monitors", description: "Compact, rugged monitors for safe intra-hospital patient transport." },
  ],
  features: [
    "Multi-parameter vital signs monitoring",
    "Early warning score (EWS) algorithms",
    "Network-ready with HL7/FHIR connectivity",
    "Touchscreen interface with intuitive workflows",
    "Arrhythmia analysis & ST monitoring",
    "Neonatal & paediatric-specific modes",
    "Remote viewing & alarm notification",
    "Preventive maintenance & biomedical support",
  ],
};

const ICU = () => <SolutionPage data={data} />;
export default ICU;
