import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Smartphone, Code, Lightbulb, Zap, Video, CircleDot, Sparkles, Monitor } from "lucide-react";

const services = [
  {
    id: "reverse-cameras",
    icon: Video,
    title: "Reverse Cameras",
    description: "Professional reverse camera installation for safer parking and reversing. Crystal clear display integrated with your vehicle.",
    price: 30,
  },
  {
    id: "steering-wheels-upgrade",
    icon: CircleDot,
    title: "Steering Wheels Upgrade",
    description: "Upgrade your steering wheel with premium materials and modern functionality. Enhanced grip and control.",
    price: 50,
  },
  {
    id: "carplay-android-screens",
    icon: Monitor,
    title: "CarPlay/Android Auto Screens",
    description: "Full touchscreen display with wireless Apple CarPlay and Android Auto integration. Modern infotainment for any vehicle.",
    price: 120,
  },
  {
    id: "dash-cameras",
    icon: Camera,
    title: "Dash Cameras",
    description: "High-quality dash camera installation for security and peace of mind. Front and rear camera options available.",
    price: 45,
  },
  {
    id: "coding",
    icon: Code,
    title: "Coding",
    description: "Professional vehicle coding and programming services. Unlock hidden features and customize your car's electronic systems.",
    price: 15,
  },
  {
    id: "f1-brake-lights",
    icon: Zap,
    title: "F1 Brake Lights",
    description: "Professional F1-style rear fog light installations for that racing-inspired look and enhanced safety.",
    price: 75,
  },
  {
    id: "footwell-lighting",
    icon: Lightbulb,
    title: "Footwell Lighting",
    description: "Ambient footwell lighting that adds atmosphere to your interior. Multiple color options and brightness settings.",
    price: 50,
  },
  {
    id: "starlight-headliner",
    icon: Sparkles,
    title: "Starlight Headliner",
    description: "Transform your car's interior with a stunning starlight headliner. Premium fiber optic lighting creates a luxurious night sky effect.",
    price: 350,
  },
  {
    id: "ambient-lighting",
    icon: Smartphone,
    title: "Ambient Lighting",
    description: "Complete ambient lighting system throughout your vehicle. Customizable colors and mood settings controlled via app.",
    price: 250,
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
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
                    key={service.id}
                    className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in group flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <span className="text-2xl font-bold text-primary">£{service.price}</span>
                      <Button
                        className="snipcart-add-item"
                        data-item-id={service.id}
                        data-item-price={service.price}
                        data-item-url={`/services#${service.id}`}
                        data-item-description={service.description}
                        data-item-name={service.title}
                      >
                        Add to Cart
                      </Button>
                    </div>
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
