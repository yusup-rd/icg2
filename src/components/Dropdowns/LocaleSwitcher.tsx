"use client";

import { useState, useTransition } from "react";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { ImSpinner } from "react-icons/im";
import { useParams } from "next/navigation";
import flags from "@/utils/flagsUtil";
import Image from "next/image";

interface LocaleSwitcherProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

const LocaleSwitcher = ({
  isDropdownOpen,
  toggleDropdown,
}: LocaleSwitcherProps) => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [pendingLocale, setPendingLocale] = useState<string | null>(null);
  const pathname = usePathname();
  const params = useParams();

  function changeLocale(nextLocale: string) {
    setPendingLocale(nextLocale);
    startTransition(() => {
      // @ts-expect-error to suppress the TypeScript error in the router.replace() method
      router.replace({ pathname, params }, { locale: nextLocale });
      setPendingLocale(null);
      toggleDropdown();
    });
  }

  return (
    <div className="relative w-full text-nowrap">
      {/* Main button */}
      <button
        onClick={toggleDropdown}
        className="bg-card cursor-pointer rounded-full p-2 duration-200 hover:scale-105 md:rounded-lg"
      >
        <Image
          src={flags[locale] || flags.en}
          alt={`${locale} flag`}
          width={20}
          height={20}
          priority
          className="size-6"
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="bg-card border-stroke absolute right-0 mt-3 w-max rounded-lg border shadow-md">
          <div className="w-full rounded py-2">
            {routing.locales.map((current) => (
              <button
                key={current}
                onClick={() => changeLocale(current)}
                disabled={isPending}
                className={`hover:bg-primary/10 block w-full cursor-pointer p-2 text-left duration-200 ${
                  locale === current ? "bg-primary/20" : ""
                } ${isPending ? "cursor-not-allowed opacity-50" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Radiobutton element */}
                    <div className="bg-primary/30 relative flex size-4 shrink-0 items-center justify-center rounded-full">
                      <div
                        className={`size-2 rounded-full transition ${
                          locale === current ? "bg-white" : ""
                        }`}
                      />
                    </div>

                    {/* Locale Flag */}
                    <Image
                      src={flags[current] || flags.en}
                      alt={`${current} flag`}
                      width={20}
                      height={20}
                      priority
                    />

                    {/* Locale Name */}
                    <div className="mr flex items-center">
                      {t("locale", { locale: current })}
                    </div>
                  </div>
                  {/* Loader */}
                  {isPending && pendingLocale === current ? (
                    <span className="size-4 animate-spin">
                      <ImSpinner />
                    </span>
                  ) : (
                    <span className="size-4"></span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
