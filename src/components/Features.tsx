import { Bell, Brain, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Never miss a trade setup.",
  },
  {
    icon: Brain,
    title: "AI Explanations",
    description: "Understand patterns, not just see them.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Entry, exit, and stop-loss guidance.",
  },
  {
    icon: Clock,
    title: "24/7 Protection",
    description: "TX never sleeps, so you can.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What TX <span className="text-primary">Does for You</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-card border border-border rounded-xl p-6 text-center hover:shadow-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center group-hover:shadow-accent transition-all duration-300">
                <feature.icon className="w-7 h-7 text-card" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;