import React, { useEffect, useState } from "react";

interface AgeCounterProps {
  birthDate: string; // format: "YYYY-MM-DD"
}

const AgeCounter: React.FC<AgeCounterProps> = ({ birthDate }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birth = new Date(birthDate).getTime();

    const updateAge = () => {
      const now = Date.now();
      const diff = now - birth;
      const years = diff / (1000 * 60 * 60 * 24 * 365.2425); // average solar year
      setAge(years);
    };

    updateAge(); // initial call
    const interval = setInterval(updateAge, 50); // update every 50ms
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div className=" text-lg  bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
      <p>been here since</p>
      <p className="font-mono text-2xl">{age.toFixed(9)} years</p>
    </div>
  );
};

export default AgeCounter;
