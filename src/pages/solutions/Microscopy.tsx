import SolutionPage from "@/components/SolutionPage";
import microscopyImg from "@/assets/microscopy.webp";

const data = {
  title: "Operating Microscopy",
  subtitle: "Premium surgical microscopes for neurosurgery, ophthalmology, and ENT",
  heroImage: microscopyImg,
  partner: "Leica Microsystems",
  overview: [
    "NXS is the exclusive distributor of Leica Microsystems surgical microscopes in East Africa, providing premium visualization systems for neurosurgery, ophthalmology, ENT, spine, and reconstructive surgery.",
    "Our Leica microscopes deliver exceptional optics, ergonomic design, and advanced features including fluorescence imaging, integrated documentation, and robotic positioning for precision surgical procedures.",
  ],
  products: [
    { name: "Neurosurgery Microscopes", description: "Leica M530 OH6 and M720 OH5 surgical microscopes with fluorescence for brain and spine surgery." },
    { name: "Ophthalmology Microscopes", description: "Leica M844 and M620 microscopes optimized for cataract, vitreoretinal, and refractive surgery." },
    { name: "ENT Microscopes", description: "Compact surgical microscopes with long working distance for ear, nose, and throat procedures." },
    { name: "Spine Surgery Microscopes", description: "Microscopes with enhanced depth of field and illumination for minimally invasive spine surgery." },
    { name: "Fluorescence Modules", description: "FL560 and FL400 fluorescence modules for tumour visualization and vascular assessment." },
    { name: "Documentation Systems", description: "Integrated HD/4K camera systems for surgical recording, teaching, and telemedicine." },
  ],
  features: [
    "Apochromatic optics for crystal-clear imaging",
    "Fluorescence-guided surgery capability",
    "Electromagnetic braking for precise positioning",
    "Ergonomic design reducing surgeon fatigue",
    "Integrated HD/4K documentation",
    "Foot-controlled zoom & focus",
    "Wide range of objective lenses",
    "Expert installation & clinical training",
  ],
};

const Microscopy = () => <SolutionPage data={data} />;
export default Microscopy;
