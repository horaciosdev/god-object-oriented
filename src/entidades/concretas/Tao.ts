import { Deus } from "../abstrato/Deus";
import { Panteista } from "../../contratos/categorias";
import { Criador } from "../../contratos/capacidades/Criador";
import { Sustentador } from "../../contratos/capacidades/Sustentador";
import { ConfiguracaoCosmica, Universo, Qualquer } from "../../tipos";

/**
 * Tao: o princípio fundamental do taoísmo
 * - Panteista: não é uma entidade pessoal mas um princípio imanente
 * - Criador: fonte de todas as coisas (wuji)
 * - Sustentador: mantém o equilíbrio cósmico através da harmonia de opostos
 */
export class Tao extends Deus implements Panteista, Criador, Sustentador {
  readonly onipotencia = true;      // Contém todo o potencial do universo
  readonly onisciencia = true;      // Sabe tudo por ser tudo
  readonly onipresenca = true;      // Está em tudo e é tudo
  readonly eternidade = true;       // Existe além do tempo
  readonly imutabilidade = true;    // Constante e imutável em sua essência
  readonly perfeicao = true;        // Perfeito em sua simplicidade
  readonly simplicidade = true;     // O princípio mais simples de todos
  readonly livre_arbitrio = false;  // Não age com intenção, apenas flui naturalmente
  readonly moralidade: 'ininteligível' = 'ininteligível';  // Além da dualidade do bem e mal
  readonly necessidadeOuContingencia: 'necessario' = 'necessario';  // Existência necessária
  readonly origem: 'causa_sui' = 'causa_sui';  // Auto-originado no vazio primordial

  criarUniverso(config: ConfiguracaoCosmica): Universo {
    // Criação não-intencional através da polaridade yin-yang
    return {
      dao: "O caminho que não pode ser nomeado",
      yinYang: "Harmonia dos opostos que gera os dez mil seres"
    } as Universo;
  }

  sustentarExistencia(entidade: Qualquer): boolean {
    // Sustenta através do equilíbrio natural (wu-wei)
    return true;
  }

  // Sobrescrever o método de milagre para refletir a natureza não-intervencionista
  executarMilagre(): never {
    throw new Error("O Tao não realiza milagres, apenas flui naturalmente");
  }
}