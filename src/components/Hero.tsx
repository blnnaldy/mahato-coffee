import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-rooftop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Mahato Coffee" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-background">Jakarta barat</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-background">4.9</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            Mahato Coffee
            <span className="block text-primary">Rooftop</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-background/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nikmati secangkir kopi premium dengan pemandangan Jakarta yang menakjubkan. 
            Suasana rooftop yang estetik dengan nuansa biru laut dan putih.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg shadow-ocean hover:scale-105 transition-all duration-300"
            >
              Reservasi Meja
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-background text-background hover:bg-background hover:text-foreground px-8 py-3 text-lg backdrop-blur-md"
            >
              Lihat Menu
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-background/10 backdrop-blur-md rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-background/80">Menu Spesial</div>
            </div>
            <div className="text-center p-4 bg-background/10 backdrop-blur-md rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">360°</div>
              <div className="text-sm text-background/80">City View</div>
            </div>
            <div className="text-center p-4 bg-background/10 backdrop-blur-md rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">4.9+</div>
              <div className="text-sm text-background/80">Rating di Google Review</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-background/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;