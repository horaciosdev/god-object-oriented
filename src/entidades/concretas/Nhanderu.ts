import { Deus } from "../abstrato/Deus";
import { Criador } from "../../contratos/capacidades/Criador";
import { Relacional } from "../../contratos/capacidades/Relacional";
import { Moral } from "../../contratos/capacidades/Moral";
import { Sustentador } from "../../contratos/capacidades/Sustentador";
import { ConfiguracaoCosmica, Universo, Qualquer, Acao, JuizoMoral, Pedido, Resposta } from "../../tipos";

/**
 * Nhanderu: divindade criadora na cosmologia Guarani
 * - Criador: responsável pela primeira terra e todos os seres
 * - Relacional: comunica-se através de sonhos e xamãs
 * - Moral: orienta sobre a "boa vivência" (teko porã)
 * - Sustentador: mantém a existência através do canto sagrado
 */
export class Nhanderu extends Deus implements Criador, Relacional, Moral, Sustentador {
  readonly onipotencia = true;      // Poder criador supremo
  readonly onisciencia = true;      // Conhece todos os caminhos
  readonly onipresenca = false;     // Habita principalmente Yvy Marã'ey (Terra sem Males)
  readonly eternidade = true;       // Existia antes da primeira terra
  readonly imutabilidade = false;   // Interage e evolui com a criação
  readonly perfeicao = true;        // Ser perfeito em sua essência
  readonly simplicidade = false;    // Natureza complexa com múltiplos aspectos
  readonly livre_arbitrio = true;   // Age conforme sua vontade
  readonly moralidade: 'perfeita' = 'perfeita';  // Fundamenta o teko porã (boa vivência)
  readonly necessidadeOuContingencia: 'necessario' = 'necessario';  // Existência necessária
  readonly origem: 'causa_sui' = 'causa_sui';  // Auto-originado nas trevas primordiais

  criarUniverso(config: ConfiguracaoCosmica): Universo {
    // Criou a primeira terra através do som primordial e da sabedoria divina
    return {
      yvy: "A terra criada pela palavra-alma (ñe'ẽ)",
      avaete: "Os verdadeiros humanos, filhos de Nhanderu"
    } as Universo;
  }

  sustentarExistencia(entidade: Qualquer): boolean {
    // Sustenta através do canto sagrado (mboraí) e da palavra-alma
    return true;
  }

  julgarAcoes(acao: Acao): JuizoMoral {
    // Julga conforme os princípios do teko porã (boa vivência)
    if (acao.descricao.toLowerCase().includes("harmonia") || 
        acao.descricao.toLowerCase().includes("comunidade") ||
        acao.descricao.toLowerCase().includes("natureza") ||
        acao.intencao.toLowerCase().includes("bem coletivo")) {
      return 'bom';
    }
    
    if (acao.descricao.toLowerCase().includes("destruição") || 
        acao.descricao.toLowerCase().includes("egoísmo") ||
        acao.intencao.toLowerCase().includes("exploração")) {
      return 'mau';
    }
    
    return 'neutro';
  }

  ouvirOracao(requisicao: Pedido): Resposta {
    // Responde principalmente através de sonhos, visões e do xamã
    if (requisicao.tipo === "cura" || requisicao.tipo === "orientação") {
      return { 
        status: 'atendido', 
        mensagem: "A resposta virá através dos sonhos e do karaí (xamã)." 
      };
    }
    
    if (requisicao.tipo === "proteção" || requisicao.tipo === "fertilidade") {
      return { 
        status: 'atendido', 
        mensagem: "A vida se renova pelo poder da palavra sagrada." 
      };
    }
    
    return { 
      status: 'adiado',
      mensagem: "Busque entendimento através do ritual e da dança."
    };
  }
}