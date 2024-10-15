import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

export function NavBreadcrumb({ location }: { location: string[] }) {
  const findURL = (index: number) => {
    if (index === 0) {
      return "/";
    } else {
      return location.slice(0, index + 1).join("/");
    }
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {location.map(
          (item, index) =>
            index !== 0 && (
              <div key={index} className="flex items-center gap-2">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={findURL(index)}>{item}</BreadcrumbLink>
                </BreadcrumbItem>
              </div>
            )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
