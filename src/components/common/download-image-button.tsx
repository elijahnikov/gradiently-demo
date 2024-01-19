import downloadImage from "@/util/download-image";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";

export default function DownloadImageButton({
  gradient,
  pickers,
  direction,
}: {
  gradient: string;
  pickers: number;
  direction: string;
}) {
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(1000);
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="sm:mt-[18px] text-center mx-auto flex mt-[23px] ml-2"
                  variant="outline"
                >
                  <Download />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download as image</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Image download</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the image.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  type="number"
                  id="width"
                  onChange={(e) => setWidth(Number(e.target.value))}
                  defaultValue={1000}
                  max={4000}
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  type="number"
                  onChange={(e) => setHeight(Number(e.target.value))}
                  id="height"
                  max={4000}
                  defaultValue={1000}
                  className="col-span-2 h-8"
                />
              </div>
              <Button
                variant={"outline"}
                onClick={() =>
                  downloadImage(width, height, gradient, pickers, direction)
                }
              >
                Download
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
