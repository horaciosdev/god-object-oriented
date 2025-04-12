namespace ObjectOrientedGod.Core
{
    public abstract class God
    {
        // Ontological Attributes - Atributos Ontológicos referem-se à natureza do ser e da existência de Deus.

        // Transcendência é a qualidade de estar além do mundo físico e da experiência humana.
        public abstract Transcendence TranscendenceType { get; }
        // Temporalidade refere-se à relação de Deus com o tempo, se Ele é atemporal ou temporal.
        public abstract Temporality TemporalityType { get; }
        // Necessidade refere-se à natureza da existência de Deus, se Ele é necessário ou contingente.
        public abstract Necessity ExistenceType { get; }


        // Epistemological Attributes - Atributos Epistemológicos referem-se à natureza do conhecimento e da consciência de Deus.

        // Presciência refere-se ao conhecimento prévio de Deus sobre eventos futuros.
        public abstract bool HasPrescience { get; }

        // Conhecimento perfeito refere-se à capacidade de Deus de conhecer todas as verdades, passadas, presentes e futuras.
        public abstract bool HasPerfectKnowledge { get; }

        // Moral Attributes - Atributos Morais referem-se à natureza ética e moral de Deus.

        // Moralidade refere-se à natureza da moralidade divina, se é objetiva ou subjetiva.
        public abstract Morality MoralityType { get; }

        // Liberdade refere-se à natureza da liberdade divina, se Deus é livre ou determinado.
        public abstract Freedom DivineFreedom { get; }

        // Consciousness - Consciência refere-se à natureza da autoconsciência de Deus.
        public abstract bool IsSelfAware { get; }

        // Methods

        // Manifestar a realidade é a ação de Deus de criar ou sustentar o universo.
        // Isso pode incluir a criação do mundo, a manutenção da ordem cósmica ou a interação com a criação.
        public abstract void ManifestReality();

        // Cosmic Principle - Princípio Cosmico refere-se ao princípio cosmico de Deus.
        // Isso pode incluir a ideia de que Deus é o princípio criador ou sustentador do universo ou que Ele é a própria realidade última.
        public abstract string CosmicPrinciple();
    }
}