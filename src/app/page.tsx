"use client";

import Adjustments from "@/components/common/adjustments";
import ColorCopy from "@/components/common/color-copy";
import Header from "@/components/common/header";
import Install from "@/components/common/install";
import { Button } from "@/components/ui/button";
import { GeistMono } from "geist/font/mono";
import { ColorWheel, DirectionsIndex } from "gradiently";
import _ from "lodash";
import { Copy } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { toast } from "sonner";

export default function Home() {
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
      <ColorCopy gradient={gradient} />
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
