import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CardIndicadorProps {
  titulo: string;
  valor: string | number;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "info";
  descricao?: string;
}

export const CardIndicador = ({ 
  titulo, 
  valor, 
  icon: Icon, 
  variant = "primary",
  descricao 
}: CardIndicadorProps) => {
  const variantClasses = {
    primary: "bg-gradient-orange text-primary-foreground",
    secondary: "bg-gradient-green text-secondary-foreground",
    info: "bg-card border-2 border-primary/20"
  };

  const iconContainerClasses = {
    primary: "bg-white/20",
    secondary: "bg-white/20", 
    info: "bg-primary/10"
  };

  const textClasses = {
    primary: "text-primary-foreground",
    secondary: "text-secondary-foreground",
    info: "text-foreground"
  };

  return (
    <Card className={`p-6 shadow-card hover:shadow-elevated transition-all ${variantClasses[variant]}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium mb-2 ${variant === "info" ? "text-muted-foreground" : "text-white/90"}`}>
            {titulo}
          </p>
          <p className={`text-3xl font-bold mb-1 ${textClasses[variant]}`}>
            {valor}
          </p>
          {descricao && (
            <p className={`text-xs ${variant === "info" ? "text-muted-foreground" : "text-white/70"}`}>
              {descricao}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${iconContainerClasses[variant]}`}>
          <Icon className={`w-6 h-6 ${textClasses[variant]}`} />
        </div>
      </div>
    </Card>
  );
};
