import { Promotion } from "@/data/promotionsData";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

interface PromotionMenuSectionProps {
  promotions: Promotion[];
  onPromotionSelect: (promotion: Promotion) => void;
}

// TODO: For mobile view add modal on click of promotion instead of displaying within same page.

const PromotionMenuSection = ({
  promotions,
  onPromotionSelect,
}: PromotionMenuSectionProps) => {
  return (
    <div className="flex flex-1 flex-col gap-3 lg:max-w-96 lg:flex-0">
      {promotions.map((promotion) => (
        <div
          key={promotion.id}
          className="bg-secondary border-stroke flex min-w-80 cursor-pointer items-center justify-between gap-4 rounded-2xl border p-2 lg:max-w-80"
          onClick={() => onPromotionSelect(promotion)}
        >
          <div className="flex items-center gap-4">
            <Image
              src="/mock/promo_small.png"
              alt="Promotion Image"
              width={87}
              height={87}
              sizes="100vw"
              priority
              className="aspect-square shrink-0 rounded-xl object-cover"
            />
            <div className="flex min-w-0 flex-col gap-1 lg:max-w-40">
              <h3 className="truncate font-semibold">{promotion.label}</h3>
              <span className="text-muted truncate text-sm">
                Valid till {promotion.expiry}
              </span>
              {promotion.claimed ? (
                <button
                  disabled
                  className="bg-muted w-fit cursor-not-allowed rounded-xl px-4 py-1.5 font-medium text-white opacity-60"
                >
                  Claimed
                </button>
              ) : (
                <button className="bg-primary hover:bg-primary/80 w-fit cursor-pointer rounded-xl px-4 py-1.5 font-medium text-white duration-200">
                  Claim
                </button>
              )}
            </div>
          </div>
          <FaChevronRight className="size-5 shrink-0" />
        </div>
      ))}
    </div>
  );
};

export default PromotionMenuSection;
