import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, Search, Filter } from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";
import PropertyModal from "@/components/PropertyModal";

const Properties = () => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);

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
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2096&q=80",
      price: "$8,900,000",
      title: "Waterfront Mansion with Yacht Dock",
      location: "Miami Beach, Florida",
      beds: 7,
      baths: 8,
      sqft: "7,200",
      featured: true
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "$5,200,000",
      title: "Sky Villa with Panoramic Views",
      location: "Dubai Hills, UAE",
      beds: 4,
      baths: 5,
      sqft: "4,100",
      featured: false
    }
  ];

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={() => setIsGetStartedOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-luxury-navy to-luxury-navy-light text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Luxury <span className="text-luxury-gold">Properties</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover our exclusive collection of premium properties in the world's most prestigious locations
            </p>
          </div>
          
          {/* Search Filters */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <Input
                placeholder="Search properties..."
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dubai">Dubai, UAE</SelectItem>
                  <SelectItem value="miami">Miami, FL</SelectItem>
                  <SelectItem value="nyc">New York, NY</SelectItem>
                  <SelectItem value="la">Los Angeles, CA</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="apartment">Luxury Apartment</SelectItem>
                  <SelectItem value="mansion">Mansion</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">$1M - $2M</SelectItem>
                  <SelectItem value="2m">$2M - $5M</SelectItem>
                  <SelectItem value="5m">$5M - $10M</SelectItem>
                  <SelectItem value="10m">$10M+</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="luxury" className="h-12">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card 
                key={property.id}
                className="group overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-[1.02] bg-white border-0 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handlePropertyClick(property)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-luxury-gold text-luxury-gold-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-luxury-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-luxury-navy mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {property.location}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.sqft} sqft
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-gold-foreground transition-all duration-300">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="luxury" size="lg">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <GetStartedModal 
        isOpen={isGetStartedOpen} 
        onClose={() => setIsGetStartedOpen(false)} 
      />
      
      <PropertyModal
        property={selectedProperty}
        isOpen={isPropertyModalOpen}
        onClose={() => {
          setIsPropertyModalOpen(false);
          setSelectedProperty(null);
        }}
      />
    </div>
  );
};

export default Properties;