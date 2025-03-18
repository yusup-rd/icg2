import { FaChevronRight } from "react-icons/fa6";

const PromoCodeButton = () => {
  return (
    <button className="bg-secondary border-stroke flex h-14 w-full cursor-pointer items-center justify-between rounded-2xl border px-7 py-2.5 font-medium duration-200 md:w-fit md:hover:scale-105">
      <span className="text-primary">Promo Code</span>
      <FaChevronRight className="size-4 md:hidden" />
    </button>
  );
};

export default PromoCodeButton;
