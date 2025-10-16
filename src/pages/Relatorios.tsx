import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraficoProdutividade } from "@/components/GraficoProdutividade";
import { FileText, Download, TrendingUp, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dadosProducaoDiaria = [
  { dia: "Seg", pecas: 125 },
  { dia: "Ter", pecas: 142 },
  { dia: "Qua", pecas: 138 },
  { dia: "Qui", pecas: 156 },
  { dia: "Sex", pecas: 147 },
];

const dadosMaquinas = [
  { maquina: "SWF-01", pecas: 142 },
  { maquina: "SWF-02", pecas: 128 },
  { maquina: "SWF-03", pecas: 156 },
  { maquina: "SWF-04", pecas: 134 },
];

const Relatorios = () => {
  const [tipoRelatorio, setTipoRelatorio] = useState("producao");

  return (
    <div className="bg-background p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground">Relatórios</h2>
        <p className="text-muted-foreground mt-1">Visualize dados e estatísticas de produção</p>
      </div>

      {/* Filtros */}
      <Card className="p-6 mb-6 shadow-card">
        <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Filtros de Relatório
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="tipo">Tipo de Relatório</Label>
            <Select value={tipoRelatorio} onValueChange={setTipoRelatorio}>
              <SelectTrigger id="tipo">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="producao">Produção Geral</SelectItem>
                <SelectItem value="maquinas">Por Máquina</SelectItem>
                <SelectItem value="operadores">Por Operador</SelectItem>
                <SelectItem value="eficiencia">Eficiência</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="data_inicio">Data Início</Label>
            <Input id="data_inicio" type="date" defaultValue="2025-10-01" />
          </div>

          <div>
            <Label htmlFor="data_fim">Data Fim</Label>
            <Input id="data_fim" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>

          <div className="flex items-end">
            <Button className="w-full gap-2">
              <Download className="w-4 h-4" />
              Exportar PDF
            </Button>
          </div>
        </div>
      </Card>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Produção Semanal
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dadosProducaoDiaria}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="dia" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--card-foreground))"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="pecas" 
                stroke="hsl(142, 71%, 45%)" 
                strokeWidth={3}
                dot={{ fill: "hsl(142, 71%, 45%)", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Produção por Máquina
          </h3>
          <GraficoProdutividade dados={dadosMaquinas} />
        </Card>
      </div>

      {/* Resumo Estatístico */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 shadow-card bg-gradient-orange text-primary-foreground">
          <p className="text-sm mb-2 text-primary-foreground/90">Total de Peças</p>
          <p className="text-3xl font-bold">708</p>
          <p className="text-xs mt-1 text-primary-foreground/70">Esta semana</p>
        </Card>

        <Card className="p-6 shadow-card bg-gradient-green text-secondary-foreground">
          <p className="text-sm mb-2 text-secondary-foreground/90">Média Diária</p>
          <p className="text-3xl font-bold">141.6</p>
          <p className="text-xs mt-1 text-secondary-foreground/70">Peças por dia</p>
        </Card>

        <Card className="p-6 shadow-card border-2 border-primary/20">
          <p className="text-sm mb-2 text-muted-foreground">Eficiência</p>
          <p className="text-3xl font-bold text-success">94.2%</p>
          <p className="text-xs mt-1 text-muted-foreground">Meta: 90%</p>
        </Card>

        <Card className="p-6 shadow-card border-2 border-primary/20">
          <p className="text-sm mb-2 text-muted-foreground">Total Pontos</p>
          <p className="text-3xl font-bold text-foreground">2.1M</p>
          <p className="text-xs mt-1 text-muted-foreground">Esta semana</p>
        </Card>
      </div>
    </div>
  );
};

export default Relatorios;
