import { ChatBtn, ConstructionComment, ConstructionDocument, ConstructionUpdate } from "@/components/constructionComponents";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiArrowDownSLine, RiArrowRightSLine, RiChat3Line, RiFlag2Line, RiFolder2Line, RiInformationLine, RiRefreshLine } from "@remixicon/react";
import { useNavigate } from "@tanstack/react-router";


export default function ProposalDetailsPage() {

    const navigate = useNavigate() 
    
    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-end pb-4 border-b items-center " >
                <ChatBtn />
            </div>
            <div className=" w-full border rounded-2xl " >
                <div className=" w-full px-6 py-4 border-b flex items-center justify-between   " >
                    <div className=" flex flex-col gap-2 " >
                        <div className=" flex gap-1 items-center " >
                            <p className=" font-semibold text-gray700 " >Residential Construction</p>
                            <p className=" text-xs font-medium text-gray500 " >・Jan 12, 2024</p>
                        </div>
                        <p className=" text-xs text-gray500 " >12 Greenfield Avenue, Lekki, Lagos</p>
                    </div>
                    <div role="button" onClick={()=> navigate({
                        to: "/dashboard/constructions/proposals/listingdetails"
                    })} className=" flex gap-1 items-center " >
                        <p className=" text-xs font-medium " >Project details</p>
                        <RiArrowRightSLine />
                    </div>
                </div>
                <div className=" px-6 py-4 w-full gap-8 flex items-center " >
                    <div className=" flex flex-col " >
                        <DropdownMenu>
                            <DropdownMenuTrigger className=" outline-none flex items-center gap-1 text-gray500 text-xs font-medium " >
                                Status
                                <RiArrowDownSLine className=" mt-1 " />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className=" ml-10 mt-6 " >
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className=" flex items-center gap-1 h-[21px] text-xs text-warning600 font-medium rounded-2xl border border-warning600 justify-center px-2 " >
                            <div className=" w-2 h-2 rounded-full bg-warning600 " />PENDING
                        </div>
                    </div>
                    <div className=" flex flex-col " >
                        <DropdownMenu>
                            <DropdownMenuTrigger className=" outline-none flex items-center gap-1 text-gray500 text-xs font-medium " >
                                Assigned to
                                <RiArrowDownSLine className=" mt-1 " />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className=" ml-10 mt-6 " >
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className=" flex items-center gap-1 text-xs text-gray700 font-medium justify-center " >
                            <div className=" w-5 h-5 bg-yellow-400 rounded-full " >

                            </div>
                            Anne Macmillan
                        </div>
                    </div>
                    <div className=" flex flex-col " >
                        <DropdownMenu>
                            <DropdownMenuTrigger className=" outline-none flex items-center gap-1 text-gray500 text-xs font-medium " >
                                Priority
                                <RiArrowDownSLine className=" mt-1 " />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className=" ml-10 mt-6 " >
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className=" flex items-center gap-1 text-xs text-gray700 font-medium justify-center " >
                            <RiFlag2Line />
                            High
                        </div>
                    </div>
                    <div className=" flex flex-col ml-auto gap-2  " >
                        <div className=" flex items-center gap-4 " >
                            <div className=" flex " >
                                <div className=" w-6 h-6 rounded-full border bg-green-400 " />
                                <div className=" w-6 h-6 rounded-full border bg-red-400 -ml-2 " />
                            </div>
                            <p className=" text-xs font-medium text-gray700 " >Micheal Matt & Julius Smith</p>
                        </div>
                        <div className=" flex text-gray-400 justify-end items-center gap-2 " >
                            <p className=" text-gray500 text-sm " >Micheal Matt & Julius Smith</p>
                            <RiInformationLine size={"20px"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full border rounded-2xl " >
                <div className=" w-full px-6 py-4 border-b flex items-center justify-between   " >
                    <p className=" font-medium text-gray700 " >Stages</p>
                </div>
                <div className=" w-full px-6 py-4 flex " >
                    <div className=" w-full relative flex z-30 justify-center h-[38px] rounded-l-full bg-gray500 items-center text-xs text-white font-medium " >
                        Proposal Received
                        <div className="absolute inset-y-auto -right-4 transform rotate-45 bg-gray500 w-[40px] h-[40px] border-r-[19.01px] border-t-[19.01px] border-white " />
                    </div>
                    <div className=" w-full relative flex z-20 justify-center h-[38px] items-center bg-success500 text-xs text-white font-medium " >
                        Proposal Received

                        <div className="absolute inset-y-auto -right-4 transform rotate-45 bg-success500 w-[40px] h-[40px] border-r-[19.01px] border-t-[19.01px] border-white " />
                    </div>
                    <div className=" w-full relative flex z-10 justify-center h-[38px] items-center text-xs bg-gray100 text-gray800 font-medium " >
                        Proposal Received

                        <div className="absolute inset-y-auto -right-4 transform rotate-45 bg-gray100 w-[40px] h-[40px] border-r-[19.01px] border-t-[19.01px] border-white " />
                    </div>
                    <div className=" w-full relative flex justify-center h-[38px] rounded-r-full items-center text-xs bg-gray100 text-gray800 font-medium " >
                        Proposal Received
                    </div>
                </div>
            </div>
            <Tabs defaultValue="comments" className="w-full flex flex-col gap-4 ">
                <TabsList className="grid w-fit grid-cols-3 bg-white gap-4 h-fit ">
                    <TabsTrigger className=" h-[36px] rounded-full data-[state=active]:text-gray900 data-[state=active]:bg-gray200 flex gap-1 " value="comments">
                        <RiChat3Line size={"15px"} />
                        Comments
                    </TabsTrigger>
                    <TabsTrigger className=" h-[36px] rounded-full data-[state=active]:text-gray900 data-[state=active]:bg-gray200 flex gap-1 " value="documents">
                        <RiFolder2Line size={"15px"} />
                        Documents
                    </TabsTrigger>
                    <TabsTrigger className=" h-[36px] rounded-full data-[state=active]:text-gray900 data-[state=active]:bg-gray200 flex gap-1 " value="updates">
                        <RiRefreshLine size={"15px"} />
                        Updates
                    </TabsTrigger>
                </TabsList>
                <TabsContent className=" w-full" value="comments">
                    <ConstructionComment />
                </TabsContent>
                <TabsContent className=" w-full" value="documents">
                    <ConstructionDocument />
                </TabsContent>
                <TabsContent className=" w-full " value="updates">
                    <ConstructionUpdate />
                </TabsContent>
            </Tabs>
        </div>
    )
}
