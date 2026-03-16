import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function HeyyswapCard({ children }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    setPos({ x: rotateY, y: rotateX });
  }

  function reset() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{
        rotateX: pos.y,
        rotateY: pos.x,
        scale: 1,
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
      relative
      rounded-2xl
      border border-white/10
      bg-[#0b0b0c]
      overflow-hidden
      perspective-[1000px]
      "
    >
      {/* spotlight */}

      <div
        className="
        pointer-events-none
        absolute inset-0
        opacity-0
        group-hover:opacity-100
        transition
        "
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 40%)",
        }}
      />

      {children}
    </motion.div>
  );
}