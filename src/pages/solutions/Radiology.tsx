import SolutionPage from "@/components/SolutionPage";
import radiologyImg from "@/assets/radiology_xray.jpg";

const data = {
  title: "Radiology / X-Ray",
  subtitle: "Complete digital radiography and fluoroscopy solutions for modern diagnostic imaging",
  heroImage: radiologyImg,
  partner: "GE Healthcare",
  overview: [
    "NXS provides comprehensive radiology solutions ranging from general-purpose X-ray systems to advanced digital radiography and fluoroscopy equipment. Our solutions are designed for hospitals, clinics, and diagnostic centres across East Africa.",
    "We offer complete turnkey installations including room design, radiation protection, equipment supply, installation, commissioning, and staff training. Our partnership with GE Healthcare ensures access to the latest imaging technology and ongoing technical support.",
  ],
  products: [
    { name: "Digital Radiography (DR)", description: "High-resolution flat-panel digital X-ray systems for general radiography with instant image preview." },
    { name: "Computed Radiography (CR)", description: "Cost-effective CR systems for digitizing existing X-ray equipment with phosphor plate technology." },
    { name: "Fluoroscopy Systems", description: "Real-time imaging systems for gastrointestinal, urological, and interventional procedures." },
    { name: "Mobile X-Ray Units", description: "Portable digital X-ray systems for bedside imaging in ICU, emergency, and operating theatre settings." },
    { name: "Mammography Systems", description: "Dedicated breast imaging solutions with digital tomosynthesis capability." },
    { name: "PACS & RIS", description: "Picture archiving, communication systems, and radiology information systems for filmless departments." },
  ],
  features: [
    "Flat-panel digital detector technology",
    "Low-dose imaging protocols",
    "Seamless DICOM connectivity",
    "Remote diagnostics & support",
    "Comprehensive staff training programs",
    "Preventive maintenance contracts",
    "Room design & radiation protection",
    "Regulatory compliance assistance",
  ],
};

const Radiology = () => <SolutionPage data={data} />;
export default Radiology;
