interface CircleSkeletonProps {
  size?: number | "full";
}

const CircleSkeleton = ({ size = "full" }: CircleSkeletonProps) => {
  return (
    <div
      className={`size-${size} bg-skeleton shrink-0 animate-pulse rounded-full`}
    />
  );
};

export default CircleSkeleton;
