import { FaFire } from "react-icons/fa6";
import { JSX } from "react";

interface Game {
  id: string;
  name: string;
  category: string;
  image: string;
  onlinePlayers: number;
}

export interface Category {
  category: string;
  icon?: JSX.Element;
  games: Game[];
  href?: string;
}

const generateGames = (category: string, count: number): Game[] =>
  Array.from({ length: count }, (_, i) => {
    const gameName = `${category} Game ${i + 1}`;
    const gameId = `${category.toLowerCase().replace(" ", "-")}-game-${i + 1}`;
    return {
      id: gameId,
      name: gameName,
      category,
      image: `https://placehold.co/600x800.png?text=${encodeURIComponent(gameName)}&font=montserrat`,
      onlinePlayers: Math.floor(Math.random() * 5000),
    };
  });

export const allCategories: Category[] = [
  {
    category: "Sports",
    games: generateGames("Sports", 15),
    href: "/sports",
  },
  {
    category: "Casino",
    games: generateGames("Casino", 10),
    href: "/casino",
  },
  {
    category: "Slot",
    games: generateGames("Slot", 12),
    href: "/slot",
  },
  {
    category: "E-Sports",
    games: generateGames("E-Sports", 8),
    href: "/e-sports",
  },
  {
    category: "Fishing",
    games: generateGames("Fishing", 10),
    href: "/fishing",
  },
  {
    category: "Arcade",
    games: generateGames("Arcade", 10),
    href: "/arcade",
  },
  {
    category: "Cockfight",
    games: generateGames("Cockfight", 10),
    href: "/cockfight",
  },
  {
    category: "Lottery",
    games: generateGames("Lottery", 10),
    href: "/lottery",
  },
];

export const popularGames = {
  category: "Popular Now",
  icon: <FaFire className="size-full text-orange-500" />,
  games: [
    allCategories[0].games[1],
    allCategories[1].games[2],
    allCategories[2].games[3],
    allCategories[3].games[4],
    allCategories[4].games[5],
    allCategories[5].games[6],
    allCategories[6].games[7],
    allCategories[7].games[8],
  ],
};
