import { Deus } from "../abstrato/Deus";
import { Panenteista } from "../../contratos/categorias";
import { Criador } from "../../contratos/capacidades/Criador";
import { Sustentador } from "../../contratos/capacidades/Sustentador";
import { ConfiguracaoCosmica, Universo, Qualquer } from "../../tipos";

/**
 * Brahman: realidade última na filosofia Vedanta
 * - Panenteista: o universo existe dentro de Brahman, mas Brahman é mais que o universo
 * - Criador: fonte primordial de toda existência
 * - Sustentador: mantém tudo em existência como sua manifestação
 */
export class Brahman extends Deus implements Panenteista, Criador, Sustentador {
  readonly onipotencia = true;      // Poder absoluto como realidade última
  readonly onisciencia = true;      // Conhecimento absoluto como consciência pura
  readonly onipresenca = true;      // Presente em tudo e além de tudo
  readonly eternidade = true;       // Além do tempo, sem início nem fim
  readonly imutabilidade = true;    // Imutável em sua essência (nirguna)
  readonly perfeicao = true;        // Perfeição absoluta
  readonly simplicidade = true;     // Unidade absoluta (não-dualidade)
  readonly livre_arbitrio = false;  // Não age com intenção pessoal
  readonly moralidade: 'ininteligível' = 'ininteligível';  // Além dos conceitos morais
  readonly necessidadeOuContingencia: 'necessario' = 'necessario';  // Existência necessária
  readonly origem: 'causa_sui' = 'causa_sui';  // Auto-existente

  criarUniverso(config: ConfiguracaoCosmica): Universo {
    // Manifesta-se como o universo através de maya
    return {
      atman: "O self que é idêntico ao Brahman",
      maya: "A ilusão que manifesta a multiplicidade"
    } as Universo;
  }

  sustentarExistencia(entidade: Qualquer): boolean {
    // Tudo existe como manifestação do Brahman
    return true;
  }
}