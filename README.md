# **Ontologia dos Deuses**

Este projeto procura modelar, de forma filosófico-tecnológica, entidades divinas e as suas categorias, capacidades e atributos, utilizando TypeScript. A estrutura foi pensada para permitir a representação de diferentes conceções de "Deus" e divindades, abrangendo desde abordagens clássicas até interpretações modernas e culturais diversas.

## **Estrutura do Projeto**

* src/contratos/: Define contratos (interfaces) fundamentais para categorias, capacidades e bases metafísicas de entidades divinas.  
  * categorias.ts: Interfaces que marcam categorias filosóficas/religiosas (teísta, deísta, panteísta, etc.).  
  * bases/EntidadeDivina.ts: Contrato mínimo para algo ser considerado "Deus", incluindo moralidade, necessidade/contingência e origem.  
  * capacidades/: Contratos para capacidades específicas como Criador, Sustentador, Relacional e Moral.  
* src/entidades/: Implementações de entidades divinas.  
  * abstrato/Deus.ts: Classe abstrata com atributos clássicos (onipotência, onisciência, etc.) e métodos conceptuais (como executar milagres).  
  * concretas/: Implementações de divindades específicas de diferentes tradições e filosofias (ex: Brahman, Yahweh, Zeus, Odin, Tao, Nhanderu, Espinosa, Relógio Cósmico, Mente Computacional).  
* src/tipos/: Tipos auxiliares para ações, resultados, pedidos, respostas e juízos morais.

## **Principais Conceitos**

* **Categorias**: Permitem classificar entidades divinas conforme correntes filosóficas/religiosas (teísmo, panteísmo, deísmo, etc.).  
* **Contratos de Capacidades**: Interfaces que especificam habilidades ou papéis que uma entidade divina pode desempenhar.  
* **Classe Abstrata Deus**: Base para definição de divindades, incluindo atributos clássicos e modernos, além de métodos exemplificativos.  
* **Entidades Concretas**: Representações de deuses e conceitos divinos de diferentes culturas e sistemas filosóficos.

## **Exemplos de Uso**

Pode criar novas entidades divinas implementando os contratos e/ou estendendo a classe abstrata Deus, além de categorizar e atribuir capacidades conforme necessário.

// Exemplo de implementação simples  
import { Deus } from './src/entidades/abstrato/Deus';

class MeuDeus extends Deus {  
  // Implementação dos atributos e métodos abstratos...  
}

## **Motivação**

O projeto serve como base para estudos comparativos de ontologia, filosofia da religião e modelagem de sistemas conceptuais complexos, podendo ser expandido para simulações, jogos, ou aplicações educacionais.

## Licença

Este projeto é licenciado sob a GNU General Public License versão 3 (GPLv3). Você pode encontrar uma cópia completa da licença no arquivo [LICENSE](LICENSE.txt) na raiz deste repositório.

Copyright (C) 2025 Horácio Schumann