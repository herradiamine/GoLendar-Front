"use client"

import React from 'react';
import {Geist, Geist_Mono} from "next/font/google";
import ReduxProvider from '@/store/provider';
import SessionGuard from '@/components/session-guard';
import {ThemeProvider} from "@/components/theme-provider";
import LayoutContent from "@/components/layout-content";
import {Toaster} from 'sonner';
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ReduxProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SessionGuard>
                            <LayoutContent>
                                {children}
                            </LayoutContent>
                        </SessionGuard>
                    </ThemeProvider>
                </body>
            </html>
            <Toaster />
        </ReduxProvider>
    );
}
