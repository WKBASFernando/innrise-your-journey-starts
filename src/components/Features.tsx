import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, MapIcon, ShieldCheckIcon, HeartIcon, WifiIcon, CarIcon } from "lucide-react";

const features = [
  {
    icon: StarIcon,
    title: "Premium Selection",
    description: "Handpicked luxury hotels and boutique properties that exceed expectations"
  },
  {
    icon: MapIcon,
    title: "Global Destinations", 
    description: "Discover amazing places around the world with our extensive network"
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Booking",
    description: "Safe and encrypted transactions with instant confirmation guarantee"
  },
  {
    icon: HeartIcon,
    title: "Personalized Service",
    description: "Tailored recommendations based on your preferences and travel style"
  },
  {
    icon: WifiIcon,
    title: "Smart Amenities",
    description: "Modern facilities and technology-enhanced comfort in every stay"
  },
  {
    icon: CarIcon,
    title: "Seamless Experience",
    description: "From booking to checkout, enjoy a smooth and hassle-free journey"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-sunrise bg-clip-text text-transparent">InnRise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of luxury, comfort, and innovation that makes every stay memorable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-sunrise rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;