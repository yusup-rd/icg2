import Image from "next/image";

const VipLink = () => {
  return (
    <>
      <div className="border-border relative flex h-20 w-full cursor-pointer items-center justify-end overflow-hidden rounded-2xl border bg-linear-to-r from-[#FFF9F1] to-[#C1AA8D] p-8 duration-200 hover:scale-102">
        <p className="z-10 bg-linear-to-r from-[#814A13] to-[#FFA600] bg-clip-text text-3xl font-extrabold text-transparent italic">
          VIP Club
        </p>
        {/* Main Image */}
        <div className="absolute -top-2 left-3 z-0">
          <Image
            src="/banners/vip/main.svg"
            alt="VIP Main Image"
            width={100}
            height={100}
            className="size-24"
          />
        </div>

        {/* Extra Image 1 */}
        <div className="absolute right-0 -bottom-2 z-0">
          <Image
            src="/banners/vip/extra1.svg"
            alt="VIP Extra Image 1"
            width={100}
            height={100}
            className="size-12"
          />
        </div>

        {/* Extra Image 2 */}
        <div className="absolute top-0 left-0 z-0">
          <Image
            src="/banners/vip/extra2.svg"
            alt="VIP Extra Image 2"
            width={100}
            height={100}
            className="size-7"
          />
        </div>
      </div>
    </>
  );
};

export default VipLink;
