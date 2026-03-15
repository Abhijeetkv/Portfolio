import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MoreHorizontal,
  FileText,
  MessageCircle,
} from "lucide-react";
import abhij from "../assets/images/abhij.jpg";
import cover from "../assets/images/cover.png";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Abhijeetkv" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Abhijeetakv" },
  {
    icon: Linkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/abhijeet-verma-a3103425a/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=abhijeetkv2@gmail.com",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 hero-pattern opacity-30" />

      <div className="absolute right-20 top-32 ">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <path
            d="M100 0 L100 80 L160 140 L160 200 L100 260 L100 340 L60 380"
            stroke="#333"
            strokeWidth="1"
          />
          <path d="M100 80 L40 140 L40 200" stroke="#333" strokeWidth="1" />
          <circle cx="100" cy="80" r="4" fill="#444" />
          <circle cx="160" cy="140" r="4" fill="#444" />
          <circle cx="40" cy="140" r="4" fill="#444" />
          <circle cx="160" cy="200" r="4" fill="#444" />
          <circle cx="40" cy="200" r="4" fill="#444" />
          <circle cx="100" cy="260" r="4" fill="#444" />
          <circle cx="100" cy="340" r="4" fill="#444" />
          <rect
            x="96"
            y="76"
            width="8"
            height="8"
            rx="0"
            transform="rotate(45, 100, 80)"
            fill="#555"
          />
          <rect
            x="156"
            y="136"
            width="8"
            height="8"
            rx="0"
            transform="rotate(45, 160, 140)"
            fill="#555"
          />
          <rect
            x="96"
            y="256"
            width="8"
            height="8"
            rx="0"
            transform="rotate(45, 100, 260)"
            fill="#555"
          />
          <rect
            x="96"
            y="336"
            width="8"
            height="8"
            rx="0"
            transform="rotate(45, 100, 340)"
            fill="#555"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-48 rounded-xl overflow-hidden mb-6 border border-white/5 inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(50,50,50,0.3) 10px,
                rgba(50,50,50,0.3) 11px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                rgba(50,50,50,0.3) 10px,
                rgba(50,50,50,0.3) 11px
              )
            `,
            backgroundColor: "#161616",
          }}
        >
          <img src={cover} alt="cover" className="h-full" />
        </motion.div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="flex-1">
            {/* Avatar + Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-6 -mt-16"
            >
              <div className="w-22 h-22 rounded-xl bg-white flex items-center justify-center  overflow-hidden">
                <img src={abhij} alt="Abhijeet Kumar" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 mb-5"
            >
              <h1 className="text-3xl font-bold text-white">Abhijeet Kumar</h1>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-400 leading-relaxed mb-6 max-w-xl text-start"
            >
              Building seamless digital experiences from front to back — I’m a
              <strong className="text-white font-semibold">
                {" "}
                Full-Stack Web & App Developer{" "}
              </strong>{" "}
              who turns ideas into functional, elegant apps.
            </motion.p>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <p className="text-sm text-neutral-500 text-start font-mono mb-3">
                Here are my socials
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800/60 border border-white/5 text-neutral-300 text-sm hover:bg-neutral-700/60 hover:text-white transition-all duration-200"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3 mb-12"
            >
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-800/80 border border-white/10 text-white text-sm font-medium hover:bg-neutral-700/80 transition-all duration-200"
              >
                Resume <FileText className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-800/80 border border-white/10 text-white text-sm font-medium hover:bg-neutral-700/80 transition-all duration-200"
              >
                Connect <MessageCircle className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
