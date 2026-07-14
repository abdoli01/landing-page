"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="
                fixed
                bottom-6
                right-2
                z-50
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-background
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary
                hover:shadow-xl
            "
        >
            <ChevronUp className="h-6 w-6 text-primary" />
        </button>
    );
}