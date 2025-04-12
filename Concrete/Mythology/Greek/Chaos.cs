namespace ObjectOrientedGod.Concrete.Mythology.Greek
{
    public class Chaos : Core.God
    {
        public override Transcendence TranscendenceType => Transcendence.PurelyTranscendent;
        public override Temporality TemporalityType => Temporality.EternalLinear;
        public override Necessity ExistenceType => Necessity.Contingent;

        public override bool HasPrescience => false;
        public override bool HasPerfectKnowledge => false;

        public override Morality MoralityType => Morality.NotApplicable;
        public override Freedom DivineFreedom => Freedom.SelfLimited;

        public override bool IsSelfAware => false;

        public override void ManifestReality()
            => Console.WriteLine("Unintentional emergence of Kosmos from the primordial vortex");

        public override string CosmicPrinciple()
            => "Unintentional generative principle preceding order";
    }
}