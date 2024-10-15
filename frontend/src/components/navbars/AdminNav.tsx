import { useState } from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

//icons
import { PersonIcon, BellIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

//components
import { Input } from "../ui/input";
import { NavBreadcrumb } from "../NavBreadcrumb";
import { SettingSheet } from "../SettingSheet";
import { ModeToggle } from "../mode-toggle";

// context
import { useContext } from "react";
import { UIDataContext } from "@/context/uiDataProvider";

const AdminNavHeader = ({ scrolled }: { scrolled: boolean }) => {
  const ctx = useContext(UIDataContext);

  const handleClick = () => {
    ctx.dispatchUiData({ type: "TOGGLE", payload: !ctx.uiData.sidebarHover });
  };

  const capitalize = (str: string | undefined) => {
    if (!str) return ""; // Handle undefined or empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const location = useLocation();
  const pathName = location.pathname.split("/");

  const page = [...pathName];
  const pageName = capitalize(page.pop());

  return (
    <div
      className={`w-full p-5 my-5 h-16 flex justify-between items-center sticky top-6 z-10  rounded-lg ${
        scrolled ? "bg-slate-200" : "bg-transparent"
      } `}
    >
      <div className="flex items-top gap-24">
        <div>
          <NavBreadcrumb location={pathName} />
          <h3 className="font-semibold">{pageName}</h3>
        </div>
        <HamburgerMenuIcon width={24} height={24} onClick={handleClick} />
      </div>
      <div className=" flex items-center gap-4 px-4">
        <Input placeholder="Search" />
        <PersonIcon width={24} height={24} />
        <SettingSheet />
        <ModeToggle />
        <BellIcon width={24} height={24} />
      </div>
    </div>
  );
};

export { AdminNavHeader };

const AdminNavFooter = () => {
  return (
    <div className="w-full h-16 flex justify-between items-end pb-6">
      <h3>© 2024, made with ❤️ by Metzap for a better web.</h3>
      <div className="flex items-center gap-4">
        <Link to="/">Satesh Charan</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Blog</Link>
        <Link to="/">License</Link>
      </div>
    </div>
  );
};

export { AdminNavFooter };
