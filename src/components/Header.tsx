import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/services";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl md:text-2xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg md:text-xl ${isScrolled ? "text-primary" : "text-white"}`}>
                RAGBA
              </span>
              <span className={`text-[10px] md:text-xs ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}>
                Asesoría & Trámites
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button className="btn-whatsapp gap-2 rounded-full px-6">
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-xl mt-2 p-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-3 text-foreground font-medium rounded-md hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
              >
                <Button className="btn-whatsapp w-full gap-2 rounded-full">
                  <Phone className="w-4 h-4" />
                  <span>Contactar por WhatsApp</span>
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
