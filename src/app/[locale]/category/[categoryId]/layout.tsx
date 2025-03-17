import CategoriesSidebar from "@/components/Layout/CategoriesSidebar";
import { allCategories, Game } from "@/data/mock/mockGamesData";

const CategoryGamesLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const categoryData = allCategories.find(
    (category: { category: string; games: Game[] }) =>
      category.category.toLowerCase().replace(" ", "-") === categoryId,
  );

  return (
    <div className="flex gap-3">
      <div className="hidden md:block">
        <CategoriesSidebar categoryData={categoryData} />
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default CategoryGamesLayout;
