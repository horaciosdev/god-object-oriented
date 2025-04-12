namespace ObjectOrientedGod.Concrete.ClassicalTheism
{
    public class TheistGod : Core.God
    {
        public override Transcendence TranscendenceType => Transcendence.PurelyTranscendent;
        public override Temporality TemporalityType => Temporality.Timeless;
        public override Necessity ExistenceType => Necessity.Necessary;

        public override bool HasPrescience => true;
        public override bool HasPerfectKnowledge => true;

        public override Morality MoralityType => Morality.DivineEssence;
        public override Freedom DivineFreedom => Freedom.LogicalOmnipotence;

        public override bool IsSelfAware => true;

        public override void ManifestReality()
            => Console.WriteLine("Ex nihilo creation sustained by perpetual will");

        public override string CosmicPrinciple()
            => "Uncaused cause, ultimate foundation of all contingency";
    }
}