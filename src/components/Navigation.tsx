import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { AGENCY_CONFIG } from "@/config/constants";

interface NavigationProps {
  onGetStarted: () => void;
}

const Navigation = ({ onGetStarted }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Properties", link: "/properties" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Locations", link: "/locations" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo logo={AGENCY_CONFIG.logo} />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton 
            variant="secondary"
            href="/"
            as="a"
          >
            Blogs
          </NavbarButton>
          <NavbarButton 
            variant="luxury"
            onClick={onGetStarted}
          >
            Let's Talk →
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo logo={AGENCY_CONFIG.logo} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <Link
            to="/"
            className="text-white hover:text-accent transition-colors duration-300 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-accent transition-colors duration-300 py-2"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/blog"
            className="text-white hover:text-accent transition-colors duration-300 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton
              onClick={() => {
                onGetStarted();
                setIsMobileMenuOpen(false);
              }}
              variant="luxury"
              className="w-full"
            >
              Let's Talk →
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;