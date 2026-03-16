import React from "react";
import { Link } from "react-router-dom";
import ProjectsCard from "./ui/ProjectsCard";
import { projects } from "../data/projects";
import SectionHeader from "./ui/SectionHeader";

// type Project = {
//   title: string;
//   description: string;
//   image?: string;
//   tech?: string[]; // ✅ fixed
//   github?: string;
//   demo?: string;
// };

const Projects: React.FC = () => {
  return (
    <section className="px-4 md:px-10 lg:px-50">

      <SectionHeader
        title="Featured Projects"
        description="Here are some of the projects I have worked on. Each project has helped me grow as a developer and learn new skills."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-2 rounded-lg
          border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium
          text-white backdrop-blur transition-all duration-300
          hover:scale-105 hover:border-white/20 hover:bg-white/10"
        >
          Show all projects

          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

    </section>
  );
};

export default Projects;