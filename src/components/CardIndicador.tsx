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
    primary: "bg-gradient-orange",
    secondary: "bg-gradient-green",
    info: "bg-card border-2 border-primary/20"
  };

  const iconContainerClasses = {
    primary: "bg-primary-foreground/20",
    secondary: "bg-secondary-foreground/20", 
    info: "bg-primary/10"
  };

  const titleClasses = {
    primary: "text-primary-foreground/90",
    secondary: "text-secondary-foreground/90",
    info: "text-muted-foreground"
  };

  const descriptionClasses = {
    primary: "text-primary-foreground/70",
    secondary: "text-secondary-foreground/70",
    info: "text-muted-foreground"
  };

  return (
    <Card className={`p-6 shadow-card hover:shadow-elevated transition-all ${variantClasses[variant]}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium mb-2 ${titleClasses[variant]}`}>
            {titulo}
          </p>
          <p className={`text-3xl font-bold mb-1 ${variant === "info" ? "text-foreground" : "text-primary-foreground"}`}>
            {valor}
          </p>
          {descricao && (
            <p className={`text-xs ${descriptionClasses[variant]}`}>
              {descricao}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${iconContainerClasses[variant]}`}>
          <Icon className={`w-6 h-6 ${variant === "info" ? "text-primary" : "text-primary-foreground"}`} />
        </div>
      </div>
    </Card>
  );
};
