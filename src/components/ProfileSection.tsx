import React from "react";
import GrainImage from "../assets/images/grain.jpg";
import profile from "../assets/images/abhij.jpg";
import { ArrowDown } from "lucide-react";

const ProfileSection: React.FC = () => {

  return (
    <div id="hero" className="py-32 md:py-30  relative z-0 overflow-x-clip">
      {/* Background */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage})`,
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white/20">
            <img
              src={profile}
              alt="Abhinav Kumar Singh"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Availability Badge */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            {/* Glowing ping ring */}
            <div className="relative flex items-center justify-center">
              {/* Expanding ring */}
              <div className="absolute w-3 h-3 rounded-full bg-green-500/60 animate-ping-pop"></div>

              {/* Solid center dot */}
              <div className="relative w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.7)]"></div>
            </div>

            <div className="text-sm font-medium">
              Available for New Projects
            </div>
          </div>
        </div>

        {/* Name & Bio */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide font-semibold opacity-0 text-gradient animate-fade-in-delay-1">
            Abhijeet Kumar
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Building seamless digital experiences from front to back — I’m a
            Full-Stack Developer who turns ideas into functional, elegant web
            apps.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <div
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <a href="projects" className="font-semibold">Explore My Work</a>
            <ArrowDown className="pt-1" size={22}/>
          </div>

          <a
            href="https://linktr.ee/abhinavexists"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
