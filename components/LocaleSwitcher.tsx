"use client";

import React from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useGetSettingsVisibleLanguagesQuery } from "@/services/api/settingsApi";

function getInitialLocale() {
    if (typeof document === "undefined") return "fa";

    const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1];

    return cookieLocale || "fa";
}

export default function LocaleSwitcher() {
    const [currentLocale, setCurrentLocale] = React.useState<string>(getInitialLocale);

    const {
        data,
        isLoading,
    } = useGetSettingsVisibleLanguagesQuery();

    const languages = data?.items || [];

    const changeLanguage = (locale: string) => {
        setCurrentLocale(locale);

        document.cookie = `locale=${locale}; path=/; max-age=31536000`;

        window.location.reload();
    };

    return (
        <Select
            value={currentLocale}
            onValueChange={changeLanguage}
            disabled={isLoading}
        >
            <SelectTrigger className="w-40">
                <SelectValue placeholder="Select language" />
            </SelectTrigger>

            <SelectContent>
                {languages.map((language) => (
                    <SelectItem
                        key={language.id}
                        value={language.code}
                    >
                        {language.code.toUpperCase()} - {language.fullName}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}