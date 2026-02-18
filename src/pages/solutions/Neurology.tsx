import SolutionPage from "@/components/SolutionPage";
import radiologyImg from "@/assets/radiology.jpg";

const data = {
  title: "Neurology",
  subtitle: "Comprehensive neurological diagnostic and monitoring solutions",
  heroImage: radiologyImg,
  partner: "Nihon Kohden",
  overview: [
    "NXS provides advanced neurology diagnostic equipment from Nihon Kohden, the world leader in clinical neurophysiology. Our solutions cover electroencephalography (EEG), electromyography (EMG), and evoked potential testing.",
    "Our neurology solutions serve hospitals, neuroscience centres, and sleep labs with reliable, high-quality diagnostic systems backed by expert training and ongoing support.",
  ],
  products: [
    { name: "EEG Systems", description: "Digital electroencephalography systems for routine, ambulatory, and long-term monitoring with video synchronization." },
    { name: "EMG/NCS Systems", description: "Electromyography and nerve conduction study systems for neuromuscular diagnostics." },
    { name: "Evoked Potentials", description: "Visual, auditory, and somatosensory evoked potential systems for neurological assessment." },
    { name: "Intraoperative Monitoring", description: "Real-time neurophysiological monitoring during spinal, brain, and vascular surgeries." },
    { name: "Sleep Diagnostic Systems", description: "Polysomnography systems for comprehensive sleep studies and disorder diagnosis." },
    { name: "Ambulatory EEG", description: "Portable EEG monitoring for extended outpatient recording and epilepsy diagnosis." },
  ],
  features: [
    "High-density EEG with advanced mapping",
    "Automated spike & seizure detection",
    "Integrated video-EEG monitoring",
    "Quantitative EMG analysis tools",
    "Network-ready DICOM integration",
    "Compact ambulatory recording devices",
    "Comprehensive clinical training programs",
    "Remote support & software updates",
  ],
};

const Neurology = () => <SolutionPage data={data} />;
export default Neurology;
