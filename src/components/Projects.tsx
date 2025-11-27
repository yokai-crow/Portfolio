import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hope Store E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["ASP.Net", "C#", "Javascript", "CSS"],
    color: "primary",
    codeLink: "https://github.com/yokai-crow/NPI000088_MWMAssignment_HopeStore"
  },
  {
    title: "Pantheon - Mobile WBAN IDS IPS System",
    description: "Detect and Secure mobile devices from threats and attacks.",
    tech: ["Java", "SQLite", "Malware Signature", "Charts"],
    color: "secondary",
    codeLink: "https://github.com/yokai-crow/pantheon"
  },
  {
    title: "Retro Snake Game",
    description: "Play retro snake and have nostaligia",
    tech: ["Javascript", "Html"],
    color: "accent",
    codeLink: "https://github.com/yokai-crow/turbo-octo-meme-snake-game"
  },
  {
    title: "Other Projects OTW",
    description: "Find APK for mobile game here.",
    tech: ["Everything"],
    color: "primary",
    codeLink: "https://www.arunsaru.com.np/oldindex.html"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Featured</span> <span className="text-foreground">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Showcase of my development work</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-card border border-border rounded-lg hover:border-primary transition-all hover:shadow-glow-green overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    onClick={() => window.open(project.codeLink, "_blank")} // Opens the code link in a new tab
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  
                  {/* <button className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button> */}
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
