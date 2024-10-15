import { PageNavHeader } from "@/components/navbars/PageNav";
import { Outlet } from "react-router-dom";

const IllustrationLayout = () => {
  return (
    <div className="w-full min-h-screen  flex justify-center ">
      <div className="w-3/4 flex flex-col items-center justify-between">
        <PageNavHeader />
        <div className="absolute w-screen h-screen flex flex-row">
          <img
            src="https://i.pravatar.cc/400"
            alt=""
            className="w-1/2 bg-cover"
          />
          <div className="w-full flex justify-center items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationLayout;
