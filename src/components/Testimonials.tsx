import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "María González",
    location: "Quito",
    service: "Jubilación IESS",
    rating: 5,
    text: "Excelente servicio. Me ayudaron con todo el proceso de jubilación que parecía tan complicado. Muy profesionales y siempre disponibles para responder mis dudas.",
    avatar: "MG",
  },
  {
    name: "Carlos Mendoza",
    location: "Guayaquil",
    service: "Declaración de Renta",
    rating: 5,
    text: "Llevaban años haciéndome las declaraciones y nunca he tenido problemas con el SRI. Confío plenamente en su trabajo y los recomiendo siempre.",
    avatar: "CM",
  },
  {
    name: "Ana Lucia Paredes",
    location: "Cuenca",
    service: "Cesantía",
    rating: 5,
    text: "Me ayudaron a retirar mi cesantía de forma rápida. El proceso fue transparente y me mantuvieron informada en cada paso. ¡Gracias RAGBA!",
    avatar: "AP",
  },
  {
    name: "Roberto Salazar",
    location: "Ambato",
    service: "Contratos MDT",
    rating: 5,
    text: "Como emprendedor, necesitaba ayuda para registrar los contratos de mis empleados. El servicio fue rápido y eficiente. Muy recomendados.",
    avatar: "RS",
  },
  {
    name: "Patricia Villegas",
    location: "Quito",
    service: "Clave IESS",
    rating: 5,
    text: "Mi mamá necesitaba su clave del IESS y no sabíamos cómo hacerlo. Nos ayudaron paso a paso y ahora puede acceder a todos sus servicios.",
    avatar: "PV",
  },
  {
    name: "Diego Fernández",
    location: "Loja",
    service: "Devolución IVA",
    rating: 5,
    text: "Tengo discapacidad y me ayudaron con la devolución del IVA. Conocen muy bien el proceso y me ahorraron mucho tiempo y estrés.",
    avatar: "DF",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Testimonios
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que Dicen <span className="text-accent">Nuestros Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Miles de ecuatorianos confían en nosotros. Conoce sus experiencias.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-card transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
