import { MessageCircle, FileSearch, Settings, CheckCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/services";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp o visítanos. Cuéntanos qué trámite necesitas realizar.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Evaluamos tu Caso",
    description: "Analizamos los requisitos y te informamos el proceso, tiempo y costo estimado.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Gestionamos el Trámite",
    description: "Nos encargamos de todo el proceso ante la institución correspondiente.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Trámite Completado",
    description: "Te entregamos tu documentación y te mantenemos informado en cada paso.",
  },
];

const ProcessSteps = () => {
  return (
    <section id="proceso" className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="bg-accent text-accent-foreground mb-4">
            Cómo Trabajamos
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proceso Simple y <span className="text-accent">Transparente</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Te acompañamos en cada paso para que tu experiencia sea fácil y sin complicaciones.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-white/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-white/20 transform rotate-45" />
                </div>
              )}

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-3 left-6 bg-accent text-accent-foreground font-bold text-sm px-3 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:bg-accent/30 transition-colors">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-whatsapp gap-2 rounded-full px-8 text-base shadow-lg">
              <Phone className="w-5 h-5" />
              Iniciar mi Trámite
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
