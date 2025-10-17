import React from "react";
import { Link } from "react-router-dom";

// ✅ Import images
import ElevateU from "../assets/images/ElevateU.png";
import Saas from "../assets/images/Saas.png";
import CaelumX from "../assets/images/CaelumX.png";

// ✅ Import SVG icons
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import GithubIcon from "../assets/icons/github.svg";
import ArrowUpIcon from "../assets/icons/arrow-up-right.svg";

// ✅ Import custom components
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

interface ProjectResult {
  title: string;
}
interface ProjectLink {
  url: string;
  target?: "_blank" | "_self";
}
interface Project {
  company: string;
  year: string;
  title: string;
  results: ProjectResult[];
  link: ProjectLink;
  liveLink: string;
  image: string;
  featured: boolean;
}

const portfolioProjects: Project[] = [
  {
    company: "MERN Stack, JavaScript, TailwindCSS, Vite, Clerk, Stripe",
    year: "2025",
    title: "ElevateU",
    results: [
      {
        title:
          "ElevateU is a comprehensive platform for online courses and learning",
      },
      { title: "Implemented Clerk for Authentication and Stripe for payments" },
      {
        title: "Developed instructor dashboards for managing courses and students",
      },
    ],
    link: { url: "https://github.com/Abhijeetkv/ElevateU", target: "_blank" },
    liveLink: "https://elevate-u-backend.vercel.app/",
    image: ElevateU,
    featured: true,
  },
  {
    company:
      "React, JavaScript, TailwindCSS, Framer-motion",
    year: "2024",
    title: "SaaS Landing Page",
    results: [
      { title: "It is a landing page for a SaaS product" },
      {
        title:
          "Designed responsive UI with TailwindCSS and added animations with Framer-motion",
      },
      { title: "" },
    ],
    link: {
      url: "https://github.com/Abhijeetkv/SaaS-Landing-Page",
      target: "_blank",
    },
    liveLink: "https://saa-s-landing-page-alpha.vercel.app/",
    image: Saas,
    featured: true,
  },
  {
    company: "React-Native, JavaScript, Clerk",
    year: "2025",
    title: "CaelumX",
    results: [
      { title: "CaelumX is a platform for blockchain based blue carbon registry and mrv System" },
      { title: "Making it for SIH-25" },
      { title: "Implemented user authentication with Clerk" },
    ],
    link: { url: "https://github.com/Abhijeetkv/CaelumX", target: "_blank" },
    liveLink: "https://github.com/Abhijeetkv/CaelumX",
    image: CaelumX,
    featured: true,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="pb-16 lg:py-24 max-w-5xl mx-auto px-4">
      <SectionHeader
        eyebrow="What Have I Made?"
        title="Featured Projects"
        description="Here are some of the projects I have worked on. Each project has helped me grow as a developer and learn new skills."
      />

      {/* Projects List */}
      <div className=" flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card
            key={project.title}
             className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              {/* Project Info */}
              <div className="lg:pb-16 text-left">
                <div className="text-left">
                  <div className="bg-gradient-to-r from-indigo-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl text-left">
                    {project.title}
                  </h3>
                </div>

                <hr className="border-t-2 border-white/5 mt-4" />

                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-sm md:text-base text-white/50 items-center transition-all duration-300 ease-in-out hover:translate-x-1"
                    >
                      <img
                        src={CheckCircleIcon}
                        alt="check"
                        className="size-5 md:size-6  flex-shrink-0"
                      />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                  <a
                    href={project.link.url}
                    target={project.link.target}
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full px-4 sm:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      <span>Github</span>
                      <img src={GithubIcon} alt="GitHub" className="size-5" />
                    </button>
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <button className="bg-indigo-500 text-white h-12 w-full px-4 sm:px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span>Website</span>
                      <img src={ArrowUpIcon} alt="arrow" className="size-5" />
                    </button>
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative  mt-8 -mb-4 lg:mt-0 ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="flex justify-center mt-20">
        
          <Link to="/projects" className="font-semibold text-lg inline-flex items-center gap-2 border border-white/15 px-8 h-14 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">More Projects</Link>
          <img src={ArrowUpIcon} alt="arrow" className="size-5" />
        
      </div>
    </section>
  );
};

export default ProjectsSection;
