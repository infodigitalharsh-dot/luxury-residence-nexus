import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GetStartedModal from "@/components/GetStartedModal";
import PropertyModal from "@/components/PropertyModal";
import AutoShowModal from "@/components/AutoShowModal";

const Index = () => {
  console.log("Index component is rendering...");
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onGetStarted={() => setIsGetStartedOpen(true)} />
      <Hero onGetStarted={() => setIsGetStartedOpen(true)} />
      <FeaturedProperties onPropertyClick={handlePropertyClick} />
      <About />
      <Services />
      <Contact />
      <Footer />
      
      {/* Modals */}
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
      
      <AutoShowModal />
    </div>
  );
};

export default Index;
