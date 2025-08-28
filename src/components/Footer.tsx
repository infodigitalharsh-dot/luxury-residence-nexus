import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Luxury Sales", href: "#" },
    { name: "Investment Advisory", href: "#" },
    { name: "Property Management", href: "#" },
    { name: "Luxury Rentals", href: "#" },
  ];

  const locations = [
    { name: "Dubai, UAE", href: "#" },
    { name: "Miami, FL", href: "#" },
    { name: "New York, NY", href: "#" },
    { name: "Los Angeles, CA", href: "#" },
  ];

  return (
    <footer className="bg-luxury-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-light mb-4">
              <span className="font-normal">Luxury</span>
              <span className="text-luxury-gold">Residence</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner in luxury real estate across Dubai and the United States. 
              Exceptional properties for exceptional clients.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button variant="luxury">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-white/70 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-medium mb-6">Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location.name}>
                  <a 
                    href={location.href} 
                    className="text-white/70 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0">
            © 2024 Luxury Residence. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors duration-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;