import { Phone, Clock, Star, Sparkles } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Service, getWhatsAppLink } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  // Dynamic icon rendering
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.FileText;

  return (
    <div className="group relative bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-border/50 hover:border-accent/30">
      {/* Badges */}
      <div className="absolute top-3 right-3 flex gap-2 z-10">
        {service.isPopular && (
          <Badge className="bg-gold text-white border-0 gap-1">
            <Star className="w-3 h-3" fill="currentColor" />
            Popular
          </Badge>
        )}
        {service.isNew && (
          <Badge className="bg-accent text-accent-foreground border-0 gap-1">
            <Sparkles className="w-3 h-3" />
            Nuevo
          </Badge>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 md:p-6">
        {/* Icon */}
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
          <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-card-foreground mb-2 group-hover:text-accent transition-colors">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Requirements (collapsible preview) */}
        {service.requirements && service.requirements.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-muted-foreground font-medium mb-1">Requisitos:</p>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {service.requirements.slice(0, 2).join(" • ")}
              {service.requirements.length > 2 && " ..."}
            </p>
          </div>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-4">
          {service.estimatedTime && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>{service.estimatedTime}</span>
            </div>
          )}
          {service.priceFrom && (
            <div className="text-xs">
              <span className="text-muted-foreground">Desde </span>
              <span className="font-semibold text-accent">{service.priceFrom}</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <a
          href={getWhatsAppLink(service.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full btn-whatsapp gap-2 rounded-lg group-hover:shadow-md transition-all">
            <Phone className="w-4 h-4" />
            Consultar por WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
