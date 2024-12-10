"use client"

import * as React from "react"
import {
  Command,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { RiAccountCircleFill, RiBuilding2Fill, RiFolderOpenFill, RiHome4Fill, RiInboxArchiveFill, RiLayout2Fill, RiPieChartFill, RiSettings3Fill, RiWalletFill } from "@remixicon/react" 

const data: any = {
  user: {
    name: "Arthur Taylor",
    email: "sophia@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard/home",
      icon: RiHome4Fill,
      isActive: false,
      items: []
    },
    {
      title: "Inbox",
      url: "/dashboard/inbox",
      icon: RiInboxArchiveFill,
      isActive: true,
      items: []
    },
    {
      title: "Property",
      url: "",
      icon: RiBuilding2Fill,
      items: [
        {
          title: "Listings",
          url: "/dashboard/property/listings",
        },
        {
          title: "Investments",
          url: "/dashboard/investments",
        },
        {
          title: "Sales & Reservations",
          url: "/dashboard/saleandreservation",
        },
        {
          title: "Schedule",
          url: "/dashboard/schedule",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: RiAccountCircleFill,
      items: [
        {
          title: "Clients",
          url: "#",
        },
        {
          title: "Realtors",
          url: "#",
        },
        {
          title: "Staff",
          url: "#",
        },
        {
          title: "Suppliers",
          url: "#",
        },
      ],
    },
    {
      title: "Materials",
      url: "#",
      icon: RiLayout2Fill,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Construction",
      url: "#",
      icon: RiFolderOpenFill,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Wallet",
      url: "#",
      icon: RiWalletFill,
      items: []
    },
    {
      title: "Reports & Analytics",
      url: "#",
      icon: RiPieChartFill,
      items: []
    },
    {
      title: "Settings",
      url: "#",
      icon: RiSettings3Fill,
      items: []
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className=" text-xs ">Team</span>
                  <span className=" font-semibold text-sm">Capital City Estates</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data?.navMain} />
      </SidebarContent>
      <SidebarFooter className="mt-auto" >
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
