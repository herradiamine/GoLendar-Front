"use client"

import * as React from "react";
import {Calendar, Home, LifeBuoy, Send, Settings2, ShieldCheck} from "lucide-react";
import {useSelector} from "react-redux";
import {NavMain} from "@/components/nav-main";
import {NavProjects} from "@/components/nav-projects";
import {NavSecondary} from "@/components/nav-secondary";
import {NavUser} from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function SidebarComponent({...props}: React.ComponentProps<typeof Sidebar>) {
    // Récupération de l'état de l'utilisateur depuis Redux
    const {response: user} = useSelector((state: any) => state.user);

    const data = {
        user: {
            name: user.data.firstname + ' ' + user.data.lastname,
            email: user.data.email,
            avatar: "AH",
        },
        navMain: [
            {
                title: "Dashboard",
                url: "/dashboard",
                icon: Home,
            },
            {
                title: "Calendars",
                url: "/calendars",
                icon: Calendar,
                isActive: true,
                items: [
                    {
                        title: "Family planing",
                        url: "#",
                    },
                    {
                        title: "Professional planing",
                        url: "#",
                    },
                    {
                        title: "Personal planing",
                        url: "#",
                    },
                ],
            },
            {
                title: "Sessions",
                url: "/sessions",
                icon: ShieldCheck
            },
            {
                title: "Settings",
                url: "#",
                icon: Settings2,
                isActive: true,
                items: [
                    {
                        title: "Account",
                        url: "/settings/account",
                    },
                    {
                        title: "Profile",
                        url: "/settings/profile",
                    },
                    {
                        title: "General",
                        url: "/settings/general",
                    },
                    {
                        title: "Billing",
                        url: "/settings/billing",
                    },
                    {
                        title: "Notifications",
                        url: "/settings/notifications",
                    },
                ],
            },
        ],
        navSecondary: [
            {
                title: "Support",
                url: "#",
                icon: LifeBuoy,
            },
            {
                title: "Feedback",
                url: "#",
                icon: Send,
            },
        ],
        projects: [],
    };

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div
                                    className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <img className="rounded" src="src/assets/logo.svg" alt="GL"/>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">GoLendar</span>
                                    <span className="truncate text-xs">Gestionnaire de calendriers</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.length && <NavMain items={data.navMain}/>}
                {data.projects.length > 0 && <NavProjects projects={data.projects}/>}
                {data.navSecondary.length && <NavSecondary items={data.navSecondary} className="mt-auto"/>}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
        </Sidebar>
    )
}
