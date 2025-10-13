import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = (): void => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []); 

  return (
    <>
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outlin-hidden"
        )}
        aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 " />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;