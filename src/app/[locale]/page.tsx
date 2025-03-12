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
      <div className="flex overflow-auto pb-3">
        <div className="w-0 flex-1">
          <div className="flex flex-col gap-3 p-3 lg:flex-row">
            <div className="flex min-w-80 flex-1/3 flex-col justify-between gap-3">
              <PromotionLink />
              <VipLink />
              <RouletteLink />
            </div>
            <div className="min-w-80 flex-2/3 duration-200">
              <Image
                src="/banners/mainBanner.png"
                alt="Main Banner Image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="border-border h-full w-full cursor-pointer rounded-2xl border object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
