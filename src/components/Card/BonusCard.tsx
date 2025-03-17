import Image from "next/image";

const BonusCard = () => {
  return (
    <div className="relative flex max-h-24 flex-1 items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-[#99CEFF] via-[#FFCEFB] to-[#FFE3BC] p-4">
      <Image
        src="/banners/bonus/gift.svg"
        alt="Coin"
        width={50}
        height={50}
        priority
        className="absolute bottom-0 left-0 size-24"
      />
      <p className="text-primary ml-20 min-w-60 text-xl font-black">
        Claim Welcome Bonus 200% Now
      </p>
      <button className="bg-primary cursor-pointer rounded-xl px-5 py-2.5 text-sm text-white duration-200 hover:scale-103">
        Claim
      </button>
    </div>
  );
};

export default BonusCard;
