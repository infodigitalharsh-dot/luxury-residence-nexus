import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import luxuryHero from "@/assets/luxury-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={luxuryHero} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Luxury Real Estate
            <span className="block text-luxury-gold font-normal">Redefined</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Discover extraordinary properties in Dubai and the United States. 
            Where elegance meets exclusivity.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto mb-8 shadow-luxury">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-white/70">
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
                <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-white/70">
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
                <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-white/70">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">$1M - $2M</SelectItem>
                  <SelectItem value="2m">$2M - $5M</SelectItem>
                  <SelectItem value="5m">$5M - $10M</SelectItem>
                  <SelectItem value="10m">$10M+</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="luxury" size="lg" className="h-12">
                <Search className="mr-2 h-5 w-5" />
                Search Properties
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Schedule Consultation
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
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