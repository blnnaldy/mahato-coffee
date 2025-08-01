import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";
import heroImage from "@/assets/hero-rooftop.jpg";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Jazz Night Under The Stars",
      date: "2024-02-15",
      time: "19:00 - 22:00",
      location: "Rooftop Main Stage",
      capacity: "80 orang",
      price: "Rp 150.000",
      description: "Nikmati malam yang romantis dengan live jazz performance dan pemandangan Jakarta yang memukau",
      image: heroImage,
      category: "Music",
      featured: true
    },
    {
      id: 2,
      title: "Coffee Cupping Workshop",
      date: "2024-02-20",
      time: "10:00 - 12:00",
      location: "Private Room",
      capacity: "15 orang",
      price: "Rp 95.000",
      description: "Pelajari seni mencicipi kopi dengan barista profesional kami",
      image: interiorImage,
      category: "Workshop",
      featured: false
    },
    {
      id: 3,
      title: "Sunset Yoga Session",
      date: "2024-02-25",
      time: "17:30 - 19:00",
      location: "Rooftop Terrace",
      capacity: "25 orang",
      price: "Rp 75.000",
      description: "Yoga santai sambil menikmati sunset Jakarta yang spektakuler",
      image: heroImage,
      category: "Wellness",
      featured: false
    },
    {
      id: 4,
      title: "Valentine's Special Dinner",
      date: "2024-02-14",
      time: "18:00 - 22:00",
      location: "Rooftop Premium Area",
      capacity: "40 orang",
      price: "Rp 350.000",
      description: "Dinner romantis dengan menu spesial dan live acoustic music",
      image: heroImage,
      category: "Special",
      featured: true
    }
  ];

  const eventCategories = ["Semua", "Music", "Workshop", "Wellness", "Special"];

  const eventTypes = [
    {
      icon: Users,
      title: "Private Events",
      description: "Acara pribadi dengan setup eksklusif untuk moment spesial Anda",
      features: ["Kapasitas 20-100 orang", "Menu kustomisasi", "Dekorasi sesuai tema", "Dedicated event coordinator"]
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Meeting, workshop, atau team building dengan suasana yang inspiratif",
      features: ["Fasilitas presentasi", "Catering package", "WiFi high-speed", "Professional service"]
    },
    {
      icon: Clock,
      title: "Regular Events",
      description: "Event rutin mingguan dan bulanan yang bisa Anda ikuti",
      features: ["Jazz night mingguan", "Coffee workshop", "Yoga session", "Art exhibition"]
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
              Event & <span className="text-primary">Workshop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bergabunglah dengan berbagai acara menarik di rooftop dengan pemandangan Jakarta terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Event <span className="text-primary">Mendatang</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jangan lewatkan acara-acara spesial yang telah kami persiapkan untuk Anda
            </p>
          </div>

          {/* Event Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {eventCategories.map((category) => (
              <Button
                key={category}
                variant={category === "Semua" ? "default" : "outline"}
                size="sm"
                className={category === "Semua" ? "bg-primary text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden ${
                  event.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`grid ${event.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        event.featured ? 'h-64 lg:h-full' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-accent text-accent-foreground">
                        {event.category}
                      </Badge>
                      {event.featured && (
                        <Badge className="bg-primary text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">Mulai dari</span>
                        <div className="text-xl font-bold text-primary">{event.price}</div>
                      </div>
                      <Button className="bg-primary hover:bg-primary-dark text-white flex items-center space-x-2">
                        <span>Daftar Sekarang</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Jenis <span className="text-primary">Event</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai jenis acara yang bisa disesuaikan dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-card hover:shadow-ocean transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            Ingin Mengadakan Event di Coffee Mahato?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-3"
            >
              Konsultasi Event
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;