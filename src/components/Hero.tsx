import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Tagline */}
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="block text-gradient-cyber animate-slide-in-left">BNT</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-primary glow-primary" />
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A rising force in competitive gaming, built on passion, discipline, and the relentless pursuit of excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 glow-primary transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/join')}
            >
              Join The Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-display text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/events')}
            >
              Watch Us Compete
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient-cyber">10+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Elite Players</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient-fire">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Gaming House</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient-cyber">∞</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Dedication</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
