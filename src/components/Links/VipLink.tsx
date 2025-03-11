import Image from "next/image"

const VipLink = () => {
  return (
    <>
      <div className="relative overflow-hidden h-20 w-full rounded-2xl border border-border bg-linear-to-r from-[#FFF9F1] to-[#C1AA8D] flex items-center justify-end p-8 duration-200 hover:scale-102 cursor-pointer">
        <p className="z-10 font-extrabold italic text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#814A13] to-[#FFA600]">VIP Club</p>
        {/* Main Image */}
        <div className="absolute z-0 -top-2 left-3">
          <Image
            src="/banners/vip/main.svg"
            alt="VIP Main Image"
            width={100}
            height={100}
            className="size-24"
          />
        </div>

        {/* Extra Image 1 */}
        <div className="absolute z-0 -bottom-2 right-0">
          <Image
            src="/banners/vip/extra1.svg"
            alt="VIP Extra Image 1"
            width={100}
            height={100}
            className="size-12"
          />
        </div>

        {/* Extra Image 2 */}
        <div className="absolute z-0 top-0 left-0">
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
  )
}

export default VipLink