import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface ProducaoMaquina {
  maquina: string;
  pecas: number;
}

interface GraficoProdutividadeProps {
  dados: ProducaoMaquina[];
}

const CORES = ["hsl(24, 95%, 53%)", "hsl(33, 100%, 60%)", "hsl(142, 71%, 45%)", "hsl(199, 89%, 48%)"];

export const GraficoProdutividade = ({ dados }: GraficoProdutividadeProps) => {
  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold mb-6 text-foreground">Produtividade por Máquina</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="maquina" 
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
            cursor={{ fill: "hsl(var(--muted))" }}
          />
          <Bar dataKey="pecas" radius={[8, 8, 0, 0]}>
            {dados.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={CORES[index % CORES.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
