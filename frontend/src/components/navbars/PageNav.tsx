import { Link } from "react-router-dom";

//icons
import { PersonIcon } from "@radix-ui/react-icons";

//components
import { ModeToggle } from "../mode-toggle";

import logo from "@/assets/img/logo.svg";
import { HeaderNavMenu } from "./HeaderNavMenu";

const PageNavHeader = () => {
  return (
    <div className="w-full h-16 m-5 flex justify-between items-center z-10">
      <div className="flex items-top gap-24">
        <img src={logo} alt="logo" className="w-12" />
      </div>

      <HeaderNavMenu />

      <div className="flex items-center gap-4">
        <ModeToggle />
        <PersonIcon width={50} />
      </div>
    </div>
  );
};

export { PageNavHeader };

const PageNavFooter = () => {
  return (
    <div className="w-full h-16 m-5 flex justify-between items-end z-10 ">
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

export { PageNavFooter };
