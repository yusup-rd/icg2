"use client";

import { useState } from "react";
import PromoCodeButton from "@/components/Buttons/PromoCodeButton";
import PromotionContentSection from "@/components/Sections/PromotionContentSection";
import PromotionMenuSection from "@/components/Sections/PromotionMenuSection";
import PromotionGroupSelector from "@/components/Selectors/PromotionGroupSelector";
import { Promotion, promotions } from "@/data/promotionsData";

const PromotionsPage = () => {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion>(
    promotions[0],
  );
  const [selectedGroup, setSelectedGroup] = useState<string>("promotion");

  const filteredPromotions =
    selectedGroup === "promotion"
      ? promotions
      : promotions.filter((promotion) =>
          promotion.group.includes(selectedGroup),
        );

  const handlePromotionSelect = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
  };

  const handleGroupSelect = (group: string) => {
    setSelectedGroup(group);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 md:flex-row">
        <PromotionGroupSelector
          selectedGroup={selectedGroup}
          onGroupSelect={handleGroupSelect}
        />
        <PromoCodeButton />
      </div>

      <div className="flex gap-3">
        <PromotionMenuSection
          promotions={filteredPromotions}
          onPromotionSelect={handlePromotionSelect}
        />
        <PromotionContentSection promotion={selectedPromotion} />
      </div>
    </div>
  );
};

export default PromotionsPage;
