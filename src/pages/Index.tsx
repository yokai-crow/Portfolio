import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Projects />
      <Music />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
