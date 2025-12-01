import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import Footer from "@/components/Footer";

const events = [
  {
    id: 1,
    title: "Regional Championship Finals",
    date: "December 15, 2025",
    time: "6:00 PM EST",
    location: "Online Tournament",
    game: "Valorant",
    status: "Upcoming",
    prizePool: "$50,000",
    participants: "16 Teams",
  },
  {
    id: 2,
    title: "BNT Open Trials",
    date: "January 8, 2026",
    time: "3:00 PM EST",
    location: "Discord Server",
    game: "Multi-Game",
    status: "Registration Open",
    prizePool: "N/A",
    participants: "Open to All",
  },
  {
    id: 3,
    title: "Spring Invitational",
    date: "February 20, 2026",
    time: "7:00 PM EST",
    location: "Las Vegas Convention Center",
    game: "League of Legends",
    status: "Upcoming",
    prizePool: "$100,000",
    participants: "8 Teams",
  },
  {
    id: 4,
    title: "Community Showmatch",
    date: "March 5, 2026",
    time: "5:00 PM EST",
    location: "Twitch Stream",
    game: "CS2",
    status: "Confirmed",
    prizePool: "$10,000",
    participants: "Pros vs Community",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            <span className="text-gradient-cyber">UPCOMING EVENTS</span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-primary glow-primary" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch us compete in the biggest tournaments and events
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-6 max-w-5xl mx-auto mb-16">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="font-display text-2xl md:text-3xl">
                        {event.title}
                      </CardTitle>
                      <Badge 
                        variant={event.status === "Registration Open" ? "default" : "secondary"}
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground text-lg">
                      {event.game}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <Trophy className="h-5 w-5 text-secondary" />
                      <span>Prize Pool: {event.prizePool}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <Users className="h-5 w-5 text-secondary" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/30">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Out
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow us on social media to get notified about upcoming events, tournaments, and exclusive announcements.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
