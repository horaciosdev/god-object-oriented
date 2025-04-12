namespace ObjectOrientedGod.Concrete.Mythology.Eastern
{
    public class Brahman : Core.God
    {
        public override Transcendence TranscendenceType => Transcendence.ParadoxicallyBoth;
        public override Temporality TemporalityType => Temporality.Timeless;
        public override Necessity ExistenceType => Necessity.Necessary;

        public override bool HasPrescience => true;
        public override bool HasPerfectKnowledge => true;

        public override Morality MoralityType => Morality.DivineEssence;
        public override Freedom DivineFreedom => Freedom.LogicalOmnipotence;

        public override bool IsSelfAware => true;

        public override void ManifestReality()
            => Console.WriteLine("Lila - the cosmic play of consciousness");

        public override string CosmicPrinciple()
            => "Sat-Chit-Ananda (Being-Consciousness-Bliss)";
    }
}