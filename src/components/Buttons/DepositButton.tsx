import { FaMoneyBill } from "react-icons/fa6";
import DepositSVG from "../CustomIcons/DepositSVG";

const DepositButton = () => {
  return (
    <div className="flex items-center">
      {/* Deposit amount display on xl>X size */}
      <div className="bg-card border-stroke hidden max-w-44 items-center justify-center gap-3 rounded-lg rounded-r-none border-2 border-r-0 p-2 xl:flex">
        <FaMoneyBill className="text-muted size-5" />
        <span className="truncate">RM 10,000.00</span>
      </div>

      {/* Deposit button on md>X>xl size */}
      <button className="bg-card hidden h-fit cursor-pointer rounded-lg p-2 duration-200 hover:scale-105 md:block xl:hidden">
        <DepositSVG className="text-primary size-6" />
      </button>

      {/* Deposit button on X>md size */}
      <button className="from-gradient-1 via-gradient-2 to-gradient-3 border-stroke cursor-pointer rounded-full border-2 bg-linear-to-r px-3 py-2 duration-200 hover:scale-102 md:hidden">
        <span className="font-bold text-white md:hidden xl:block">Deposit</span>
      </button>

      {/* Deposit button on xl>X size */}
      <button className="bg-card from-gradient-1 via-gradient-2 to-gradient-3 border-stroke hidden h-fit cursor-pointer rounded-lg rounded-l-none border-2 border-l-0 bg-linear-to-r p-2 xl:block">
        <span className="font-bold text-white md:hidden xl:block">Deposit</span>
      </button>
    </div>
  );
};

export default DepositButton;
