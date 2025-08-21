import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Journey
            <span className="block bg-gradient-sunrise bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover extraordinary hotels that rise with you. Experience luxury, comfort, and fresh beginnings at every destination.
          </p>
          
          {/* Search Bar */}
          <div className="bg-gradient-card backdrop-blur-md rounded-2xl p-8 shadow-luxury mb-8 max-w-4xl mx-auto border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Destination" 
                  className="pl-10 h-12 border-0 bg-background/50 backdrop-blur-sm"
                />
              </div>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Check-in" 
                  className="pl-10 h-12 border-0 bg-background/50 backdrop-blur-sm"
                />
              </div>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Check-out" 
                  className="pl-10 h-12 border-0 bg-background/50 backdrop-blur-sm"
                />
              </div>
              <div className="relative">
                <UsersIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Guests" 
                  className="pl-10 h-12 border-0 bg-background/50 backdrop-blur-sm"
                />
              </div>
            </div>
            <Button variant="hero" size="lg" className="w-full md:w-auto mt-6 px-12 h-14 text-lg">
              Search Hotels
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="lg" className="px-8">
              Explore Destinations
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
              Watch Video
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;