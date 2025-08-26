import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundAnimation from "../components/BackgroundAnimation";
import CursorEffect from "../components/CursorEffect";
import InteractiveBackground from "../components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundAnimation />
      <InteractiveBackground />
      <CursorEffect />
      
      {/* Main Content */}
      <div className="relative z-20">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;