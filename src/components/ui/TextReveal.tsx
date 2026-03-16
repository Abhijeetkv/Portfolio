import { useEffect, useRef } from "react";

interface TextRevealProps {
  children: string;
  delay?: number;
  className?: string;
}

const TextReveal = ({
  children,
  delay = 0,
  className = "",
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = element.querySelectorAll(".word");

            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("revealed");
              }, delay + index * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const words = children.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word inline-block translate-y-4 opacity-0 transition-all duration-500 ease-out"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextReveal;