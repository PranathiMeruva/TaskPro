import { MenuIcon } from "lucide-react";
import NewDocumentButton from "../ui/NewDocumentButton"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Sidebar() {
    const menuOptions = (
        <>
        <NewDocumentButton />

        {/* My documents */}
        {/*List.. */}
        {/*Shared with me.. */}
        </>
    )

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
        <Sheet>
        <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 round-lg" size={40}/>
        </SheetTrigger>
        <SheetContent side = "left">
            <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>options</div>
            </SheetHeader>
        </SheetContent>
        </Sheet>
        <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
}

export default Sidebar