import { Card, CardContent } from "@/components/ui/card";
import { Home, DollarSign, Key, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description: "Expert guidance through every step of buying your dream luxury property, from initial viewing to final closing.",
      features: ["Market Analysis", "Negotiation", "Due Diligence", "Closing Support"]
    },
    {
      icon: DollarSign,
      title: "Investment Advisory",
      description: "Strategic investment advice for building and diversifying your luxury real estate portfolio across international markets.",
      features: ["ROI Analysis", "Market Trends", "Portfolio Strategy", "Risk Assessment"]
    },
    {
      icon: Key,
      title: "Luxury Rentals",
      description: "Exclusive rental properties for discerning clients seeking premium short-term and long-term accommodations.",
      features: ["Concierge Service", "Furnished Options", "Flexible Terms", "Premium Locations"]
    },
    {
      icon: Settings,
      title: "Property Management",
      description: "Comprehensive management services ensuring your luxury properties maintain their value and generate optimal returns.",
      features: ["Maintenance", "Tenant Relations", "Financial Reporting", "Asset Protection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-luxury-navy mb-6">
            Our <span className="text-luxury-gold font-normal">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From acquisition to management, we provide comprehensive luxury real estate 
            services tailored to your unique needs and investment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-white border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-luxury rounded-full mb-6 group-hover:bg-luxury-gold transition-all duration-300">
                  <service.icon className="h-10 w-10 text-luxury-navy group-hover:text-luxury-gold-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-medium text-luxury-navy mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;