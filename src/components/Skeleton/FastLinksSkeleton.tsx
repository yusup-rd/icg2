const FastLinksSkeleton = () => {
  return (
    <div className="flex">
      <div className="w-0 flex-1 overflow-hidden py-3">
        <div className="w-full animate-pulse rounded-2xl">
          <div className="flex gap-3 md:h-80">
            {/* Links */}
            <div className="flex flex-1/3 flex-row justify-between gap-3 md:flex-col">
              <div className="bg-skeleton h-24 w-full min-w-80 rounded-xl"></div>
              <div className="bg-skeleton h-24 w-full min-w-80 rounded-xl"></div>
              <div className="bg-skeleton h-24 w-full min-w-80 rounded-xl"></div>
            </div>

            {/* Image Banner */}
            <div className="bg-skeleton h-24 w-full flex-2/3 rounded-2xl md:h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastLinksSkeleton;
