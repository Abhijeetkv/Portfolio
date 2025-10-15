import React from "react";
import "../../HamsterWhell.css"; // we'll put custom animations here

const HamsterWheel: React.FC = () => {
  return (
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      className="wheel-and-hamster relative w-[12em] h-[12em] text-[14px]"
    >
      <div className="wheel absolute top-0 left-0 w-full h-full rounded-full z-[2]" />
      <div className="hamster absolute top-1/2 left-[calc(50%-3.5em)] w-[7em] h-[3.75em] origin-top animate-hamster z-[1]">
        <div className="hamster__body absolute top-[0.25em] left-[2em] w-[4.5em] h-[3em] origin-[17%_50%] [transform-style:preserve-3d] animate-hamsterBody bg-[hsl(30,90%,90%)] rounded-[50%_30%_50%_30%/15%_60%_40%_40%] shadow-[0.1em_0.75em_0_hsl(30,90%,55%)_inset,0.15em_-0.5em_0_hsl(30,90%,80%)_inset]">
          <div className="hamster__head absolute top-0 left-[-2em] w-[2.75em] h-[2.5em] origin-right animate-hamsterHead bg-[hsl(30,90%,55%)] rounded-[70%_30%_0_100%/40%_25%_25%_60%] shadow-[0_-0.25em_0_hsl(30,90%,80%)_inset,0.75em_-1.55em_0_hsl(30,90%,90%)_inset]">
            <div className="hamster__ear absolute top-[-0.25em] right-[-0.25em] w-[0.75em] h-[0.75em] rounded-full bg-[hsl(0,90%,85%)] shadow-[-0.25em_0_hsl(30,90%,55%)_inset] origin-[50%_75%] animate-hamsterEar"></div>
            <div className="hamster__eye absolute top-[0.375em] left-[1.25em] w-[0.5em] h-[0.5em] rounded-full bg-black animate-hamsterEye"></div>
            <div className="hamster__nose absolute top-[0.75em] left-0 w-[0.2em] h-[0.25em] bg-[hsl(0,90%,75%)] rounded-[35%_65%_85%_15%/70%_50%_50%_30%]"></div>
          </div>

          <div className="hamster__limb hamster__limb--fr absolute top-[2em] left-[0.5em] w-[1em] h-[1.5em] origin-top [clip-path:polygon(0_0,100%_0,70%_80%,60%_100%,0%_100%,40%_80%)] bg-[linear-gradient(hsl(30,90%,80%)_80%,hsl(0,90%,75%)_80%)] animate-hamsterFRLimb [transform:rotate(15deg)_translateZ(-1px)]" />
          <div className="hamster__limb hamster__limb--fl absolute top-[2em] left-[0.5em] w-[1em] h-[1.5em] origin-top [clip-path:polygon(0_0,100%_0,70%_80%,60%_100%,0%_100%,40%_80%)] bg-[linear-gradient(hsl(30,90%,90%)_80%,hsl(0,90%,85%)_80%)] animate-hamsterFLLimb [transform:rotate(15deg)]" />

          <div className="hamster__limb hamster__limb--br absolute top-[1em] left-[2.8em] w-[1.5em] h-[2.5em] origin-[50%_30%] [clip-path:polygon(0_0,100%_0,100%_30%,70%_90%,70%_100%,30%_100%,40%_90%,0%_30%)] rounded-t-[0.75em] bg-[linear-gradient(hsl(30,90%,80%)_90%,hsl(0,90%,75%)_90%)] animate-hamsterBRLimb [transform:rotate(-25deg)_translateZ(-1px)]" />
          <div className="hamster__limb hamster__limb--bl absolute top-[1em] left-[2.8em] w-[1.5em] h-[2.5em] origin-[50%_30%] [clip-path:polygon(0_0,100%_0,100%_30%,70%_90%,70%_100%,30%_100%,40%_90%,0%_30%)] rounded-t-[0.75em] bg-[linear-gradient(hsl(30,90%,90%)_90%,hsl(0,90%,85%)_90%)] animate-hamsterBLLimb [transform:rotate(-25deg)]" />

          <div className="hamster__tail absolute top-[1.5em] right-[-0.5em] w-[1em] h-[0.5em] bg-[hsl(0,90%,85%)] rounded-[0.25em_50%_50%_0.25em] shadow-[0_-0.2em_0_hsl(0,90%,75%)_inset] origin-[0.25em_0.25em] animate-hamsterTail [transform:rotate(30deg)_translateZ(-1px)]" />
        </div>
      </div>
      <div className="spoke absolute top-0 left-0 w-full h-full rounded-full animate-spoke"></div>
    </div>
  );
};

export default HamsterWheel;
