import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart, Share2, Calendar, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Property {
  id: number;
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  featured?: boolean;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal = ({ property, isOpen, onClose }: PropertyModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  if (!property) return null;

  // Mock additional images for the property
  const additionalImages = [
    property.image,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  const propertyFeatures = [
    "Ocean View", "Private Pool", "Gym", "Concierge Service",
    "Smart Home System", "Private Elevator", "Wine Cellar", "Rooftop Terrace"
  ];

  const handleScheduleViewing = () => {
    toast({
      title: "Viewing Scheduled!",
      description: "We'll contact you to confirm your viewing appointment.",
    });
  };

  const handleContact = () => {
    toast({
      title: "Contact Request Sent!",
      description: "Our agent will call you within the next hour.",
    });
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from Favorites" : "Added to Favorites",
      description: isFavorited ? "Property removed from your favorites" : "Property saved to your favorites",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Property link copied to clipboard",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative h-96 overflow-hidden rounded-t-lg">
            <img 
              src={additionalImages[currentImageIndex]} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            
            {/* Image Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {additionalImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
                onClick={handleFavorite}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            
            {property.featured && (
              <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-gold-foreground">
                Featured
              </Badge>
            )}
            
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-luxury-navy px-4 py-2 rounded-full text-xl font-bold">
              {property.price}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-light text-luxury-navy mb-2">
                  {property.title}
                </h2>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.location}
                </div>
              </div>
            </div>
            
            {/* Property Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-secondary/30 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Bed className="h-6 w-6 text-luxury-gold mr-2" />
                  <span className="text-2xl font-bold text-luxury-navy">{property.beds}</span>
                </div>
                <p className="text-muted-foreground">Bedrooms</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Bath className="h-6 w-6 text-luxury-gold mr-2" />
                  <span className="text-2xl font-bold text-luxury-navy">{property.baths}</span>
                </div>
                <p className="text-muted-foreground">Bathrooms</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Square className="h-6 w-6 text-luxury-gold mr-2" />
                  <span className="text-2xl font-bold text-luxury-navy">{property.sqft}</span>
                </div>
                <p className="text-muted-foreground">Square Feet</p>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-luxury-navy mb-4">Premium Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {propertyFeatures.map((feature, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-luxury-navy mb-4">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                This exceptional property offers unparalleled luxury living with breathtaking views and world-class amenities. 
                Featuring premium finishes, spacious layouts, and exclusive access to resort-style facilities, this residence 
                represents the pinnacle of sophisticated urban living. Every detail has been meticulously crafted to provide 
                an extraordinary lifestyle experience.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="luxury" 
                size="lg" 
                className="flex-1"
                onClick={handleScheduleViewing}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Viewing
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={handleContact}
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;