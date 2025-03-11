import Image from "next/image"

const RouletteLink = () => {
  return (
    <>
      <div className="relative overflow-hidden h-20 w-full rounded-2xl border border-border bg-linear-to-r from-[#E0E0E0] to-[#FFE5FF] flex items-center justify-end p-8 duration-200 hover:scale-102 cursor-pointer">
        <p className="z-10 font-extrabold italic text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#A100FF] to-[#FF48E4]">Roulette</p>
        {/* Main Image */}
        <div className="absolute z-0 -bottom-7 left-0">
          <Image
            src="/banners/roulette/main.svg"
            alt="Roulette Main Image"
            width={100}
            height={100}
            className="size-36"
          />
        </div>

        {/* Extra Image 1 */}
        <div className="absolute z-0 top-1 left-28">
          <Image
            src="/banners/roulette/extra1.svg"
            alt="Roulette Extra Image 1"
            width={100}
            height={100}
            className="size-12"
          />
        </div>

        {/* Extra Image 2 */}
        <div className="absolute z-0 top-0 right-0">
          <Image
            src="/banners/roulette/extra2.svg"
            alt="Roulette Extra Image 2"
            width={100}
            height={100}
            className="size-7"
          />
        </div>

        {/* Extra Image 3 */}
        <div className="absolute z-0 bottom-0 right-0">
          <Image
            src="/banners/roulette/extra3.svg"
            alt="Roulette Extra Image 3"
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      </div>
    </>
  )
}

export default RouletteLink