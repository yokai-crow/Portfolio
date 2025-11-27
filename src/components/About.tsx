const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">About</span> <span className="text-foreground">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Developer Card */}
          <div className="group relative p-6 bg-card border border-border rounded-lg hover:border-neon-green transition-all hover:shadow-glow-green">
            <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
            <div className="relative">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Developer</h3>
              <p className="text-muted-foreground">
                Full-stack developer with expertise in modern web technologies. 
                Passionate about creating efficient, scalable applications and solving complex problems.
              </p>
            </div>
          </div>
          
          {/* Rapper Card */}
          <div className="group relative p-6 bg-card border border-border rounded-lg hover:border-electric-purple transition-all hover:shadow-glow-purple">
            <div className="absolute inset-0 bg-gradient-purple opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
            <div className="relative">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">Rapper</h3>
              <p className="text-muted-foreground">
                Lyricist and performer bringing unique flows and storytelling. 
                Combining technical skill with creative expression through hip-hop.
              </p>
            </div>
          </div>
          
          {/* Producer Card */}
          <div className="group relative p-6 bg-card border border-border rounded-lg hover:border-cyber-blue transition-all hover:shadow-glow-blue">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
            <div className="relative">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-3 text-accent">Beat Producer</h3>
              <p className="text-muted-foreground">
                Crafting hard-hitting beats and atmospheric soundscapes. 
                Blending genres to create unique sonic experiences.
              </p>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-12 p-8 bg-card border border-border rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <h3 className="text-2xl font-bold mb-4 relative">
            <span className="text-primary">Education</span>
          </h3>
          <div className="relative">
            <p className="text-xl mb-2 font-semibold">BSc (Hons) in Information Technology | 2024</p>
            <p className="text-lg text-muted-foreground">APU APIIT - Asia Pacific University</p>
            <p className="text-sm text-muted-foreground mt-2">Graduated with comprehensive knowledge in software development, systems design, and IT management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
