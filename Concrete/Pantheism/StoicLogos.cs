namespace ObjectOrientedGod.Concrete.Pantheism
{
    public class StoicLogos : Core.God, Core.Interfaces.ICosmicPrinciple
    {
        public override Core.Attributes.Ontological.Transcendence TranscendenceType
            => Core.Attributes.Ontological.Transcendence.Immanent;

        public override Core.Attributes.Ontological.Temporality TemporalityType
            => Core.Attributes.Ontological.Temporality.EternalPresent;

        public override Core.Attributes.Ontological.Necessity ExistenceType
            => Core.Attributes.Ontological.Necessity.Necessary;

        public override bool HasPrescience => true;
        public override bool HasPerfectKnowledge => true;

        public override Core.Attributes.Moral.Morality MoralityType
            => Core.Attributes.Moral.Morality.DivineEssence;

        public override Core.Freedom DivineFreedom
            => Core.Freedom.Determinist;

        public override bool IsSelfAware => true;

        public override void ManifestReality()
            => Console.WriteLine("Rational ordering of the cosmos");

        public override string CosmicPrinciple()
            => "Universal reason governing all things";

        // ICosmicPrinciple implementation
        public string ExplainCreation() => "Through rational emanation";
        public bool IsCyclic => true;
    }
}