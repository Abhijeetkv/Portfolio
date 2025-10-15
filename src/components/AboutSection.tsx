import React, { useRef, Fragment } from "react";
import { motion } from "framer-motion";
import AgeCounter from "./ui/AgeCounter";

// ✅ Import all assets
import Globe from "../assets/images/globe.png";
import Abhi1 from "../assets/images/abhi1.jpg"
import TypeScriptIcon from "../assets/images/typescript.png";
import TailwindIcon from "../assets/images/tailwind.png";

// ✅ Import icons
import Clerk from "../assets/icons/clerk.avif";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import HTMLIcon from "../assets/icons/html.svg";
import CSSIcon from "../assets/icons/css.svg";
import ReactIcon from "../assets/icons/react.svg";
import GithubIcon from "../assets/icons/github.svg";
import GitIcon from "../assets/icons/git.svg";
import JavaIcon from "../assets/icons/java.svg";
import MongoDBIcon from "../assets/icons/mongodb.svg";
import NodeIcon from "../assets/icons/node.svg";
import Express from "../assets/icons/express.svg";
import DockerIcon from "../assets/icons/docker.svg";
import VsCodeIcon from "../assets/icons/vsCode.svg";
import PostmanIcon from "../assets/icons/postman.svg";
import VercelIcon from "../assets/icons/vercel.svg";
import StripeIcon from "../assets/icons/stripe.svg";

const toolboxItems1 = [
  { title: "Java", icon: JavaIcon },
  { title: "JavaScript", icon: JavaScriptIcon },
  { title: "TypeScript", icon: TypeScriptIcon },
  { title: "HTML5", icon: HTMLIcon },
  { title: "CSS3", icon: CSSIcon },
  { title: "TailwindCss", icon: TailwindIcon },
  { title: "React", icon: ReactIcon },
  { title: "ReactNative", icon: ReactIcon },
];

const toolboxItems2 = [
  { title: "GitHub", icon: GithubIcon },
  { title: "Git", icon: GitIcon },
  { title: "Docker", icon: DockerIcon },
  { title: "Clerk", icon: Clerk },
  { title: "MongoDB", icon: MongoDBIcon },
  { title: "Express", icon: Express },
  { title: "Node", icon: NodeIcon },
  { title: "VsCode", icon: VsCodeIcon },
  { title: "Postman", icon: PostmanIcon },
  { title: "Vercel", icon: VercelIcon },
  { title: "Stripe", icon: StripeIcon },

];

const hobbies = [
  { title: "Badminton 🏸", emoji: "🏸", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "30%" },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋️‍♂️", left: "5%", top: "75%" },
  { title: "Athletics", emoji: "🏃‍♂️", left: "30%", top: "60%" },
  { title: "Traveling", emoji: "🌄", left: "40%", top: "40%" },
  { title: "Reading", emoji: "📚", left: "60%", top: "75%" },
];

const AboutSection: React.FC = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28 bg-theme-bg text-theme-fg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <p className="uppercase text-xl font-semibold tracking-widest bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Who am I?</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">About Me ? Duh!!!</h2>
          <p className="text-theme-muted-fg max-w-2xl mx-auto mt-4">
            I’m a Full Stack Developer driven by a passion for designing robust architectures and functional, data-driven solutions that deliver real-world impact.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-20 flex flex-col gap-8">
          {/* Education + Toolbox */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 items-stretch">
            {/* Education */}
            <div className="md:col-span-2 lg:col-span-1 bg-theme-card text-theme-card-fg rounded-2xl p-6 shadow-lg border border-theme-border flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-sm text-theme-muted-fg mb-4">
                My current education and certifications.
              </p>
              <ul className="list-disc space-y-3 text-sm pl-5 flex-grow overflow-y-auto lg:mt-5">
                <li className="">
                  <strong>
                    B.Tech in Computer Science and Engineering
                  </strong>{" "}
                  -{" "}
                  Parul University
                  <br />
                  <span className="text-theme-muted-fg">2023 - 2027</span>
                </li>
                
              </ul>
            </div>

            {/* Tech Toolbox */}
            <div className="md:col-span-3 lg:col-span-2 bg-theme-card text-theme-card-fg rounded-2xl p-6 shadow-lg border border-theme-border flex flex-col h-full overflow-hidden">
              <h3 className="text-xl font-semibold mb-2">Tech Toolbox</h3>
              <p className="text-sm text-theme-muted-fg mb-6">
                Here are some of the technologies I have worked with.
              </p>

              {/* ✅ Scrolling container */}
              <div className="overflow-hidden flex-grow relative">
                {/* Row 1 */}
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear",
                  }}
                  className="flex gap-4 sm:gap-6 w-max"
                >
                  {[...Array(2)].map((_, i) => (
                    <Fragment key={i}>
                      {toolboxItems1.map((tool) => (
                        <div
                          key={tool.title}
                          className="flex-shrink-0 inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:scale-105 transition-transform"
                          style={{ maxWidth: "150px" }}
                        >
                          <img
                            src={tool.icon}
                            alt={tool.title}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain drop-shadow-md"
                            style={{ filter: "none" }} // ✅ keeps SVG’s native color
                          />
                          <span className="font-medium text-xs sm:text-sm truncate">
                            {tool.title}
                          </span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </motion.div>

                {/* Row 2 */}
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  }}
                  className="flex gap-4 sm:gap-6 mt-6 w-max"
                >
                  {[...Array(2)].map((_, i) => (
                    <Fragment key={i}>
                      {toolboxItems2.map((tool) => (
                        <div
                          key={tool.title}
                          className="flex-shrink-0 inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:scale-105 transition-transform"
                          style={{ maxWidth: "150px" }}
                        >
                          <img
                            src={tool.icon}
                            alt={tool.title}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain drop-shadow-md"
                            style={{ filter: "none" }} // ✅ keeps SVG’s native color
                          />
                          <span className="font-medium text-xs sm:text-sm truncate">
                            {tool.title}
                          </span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Beyond the Code + Map */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 items-stretch">
            {/* Beyond the Code */}
            <div className="col-span-3 lg:col-span-2 bg-theme-card text-theme-card-fg rounded-2xl p-6 shadow-lg border border-theme-border relative flex flex-col h-[300px] overflow-hidden">
              <h3 className="text-xl font-semibold mb-2">Beyond The Code</h3>
              <p className="text-sm text-theme-muted-fg mb-4">
                Explore my interests and hobbies.
              </p>

              <div
                className="relative w-full flex-grow min-h-[150px] sm:min-h-[150px] md:min-h-[150px] overflow-hidden"
                ref={constraintsRef}
              >
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.15}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full text-gray-900 text-xs sm:text-sm font-medium shadow-md cursor-grab active:cursor-grabbing select-none"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    {hobby.title} <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map */}

            {/* Rotating Globe Section */}
            <div className="relative col-span-3 md:col-span-2 lg:col-span-1 rounded-2xl overflow-hidden shadow-lg border border-theme-border flex items-center justify-center h-[300px] bg-theme-card">
              {/* 🌍 Rotating Globe */}
              <motion.img
                src={Globe}
                alt="Globe"
                className="absolute w-full h-full object-cover object-center opacity-80"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 30, // adjust speed (smaller = faster)
                  ease: "linear",
                }}
              />

              {/* 😄 Center Emoji (static, no blink) */}
              <div className="absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 flex items-center justify-center shadow-lg">
                <img
                  src={Abhi1}
                  alt="Memoji"
                  className="size-16 rounded-full object-cover"
                />
              </div>
              <div className="z-20 mt-14">
                <AgeCounter birthDate="2005-12-16"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
