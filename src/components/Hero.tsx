import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import luxuryHero from "@/assets/luxury-hero.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  const propertyTypes = [
    "Apartment", "Duplexes", "Manor", "Commercial", "Swimming pool"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={luxuryHero} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
            Let us find a place
            <br />
            you can <span className="text-accent font-medium">call home</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere rutrum 
            dui eu malesuada. Cras id est rhoncus tortor bibendum commodo pretium ac mi.
          </p>
          
          {/* Modern Search Bar */}
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-6 max-w-4xl mx-auto mb-8 shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-white/70 text-sm font-medium">Location</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-white/20 text-white h-12 rounded-xl">
                    <SelectValue placeholder="Los Angeles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dubai">Dubai, UAE</SelectItem>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="nyc">New York, NY</SelectItem>
                    <SelectItem value="la">Los Angeles, CA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/70 text-sm font-medium">Property Type</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-white/20 text-white h-12 rounded-xl">
                    <SelectValue placeholder="Apartment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="apartment">Luxury Apartment</SelectItem>
                    <SelectItem value="mansion">Mansion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/70 text-sm font-medium">Price Range</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-white/20 text-white h-12 rounded-xl">
                    <SelectValue placeholder="Max Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">$1M - $2M</SelectItem>
                    <SelectItem value="2m">$2M - $5M</SelectItem>
                    <SelectItem value="5m">$5M - $10M</SelectItem>
                    <SelectItem value="10m">$10M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button variant="luxury" size="lg" className="h-12 rounded-xl bg-accent hover:bg-accent/90 text-black font-medium">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
          
          {/* Property Type Suggestions */}
          <div className="mb-12">
            <p className="text-white/70 text-sm mb-4">Suggestion:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {propertyTypes.map((type) => (
                <Badge 
                  key={type} 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer px-4 py-2 rounded-full text-sm transition-all"
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onGetStarted} variant="hero" size="lg" className="text-lg px-8 py-4 rounded-xl">
              Schedule Consultation
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4 rounded-xl">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-luxury-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;