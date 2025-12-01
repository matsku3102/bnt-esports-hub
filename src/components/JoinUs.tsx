import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const requirements = [
  "Exceptional skill in your game",
  "Strong communication and teamwork",
  "Dedication to improvement",
  "Professional attitude",
  "Content creation mindset",
];

const JoinUs = () => {
  return (
    <section id="join" className="py-24 px-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background -z-10" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main Content */}
        <div className="text-center space-y-8 mb-12">
          <h2 className="font-display text-5xl md:text-7xl font-bold">
            <span className="text-gradient-cyber">JOIN</span>{" "}
            <span className="text-gradient-fire">BNT</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-primary glow-primary" />
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Think you have what it takes to represent BNT? We're always looking for exceptional talent 
            who embody our values and drive for excellence.
          </p>
        </div>

        {/* Requirements Box */}
        <div className="mb-12 p-8 md:p-12 bg-card border-2 border-primary/20 clip-angle relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          
          <h3 className="font-display text-3xl font-bold mb-8 text-center">
            What We Look For
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <div
                key={req}
                className="flex items-center gap-3 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 group-hover:text-secondary transition-colors" />
                <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                  {req}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="relative p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse" />
          
          <div className="relative z-10 text-center space-y-6">
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Ready to prove yourself?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Submit your application through our structured trial process. Show us your skills, 
              demonstrate your commitment, and earn your place among the elite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 glow-primary transition-all duration-300 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="group border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-display text-lg px-8 py-6 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              We review applications on a rolling basis. The best time to apply is now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
