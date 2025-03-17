"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import GameCardSkeleton from "../Skeleton/GameCardSkeleton";
import { Link } from "@/i18n/routing";
import { Category } from "@/data/mock/mockGamesData";
import GameCard from "../Card/GameCard";

interface GamesSwiperProps {
  category: Category;
  showOnline?: boolean;
  showCategory?: boolean;
  showMore?: boolean;
}

const GamesSwiper: React.FC<GamesSwiperProps> = ({
  category,
  showOnline = false,
  showCategory = false,
  showMore = true,
}) => {
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold">{category.category}</h3>
          <div className="size-7">{category.icon}</div>
        </div>
        {showMore && (
          <Link
            href={`/category/${category.href}`}
            className="bg-secondary text-primary cursor-pointer rounded-xl px-4 py-3 text-sm font-bold duration-200 hover:scale-105"
          >
            View All
          </Link>
        )}
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        slidesPerGroupAuto={true}
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true }}
        grabCursor={true}
        onInit={() => setIsSwiperReady(true)}
        className="mt-2"
      >
        <div className="my-4 flex flex-nowrap gap-1 overflow-x-hidden md:gap-4">
          {!isSwiperReady
            ? [...Array(20)].map((_, index) => (
                <SwiperSlide key={index} className="flex-1 pt-2">
                  <GameCardSkeleton
                    showCategory={showCategory}
                    showOnline={showOnline}
                  />
                </SwiperSlide>
              ))
            : category.games.map((game) => (
                <SwiperSlide key={game.id} className="min-w-max flex-1 pt-2">
                  {/* Game Card */}
                  <GameCard
                    id={game.id}
                    name={game.name}
                    category={game.category}
                    // image={game.image} // Placeholder image from placehold.co
                    image="/mock/game.png" // Example with static image
                    onlinePlayers={game.onlinePlayers}
                    showOnline={showOnline}
                    showCategory={showCategory}
                  />
                </SwiperSlide>
              ))}
        </div>
      </Swiper>
    </div>
  );
};

export default GamesSwiper;
