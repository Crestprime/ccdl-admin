import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminTable from "@/components/userComponents/adminTable";
import { AdminBtn } from "./adminBtn";
import { CustomButton, SearchBar } from "@/components/shared";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { dateFormat } from "@/utils/dateFormat";


export default function AdminPage() {
    const contentRef = React.useRef<HTMLDivElement | any>(null);

    const reactToPrintFn = useReactToPrint({
        contentRef,
        documentTitle: "admin " + dateFormat(new Date()),
        pageStyle: `
          @page {
            size: Legal landscape
          }   
        `,
    });

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-between pb-4 border-b items-center " >
                <div className=" flex flex-col  " >
                    <h3 className=" font-semibold text-lg " >Staff</h3>
                    <p className=" text-sm text-bodyTextColor " >Manage and oversee all staff profiles, roles, and responsibilities.</p>
                </div>
                <div className=" flex gap-4  " >
                    <AdminBtn />
                </div>
            </div>

            <Tabs defaultValue="user" className="w-full flex flex-col gap-3 ">
                <TabsList className="grid w-fit grid-cols-2 h-fit ">
                    <TabsTrigger className=" h-[36px] " value="user">Active Users</TabsTrigger>
                    <TabsTrigger className=" h-[36px] " disabled value="suspended">Suspended</TabsTrigger>
                </TabsList>
                <div className=" flex flex-col gap-4 " >
                    <SearchBar />
                    <CustomButton variant={"main"} onClick={reactToPrintFn} className=" w-fit px-4 rounded-full " >Export</CustomButton>
                </div>
                <TabsContent ref={contentRef} className=" w-full pt-3 flex flex-col gap-5 " value="user">
                    <AdminTable />
                </TabsContent>
            </Tabs>
        </div>
    )
}
