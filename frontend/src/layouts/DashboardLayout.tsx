import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "@/components/Sidebar";

import logo from "@/assets/img/logo.svg";
import { SidebarNav } from "@/components/navbars/SidebarNav";
import { AdminNavFooter, AdminNavHeader } from "@/components/navbars/AdminNav";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = event.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    scrollTop > 0 ? setScrolled(true) : setScrolled(false);
  };

  return (
    <div className=" flex w-screen h-screen ">
      <Sidebar>
        <img src={logo} className="w-12" alt="logo" />
        <SidebarNav />
      </Sidebar>

      <ScrollArea className="pr-5 flex-1" onScrollCapture={handleScroll}>
        <AdminNavHeader scrolled={scrolled} />
        <div className="w-full min-h-max">
          <Outlet />
        </div>
        <AdminNavFooter />
      </ScrollArea>
    </div>
  );
};

export default DashboardLayout;
