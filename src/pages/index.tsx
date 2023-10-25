import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollTop from "@/components/layout/ScrollTop";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="mx-auto max-w-5xl 2xl:w-4/5 w-11/12">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <ScrollTop />
      </main>
    </Layout>
  );
}
