import BonusCard from "@/components/Card/BonusCard";
import Image from "next/image";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5">
      {/* Banner Section */}
      <Image
        src="/banners/ads/image.png"
        alt="Category Banner"
        width={0}
        height={0}
        sizes="100vw"
        priority
        className="h-80 w-full rounded-2xl object-cover"
      />

      {/* Bonus Cards Section */}
      <div className="flex">
        <div className="w-0 flex-1 overflow-x-auto pb-3">
          <div className="flex justify-between gap-3">
            <BonusCard />
            <BonusCard />
            <BonusCard />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CategoriesLayout;
