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
      description: "Miliki outlet Coffee Mahato Anda sendiri dengan sistem dan dukungan profesional.",
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
      description: "Dukung ekspansi Mahato dan nikmati passive income dari outlet-outlet kami.",
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
      description: "Paket khusus untuk kebutuhan perusahaan seperti catering & employee benefits.",
      investment: "Custom package",
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
      title: "Konsultasi Awal",
      description: "Diskusi kebutuhan dan analisis lokasi potensial"
    },
    {
      title: "Due Diligence",
      description: "Verifikasi finansial dan kelayakan lokasi"
    },
    {
      title: "Agreement",
      description: "Penandatanganan kontrak franchise"
    },
    {
      title: "Setup & Training",
      description: "Persiapan outlet dan pelatihan tim operasional"
    },
    {
      title: "Grand Opening",
      description: "Launching outlet dengan dukungan promosi"
    }
  ];

  const successStories = [
    {
      name: "PT Kopi Sukses Makmur",
      location: "Bandung, Jawa Barat",
      revenue: "Rp 150 juta/bulan",
      description: "Franchise pertama kami di luar Jakarta yang mencapai target revenue dalam 6 bulan."
    },
    {
      name: "CV Mahato Sejahtera",
      location: "Surabaya, Jawa Timur",
      revenue: "Rp 200 juta/bulan",
      description: "Ekspansi ke 3 outlet dalam 2 tahun dengan tingkat kepuasan pelanggan 4.9/5."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary/10 to-white">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Jadilah Mitra <span className="text-primary">Coffee Mahato</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Gabung bersama pertumbuhan industri F&B modern dengan konsep rooftop café premium.
          </p>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pilih Tipe Kemitraan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai pilihan kolaborasi sesuai kapasitas dan tujuan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, i) => (
              <Card key={i} className={`p-6 border-0 shadow-md relative ${type.popular ? 'ring-2 ring-primary' : ''}`}>
                {type.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                    Terpopuler
                  </Badge>
                )}
                <CardContent className="p-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-5">
                    <type.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <p className="text-sm mb-3"><strong>Investasi:</strong> {type.investment}</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {type.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" /> <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Steps */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Langkah Menjadi Mitra</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {franchiseSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center font-bold mb-2">
                  {idx + 1}
                </div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-muted-foreground max-w-xs">{step.description}</p>
                {idx !== franchiseSteps.length - 1 && (
                  <div className="hidden md:block absolute right-[-40px] top-6 w-10 h-1 bg-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Kisah Sukses Mitra</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beberapa partner kami yang telah membuktikan potensi pertumbuhan bisnis ini.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <Card key={i} className="p-6 shadow-card border-0">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-12 h-12 flex items-center justify-center">
                      <Award className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.location}</p>
                    </div>
                  </div>
                  <p className="mb-2"><strong>Omzet:</strong> {story.revenue}</p>
                  <p className="text-muted-foreground text-sm">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-2xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Tertarik Bermitra?</h2>
            <p className="text-muted-foreground">
              Isi form berikut, dan tim kami akan segera menghubungi Anda.
            </p>
          </div>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-xl">Formulir Kemitraan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Nama Lengkap / Perusahaan" />
              <Input placeholder="Email Aktif" type="email" />
              <Input placeholder="Nomor WhatsApp" />
              <Textarea placeholder="Ceritakan rencana atau pertanyaan Anda" rows={4} />
              <Button className="w-full bg-primary text-white">
                <Send className="w-5 h-5 mr-2" /> Kirim Sekarang
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Bergabung Sekarang</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Kami percaya kolaborasi adalah kunci. Jadilah bagian dari perjalanan Mahato.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary font-bold px-8 py-3">
            Download Franchise Kit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnershipPage;
