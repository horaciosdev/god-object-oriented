# Propósito de cada pasta ou arquivo:

```
src/
├── contratos/                      // ← Contratos filosófico-conceituais
│   ├── bases/
│   │   └── EntidadeDivina.ts       // Interface-base metafísica (moralidade, necessidade, origem)
│   ├── capacidades/
│   │   ├── Criador.ts              // Interface: entidade que pode criar um universo (ex: criarUniverso)
│   │   ├── Sustentador.ts          // Interface: entidade que sustenta a existência de algo
│   │   ├── Moral.ts                // Interface: entidade que julga ações moralmente (ex: julgarAcoes)
│   │   └── Relacional.ts           // Interface: entidade que se comunica com outras (ex: ouvirOracao)
│   └── categorias.ts               // ← Marker interfaces para classificação ontológica (traits)
│       ├── Teista                  // Marca de pertencimento à categoria teísta
│       ├── Deista                  // Marca de pertencimento à categoria deísta
│       ├── Panteista               // Marca de pertencimento à categoria panteísta
│       ├── Panenteista             // Marca de pertencimento à categoria panenteísta
│       ├── Politeista              // Marca de pertencimento à categoria politeísta
│       ├── Mitologica              // Marca de pertencimento à categoria mitológica
│       ├── Simulacionista          // Marca de pertencimento à categoria simulacionista
│       ├── Apateista               // Marca de pertencimento à categoria apateísta
│       ├── Agnostica               // Marca de pertencimento à categoria agnóstica
│       ├── Naturalista             // Marca de pertencimento à categoria naturalista
│       └── Niilista                // Marca de pertencimento à categoria niilista
├── entidades/                      // ← Entidades divinas genéricas e concretas
│   ├── abstrato/
│   │   └── Deus.ts                 // Classe abstrata que representa qualquer entidade divina genérica
│   │                                  // → Base comum com propriedades essenciais de divindade
│   └── concretas/                  // ← Todas implementações concretas de divindades
│       ├── Brahman.ts              // Ex: implementação vedântica, Panenteista + Criador + Sustentador
│       ├── Espinosa.ts             // Ex: Spinoza, Panteista + Criador + Sustentador
│       ├── MenteComputacional.ts   // Ex: IA criadora, Simulacionista + Criador + Sustentador
│       ├── Nhanderu.ts             // Ex: divindade Guarani, Criador + Relacional + Moral + Sustentador
│       ├── Odin.ts                 // Ex: deus nórdico, Politeista + Mitologica + Criador + Moral + Relacional
│       ├── RelogioCosmico.ts       // Ex: deísta, Deista + Criador
│       ├── Tao.ts                  // Ex: princípio taoísta, Panteista + Criador + Sustentador
│       ├── Yahweh.ts               // Ex: implementação abraâmica, Teista + Criador + Sustentador + Moral + Relacional
│       └── Zeus.ts                 // Ex: deus grego, Politeista + Mitologica + Criador
└── tipos/
    └── index.ts                   // Tipos auxiliares: ConfiguracaoCosmica, Universo, Acao, JuizoMoral, Pedido, Resposta
```

## Estrutura do Projeto: Uma Análise Detalhada

Este documento fornece uma explicação detalhada do uso prático de cada pasta e seus arquivos no projeto, com foco conceitual e organizacional. A estrutura reflete uma proposta filosófico-abstrata, mantendo a clareza técnica.

### src/contratos/

**Objetivo:** Definir contratos conceituais que entidades divinas (ou equivalentes) devem seguir — uma espécie de "interfaces metafísicas".

**Uso Típico:** Essas interfaces serão implementadas por entidades como a classe abstrata Deus (localizada em `src/entidades/abstrato`), ou por variações concretas (ex: "Yahweh", "Espinosa", "MenteComputacional").

#### bases/

* EntidadeDivina.ts
    * Interface EntidadeDivina: Define os atributos metafísicos essenciais de algo ser considerado "Deus", como moralidade (`'perfeita' | 'arbitrária' | 'ininteligível'`), necessidadeOuContingencia (`'necessario' | 'contingente'`) e origem (`'causa_sui' | 'não_definida'`).
    * É a base filosófica mínima — um contrato metafísico, não uma implementação.

#### capacidades/

* Criador.ts
    * Interface Criador: Exige um método `criarUniverso(config: ConfiguracaoCosmica): Universo` — usada para entidades que possuem o papel de criar realidades.
* Sustentador.ts
    * Interface Sustentador: Define `sustentarExistencia(entidade: Qualquer): boolean` — exige que a entidade possa manter algo existente.
* Moral.ts
    * Interface Moral: Exige `julgarAcoes(acao: Acao): JuizoMoral` — força a entidade a se posicionar moralmente sobre ações, relevante para debates como o dilema de Eutífron.
