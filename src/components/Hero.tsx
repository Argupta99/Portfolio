import { Button } from "../components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm sm:text-base mb-4 tracking-wider uppercase">
          Welcome to my portfolio
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="gradient-text">
            Arpita Dasgupta
          </span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
          Fontend Developer
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Web developer with MCA background and hands-on experience in React, TypeScript, Tailwind, ShadCN, Node.js, and MongoDB. Passionate about creating performant and user-friendly applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="hero-button text-white font-medium px-8 py-3 rounded-full"
            asChild
          >
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-border/50 hover:border-primary/50 px-8 py-3 rounded-full"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;