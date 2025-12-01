import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";
import jerseyLongImg from "@/assets/merch/BNTshirt.jpg";
import jerseyShortImg from "@/assets/merch/BNTtee.jpg";
import hoodie from "@/assets/merch/BNThoodie.jpg";
import mousepad from "@/assets/merch/BNTmousepad.jpg";
import cap from "@/assets/merch/BNTcap.jpg";
import poster from "@/assets/merch/BNTposter.jpg";

const merchItems = [
  {
    id: 1,
    name: "BNT Long-sleeve Jersey",
    description: "Official long-sleeve team jersey with moisture-wicking fabric",
    price: "$59.99",
    image: jerseyLongImg,
  },
  {
    id: 2,
    name: "BNT Hoodie",
    description: "Premium cotton blend hoodie with embroidered logo",
    price: "$79.99",
    image: hoodie,
  },
  {
    id: 3,
    name: "BNT Cap",
    description: "Adjustable snapback with 3D embroidered logo",
    price: "$29.99",
    image: cap,
  },
  {
    id: 4,
    name: "BNT Mousepad",
    description: "Extended gaming mousepad with anti-slip base",
    price: "$24.99",
    image: mousepad,
  },
  {
    id: 5,
    name: "BNT Short-sleeve Jersey",
    description: "Official short-sleeve team jersey with moisture-wicking fabric",
    price: "$34.99",
    image: jerseyShortImg,
  },
  {
    id: 6,
    name: "BNT Poster Set",
    description: "Set of 3 high-quality team posters",
    price: "$19.99",
    image: poster,
  },
];

const Merch = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            <span className="text-gradient-cyber">BNT MERCH</span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-primary glow-primary" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Represent the team with official BNT gear
          </p>
        </div>

        {/* Merch Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {merchItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-display text-2xl mb-2">{item.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <span className="text-2xl font-display font-bold text-primary">{item.price}</span>
                <Button 
                  className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Merch;
