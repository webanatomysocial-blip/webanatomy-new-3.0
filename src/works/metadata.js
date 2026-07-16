import case2 from "../works/Work-images/Theat.png";
import case3 from "../works/Work-images/togglenow.png";
import case4 from "../works/Work-images/Pied.png";
import sase from "../works/Work-images/sase.png";
import { FiArrowUpRight, FiStar, FiActivity, FiBriefcase, FiHeart } from "react-icons/fi";
import erynitsBanner from "../WorkImages/eryntis/1.webp";
import mudraBanner from "../WorkImages/mudra/1.webp";
import prugensBanner from "../WorkImages/prugens/1.webp";


export const worksMetadata = [
  {
    id: "ToggleNow",
    title: "ToggleNow - Transforming Project Management",
    category: "UI/UX",
    description: "ToggleNow is a comprehensive SaaS platform designed to streamline project management, team collaboration, and business automation.",
    image: case3,
    slug: "togglenow",
    icon: FiArrowUpRight,
    logoImage: null, // Add your logo import here
  },
  {
    id: "threatsenseai",
    title: "ThreatSenseAI",
    category: "Branding",
    description: "ThreatSenseAI is a comprehensive SaaS platform designed to streamline project management, team collaboration, and business automation.",
    image: case2,
    slug: "threatsenseai",
    icon: FiActivity,
    logoImage: null, // Add your logo import here
  },
  {
    id: "TheSase",
    title: "TheSase - Transforming Project Management",
    category: "UI/UX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: sase,
    slug: "thesase",
    icon: FiBriefcase,
    logoImage: null, // Add your logo import here
  },
  {
    id: "piedpippers",
    title: "The Pied Piper: A Children's Club",
    category: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: case4,
    slug: "pied-piper",
    icon: FiStar,
    logoImage: null, // Add your logo import here
  },
  {
    id: "eryntis-tech-forward-identity-with-a-minimal-touch",
    title: "Erynits - Tech-Forward Identity",
    category: "Branding",
    description: "A clean, minimalist brand that communicates innovation, reliability, and precision without unnecessary complexity.",
    image: erynitsBanner,
    slug: "eryntis-tech-forward-identity-with-a-minimal-touch",
    icon: FiHeart,
    logoImage: null,
  },
  {
    id: "mudra-yoga-crafting-a-yoga-studio-identity",
    title: "Mudra - Modern Yoga Studio Identity",
    category: "Branding",
    description: "A brand identity that honors the deep traditions of yoga while presenting a clean, modern aesthetic.",
    image: mudraBanner,
    slug: "mudra-yoga-crafting-a-yoga-studio-identity",
    icon: FiActivity,
    logoImage: null,
  },
  {
    id: "prugens-consulting-crafting-distinctive-brand-stories",
    title: "Prugens - Distinctive Brand Stories",
    category: "Branding",
    description: "A bold new voice in consulting, designed to stand out in a sea of corporate sameness.",
    image: prugensBanner,
    slug: "prugens-consulting-crafting-distinctive-brand-stories",
    icon: FiBriefcase,
    logoImage: null,
  },



  
];
