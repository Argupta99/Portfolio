import profileImg from "../images/portfolioimg.jpeg";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and current skills mostly in terms 
            of programming and technology
          </p>
        </div>
        
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 interactive-hover">
              <div className="relative w-full h-full glow-on-hover">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
                <img
                  src={profileImg}
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-border/50 transition-all duration-300 hover:border-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-8">
            <div className="interactive-hover">
              <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a <strong className="text-foreground">Frontend Developer</strong> with a passion for creating 
                  elegant solutions to complex problems. I specialize in building scalable web applications 
                  and solving problems through clean and efficient code.
                </p>
                <p>
                  With hands-on experience in modern web technologies such as React, TypeScript, TailwindCSS, and Node.js, I focus on delivering high-quality, maintainable solutions that provide excellent user experiences.
                </p>
                <p>
                 I’m constantly learning and staying updated with the latest trends, tools, and best practices in frontend development. Currently, I’m enhancing my skills by exploring new concepts in modern web technologies to grow further as a developer.
                </p>
                <p>
                  I'm <strong className="text-foreground">open to Job opportunities</strong> where I can contribute, 
                  learn and grow. If you have a role that matches my skills and interests,
                   <strong className="text-foreground">I’d be happy to connect.</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
