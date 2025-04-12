namespace ObjectOrientedGod.Core.Interfaces
{
    public interface ICosmicPrinciple
    {
        string ExplainCreation();
        bool IsCyclic { get; }
    }
}