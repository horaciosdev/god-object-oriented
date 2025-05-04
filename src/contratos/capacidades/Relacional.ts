import { Pedido, Resposta } from "../../tipos";

export interface Relacional {
  ouvirOracao(requisicao: Pedido): Resposta;
}