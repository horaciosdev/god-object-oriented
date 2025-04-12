using ObjectOrientedGod.Core;
using ObjectOrientedGod.Concrete.ClassicalTheism;
using ObjectOrientedGod.Concrete.Mythology.Greek;

class Program
{
    static void Main()
    {
        God christianGod = new TheistGod(); // Example of a monotheistic view
        God greekGod = new Chaos(); // Example of a polytheistic view
        God tao = new Tao(); // Example of a monistic view
        God brahman = new Brahman(); // Example of a monistic view
        God spinozanGod = new SpinozanGod(); // Example of a pantheistic view


        Console.WriteLine("Christian Perspective:");
        // TheistGod is a representation of the Christian God in this context
        christianGod.ManifestReality();
        Console.WriteLine(christianGod.CosmicPrinciple());

        Console.WriteLine("\nGreek Perspective:");
        // Chaos is a representation of the Greek primordial deity in this context
        greekGod.ManifestReality();
        Console.WriteLine(greekGod.CosmicPrinciple());

        Console.WriteLine("\nTaoist Perspective:");
        // Tao is a representation of the Taoist concept of the ultimate reality
        tao.ManifestReality();
        Console.WriteLine(tao.CosmicPrinciple());

        Console.WriteLine("\nHindu Perspective:");
        // Brahman is a representation of the Hindu concept of the ultimate reality
        brahman.ManifestReality();
        Console.WriteLine(brahman.CosmicPrinciple());

        Console.WriteLine("\nSpinozan Perspective:");
        // SpinozanGod is a representation of the pantheistic view of God
        spinozanGod.ManifestReality();
        Console.WriteLine(spinozanGod.CosmicPrinciple());

    }
}