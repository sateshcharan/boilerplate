import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GearIcon } from "@radix-ui/react-icons";
import { SidebarColor } from "./SidebarColor";

export function SettingSheet() {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <GearIcon width={30} height={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shadcn Configurator</SheetTitle>
          <SheetDescription>See our dashboard options.</SheetDescription>
        </SheetHeader>
        <div>
          <h3>Sidenav Colors</h3>
          <SidebarColor />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
