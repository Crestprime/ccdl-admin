import { Outlet } from "react-router-dom"
import { AppSidebar } from "./app-sidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"

export default function DashboardLayout() {
  return (
    <SidebarProvider className=" p-3 !bg-[#f2f4f7] font-OpenRunde-Regular " >
      {/* <div className=" w-fit " > */}
        <AppSidebar />
      {/* </div> */}
      <SidebarInset className=" flex-1 relative rounded-lg h-full overflow-y-auto " >
        <header className="flex h-16 w-fit shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard/">Components</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <div className="flex flex-1 overflow-x-hidden flex-col gap-4 p-4 pt-0">
          {/* {children} */}
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
