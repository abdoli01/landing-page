"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Loader2 } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const languages = [
    {
        code: "fa",
        fullName: "فارسی",
    },
    {
        code: "en",
        fullName: "English",
    },
];

export default function LocaleSwitcher() {
    const locale = useLocale();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const changeLanguage = (newLocale: string) => {
        document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
        window.location.reload();
    };

    return (
        <Select
            value={mounted ? locale : undefined}
            onValueChange={changeLanguage}
        >
            <SelectTrigger className="w-40">
                {mounted ? (
                    <SelectValue />
                ) : (
                    <Loader2 className="h-4 w-4 animate-spin" />
                )}
            </SelectTrigger>

            <SelectContent>
                {languages.map((language) => (
                    <SelectItem
                        key={language.code}
                        value={language.code}
                    >
                        {language.code.toUpperCase()} - {language.fullName}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}