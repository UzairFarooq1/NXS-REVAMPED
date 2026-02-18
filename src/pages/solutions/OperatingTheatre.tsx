import SolutionPage from "@/components/SolutionPage";
import operatingTheatreImg from "@/assets/operating_theatre.jpg";

const data = {
  title: "Operating Theatre",
  subtitle: "Integrated operating theatre solutions from lights and tables to ceiling-suspended systems",
  heroImage: operatingTheatreImg,
  partner: "Trumpf Medical",
  overview: [
    "NXS is the exclusive distributor of Trumpf Medical solutions in East Africa, providing world-class operating theatre equipment including LED surgical lights, electronic operating tables, and ceiling-suspended supply systems.",
    "Our operating theatre solutions are designed for seamless integration, enabling surgeons and theatre staff to work in an optimal environment with precise lighting, versatile patient positioning, and organized supply management.",
  ],
  products: [
    { name: "LED Surgical Lights", description: "Trumpf TruLight LED operating lights with shadow-free illumination and adjustable colour temperature." },
    { name: "Operating Tables", description: "Trumpf electronic surgical tables with modular accessories for all surgical disciplines including bariatric." },
    { name: "Ceiling-Suspended Systems", description: "Trumpf ceiling supply units and boom systems for gas, power, and data management in integrated theatres." },
    { name: "Patient Transfer Systems", description: "Safe and efficient patient transfer solutions from ward to operating theatre and recovery." },
    { name: "OR Integration", description: "Complete operating room integration for audio-visual routing, recording, and telemedicine." },
    { name: "Theatre Planning", description: "Comprehensive theatre design and workflow consultancy for new builds and refurbishments." },
  ],
  features: [
    "Shadow-free LED illumination technology",
    "Modular table accessories for all specialties",
    "Integrated boom systems for organized workflow",
    "Bariatric-capable operating tables",
    "Hygienic design with easy-clean surfaces",
    "Full theatre design & planning services",
    "Installation & commissioning by trained engineers",
    "Ongoing maintenance & spare parts support",
  ],
};

const OperatingTheatre = () => <SolutionPage data={data} />;
export default OperatingTheatre;
