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

export function ProductCard() {
  return (
    <Card>
      <CardAvatar hoverAction={true}>
        <img src="https://i.pravatar.cc/400" alt="" className="rounded-lg" />
      </CardAvatar>

      <CardFooter className="flex justify-center gap-4 -mt-10 ">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>

      <CardHeader className=" text-center">
        <CardTitle className="text-2xl font-semibold">Office Studio</CardTitle>
        <CardDescription>
          The place is close to Metro Station and bus stop just 2 min by walk
          and near to "Naviglio" where you can enjoy the night life in London,
          UK.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-between">
        <h3>$1.119/night</h3>
        <h3>London, UK</h3>
      </CardContent>
    </Card>
  );
}
