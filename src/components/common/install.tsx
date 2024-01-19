import { toast } from "sonner";
import { Button } from "../ui/button";
import { GeistMono } from "geist/font";
import { TiTick } from "react-icons/ti";
import { Copy } from "lucide-react";
import { FaNpm, FaGithub } from "react-icons/fa";

export default function Install() {
  return (
    <div className="flex mt-2 mb-5">
      <div className="bg-white max-w-[600px] min-w-[300px] border-2 border-gray-300 justify-between mt-2 items-center rounded-lg px-2 py-1 flex">
        <p className="text-sm text-gray-800">npm install gradiently</p>
        <Button
          size="sm"
          variant={"outline"}
          onClick={() => {
            navigator.clipboard.writeText("npm install gradiently");
            toast.success(
              <>
                <TiTick />
                <div className={GeistMono.className}>
                  Copied install instructions
                </div>
              </>
            );
          }}
          className="ml-2 px-2 py-1 h-8 w-8"
        >
          <Copy size={15} />
        </Button>
      </div>
      <div className="space-x-2 ml-2 mt-[10px]">
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
    </div>
  );
}
