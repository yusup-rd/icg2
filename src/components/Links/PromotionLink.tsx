import Image from "next/image";

const PromotionLink = () => {
  return (
    <>
      <div className="border-stroke relative flex h-20 w-full cursor-pointer items-center justify-end overflow-hidden rounded-2xl border bg-linear-to-r from-[#F9B6FF] via-[#FFFFFF] to-[#8BF3F4] p-8 duration-200 hover:scale-102">
        <p className="z-10 bg-linear-to-r from-[#FF44D7] to-[#0E7DFD] bg-clip-text pr-1 text-3xl font-extrabold text-transparent italic">
          Promotion
        </p>
        {/* Main Image */}
        <div className="absolute -bottom-7 left-0 z-0">
          <Image
            src="/banners/promotion/main.svg"
            alt="Promotion Main Image"
            width={100}
            height={100}
            priority
            className="size-36"
          />
        </div>

        {/* Extra Image 1 */}
        <div className="absolute top-0 right-3 z-0">
          <Image
            src="/banners/promotion/extra1.svg"
            alt="Promotion Extra Image 1"
            width={100}
            height={100}
            priority
            className="size-9"
          />
        </div>

        {/* Extra Image 2 */}
        <div className="absolute -bottom-2 left-1/2 z-0 -translate-x-1/2">
          <Image
            src="/banners/promotion/extra2.svg"
            alt="Promotion Extra Image 2"
            width={100}
            height={100}
            priority
            className="size-12"
          />
        </div>

        {/* Extra Image 3 */}
        <div className="absolute top-1 left-20 z-0">
          <Image
            src="/banners/promotion/extra3.svg"
            alt="Promotion Extra Image 3"
            width={100}
            height={100}
            priority
            className="size-5"
          />
        </div>
      </div>
    </>
  );
};

export default PromotionLink;
