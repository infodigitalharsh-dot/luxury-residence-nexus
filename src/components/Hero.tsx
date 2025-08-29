import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import luxuryHero from "@/assets/luxury-hero.jpg";
interface HeroProps {
  onGetStarted: () => void;
}
const Hero = ({
  onGetStarted
}: HeroProps) => {
  const propertyTypes = ["Apartment", "Duplexes", "Manor", "Commercial", "Swimming pool"];
return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={luxuryHero} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-6 md:space-y-8 lg:space-y-12">
          {/* Main Heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
              Let us find a place
              <br className="hidden sm:block" />
              <span className="block sm:inline"> you can </span>
              <span className="text-accent font-medium">call home</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
              Discover luxury properties in the world's most prestigious locations. 
              From Dubai's skyline to Miami's waterfront - your dream home awaits.
            </p>
          </div>
          
          {/* Modern Search Bar */}
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 max-w-5xl mx-auto shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-end">
              <div className="space-y-2">
                <label className="text-white/70 text-xs md:text-sm font-medium block text-left">Location</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-white/20 text-white h-10 md:h-12 rounded-lg md:rounded-xl text-sm">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-0 shadow-xl rounded-xl">
                    <SelectItem value="dubai">Dubai, UAE</SelectItem>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="nyc">New York, NY</SelectItem>
                    <SelectItem value="la">Los Angeles, CA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/70 text-xs md:text-sm font-medium block text-left">Property Type</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-white/20 text-white h-10 md:h-12 rounded-lg md:rounded-xl text-sm">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-0 shadow-xl rounded-xl">
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="apartment">Luxury Apartment</SelectItem>
                    <SelectItem value="mansion">Mansion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/70 text-xs md:text-sm font-medium block text-left">Price Range</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-white/20 text-white h-10 md:h-12 rounded-lg md:rounded-xl text-sm">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-0 shadow-xl rounded-xl">
                    <SelectItem value="1m">$1M - $2M</SelectItem>
                    <SelectItem value="2m">$2M - $5M</SelectItem>
                    <SelectItem value="5m">$5M - $10M</SelectItem>
                    <SelectItem value="10m">$10M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                variant="luxury" 
                size="lg" 
                className="h-10 md:h-12 rounded-lg md:rounded-xl bg-accent hover:bg-accent/90 text-black font-medium text-sm md:text-base w-full"
              >
                <Search className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden sm:inline">Search</span>
                <span className="sm:hidden">Find</span>
              </Button>
            </div>
          </div>
          
          {/* Property Type Suggestions */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {propertyTypes.map((type) => (
              <Badge 
                key={type} 
                variant="secondary" 
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 text-xs md:text-sm px-3 py-1 md:px-4 md:py-2"
              >
                {type}
              </Badge>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
            <Button 
              onClick={onGetStarted} 
              variant="hero" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl w-full sm:w-auto"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl w-full sm:w-auto"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;