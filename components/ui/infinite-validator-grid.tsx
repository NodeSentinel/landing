"use client";

import { useState } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { getBeaconExplorerValidatorUrl } from "@/utils/misc";

const ITEMS_PER_PAGE = 100;

interface InfiniteValidatorGridProps {
  ids: number[];
  status: "active" | "inactive";
  chain: "gnosis" | "mainnet";
}

const statusStyles = {
  inactive:
    "bg-yellow-100 border-yellow-300 hover:bg-yellow-200 text-yellow-800",
  active:
    "bg-emerald-100 border-emerald-300 hover:bg-emerald-200 text-emerald-800",
  slashed: "bg-red-100 border-red-300 hover:bg-red-200 text-red-800",
};

export function InfiniteValidatorGrid({
  ids,
  status,
  chain,
}: InfiniteValidatorGridProps) {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, ids.length));
    }, 500);
  };

  const displayedIds = ids.slice(0, displayCount);
  const scrollableTargetId = `${status}-validators-container`;

  return (
    <div
      id={scrollableTargetId}
      className="h-[350px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-2"
    >
      <InfiniteScroll
        dataLength={ids.length}
        next={fetchMoreData}
        hasMore={displayCount < ids.length}
        loader={
          <div className="h-8 flex items-center justify-center mt-3">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary" />
          </div>
        }
        scrollableTarget={scrollableTargetId}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {displayedIds.map((id) => (
            <Link
              key={id}
              href={getBeaconExplorerValidatorUrl(chain, id)}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${statusStyles[status]}
                p-3 rounded-md transition-all duration-200
                border shadow-sm
                hover:shadow-md hover:scale-105
                flex items-center justify-center
                cursor-pointer font-medium
                transform hover:-translate-y-0.5
              `}
            >
              <span className="text-sm">{id}</span>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
