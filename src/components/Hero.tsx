import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-6 animate-slide-in">
          <span className="text-neon-green font-mono text-sm md:text-base tracking-widest uppercase border border-neon-green/30 px-4 py-2 rounded-full shadow-glow-green">
            &lt;Developer | Rapper | Researcher /&gt;
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-neon bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,65,0.5)]">
            ARUN SARU
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          IT Graduate | BSc Hons from APU APIIT | Full-Stack Developer | Music Creator
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg overflow-hidden transition-all hover:shadow-glow-green hover:scale-105"
            onClick={() => window.open("https://github.com/yokai-crow", "_blank")}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg transition-all hover:shadow-glow-purple hover:scale-105"
            onClick={() => window.open("https://open.spotify.com/artist/3B5TwzesduFt4AGTdV02gA?si=doRDSVJOQlC63_WF4BFROQ", "_blank")}
          >
            Explore Music
          </button>
          
          <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-glow-blue hover:scale-105"
            onClick={() => window.open("mailto:arunsaruwork@gmail.com", "_blank")}
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-green/30 rounded-lg animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-electric-purple/30 rounded-lg animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-cyber-blue/30 rounded-lg animate-float" style={{ animationDelay: "0.5s" }} />
    </section>
  );
};

export default Hero;
