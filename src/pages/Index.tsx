import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Parallax from "@/components/Parallax";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToContactCTA from "@/components/ScrollToContactCTA";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <Services />
      <WhyUs />
      <Parallax />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ScrollToContactCTA />
    </div>
  );
};

export default Index;
