import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/data/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  const services = [
    "Trámites IESS",
    "Declaraciones SRI",
    "Contraloría",
    "Ministerio de Trabajo",
    "Hojas de Vida",
    "Banca Electrónica",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ragbaecuador", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ragbaecuador", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">R</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">RAGBA</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
              Desde 2009 brindando asesoría y gestión de trámites en Ecuador. 
              Tu confianza es nuestra prioridad.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Av. Principal S/N y Calle Secundaria<br />
                  Quito, Ecuador
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  +593 99 999 9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:info@ragba.ec"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  info@ragba.ec
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Lunes a Viernes: 8:00 - 18:00<br />
                  Sábados: 9:00 - 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} RAGBA. Todos los derechos reservados.</p>
            <p className="text-center md:text-right text-xs">
              Los trámites dependen de validaciones de cada institución. 
              La información del cliente se maneja con confidencialidad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
