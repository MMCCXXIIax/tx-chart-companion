import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
            You're In! 🚀
          </h1>
          
          <p className="text-2xl text-muted-foreground">
            Welcome to the TX Beta. You're officially part of the first 500 traders shaping the future of trading intelligence.
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              TX isn't just a tool. It's a movement. You've joined a community of traders who believe in trading smarter, not harder.
            </p>
            
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              👉 Next step: Join our private Discord to connect with other early adopters, share feedback, and get insider updates before anyone else.
            </p>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-12 py-8 font-bold"
              asChild
            >
              <a href="https://discord.gg/TXp4CuuAnb" target="_blank" rel="noopener noreferrer">
                🔥 Join the Community
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            We're building TX together. Your feedback will shape the future of trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
