import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function CareersHeader() {
  return (
    <>
      <header className="bg-white shadow-sm border-b fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[100px]">
            <div className="flex items-center space-x-4">
              <div>
                <Link href="/">
                  <img
                    src="/dk-logo.png"
                    alt="datakernels logo"
                    className="h-[80px] w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
            <div>
              <Link href="/">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent overlap */}
      <div className="h-[100px]"></div>
    </>
  );
}
