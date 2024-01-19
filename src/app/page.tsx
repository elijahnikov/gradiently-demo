"use client";

import Adjustments from "@/components/common/adjustments";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import { ColorWheel, DirectionsIndex } from "gradiently";
import _ from "lodash";
import { Copy } from "lucide-react";
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
      <div className="bg-white max-w-[600px] min-w-[300px] border-2 border-gray-300 justify-between mt-4 items-center rounded-lg p-1 pl-2 flex">
        <p className="text-sm text-gray-800">{gradient}</p>
        <Button
          onClick={() => navigator.clipboard.writeText(gradient)}
          className="ml-2 px-2 py-1"
        >
          <Copy size={15} />
        </Button>
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
