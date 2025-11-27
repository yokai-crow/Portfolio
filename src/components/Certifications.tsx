import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    year: "2024",
    category: "Security",
    verifyLink: "https://learn.eccouncil.org/certificate/76927f91-a2ca-4168-a5cd-ebc5de277792"
  },
  {
    title: "SQL Injection Attacks",
    issuer: "EC-Council",
    year: "2024",
    category: "Security",
    verifyLink: "https://learn.eccouncil.org/certificate/86c48aca-9ca9-42c0-a6b0-6cc23f17d3c3"
  },
  {
    title: "Cloud Architecture",
    issuer: "AWS",
    year: "2024",
    category: "Infrastructure",
    verifyLink: "https://www.credly.com/badges/2476aa66-9236-4e4f-b426-30449eb9b75a/public_url"
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    year: "2024",
    category: "Security",
    verifyLink: "https://www.credly.com/badges/d04411bc-9174-428f-bb26-8531b16bf6c1"
  },
  {
    title: "Linux Server Management and Security",
    issuer: "University of Colorado",
    year: "2019",
    category: "Linux Security",
    verifyLink: "https://coursera.org/share/1bab4a6efc405e2133a3dfafe365c806"
  },
  {
    title: "Notable Badges",
    issuer: "AWS/Cisco",
    year: "2024",
    category: "Security/Infrastructure",
    verifyLink: "https://www.credly.com/users/arun-saru.6cb890bb"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_0%,transparent_100%)]" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Certifications</span> <span className="text-foreground">& Credentials</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional achievements and recognized qualifications</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-card border border-border rounded-lg hover:border-primary transition-all hover:shadow-glow-green hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4">
                <Award className="w-6 h-6 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full mb-4">
                {cert.category}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-xs font-mono">{cert.year}</p>

              
              {cert.verifyLink && (
                <button
                  onClick={() => window.open(cert.verifyLink, "_blank")}
                  className="mt-4 flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
