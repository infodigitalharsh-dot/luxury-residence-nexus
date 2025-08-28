import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  onGetStarted: () => void;
}

const Navigation = ({ onGetStarted }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-black/90 backdrop-blur-xl shadow-2xl rounded-b-3xl mx-4 mt-2" 
        : "bg-black/20 backdrop-blur-sm rounded-full mx-4 mt-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-xl font-light text-white">
              <span className="font-normal">LOGO</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-accent transition-colors duration-300 border-b-2 border-accent"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <span className="text-white">Blogs</span>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={onGetStarted}
              variant="luxury" 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black font-medium rounded-full px-6 py-2 transition-all duration-300"
            >
              Let's Talk →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl rounded-2xl mt-2 p-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-accent transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <span className="text-white py-2">Blogs</span>
              <Button 
                onClick={() => {
                  onGetStarted();
                  setIsMobileMenuOpen(false);
                }}
                variant="luxury" 
                size="lg" 
                className="mt-4 bg-accent hover:bg-accent/90 text-black rounded-full"
              >
                Let's Talk →
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;