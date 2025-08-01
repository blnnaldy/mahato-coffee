import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, Filter } from "lucide-react";
import coffeeHero from "@/assets/coffee-hero.jpg";
import menuItems from "@/assets/menu-items.jpg";

const MenuPage = () => {
  const menuCategories = [
    {
      id: "hot-coffee",
      name: "Hot Coffee",
      items: [
        {
          name: "Mahato Signature Latte",
          description: "Espresso premium dengan steamed milk dan latte art eksklusif",
          price: "Rp 45.000",
          image: coffeeHero,
          rating: 4.9,
          isSignature: true,
          isPopular: true
        },
        {
          name: "Cappuccino Classic",
          description: "Perfect balance antara espresso, steamed milk, dan milk foam",
          price: "Rp 38.000",
          image: coffeeHero,
          rating: 4.7,
          isSignature: false,
          isPopular: true
        },
        {
          name: "Americano Premium",
          description: "Double shot espresso dengan hot water, bold dan rich flavor",
          price: "Rp 32.000",
          image: coffeeHero,
          rating: 4.6,
          isSignature: false,
          isPopular: false
        },
        {
          name: "Flat White Australia",
          description: "Double shot espresso dengan microfoam steamed milk",
          price: "Rp 42.000",
          image: coffeeHero,
          rating: 4.8,
          isSignature: false,
          isPopular: true
        }
      ]
    },
    {
      id: "cold-coffee",
      name: "Cold Coffee",
      items: [
        {
          name: "Rooftop Sunrise Coffee",
          description: "Cold brew dengan sirup karamel dan whipped cream",
          price: "Rp 42.000",
          image: coffeeHero,
          rating: 4.7,
          isSignature: true,
          isPopular: true
        },
        {
          name: "Iced Latte Vanilla",
          description: "Espresso dengan cold milk dan vanilla syrup yang menyegarkan",
          price: "Rp 40.000",
          image: coffeeHero,
          rating: 4.6,
          isSignature: false,
          isPopular: true
        },
        {
          name: "Cold Brew Original",
          description: "12-hour cold extracted coffee, smooth dan naturally sweet",
          price: "Rp 35.000",
          image: coffeeHero,
          rating: 4.5,
          isSignature: false,
          isPopular: false
        }
      ]
    },
    {
      id: "non-coffee",
      name: "Non-Coffee",
      items: [
        {
          name: "Ocean Blue Smoothie",
          description: "Smoothie segar dengan kombinasi blueberry dan coconut",
          price: "Rp 38.000",
          image: menuItems,
          rating: 4.8,
          isSignature: true,
          isPopular: true
        },
        {
          name: "Matcha Latte Premium",
          description: "Japanese matcha powder dengan steamed milk",
          price: "Rp 43.000",
          image: menuItems,
          rating: 4.7,
          isSignature: false,
          isPopular: true
        },
        {
          name: "Chocolate Heaven",
          description: "Rich hot chocolate dengan whipped cream dan marshmallow",
          price: "Rp 36.000",
          image: menuItems,
          rating: 4.6,
          isSignature: false,
          isPopular: false
        }
      ]
    },
    {
      id: "food",
      name: "Food & Dessert",
      items: [
        {
          name: "Jakarta Skyline Cake",
          description: "Layer cake dengan vanilla cream dan fresh strawberry",
          price: "Rp 35.000",
          image: menuItems,
          rating: 4.9,
          isSignature: true,
          isPopular: true
        },
        {
          name: "Croissant Butter",
          description: "Freshly baked croissant dengan premium butter",
          price: "Rp 28.000",
          image: menuItems,
          rating: 4.5,
          isSignature: false,
          isPopular: false
        },
        {
          name: "Avocado Toast",
          description: "Multigrain bread dengan mashed avocado dan poached egg",
          price: "Rp 45.000",
          image: menuItems,
          rating: 4.7,
          isSignature: false,
          isPopular: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Menu <span className="text-primary">Spesial</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nikmati koleksi lengkap kopi premium dan makanan lezat di Coffee Mahato Rooftop
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-sm">
                50+ Menu Pilihan
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Premium Quality
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Fresh Daily
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="hot-coffee" className="w-full">
            {/* Menu Navigation */}
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-1 lg:h-auto bg-muted/50 p-1">
                {menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="lg:justify-start lg:px-6 lg:py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Filter Options */}
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Semua Menu</span>
                </Button>
                <Button variant="outline" size="sm">
                  SIGNATURE COFFEE SERIES
                </Button>
                <Button variant="outline" size="sm">
                  ESPRESSO BASE
                </Button>
                <Button variant="outline" size="sm">
                  NON COFFEE
                  </Button>
                <Button variant="outline" size="sm">
                  YOGURT SERIES
                  
                </Button>
              </div>
            </div>

            {/* Menu Content */}
            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Card 
                      key={index} 
                      className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
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
                          {item.isPopular && (
                            <Badge variant="secondary" className="bg-primary text-white">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 hover:bg-background text-foreground hover:text-primary"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-foreground">{item.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-primary">
                            {item.price}
                          </span>
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary-dark text-white"
                          >
                            Pesan Sekarang
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Promo Spesial Hari Ini
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Jangan lewatkan penawaran menarik untuk pengalaman ngopi yang lebih hemat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Happy Hour</h3>
                <p className="text-white/80 mb-4">Diskon 20% untuk semua menu coffee</p>
                <p className="text-sm text-white/70">Setiap hari 14:00 - 17:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Weekend Special</h3>
                <p className="text-white/80 mb-4">Beli 2 dapat 1 untuk dessert</p>
                <p className="text-sm text-white/70">Sabtu & Minggu</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Member Exclusive</h3>
                <p className="text-white/80 mb-4">Cashback 10% untuk member</p>
                <p className="text-sm text-white/70">Daftar membership gratis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;