import { Button } from "@/components/ui/button";

const FounderStory = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Untold Story Behind <span className="text-primary">TX</span>
            </h2>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Back in 2022, I was searching for the best business model. I explored SMMA from Iman Gadzhi, 
                dropshipping from Jordan Welch, affiliate marketing. You name it. Then I stumbled into trading 
                and decided to give it a shot.
              </p>
              
              <p>
                Along the way, I discovered that true mastery of trading comes down to just two things: 
                <span className="text-primary font-semibold"> pattern knowledge and risk management</span>.
              </p>
              
              <p>
                When I practiced on demo accounts, my process was always the same: analyze the charts, 
                rush to my trading book to check if the candlestick patterns matched, then set my stop‑loss 
                at –2% and place my take‑profit higher. If you trade, you know exactly what I mean.
              </p>
              
              <p>
                At first, I thought it was just me. But then I saw even professional traders glued to screens 
                for hours, waiting for patterns, missing trades, or losing everything while they slept.
              </p>
              
              <p className="text-foreground font-medium text-xl">
                That's when I asked myself: what if a tool could do the heavy lifting?
              </p>
              
              <p>
                That's how TX was born. A tool that studies, scans, and watches the market for you. 
                It makes trading smarter, not harder. And it's designed not just for seasoned traders, 
                but also for complete beginners who want to start their journey with confidence.
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Be Part of the First 500
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;