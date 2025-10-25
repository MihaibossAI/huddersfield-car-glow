import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Lightbulb, Zap, Camera, Smartphone, Code, ArrowRight, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-image.jpg";

const services = [
  { icon: Sparkles, title: "Starlights", desc: "Premium fiber optic installations" },
  { icon: Lightbulb, title: "Ambient Lighting", desc: "Customizable mood lighting" },
  { icon: Zap, title: "F1 Lights", desc: "Racing-inspired rear fog lights" },
  { icon: Camera, title: "Dash Cameras", desc: "Front & rear camera systems" },
  { icon: Smartphone, title: "Apple CarPlay", desc: "Wireless smartphone integration" },
  { icon: Code, title: "Coding", desc: "Vehicle programming & features" },
];

const testimonials = [
  { name: "James Mitchell", text: "Absolutely brilliant service! The starlight headliner transformed my car completely. Worth every penny!", rating: 5 },
  { name: "Sarah Thompson", text: "Professional installation and amazing results. The ambient lighting is exactly what I wanted.", rating: 5 },
  { name: "Mohammed Ali", text: "Quick turnaround and excellent quality. The CarPlay installation was seamless.", rating: 5 },
  { name: "Emily Roberts", text: "Best decision ever! The F1 brake lights look incredible and the team was so helpful.", rating: 5 },
  { name: "David Chen", text: "Top-notch work on my dash camera install. Very professional and reasonably priced.", rating: 5 },
  { name: "Lisa Anderson", text: "The footwell lighting adds such a premium feel. Highly recommend this service!", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
              A New Level of <span className="text-primary">Comfort</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
              Exclusively for your car
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <Link to="/services">
                  View Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
                Professional automotive customization in Huddersfield, West Yorkshire
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-orbitron font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground font-inter text-sm">{service.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-background overflow-hidden">
          <div className="container mx-auto mb-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                What Our <span className="text-primary">Clients Say</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 bg-card border-border h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-foreground">- {testimonial.name}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-12 bg-gradient-to-br from-card to-card/50 border-primary/20 text-center">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="text-xl text-muted-foreground font-inter mb-8">
                Get in touch with us today for a consultation
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Book Your Appointment</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
