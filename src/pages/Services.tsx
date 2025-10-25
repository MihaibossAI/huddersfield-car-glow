import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Sparkles, Lightbulb, Zap, Camera, Smartphone, Code } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Starlights",
    description: "Transform your car's interior with stunning starlight installations. Premium fiber optic lighting creates a luxurious night sky effect.",
  },
  {
    icon: Lightbulb,
    title: "Ambient Lighting",
    description: "Customizable ambient lighting systems that enhance your driving experience with multiple color options and mood settings.",
  },
  {
    icon: Zap,
    title: "F1 Lights",
    description: "Professional F1-style rear fog light installations for that racing-inspired look and enhanced safety.",
  },
  {
    icon: Camera,
    title: "Dash Cameras",
    description: "High-quality dash camera installation for security and peace of mind. Front and rear camera options available.",
  },
  {
    icon: Smartphone,
    title: "Apple CarPlay Retrofits",
    description: "Upgrade your vehicle with wireless Apple CarPlay integration. Seamless smartphone connectivity for modern convenience.",
  },
  {
    icon: Code,
    title: "Coding",
    description: "Professional vehicle coding and programming services. Unlock hidden features and customize your car's electronic systems.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 animate-fade-in">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto animate-fade-in">
              Professional automotive customization services tailored to your vehicle
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 pb-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
