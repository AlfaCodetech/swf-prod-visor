import { useState, useEffect } from "react";
import { CardIndicador } from "@/components/CardIndicador";
import { GraficoProdutividade } from "@/components/GraficoProdutividade";
import { TabelaProducoes } from "@/components/TabelaProducoes";
import { Package, TrendingUp, Clock, Activity } from "lucide-react";

// Dados de exemplo (substitua pela conexão real com banco de dados)
const dadosExemplo = {
  totalPecas: 127,
  totalPontos: 456789,
  tempoMedio: "18 min",
  producoesMaquina: [
    { maquina: "SWF-01", pecas: 32 },
    { maquina: "SWF-02", pecas: 28 },
    { maquina: "SWF-03", pecas: 35 },
    { maquina: "SWF-04", pecas: 32 },
  ],
  ultimasProducoes: [
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
    {
      id: 3,
      id_maquina: "SWF-03",
      data: "2025-10-16",
      hora_inicio: "07:45:00",
      hora_fim: "09:30:00",
      pecas: 15,
      quantidade_pontos: 52400,
      operador: "Pedro Costa",
      observacao: ""
    },
    {
      id: 4,
      id_maquina: "SWF-04",
      data: "2025-10-16",
      hora_inicio: "09:00:00",
      hora_fim: "10:45:00",
      pecas: 13,
      quantidade_pontos: 47800,
      operador: "Ana Paula",
      observacao: "Excelente ritmo"
    },
    {
      id: 5,
      id_maquina: "SWF-01",
      data: "2025-10-16",
      hora_inicio: "09:30:00",
      hora_fim: "11:00:00",
      pecas: 11,
      quantidade_pontos: 41200,
      operador: "João Silva",
      observacao: ""
    },
  ]
};

const Index = () => {
  const [dados, setDados] = useState(dadosExemplo);

  useEffect(() => {
    // Aqui você fará a integração com a API/banco de dados
    // Exemplo:
    // fetch('/api/producoes')
    //   .then(res => res.json())
    //   .then(data => setDados(data));
  }, []);

  return (
    <div className="bg-background p-6 md:p-8">
        {/* Indicadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <CardIndicador
            titulo="Peças Produzidas"
            valor={dados.totalPecas}
            icon={Package}
            variant="primary"
            descricao="Total do dia"
          />
          <CardIndicador
            titulo="Pontos Bordados"
            valor={dados.totalPontos.toLocaleString()}
            icon={TrendingUp}
            variant="secondary"
            descricao="Total do dia"
          />
          <CardIndicador
            titulo="Tempo Médio"
            valor={dados.tempoMedio}
            icon={Clock}
            variant="info"
            descricao="Por peça"
          />
          <CardIndicador
            titulo="Máquinas Ativas"
            valor={dados.producoesMaquina.length}
            icon={Activity}
            variant="info"
            descricao="Em operação"
          />
        </div>

        {/* Gráfico e Tabela */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <GraficoProdutividade dados={dados.producoesMaquina} />
          
          <div className="bg-card rounded-lg p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resumo Rápido</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">Eficiência Média</span>
                <span className="text-lg font-bold text-success">94.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">Meta Diária</span>
                <span className="text-lg font-bold text-primary">150 peças</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">Progresso</span>
                <span className="text-lg font-bold text-foreground">84.7%</span>
              </div>
              <div className="mt-4 p-4 bg-gradient-orange rounded-lg text-center">
                <p className="text-sm text-primary-foreground/90 mb-1">Faltam para a meta</p>
                <p className="text-2xl font-bold text-primary-foreground">23 peças</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de Produções */}
        <TabelaProducoes producoes={dados.ultimasProducoes} />

      {/* Informação sobre conexão com banco */}
      <div className="mt-8 p-6 bg-muted/50 border-2 border-dashed border-border rounded-lg text-center">
        <p className="text-muted-foreground mb-2">
          💡 <strong>Conecte ao banco de dados</strong> para registrar e visualizar produções reais
        </p>
        <p className="text-sm text-muted-foreground">
          Os dados acima são exemplos. Configure o Lovable Cloud para integração completa.
        </p>
      </div>
    </div>
  );
};

export default Index;
