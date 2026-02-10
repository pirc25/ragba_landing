// Sistema de servicios dinámico para RAGBA
// Para agregar servicios, simplemente edita este archivo o conecta a un CMS/backend

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements?: string[];
  estimatedTime?: string;
  priceFrom?: string;
  isPopular?: boolean;
  isNew?: boolean;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: "iess", name: "IESS", icon: "Shield", color: "bg-blue-500" },
  { id: "sri", name: "SRI", icon: "FileText", color: "bg-green-500" },
  { id: "contraloria", name: "Contraloría", icon: "Building2", color: "bg-purple-500" },
  { id: "trabajo", name: "Ministerio de Trabajo", icon: "Briefcase", color: "bg-orange-500" },
  { id: "otros", name: "Otros Servicios", icon: "MoreHorizontal", color: "bg-teal-500" },
];

export const services: Service[] = [
  // IESS
  {
    id: "iess-clave",
    name: "Generación de Clave IESS",
    category: "iess",
    description: "Obtén tu clave personal para acceder al sistema del IESS y gestionar tus trámites en línea.",
    requirements: ["Cédula de identidad", "Correo electrónico activo", "Número de celular registrado"],
    estimatedTime: "1 día hábil",
    priceFrom: "$4",
    isPopular: true,
    icon: "Key",
  },
  {
    id: "iess-cuenta-bancaria",
    name: "Registro de Cuenta Bancaria",
    category: "iess",
    description: "Registra tu cuenta bancaria para recibir pagos del IESS directamente.",
    requirements: ["Cédula", "Estado de cuenta bancaria", "Clave IESS"],
    estimatedTime: "1 día hábil",
    priceFrom: "$5",
    icon: "CreditCard",
  },
  {
    id: "iess-cesantia",
    name: "Retiro de Cesantía",
    category: "iess",
    description: "Gestión completa para el retiro de tu fondo de cesantía acumulado.",
    requirements: ["Cédula", "Clave IESS", "90 días sin aportes", "Cuenta bancaria registrada"],
    estimatedTime: "2-3 días hábiles",
    priceFrom: "$3",
    isPopular: true,
    icon: "Wallet",
  },
  {
    id: "iess-fondos-reserva",
    name: "Fondos de Reserva",
    category: "iess",
    description: "Consulta, acumulación o retiro de tus fondos de reserva en el IESS.",
    requirements: ["Cédula", "Clave IESS", "Más de 13 meses de aportes"],
    estimatedTime: "1-2 días hábiles",
    priceFrom: "$5",
    icon: "PiggyBank",
  },
  {
    id: "iess-citas",
    name: "Agendamiento de Citas IESS",
    category: "iess",
    description: "Reserva citas médicas, odontológicas o administrativas en el IESS.",
    requirements: ["Cédula", "Clave IESS", "Estar al día en aportes"],
    estimatedTime: "Inmediato",
    priceFrom: "$3",
    icon: "Calendar",
  },
  {
    id: "iess-certificado-afiliacion",
    name: "Certificados de Afiliación",
    category: "iess",
    description: "Obtén tu certificado de afiliación, aportes o tiempo de servicio.",
    requirements: ["Cédula", "Clave IESS"],
    estimatedTime: "1 día hábil",
    priceFrom: "$3",
    icon: "FileCheck",
  },
  {
    id: "iess-jubilacion",
    name: "Trámite de Jubilación",
    category: "iess",
    description: "Asesoría y gestión completa para tu proceso de jubilación.",
    requirements: ["Cédula", "Clave IESS", "Historial laboral", "30+ años de aportes o 60+ años de edad"],
    estimatedTime: "8-15 días hábiles",
    priceFrom: "$10",
    isPopular: true,
    icon: "Heart",
  },
  // SRI
  {
    id: "sri-iva",
    name: "Declaración de IVA",
    category: "sri",
    description: "Realizamos tu declaración mensual o semestral del Impuesto al Valor Agregado.",
    requirements: ["RUC o RIMPE", "Clave SRI", "Facturas de compras y ventas"],
    estimatedTime: "1 día hábil",
    priceFrom: "%15 de la declaración hasta 40 dólares",
    isPopular: true,
    icon: "Receipt",
  },
  {
    id: "sri-renta",
    name: "Declaración de Impuesto a la Renta",
    category: "sri",
    description: "Declaración anual del impuesto a la renta para personas naturales o jurídicas.",
    requirements: ["RUC/Cédula", "Clave SRI", "Formulario 102/102A", "Anexos de gastos"],
    estimatedTime: "1-2 días hábiles",
    priceFrom: "$15",
    isPopular: true,
    icon: "Calculator",
  },
  {
    id: "sri-compraventa",
    name: "Trámites de Compraventa",
    category: "sri",
    description: "Gestión de impuestos en transferencias de bienes muebles e inmuebles.",
    requirements: ["Escritura del bien", "Cédulas de las partes", "Avalúo municipal"],
    estimatedTime: "2 días hábiles",
    priceFrom: "$15,
    icon: "Home",
  },
  {
    id: "sri-herencias",
    name: "Declaración de Herencias",
    category: "sri",
    description: "Asesoría y trámite de impuestos por herencias y legados.",
    requirements: ["Partida de defunción", "Inventario de bienes", "Documentos de herederos"],
    estimatedTime: "4-8 días hábiles",
    priceFrom: "$15",
    icon: "Users",
  },
  {
    id: "sri-donacion",
    name: "Donaciones",
    category: "sri",
    description: "Gestión tributaria para donaciones entre vivos.",
    requirements: ["Cédulas", "Escritura de donación", "Avalúo del bien"],
    estimatedTime: "3-4 días hábiles",
    priceFrom: "$15",
    icon: "Gift",
  },
  {
    id: "sri-devolucion-iva",
    name: "Devolución de IVA",
    category: "sri",
    description: "Gestión de devolución de IVA para adultos mayores, discapacitados y exportadores.",
    requirements: ["Cédula/RUC", "Facturas electrónicas", "Cuenta bancaria"],
    estimatedTime: "8-15 días hábiles",
    priceFrom: "%15 de la declaración hasta 40 dólares",
    isNew: true,
    icon: "RefreshCcw",
  },
  // Contraloría
  {
    id: "contraloria-certificados",
    name: "Certificados de Responsabilidades",
    category: "contraloria",
    description: "Obtención de certificados de no tener responsabilidades en la Contraloría General del Estado.",
    requirements: ["Cédula", "Correo electrónico"],
    estimatedTime: "1 día hábil",
    priceFrom: "$4",
    isPopular: true,
    icon: "Award",
  },
  {
    id: "contraloria-consultas",
    name: "Consultas de Estado",
    category: "contraloria",
    description: "Verificación de tu situación actual ante la Contraloría General del Estado.",
    requirements: ["Cédula"],
    estimatedTime: "Inmediato",
    priceFrom: "$3",
    icon: "Search",
  },
  {
    id: "contraloria-declaraciones",
    name: "Declaraciones Patrimoniales",
    category: "contraloria",
    description: "Asesoría en declaraciones patrimoniales juramentadas para servidores públicos.",
    requirements: ["Cédula", "Información de bienes", "Contrato de trabajo público"],
    estimatedTime: "1-2 días hábiles",
    priceFrom: "$9",
    icon: "ClipboardList",
  },
  // Ministerio de Trabajo
  {
    id: "trabajo-decimos",
    name: "Registro de Décimos",
    category: "trabajo",
    description: "Registro y legalización de décimo tercero y décimo cuarto sueldo.",
    requirements: ["RUC empresa", "Clave MDT", "Roles de pago", "Contratos"],
    estimatedTime: "1 día hábil",
    priceFrom: "$10",
    isPopular: true,
    icon: "DollarSign",
  },
  {
    id: "trabajo-finiquito",
    name: "Finiquito de Contratos",
    category: "trabajo",
    description: "Elaboración y registro de actas de finiquito laboral.",
    requirements: ["Contrato de trabajo", "Avisos de entrada/salida", "Roles de pago"],
    estimatedTime: "1-2 días hábiles",
    priceFrom: "$15",
    icon: "FileX",
  },
  {
    id: "trabajo-contratos",
    name: "Nuevos Contratos de Trabajo",
    category: "trabajo",
    description: "Elaboración y registro de contratos laborales en el sistema del MDT.",
    requirements: ["Cédulas empleador/empleado", "RUC", "Datos del cargo y salario"],
    estimatedTime: "1 día hábil",
    priceFrom: "$10",
    isNew: true,
    icon: "FileSignature",
  },
  // Otros
  {
    id: "socioempleo",
    name: "Registro en SocioEmpleo",
    category: "otros",
    description: "Inscripción y actualización de perfil en la Red SocioEmpleo para búsqueda de trabajo.",
    requirements: ["Cédula", "Correo electrónico", "Hoja de vida"],
    estimatedTime: "1 día hábil",
    priceFrom: "$10",
    icon: "UserPlus",
  },
  {
    id: "hojas-vida",
    name: "Elaboración de Hojas de Vida",
    category: "otros",
    description: "Diseño profesional de CV para destacar tu perfil laboral.",
    requirements: ["Datos personales", "Experiencia laboral", "Estudios realizados"],
    estimatedTime: "1 día hábil",
    priceFrom: "$5",
    isPopular: true,
    icon: "FileUser",
  },
  {
    id: "solicitudes",
    name: "Redacción de Solicitudes",
    category: "otros",
    description: "Elaboración de oficios, solicitudes y documentos formales para instituciones.",
    requirements: ["Datos del solicitante", "Motivo de la solicitud"],
    estimatedTime: "1 día hábil",
    priceFrom: "$3",
    icon: "PenLine",
  },
  {
    id: "banca-electronica",
    name: "Banca Electrónica",
    category: "otros",
    description: "Instalación y configuración de aplicaciones bancarias en tu dispositivo.",
    requirements: ["Cuenta bancaria activa", "Dispositivo móvil o computadora"],
    estimatedTime: "Mismo día",
    priceFrom: "$4",
    isNew: true,
    icon: "Smartphone",
  },
];

// Función helper para generar el mensaje de WhatsApp
export const generateWhatsAppMessage = (serviceName: string): string => {
  return encodeURIComponent(`Hola RAGBA, quiero información sobre: ${serviceName}.`);
};

// Número de WhatsApp (actualizar con el número real)
export const WHATSAPP_NUMBER = "593979253802"; // Cambiar por el número real

export const getWhatsAppLink = (serviceName?: string): string => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (serviceName) {
    return `${baseUrl}?text=${generateWhatsAppMessage(serviceName)}`;
  }
  return `${baseUrl}?text=${encodeURIComponent("Hola RAGBA, necesito información sobre sus servicios.")}`;
};
