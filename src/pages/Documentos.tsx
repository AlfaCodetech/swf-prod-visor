import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Search, Upload, Book, FileCheck, AlertCircle } from "lucide-react";
import { useState } from "react";

const documentosMock = [
  {
    id: 1,
    titulo: "Manual de Operação SWF-01",
    categoria: "Manual",
    tamanho: "2.4 MB",
    data: "2025-10-01",
    tipo: "PDF",
    status: "Atual"
  },
  {
    id: 2,
    titulo: "Procedimentos de Manutenção",
    categoria: "Manual",
    tamanho: "1.8 MB",
    data: "2025-09-15",
    tipo: "PDF",
    status: "Atual"
  },
  {
    id: 3,
    titulo: "Checklist Diário de Produção",
    categoria: "Formulário",
    tamanho: "156 KB",
    data: "2025-10-10",
    tipo: "XLSX",
    status: "Atual"
  },
  {
    id: 4,
    titulo: "Normas de Segurança",
    categoria: "Regulamento",
    tamanho: "892 KB",
    data: "2025-08-20",
    tipo: "PDF",
    status: "Atual"
  },
  {
    id: 5,
    titulo: "Guia de Padrões de Bordado",
    categoria: "Guia",
    tamanho: "5.2 MB",
    data: "2025-09-28",
    tipo: "PDF",
    status: "Atual"
  },
  {
    id: 6,
    titulo: "Relatório Mensal - Setembro",
    categoria: "Relatório",
    tamanho: "3.1 MB",
    data: "2025-10-05",
    tipo: "PDF",
    status: "Arquivado"
  },
];

const Documentos = () => {
  const [busca, setBusca] = useState("");

  const documentosFiltrados = documentosMock.filter(doc => 
    doc.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    doc.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  const getIconeCategoria = (categoria: string) => {
    switch(categoria) {
      case "Manual": return Book;
      case "Formulário": return FileCheck;
      case "Regulamento": return AlertCircle;
      default: return FileText;
    }
  };

  return (
    <div className="bg-background p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Documentos</h2>
          <p className="text-muted-foreground mt-1">Manuais, formulários e documentos técnicos</p>
        </div>
        <Button className="gap-2">
          <Upload className="w-4 h-4" />
          Upload
        </Button>
      </div>

      {/* Busca e Filtros */}
      <Card className="p-6 mb-6 shadow-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar documentos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </Card>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 shadow-card border-l-4 border-l-primary">
          <p className="text-sm text-muted-foreground mb-1">Total de Documentos</p>
          <p className="text-2xl font-bold text-foreground">6</p>
        </Card>
        <Card className="p-4 shadow-card border-l-4 border-l-secondary">
          <p className="text-sm text-muted-foreground mb-1">Manuais</p>
          <p className="text-2xl font-bold text-foreground">2</p>
        </Card>
        <Card className="p-4 shadow-card border-l-4 border-l-info">
          <p className="text-sm text-muted-foreground mb-1">Formulários</p>
          <p className="text-2xl font-bold text-foreground">1</p>
        </Card>
        <Card className="p-4 shadow-card border-l-4 border-l-warning">
          <p className="text-sm text-muted-foreground mb-1">Atualizados Recente</p>
          <p className="text-2xl font-bold text-foreground">3</p>
        </Card>
      </div>

      {/* Lista de Documentos */}
      <div className="grid grid-cols-1 gap-4">
        {documentosFiltrados.map((doc) => {
          const IconeCategoria = getIconeCategoria(doc.categoria);
          return (
            <Card key={doc.id} className="p-6 shadow-card hover:shadow-elevated transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconeCategoria className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{doc.titulo}</h3>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant="outline">{doc.categoria}</Badge>
                      <Badge variant="secondary">{doc.tipo}</Badge>
                      <Badge variant={doc.status === "Atual" ? "default" : "secondary"}>
                        {doc.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground ml-2">
                        {doc.tamanho} • {new Date(doc.data).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Mensagem quando não há documentos */}
      {documentosFiltrados.length === 0 && (
        <Card className="p-12 text-center shadow-card">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Nenhum documento encontrado</p>
        </Card>
      )}
    </div>
  );
};

export default Documentos;
