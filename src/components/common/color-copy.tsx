import { GeistMono } from "geist/font";
import { Copy } from "lucide-react";
import { TiTick } from "react-icons/ti";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function ColorCopy({ gradient }: { gradient: string }) {
  return (
    <div className="bg-white max-w-[600px] min-w-[300px] border-2 border-gray-300 justify-between mt-4 mb-5 items-center rounded-lg px-2 py-1 flex">
      <p className="text-sm text-gray-800">{gradient}</p>
      <Button
        size="sm"
        variant={"outline"}
        onClick={() => {
          navigator.clipboard.writeText(gradient);
          toast.success(
            <>
              <TiTick />
              <div className={GeistMono.className}>Copied gradient</div>
            </>
          );
        }}
        className="ml-2 px-2 py-1 h-8 w-8"
      >
        <Copy size={15} />
      </Button>
    </div>
  );
}
