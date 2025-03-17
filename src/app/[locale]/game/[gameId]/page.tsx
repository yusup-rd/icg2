import GameCard from "@/components/Card/GameCard";
import { popularGames } from "@/data/mock/mockGamesData";

const GamePage = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Game Display Section */}
      <div className="h-[calc(100vh-144px)] w-full rounded-2xl bg-[#212121] md:h-[calc(100vh-88px)]">
        <div className="flex h-full items-center justify-center font-bold text-white">
          Game will be displayed in here
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">Recommended For You</h3>
        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          {popularGames.games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              image="/mock/game.png"
              // image={game.image}
              name={game.name}
              category={game.category}
              onlinePlayers={game.onlinePlayers}
              showOnline
              showCategory
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
