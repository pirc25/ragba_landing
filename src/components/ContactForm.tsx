import { useState } from "react";
import { Send, User, Phone, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WHATSAPP_NUMBER, categories } from "@/data/services";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = "El nombre es requerido";
    } else if (trimmedName.length > 100) {
      newErrors.name = "El nombre debe tener menos de 100 caracteres";
    }

    const trimmedPhone = formData.phone.trim();
    if (!trimmedPhone) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^[\d\s\-+()]{7,20}$/.test(trimmedPhone)) {
      newErrors.phone = "Ingrese un teléfono válido";
    }

    if (!formData.service) {
      newErrors.service = "Seleccione un servicio";
    }

    const trimmedMessage = formData.message.trim();
    if (trimmedMessage.length > 500) {
      newErrors.message = "El mensaje debe tener menos de 500 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Por favor complete los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    const serviceName = categories.find(c => c.id === formData.service)?.name || formData.service;
    
    const whatsappMessage = [
      `Hola RAGBA, me comunico para solicitar información.`,
      ``,
      `📋 *Datos del contacto:*`,
      `👤 Nombre: ${formData.name.trim()}`,
      `📞 Teléfono: ${formData.phone.trim()}`,
      `📁 Servicio de interés: ${serviceName}`,
      formData.message.trim() ? `💬 Mensaje: ${formData.message.trim()}` : "",
    ].filter(Boolean).join("\n");

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Se abrirá WhatsApp con tu mensaje prellenado.",
    });

    // Reset form
    setFormData({ name: "", phone: "", service: "", message: "" });
    setErrors({});
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
          <User className="w-4 h-4 text-accent" />
          Nombre completo *
        </Label>
        <Input
          id="name"
          placeholder="Ej: Juan Pérez"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={errors.name ? "border-destructive" : ""}
          maxLength={100}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
          <Phone className="w-4 h-4 text-accent" />
          Teléfono / WhatsApp *
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Ej: 0999 999 999"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={errors.phone ? "border-destructive" : ""}
          maxLength={20}
        />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="service" className="flex items-center gap-2 text-foreground">
          <FileText className="w-4 h-4 text-accent" />
          Servicio de interés *
        </Label>
        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
          <SelectTrigger className={errors.service ? "border-destructive" : ""}>
            <SelectValue placeholder="Seleccione un servicio" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
            <SelectItem value="otro">Otro / Consulta general</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
          <MessageSquare className="w-4 h-4 text-accent" />
          Mensaje adicional (opcional)
        </Label>
        <Textarea
          id="message"
          placeholder="Cuéntanos más sobre tu trámite o consulta..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="min-h-[100px] resize-none"
          maxLength={500}
        />
        <p className="text-xs text-muted-foreground text-right">
          {formData.message.length}/500 caracteres
        </p>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full btn-whatsapp gap-2 rounded-full h-12 text-base">
        <Send className="w-5 h-5" />
        Enviar por WhatsApp
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Al enviar, se abrirá WhatsApp con tu mensaje prellenado para que lo revises antes de enviarlo.
      </p>
    </form>
  );
};

export default ContactForm;
