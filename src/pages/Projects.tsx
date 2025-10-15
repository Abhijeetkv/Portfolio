import StarBackground from "../components/StarBackground"
import HamsterWheel from "../components/ui/HamsterWheel"
import { useEffect } from "react"

const Projects = () => {
    useEffect(() => {
        document.documentElement.classList.add("dark");
      }, []);
  return (
    <>
    <StarBackground />
    <div className="flex items-center justify-center min-h-screen">
        <HamsterWheel />
    </div>
  </>
  )
}

export default Projects