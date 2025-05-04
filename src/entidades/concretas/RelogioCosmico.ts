import { Deus } from "../abstrato/Deus";
import { Deista } from "../../contratos/categorias";
import { Criador } from "../../contratos/capacidades/Criador";
import { ConfiguracaoCosmica, Universo } from "../../tipos";

/**
 * RelogioCosmico: representação do conceito deísta de divindade
 * - Deista: criou o universo e o deixou funcionar por suas próprias leis
 * - Criador: estabeleceu as leis naturais e iniciou o cosmos
 * - Não é Sustentador: o universo se mantém por suas próprias leis
 * - Não é Relacional: não intervém após a criação
 * - Não é Moral: não julga ações humanas diretamente
 */
export class RelogioCosmico extends Deus implements Deista, Criador {
  readonly onipotencia = true;      // Poder total na criação
  readonly onisciencia = true;      // Conhecimento total das leis naturais
  readonly onipresenca = false;     // Não está presente no universo criado
  readonly eternidade = true;       // Existe fora do tempo
  readonly imutabilidade = true;    // Não muda após a criação
  readonly perfeicao = true;        // Perfeição nas leis naturais estabelecidas
  readonly simplicidade = true;     // Princípio simples e unificador
  readonly livre_arbitrio = true;   // Agiu livremente ao criar
  readonly moralidade: 'ininteligível' = 'ininteligível';  // Não se envolve em questões morais
  readonly necessidadeOuContingencia: 'necessario' = 'necessario';  // Existe por necessidade
  readonly origem: 'causa_sui' = 'causa_sui';  // Causa primeira

  criarUniverso(config: ConfiguracaoCosmica): Universo {
    // Criou com leis físicas perfeitas e imutáveis
    return {
      leisFisicas: "Constantes e imutáveis",
      evolucaoNatural: "Auto-sustentada sem intervenção"
    } as Universo;
  }

  // Override do método da classe abstrata para refletir não-intervenção
  executarMilagre(): never {
    throw new Error("RelogioCosmico não realiza milagres ou intervenções após a criação");
  }
}