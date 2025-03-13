import { Link } from "@/i18n/routing";
import Image from "next/image";

const RouletteLink = () => {
  return (
    <Link href="/roulette">
      <div className="border-stroke relative flex h-24 w-full min-w-80 cursor-pointer items-center justify-end overflow-hidden rounded-2xl border bg-linear-to-r from-[#E0E0E0] to-[#FFE5FF] p-8 duration-200 hover:-translate-y-1">
        <p className="z-10 bg-linear-to-r from-[#A100FF] to-[#FF48E4] bg-clip-text pr-1 text-3xl font-extrabold text-transparent italic">
          Roulette
        </p>
        {/* Main Image */}
        <div className="absolute -bottom-7 left-0 z-0">
          <Image
            src="/banners/roulette/main.svg"
            alt="Roulette Main Image"
            width={100}
            height={100}
            priority
            className="size-36"
          />
        </div>

        {/* Extra Image 1 */}
        <div className="absolute top-1 left-28 z-0">
          <Image
            src="/banners/roulette/extra1.svg"
            alt="Roulette Extra Image 1"
            width={100}
            height={100}
            priority
            className="size-12"
          />
        </div>

        {/* Extra Image 2 */}
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/banners/roulette/extra2.svg"
            alt="Roulette Extra Image 2"
            width={100}
            height={100}
            priority
            className="size-7"
          />
        </div>

        {/* Extra Image 3 */}
        <div className="absolute right-0 bottom-0 z-0">
          <Image
            src="/banners/roulette/extra3.svg"
            alt="Roulette Extra Image 3"
            width={100}
            height={100}
            priority
            className="size-5"
          />
        </div>
      </div>
    </Link>
  );
};

export default RouletteLink;
