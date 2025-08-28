import { Button } from "@/components/ui/button";
import { Award, Users, Building, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "1,200+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: TrendingUp, value: "$2.8B", label: "Total Sales Volume" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-luxury-navy mb-6">
              About <span className="text-luxury-gold font-normal">Luxury Residence</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over two decades, we have been the trusted partner for discerning clients 
              seeking the world's most exclusive properties. Our expertise spans across 
              Dubai's prestigious developments and America's most coveted neighborhoods.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just sell properties—we curate exceptional living experiences. 
              Every transaction is handled with the utmost discretion, professionalism, 
              and attention to detail that our clients have come to expect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="luxury" size="lg">
                Our Story
              </Button>
              <Button variant="outline" size="lg">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-8 bg-gradient-luxury rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-luxury-gold-foreground" />
                </div>
                <div className="text-3xl font-bold text-luxury-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;