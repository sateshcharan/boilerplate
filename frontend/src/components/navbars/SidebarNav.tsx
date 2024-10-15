// ui
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// icons
import { Icons } from "@/components/shared/icons";

import { Link } from "react-router-dom";

// context
import { useContext } from "react";
import { UIDataContext } from "@/context/UIDataProvider";

// routes
import { routes } from "@/routes";
import { DashIcon } from "@radix-ui/react-icons";

export function SidebarNav() {
  const ctx = useContext(UIDataContext);
  const sidebarHover = ctx?.uiData.sidebarHover;

  const extractPath = (routes: any): any =>
    routes.map((route: any) => {
      const currentRoute: any = { path: route.path };
      if (route.children) {
        currentRoute.children = extractPath(route.children); // Recursively extract children
      }
      return currentRoute;
    });

  const sidebarRoutes = extractPath(
    routes.filter((route) => route.path === "dashboard")[0].children
  );

  const filteredSidebarRoutes = sidebarRoutes.filter(
    (route: any) => route.path !== "/"
  );

  return (
    <>
      {filteredSidebarRoutes.map((route: any, index: number) => {
        if (route.children) {
          return (
            <Accordion type="single" collapsible className="w-full" key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-primary-foreground">
                  {sidebarHover ? (
                    <>
                      <Icons.user className=" w-10  h-10  " />
                      <h4>{route.path}</h4>
                    </>
                  ) : (
                    <Icons.user className="w-10  h-10 " />
                  )}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground flex flex-col gap-2">
                  {route.children.map((child: any, index: number) => {
                    return (
                      <Accordion type="single" key={index}>
                        <AccordionItem value="">
                          <AccordionTrigger>
                            <Link
                              to={route.path + "/" + child.path}
                              key={index}
                            >
                              {child.path}
                            </Link>
                          </AccordionTrigger>
                          <AccordionContent>
                            {child.children?.map(
                              (subChild: any, index: number) => {
                                return (
                                  <Link to={subChild.path} key={index}>
                                    {subChild.path}
                                  </Link>
                                );
                              }
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        } else {
          return (
            <Link
              to={route.path}
              className="text-primary-foreground flex justify-between items-center "
              key={index}
            >
              <DashIcon className=" w-10  h-10 " />
              <h4>{route.path}</h4>
            </Link>
          );
        }
      })}
    </>
  );
}
