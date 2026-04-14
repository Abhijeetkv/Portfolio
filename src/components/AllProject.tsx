import React from "react";
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
        title="All Projects"
        description="Here are the projects I have worked on. Each project has helped me grow as a developer and learn new skills."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
     

    </section>
  );
};

export default Projects;