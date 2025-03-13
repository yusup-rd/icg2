import { banks } from "@/data/banksData";
import Image from "next/image";
import { IoLogoFacebook, IoLogoInstagram, IoLogoWechat } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-secondary flex flex-col justify-between gap-12 rounded-2xl p-4 md:flex-row">
      {/* Logo, social media and copyright */}
      <div className="flex flex-1 flex-col gap-5">
        <div className="text-3xl font-bold">LOGO</div>
        <div className="text-primary flex gap-5">
          <span className="cursor-pointer duration-200 hover:scale-105">
            <IoLogoWechat className="size-8" />
          </span>
          <span className="cursor-pointer duration-200 hover:scale-105">
            <IoLogoFacebook className="size-8" />
          </span>
          <span className="cursor-pointer duration-200 hover:scale-105">
            <IoLogoInstagram className="size-8" />
          </span>
        </div>
        <div className="text-muted text-sm text-nowrap">
          &copy; 2022 FAFA878.com
        </div>
      </div>

      {/* Links and bank icons */}
      <div className="flex flex-1 flex-col gap-5">
        <div className="divide-stroke text-muted flex flex-col justify-end space-y-5 text-nowrap md:flex-row md:space-y-0 md:divide-x">
          <span className="hover:text-primary cursor-pointer duration-200 md:pr-4">
            FAQ
          </span>
          <span className="hover:text-primary cursor-pointer duration-200 md:px-4">
            About Us
          </span>
          <span className="hover:text-primary cursor-pointer duration-200 md:px-4">
            General
          </span>
          <span className="hover:text-primary cursor-pointer duration-200 md:pl-4">
            Terms & Conditions
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 md:justify-end">
          {banks.map((bank, index) => (
            <Image
              key={index}
              src={bank.icon}
              alt={bank.name + " Icon"}
              width={40}
              height={40}
              priority={index === 0}
              className="h-10 w-10 rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
