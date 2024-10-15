import { HighlightCard } from "@/components/cards/HighlightCard";
import { MapCard } from "@/components/cards/MapCard";

const Sales = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* TODO: Add highlights */}
      <MapCard />

      {/* TODO: Add highlights */}
      <div className=" grid grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <HighlightCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
