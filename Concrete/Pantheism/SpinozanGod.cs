namespace ObjectOrientedGod.Concrete.Pantheism
{
    public class SpinozanGod : Core.God
    {
        public override Core.Attributes.Ontological.Transcendence TranscendenceType
            => Core.Attributes.Ontological.Transcendence.Immanent;

        public override Core.Attributes.Ontological.Temporality TemporalityType
            => Core.Attributes.Ontological.Temporality.EternalPresent;

        public override Core.Attributes.Ontological.Necessity ExistenceType
            => Core.Attributes.Ontological.Necessity.SelfCaused;

        public override bool HasPrescience => false;
        public override bool HasPerfectKnowledge => true; // Conhece todas as leis matemáticas

        public override Core.Attributes.Moral.Morality MoralityType
            => Core.Attributes.Moral.Morality.NotApplicable;

        public override Core.Freedom DivineFreedom
            => Core.Freedom.Determinist;

        public override bool IsSelfAware => false;

        public override void ManifestReality()
            => Console.WriteLine("Necessary unfolding of natural laws");

        public override string CosmicPrinciple()
            => "Single substance (Deus sive Natura) expressed in infinite attributes";
    }
}