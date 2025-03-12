"use client";

import { useState } from "react";
import { categories } from "@/data/categoriesData";
import Image from "next/image";
import { LuPencilLine } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import Link from "next/link";

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleSubmenu = (categoryName: string) => {
    setOpenCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  return (
    <div className="bg-secondary border-border sticky top-[72px] h-[calc(100vh-88px)] w-60 rounded-2xl border p-4">
      <div className="divide-border flex h-full flex-col gap-5 divide-y">
        <div className="flex items-center justify-between gap-3 pb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/profile.png"
              alt="Profile Image"
              width={48}
              height={48}
              className="border-border h-12 w-12 rounded-full border"
            />
            <h2>John Doe</h2>
          </div>
          <div className="text-primary hover:bg-primary/10 cursor-pointer rounded-full p-2 duration-200">
            <LuPencilLine className="size-5" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto pr-2 pb-4">
          {categories.map((category, index) => (
            <div key={index}>
              <button
                className="hover:bg-primary/10 flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-nowrap duration-200"
                onClick={() => toggleSubmenu(category.name)}
              >
                <Image
                  src={category.icon}
                  alt={`Category ${category.name}`}
                  width={35}
                  height={35}
                  className="h-9 w-9"
                />
                <p>{category.name}</p>
              </button>

              {/* Category Games Submenu */}
              {openCategory === category.name && (
                <div className="mt-3 space-y-3">
                  {category.games.map((game, idx) => (
                    <Link
                      href="#"
                      key={idx}
                      className="hover:bg-primary/10 flex cursor-pointer items-center gap-2 truncate rounded-lg px-3 py-2 duration-200"
                    >
                      <Image
                        src={game.image}
                        alt={game.name}
                        width={30}
                        height={30}
                        className="h-7 w-7"
                      />
                      <p>{game.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hover:bg-primary/10 flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-xl font-medium duration-200">
          <p>Logout</p>
          <TbLogout className="text-primary size-7" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
