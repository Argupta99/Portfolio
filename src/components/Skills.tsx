// skills.ts
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiFramer,
  SiWordpress,
  SiWix
} from "react-icons/si";
import { Palette } from "lucide-react"; // for Shadcn (custom icon)

// Array of skills with icons
export const skills = [
  { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="black" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="gray" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Shadcn", icon: <Palette color="#9333ea" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
  { name: "Socket.io", icon: <SiSocketdotio color="black" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub color="black" /> },
  { name: "Vite", icon: <SiVite color="#646CFF" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Framer", icon: <SiFramer color="#0055FF" /> },
  { name: "WordPress", icon: <SiWordpress color="#21759B" /> },
  { name: "Wix", icon: <SiWix color="#0C6EFC" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card interactive-hover p-6 rounded-xl text-center group cursor-pointer"
          >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay updated with the latest trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;