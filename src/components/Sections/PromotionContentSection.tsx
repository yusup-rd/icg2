import { Promotion } from "@/data/promotionsData";
import Image from "next/image";

interface PromotionContentSectionProps {
  promotion: Promotion;
}

const PromotionContentSection = ({
  promotion,
}: PromotionContentSectionProps) => {
  return (
    <div className="bg-secondary border-stroke hidden flex-1 rounded-2xl border p-5 lg:block">
      <div className="flex flex-col gap-5">
        {/* Image */}
        <Image
          src="/mock/promo.png"
          alt="Promotion Banner"
          width={963}
          height={208}
          sizes="100vw"
          priority
          className="h-52 w-full rounded-2xl object-cover"
        />

        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-2">
            <h2 className="font-semibold">{promotion.label}</h2>
            <p className="text-muted text-sm">Valid till {promotion.expiry}</p>
          </div>

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

        {/* Divider */}
        <div className="bg-stroke h-px w-full rounded-full"></div>

        {/* Content */}
        <p>{promotion.description}</p>
      </div>
    </div>
  );
};

export default PromotionContentSection;
