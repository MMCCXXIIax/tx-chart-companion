import { AlertTriangle, Clock, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Fear & Hesitation",
    description: "Emotions hijack decisions.",
  },
  {
    icon: Clock,
    title: "Missed Opportunities",
    description: "Markets move while you sleep.",
  },
  {
    icon: BarChart3,
    title: "Overwhelming Tools",
    description: "Too much data, not enough clarity.",
  },
];

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Traders <span className="text-primary">Lose</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group bg-card border border-border rounded-xl p-8 text-center hover:shadow-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                <problem.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;