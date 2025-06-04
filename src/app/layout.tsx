import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import type { Metadata } from 'next';
import React from "react";
import { ModalProvider, HydrationSafe } from "@/shared/providers";

export const metadata: Metadata = {
    title: 'User Directory',
    description: 'Browse users with pagination, search, and accessibility',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ModalProvider>
                    <HydrationSafe>
                        `{children}
                    </HydrationSafe>
                </ModalProvider>
                <div id="modal-root"></div>
            </body>
        </html>
    );
}