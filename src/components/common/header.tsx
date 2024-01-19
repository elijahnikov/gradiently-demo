import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="z-10 mx-auto items-center justify-center flex flex-col">
      <h1 className="text-[40px] font-bold">Gradiently</h1>
      <p className="max-w-[400px]">
        A minimal, lightweight colour picker to generate beautiful colours and
        gradients.
      </p>
    </div>
  );
}
