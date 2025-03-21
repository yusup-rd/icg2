import { Link } from "@/i18n/routing";
import Image from "next/image";

const VipLink = () => {
  return (
    <Link href="/vip">
      <div className="border-stroke relative flex h-24 w-full min-w-80 cursor-pointer items-center justify-end overflow-hidden rounded-2xl border bg-linear-to-r from-[#FFF9F1] to-[#C1AA8D] p-8 duration-200 hover:-translate-y-1">
        <p className="z-10 bg-linear-to-r from-[#814A13] to-[#FFA600] bg-clip-text pr-1 text-3xl font-extrabold text-transparent italic">
          VIP Club
        </p>
        {/* Main Image */}
        <div className="absolute -top-2 left-3 z-0">
          <Image
            src="/banners/vip/main.svg"
            alt="VIP Main Image"
            width={100}
            height={100}
            priority
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
            priority
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
            priority
            className="size-7"
          />
        </div>
      </div>
    </Link>
  );
};

export default VipLink;
