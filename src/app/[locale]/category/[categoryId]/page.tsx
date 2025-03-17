"use client";

import { useState, useRef, use } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import GameCard from "@/components/Card/GameCard";
import { allCategories } from "@/data/mock/mockGamesData";
import { MdVideogameAssetOff } from "react-icons/md";
import CategoriesSidebar from "@/components/Layout/CategoriesSidebar";
import GameDeveloperSection from "@/components/Sections/GameDeveloperSection";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = use(params);

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);

  const categoryData = allCategories.find(
    (category) =>
      category.category.toLowerCase().replace(" ", "-") === categoryId,
  );

  // Filter games based on search input
  const filteredGames = categoryData?.games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const closeSearch = () => {
    setSearchTerm("");
    setIsActive(false);
    inputRef.current?.blur();
  };

  return (
    <div className="space-y-3">
      {/* Category title */}
      <h2 className="text-xl font-semibold">{categoryData?.category} Games</h2>

      <div className="flex flex-col justify-between gap-3 xl:flex-row">
        {/* Game select by developer section */}
        <GameDeveloperSection />

        {/* Sidebar for mobile views as a dropdown */}
        <div className="md:hidden">
          <CategoriesSidebar categoryData={categoryData} />
        </div>

        {/* Searchbar */}
        <div className="h-14 min-w-64">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative mx-auto flex items-center justify-center"
          >
            <div className="relative size-full">
              <FaSearch className="text-muted absolute top-1/2 left-3 -translate-y-1/2" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onFocus={() => setIsActive(true)}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Games"
                className="focus:ring-primary border-stroke h-14 w-full rounded-2xl border-2 px-10 py-2 focus:ring-2 focus:outline-none"
              />
              {isActive && searchTerm && (
                <button
                  type="button"
                  onClick={closeSearch}
                  className="hover:text-primary text-muted absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* List of games of the category */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
        {filteredGames && filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              category={game.category}
              // image={game.image}
              image="/mock/game.png"
              name={game.name}
              noOverlay
            />
          ))
        ) : (
          <div className="text-muted flex w-full items-center justify-center gap-3 font-semibold">
            <MdVideogameAssetOff className="size-7" />
            <span className="text-lg">No games found</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
