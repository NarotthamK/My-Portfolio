import { ExperienceSkills } from "@/components/sections";
import { Hero } from "@/components/sections/hero";
import { heroData } from "@/data/hero";
import { data } from "@/data/experience";
import { Projects } from "@/components/sections/projects";
import { projects } from "@/data/projects";
import { socialData } from "@/data/social";
import { Contact } from "@/components/sections/contact";
import { ModalProvider } from "@/context";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <ModalProvider>
      <Navbar />

      {/* Add scroll padding for navbar height */}
      <main className="pt-24 scroll-smooth">
        {/* Hero Section */}
        <section id="home" className="scroll-mt-24">
          <Hero data={heroData} />
        </section>

        {/* Experience + Expertise + Certifications combined */}
        <section id="experience" className="scroll-mt-24">
          <ExperienceSkills
            experiences={data.workExperience}
            skills={data.skills}
            certificates={data.certificates}
          />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <Projects projects={projects} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <Contact personalInfo={heroData} socialLinks={socialData} />
        </section>
      </main>
    </ModalProvider>
  );
}
