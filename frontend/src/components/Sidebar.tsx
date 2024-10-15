import { useContext, useState } from "react";

import { motion } from "framer-motion";

import { ScrollArea } from "./ui/scroll-area";

import { cn } from "@/lib/utils";
import { UIDataContext } from "@/context/UIDataProvider";

const Sidebar = ({ className, children }: any) => {
  const ctx = useContext(UIDataContext);

  const isHovered = ctx.uiData.sidebarHover;

  const handleMouseEnter = () => {
    ctx.dispatchUiData({ type: "ENTER" });
  };

  const handleMouseLeave = () => {
    ctx.dispatchUiData({ type: "LEAVE" });
  };

  return (
    <ScrollArea className="h-screen p-4 bg-foreground rounded-xl">
      <motion.div
        animate={{ width: isHovered ? 265 : 80 }} // Use numbers directly for dynamic width
        transition={{ type: "tween", duration: 0.3 }} // You can adjust the duration as needed
        className="h-full  p-4" // Remove conflicting width classes
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    </ScrollArea>
  );
};

export default Sidebar;
