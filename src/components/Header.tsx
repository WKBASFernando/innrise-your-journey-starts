import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-sunrise rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">I</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            InnRise
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Hotels
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Destinations
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button variant="hero">
            Book Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;