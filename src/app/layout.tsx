"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import ReduxProvider from '@/store/provider';
import SessionGuard from '@/components/session-guard';
import {Geist, Geist_Mono} from "next/font/google";
import {ThemeProvider} from "@/components/theme-provider";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from '@/components/ui/sidebar';
import {AppSidebar} from "@/components/app-sidebar";
import {Separator} from "@/components/ui/separator";
import NavBreadcrumb from "@/components/nav-breadcrumb";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

function LayoutContent({children}: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    // Pages qui ne nécessitent pas de sidebar
    const publicPages = ['/login', '/register'];
    const isPublicPage = publicPages.includes(pathname);

    if (isPublicPage) {
        // Pour les pages publiques, afficher seulement le contenu sans sidebar
        return <>{children}</>;
    }

    // Pour les pages privées, afficher avec sidebar
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1"/>
                        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4"/>
                        <NavBreadcrumb/>
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}

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
        </ReduxProvider>
    );
}
