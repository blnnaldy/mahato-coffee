import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, ArrowRight } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";
import heroImage from "@/assets/hero-rooftop.jpg";
import eventMusic from "@/assets/event-music.jpg";

const ActivitiesPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sewa Avenue Roofop",
      location: "Rooftop Main Stage",
      capacity: "80 orang",
      description: "Untuk Weeding Dan Event Lainnya",
      image: heroImage,
      category: "Sewa Avenue",
      featured: true
    },
    {
      id: 2,
      title: "Live Music Acoustic",
      location: "Exterior Lounge",
      capacity: "50 orang",
      description: "Nikmati musik akustik dari musisi lokal setiap akhir pekan",
      image: eventMusic,
      category: "Live Music Acoustic",
      featured: false
    },
    {
      id: 3,
      title: "Birthday Package",
      location: "Rooftop Terrace",
      capacity: "50 orang",
      description: "Paket ulang tahun lengkap dengan dekorasi dan catering",
      image: heroImage,
      category: "Birthday Package",
      featured: false
    },
    {
      id: 4,
      title: "Nobar Live Timnas",
      location: "Rooftop Premium Area",
      capacity: "50 orang",
      description: "Nonton bareng pertandingan timnas dengan suasana yang meriah",
      image: heroImage,
      category: "Event Nobar Timnas",
      featured: true
    }
  ];

  const eventCategories = ["Sewa Avenue", "Live Music Acoustic", "Birthday Package", "Event Nobar Timnas"];

  const eventTypes = [
    {
      icon: Users,
      title: "Acara Pribadi",
      description: "Acara pribadi dengan setup eksklusif untuk momen spesial Anda",
      features: ["Kapasitas 20-100 orang", "Menu kustomisasi", "Dekorasi sesuai tema", "Dedicated event coordinator"]
    },
    {
      icon: MapPin,
      title: "Acara Perusahaan",
      description: "Meeting, workshop, atau team building dengan suasana yang inspiratif",
      features: ["Fasilitas presentasi", "Catering package", "WiFi high-speed", "Professional service"]
    },
    {
      icon: Badge,
      title: "Acara Rutin",
      description: "Event mingguan dan bulanan yang bisa Anda ikuti",
      features: ["Jazz night mingguan", "Workshop kopi", "Sesi yoga", "Pameran seni"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 pb-16 bg-gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Aktivitas & <span className="text-primary">Workshop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ikuti beragam kegiatan inspiratif di rooftop terbaik di Jakarta
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Daftar <span className="text-primary">Aktivitas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah pilihan aktivitas menarik yang tersedia di Mahato Coffee
            </p>
          </div>

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden ${
                  event.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`grid ${event.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-accent text-accent-foreground">
                        {event.category}
                      </Badge>
                      {event.featured && (
                        <Badge className="bg-primary text-white">
                          Unggulan
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
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
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

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Jenis <span className="text-primary">Aktivitas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai jenis kegiatan yang bisa disesuaikan dengan kebutuhan Anda
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

      <section className="py-16 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ingin Mengadakan Aktivitas di Mahato Coffee?
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
              Konsultasi Aktivitas
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
            >
              Unduh Brosur
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ActivitiesPage;
