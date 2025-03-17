"use client";

import { Category, Game } from "@/data/mock/mockGamesData";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface CategoriesSidebarProps {
  categoryData?: Category;
}

const CategoriesSidebar = ({ categoryData }: CategoriesSidebarProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  return (
    <>
      {/* Desktop */}
      <div className="bg-secondary border-stroke sticky top-4 hidden h-fit w-48 shrink-0 rounded-2xl border p-4 md:block">
        <div className="divide-stroke divide-y">
          {/* Header */}
          <h3 className="pb-3">Games</h3>

          {/* Content */}
          <div className="flex flex-col space-y-2 overflow-y-auto pt-3">
            {categoryData?.games.map((game: Game) => (
              <Link
                key={game.id}
                href={game.href}
                className="hover:bg-primary/10 truncate rounded-lg px-2 py-1 duration-200"
              >
                {game.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-secondary border-stroke flex flex-col gap-3 rounded-2xl border p-4 md:hidden">
        {/* Header */}
        <div
          className="flex items-center justify-between gap-3 p-2"
          onClick={() => toggleDropdown()}
        >
          <span>Games</span>
          <div>
            {openDropdown ? (
              <FaChevronDown className="size-5 rotate-180 duration-200" />
            ) : (
              <FaChevronDown className="size-5 rotate-0 duration-200" />
            )}
          </div>
        </div>

        {/* Content */}
        {openDropdown && (
          <div className="border-stroke flex flex-col gap-2 border-t pt-2">
            {categoryData?.games.map((game: Game) => (
              <Link
                key={game.id}
                href={game.href}
                className="hover:bg-primary/10 truncate rounded-lg px-3 py-2 duration-200"
              >
                {game.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoriesSidebar;
