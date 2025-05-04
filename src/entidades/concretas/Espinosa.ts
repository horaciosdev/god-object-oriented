import { Deus } from "../abstrato/Deus";
import { Panteista } from "../../contratos/categorias";
import { Criador } from "../../contratos/capacidades/Criador";
import { Sustentador } from "../../contratos/capacidades/Sustentador";
import { ConfiguracaoCosmica, Universo, Qualquer } from "../../tipos";

/**
 * Espinosa: representação do Deus de Baruch Spinoza
 * - Panteista: Deus é idêntico à Natureza (Deus sive Natura)
 * - Criador: não cria "ex nihilo", mas é a própria substância do universo
 * - Sustentador: sustenta tudo como manifestação de sua própria substância
 */
export class Espinosa extends Deus implements Panteista, Criador, Sustentador {
  readonly onipotencia = true;        // Todo poder está na natureza/substância
  readonly onisciencia = true;        // A substância contém todo o conhecimento possível
  readonly onipresenca = true;        // Está em tudo como substância única
  readonly eternidade = true;         // A substância é eterna
  readonly imutabilidade = true;      // As leis naturais são imutáveis
  readonly perfeicao = true;          // A substância única é completa e perfeita
  readonly simplicidade = true;       // Uma única substância fundamental
  readonly livre_arbitrio = false;    // Determinismo - tudo segue necessidade lógica
  readonly moralidade: 'ininteligível' = 'ininteligível';  // Além do bem e mal
  readonly necessidadeOuContingencia: 'necessario' = 'necessario';  // Existe por necessidade lógica
  readonly origem: 'causa_sui' = 'causa_sui';  // Causa de si mesmo

  criarUniverso(config: ConfiguracaoCosmica): Universo {
    // Não cria separadamente - é o próprio universo manifestando-se
    return {} as Universo;
  }

  sustentarExistencia(entidade: Qualquer): boolean {
    // Tudo que existe é modo ou atributo da substância única
    return true;
  }
}