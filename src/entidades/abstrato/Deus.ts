import { Resultado } from "../../tipos";

// Classe abstrata com atributos filosófico-teológicos associados a um "Deus"
export abstract class Deus {
  // === ATRIBUTOS CLÁSSICOS (Teologia Clássica, Filosofia Medieval) ===

  abstract readonly onipotencia: boolean;       // Poder absoluto
  abstract readonly onisciencia: boolean;       // Conhecimento absoluto
  abstract readonly onipresenca: boolean;       // Presença em todos os lugares
  abstract readonly eternidade: boolean;        // Existência fora do tempo
  abstract readonly imutabilidade: boolean;     // Não sujeito a mudanças
  abstract readonly perfeicao: boolean;         // Sem falhas ou limitações
  abstract readonly simplicidade: boolean;      // Sem partes (argumento neoplatônico)

  // === ATRIBUTOS MODERNOS / DEBATES FILOSÓFICOS ===

  abstract readonly livre_arbitrio: boolean;    // Capacidade de agir sem restrição

  // === MORALIDADE DIVINA ===
  abstract readonly moralidade: 'perfeita' | 'arbitrária' | 'ininteligível';

  // === NECESSIDADE OU CONTINGÊNCIA DA EXISTÊNCIA DIVINA ===
  abstract readonly necessidadeOuContingencia: 'necessario' | 'contingente';

  // === ORIGEM DE DEUS ===
  abstract readonly origem: 'causa_sui' | 'não_definida';

  // === MÉTODOS CONCEITUAIS (Alguns paradoxais) ===

  // Exemplo de intervenção divina
  executarMilagre(regrasFisicas: boolean): Resultado {
    return {
      sucesso: true,
      descricao: regrasFisicas
        ? "Milagre respeitou as leis físicas (coerente com deísmo ou teísmo fraco)"
        : "Milagre que viola leis naturais (coerente com teísmo clássico ou intervencionista)"
    };
  }
}
