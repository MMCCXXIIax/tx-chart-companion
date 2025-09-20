import visionImage from "@/assets/vision-split.jpg";

const Vision = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Not Just a Tool.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                A Movement.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Traders don't just want data. They want confidence. They want control. 
              TX is the psychological safety net every trader has been waiting for.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">Build confidence through understanding</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Take control of your trading psychology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">Transform fear into strategic action</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-2xl p-6 shadow-card border border-border overflow-hidden">
              <img 
                src={visionImage} 
                alt="Split screen showing stressed trader vs calm trader using TX" 
                className="w-full h-auto rounded-xl"
              />
              
              {/* Overlay Labels */}
              <div className="absolute top-8 left-8 bg-destructive/20 border border-destructive rounded-lg px-3 py-2">
                <span className="text-destructive text-sm font-medium">Without TX</span>
              </div>
              <div className="absolute top-8 right-8 bg-primary/20 border border-primary rounded-lg px-3 py-2">
                <span className="text-primary text-sm font-medium">With TX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;