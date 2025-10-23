import { Droplet, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Droplet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">CleanPro</span>
          </div>

          {/* Slogan */}
          <div className="flex items-center justify-center">
            <p className="text-lg font-medium italic">
              Tisztaság minden részletben
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
            <p>© 2024 CleanPro. Minden jog fenntartva.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-smooth">
                Adatvédelmi Tájékoztató
              </a>
              <a href="#" className="hover:text-background transition-smooth">
                Cookie Beállítások
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
