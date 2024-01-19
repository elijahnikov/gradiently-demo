"use client";

import Adjustments from "@/components/common/adjustments";
import ColorCopy from "@/components/common/color-copy";
import DownloadImageButton from "@/components/common/download-image-button";
import Header from "@/components/common/header";
import Install from "@/components/common/install";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import downloadImage from "@/util/download-image";
import { ColorWheel, DirectionsIndex } from "gradiently";
import _, { pick } from "lodash";
import { Download } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const gradientRef = useRef<HTMLDivElement>(null);

  const [gradient, setGradient] = useState<string>("");
  const [pickers, setPickers] = useState<number>(2);
  const [direction, setDirection] = useState<DirectionsIndex>("left");
  const [gradientType, setGradientType] = useState<"linear" | "radial">(
    "linear"
  );

  return (
    <div
      style={{ background: gradient }}
      className={"flex w-screen h-screen flex-col items-center p-4"}
    >
      <Header />
      <Install />
      <div className="mt-5 shadow-2xl rounded-full">
        <ColorWheel
          radius={120}
          pickers={pickers}
          gradientType={gradientType}
          direction={direction}
          onChange={setGradient}
        />
      </div>
      <div className="flex">
        <ColorCopy gradient={gradient} />
        <DownloadImageButton
          direction={direction}
          gradient={gradient}
          pickers={pickers}
        />
      </div>
      <Adjustments
        pickers={pickers}
        setPickers={setPickers}
        direction={direction}
        setDirection={setDirection}
        gradientType={gradientType}
        setGradientType={setGradientType}
      />
    </div>
  );
}
