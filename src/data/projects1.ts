import ElevateU from "../assets/images/ElevateU.png";
import Saas from "../assets/images/Saas.png";
import CaelumX from "../assets/images/CaelumX.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
    aspectRatio: string;
  };
  github_link: string;
  demo_link: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "elevateu",
    title: "ElevateU",
    description:
      "ElevateU is a comprehensive platform for online courses and learning with authentication, payments, and instructor dashboard.",
    thumbnail: {
      src: ElevateU,
      alt: "ElevateU project",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Abhijeetkv/ElevateU",
    demo_link: "https://elevate-u-backend.vercel.app/",
    technologies: [
      "MERN",
      "JavaScript",
      "TailwindCSS",
      "Vite",
      "Clerk",
      "Stripe",
    ],
  },

  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description:
      "Responsive SaaS landing page built with TailwindCSS and Framer Motion animations.",
    thumbnail: {
      src: Saas,
      alt: "SaaS Landing Page",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Abhijeetkv/SaaS-Landing-Page",
    demo_link: "https://saa-s-landing-page-alpha.vercel.app/",
    technologies: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Framer Motion",
    ],
  },

  {
    id: "caelumx",
    title: "CaelumX",
    description:
      "Blockchain-based blue carbon registry and MRV system built for SIH-25 with Clerk authentication.",
    thumbnail: {
      src: CaelumX,
      alt: "CaelumX project",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Abhijeetkv/CaelumX",
    demo_link: "https://github.com/Abhijeetkv/CaelumX",
    technologies: [
      "React Native",
      "JavaScript",
      "Clerk",
    ],
  },
];