// Tipos auxiliares genéricos e placeholders

export type ConfiguracaoCosmica = any;
export type Universo = any;
export type Qualquer = any;

export type Acao = {
  descricao: string;
  intencao: string;
};

export type JuizoMoral = 'bom' | 'mau' | 'neutro' | 'inefável';

export type Pedido = {
  tipo: string;
  conteudo: string;
};

export type Resposta = {
  status: 'atendido' | 'ignorado' | 'adiado' | 'incompreensível';
  mensagem?: string;
};

export type Resultado = {
  sucesso: boolean;
  descricao: string;
};
