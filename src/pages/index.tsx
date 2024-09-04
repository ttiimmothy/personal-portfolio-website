import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollTop from "@/components/layout/ScrollTop";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout location={router.asPath}>
      <main className="md:mx-auto md:max-w-5xl 2xl:w-4/5 md:w-11/12">
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
