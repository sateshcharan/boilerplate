// components
import { ChartCard } from "@/components/cards/ChartCard";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { MapCard } from "@/components/cards/MapCard";
import { ProductCard } from "@/components/cards/ProductCard";

const Analytics = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* TODO: Add map card */}
      <MapCard />

      {/* TODO: Add charts */}
      <div className=" grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <ChartCard key={index} />
          </div>
        ))}
      </div>

      {/* TODO: Add highlights */}
      <div className=" grid grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <HighlightCard />
          </div>
        ))}
      </div>

      {/* TODO: Add product */}
      <div className=" grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <ProductCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
