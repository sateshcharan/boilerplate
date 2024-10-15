import { Button } from "@/components/ui/button";
import {
  Card,
  CardAvatar,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom/CustomCard";

export function MapCard() {
  return (
    <Card>
      <CardAvatar>
        <img src="https://i.pravatar.cc/400" alt="" className="rounded-lg" />
      </CardAvatar>

      <CardHeader className="">
        <CardTitle>website views</CardTitle>
        <CardDescription>Last Campaign Performance</CardDescription>
      </CardHeader>

      <CardContent>Card content</CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
