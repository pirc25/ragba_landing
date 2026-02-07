import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/services";
import heroPattern from "@/assets/hero-pattern.jpg";

const Hero = () => {
  const benefits = [
    "Más de 15 años de experiencia",
    "Atención personalizada",
    "Trámites rápidos y seguros",
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPattern})` }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/40" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Desde 2009 ayudando a los ecuatorianos
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in [animation-delay:100ms]">
            Asesoría y Gestión de{" "}
            <span className="text-accent">Trámites</span> en Ecuador
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Simplificamos tus gestiones ante el IESS, SRI, Contraloría y más. 
            Confía en expertos para resolver tus trámites de forma rápida y segura.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in [animation-delay:300ms]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-whatsapp gap-2 rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all">
                <Phone className="w-5 h-5" />
                Consultar por WhatsApp
              </Button>
            </a>
            <a href="#servicios">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all"
              >
                Ver Servicios
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in [animation-delay:500ms]">
            <p className="text-white/60 text-sm mb-4">Instituciones con las que trabajamos</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {["IESS", "SRI", "MDT", "CGE", "BCE"].map((inst) => (
                <span
                  key={inst}
                  className="text-white/40 font-bold text-xl md:text-2xl tracking-wider"
                >
                  {inst}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
