import { Qualquer } from "../../tipos";

export interface Sustentador {
  sustentarExistencia(entidade: Qualquer): boolean;
}
