import { useState, useEffect } from "react";
import GetStartedModal from "./GetStartedModal";

const AutoShowModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user is a first-time visitor
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasVisitedBefore', 'true');
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <GetStartedModal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)} 
    />
  );
};

export default AutoShowModal;