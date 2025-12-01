import { Target, Users, Trophy, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue greatness in every match, every practice, every moment. Second place is just the first loser.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Individual skill wins games, but teamwork and intelligence win championships. We rise together.",
  },
  {
    icon: Trophy,
    title: "Discipline",
    description: "Success isn't given—it's earned through countless hours of dedication, training, and sacrifice.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We don't follow the meta, we create it. Constantly evolving, adapting, and pushing boundaries.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            <span className="text-gradient-cyber">WHO WE ARE</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-primary glow-primary" />
        </div>

        {/* Mission Statement */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-card border border-primary/20 clip-angle">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-3xl" />
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 relative z-10">
              <span className="text-primary font-bold">BNT Esports</span> is more than a roster—it's a{" "}
              <span className="text-secondary font-semibold">community</span>, a{" "}
              <span className="text-secondary font-semibold">brand</span>, and a{" "}
              <span className="text-secondary font-semibold">movement</span>. We're committed to discovering top-tier talent 
              through structured trials and interviews, ensuring every player who wears the BNT name embodies skill, 
              professionalism, and heart. Supported by powerful partnerships and a dedicated gaming house, we're building 
              a foundation designed for long-term success both inside and outside the arena.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-secondary/5 transition-all duration-300 -z-10" />
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/20 group-hover:border-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
