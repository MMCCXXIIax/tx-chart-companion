import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formcarry.com/s/D-HEs8VvWp-", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been added to the beta waitlist.",
        });
        setName("");
        setEmail("");
        // Redirect to welcome page
        navigate("/welcome");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta-section" className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Be Among the First{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              500 Traders
            </span>{" "}
            to Try TX.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Spots are limited. Join the beta today.
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="text-center text-lg h-12"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center text-lg h-12"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Reserving..." : "Reserve My Spot"}
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              Limited beta access • No spam, ever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;