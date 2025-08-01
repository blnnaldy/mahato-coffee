import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">
                  Mahato Coffee
                </span>
                <span className="text-xs text-primary font-medium leading-none">
                  Rooftop
                </span>
              </div>
            </div>
            <p className="text-sm text-background/80">
              Nikmati pengalaman ngopi yang tak terlupakan di rooftop dengan pemandangan Jakarta yang menakjubkan. Suasana estetik biru laut dan putih yang menenangkan.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-background/80 hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link to="/about" className="block text-sm text-background/80 hover:text-primary transition-colors">
                Tentang Kami
              </Link>
              <Link to="/menu" className="block text-sm text-background/80 hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/events" className="block text-sm text-background/80 hover:text-primary transition-colors">
                Event
              </Link>
              <Link to="/outlets" className="block text-sm text-background/80 hover:text-primary transition-colors">
                Outlet
              </Link>
              <Link to="/partnership" className="block text-sm text-background/80 hover:text-primary transition-colors">
                Partnership
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-background/80">
                  <p className="font-medium">Mahato Coffee</p>
                  <p>3, Jl. Kyai H. Taisir No.2 B, RW.11, Palmerah, Kec. Palmerah, </p>
                  <p>Jakarta Barat, 11480</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">082246239567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">mahatoidn@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-background/80">
                  <p>Senin - minggu: 16:00 - 03:00</p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-sm text-background/80">
              Dapatkan update terbaru tentang menu spesial, event, dan promo menarik dari Mahato Coffee.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="default" className="w-full bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-background/60">
            © 2024 Mahato Coffee. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-sm text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;