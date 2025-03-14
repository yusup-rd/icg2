"use client";

import dynamic from "next/dynamic";
import GamesSwiper from "@/components/Swiper/GamesSwiper";
import { IoVolumeHigh } from "react-icons/io5";
import { popularGames } from "@/data/mock/mockGamesData";
import CategoriesSection from "@/components/Sections/CategoriesSection";
import GameListSection from "@/components/Sections/GameListSection";
import FastLinksSkeleton from "@/components/Skeleton/FastLinksSkeleton";

const FastLinksSection = dynamic(
  () => import("@/components/Sections/FastLinksSection"),
  {
    ssr: false,
    loading: () => <FastLinksSkeleton />,
  },
);

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        {/* Notification Message Section */}
        <div className="text-muted flex items-center gap-3">
          <span>
            <IoVolumeHigh className="size-7" />
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>

        {/* Fast Links Section */}
        <FastLinksSection />
      </div>

      {/* Popular Games Swiper */}
      <div className="flex">
        <div className="w-0 flex-1">
          <GamesSwiper
            category={popularGames}
            showOnline
            showCategory
            showMore={false}
          />
        </div>
      </div>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Games List Section */}
      <GameListSection />
    </div>
  );
};

export default HomePage;
