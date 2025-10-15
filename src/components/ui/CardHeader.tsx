import React from "react";
import { twMerge } from "tailwind-merge";
import StarIcon from "../../assets/icons/star.svg"; // ✅ adjust the path if needed

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        {/* ✅ Using <img> for SVG to work in plain React */}
        <img
          src={StarIcon}
          alt="Star Icon"
          className="w-9 h-9 text-indigo-400"
        />
        <h3 className="font-serif text-3xl lg:text-4xl text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};
