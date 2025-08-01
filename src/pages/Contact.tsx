import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hubungi <span className="text-primary">Kami</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami siap membantu Anda dengan segala pertanyaan dan kebutuhan reservasi
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;