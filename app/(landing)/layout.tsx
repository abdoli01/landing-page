import React from "react";
export default function PlayersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
                <main className={'px-4 w-full'}>
                    {children}
                </main>

    );
}

