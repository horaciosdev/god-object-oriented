import { ConfiguracaoCosmica, Universo } from "../../tipos";

export interface Criador {
  criarUniverso(config: ConfiguracaoCosmica): Universo;
}
