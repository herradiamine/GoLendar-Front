"use client"

import * as React from "react";
import { Calendar, Home, LifeBuoy, Send, Settings2, ShieldCheck } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Amine Herradi",
    email: "amineherradi@gmail.com",
    avatar: "AH",
  },
  navMain: [
    {
      title: "Tableau de bord",
      url: "#",
      icon: Home,
    },
    {
      title: "Calendriers",
      url: "#",
      icon: Calendar,
      isActive: true,
      items: [
        {
          title: "Agenda familiale",
          url: "#",
        },
        {
          title: "Agenda professionnel",
          url: "#",
        },
        {
          title: "Agenda personnel",
          url: "#",
        },
      ],
    },
    {
      title: "Sessions",
      url: "#",
      icon: ShieldCheck
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "Profil",
          url: "#",
        },
        {
          title: "General",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
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
}

export function SidebarComponent({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img src="../assets/logo.svg" />
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
        {data.navMain.length && <NavMain items={data.navMain} />}
        {data.projects.length > 0 && <NavProjects projects={data.projects} />}
        {data.navSecondary.length && <NavSecondary items={data.navSecondary} className="mt-auto" />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
