import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, DollarSign, TrendingUp, Star, Users } from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";

const Locations = () => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("dubai");

  const locations = [
    {
      id: "dubai",
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "A global hub of luxury and innovation, Dubai offers unparalleled modern living with iconic skylines and world-class amenities.",
      stats: {
        avgPrice: "$1.8M",
        growth: "+12.5%",
        properties: "150+"
      },
      neighborhoods: [
        { name: "Dubai Marina", avgPrice: "$2.1M", type: "Waterfront Living" },
        { name: "Downtown Dubai", avgPrice: "$2.8M", type: "Urban Luxury" },
        { name: "Palm Jumeirah", avgPrice: "$4.2M", type: "Island Paradise" },
        { name: "Emirates Hills", avgPrice: "$6.5M", type: "Elite Villas" }
      ],
      highlights: ["Tax-Free Living", "World-Class Infrastructure", "Strategic Location", "Luxury Lifestyle"]
    },
    {
      id: "miami",
      name: "Miami, Florida",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Miami's vibrant culture, pristine beaches, and booming real estate market make it a premier destination for luxury living.",
      stats: {
        avgPrice: "$2.2M",
        growth: "+8.7%",
        properties: "120+"
      },
      neighborhoods: [
        { name: "South Beach", avgPrice: "$2.8M", type: "Beachfront Condos" },
        { name: "Brickell", avgPrice: "$1.9M", type: "Urban High-Rise" },
        { name: "Coral Gables", avgPrice: "$3.5M", type: "Historic Luxury" },
        { name: "Fisher Island", avgPrice: "$8.2M", type: "Exclusive Island" }
      ],
      highlights: ["No State Income Tax", "Tropical Climate", "Cultural Diversity", "Investment Potential"]
    },
    {
      id: "nyc",
      name: "New York City",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "The pinnacle of urban sophistication, NYC offers unmatched cultural experiences and prestigious addresses.",
      stats: {
        avgPrice: "$4.1M",
        growth: "+5.2%",
        properties: "85+"
      },
      neighborhoods: [
        { name: "Manhattan Upper East Side", avgPrice: "$3.8M", type: "Classic Elegance" },
        { name: "Tribeca", avgPrice: "$5.2M", type: "Celebrity Haven" },
        { name: "SoHo", avgPrice: "$4.7M", type: "Artistic Luxury" },
        { name: "Central Park West", avgPrice: "$7.1M", type: "Park Views" }
      ],
      highlights: ["Global Financial Center", "World-Class Arts", "Prestige Addresses", "Investment Stability"]
    },
    {
      id: "la",
      name: "Los Angeles",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Hollywood glamour meets luxury living in LA's exclusive neighborhoods and stunning coastal properties.",
      stats: {
        avgPrice: "$3.2M",
        growth: "+7.1%",
        properties: "95+"
      },
      neighborhoods: [
        { name: "Beverly Hills", avgPrice: "$5.8M", type: "Celebrity Estates" },
        { name: "Malibu", avgPrice: "$4.9M", type: "Beach Paradise" },
        { name: "West Hollywood", avgPrice: "$2.1M", type: "Urban Chic" },
        { name: "Bel Air", avgPrice: "$8.7M", type: "Ultra Luxury" }
      ],
      highlights: ["Entertainment Capital", "Perfect Climate", "Luxury Lifestyle", "Celebrity Culture"]
    }
  ];

  const currentLocation = locations.find(loc => loc.id === selectedLocation) || locations[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={() => setIsGetStartedOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-luxury-navy to-luxury-navy-light text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Prime <span className="text-luxury-gold">Locations</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover luxury properties in the world's most prestigious and sought-after destinations
            </p>
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <Button
                key={location.id}
                variant={selectedLocation === location.id ? "luxury" : "outline"}
                size="lg"
                onClick={() => setSelectedLocation(location.id)}
                className="text-lg px-8"
              >
                {location.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Location Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-light text-luxury-navy mb-6">
                {currentLocation.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {currentLocation.description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-6 w-6 text-luxury-gold mr-2" />
                    <span className="text-2xl font-bold text-luxury-navy">{currentLocation.stats.avgPrice}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Avg Price</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-luxury-gold mr-2" />
                    <span className="text-2xl font-bold text-luxury-navy">{currentLocation.stats.growth}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">YoY Growth</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Building className="h-6 w-6 text-luxury-gold mr-2" />
                    <span className="text-2xl font-bold text-luxury-navy">{currentLocation.stats.properties}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Properties</p>
                </div>
              </div>
              
              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-luxury-navy mb-4">Key Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {currentLocation.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button variant="luxury" size="lg">
                View Properties in {currentLocation.name}
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={currentLocation.image}
                alt={currentLocation.name}
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
          
          {/* Neighborhoods */}
          <div>
            <h3 className="text-3xl font-light text-luxury-navy mb-8 text-center">
              Premium <span className="text-luxury-gold">Neighborhoods</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentLocation.neighborhoods.map((neighborhood, index) => (
                <Card key={index} className="border-0 shadow-elegant hover:shadow-luxury transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <MapPin className="h-5 w-5 text-luxury-gold mt-1" />
                      <Badge variant="outline" className="text-xs">
                        {neighborhood.type}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-luxury-navy mb-2 group-hover:text-luxury-gold transition-colors">
                      {neighborhood.name}
                    </h4>
                    
                    <div className="text-2xl font-bold text-luxury-gold mb-4">
                      {neighborhood.avgPrice}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Explore Area
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-luxury-navy mb-6">
              Global <span className="text-luxury-gold">Presence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our extensive network spans the world's most exclusive real estate markets
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-luxury-navy mb-2">15+</div>
              <div className="text-muted-foreground">Global Cities</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-luxury-navy mb-2">50+</div>
              <div className="text-muted-foreground">Local Experts</div>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-luxury-navy mb-2">500+</div>
              <div className="text-muted-foreground">Luxury Properties</div>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-luxury-navy mb-2">24/7</div>
              <div className="text-muted-foreground">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Find Your Perfect <span className="text-luxury-gold">Location</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Let our local experts guide you to the perfect property in your preferred location. 
            Schedule a consultation to explore exclusive opportunities.
          </p>
          <Button 
            variant="luxury" 
            size="lg" 
            onClick={() => setIsGetStartedOpen(true)}
            className="text-lg px-8 py-4"
          >
            Schedule Location Tour
          </Button>
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

export default Locations;