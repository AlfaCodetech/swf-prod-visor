import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { UserPlus, Search, Mail, Phone, Award, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const operadoresMock = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@swf.com",
    telefone: "(11) 98765-4321",
    turno: "Manhã",
    especialidade: "Bordado Complexo",
    pecasHoje: 32,
    eficiencia: 96.5,
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Maria Santos",
    email: "maria.santos@swf.com",
    telefone: "(11) 98765-1234",
    turno: "Tarde",
    especialidade: "Bordado Padrão",
    pecasHoje: 28,
    eficiencia: 94.2,
    status: "Ativo"
  },
  {
    id: 3,
    nome: "Pedro Costa",
    email: "pedro.costa@swf.com",
    telefone: "(11) 98765-5678",
    turno: "Manhã",
    especialidade: "Bordado Alta Precisão",
    pecasHoje: 35,
    eficiencia: 97.8,
    status: "Ativo"
  },
  {
    id: 4,
    nome: "Ana Paula",
    email: "ana.paula@swf.com",
    telefone: "(11) 98765-8765",
    turno: "Noite",
    especialidade: "Bordado Padrão",
    pecasHoje: 0,
    eficiencia: 92.1,
    status: "Folga"
  },
];

const Operadores = () => {
  const [busca, setBusca] = useState("");
  const [dialogAberto, setDialogAberto] = useState(false);

  const operadoresFiltrados = operadoresMock.filter(op => 
    op.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const handleNovoOperador = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Operador cadastrado com sucesso!");
    setDialogAberto(false);
  };

  const getIniciais = (nome: string) => {
    const partes = nome.split(' ');
    return `${partes[0][0]}${partes[partes.length - 1][0]}`.toUpperCase();
  };

  return (
    <div className="bg-background p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Operadores</h2>
          <p className="text-muted-foreground mt-1">Gerencie a equipe de produção</p>
        </div>
        
        <Dialog open={dialogAberto} onOpenChange={setDialogAberto}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <UserPlus className="w-4 h-4" />
              Novo Operador
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Operador</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleNovoOperador} className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input id="nome" placeholder="Digite o nome" required />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="email@exemplo.com" required />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="(11) 98765-4321" required />
              </div>
              <div>
                <Label htmlFor="turno">Turno</Label>
                <Input id="turno" placeholder="Manhã/Tarde/Noite" required />
              </div>
              <div>
                <Label htmlFor="especialidade">Especialidade</Label>
                <Input id="especialidade" placeholder="Tipo de bordado" required />
              </div>
              <Button type="submit" className="w-full">Cadastrar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Busca */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar operador..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Cards de Operadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {operadoresFiltrados.map((operador) => (
          <Card key={operador.id} className="p-6 shadow-card hover:shadow-elevated transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                  <AvatarFallback>{getIniciais(operador.nome)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{operador.nome}</h3>
                  <Badge variant={operador.status === "Ativo" ? "default" : "secondary"} className="mt-1">
                    {operador.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>{operador.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{operador.telefone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4" />
                <span>{operador.especialidade}</span>
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Peças Hoje</span>
                <span className="font-bold text-foreground">{operador.pecasHoje}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Eficiência
                </span>
                <span className="font-bold text-success">{operador.eficiencia}%</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <Badge variant="outline" className="text-xs">
                Turno: {operador.turno}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Operadores;
