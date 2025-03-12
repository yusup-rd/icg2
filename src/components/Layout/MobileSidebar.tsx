"use client";

import { Link, usePathname } from "@/i18n/routing";
import {
  IoGameController,
  IoGameControllerOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";
import { PiHouse, PiHouseFill } from "react-icons/pi";
import { TbMenu2 } from "react-icons/tb";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary border-border fixed right-0 bottom-0 left-0 z-20 flex h-14 justify-around border-t md:hidden">
      {/* Home */}
      <Link
        href="/"
        className={`flex h-full w-full flex-col items-center justify-center p-2 ${pathname === "/" ? "text-primary" : "text-primary/60"}`}
      >
        {pathname === "/" ? (
          <PiHouseFill className="size-7" />
        ) : (
          <PiHouse className="size-7" />
        )}
        <span className="text-xs">Home</span>
      </Link>

      {/* Games */}
      <Link
        href="/games"
        className={`flex h-full w-full flex-col items-center justify-center p-2 ${pathname === "/games" ? "text-primary" : "text-primary/60"}`}
      >
        {pathname === "/games" ? (
          <IoGameController className="size-7" />
        ) : (
          <IoGameControllerOutline className="size-7" />
        )}
        <span className="text-xs">Games</span>
      </Link>

      {/* Profile */}
      <Link
        href="/profile"
        className={`flex h-full w-full flex-col items-center justify-center p-2 ${pathname === "/profile" ? "text-primary" : "text-primary/60"}`}
      >
        {pathname === "/profile" ? (
          <IoPerson className="size-7" />
        ) : (
          <IoPersonOutline className="size-7" />
        )}
        <span className="text-xs">Profile</span>
      </Link>

      {/* More */}
      <button className="text-primary/60 flex h-full w-full cursor-pointer flex-col items-center justify-center p-2">
        <TbMenu2 className="size-7" />
        <span className="text-xs">More</span>
      </button>
    </nav>
  );
};

export default MobileSidebar;
