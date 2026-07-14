"use client";

import React from "react";
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

function getInitialLocale() {
    if (typeof document === "undefined") return "fa";

    const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1];

    return cookieLocale || "fa";
}

export default function LocaleSwitcher() {
    const [currentLocale, setCurrentLocale] = React.useState<string>(
        getInitialLocale
    );

    const changeLanguage = (locale: string) => {
        setCurrentLocale(locale);

        // ذخیره در Cookie
        document.cookie = `locale=${locale}; path=/; max-age=31536000`;

        // رفرش صفحه
        window.location.reload();
    };

    return (
        <Select value={currentLocale} onValueChange={changeLanguage}>
            <SelectTrigger className="w-40">
                <SelectValue placeholder="Select language" />
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