import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaners.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Professzionális Irodatakarítás
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Munkatársaink szakértelemmel és gondossággal biztosítják irodája 
            tisztaságát, hogy Ön a munkájára koncentrálhasson.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg"
            onClick={scrollToContact}
          >
            Kérjen Ajánlatot Most
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
