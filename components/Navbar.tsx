// components/navbar.tsx

import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";
import Image from "next/image";
import {ModeToggle} from "@/components/ModeToggle";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur mb-2">
            <div className="container mx-auto flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo-new.png"
                        alt="Metrica"
                        width={42}
                        height={42}
                        style={{ width: "auto", height: "auto" }}
                        className="rounded-lg"
                    />

            {/*        <div className="hidden sm:flex flex-col leading-none">*/}
            {/*            <span className="font-bold text-lg">متریکا</span>*/}
            {/*            <span className="text-xs text-muted-foreground">*/}
            {/*  Football Analytics*/}
            {/*</span>*/}
            {/*        </div>*/}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button variant="outline">
                        <PlayCircle className="ml-2 h-4 w-4" />
                        ویدیو معرفی
                    </Button>

                    {/*<Button>*/}
                    {/*    <Download className="ml-2 h-4 w-4" />*/}
                    {/*    دانلود اپلیکیشن*/}
                    {/*</Button>*/}
                    <ModeToggle/>
                </div>
            </div>
        </header>
    );
}