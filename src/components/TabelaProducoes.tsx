import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Producao {
  id: number;
  id_maquina: string;
  data: string;
  hora_inicio: string;
  hora_fim: string;
  pecas: number;
  quantidade_pontos: number;
  operador: string;
  observacao?: string;
}

interface TabelaProducoesProps {
  producoes: Producao[];
}

export const TabelaProducoes = ({ producoes }: TabelaProducoesProps) => {
  const formatarHora = (hora: string) => {
    return hora.substring(0, 5);
  };

  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Últimas Produções</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Máquina</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead className="text-right">Peças</TableHead>
              <TableHead className="text-right">Pontos</TableHead>
              <TableHead>Operador</TableHead>
              <TableHead>Observação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {producoes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  Nenhuma produção registrada hoje
                </TableCell>
              </TableRow>
            ) : (
              producoes.map((producao) => (
                <TableRow key={producao.id}>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      #{producao.id_maquina}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatarData(producao.data)}</TableCell>
                  <TableCell className="font-mono text-sm">
                    {formatarHora(producao.hora_inicio)} - {formatarHora(producao.hora_fim)}
                  </TableCell>
                  <TableCell className="text-right font-semibold">{producao.pecas}</TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {producao.quantidade_pontos.toLocaleString()}
                  </TableCell>
                  <TableCell>{producao.operador}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                    {producao.observacao || "-"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
