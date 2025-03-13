"use client";

import { Link } from "@/i18n/routing";
import LocaleSwitcher from "../Dropdowns/LocaleSwitcher";
import SearchBar from "../Search/SearchBar";
import ThemeSwitcher from "../Dropdowns/ThemeSwitcher";
import { useState } from "react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <header className="bg-secondary border-stroke sticky top-0 z-30 flex h-14 w-full border-b shadow">
      <div className="container flex items-center justify-between gap-12">
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>
        <div className="flex-1">
          <SearchBar triggerType="header" />
        </div>
        <div className="bg-card border-stroke rounded-full"></div>
        <div className="flex gap-3 text-nowrap">
          <button className="from-gradient-1 via-gradient-2 to-gradient-3 cursor-pointer rounded-full bg-linear-to-r p-2 font-bold text-white duration-200 hover:scale-105 sm:rounded-lg">
            Login / Register
          </button>
          <span className="hidden gap-3 md:flex">
            <div>
              <LocaleSwitcher
                isDropdownOpen={activeDropdown === "locale"}
                toggleDropdown={() => toggleDropdown("locale")}
              />
            </div>
            <div>
              <ThemeSwitcher
                isDropdownOpen={activeDropdown === "theme"}
                toggleDropdown={() => toggleDropdown("theme")}
              />
            </div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
