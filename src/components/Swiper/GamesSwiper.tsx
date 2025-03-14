"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import GameCardSkeleton from "../Skeleton/GameCardSkeleton";
import { Link, useRouter } from "@/i18n/routing";
import { Category } from "@/data/mock/mockGamesData";

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
  const router = useRouter();

  const handleClick = () => {
    router.push(`/category/game`);
  };

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
            href={`/${category.href}`}
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
                <SwiperSlide key={game.id} className="min-w-56 flex-1 pt-2">
                  {/* Game Card */}
                  <div
                    className="relative rounded-2xl duration-200 ease-in-out hover:-translate-y-2 hover:shadow-md"
                    onClick={() => handleClick()}
                  >
                    <div className="relative w-full cursor-pointer">
                      {/* Game Image */}
                      <Image
                        src="/mock/game.png"
                        alt={game.name}
                        width={230}
                        height={300}
                        priority={true}
                        className="border-stroke rounded-2xl border object-contain"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent from-40% to-black to-90%"></div>
                    </div>

                    {/* Online Players */}
                    {showOnline && (
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-2">
                          <div className="size-2 rounded-full bg-green-500">
                            <div className="size-2 animate-ping rounded-full bg-green-500"></div>
                          </div>
                          <p className="truncate text-sm text-white">
                            {game.onlinePlayers.toLocaleString()} people playing
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Category */}
                    {showCategory && (
                      <div className="absolute top-4 left-4">
                        <div className="rounded-2xl border border-white/20 bg-white/20 px-2.5 py-1.5 text-sm font-light text-white backdrop-blur-md">
                          {game.category}
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
        </div>
      </Swiper>
    </div>
  );
};

export default GamesSwiper;
