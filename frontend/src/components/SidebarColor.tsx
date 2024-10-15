import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const colors = ["red", "blue", "green", "orange", "purple"];

export function SidebarColor() {
  const handleClick = (e: any) => {
    console.log(e.target.value + "clicked");
  };

  return (
    <RadioGroup>
      {colors.map((color, index) => (
        <div className="flex flex-row items-center space-x-2" key={index}>
          <RadioGroupItem
            onClick={handleClick}
            value="defaultvalue"
            id={`r+${index}`}
            className={`bg-${color}-600`} // fix the color visibility
          />
          <Label hidden htmlFor={`r+${index}`}>
            {color}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
