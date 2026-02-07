import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/services";

const FloatingWhatsApp = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-whatsapp rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Necesitas ayuda?
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-8 border-transparent border-l-foreground" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
