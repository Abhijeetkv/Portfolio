import StarBackground from "../components/StarBackground"
import Navbar from "../components/Navbar.tsx"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection.tsx"
import ProjectSection from "../components/ProjectSection.tsx"
import TapeSection from "../components/ui/TapeSection.tsx"
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <ProjectSection />
          <TapeSection />
          <AboutSection />
        </main>
        
    </div>
    </>
  )
}

export default Home