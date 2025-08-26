const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🟧" },
    { name: "CSS", icon: "🔵" },
    { name: "JavaScript", icon: "🟡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⚫" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Shadcn", icon: "🎨" },
    { name: "Bootstrap", icon: "🟣" },
    { name: "Socket.io", icon: "🔌" },
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐱" },
    { name: "Vite", icon: "⚡" },
    { name: "Parcel", icon: "📦" },
    { name: "Figma", icon: "🎯" },
    { name: "Framer", icon: "🖼️" },
    { name: "WordPress", icon: "🌐" },
    { name: "Wix", icon: "🔷" },
  ];

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