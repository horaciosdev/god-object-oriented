import { Acao, JuizoMoral } from "../../tipos";

export interface Moral {
  julgarAcoes(acao: Acao): JuizoMoral;
}