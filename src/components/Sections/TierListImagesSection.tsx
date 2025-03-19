"use client";

import Image from "next/image";
import { useState } from "react";
import CircleSkeleton from "../Skeleton/CircleSkeleton";

const TierListImagesSection = () => {
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleImageLoad = (key: string) => {
    setImageLoaded((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="flex h-36 items-center gap-3 md:h-64">
      {/* Bronze Image */}
      <div className="relative h-full flex-1 bg-linear-to-b from-[#FFF0E1]/0 via-[#FFF0E1] to-[#FFF0E1]/0">
        {!imageLoaded["bronze"] && (
          <div className="absolute top-3/4 left-1/2 aspect-square size-12 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24">
            <CircleSkeleton />
          </div>
        )}
        <Image
          src="/tiers/bronze.svg"
          alt="Bronze Tier"
          width={60}
          height={60}
          sizes="100vw"
          priority
          className={`absolute top-3/4 left-1/2 aspect-square size-16 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24 lg:size-36 xl:size-44 ${
            imageLoaded["bronze"] ? "block" : "hidden"
          }`}
          onLoad={() => handleImageLoad("bronze")}
        />
      </div>

      {/* Silver Image */}
      <div className="relative h-full flex-1 bg-linear-to-b from-[#E1EFFF]/0 via-[#E1EFFF] to-[#E1EFFF]/0">
        {!imageLoaded["silver"] && (
          <div className="absolute top-3/5 left-1/2 aspect-square size-12 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24">
            <CircleSkeleton />
          </div>
        )}
        <Image
          src="/tiers/silver.svg"
          alt="Silver Tier"
          width={60}
          height={60}
          sizes="100vw"
          priority
          className={`absolute top-3/5 left-1/2 aspect-square size-16 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24 lg:size-36 xl:size-44 ${
            imageLoaded["silver"] ? "block" : "hidden"
          }`}
          onLoad={() => handleImageLoad("silver")}
        />
      </div>

      {/* Gold Image */}
      <div className="relative h-full flex-1 bg-linear-to-b from-[#FFFDE9]/0 via-[#FFFDE9] to-[#FFFDE9]/0">
        {!imageLoaded["gold"] && (
          <div className="absolute top-1/2 left-1/2 aspect-square size-12 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24">
            <CircleSkeleton />
          </div>
        )}
        <Image
          src="/tiers/gold.svg"
          alt="Gold Tier"
          width={60}
          height={60}
          sizes="100vw"
          priority
          className={`absolute top-1/2 left-1/2 aspect-square size-16 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24 lg:size-36 xl:size-44 ${
            imageLoaded["gold"] ? "block" : "hidden"
          }`}
          onLoad={() => handleImageLoad("gold")}
        />
      </div>

      {/* Platinum Image */}
      <div className="relative h-full flex-1 bg-linear-to-b from-[#EFE4FF]/0 via-[#EFE4FF] to-[#EFE4FF]/0">
        {!imageLoaded["platinum"] && (
          <div className="absolute top-2/5 left-1/2 aspect-square size-12 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24">
            <CircleSkeleton />
          </div>
        )}
        <Image
          src="/tiers/platinum.svg"
          alt="Platinum Tier"
          width={60}
          height={60}
          sizes="100vw"
          priority
          className={`absolute top-2/5 left-1/2 aspect-square size-16 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24 lg:size-36 xl:size-44 ${
            imageLoaded["platinum"] ? "block" : "hidden"
          }`}
          onLoad={() => handleImageLoad("platinum")}
        />
      </div>

      {/* Black Image */}
      <div className="relative h-full flex-1 bg-linear-to-b from-[#E1E1E1]/0 via-[#E1E1E1] to-[#E1E1E1]/0">
        {!imageLoaded["black"] && (
          <div className="absolute top-1/4 left-1/2 aspect-square size-12 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24">
            <CircleSkeleton />
          </div>
        )}
        <Image
          src="/tiers/dark.svg"
          alt="Black Tier"
          width={60}
          height={60}
          sizes="100vw"
          priority
          className={`absolute top-1/4 left-1/2 aspect-square size-16 -translate-x-1/2 -translate-y-1/2 sm:size-20 md:size-24 lg:size-36 xl:size-44 ${
            imageLoaded["black"] ? "block" : "hidden"
          }`}
          onLoad={() => handleImageLoad("black")}
        />
      </div>
    </div>
  );
};

export default TierListImagesSection;
