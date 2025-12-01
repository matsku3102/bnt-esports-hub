import Hero from "@/components/Hero";
import About from "@/components/About";
import GamingHouse from "@/components/GamingHouse";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <GamingHouse />
      <JoinUs />
      <Footer />
    </main>
  );
};

export default Index;
