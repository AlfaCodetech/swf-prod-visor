import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TabelaProducoes } from "@/components/TabelaProducoes";
import { Plus, Save } from "lucide-react";
import { toast } from "sonner";

const producoesMock = [
  {
    id: 1,
    id_maquina: "SWF-01",
    data: "2025-10-16",
    hora_inicio: "08:00:00",
    hora_fim: "09:15:00",
    pecas: 12,
    quantidade_pontos: 45600,
    operador: "João Silva",
    observacao: "Produção normal"
  },
  {
    id: 2,
    id_maquina: "SWF-02",
    data: "2025-10-16",
    hora_inicio: "08:30:00",
    hora_fim: "10:00:00",
    pecas: 10,
    quantidade_pontos: 38200,
    operador: "Maria Santos",
    observacao: "Troca de linha no meio da produção"
  },
];

const Producao = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Produção registrada com sucesso!");
    setMostrarFormulario(false);
  };

  return (
    <div className="bg-background p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Registro de Produção</h2>
          <p className="text-muted-foreground mt-1">Registre e gerencie as produções diárias</p>
        </div>
        <Button 
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          Nova Produção
        </Button>
      </div>

      {mostrarFormulario && (
        <Card className="p-6 mb-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Registrar Nova Produção</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="maquina">Máquina</Label>
              <Select required>
                <SelectTrigger id="maquina">
                  <SelectValue placeholder="Selecione a máquina" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SWF-01">SWF-01</SelectItem>
                  <SelectItem value="SWF-02">SWF-02</SelectItem>
                  <SelectItem value="SWF-03">SWF-03</SelectItem>
                  <SelectItem value="SWF-04">SWF-04</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="operador">Operador</Label>
              <Input id="operador" placeholder="Nome do operador" required />
            </div>

            <div>
              <Label htmlFor="data">Data</Label>
              <Input id="data" type="date" required defaultValue={new Date().toISOString().split('T')[0]} />
            </div>

            <div>
              <Label htmlFor="hora_inicio">Hora Início</Label>
              <Input id="hora_inicio" type="time" required />
            </div>

            <div>
              <Label htmlFor="hora_fim">Hora Fim</Label>
              <Input id="hora_fim" type="time" required />
            </div>

            <div>
              <Label htmlFor="pecas">Quantidade de Peças</Label>
              <Input id="pecas" type="number" placeholder="0" required />
            </div>

            <div>
              <Label htmlFor="pontos">Quantidade de Pontos</Label>
              <Input id="pontos" type="number" placeholder="0" required />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="observacao">Observações</Label>
              <Textarea id="observacao" placeholder="Observações sobre a produção..." />
            </div>

            <div className="md:col-span-2 flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={() => setMostrarFormulario(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="gap-2">
                <Save className="w-4 h-4" />
                Salvar Produção
              </Button>
            </div>
          </form>
        </Card>
      )}

      <TabelaProducoes producoes={producoesMock} />
    </div>
  );
};

export default Producao;
