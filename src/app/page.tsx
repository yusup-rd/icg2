import PromotionLink from "@/components/Links/PromotionLink";
import RouletteLink from "@/components/Links/RouletteLink";
import VipLink from "@/components/Links/VipLink";
import Image from "next/image";
import { IoVolumeHigh } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Notification Message Section */}
      <div className="flex items-center gap-3 text-muted">
        <span><IoVolumeHigh className="size-7" /></span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      </div>

      {/* Fast Links Section */}
      <div className="flex overflow-auto pb-3">
        <div className="flex-1 w-0">
          <div className="flex gap-3 flex-col lg:flex-row p-3">
            <div className="flex flex-col gap-3 justify-between flex-1/3 min-w-80">
              <PromotionLink />
              <VipLink />
              <RouletteLink />
            </div>
            <div className="flex-2/3 duration-200 min-w-80">
              <Image
                src="/banners/mainBanner.png"
                alt="Main Banner Image"
                width={300}
                height={300}
                className="object-cover h-full w-full rounded-2xl border border-border cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
