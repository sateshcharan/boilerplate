import { Outlet } from "react-router-dom";

import { PageNavFooter, PageNavHeader } from "@/components/navbars/PageNav";

const CoverLayout = ({
  height = "1/3",
  padding = 4,
  rounded = true,
}: {
  height?: string;
  padding?: number;
  rounded?: boolean;
}) => (
  <div className="w-full min-h-screen flex justify-center -z-10 ">
    <div className={`w-full absolute h-${height} p-${padding}`}>
      {/* h controls cover photo height & p controls cover photo padding */}
      <img
        src="https://i.pravatar.cc/400"
        alt="cover"
        className={`w-full h-full object-cover ${rounded && "rounded-3xl"} `}
      />
      {/* rounded-3xl controls cover photo border radius */}
    </div>
    <div className="w-3/4 flex flex-col items-center justify-between">
      <PageNavHeader />
      <Outlet />
      <PageNavFooter />
    </div>
  </div>
);

export default CoverLayout;
