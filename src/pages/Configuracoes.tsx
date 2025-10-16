import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Bell, Database, Shield, Save, Palette } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";

const Configuracoes = () => {
  const { theme, setTheme } = useTheme();

  const handleSalvar = () => {
    toast.success("Configurações salvas com sucesso!");
  };

  return (
    <div className="bg-background p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground">Configurações</h2>
        <p className="text-muted-foreground mt-1">Gerencie as preferências do sistema</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Menu Lateral */}
        <div className="lg:col-span-1">
          <Card className="p-4 shadow-card">
            <nav className="space-y-2">
              <Button variant="default" className="w-full justify-start gap-2">
                <Settings className="w-4 h-4" />
                Geral
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Palette className="w-4 h-4" />
                Aparência
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Bell className="w-4 h-4" />
                Notificações
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Database className="w-4 h-4" />
                Banco de Dados
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Shield className="w-4 h-4" />
                Segurança
              </Button>
            </nav>
          </Card>
        </div>

        {/* Conteúdo Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Configurações Gerais */}
          <Card className="p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Configurações Gerais
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="empresa">Nome da Empresa</Label>
                <Input id="empresa" defaultValue="SWF Bordados Industrial" />
              </div>

              <div>
                <Label htmlFor="timezone">Fuso Horário</Label>
                <Select defaultValue="br">
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="br">Brasília (GMT-3)</SelectItem>
                    <SelectItem value="pt">Lisboa (GMT+0)</SelectItem>
                    <SelectItem value="us">New York (GMT-5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="idioma">Idioma</Label>
                <Select defaultValue="pt">
                  <SelectTrigger id="idioma">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt">Português (BR)</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Aparência */}
          <Card className="p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              Aparência
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="tema">Tema</Label>
                <Select value={theme} onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}>
                  <SelectTrigger id="tema">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Escuro</SelectItem>
                    <SelectItem value="system">Sistema</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label>Modo Compacto</Label>
                  <p className="text-sm text-muted-foreground">Reduz espaçamento entre elementos</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Animações</Label>
                  <p className="text-sm text-muted-foreground">Ativa transições suaves</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Notificações */}
          <Card className="p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notificações
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Alertas de Produção</Label>
                  <p className="text-sm text-muted-foreground">Notificar quando metas são atingidas</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label>Alertas de Manutenção</Label>
                  <p className="text-sm text-muted-foreground">Lembrete de manutenção preventiva</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Diário</Label>
                  <p className="text-sm text-muted-foreground">Resumo de produção por email</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label>Notificações de Sistema</Label>
                  <p className="text-sm text-muted-foreground">Atualizações e avisos importantes</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Produção */}
          <Card className="p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Configurações de Produção</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="meta_diaria">Meta Diária de Peças</Label>
                <Input id="meta_diaria" type="number" defaultValue="150" />
              </div>

              <div>
                <Label htmlFor="meta_pontos">Meta Diária de Pontos</Label>
                <Input id="meta_pontos" type="number" defaultValue="500000" />
              </div>

              <div>
                <Label htmlFor="tempo_padrao">Tempo Padrão por Peça (min)</Label>
                <Input id="tempo_padrao" type="number" defaultValue="18" />
              </div>
            </div>
          </Card>

          {/* Botão Salvar */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancelar</Button>
            <Button onClick={handleSalvar} className="gap-2">
              <Save className="w-4 h-4" />
              Salvar Configurações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
