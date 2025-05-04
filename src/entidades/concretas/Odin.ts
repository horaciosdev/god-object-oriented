import { Deus } from "../abstrato/Deus";
import { Politeista, Mitologica } from "../../contratos/categorias";
import { Criador } from "../../contratos/capacidades/Criador";
import { Moral } from "../../contratos/capacidades/Moral";
import { Relacional } from "../../contratos/capacidades/Relacional";
import { ConfiguracaoCosmica, Universo, Acao, JuizoMoral, Pedido, Resposta } from "../../tipos";

/**
 * Odin: deus principal da mitologia nórdica
 * - Politeista: opera dentro de um panteão com outros deuses
 * - Mitologica: parte central da mitologia nórdica
 * - Criador: participou da criação do mundo a partir de Ymir
 * - Moral: julga valor, honra e coragem
 * - Relacional: interage com mortais através de visões e sabedoria
 */
export class Odin extends Deus implements Politeista, Mitologica, Criador, Moral, Relacional {
  readonly onipotencia = false;     // Poder limitado, sujeito ao destino (Ragnarök)
  readonly onisciencia = false;     // Busca conhecimento, sacrificou olho na fonte de Mímir
  readonly onipresenca = false;     // Localizado em Asgard, viaja pelos reinos
  readonly eternidade = false;      // Mortal (morrerá no Ragnarök)
  readonly imutabilidade = false;   // Evolui e muda com experiências
  readonly perfeicao = false;       // Tem falhas e limitações
  readonly simplicidade = false;    // Natureza complexa e paradoxal
  readonly livre_arbitrio = true;   // Age por vontade própria
  readonly moralidade: 'arbitrária' = 'arbitrária';  // Baseada em conceitos de honra e valor
  readonly necessidadeOuContingencia: 'contingente' = 'contingente';  // Nasceu de outros seres
  readonly origem: 'não_definida' = 'não_definida';  // Filho de Bor e Bestla

  criarUniverso(config: ConfiguracaoCosmica): Universo {
    // Criou o mundo a partir do corpo do gigante Ymir
    return {
      midgard: "Criado dos restos de Ymir",
      yggdrasil: "Árvore do mundo que conecta os nove reinos"
    } as Universo;
  }

  julgarAcoes(acao: Acao): JuizoMoral {
    // Julga baseado em conceitos de coragem, honra e sabedoria
    if (acao.descricao.toLowerCase().includes("coragem") || 
        acao.descricao.toLowerCase().includes("honra") ||
        acao.descricao.toLowerCase().includes("sabedoria")) {
      return 'bom';
    }
    
    if (acao.descricao.toLowerCase().includes("covardia") || 
        acao.descricao.toLowerCase().includes("desonra")) {
      return 'mau';
    }
    
    return 'neutro';
  }

  ouvirOracao(requisicao: Pedido): Resposta {
    // Responde principalmente a pedidos de sabedoria e vitória em batalha
    if (requisicao.tipo === "sabedoria" || requisicao.tipo === "conhecimento") {
      return { 
        status: 'atendido', 
        mensagem: "O conhecimento tem seu preço, como meu olho na fonte de Mímir." 
      };
    }
    
    if (requisicao.tipo === "batalha" || requisicao.tipo === "guerra") {
      return { 
        status: 'atendido', 
        mensagem: "A glória ou a morte te aguardam. Talvez um lugar em Valhalla." 
      };
    }
    
    return { status: 'ignorado' };
  }
}