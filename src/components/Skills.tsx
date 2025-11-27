import { Code2, Database, Globe, Music, Cpu, Palette } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    color: "primary"
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    color: "secondary"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["REST APIs", "GraphQL", "WebSockets", "PWA", "SEO"],
    color: "accent"
  },
  {
    icon: Music,
    title: "Music Production",
    skills: ["FL Studio", "Ableton Live", "Mixing", "Mastering", "Sound Design"],
    color: "primary"
  },
  {
    icon: Cpu,
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
    color: "secondary"
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Animation", "Branding"],
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Technical</span> <span className="text-foreground">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg">Tools and technologies I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 mr-4 group-hover:shadow-glow-green transition-all`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-muted text-foreground rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
