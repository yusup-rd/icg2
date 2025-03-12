import { Link } from "@/i18n/routing";
import { FiAlertTriangle } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <section>
      <div className="container flex h-[calc(100vh-88px)] w-full flex-col items-center justify-center text-center md:mb-0">
        <FiAlertTriangle className="text-primary size-28" />
        <h1 className="text-primary text-4xl font-bold">{t("message")}</h1>
        <p className="mt-4 text-lg text-gray-700">{t("description")}</p>
        <Link href="/" passHref>
          <button className="bg-primary hover:bg-primary/80 mt-6 rounded px-6 py-2 text-white duration-200 hover:scale-102">
            {t("link")}
          </button>
        </Link>
      </div>
    </section>
  );
}
