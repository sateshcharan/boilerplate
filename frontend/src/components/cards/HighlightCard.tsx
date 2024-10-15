import {
  Card,
  CardAvatar,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
} from "@/components/ui/custom/CustomCard";
import { Button } from "../ui/button";

export function HighlightCard() {
  return (
    <Card>
      <CardIcon>
        <img src="https://i.pravatar.cc/200" alt="" className="rounded-lg " />
      </CardIcon>

      <CardHeader className=" text-end">
        <CardTitle className="text-2xl font-semibold">Followers</CardTitle>
        <CardDescription>People you are following right now</CardDescription>
      </CardHeader>

      <CardContent>Just Updated</CardContent>
    </Card>
  );
}
