import PromotionLink from "@/components/Links/PromotionLink";
import RouletteLink from "@/components/Links/RouletteLink";
import VipLink from "@/components/Links/VipLink";
import Image from "next/image";
import { IoVolumeHigh } from "react-icons/io5";

const HomePage = () => {
  return (
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
        <div className="w-0 flex-1 pb-3">
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
  );
};

export default HomePage;
