import { Deus } from "../abstrato/Deus";
import { Teista } from "../../contratos/categorias";
import { Criador } from "../../contratos/capacidades/Criador";
import { Moral } from "../../contratos/capacidades/Moral";
import { Relacional } from "../../contratos/capacidades/Relacional";
import { Sustentador } from "../../contratos/capacidades/Sustentador";
import { ConfiguracaoCosmica, Universo, Qualquer, Acao, JuizoMoral, Pedido, Resposta } from "../../tipos";

/**
 * Yahweh: exemplo de Deus abraâmico
 * - Teista: pessoal, intervém e julga
 * - Criador: originou o cosmos
 * - Sustentador: mantém os seres
 * - Moral: julga ações humanas
 * - Relacional: ouve orações
 */
export class Yahweh
  extends Deus
  implements
    Teista,
    Criador,
    Sustentador,
    Moral,
    Relacional
{
  readonly onipotencia = true;
  readonly onisciencia = true;
  readonly onipresenca = true;
  readonly eternidade = true;
  readonly imutabilidade = true;
  readonly perfeicao = true;
  readonly simplicidade = true;
  readonly livre_arbitrio = true;
  readonly moralidade: 'perfeita' = 'perfeita';
  readonly necessidadeOuContingencia: 'necessario' = 'necessario';
  readonly origem: 'causa_sui' = 'causa_sui';

  criarUniverso(config: ConfiguracaoCosmica): Universo {
    // lógica de criação ex nihilo
    return {} as Universo;
  }

  sustentarExistencia(entidade: Qualquer): boolean {
    // mantém a existência contínua
    return true;
  }

  julgarAcoes(acao: Acao): JuizoMoral {
    // juízo divino conforme moralidade perfeita
    return 'bom';
  }

  ouvirOracao(requisicao: Pedido): Resposta {
    // responde com providência
    return { status: 'atendido', mensagem: 'Providência concedida.' };
  }
}