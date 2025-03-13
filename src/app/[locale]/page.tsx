import PromotionLink from "@/components/Links/PromotionLink";
import RouletteLink from "@/components/Links/RouletteLink";
import VipLink from "@/components/Links/VipLink";
import GamesSwiper from "@/components/Swiper/GamesSwiper";
import { allCategories, popularGames } from "@/data/mock/mockGamesData";
import Image from "next/image";
import { IoVolumeHigh } from "react-icons/io5";

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
        <div className="flex overflow-auto">
          <div className="w-0 flex-1 py-3">
            <div className="flex gap-3">
              {/* Links */}
              <div className="flex gap-3 md:h-80 md:flex-1/3 md:flex-col md:justify-between">
                <PromotionLink />
                <VipLink />
                <RouletteLink />
              </div>

              {/* Image Banner */}
              <Image
                src="/banners/mainBanner.png"
                alt="Main Banner Image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="border-stroke h-24 w-full cursor-pointer rounded-2xl border object-cover md:h-full md:min-h-80"
              />
            </div>
          </div>
        </div>
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
      {/* TODO: --Implement here-- */}

      {/* Games List Section */}
      <div className="flex">
        <div className="flex w-0 flex-1 flex-col gap-12">
          <GamesSwiper category={allCategories[0]} showOnline />
          <GamesSwiper category={allCategories[1]} showOnline />
          <GamesSwiper category={allCategories[2]} showOnline />
          <GamesSwiper category={allCategories[3]} showOnline />
          <GamesSwiper category={allCategories[4]} showOnline />
          <GamesSwiper category={allCategories[5]} showOnline />
          <GamesSwiper category={allCategories[6]} showOnline />
          <GamesSwiper category={allCategories[7]} showOnline />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
