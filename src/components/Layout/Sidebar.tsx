"use client";

import { useState } from "react";
import { categories } from "@/data/categoriesData";
import Image from "next/image";
import { LuPencilLine } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import CircleSkeleton from "../Skeleton/CircleSkeleton";
import { FaChevronDown } from "react-icons/fa6";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleSubmenu = (categoryName: string) => {
    setOpenCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  const handleImageLoad = (key: string) => {
    setImageLoaded((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="bg-secondary border-stroke sticky top-4 h-[calc(100vh-88px)] w-60 rounded-2xl border p-4">
      <div className="divide-stroke flex h-full flex-col gap-5 divide-y">
        {/* Profile */}
        <div className="flex items-center justify-between gap-3 pb-4">
          <div className="flex items-center gap-3">
            {!imageLoaded["profile"] && <CircleSkeleton size={12} />}
            <Image
              src="/profile.png"
              alt="Profile Image"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className={`border-stroke size-12 shrink-0 rounded-full border object-cover ${
                imageLoaded["profile"] ? "block" : "hidden"
              }`}
              onLoad={() => handleImageLoad("profile")}
            />
            <h2>John Doe</h2>
          </div>
          <div className="text-primary hover:bg-primary/10 cursor-pointer rounded-full p-2 duration-200">
            <LuPencilLine className="size-5" />
          </div>
        </div>

        {/* Category Links */}
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto pr-2 pb-4">
          {/* Categories Menu */}
          {categories.map((category, index) => (
            <div key={index}>
              <button
                className={`group flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-lg px-3 py-2 text-nowrap duration-200 ${
                  pathname.includes(category.href)
                    ? "bg-primary text-white"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => router.replace(`/category/${category.href}`)}
              >
                <div className="flex items-center gap-2.5">
                  {!imageLoaded[`category-${index}`] && (
                    <CircleSkeleton size={9} />
                  )}
                  <Image
                    src={category.icon}
                    alt={`Category ${category.name}`}
                    width={35}
                    height={35}
                    priority
                    className={`size-9 shrink-0 ${imageLoaded[`category-${index}`] ? "block" : "hidden"}`}
                    onLoad={() => handleImageLoad(`category-${index}`)}
                  />
                  <p>{category.name}</p>
                </div>
                <div
                  className={`${pathname.includes(category.href) ? "hover:bg-white/10" : "hover:bg-primary/10"} cursor-pointer rounded-full p-2 opacity-0 duration-200 group-hover:opacity-100 ${openCategory === category.name && "bg-primary/10 opacity-100"} ${openCategory === category.name && pathname.includes(category.href) && "bg-white/10"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu(category.name);
                  }}
                >
                  {openCategory === category.name ? (
                    <FaChevronDown className="rotate-180 duration-200" />
                  ) : (
                    <FaChevronDown className="rotate-0 duration-200" />
                  )}
                </div>
              </button>

              {/* Category Games Submenu */}
              {openCategory === category.name && (
                <div className="mt-3 space-y-3">
                  {category.games.map((game, idx) => (
                    <Link
                      href="/game/game-id"
                      key={idx}
                      className="hover:bg-primary/10 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 duration-200"
                    >
                      {!imageLoaded[`game-${idx}`] && (
                        <CircleSkeleton size={7} />
                      )}
                      <Image
                        src={game.image}
                        alt={game.name}
                        width={30}
                        height={30}
                        priority
                        className={`size-7 shrink-0 ${
                          imageLoaded[`game-${idx}`] ? "block" : "hidden"
                        }`}
                        onLoad={() => handleImageLoad(`game-${idx}`)}
                      />
                      <p className="truncate">{game.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="hover:bg-primary/10 flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-xl font-medium duration-200">
          <p>Logout</p>
          <TbLogout className="text-primary size-7" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
