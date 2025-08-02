import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Handshake, TrendingUp, Users, Award, Send, CheckCircle } from "lucide-react";

const PartnershipPage = () => {
  const partnershipTypes = [
    {
      icon: Handshake,
      title: "Franchise Partnership",
      description: "Bergabunglah dengan jaringan Coffee Mahato dan miliki outlet sendiri",
      investment: "Mulai dari Rp 500 juta",
      benefits: [
        "Brand recognition tinggi",
        "Training komprehensif",
        "Marketing support",
        "Ongoing operational support"
      ],
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Investor Partnership",
      description: "Investasi dalam pengembangan outlet baru Coffee Mahato",
      investment: "Mulai dari Rp 1 miliar",
      benefits: [
        "ROI hingga 25% per tahun",
        "Passive income stream",
        "Strategic location guarantee",
        "Professional management"
      ],
      popular: false
    },
    {
      icon: Users,
      title: "Corporate Partnership",
      description: "Kerjasama untuk employee benefits dan corporate catering",
      investment: "Customized package",
      benefits: [
        "Corporate discount",
        "Office delivery service",
        "Event catering",
        "Flexible payment terms"
      ],
      popular: false
    }
  ];

  const franchiseSteps = [
    {
      step: "1",
      title: "Konsultasi Awal",
      description: "Diskusi kebutuhan dan analisis lokasi potensial"
    },
    {
      step: "2",
      title: "Due Diligence",
      description: "Verifikasi finansial dan legal requirements"
    },
    {
      step: "3",
      title: "Agreement",
      description: "Penandatanganan kontrak franchise"
    },
    {
      step: "4",
      title: "Setup & Training",
      description: "Persiapan outlet dan pelatihan tim"
    },
    {
      step: "5",
      title: "Grand Opening",
      description: "Launching outlet dengan dukungan marketing"
    }
  ];

  const successStories = [
    {
      name: "PT Kopi Sukses Makmur",
      location: "Bandung, Jawa Barat",
      revenue: "Rp 150 juta/bulan",
      description: "Franchise pertama kami di luar Jakarta yang mencapai target revenue dalam 6 bulan"
    },
    {
      name: "CV Mahato Sejahtera",
      location: "Surabaya, Jawa Timur",
      revenue: "Rp 200 juta/bulan",
      description: "Ekspansi ke 3 outlet dalam 2 tahun dengan tingkat kepuasan pelanggan 4.9/5"
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
              Partnership & <span className="text-primary">Franchise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bergabunglah dengan Coffee Mahato dan raih kesuksesan bersama dalam industri F&B
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Jenis <span className="text-primary">Partnership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih model kerjasama yang sesuai dengan visi dan kemampuan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card 
                key={index} 
                className={`relative p-6 border-0 shadow-card hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 ${
                  type.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {type.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-0">
                  <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center mb-6">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-foreground mb-3">
                    {type.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">Investment:</span>
                    <div className="text-lg font-bold text-primary">{type.investment}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      type.popular 
                        ? 'bg-primary hover:bg-primary-dark text-white' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proses <span className="text-primary">Franchise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Langkah mudah untuk menjadi partner franchise Coffee Mahato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {franchiseSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="h-16 w-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < franchiseSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kisah sukses partner-partner Coffee Mahato di seluruh Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 border-0 shadow-card">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">Monthly Revenue:</span>
                    <div className="text-xl font-bold text-primary">{story.revenue}</div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {story.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Mulai <span className="text-primary">Partnership</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
              </p>
            </div>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">
                  Partnership Inquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">
                      Nama Perusahaan
                    </Label>
                    <Input 
                      id="company" 
                      placeholder="PT. Company Name"
                      className="border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson" className="text-foreground">
                      Contact Person
                    </Label>
                    <Input 
                      id="contactPerson" 
                      placeholder="Nama lengkap"
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
                      placeholder="company@email.com"
                      className="border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Nomor Telepon
                    </Label>
                    <Input 
                      id="phone" 
                      placeholder="+62 812 3456 7890"
                      className="border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnershipType" className="text-foreground">
                    Jenis Partnership
                  </Label>
                  <select 
                    id="partnershipType"
                    className="w-full px-3 py-2 border border-border rounded-md focus:ring-primary focus:border-primary bg-background"
                  >
                    <option value="">Pilih jenis partnership</option>
                    <option value="franchise">Franchise Partnership</option>
                    <option value="investor">Investor Partnership</option>
                    <option value="corporate">Corporate Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investment" className="text-foreground">
                    Budget Investment (Opsional)
                  </Label>
                  <Input 
                    id="investment" 
                    placeholder="Rp 500.000.000"
                    className="border-border focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Pesan & Pertanyaan
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ceritakan rencana dan pertanyaan Anda..."
                    rows={5}
                    className="border-border focus:ring-primary focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-dark text-white flex items-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Kirim Inquiry</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Siap Bergabung dengan Coffee Mahato?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari revolusi coffee shop rooftop di Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-3"
            >
              Download Franchise Kit
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
            >
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnershipPage;
