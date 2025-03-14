"use client";

import { Link } from "@/i18n/routing";
import LocaleSwitcher from "../Dropdowns/LocaleSwitcher";
import SearchBar from "../Search/SearchBar";
import ThemeSwitcher from "../Dropdowns/ThemeSwitcher";
import { useState } from "react";
import WithdrawSVG from "../CustomIcons/WithdrawSVG";
import { IoNotifications } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import DepositButton from "../Buttons/DepositButton";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  // FIXME: This is just a mock for switching between logged in and logged out states
  const mockLogin = true;

  return (
    <header className="bg-secondary border-stroke sticky top-0 z-30 flex h-14 w-full border-b shadow">
      <div
        className={`container flex w-full items-center justify-between ${mockLogin ? "gap-3" : "gap-12"}`}
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>

        {/* Searchbar Component */}
        <div className="hidden min-w-80 flex-1 md:block">
          <SearchBar triggerType="header" />
        </div>
        <div className="flex items-center gap-3 text-nowrap">
          {mockLogin ? (
            <>
              {/* Balance Display */}
              <div className="bg-card border-stroke hidden max-w-40 items-center justify-center gap-3 rounded-lg border-2 p-2 lg:flex">
                <FaMoneyBills className="text-muted size-5" />
                <span className="truncate">RM 5,344.00</span>
              </div>

              {/* Deposit Button */}
              <DepositButton />

              {/* Withdraw Button */}
              <button className="bg-card hidden h-fit cursor-pointer rounded-lg p-2 duration-200 hover:scale-105 md:block">
                <WithdrawSVG className="text-primary size-6" />
              </button>

              {/* Notification Button */}
              <button className="bg-card hidden h-fit cursor-pointer rounded-lg p-2 duration-200 hover:scale-105 md:block">
                <IoNotifications className="text-primary size-6" />
              </button>
            </>
          ) : (
            <>
              {/* Login / Register Button */}
              <button className="from-gradient-1 via-gradient-2 to-gradient-3 border-stroke cursor-pointer rounded-full border-2 bg-linear-to-r px-3 py-2 font-bold text-white duration-200 hover:scale-105 md:rounded-lg md:px-2">
                Login / Register
              </button>
            </>
          )}
          <span className="flex gap-3">
            {/* Locale Switcher Button */}
            <div className="shrink-0">
              <LocaleSwitcher
                isDropdownOpen={activeDropdown === "locale"}
                toggleDropdown={() => toggleDropdown("locale")}
              />
            </div>

            {/* Theme Switcher Button */}
            <div className="shrink-0">
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
