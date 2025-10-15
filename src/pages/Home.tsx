import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import TapeSection from "../components/ui/TapeSection";
import { useEffect } from "react";
import FooterSection from "../components/FooterSection";
import ContactMe from "../components/ContactMe";
import { Toaster } from "react-hot-toast";

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
          {/*  Home Section */}
          <section id="home">
            <ProfileSection />
          </section>

          {/*  Projects Section */}
          <section id="projects">
            <ProjectSection />
          </section>

          {/* Tape Section (optional visual divider) */}
          <TapeSection />

          {/* About Section */}
          <section id="about">
            <AboutSection />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactMe />
          </section>

          {/* Toast Notifications */}
          <Toaster position="top-right" reverseOrder={false} />

          {/* Footer Section */}
          <FooterSection />
        </main>
      </div>
    </>
  );
};

export default Home;
