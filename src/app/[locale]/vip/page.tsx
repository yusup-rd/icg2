"use client";

import TermsDropdown from "@/components/Dropdowns/TermsDropdown";
import MobileVipTableSection from "@/components/Sections/VipPage/MobileVipTableSection";
import TierListImagesSection from "@/components/Sections/TierListImagesSection";
import VipTableSection from "@/components/Sections/VipPage/VipTableSection";
import { useTranslations } from "next-intl";

const VipPage = () => {
  const t = useTranslations("VipPage");

  return (
    <div className="bg-secondary border-stroke space-y-8 rounded-2xl border p-5">
      {/* Header */}
      <div className="flex flex-col gap-5">
        <TierListImagesSection />
        <h1 className="w-full text-center text-2xl font-bold">{t("label")}</h1>
        <p className="text-muted w-full text-center">{t("description")}</p>
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
