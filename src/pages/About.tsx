import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Building, Globe, Star, CheckCircle } from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";

const About = () => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  const stats = [
    { icon: Building, value: "500+", label: "Luxury Properties Sold" },
    { icon: Users, value: "1,200+", label: "Happy Clients" },
    { icon: Globe, value: "15+", label: "Global Locations" },
    { icon: Award, value: "25+", label: "Industry Awards" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service."
    },
    {
      title: "Integrity",
      description: "Trust and transparency are the foundation of our client relationships."
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge technology to enhance the luxury experience."
    },
    {
      title: "Exclusivity",
      description: "Access to the most prestigious properties and exclusive opportunities."
    }
  ];

  const achievements = [
    "Top 1% of luxury real estate agents globally",
    "Exclusive partnerships with premium developers",
    "Award-winning customer service excellence",
    "Specialized in ultra-high-net-worth clientele",
    "Multi-language support and global reach",
    "24/7 concierge and after-sales service"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={() => setIsGetStartedOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-luxury-navy to-luxury-navy-light text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              About <span className="text-luxury-gold">LuxuryResidence</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Setting new standards in luxury real estate with unmatched expertise, 
              exclusive properties, and personalized service
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-elegant">
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                  <div className="text-3xl font-bold text-luxury-navy mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-luxury-navy mb-6">
                Our <span className="text-luxury-gold">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to redefine luxury real estate, LuxuryResidence has become 
                the premier destination for discerning clients seeking exceptional properties in 
                the world's most exclusive locations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our journey began with a simple belief: every client deserves a truly personalized 
                experience when finding their perfect home. Today, we continue to set new standards 
                for excellence in the luxury real estate market.
              </p>
              <Button variant="luxury" size="lg">
                Schedule Consultation
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Office"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-luxury-navy mb-6">
              Our <span className="text-luxury-gold">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-elegant hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-luxury-navy mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
                alt="Awards and Recognition"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-luxury-navy mb-6">
                Recognition & <span className="text-luxury-gold">Achievements</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to excellence has been recognized by industry leaders and satisfied clients worldwide.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-luxury-gold mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="luxury" 
                  size="lg"
                  onClick={() => setIsGetStartedOpen(true)}
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <GetStartedModal 
        isOpen={isGetStartedOpen} 
        onClose={() => setIsGetStartedOpen(false)} 
      />
    </div>
  );
};

export default About;