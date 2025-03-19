import { vipData } from "@/data/vipData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const MobileVipTableSection = () => {
  const t = useTranslations("VipPage.Table");
  const tierT = useTranslations("VipPage.Tiers");

  const [openTiers, setOpenTiers] = useState<{ [key: string]: boolean }>({});

  const toggleCardOpen = (tier: string) => {
    setOpenTiers((prev) => ({
      ...prev,
      [tier]: !prev[tier],
    }));
  };

  return (
    <div className="space-y-10">
      {vipData.map((tierData) => {
        const isOpen = openTiers[tierData.tier] || false;

        return (
          <div
            key={tierData.tier}
            className={`space-y-5 rounded-2xl p-4`}
            style={{ backgroundColor: tierData.bgColor }}
          >
            {/* Tier Header */}
            <div
              className="relative rounded-xl px-5 py-7"
              style={{
                background: `linear-gradient(to right, ${tierData.headerGradient[0]}, ${tierData.headerGradient[1]})`,
              }}
            >
              <span
                className="bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${tierData.textGradient[0]}, ${tierData.textGradient[1]})`,
                }}
              >
                {tierT(tierData.tier)}
              </span>
              <Image
                src={tierData.imageSrc}
                alt={`${tierData.tier} Tier`}
                width={100}
                height={100}
                sizes="100vw"
                priority
                className="absolute right-0 -bottom-3 size-32"
              />
            </div>

            {/* Visible Sections */}
            {tierData.visibleSections.map((section, index) => (
              <div key={index} className="space-y-5">
                {/* Section Divider */}
                <div className="flex items-center gap-6">
                  <div
                    className="h-1 w-full"
                    style={{
                      backgroundImage: `linear-gradient(to top right, transparent 35%, ${tierData.headerGradient[0]})`,
                    }}
                  ></div>

                  <span
                    className="text-nowrap"
                    style={{ color: tierData.textColor }}
                  >
                    {t(section.title)}
                  </span>

                  <div
                    className="h-1 w-full"
                    style={{
                      backgroundImage: `linear-gradient(to top left, transparent 35%, ${tierData.headerGradient[0]})`,
                    }}
                  ></div>
                </div>

                {/* Section Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="rounded-xl bg-white p-4 text-center"
                    >
                      <p className="text-xl font-bold break-words text-[#212121]">
                        {t(item.value)}
                      </p>
                      <p className="text-xs text-[#757575]">{t(item.label)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Expandable Sections */}
            {isOpen &&
              tierData.hiddenSections.map((section, index) => (
                <div key={index} className="space-y-5">
                  {/* Section Divider */}
                  <div className="flex items-center gap-6">
                    <div
                      className="h-1 w-full"
                      style={{
                        backgroundImage: `linear-gradient(to top right, transparent 35%, ${tierData.headerGradient[0]})`,
                      }}
                    ></div>

                    <span
                      className="text-nowrap"
                      style={{ color: tierData.textColor }}
                    >
                      {t(section.title)}
                    </span>

                    <div
                      className="h-1 w-full"
                      style={{
                        backgroundImage: `linear-gradient(to top left, transparent 35%, ${tierData.headerGradient[0]})`,
                      }}
                    ></div>
                  </div>

                  {/* Section Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="rounded-xl bg-white p-4 text-center"
                      >
                        <p className="text-xl font-bold break-words text-[#212121]">
                          {t(item.value)}
                        </p>
                        <p className="text-xs text-[#757575]">
                          {t(item.label)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* Toggle Button */}
            <button
              className="w-full rounded-xl bg-white p-4 text-sm font-bold text-[#212121] duration-200 hover:scale-95"
              onClick={() => toggleCardOpen(tierData.tier)}
            >
              {isOpen ? "View Less" : "View More"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MobileVipTableSection;
