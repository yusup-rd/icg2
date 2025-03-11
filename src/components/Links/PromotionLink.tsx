import Image from "next/image"

const PromotionLink = () => {
  return (
    <>
      <div className="relative overflow-hidden border border-border h-20 w-full rounded-2xl bg-linear-to-r from-[#F9B6FF] via-[#FFFFFF] to-[#8BF3F4] flex items-center justify-end p-8 duration-200 hover:scale-102 cursor-pointer">
        <p className="z-10 font-extrabold italic text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#FF44D7] to-[#0E7DFD]">Promotion</p>
        {/* Main Image */}
        <div className="absolute z-0 -bottom-7 left-0">
          <Image
            src="/banners/promotion/main.svg"
            alt="Promotion Main Image"
            width={100}
            height={100}
            className="size-36"
          />
        </div>

        {/* Extra Image 1 */}
        <div className="absolute z-0 top-0 right-3">
          <Image
            src="/banners/promotion/extra1.svg"
            alt="Promotion Extra Image 1"
            width={100}
            height={100}
            className="size-9"
          />
        </div>

        {/* Extra Image 2 */}
        <div className="absolute z-0 -bottom-2 left-1/2 -translate-x-1/2">
          <Image
            src="/banners/promotion/extra2.svg"
            alt="Promotion Extra Image 2"
            width={100}
            height={100}
            className="size-12"
          />
        </div>

        {/* Extra Image 3 */}
        <div className="absolute z-0 top-1 left-20">
          <Image
            src="/banners/promotion/extra3.svg"
            alt="Promotion Extra Image 3"
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      </div>
    </>
  )
}

export default PromotionLink