import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import coffeeHero from "@/assets/coffee-hero.jpg";
import menuItems from "@/assets/menu-items.jpg";

const FeaturedMenu = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Mahato Signature Latte",
      description: "Espresso premium dengan steamed milk dan latte art eksklusif",
      price: "Rp 45.000",
      image: coffeeHero,
      rating: 4.9,
      isSignature: true,
      category: "Hot Coffee"
    },
    {
      id: 2,
      name: "Ocean Blue Smoothie",
      description: "Smoothie segar dengan kombinasi blueberry dan coconut",
      price: "Rp 38.000",
      image: menuItems,
      rating: 4.8,
      isSignature: true,
      category: "Cold Drinks"
    },
    {
      id: 3,
      name: "Rooftop Sunrise Coffee",
      description: "Cold brew dengan sirup karamel dan whipped cream",
      price: "Rp 42.000",
      image: coffeeHero,
      rating: 4.7,
      isSignature: false,
      category: "Cold Coffee"
    },
    {
      id: 4,
      name: "Jakarta Skyline Cake",
      description: "Layer cake dengan vanilla cream dan fresh strawberry",
      price: "Rp 35.000",
      image: menuItems,
      rating: 4.9,
      isSignature: true,
      category: "Dessert"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-sky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Menu Favorit
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Signature <span className="text-primary">Coffee & More</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati menu signature kami yang telah menjadi favorit pengunjung Coffee Mahato Rooftop
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-background border-0 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.isSignature && (
                    <Badge className="bg-accent text-accent-foreground">
                      Signature
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-background/90">
                    {item.category}
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 hover:bg-background text-foreground hover:text-primary"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-foreground">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {item.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary-dark text-white"
                  >
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
          >
            Lihat Menu Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;