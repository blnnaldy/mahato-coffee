import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokasi",
      content: ["3, Jl. Kyai H. Taisir No.2 B, RW.11, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480"],
      link: "https://maps.app.goo.gl/BR5H4b47y7EyStDo9"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: ["+6282246239567"],
      link: "https://api.whatsapp.com/send/?phone=6282246239567&text&type=phone_number&app_absent=0"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["hello@mahatoidn.com", "reservation@coffeemahato.com"],
      link: "mailto:hello@coffeemahato.com"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: ["Senin-Minggu: 16:00 - 03:00"],
      link: null
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ada pertanyaan atau ingin melakukan reservasi? Kami siap membantu Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-muted-foreground">
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="hover:text-primary transition-colors"
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      Nama Depan
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="Masukkan nama depan"
                      className="border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Nama Belakang
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Masukkan nama belakang"
                      className="border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="contoh@email.com"
                      className="border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Nomor Telepon
                    </Label>
                    <Input 
                      id="phone" 
                      placeholder="+62 82246239567"
                      className="border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subjek
                  </Label>
                  <Input 
                    id="subject" 
                    placeholder="Subjek pesan"
                    className="border-border focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Pesan
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tulis pesan Anda disini..."
                    rows={5}
                    className="border-border focus:ring-primary focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-dark text-white flex items-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Kirim Pesan</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 animate-fade-in">
          <Card className="border-0 shadow-card overflow-hidden">
            <div className="bg-gradient-ocean p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Temukan Lokasi Kami</h3>
              <p className="text-white/90">
                Coffee Mahato Rooftop terletak strategis di jantung Jakarta dengan akses mudah
              </p>
            </div>
            <div className="h-80 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Integrasi Google Maps akan tersedia di sini
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.open('https://www.google.com/maps/place/Mahato+Coffee+Rooftop/@-6.2000936,106.7876543,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f781f7ed59ad:0xc1cc5eb5e9a26b84!8m2!3d-6.2000936!4d106.7876543!16s%2Fg%2F11sg_fl3m6?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                >
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
