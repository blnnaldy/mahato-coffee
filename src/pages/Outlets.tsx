import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Navigation, Wifi, Car, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-rooftop.jpg";
import interiorImage from "@/assets/interior.jpg";

const OutletsPage = () => {
  const outlets = [
    {
      id: 1,
      name: "Coffee Mahato Rooftop - Sudirman",
      address: "Jl. Sudirman No. 123, Jakarta Pusat",
      phone: "+62 21 1234 5678",
      hours: "07:00 - 22:00 (Sen-Jum) | 08:00 - 23:00 (Sab-Min)",
      rating: 4.8,
      reviews: 1250,
      image: heroImage,
      features: ["Rooftop 360°", "WiFi Free", "Parking Area", "AC", "Non-Smoking"],
      isMain: true,
      coordinates: { lat: -6.2088, lng: 106.8456 }
    },
    {
      id: 2,
      name: "Coffee Mahato - Plaza Indonesia",
      address: "Plaza Indonesia Level 3, Jakarta Pusat",
      phone: "+62 21 1234 5679",
      hours: "10:00 - 22:00 (Setiap Hari)",
      rating: 4.7,
      reviews: 850,
      image: interiorImage,
      features: ["Indoor Only", "WiFi Free", "Mall Parking", "AC", "Kids Friendly"],
      isMain: false,
      coordinates: { lat: -6.1944, lng: 106.8231 }
    },
    {
      id: 3,
      name: "Coffee Mahato - Kemang",
      address: "Jl. Kemang Raya No. 45, Jakarta Selatan",
      phone: "+62 21 1234 5680",
      hours: "08:00 - 21:00 (Setiap Hari)",
      rating: 4.6,
      reviews: 645,
      image: interiorImage,
      features: ["Garden View", "WiFi Free", "Street Parking", "AC", "Pet Friendly"],
      isMain: false,
      coordinates: { lat: -6.2615, lng: 106.8106 }
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi", description: "High-speed internet untuk work & study" },
    { icon: Car, name: "Parking", description: "Area parkir yang aman dan luas" },
    { icon: CreditCard, name: "Cashless", description: "Pembayaran dengan kartu dan e-wallet" },
    { icon: Phone, name: "24/7 Support", description: "Customer service siap membantu" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Lokasi <span className="text-primary">Outlet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Temukan Coffee Mahato terdekat di berbagai lokasi strategis Jakarta
            </p>
          </div>
        </div>
      </section>

      {/* Main Outlet Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge className="bg-primary text-white mb-4">Flagship Store</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Outlet <span className="text-primary">Utama</span>
            </h2>
          </div>

          <Card className="overflow-hidden border-0 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={outlets[0].image} 
                  alt={outlets[0].name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    Main Store
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl text-foreground mb-4">
                  {outlets[0].name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outlets[0].address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{outlets[0].phone}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outlets[0].hours}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-400 fill-current flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {outlets[0].rating} ({outlets[0].reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Fasilitas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {outlets[0].features.map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-primary hover:bg-primary-dark text-white flex items-center space-x-2">
                    <Navigation className="h-4 w-4" />
                    <span>Petunjuk Arah</span>
                  </Button>
                  <Button variant="outline">
                    Reservasi Meja
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Outlets */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Outlet <span className="text-primary">Lainnya</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nikmati kopi premium Coffee Mahato di berbagai lokasi favorit Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outlets.slice(1).map((outlet, index) => (
              <Card 
                key={outlet.id} 
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={outlet.image} 
                    alt={outlet.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{outlet.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">
                    {outlet.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{outlet.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{outlet.phone}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{outlet.hours}</span>
                    </div>
                  </div>

                   <div className="mb-4">
                     <div className="flex flex-wrap gap-1">
                       {outlet.features.slice(0, 3).map((feature, featureIndex) => (
                         <Badge key={featureIndex} variant="secondary" className="text-xs">
                           {feature}
                         </Badge>
                       ))}
                     </div>
                   </div>

                   <div className="flex gap-2">
                     <Button size="sm" className="bg-primary hover:bg-primary-dark text-white flex-1">
                       <Navigation className="h-4 w-4 mr-1" />
                       Arah
                     </Button>
                     <Button size="sm" variant="outline" className="flex-1">
                       Info Detail
                     </Button>
                   </div>
                </CardContent>
               </Card>
             ))}
           </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Fasilitas <span className="text-primary">Umum</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fasilitas lengkap yang tersedia di setiap outlet Coffee Mahato
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-card hover:shadow-ocean transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {amenity.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ingin Membuka Franchise Coffee Mahato?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan jaringan Coffee Mahato dan raih kesuksesan bersama
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-3"
          >
            Pelajari Franchise
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutletsPage;
