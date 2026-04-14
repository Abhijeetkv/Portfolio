import StarBackground from "../components/StarBackground"
import { useEffect } from "react"
import Projectss from "../components/AllProject"

const Projects = () => {
    useEffect(() => {
        document.documentElement.classList.add("dark");
      }, []);
  return (
    <>
    <StarBackground />
    <Projectss />
  </>
  )
}

export default Projects