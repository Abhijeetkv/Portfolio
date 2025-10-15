import React from "react";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


// ✅ Define TypeScript type for footer link
interface FooterLink {
  title: string;
  href: string;
  icon: JSX.Element;
}

// ✅ Footer links data
const footerLinks: FooterLink[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abhijeet-verma-a3103425a/",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    href: "https://github.com/Abhijeetkv",
    icon: <FaGithub />,
  },
  {
  title: "Mail",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=abhijeetkv2@gmail.com",
  icon: <SiGmail />,
},

  {
    title: "Twitter",
    href: "https://x.com/Abhijeetakv",
    icon: <FaXTwitter />,
  },
];

// ✅ Footer component
export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background Gradient */}
      <div
        className="absolute h-[400px] w-[3000px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-500/40 md:bg-indigo-500/30
                   [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>

      {/* Footer Container */}
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-white/40 text-center md:text-left">
            &copy; 2025
            . All rights reserved.
          </div>

          {/* Social Links */}
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-transform duration-300 ease-in-out transform 
                           hover:scale-105 hover:text-indigo-400"
              >
                {/* Icon */}
                {link.icon}
                {/* Title */}
                <span className="font-medium">{link.title}</span>
                {/* Arrow */}
                <img src={ArrowUpRightIcon} alt="" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
