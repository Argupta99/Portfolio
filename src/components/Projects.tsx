import { Button } from "../components/ui/button";
import { ExternalLink, GithubIcon } from "lucide-react";
import Cabsy from "../images/Cabsy.png";
import StudySkills from "../images/Study-Skills.png";
import Taaza from "../images/Taaza.png";

import webllm from "../images/web llm ai.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cabsy | MERN",
      description: "Cabsy is a cab booking platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to book cabs, manage rides, and ensures secure access using JWT authentication.",
      image: Cabsy,
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/Argupta99/Cabsy",
      liveUrl: "https://cabsy-cab.netlify.app/",
      featured: true
    },
    {
      id: 2,
      title: "Taaza",
      description: "Taaza is an online fruit and grocery booking application built with JavaScript, HTML, CSS, and Bootstrap, inspired by e-commerce platforms like BigBasket. It allows users to browse, select, and order fresh products easily.",
      image: Taaza,
      technologies: ["JavaScript", "Bootstrap", "Html", "Css"],
      githubUrl: "https://github.com/Argupta99/Taaza",
      liveUrl: "https://mellow-melba-2a3cab.netlify.app/",
      featured: true
    },
    {
      id: 3,
      title: "StudySkills",
      description: "Study Skills is a learning platform for students built with HTML, CSS, and JavaScript. It provides resources, interactive features, and tools to support effective studying and skill development.",
      image: StudySkills,
      technologies: ["JavaScript", "Html", "Css"],
      githubUrl: "https://github.com/Argupta99/StudySkills",
      liveUrl: "https://study-skills.netlify.app/",
      featured: false
    },
   {
      id: 3,
      title: "WebLLM AI",
      description: "Web LLM AI is a browser-based chatbot built with JavaScript, HTML, CSS, and SCSS that enables users to chat with an AI model entirely on a local setup, providing an offline conversational experience.",
      image: webllm,
      technologies: ["JavaScript", "Html", "Css", "Scss"],
      githubUrl: "https://github.com/Argupta99/web-llm-ai",
      featured: false
    },

    

  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card interactive-hover rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border/50 hover:border-primary/50"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="flex-1 hero-button text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;