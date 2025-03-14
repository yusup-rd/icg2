import PromotionLink from "../Links/PromotionLink";
import VipLink from "../Links/VipLink";
import RouletteLink from "../Links/RouletteLink";
import Image from "next/image";

const FastLinksSection = () => {
  return (
    <div className="flex">
      <div className="w-0 flex-1 overflow-auto py-3">
        <div className="flex gap-3">
          {/* Links */}
          <div className="flex flex-row gap-3 md:flex-col">
            <PromotionLink />
            <VipLink />
            <RouletteLink />
          </div>

          {/* Image Banner */}
          <div className="shrink-0 md:flex-1">
            <Image
              src="/banners/mainBanner.png"
              alt="Main Banner Image"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="border-stroke h-24 w-full cursor-pointer rounded-2xl border object-cover md:size-full md:min-w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastLinksSection;
