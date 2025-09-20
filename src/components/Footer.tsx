const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-hero border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TX</span>
            </div>
            <span className="text-foreground font-semibold text-xl">TX</span>
          </div>
          
          {/* Links */}
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            TX is not financial advice. It's intelligence, not brokerage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;