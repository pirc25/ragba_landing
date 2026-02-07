import { Shield, Clock, Users, Lock, Award, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    icon: Clock,
    title: "Experiencia desde 2009",
    description: "Más de 15 años resolviendo trámites para miles de ecuatorianos.",
  },
  {
    icon: Shield,
    title: "Rapidez y Eficiencia",
    description: "Gestionamos tus trámites en el menor tiempo posible.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente recibe un trato único según sus necesidades.",
  },
  {
    icon: Lock,
    title: "Confidencialidad Total",
    description: "Tu información personal está protegida y es manejada con discreción.",
  },
  {
    icon: Award,
    title: "Profesionalismo",
    description: "Personal capacitado y actualizado en normativas vigentes.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento Continuo",
    description: "Te guiamos en cada paso hasta que tu trámite esté resuelto.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Por Qué Elegirnos
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tu <span className="text-accent">Confianza</span> es Nuestra Mayor Motivación
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              En RAGBA entendemos lo estresante que pueden ser los trámites burocráticos. 
              Por eso, nos dedicamos a simplificar tu vida, manejando cada gestión con 
              profesionalismo, transparencia y compromiso.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">5K+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Tipos de Trámites</div>
              </div>
            </div>
          </div>

          {/* Right: Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-5 bg-card rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
