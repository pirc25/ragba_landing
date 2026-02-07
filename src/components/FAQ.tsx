import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué documentos necesito para iniciar un trámite?",
    answer: "Los documentos varían según el trámite. Generalmente necesitarás tu cédula de identidad, y para trámites específicos como IESS o SRI, también tu clave de acceso. Al contactarnos, te indicaremos exactamente qué necesitas según tu caso.",
  },
  {
    question: "¿Cuánto tiempo demora un trámite?",
    answer: "El tiempo depende del tipo de trámite y la institución. Algunos como la generación de claves pueden estar listos en 1-2 días, mientras que procesos como jubilación pueden tomar 30-60 días. Siempre te informamos el tiempo estimado antes de iniciar.",
  },
  {
    question: "¿Cómo puedo pagar por los servicios?",
    answer: "Aceptamos transferencias bancarias, depósitos y efectivo. Para tu comodidad, puedes realizar el pago una vez que te confirmemos los detalles del servicio. Emitimos comprobante de pago.",
  },
  {
    question: "¿Trabajan solo en Quito o atienden a nivel nacional?",
    answer: "Atendemos a nivel nacional. Muchos trámites pueden gestionarse de forma virtual, y para aquellos que requieren presencia, contamos con representación en las principales ciudades del país.",
  },
  {
    question: "¿Mis datos personales están seguros con ustedes?",
    answer: "Absolutamente. La confidencialidad es uno de nuestros pilares. Tu información personal y documentos son manejados con estricta reserva y solo se utilizan para gestionar tu trámite específico.",
  },
  {
    question: "¿Qué pasa si mi trámite es rechazado por la institución?",
    answer: "Si un trámite es rechazado por razones ajenas a nuestra gestión (requisitos no cumplidos por el cliente, validaciones institucionales), te informamos inmediatamente y te asesoramos sobre los pasos a seguir para solucionarlo.",
  },
  {
    question: "¿Ofrecen asesoría sin compromiso?",
    answer: "Sí, puedes contactarnos por WhatsApp para consultar sobre cualquier trámite. Te orientamos sobre el proceso, requisitos y costos sin ningún compromiso. ¡Estamos para ayudarte!",
  },
  {
    question: "¿Cómo me mantendrán informado del avance de mi trámite?",
    answer: "Te mantenemos informado vía WhatsApp en cada etapa importante del proceso. También puedes escribirnos en cualquier momento para consultar el estado de tu trámite.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Preguntas Frecuentes
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ¿Tienes <span className="text-accent">Dudas</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-accent/30 data-[state=open]:shadow-card transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
