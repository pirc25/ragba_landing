import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "./ServiceCard";
import { services, categories } from "@/data/services";

const ServicesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showPopular, setShowPopular] = useState(false);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory
        ? service.category === selectedCategory
        : true;

      const matchesPopular = showPopular ? service.isPopular : true;

      return matchesSearch && matchesCategory && matchesPopular;
    });
  }, [searchQuery, selectedCategory, showPopular]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setShowPopular(false);
  };

  const hasActiveFilters = searchQuery || selectedCategory || showPopular;

  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Nuestros Servicios
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trámites que <span className="text-accent">Simplificamos</span> para Ti
          </h2>
          <p className="text-muted-foreground text-lg">
            Encuentra el servicio que necesitas. Más de 25 tipos de trámites gestionados 
            con profesionalismo y experiencia.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-10">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar servicio... (ej: jubilación, IVA, clave)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-base rounded-xl border-2 focus:border-accent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              Todos
            </Button>
            {categories.map((category) => {
              const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Folder;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Quick Filters */}
          <div className="flex justify-center gap-2">
            <Button
              variant={showPopular ? "default" : "ghost"}
              size="sm"
              onClick={() => setShowPopular(!showPopular)}
              className="rounded-full text-sm"
            >
              ⭐ Más Solicitados
            </Button>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="rounded-full text-sm text-muted-foreground"
              >
                <X className="w-4 h-4 mr-1" />
                Limpiar filtros
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-sm">
            Mostrando <span className="font-semibold text-foreground">{filteredServices.length}</span> servicios
            {selectedCategory && (
              <span> en <span className="font-semibold text-accent">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
            )}
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              No encontramos servicios
            </h3>
            <p className="text-muted-foreground mb-4">
              Intenta con otros términos de búsqueda o explora nuestras categorías
            </p>
            <Button onClick={clearFilters} variant="outline" className="rounded-full">
              Ver todos los servicios
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
