import SolutionPage from "@/components/SolutionPage";
import csrImg from "@/assets/csr.jpg";

const data = {
  title: "Renal Care",
  subtitle: "Dialysis equipment and renal care solutions for kidney disease management",
  heroImage: csrImg,
  partner: "Nipro",
  overview: [
    "NXS partners with Nipro to deliver comprehensive renal care solutions including haemodialysis machines, consumables, and water treatment systems. Our solutions serve dialysis centres, hospitals, and home dialysis programmes.",
    "We provide end-to-end support from equipment selection and facility design through installation, training, and ongoing consumable supply to ensure uninterrupted patient care.",
  ],
  products: [
    { name: "Haemodialysis Machines", description: "Nipro haemodialysis systems with advanced safety features and user-friendly interfaces." },
    { name: "Dialysis Consumables", description: "Dialyzers, bloodlines, fistula needles, and other disposables for routine dialysis treatments." },
    { name: "Water Treatment Systems", description: "Reverse osmosis water purification systems designed specifically for dialysis water quality requirements." },
    { name: "Peritoneal Dialysis", description: "CAPD and APD solutions and equipment for home-based peritoneal dialysis programmes." },
    { name: "Dialysis Chairs & Furniture", description: "Ergonomic patient chairs and treatment station furniture for dialysis centres." },
    { name: "Acute Dialysis", description: "Portable dialysis systems for acute kidney injury management in ICU settings." },
  ],
  features: [
    "Advanced ultrafiltration control",
    "Integrated blood pressure monitoring",
    "User-friendly touchscreen interface",
    "Comprehensive alarm management",
    "Low extracorporeal blood volume",
    "Facility design & water treatment planning",
    "Staff training & clinical education",
    "Reliable consumable supply chain",
  ],
};

const RenalCare = () => <SolutionPage data={data} />;
export default RenalCare;
