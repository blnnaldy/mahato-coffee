import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Users, Award, Heart } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Kopi berkualitas tinggi dari biji pilihan dengan roasting sempurna"
    },
    {
      icon: Users,
      title: "Pengalaman Berkesan",
      description: "Suasana rooftop yang nyaman dengan pelayanan terbaik"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Penerima penghargaan Coffee Shop Terbaik Jakarta 2024"
    },
    {
      icon: Heart,
      title: "Dibuat dengan Cinta",
      description: "Setiap cangkir disajikan dengan dedikasi dan passion tinggi"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Tentang <span className="text-primary">Mahato Coffee</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Berlokasi di jantung Jakarta, Coffee Mahato Rooftop menghadirkan pengalaman ngopi 
                yang tak terlupakan dengan pemandangan skyline kota yang menakjubkan. Dengan konsep 
                estetik biru laut dan putih, kami menciptakan suasana yang menenangkan di tengah 
                hiruk pikuk kota.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sejak 2021, kami berkomitmen untuk menyajikan kopi premium berkualitas tinggi 
                dengan pelayanan yang hangat dan ramah. Setiap cangkir kopi dibuat dengan 
                passion dan dedikasi untuk memberikan pengalaman terbaik bagi setiap pengunjung.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Rating Google</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Menu Variants</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={interiorImage} 
                alt="Coffee Mahato Interior" 
                className="w-full h-[500px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-background border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Best Coffee Shop</div>
                    <div className="text-sm text-muted-foreground">Jakarta 2021</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-background"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;