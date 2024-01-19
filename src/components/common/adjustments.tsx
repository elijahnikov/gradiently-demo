import { ArrowDown, Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import _ from "lodash";
import { DirectionsIndex } from "gradiently";

const directions = [
  "top",
  "top right",
  "right",
  "bottom right",
  "bottom",
  "bottom left",
  "left",
  "top left",
];

type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export default function Adjustments({
  direction,
  setDirection,
  gradientType,
  setGradientType,
  pickers,
  setPickers,
}: {
  pickers: number;
  setPickers: SetStateType<typeof pickers>;
  direction: DirectionsIndex;
  setDirection: SetStateType<typeof direction>;
  gradientType: "linear" | "radial";
  setGradientType: SetStateType<typeof gradientType>;
}) {
  return (
    <div className="text-center mt-5 w-full space-y-2 mx-auto flex flex-col justify-center">
      <div className="space-y-1">
        <p className="text-sm">Number of pickers (max: 3, min: 1)</p>
        <div className="mx-auto flex justify-center space-x-2">
          <Button
            onClick={() => {
              if (pickers > 1) {
                setPickers((pickers) => pickers - 1);
              }
            }}
            size={"icon"}
            variant={"outline"}
          >
            <Minus />
          </Button>
          <p className="mt-2">{pickers}</p>
          <Button
            size="icon"
            onClick={() => {
              if (pickers < 3) {
                setPickers((pickers) => pickers + 1);
              }
            }}
            variant={"outline"}
          >
            <Plus />
          </Button>
        </div>
      </div>

      <div className="mx-auto justify-center space-y-1">
        <p className="text-sm">Direction</p>
        <Select onValueChange={(dir: DirectionsIndex) => setDirection(dir)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder="Left"
              defaultChecked={true}
              defaultValue={"left"}
            />
          </SelectTrigger>
          <SelectContent>
            {directions.map((direction, index) => (
              <SelectItem key={index} value={direction}>
                {_.startCase(_.camelCase(direction))}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <p className="text-sm">Gradient Type</p>
        <ToggleGroup
          unselectable={"on"}
          onValueChange={(type: "linear" | "radial") =>
            type && setGradientType(type)
          }
          type="single"
          defaultValue="linear"
        >
          <ToggleGroupItem value="linear" aria-label="Toggle linear">
            Linear
          </ToggleGroupItem>
          <ToggleGroupItem value="radial" aria-label="Toggle radial">
            Radial
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
