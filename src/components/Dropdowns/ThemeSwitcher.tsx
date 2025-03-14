"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbDeviceDesktopFilled } from "react-icons/tb";
import ThemeSwitcherSkeleton from "../Skeleton/ThemeSwitcherSkeleton";

// Props interface for ThemeSwitcher
interface ThemeSwitcherProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

export default function ThemeSwitcher({
  isDropdownOpen,
  toggleDropdown,
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <ThemeSwitcherSkeleton />;

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    toggleDropdown();
  };

  return (
    <div className="relative w-full text-nowrap">
      {/* Main button */}
      <button
        onClick={toggleDropdown}
        className="bg-card cursor-pointer rounded-lg p-2 duration-200 hover:scale-105"
      >
        {theme === "light" && <MdLightMode className="size-6" />}
        {theme === "dark" && <MdDarkMode className="size-6" />}
        {theme === "system" && <TbDeviceDesktopFilled className="size-6" />}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="bg-card border-stroke absolute right-0 mt-3 w-max rounded-full border p-1 shadow-md">
          <div className="flex items-center gap-2">
            {/* Light theme */}
            <button
              className={`${
                theme === "light"
                  ? "hover:bg-primary/80 bg-primary/20"
                  : "hover:bg-primary/80 bg-transparent"
              } block w-full cursor-pointer rounded-full p-2 text-left duration-200 hover:text-white`}
              onClick={() => handleThemeChange("light")}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center justify-center">
                  <MdLightMode className="size-5" />
                </div>
              </div>
            </button>

            {/* Dark theme */}
            <button
              className={`${
                theme === "dark"
                  ? "hover:bg-primary/80 bg-primary/20"
                  : "hover:bg-primary/80 bg-transparent"
              } block w-full cursor-pointer rounded-full p-2 text-left duration-200 hover:text-white`}
              onClick={() => handleThemeChange("dark")}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center justify-center">
                  <MdDarkMode className="size-5" />
                </div>
              </div>
            </button>

            {/* System theme */}
            <button
              className={`${
                theme === "system"
                  ? "hover:bg-primary/80 bg-primary/20"
                  : "hover:bg-primary/80 bg-transparent"
              } block w-full cursor-pointer rounded-full p-2 text-left duration-200 hover:text-white`}
              onClick={() => handleThemeChange("system")}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center justify-center">
                  <TbDeviceDesktopFilled className="size-5" />
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
