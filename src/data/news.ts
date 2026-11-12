import knhDonation from "@/assets/news-events/knh-endoscopy-donation-1.jpg";
import isoCertificate from "@/assets/news-events/iso-13485-2016-certificate.jpg";
import ksaConference from "@/assets/news-events/ksa-2026-conference-1.jpg";
import ciConference from "@/assets/news-events/COCHLEAR_CONFERENCE.jpg";
import endoscopyTraining from "@/assets/news-events/endoscopy-training-1.png";
import cochlearSwitchOn from "@/assets/news-events/cochlear-switch-on-1.png";
import bronchoscopyTraining from "@/assets/news-events/bronchoscopy-training-1.png";
import wegoKracon from "@/assets/news-events/wego-kracon-1.png";
import cochlearNexa from "@/assets/news-events/cochlear-nexa-system.png";
import spirationValve from "@/assets/news-events/spiration-valve-1.png";
import ccskMonitoring from "@/assets/news-events/ccsk-ge-monitoring-2025.png";

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  category: string;
  link: string;
  /** Cover photo, taken from the article's own gallery. */
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "2026-10-23",
    title: "NXS Donates Endoscopy Equipment to Kenyatta National Hospital",
    excerpt:
      "Through the Olympus Emerging Markets Initiative, NXS donated endoscopy equipment worth USD 130,000 to Kenyatta National Hospital, backed by a 3-year comprehensive service contract to keep the training centre's equipment reliably operational for patient care and endoscopy training.",
    category: "Milestone",
    link: "/news/knh-endoscopy-donation-2026",
    image: knhDonation,
  },
  {
    date: "2026-09-16",
    title: "NXS Achieves ISO 13485:2016 Certification",
    excerpt:
      "Nairobi X-Ray Supplies Ltd has been certified to ISO 13485:2016, the international standard for Medical Device Quality Management Systems, covering sales, distribution, installation, preventive and corrective maintenance, servicing, and technical support of medical equipment & consumables.",
    category: "Milestone",
    link: "/news/iso-13485-2016-certification",
    image: isoCertificate,
  },
  {
    date: "2026-08-19",
    title: "NXS at the 33rd KSA Annual Scientific Conference",
    excerpt:
      "NXS partnered with GE HealthCare to showcase critical care monitoring and anesthesia solutions at the 33rd Kenya Surgical Association Annual Scientific Conference, held at Sarova Whitesands, Mombasa.",
    category: "Conference",
    link: "/news/ksa-2026-conference",
    image: ksaConference,
  },
  {
    date: "2026-05-10",
    title:
      "First CI Conference and Temporal Bone Workshop Held in Nairobi",
    excerpt:
      "NXS partnered with Cochlear during the inaugural Cochlear Implant Conference and Workshop hosted alongside CIGOK and KENTS in Nairobi, Kenya. The workshop featured advanced temporal bone simulation sessions running alongside in-depth discussions for surgeons, audiologists, and speech therapists, strengthening multidisciplinary collaboration in cochlear implant care.",
    category: "Conference",
    link: "/news/first-ci-conference-workshop-nairobi-2026",
    image: ciConference,
  },
  {
    date: "2026-04-21",
    title: "NXS Engineers Participate in Endoscopy Skills Training",
    excerpt:
      "At the Surgical Society of Kenya Annual Conference pre-workshop, our engineer joined hands-on endoscopy training alongside clinical leaders, reinforcing our commitment to delivering the best service through continuous engineer training.",
    category: "Training",
    link: "/news/endoscopy-training-society-of-kenya-2026",
    image: endoscopyTraining,
  },
  {
    date: "2026-01-20",
    title: "The Gift of Hearing: 56 Cochlear Recipients Switched On",
    excerpt:
      "NXS and Cochlear, together with audiology teams from Kenyatta National Hospital and Moi Teaching and Referral Hospital, completed switch-on for 56 recipients supported by Lalaa Asmaa Foundation and Kenya's First Lady's charitable initiative.",
    category: "Event",
    link: "/news/cochlear-switch-on-56-recipients",
    image: cochlearSwitchOn,
  },
  {
    date: "2025-11-27",
    title: "Olympus and NXS Advance Bronchoscopy Training at KNH",
    excerpt:
      "Guided by our long-standing mindset of innovation through education and training, Olympus Corporation (OMETA) and NXS supported a three-day bronchoscopy and EBUS programme at Kenyatta National Hospital, strengthening local clinical and engineering capability for better patient outcomes.",
    category: "Training",
    link: "/news/bronchoscopy-ebus-training-knh-2025",
    image: bronchoscopyTraining,
  },
  {
    date: "2025-10-11",
    title: "NXS and WEGO Showcase MIX Dialysis Innovation at KRACON 2025",
    excerpt:
      "In partnership with WEGO Blood Purification Business Group, NXS participated in the Kenya Renal Association Annual Scientific Conference in Mombasa, where the next-generation MIX Series Dialysis Machine drew strong interest for its patient-centered and efficiency-focused design.",
    category: "Conference",
    link: "/news/wego-kracon-2025",
    image: wegoKracon,
  },
  {
    date: "2026-06-12",
    title: "Cochlear Introduces the Nucleus Nexa Smart Implant System",
    excerpt:
      "Cochlear has introduced the Nucleus Nexa System, described as the world's first and only smart cochlear implant system, combining internal memory, connected care, and future-ready firmware updates to support long-term hearing outcomes.",
    category: "Innovation",
    link: "/news/cochlear-nucleus-nexa-system",
    image: cochlearNexa,
  },
  {
    date: "2025-06-9",
    title: "First Spiration Valve Recipient in Africa Treated in Nairobi",
    excerpt:
      "NXS and Olympus Medical Systems EMEA reached a major milestone with Africa's first Spiration Valve recipient, while supporting a week of charitable pulmonology interventional surgeries in Nairobi through expert collaboration and on-site technical support.",
    category: "Milestone",
    link: "/news/spiration-valve-first-recipient-africa",
    image: spirationValve,
  },
  {
    date: "2025-04-11",
    title: "NXS Showcases GE Critical Care Monitoring at CCSK 2025",
    excerpt:
      "At the CCSK Conference, NXS presented GE HealthCare's advanced monitoring portfolio, including CARESCAPE Canvas and B155M systems, with hands-on demonstrations focused on faster clinical decisions and improved patient outcomes.",
    category: "Conference",
    link: "/news/ccsk-ge-monitoring-2025",
    image: ccskMonitoring,
  },
];

/** Newest first. */
export const latestNews = (count: number) =>
  [...newsItems]
    .sort((x, y) => new Date(y.date).getTime() - new Date(x.date).getTime())
    .slice(0, count);

export const formatNewsDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
