import SolutionPage from "@/components/SolutionPage";
import endoscopyImg from "@/assets/endoscopy.jpg";

const data = {
  title: "Endoscopy",
  subtitle: "Advanced endoscopic solutions for gastroenterology and surgical procedures",
  heroImage: endoscopyImg,
  partner: "Sony Medical",
  overview: [
    "NXS delivers comprehensive endoscopy solutions for gastrointestinal diagnostics, OBS-GYNE procedures, and minimally invasive surgery. Our solutions combine high-definition imaging, ergonomic design, and reliable performance.",
    "We supply complete endoscopy suites including scopes, processors, light sources, displays, and recording systems. Our biomedical engineering team provides installation, training, and preventive maintenance.",
  ],
  products: [
    { name: "Video Gastroscopes", description: "High-definition flexible gastroscopes for upper GI diagnostics and therapeutic procedures." },
    { name: "Video Colonoscopes", description: "Advanced colonoscopes with enhanced visualization for colorectal screening and intervention." },
    { name: "Hysteroscopes", description: "Rigid and flexible hysteroscopes for diagnostic and operative gynaecological procedures." },
    { name: "Laparoscopic Systems", description: "Full HD laparoscopic camera systems, insufflators, and instruments for minimally invasive surgery." },
    { name: "Endoscopy Processors", description: "Video processors with image enhancement technology for superior diagnostic visualization." },
    { name: "Medical Displays & Printers", description: "Sony surgical-grade monitors and medical printers for image documentation." },
  ],
  features: [
    "Full HD & 4K imaging capability",
    "Narrow Band Imaging (NBI) technology",
    "Integrated recording & archiving",
    "Ergonomic scope design for operator comfort",
    "Complete suite design & installation",
    "Scope repair & maintenance services",
    "Infection control & reprocessing guidance",
    "Clinical training & applications support",
  ],
};

const Endoscopy = () => <SolutionPage data={data} />;
export default Endoscopy;
