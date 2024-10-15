import { Outlet } from "react-router-dom";

import { PageNavFooter, PageNavHeader } from "@/components/navbars/PageNav";

const PageLayout = () => {
  return (
    <div className="w-full min-h-screen  flex justify-center  py-5">
      <div className="w-3/4 flex flex-col items-center justify-between">
        <PageNavHeader />
        <Outlet />
        <PageNavFooter />
      </div>
    </div>
  );
};

export default PageLayout;
