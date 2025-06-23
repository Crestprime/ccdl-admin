// import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";  
import { RealtorTable } from "@/components/userComponents";


export default function RealtorPage() { 

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-between pb-4 border-b items-center " >
                <div className=" flex flex-col  " >
                    <h3 className=" font-semibold text-lg " >Realtor</h3>
                    <p className=" text-sm text-bodyTextColor " >View and manage all ESP profiles on capital city</p>
                </div>
                {/* <div className=" flex gap-4  " >
                    <Button onClick={()=> navigate({
                        to: "/dashboard/property/listings/create"
                    })} variant={"main"} className=" h-[40px] text-sm font-medium rounded-full " >
                        New event
                    </Button>
                </div> */}
            </div> 

            <Tabs defaultValue="user" className="w-full ">
                <TabsList className="grid w-fit grid-cols-2 h-fit ">
                    <TabsTrigger className=" h-[36px] " value="user">Active Users</TabsTrigger>
                    <TabsTrigger className=" h-[36px] " disabled value="suspended">Suspended</TabsTrigger> 
                </TabsList> 
                <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="user">
                    <RealtorTable />
                </TabsContent>
            </Tabs>
        </div>
    )
}
