const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">
              <span className="text-primary">ARUN</span> <span className="text-foreground">SARU</span>
            </p>
            <p className="text-sm text-muted-foreground">Developer | Rapper | Researcher</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2026 Arun Saru. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Stage name <span className="text-primary">Nuran</span> & <span className="text-secondary">Dynasty</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
