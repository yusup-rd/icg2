import { IoLogoFacebook, IoLogoInstagram, IoLogoWechat } from "react-icons/io5"

const Footer = () => {
  return (
    <div className="rounded-2xl bg-secondary flex justify-between gap-12 flex-col md:flex-row p-4">

      <div className="flex flex-col gap-5">
        <div className="font-bold text-3xl">LOGO</div>
        <div className="text-primary flex gap-5">
          <span className="duration-200 hover:scale-105 cursor-pointer"><IoLogoWechat className="size-8" /></span>
          <span className="duration-200 hover:scale-105 cursor-pointer"><IoLogoFacebook className="size-8" /></span>
          <span className="duration-200 hover:scale-105 cursor-pointer"><IoLogoInstagram className="size-8" /></span>
        </div>
        <div className="text-muted text-sm">&copy; 2022 FAFA878.com</div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex divide-x divide-border">
          <span className="pr-4 duration-200 hover:text-primary cursor-pointer">FAQ</span>
          <span className="px-4 duration-200 hover:text-primary cursor-pointer">About Us</span>
          <span className="px-4 duration-200 hover:text-primary cursor-pointer">General</span>
          <span className="pl-4 duration-200 hover:text-primary cursor-pointer">Terms & Conditions</span>
        </div>
        <div className="flex"></div>
      </div>

    </div>
  )
}

export default Footer