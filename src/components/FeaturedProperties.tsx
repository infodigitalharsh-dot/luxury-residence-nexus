import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square } from "lucide-react";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      price: "$2,850,000",
      title: "Modern Penthouse in Downtown Dubai",
      location: "Dubai Marina, UAE",
      beds: 3,
      baths: 4,
      sqft: "2,450",
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      price: "$4,200,000",
      title: "Oceanfront Villa with Private Beach",
      location: "Miami, Florida",
      beds: 5,
      baths: 6,
      sqft: "4,800",
      featured: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      price: "$6,500,000",
      title: "Luxury Apartment with Central Park View",
      location: "Manhattan, New York",
      beds: 4,
      baths: 5,
      sqft: "3,200",
      featured: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80",
      price: "$3,750,000",
      title: "Contemporary Estate in Beverly Hills",
      location: "Los Angeles, California",
      beds: 6,
      baths: 7,
      sqft: "5,500",
      featured: false
    }
  ];

  return (
    <section id="properties" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-luxury-navy mb-6">
            Featured <span className="text-luxury-gold font-normal">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of the world's most exclusive properties, 
            each offering unparalleled luxury and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className="group overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-[1.02] bg-white border-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {property.featured && (
                  <div className="absolute top-6 left-6 bg-luxury-gold text-luxury-gold-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-luxury-navy px-4 py-2 rounded-full text-lg font-semibold">
                  {property.price}
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-luxury-navy mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4 mr-2" />
                  {property.location}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {property.sqft} sqft
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:variant-luxury transition-all duration-300">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="luxury" size="lg" className="px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;