import { Activity, Moon, Sun } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="hover:bg-accent" />
          <div className="flex items-center gap-2">
            <Activity className="w-7 h-7 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Dashboard SWF</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Controle de Produção Industrial
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <p className="text-xs text-muted-foreground">Hoje</p>
            <p className="text-sm font-semibold text-foreground">
              {new Date().toLocaleDateString('pt-BR', { 
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </p>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
