"use client";

import TermsDropdown from "@/components/Dropdowns/TermsDropdown";
import MobileVipTableSection from "@/components/Sections/VipPage/MobileVipTableSection";
import TierListImagesSection from "@/components/Sections/TierListImagesSection";
import VipTableSection from "@/components/Sections/VipPage/VipTableSection";

const VipPage = () => {
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

      <div className="space-y-8 md:hidden">
        <MobileVipTableSection />
        <TermsDropdown />
      </div>

      <div className="hidden md:block">
        <VipTableSection />
      </div>
    </div>
  );
};

export default VipPage;
