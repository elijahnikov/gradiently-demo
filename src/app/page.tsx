"use client";

import Adjustments from "@/components/common/adjustments";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import { ColorWheel, DirectionsIndex } from "gradiently";
import _ from "lodash";
import { useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";

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
      className={"flex w-screen h-screen flex-col items-center p-8"}
    >
      <Header />
      <div className="my-5 flex space-x-3">
        <a
          href="https://www.npmjs.com/package/gradiently"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"outline"}>
            <FaNpm size={30} />
          </Button>
        </a>
        <a
          href="https://github.com/elijahnikov/gradiently"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"outline"}>
            <FaGithub size={30} />
          </Button>
        </a>
      </div>
      <div className="mt-5 shadow-2xl rounded-full">
        <ColorWheel
          radius={120}
          pickers={pickers}
          gradientType={gradientType}
          direction={direction}
          onChange={setGradient}
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
