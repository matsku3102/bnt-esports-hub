import { Home, Wifi, Trophy, Users } from "lucide-react";
import gamingHouseImage from "@/assets/gaming-house.jpg";

const features = [
  {
    icon: Home,
    title: "State-of-the-Art Facility",
    description: "Professional-grade equipment and comfortable living spaces designed for peak performance.",
  },
  {
    icon: Wifi,
    title: "Ultra-Fast Connection",
    description: "Enterprise-level internet ensuring zero lag and seamless streaming for content creation.",
  },
  {
    icon: Trophy,
    title: "Training Environment",
    description: "Dedicated practice rooms and strategy areas to refine skills and perfect team coordination.",
  },
  {
    icon: Users,
    title: "Team Chemistry",
    description: "Living together builds bonds that translate to unbreakable synergy in competition.",
  },
];

const GamingHouse = () => {
  return (
    <section id="gaming-house" className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            <span className="text-gradient-fire">THE GAMING HOUSE</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-secondary glow-secondary" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where champions are forged through training, creativity, and unwavering dedication
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 -z-10 blur-xl" />
            <div className="relative overflow-hidden border-2 border-primary/20 clip-angle">
              <img 
                src={gamingHouseImage} 
                alt="BNT Gaming House" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-4 p-6 bg-card/50 border border-border hover:border-secondary/50 hover:bg-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-secondary/10 border border-secondary/20">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 md:p-12 bg-gradient-to-r from-muted/50 via-card to-muted/50 border border-primary/20">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Train With The <span className="text-gradient-cyber">Best</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our gaming house isn't just a place to play, it's where we create content, build strategies, 
            and forge the chemistry that makes us unstoppable. This is where champions live, train, and evolve together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamingHouse;
