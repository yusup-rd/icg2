import { categories } from "@/data/categoriesData";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { HiSquares2X2 } from "react-icons/hi2";

const CategoriesSection = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-bold">Categories</h3>
        <div className="size-7">
          <HiSquares2X2 className="size-full" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/category/${category.href}`}
            className="bg-secondary border-stroke flex cursor-pointer flex-col items-center gap-5 rounded-2xl border px-7 py-3.5 duration-200 hover:scale-105 md:flex-row"
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={68}
              height={68}
              priority
              className="size-11 md:size-16"
            />
            <span className="truncate font-bold text-nowrap md:text-2xl">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
