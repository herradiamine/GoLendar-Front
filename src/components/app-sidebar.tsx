"use client"

import * as React from "react"
import {useSelector} from 'react-redux';
import type {RootState} from '@/store/index';
import {
    AudioWaveform,
    Calendar,
    Command,
    GalleryVerticalEnd,
    Home,
    Settings2,
    ShieldCheck,
} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavProjects} from "@/components/nav-projects"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,

} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Tech Team",
            logo: GalleryVerticalEnd,
            plan: "Tech planing",
        },
        {
            name: "Support team",
            logo: AudioWaveform,
            plan: "Support team planing",
        },
        {
            name: "Marketing team",
            logo: Command,
            plan: "Marketing team planing",
        },
    ],
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
            title: "Profile",
            url: "#",
            icon: Settings2,
            isActive: true,
            items: [
                {
                    title: "General",
                    url: "/profile/general",
                },
                {
                    title: "Security",
                    url: "/profile/security",
                },
                {
                    title: "Billing",
                    url: "/profile/billing",
                },
                {
                    title: "Notifications",
                    url: "/profile/notifications",
                },
            ],
        },
    ],
    projects: null,
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    const {response} = useSelector((state: RootState) => state.user);

    // Utiliser les données utilisateur du store ou des données par défaut
    data.user = response.success && response.data ? {
        name: response.data.firstname + ' ' + response.data.lastname || 'Utilisateur',
        email: response.data.email || 'user@example.com',
        avatar: '/logo.svg',
    } : {
        name: 'Utilisateur',
        email: 'user@example.com',
        avatar: '/logo.svg',
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                {data.projects && <NavProjects projects={data.projects}/>}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
