import SolutionPage from "@/components/SolutionPage";
import radiologyImg from "@/assets/radiology.jpg";

const data = {
  title: "Radiology Consumables",
  subtitle: "Radiation protection, contrast media, and imaging accessories",
  heroImage: radiologyImg,
  partner: "Multiple Partners",
  overview: [
    "NXS supplies a comprehensive range of radiology consumables including radiation protection apparel, contrast media, imaging accessories, and X-ray film processing chemicals. Our products are sourced from trusted global manufacturers.",
    "We maintain adequate stock levels in our Nairobi warehouse to ensure timely supply to healthcare facilities across the region, supported by our efficient logistics network.",
  ],
  products: [
    { name: "Lead Aprons & Protection", description: "Lightweight lead and lead-free radiation protection aprons, thyroid shields, and gonadal shields." },
    { name: "Lead Glasses", description: "Radiation protection eyewear with prescription lens options for interventional radiology staff." },
    { name: "Contrast Media", description: "Iodinated and gadolinium-based contrast agents for CT, MRI, and fluoroscopy procedures." },
    { name: "X-Ray Cassettes & Plates", description: "CR cassettes, imaging plates, and flat-panel detector accessories for radiography." },
    { name: "Positioning Aids", description: "Patient positioning sponges, sandbags, and immobilization devices for accurate imaging." },
    { name: "Quality Assurance Tools", description: "Phantoms, dosimeters, and QA test tools for radiology department quality control programmes." },
  ],
  features: [
    "Lightweight ergonomic protection wear",
    "Compliant with international safety standards",
    "Wide range of sizes & custom options",
    "Reliable local stock availability",
    "Competitive pricing & bulk discounts",
    "Regular supply chain & delivery schedules",
    "Product training & safety guidance",
    "Disposal & replacement programmes",
  ],
};

const Consumables = () => <SolutionPage data={data} />;
export default Consumables;
