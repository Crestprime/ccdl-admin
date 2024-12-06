import { RiArrowRightSLine, RiBuildingFill, RiFireLine, RiMoneyDollarCircleLine, RiSafe2Fill } from "@remixicon/react";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";


export default function SalesCard() {
    return (
        <div className=' w-full h-fit flex gap-4 ' >
            <div className=" w-full p-4 h-[374px] rounded-2xl flex flex-col border " >
                <p className=" text-bodyTextColor text-sm leading-5 " >Cashflow</p>
                <p className=" text-[30px] font-medium leading-9 " >₦60,000.01</p>
                <Button variant={"outline"} className=" h-[40px] text-sm font-medium mt-auto w-fit rounded-full " >
                    See all
                </Button>
            </div>
            <div className=" w-full p-4 h-[374px] rounded-2xl flex flex-col border " >
                <div className=" flex gap-2 items-center " >
                    <RiFireLine />
                    <p className=" font-medium " >Top selling</p>
                </div>
                <div className=" w-full mt-auto flex justify-between "  >
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label >Airplane Mode</Label>
                    </div>
                    <Button variant={"outline"} className=" h-[40px] text-sm font-medium mt-auto w-fit rounded-full " >
                        View more
                    </Button>
                </div>
            </div>
            <div className=" w-full p-4 h-[374px] rounded-2xl flex flex-col border  " >
                <div className=" flex gap-2 items-center " >
                    <RiMoneyDollarCircleLine />
                    <p className=" font-medium " >Recent Transactions</p>
                </div>
                <Tabs defaultValue="incoming" className="w-full mt-4 ">
                    <TabsList className="grid w-full grid-cols-3 h-fit ">
                        <TabsTrigger className=" h-[36px] " value="incoming">Incoming</TabsTrigger>
                        <TabsTrigger className=" h-[36px] " value="outgoing">Outgoing</TabsTrigger>
                        <TabsTrigger className=" h-[36px] " value="pending">Pending</TabsTrigger>
                    </TabsList>
                    <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="incoming">
                        <div className=" flex items-center justify-between w-full gap-2 " >
                            <div className=" w-10 h-10 flex justify-center items-center bg-[#ABEFC6] rounded-full " >
                                <RiSafe2Fill />
                            </div>
                            <div className=" flex flex-col " >
                                <p className=" font-medium text-sm " >Land Banking Investment</p>
                                <p className=" text-xs text-bodyTextColor " >Deposit from Mr. John Doe</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <div className=" flex flex-col " >
                                    <p className=" font-medium text-sm " >₦3,500.00</p>
                                    <p className=" text-xs text-bodyTextColor text-right ">Sep 18</p>
                                </div>
                                <RiArrowRightSLine />
                            </div>
                        </div>
                        <div className=" flex items-center justify-between w-full gap-2 " >
                            <div className=" w-10 h-10 flex justify-center items-center bg-[#ABEFC6] rounded-full " >
                                <RiBuildingFill />
                            </div>
                            <div className=" flex flex-col " >
                                <p className=" font-medium text-sm " >Land Banking Investment</p>
                                <p className=" text-xs text-bodyTextColor " >Deposit from Mr. John Doe</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <div className=" flex flex-col " >
                                    <p className=" font-medium text-sm " >₦3,500.00</p>
                                    <p className=" text-xs text-bodyTextColor text-right ">Sep 18</p>
                                </div>
                                <RiArrowRightSLine />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
