import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Wrench, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every installation and customization.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen and deliver.",
  },
  {
    icon: Wrench,
    title: "Expertise",
    description: "Years of experience in automotive customization and coding.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love cars and it shows in our work quality.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 animate-fade-in">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto animate-fade-in">
              Bringing automotive customization excellence to Huddersfield, West Yorkshire
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 md:p-12 bg-card border-border">
              <h2 className="text-3xl font-orbitron font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  Based in Huddersfield, West Yorkshire, we specialize in transforming ordinary vehicles 
                  into extraordinary experiences. Our passion for automotive customization drives us to 
                  deliver the highest quality installations and services.
                </p>
                <p>
                  From stunning starlight installations to cutting-edge Apple CarPlay retrofits, we bring 
                  the latest in automotive technology and styling to your vehicle. Every project is 
                  approached with meticulous attention to detail and a commitment to excellence.
                </p>
                <p>
                  We work with a wide range of vehicles and pride ourselves on staying at the forefront 
                  of automotive customization trends and technologies. Whether you're looking for ambient 
                  lighting, dash cameras, or vehicle coding services, we have the expertise to make your 
                  vision a reality.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 px-4 pb-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary transition-all duration-300 text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground font-inter">
                      {value.description}
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

export default About;
