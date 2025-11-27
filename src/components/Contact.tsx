import { Mail, Github, Instagram, Cat, MessageSquare } from "lucide-react";
import contact from "@/assets/contact.png";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,255,65,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Get</span> <span className="text-foreground">In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's collaborate on your next project</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8"> 
           
            <img 
              src= {contact} 
              alt="Contact Image"
              className="w-full h-auto"
            />
          
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email
              </h3>
              <a href="mailto:arunsaruwork@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                arunsaruwork@gmail.com
              </a>
            </div>
            
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://github.com/yokai-crow" target="_blank"
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm group-hover:text-primary transition-colors">github.com/yokai-crow</span>
                </a>
                
                <a 
                  href="https://instagram.com/real.arun_/" target="_blank"
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-accent/10 hover:border-accent border border-transparent transition-all group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-sm group-hover:text-accent transition-colors">instagram.com/real.arun_</span>
                </a>
                
                <a 
                  href="https://linktr.ee/arunsaru" target="_blank" 
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-secondary/10 hover:border-secondary border border-transparent transition-all group"
                >
                  <Cat className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                  <span className="text-sm group-hover:text-secondary transition-colors">@dynasty</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
