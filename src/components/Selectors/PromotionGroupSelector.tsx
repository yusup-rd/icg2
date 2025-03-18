interface PromotionGroupSelectorProps {
  onGroupSelect: (group: string) => void;
  selectedGroup: string;
}

const PromotionGroupSelector = ({
  onGroupSelect,
  selectedGroup,
}: PromotionGroupSelectorProps) => {
  return (
    <>
      {/* Promo Group Select Desktop */}
      <div className="hidden w-0 flex-1 overflow-x-auto pb-3 md:block">
        <div className="bg-primary/10 flex w-fit gap-1 rounded-2xl p-1 text-lg text-nowrap">
          <div
            onClick={() => onGroupSelect("promotion")}
            className={`${
              selectedGroup === "promotion"
                ? "bg-primary font-bold text-white"
                : "hover:bg-primary/20 text-primary/60"
            } cursor-pointer rounded-xl px-7 py-2.5 duration-200`}
          >
            Promotion
          </div>
          <div
            onClick={() => onGroupSelect("slots")}
            className={`${
              selectedGroup === "slots"
                ? "bg-primary font-bold text-white"
                : "hover:bg-primary/20 text-primary/60"
            } cursor-pointer rounded-xl px-7 py-2.5 duration-200`}
          >
            Slots
          </div>
          <div
            onClick={() => onGroupSelect("casino")}
            className={`${
              selectedGroup === "casino"
                ? "bg-primary font-bold text-white"
                : "hover:bg-primary/20 text-primary/60"
            } cursor-pointer rounded-xl px-7 py-2.5 duration-200`}
          >
            Live Casino
          </div>
          <div
            onClick={() => onGroupSelect("sports")}
            className={`${
              selectedGroup === "sports"
                ? "bg-primary font-bold text-white"
                : "hover:bg-primary/20 text-primary/60"
            } cursor-pointer rounded-xl px-7 py-2.5 duration-200`}
          >
            Sports
          </div>
          <div
            onClick={() => onGroupSelect("rebate")}
            className={`${
              selectedGroup === "rebate"
                ? "bg-primary font-bold text-white"
                : "hover:bg-primary/20 text-primary/60"
            } cursor-pointer rounded-xl px-7 py-2.5 duration-200`}
          >
            Rebate
          </div>
          <div
            onClick={() => onGroupSelect("vip")}
            className={`${
              selectedGroup === "vip"
                ? "bg-primary font-bold text-white"
                : "hover:bg-primary/20 text-primary/60"
            } cursor-pointer rounded-xl px-7 py-2.5 duration-200`}
          >
            VIP
          </div>
        </div>
      </div>

      {/* Promo Group Select Small */}
      <div className="flex md:hidden">
        <div className="w-0 flex-1 overflow-x-auto pb-3">
          <div className="flex items-center gap-3 text-sm text-nowrap">
            <div
              onClick={() => onGroupSelect("promotion")}
              className={`${
                selectedGroup === "promotion"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-primary/20 text-primary/60 bg-secondary"
              } cursor-pointer rounded-full px-7 py-2.5 duration-200`}
            >
              Promotion
            </div>
            <div
              onClick={() => onGroupSelect("slots")}
              className={`${
                selectedGroup === "slots"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-primary/20 text-primary/60 bg-secondary"
              } cursor-pointer rounded-full px-7 py-2.5 duration-200`}
            >
              Slots
            </div>
            <div
              onClick={() => onGroupSelect("casino")}
              className={`${
                selectedGroup === "casino"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-primary/20 text-primary/60 bg-secondary"
              } cursor-pointer rounded-full px-7 py-2.5 duration-200`}
            >
              Live Casino
            </div>
            <div
              onClick={() => onGroupSelect("sports")}
              className={`${
                selectedGroup === "sports"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-primary/20 text-primary/60 bg-secondary"
              } cursor-pointer rounded-full px-7 py-2.5 duration-200`}
            >
              Sports
            </div>
            <div
              onClick={() => onGroupSelect("rebate")}
              className={`${
                selectedGroup === "rebate"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-primary/20 text-primary/60 bg-secondary"
              } cursor-pointer rounded-full px-7 py-2.5 duration-200`}
            >
              Rebate
            </div>
            <div
              onClick={() => onGroupSelect("vip")}
              className={`${
                selectedGroup === "vip"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-primary/20 text-primary/60 bg-secondary"
              } cursor-pointer rounded-full px-7 py-2.5 duration-200`}
            >
              VIP
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionGroupSelector;
