import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Never Miss a{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Trade
                </span>{" "}
                Again.
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                TX is your AI best friend who never sleeps - scanning charts, spotting candlestick patterns before human eyes can, and protecting you from costly mistakes so you never miss a trade again.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Beta
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('founder-story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Live alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>24/7 monitoring</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-2xl p-6 shadow-card border border-border">
              <img 
                src={heroImage} 
                alt="TX Dashboard showing pattern shift alert" 
                className="w-full h-auto rounded-xl"
              />
              
              {/* Alert Overlay */}
              <div className="absolute top-10 right-10 bg-card border border-primary rounded-lg p-4 shadow-neon">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-semibold text-primary">Pattern shift detected</p>
                    <p className="text-xs text-muted-foreground">Exit now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
