namespace ObjectOrientedGod.Concrete.Mythology.Eastern
{
    public class Tao : Core.God
    {
        public override Transcendence TranscendenceType => Transcendence.Immanent;
        public override Temporality TemporalityType => Temporality.EternalPresent;
        public override Necessity ExistenceType => Necessity.SelfCaused;

        public override bool HasPrescience => false;
        public override bool HasPerfectKnowledge => true; // Conhece o fluxo natural

        public override Morality MoralityType => Morality.NotApplicable;
        public override Freedom DivineFreedom => Freedom.SelfLimited;

        public override bool IsSelfAware => false; // O Tao não tem consciência pessoal

        public override void ManifestReality()
            => Console.WriteLine("Flowing effortlessly like water, sustaining all things without action");

        public override string CosmicPrinciple()
            => "The way that cannot be named, mother of heaven and earth";
    }
}