import React from "react";

export interface ProjectsProps {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
    aspectRatio: string;
  };
  github_link?: string;
  demo_link?: string;
  technologies: string[];
}

const ProjectsCard: React.FC<ProjectsProps> = (props) => {
  return (
    <div className="group border-white/10 bg-white/5 hover:border-white/20 relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">

      {/* Click overlay */}
      {/* <a
        href={props.demo_link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      /> */}

      {/* Thumbnail */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: props.thumbnail.aspectRatio }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent transition-colors duration-300" />

        <img
          src={props.thumbnail.src}
          alt={props.thumbnail.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="grow space-y-4 p-6 ">

        <h2 className="text-white text-start text-xl font-semibold tracking-tight">
          {props.title}
        </h2>

        <p className="text-white/70 text-start text-sm leading-relaxed">
          {props.description}
        </p>

        {/* Tech */}
        <div>
          <h3 className="text-white/50 text-start mb-2 text-xs font-semibold uppercase">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2">
            {props.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-white/10 bg-white/10 rounded-md px-2.5 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="relative z-20 mt-auto flex gap-3 p-6 pt-0">

        {props.github_link && (
          <a
            href={props.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-80"
          >
            GitHub
          </a>
        )}

        {props.demo_link && (
          <a
            href={props.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Website
          </a>
        )}

      </div>
    </div>
  );
};

export default ProjectsCard;