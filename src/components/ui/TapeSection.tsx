import React, { Fragment } from "react";
import StarIcon from "../../assets/icons/star.svg"; // ✅ Adjust path if needed

const words: string[] = [
  "Accuracy",
  "Precision",
  "Recall",
  "F1-Score",
  "Generalization",
  "Bias",
  "Variance",
  "Overfitting",
  "Underfitting",
  "Explainability",
  "Interpretability",
  "Robustness",
];

const TapeSection: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      {/* Background strip */}
      <div className="bg-gradient-to-r from-indigo-400 to-sky-400 -rotate-3 -mx-1">
        {/* Gradient mask for fading edges */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Moving text row */}
          <div
            className="flex flex-none gap-4 pr-4 py-3 
                       animate-[move-left_40s_linear_infinite]"
          >
            {[...Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div
                    key={word}
                    className="inline-flex gap-4 items-center"
                  >
                    <span className="text-gray-900 uppercase font-extrabold text-sm tracking-wider">
                      {word}
                    </span>
                    <img
                      src={StarIcon}
                      alt="star"
                      className="w-5 h-5 -rotate-12 opacity-90"
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Inline keyframes via Tailwind arbitrary variant */}
      <style>
        {`
          @keyframes move-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TapeSection;