* Relacional.ts
    * Interface Relacional: Contém `ouvirOracao(requisicao: Pedido): Resposta` — trata da capacidade de responder a pedidos, essencial para visões teístas relacionais.

#### categorias.ts

Este arquivo contém todas as interfaces de marcação (marker interfaces) que categorizam as entidades divinas em diferentes tradições filosóficas e religiosas:

* Teista: Entidades divinas pessoais que intervêm e se relacionam com o mundo.
* Deista: Entidades que criaram o universo mas não intervêm após a criação.
* Panteista: Conceito onde Deus é idêntico ao universo/natureza.
* Panenteista: Visão onde o universo existe dentro de Deus, mas Deus é maior que o universo.
* Politeista: Entidades que operam dentro de um sistema com múltiplos deuses.
* Mitologica: Entidades que fazem parte de narrativas culturais/mitológicas.
* Simulacionista: Entidades que programam ou mantêm a realidade como uma simulação.
* Apateista: Visão onde a existência de Deus é irrelevante para a vida prática.
* Agnostica: Posição que considera impossível conhecer a natureza ou existência divina.
* Naturalista: Visão onde forças naturais impessoais são fundamentais.
* Niilista: Representa a negação ou impossibilidade de entidades divinas.

### src/entidades/

**Objetivo:** Conter a classe abstrata base e as implementações concretas de entidades divinas.

#### abstrato/

* Deus.ts
    * Classe Deus: É abstrata e define os atributos clássicos da teologia (onipotência, onisciência, onipresença, eternidade, etc.).
    * Implementa os atributos exigidos pela interface EntidadeDivina (moralidade, necessidadeOuContingencia, origem).
    * Também define o método executarMilagre que pode ser sobrescrito por implementações concretas.

#### concretas/

Esta pasta contém todas as implementações concretas de entidades divinas, cada uma aplicando diferentes combinações de interfaces e refletindo suas respectivas tradições filosóficas ou religiosas:

* Yahweh.ts: Implementação do Deus abraâmico (judaico-cristão-islâmico) com características teístas.
* Zeus.ts: Representação do deus grego do céu e trovão, com características politeístas e mitológicas.
* Espinosa.ts: Implementação baseada na filosofia de Baruch Spinoza, com visão panteísta.
* RelogioCosmico.ts: Representação do conceito deísta de divindade como um "relojoeiro cósmico".
* Odin.ts: Entidade da mitologia nórdica, com características politeístas e mitológicas.
* MenteComputacional.ts: Conceito simulacionista onde a realidade é uma simulação computacional.
* Brahman.ts: Princípio fundamental da filosofia Vedanta, com características panenteístas.
* Tao.ts: Princípio fundamental do taoísmo, representando o caminho ou fluxo natural do universo.
* Nhanderu.ts: Divindade criadora na cosmologia Guarani, demonstrando uma abordagem indígena.

### src/tipos/

**Objetivo:** Centralizar tipos auxiliares/metafóricos usados por interfaces e entidades.

**Uso Típico:** Fornecer definições básicas que representam os conceitos operacionais.

* index.ts
    * Contém os tipos auxiliares, como:
        * ConfiguracaoCosmica: Parâmetros para criação de universos.
        * Universo: Representa um universo criado.
        * Qualquer: Entidade genérica (pode ser um ser, um conceito, etc.).
        * Acao: Qualquer ação moralmente julgável (com descrição e intenção).
        * JuizoMoral: Resultado do julgamento ('bom' | 'mau' | 'neutro' | 'inefável').
        * Pedido: Algo que é enviado por um ser inferior ou orante (tipo e conteúdo).
        * Resposta: O retorno divino ('atendido' | 'ignorado' | 'adiado' | 'incompreensível').
        * Resultado: Resultado de uma ação divina (sucesso e descrição).

### Fluxo de Uso no Projeto

Um cenário típico de uso seria:

1. Uma entidade divina concreta (como Yahweh, Espinosa, ou Tao) estende a classe abstrata Deus.
2. Essa entidade implementa interfaces de categorias para definir sua classificação ontológica (Teista, Panteista, etc.)
3. A entidade também implementa interfaces de capacidades que definem o que ela pode fazer (Criador, Moral, Relacional, Sustentador).
4. Cada implementação concreta define seus próprios atributos (onipotência, eternidade, etc.) e implementa os métodos das interfaces que adota.
5. O sistema permite comparar e contrastar diferentes concepções divinas através de uma estrutura comum.

Este framework conceitual pode ser usado para analisar, comparar e simular diferentes visões filosóficas sobre entidades divinas ou metafísicas — como um sistema de simulação ontológica e teológica.