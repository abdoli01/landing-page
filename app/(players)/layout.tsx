import React from "react";
export default function PlayersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
                <main className={'px-4 w-full'}>
                  <h1>hiii</h1>
                    {children}
                </main>

    );
}

