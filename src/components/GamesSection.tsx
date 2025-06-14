import GameCard from "./GameCard";

const GamesSection = () => {
  const games = [
    {
      title: "Лазертаг",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Высокотехнологичная игра с лазерным оружием в темноте с неоновыми эффектами",
    },
    {
      title: "Нерф",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Безопасные бластеры с мягкими снарядами для динамичных сражений",
    },
    {
      title: "Страйкбол",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Реалистичная тактическая игра с имитацией боевых действий",
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-bold text-4xl text-center mb-12 text-dark">
          Наши игры
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              image={game.image}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
