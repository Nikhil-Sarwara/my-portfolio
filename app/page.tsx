import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoProjects from "@/components/BentoProjects";
import TechStack from "@/components/TechStack";
import AcademicArchive from "@/components/AcademicArchive";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoProjects />
        <TechStack />
        <ExperienceTimeline />
        <AcademicArchive />
      </main>
      <Footer />
    </>
  );
}
