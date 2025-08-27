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
import { RiAccountCircleFill, RiBuilding2Fill, RiFolderOpenFill, RiHome4Fill, RiWalletFill } from "@remixicon/react"

const data: any = {
  user: {
    name: "Arthur Taylor",
    email: "sophia@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: RiHome4Fill,
      isActive: false,
      items: []
    },
    {
      title: "Property",
      url: "property",
      icon: RiBuilding2Fill,
      items: [
        {
          title: "Listings",
          url: "/dashboard/property/listings?type=BUILDING",
        },
        {
          title: "Investments",
          url: "/dashboard/property/investments",
        },
        {
          title: "Sales & Reservations",
          url: "/dashboard/property/sales",
        }
      ],
    },
    {
      title: "Users",
      url: "users",
      icon: RiAccountCircleFill,
      items: [
        {
          title: "Clients",
          url: "/dashboard/users/clients",
        },
        {
          title: "Realtors",
          url: "/dashboard/users/realtor",
        },
        {
          title: "Staff",
          url: "#",
        }
      ],
    }, 
    {
      title: "Construction",
      url: "/dashboard/constructions/proposals",
      icon: RiFolderOpenFill,
      items: [],
    },
    {
      title: "Wallet",
      url: "/dashboard/wallet/alltransaction",
      icon: RiWalletFill, 
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar className=" !bg-[#f2f4f7] " variant="inset" {...props}>
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
