import { allCategories } from "@/data/mock/mockGamesData";
import GamesSwiper from "../Swiper/GamesSwiper";

const GameListSection = () => {
  return (
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
  );
};

export default GameListSection;
