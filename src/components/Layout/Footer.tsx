import { IoLogoFacebook, IoLogoInstagram, IoLogoWechat } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-secondary flex flex-col justify-between gap-12 rounded-2xl p-4 md:flex-row">
      <div className="flex flex-col gap-5">
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
        <div className="text-muted text-sm">&copy; 2022 FAFA878.com</div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="divide-border flex divide-x">
          <span className="hover:text-primary cursor-pointer pr-4 duration-200">
            FAQ
          </span>
          <span className="hover:text-primary cursor-pointer px-4 duration-200">
            About Us
          </span>
          <span className="hover:text-primary cursor-pointer px-4 duration-200">
            General
          </span>
          <span className="hover:text-primary cursor-pointer pl-4 duration-200">
            Terms & Conditions
          </span>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Footer;
