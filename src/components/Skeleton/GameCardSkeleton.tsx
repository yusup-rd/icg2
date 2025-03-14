interface GameCardSkeletonProps {
  showCategory?: boolean;
  showOnline?: boolean;
}

const GameCardSkeleton = ({
  showCategory = false,
  showOnline = false,
}: GameCardSkeletonProps) => {
  return (
    <div className="px-1">
      <div className="bg-skeleton relative h-72 w-56 animate-pulse rounded-2xl">
        {showCategory && (
          <div className="absolute top-4 left-4 h-8 w-16 rounded-2xl bg-white/10"></div>
        )}
        {showOnline && (
          <div className="absolute bottom-4 left-4 h-5 w-36 rounded-2xl bg-white/10"></div>
        )}
      </div>
    </div>
  );
};

export default GameCardSkeleton;
