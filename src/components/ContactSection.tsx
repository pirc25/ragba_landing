import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Principal S/N y Calle Secundaria", "Quito, Ecuador"],
      action: {
        label: "Ver en Google Maps",
        href: "https://maps.google.com/?q=Quito,Ecuador",
      },
    },
    {
      icon: Phone,
      title: "Teléfono / WhatsApp",
      details: ["+593 99 999 9999"],
      action: {
        label: "Llamar ahora",
        href: "tel:+593999999999",
      },
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      details: ["info@ragba.ec"],
      action: {
        label: "Enviar correo",
        href: "mailto:info@ragba.ec",
      },
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      details: ["Lunes a Viernes: 8:00 - 18:00", "Sábados: 9:00 - 13:00"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ragbaecuador", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ragbaecuador", label: "Instagram" },
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Contáctanos
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Estamos para <span className="text-accent">Ayudarte</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Completa el formulario y te contactaremos por WhatsApp, o visítanos directamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-card border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-display flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  Escríbenos por WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Map below form on desktop */}
            <div className="mt-6 bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 h-[250px] hidden lg:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255430.68243385804!2d-78.57532539253045!3d-0.18065559999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1sen!2sec!4v1699999999999!5m2!1sen!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación RAGBA"
              />
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="order-1 lg:order-2 space-y-4">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border/50 hover:border-accent/30 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                  {item.action && (
                    <a
                      href={item.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-2 hover:underline"
                    >
                      {item.action.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-card rounded-xl p-5 border border-border/50">
              <h3 className="font-semibold text-foreground mb-3">Síguenos en Redes</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Map */}
            <div className="lg:hidden bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255430.68243385804!2d-78.57532539253045!3d-0.18065559999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1sen!2sec!4v1699999999999!5m2!1sen!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación RAGBA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
