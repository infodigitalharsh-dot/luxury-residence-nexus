import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  TrendingUp, 
  Key, 
  Building2, 
  Shield, 
  Search,
  Users,
  Briefcase,
  MapPin,
  Clock,
  Star,
  CheckCircle
} from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";

const Services = () => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  const mainServices = [
    {
      icon: Home,
      title: "Property Sales",
      description: "Expert guidance through every step of buying your dream luxury property",
      features: ["Market Analysis", "Property Valuation", "Negotiation Support", "Legal Assistance"],
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic investment opportunities in premium real estate markets",
      features: ["ROI Analysis", "Market Trends", "Portfolio Diversification", "Risk Assessment"],
      color: "bg-green-500"
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Comprehensive management services for your luxury property portfolio",
      features: ["Tenant Screening", "Maintenance", "Rent Collection", "Property Inspection"],
      color: "bg-purple-500"
    },
    {
      icon: Building2,
      title: "Commercial Real Estate",
      description: "Exclusive commercial properties and investment opportunities",
      features: ["Office Spaces", "Retail Properties", "Industrial Assets", "Mixed-Use Developments"],
      color: "bg-orange-500"
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Concierge Services",
      description: "24/7 personalized assistance for all your property needs"
    },
    {
      icon: Search,
      title: "Property Search",
      description: "Exclusive access to off-market and pre-launch properties"
    },
    {
      icon: Users,
      title: "Relocation Services",
      description: "Complete support for international and domestic relocations"
    },
    {
      icon: Briefcase,
      title: "Legal Support",
      description: "Expert legal guidance for all property transactions"
    },
    {
      icon: MapPin,
      title: "Location Advisory",
      description: "In-depth neighborhood and market insights"
    },
    {
      icon: Clock,
      title: "After-Sales Support",
      description: "Ongoing support and services after property purchase"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your needs, preferences, and investment goals"
    },
    {
      step: "02",
      title: "Property Curation",
      description: "Handpicked selection of properties matching your criteria"
    },
    {
      step: "03",
      title: "Property Viewing",
      description: "Exclusive private viewings with detailed property insights"
    },
    {
      step: "04",
      title: "Due Diligence",
      description: "Comprehensive property analysis and market evaluation"
    },
    {
      step: "05",
      title: "Negotiation",
      description: "Expert negotiation to secure the best terms and price"
    },
    {
      step: "06",
      title: "Closing Support",
      description: "Complete assistance through the closing process"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={() => setIsGetStartedOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-luxury-navy to-luxury-navy-light text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Our <span className="text-luxury-gold">Services</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive luxury real estate services tailored to your unique needs and aspirations
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-luxury-navy mb-6">
              Core <span className="text-luxury-gold">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert services designed to exceed your expectations at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-luxury-navy group-hover:text-luxury-gold transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-luxury-gold" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6 group-hover:bg-luxury-gold group-hover:text-luxury-gold-foreground transition-all">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-luxury-navy mb-6">
              Additional <span className="text-luxury-gold">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complementary services to enhance your luxury real estate experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-elegant hover:shadow-luxury transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                    <service.icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-luxury-navy mb-4 group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-luxury-navy mb-6">
              Our <span className="text-luxury-gold">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to finding and securing your perfect luxury property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-luxury transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-luxury-gold text-luxury-gold-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-luxury-navy group-hover:text-luxury-gold transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to Begin Your <span className="text-luxury-gold">Journey?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Let our experienced team guide you through every step of your luxury real estate journey. 
            Schedule a consultation today and discover the difference our personalized service makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="luxury" 
              size="lg" 
              onClick={() => setIsGetStartedOpen(true)}
              className="text-lg px-8 py-4"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              View Our Portfolio
            </Button>
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

export default Services;