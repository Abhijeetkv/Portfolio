import React, { type ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import grainImage from "../../assets/images/grain.jpg";

interface CardProps extends ComponentPropsWithRef<"div"> {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...other }) => {
  return (
    <div
      className={twMerge(
        "relative bg-gray-900 rounded-3xl overflow-hidden z-0 transition-all duration-300 ease-in-out px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 " +
          "hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 " +
          "after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:outline-2 after:-outline-offset-2 after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      {/* Subtle background grain */}
      <div
        className="absolute inset-0 -z-10 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${grainImage})` }}
      />
      {children}
    </div>
  );
};

export default Card;
