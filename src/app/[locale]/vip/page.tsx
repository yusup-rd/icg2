"use client";

import TierListImagesSection from "@/components/Sections/TierListImagesSection";
import Image from "next/image";
import { useState } from "react";

const VipPage = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const toggleCardOpen = () => {
    setCardOpen((prev) => !prev);
  };

  // TODO: Refactor this code. Keep information about all the tier benefits in data ts file. Dynamically render content on this page. Complete Desktop view of the tables.

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-5">
        <TierListImagesSection />
        <h1 className="w-full text-center text-2xl font-bold">
          FAFA878 VIP CLUB
        </h1>
        <p className="text-muted w-full text-center">
          Unlock exclusive benefits and rewards with our tiered VIP membership
          program.
        </p>
      </div>

      {/* Table */}
      <div className="space-y-5 rounded-2xl bg-[#FFEFE4] p-4">
        {/* Tier Header */}
        <div className="relative rounded-xl bg-linear-to-r from-[#EAB08F] to-[#F5EFEA] px-5 py-7">
          <span className="text-xl font-bold text-[#542D20]">Bronze</span>
          <Image
            src="/tiers/bronze.svg"
            alt="Bronze Tier"
            width={100}
            height={100}
            sizes="100vw"
            priority
            className="absolute right-0 -bottom-3 size-32"
          />
        </div>

        {/* Benefits Divider */}
        <div className="flex items-center gap-6">
          <div className="h-1 w-full bg-linear-to-tr from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
          <span className="text-nowrap text-[#542D20]">Benefits</span>
          <div className="h-1 w-full bg-linear-to-tl from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-3">
          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Upgrade Bonus
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Daily withdraw amount
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Daily withdraw limit
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Birthday Bonus
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Weekly Rescue Bonus
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Referral Friend
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Festival Cash
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="rounded-xl bg-white">
            <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
              <p className="text-center text-xl font-bold">128</p>
              <p className="text-center text-xs text-[#757575]">
                Special Birthday Gift
              </p>
            </div>
          </div>
        </div>

        {/* Hidden content */}
        {cardOpen && (
          <>
            {/* Daily Cash Rebate Divider */}
            <div className="flex items-center gap-6">
              <div className="h-1 w-full bg-linear-to-tr from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
              <span className="text-nowrap text-[#542D20]">
                Daily Cash Rebate
              </span>
              <div className="h-1 w-full bg-linear-to-tl from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-3 gap-3">
              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">Esports</p>
                </div>
              </div>

              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">
                    Live Casino
                  </p>
                </div>
              </div>

              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">Slot</p>
                </div>
              </div>

              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">
                    Sportsbook
                  </p>
                </div>
              </div>
            </div>

            {/* Level Up Requirements Divider */}
            <div className="flex items-center gap-6">
              <div className="h-1 w-full bg-linear-to-tr from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
              <span className="text-nowrap text-[#542D20]">
                Level Up Requirements
              </span>
              <div className="h-1 w-full bg-linear-to-tl from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-3 gap-3">
              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">
                    Upgrade Bonus
                  </p>
                </div>
              </div>
            </div>

            {/* Level Up Requirements Divider */}
            <div className="flex items-center gap-6">
              <div className="h-1 w-full bg-linear-to-tr from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
              <span className="text-nowrap text-[#542D20]">
                Monthly Tier Retention
              </span>
              <div className="h-1 w-full bg-linear-to-tl from-[#EAB08F]/0 from-35% to-[#EAB08F]"></div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-3 gap-3">
              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">
                    Upgrade Bonus
                  </p>
                </div>
              </div>

              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">
                    Upgrade Bonus
                  </p>
                </div>
              </div>

              {/* Benefit */}
              <div className="rounded-xl bg-white">
                <div className="flex size-full flex-col items-center justify-center gap-2.5 p-4">
                  <p className="text-center text-xl font-bold">128</p>
                  <p className="text-center text-xs text-[#757575]">
                    Upgrade Bonus
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* View More Button */}
        <button
          className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white p-4 text-sm font-bold text-[#542D20] duration-200 hover:scale-95"
          onClick={() => toggleCardOpen()}
        >
          {cardOpen ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default VipPage;
