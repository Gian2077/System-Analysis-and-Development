class Song
{
    public string title;
    public string band;
    public int duration;
    public int playCount;
    public bool isFavorite;
    public void DisplayInfo()
    {
        Console.WriteLine($"Song Name: {title}");
        Console.WriteLine($"Band: {band}");
        Console.WriteLine($"Duration: {duration} seconds");
        Console.WriteLine($"Play Count: {playCount}");
        if (isFavorite)
        {
            Console.WriteLine("Favorite");
        }
    }
}