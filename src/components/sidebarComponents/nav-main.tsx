"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLinkStore } from "@/store/linkStore"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items: {
      title: string
      url: string
    }[]
  }[]
}) {

  const pathname = new URL(window.location.href);

  const [linkData, setLinkData] = useState<string>(pathname.pathname)
  const navigate = useNavigate()

  const pathArray = pathname?.pathname.split("/").filter(Boolean);
  const { setLinkPath } = useLinkStore((state) => state)

  const clickHandler = (item: string) => {
    navigate(item) 
  }

  useEffect(()=> {
    setLinkData(pathname.pathname)
    setLinkPath(pathArray) 
  }, [pathname.pathname])

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={linkData?.includes(item?.url) ? true : false}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title}>
                {item?.items?.length > 0 ? (
                  <CollapsibleTrigger className={linkData === item?.url ? " text-gray700 " : " text-gray500 "}  >
                    <item.icon />
                    <span >{item.title}</span>
                  </CollapsibleTrigger>
                ) : (
                  <div role="button" onClick={() => clickHandler(item?.url)} className={linkData === item?.url ? " bg-white shadow-lg text-gray700 " : " text-gray500 "} >
                    <item.icon />
                    <span>{item.title}</span>
                  </div>
                )}
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent  >
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <div role="button" onClick={() => clickHandler(subItem?.url)} className={linkData?.includes(subItem?.url) ? " bg-white shadow-lg text-gray700 " : " text-gray500 "}>
                              <span>{subItem.title}</span>
                            </div>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
