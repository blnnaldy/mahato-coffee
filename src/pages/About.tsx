import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Users, Award, Heart, Target, Eye } from "lucide-react";
import outletImage from "@/assets/outlet.jpg";

const AboutPage = () => {
  const team = [
    {
      name: "Adjie Anas Setiawan",
      role: "Founder & CEO",
      description: "Passionate coffee enthusiast dengan pengalaman 15 tahun di industri F&B"
    },
    {
      name: "Sarah Williams",
      role: "Head Barista",
      description: "Certified barista dengan keahlian latte art dan coffee roasting"
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      description: "Experienced operations manager yang memastikan kualitas pelayanan terbaik"
    }
  ];

  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      description: "Kami berkomitmen untuk selalu menyajikan kopi berkualitas premium dengan biji pilihan terbaik."
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Setiap pengunjung adalah prioritas kami. Pelayanan hangat dan ramah adalah standar kami."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Kami terus berinovasi dan meningkatkan standar untuk memberikan yang terbaik."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Cinta terhadap kopi dan dedikasi dalam setiap cangkir yang kami sajikan."
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
              Tentang <span className="text-primary">Mahato Coffee</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perjalanan kami dalam menghadirkan pengalaman ngopi terbaik di rooftop Jakarta
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                 Di sebuah desa kecil bernama Mahato, tersembunyi di kaki pegunungan yang sejuk dan berkabut, tumbuh subur pohon-pohon kopi yang telah dirawat turun-temurun oleh para petani lokal. Desa Mahato bukan hanya sebuah tempat—ia adalah simbol ketenangan, kerja keras, dan kehangatan kebersamaan.
                </p>
                <p>
                 Nama Mahato dipilih bukan sekadar untuk mengenang kampung halaman, tetapi untuk membawa semangat desa tersebut ke dalam setiap cangkir kopi yang kami sajikan. Di Mahato, kopi bukan hanya minuman—kopi adalah budaya. Setiap biji dipetik dengan tangan, disortir dengan hati, dan diolah dengan cinta.
                </p>
                <p>
                  Hari ini, Coffee Mahato Rooftop telah menjadi destinasi favorit para penikmat kopi di Jakarta, 
                  dengan rating 4.8 bintang dan lebih dari 10.000 pelanggan setia yang telah merasakan 
                  kehangatan hospitality kami.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src={outletImage} 
                alt="Coffee Mahato Story" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Misi Kami</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Menyajikan kopi premium berkualitas tinggi dalam suasana rooftop yang nyaman dan estetik, 
                  sambil memberikan pelayanan terbaik yang membuat setiap pengunjung merasa istimewa dan 
                  terinspirasi.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Visi Kami</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Menjadi coffee shop rooftop terdepan di Jakarta yang dikenal dengan kualitas kopi premium, 
                  suasana yang menginspirasi, dan menjadi tempat berkumpul favorit bagi komunitas pecinta kopi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai <span className="text-primary">Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip dan nilai yang menjadi fondasi dalam setiap aspek pelayanan Coffee Mahato Rooftop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0"
              >
                <CardContent className="p-0">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Tim <span className="text-primary">Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Orang-orang berdedikasi di balik Coffee Mahato Rooftop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-card">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
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
            Bergabunglah dengan Keluarga Coffee Mahato
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rasakan pengalaman ngopi terbaik di rooftop Jakarta bersama kami
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-3"
          >
            Kunjungi Kami Sekarang
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
