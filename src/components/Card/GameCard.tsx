"use client";

import { useRouter } from "@/i18n/routing";
import Image from "next/image";

interface GameCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  onlinePlayers?: number;
  showOnline?: boolean;
  showCategory?: boolean;
  noOverlay?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  category,
  image,
  onlinePlayers,
  showOnline = false,
  showCategory = false,
  noOverlay = false,
}) => {
  const router = useRouter();
  return (
    <div
      className="relative rounded-2xl duration-200 ease-in-out hover:-translate-y-2 hover:shadow-md"
      onClick={() => router.replace(`/game/${id}`)}
    >
      <div className="relative w-full cursor-pointer">
        {/* Game Image */}
        <Image
          src={image}
          alt={name}
          width={230}
          height={300}
          priority={true}
          className="border-stroke h-56 w-full rounded-2xl border object-contain md:h-72"
        />

        {/* Overlay */}
        {!noOverlay && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent from-40% to-black to-90%"></div>
        )}
      </div>

      {/* Online Players */}
      {showOnline && (
        <div className="absolute bottom-4 left-4 max-w-32 md:max-w-44">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500">
              <div className="size-2 animate-ping rounded-full bg-green-500"></div>
            </div>
            <p className="truncate text-sm text-white">
              {onlinePlayers?.toLocaleString()} people playing
            </p>
          </div>
        </div>
      )}

      {/* Category */}
      {showCategory && (
        <div className="absolute top-4 left-4">
          <div className="rounded-2xl border border-white/20 bg-white/20 px-2.5 py-1.5 text-sm font-light text-white backdrop-blur-md">
            {category}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameCard;
