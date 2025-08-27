import { ChatBtn, ConstructionComment, ConstructionDocument, ConstructionUpdate } from "@/components/constructionComponents";
import { LoadingAnimation } from "@/components/shared";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useConstruction from "@/hooks/useConstruction";
import { useFetchData } from "@/hooks/useFetchData";
import { IConstruction } from "@/models/construction";
import { IUser } from "@/models/user";
import { dateFormat } from "@/utils/dateFormat";
import { RiArrowDownSLine, RiArrowRightSLine, RiEqualizer2Line, RiFlag2Line, RiFlagLine, RiFolder2Line, RiRefreshLine, RiSearch2Line, RiTimerLine } from "@remixicon/react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function ProposalDetailsPage() {

    const navigate = useNavigate()

    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");

    const [search, setSearch] = useState("")

    const { data, isLoading } = useFetchData<IConstruction>(`/admin-construction/projects/${id}`, [`project`, id]);
    const { data: admin, isLoading: loading, isRefetching } = useFetchData<Array<IUser>>(`/admin`, [`admin`, search], {
        search: search
    });
    const { updateConstructionStatusMutate } = useConstruction()

    console.log(data);
    console.log(admin);

    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full flex h-auto gap-6 flex-col  " >
                <div className=" w-full flex justify-end pb-4 border-b items-center " >
                    <ChatBtn />
                </div>
                <div className=" w-full border rounded-2xl " >
                    <div className=" w-full px-6 py-4 border-b flex items-center justify-between   " >
                        <div className=" flex flex-col gap-2 " >
                            <div className=" flex gap-1 items-center " >
                                <p className=" font-semibold text-gray700 " >{data?.projectType}</p>
                                <p className=" text-xs font-medium text-gray500 " >・{dateFormat(data?.createdAt)}</p>
                            </div>
                            <p className=" text-xs text-gray500 " >{data?.projectAddress}</p>
                        </div>
                        <div role="button"
                            // onClick={() => navigate(
                            //     `/dashboard/constructions/proposals/listingdetails?id=${data?.}`
                            // )} 
                            className=" flex gap-1 items-center " >
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
                                    <DropdownMenuItem onClick={() => updateConstructionStatusMutate({ status: "PAUSED" })} >
                                        <div className=" flex gap-2 items-center " >
                                            <RiFlagLine color="#F79009" />
                                            <p className=" text-sm text-gray-700 font-medium" >Pending</p>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => updateConstructionStatusMutate({ status: "CANCELLED" })}>
                                        <div className=" flex gap-2 items-center " >
                                            <RiFlagLine color="#F04438" />
                                            <p className=" text-sm text-gray-700 font-medium" >Rejected</p>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => updateConstructionStatusMutate({ status: "COMPLETED" })} >
                                        <div className=" flex gap-2 items-center " >
                                            <RiFlagLine color="#085D3A" />
                                            <p className=" text-sm text-gray-700 font-medium" >Accepted</p>
                                        </div>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className=" h-[36px] flex items-center justify-center " > 
                                <div className={` flex items-center gap-1 h-[21px] text-xs ${data?.status === "PAUSED" ? " text-warning600 border-warning600 " : data?.status === "CANCELLED" ? " text-[#F04438] border-[#F04438] " : " text-success800 border-success800 "} font-medium rounded-2xl border justify-center px-2 `} >
                                    <div className={` w-2 h-2 rounded-full  ${data?.status === "PAUSED" ? " bg-warning600 " : data?.status === "CANCELLED" ? " bg-[#F04438] " : data?.status === "COMPLETED"  ? " bg-success800 " : ""}`} />{data?.status === "PAUSED" ? "PENDING" : data?.status === "CANCELLED" ? "REJECTED" : "ACCEPTED"}
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col " >
                            <DropdownMenu>
                                <DropdownMenuTrigger className=" outline-none flex items-center gap-1 text-gray500 text-xs font-medium " >
                                    Assigned to
                                    <RiArrowDownSLine className=" mt-1 " />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className=" ml-10  overflow-y-hidden mt-6 " >
                                    {/* <DropdownMenuItem> */}

                                    <div className=" w-[354px] relative h-[42px] mb-4 " >
                                        <div className=" w-fit px-2 absolute top-0 h-full flex justify-center items-center " >
                                            <RiSearch2Line size={"20px"} />
                                        </div>
                                        <Input value={search} onChange={(e) => setSearch(e.target.value)} className=" h-[42px] w-full pl-8 " placeholder="Search for client name" />
                                    </div>
                                    {/* </DropdownMenuItem> */}
                                    <LoadingAnimation loading={loading} refetching={isRefetching} length={admin?.length} >
                                        <div className=" w-full max-h-[50vh] overflow-y-auto " >
                                            {admin?.map((item, index) => {
                                                return (
                                                    <DropdownMenuItem key={index} onClick={() => updateConstructionStatusMutate({ adminId: item?.id })} >
                                                        <div className=" flex gap-2 cursor-pointer " >
                                                            <div className=" w-6 h-6 rounded-full bg-gray-200" >
                                                                {item?.profilePicture && (
                                                                    <img alt={index + ""} src={item?.profilePicture} className=" w-full h-full rounded-full " />
                                                                )}
                                                            </div>
                                                            <div className=" flex flex-col text-xs " >
                                                                <p>{item?.firstName + " " + item?.lastName}</p>
                                                                <p>{item?.email}</p>
                                                                <p>{item?.position}</p>
                                                            </div>
                                                        </div>
                                                    </DropdownMenuItem>
                                                )
                                            })}
                                        </div>
                                    </LoadingAnimation>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className=" flex items-center h-[36px] gap-1 text-xs text-gray700 font-medium justify-center " >
                                <div className={` ${data?.admin?.email ? " flex " : " hidden "} w-6 h-6 bg-gray-200 rounded-full `} >
                                    {data?.admin?.profilePicture && (
                                        <img alt={data?.admin?.firstName} src={data?.admin?.profilePicture} className=" w-full h-full rounded-full " />
                                    )}
                                </div>
                                <div className={` ${data?.admin?.email ? " flex " : " hidden "} flex-col text-xs `} >
                                    <p>{data?.admin?.firstName + " " + data?.admin?.lastName}</p>
                                    <p>{data?.admin?.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col " >
                            <DropdownMenu>
                                <DropdownMenuTrigger className=" outline-none flex items-center gap-1 text-gray500 text-xs font-medium " >
                                    Priority
                                    <RiArrowDownSLine className=" mt-1 " />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className=" ml-10 mt-6 " >
                                    <DropdownMenuItem onClick={() => updateConstructionStatusMutate({ priority: "LOW" })} >
                                        <div className=" flex gap-2 items-center " >
                                            <RiFlag2Line color="#F79009" />
                                            <p className=" text-sm text-gray-700 font-medium" >Low</p>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => updateConstructionStatusMutate({ priority: "HIGH" })} >
                                        <div className=" flex gap-2 items-center " >
                                            <RiFlag2Line color="#F04438" />
                                            <p className=" text-sm text-gray-700 font-medium" >High</p>
                                        </div>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className=" flex items-center h-[36px] gap-1 text-xs text-gray700 font-medium justify-center " >
                                <RiFlag2Line />
                                {data?.priority}
                            </div>
                        </div>
                        <div className=" flex flex-col ml-auto gap-2  " >
                            {/* <div className=" flex items-center gap-4 " >
                                <div className=" flex " >
                                    <div className=" w-6 h-6 rounded-full border bg-green-400 " />
                                    <div className=" w-6 h-6 rounded-full border bg-red-400 -ml-2 " />
                                </div>
                                <p className=" text-xs font-medium text-gray700 " >Micheal Matt & Julius Smith</p>
                            </div>
                            <div className=" flex text-gray-400 justify-end items-center gap-2 " >
                                <p className=" text-gray500 text-sm " >Micheal Matt & Julius Smith</p>
                                <RiInformationLine size={"20px"} />
                            </div> */}
                        </div>
                    </div>
                </div> 
                <div className=" w-full border rounded-2xl " >
                    <div className=" w-full px-6 py-4 border-b flex items-center justify-between   " >
                        <p className=" font-medium text-gray700 " >Stages</p>
                    </div>
                    <div className=" w-full px-6 py-4 flex " >
                        <div className={` w-full relative flex z-30 justify-center h-[38px] rounded-l-full bg-success500 text-white items-center text-xs font-medium `} >
                            Proposal Received
                            <div className={`absolute inset-y-auto -right-4 transform rotate-45 w-[40px] h-[40px] bg-success500 border-r-[19.01px] border-t-[19.01px] border-white `} />
                        </div>
                        <div className={` w-full relative flex z-20 justify-center h-[38px] items-center ${data?.status === "COMPLETED" ? "bg-success500 text-white " : data?.status === "PAUSED" ? " bg-[#FEF0C7] text-[#DC6803] " : " bg-error600 text-white " } text-xs  font-medium `} >
                            Proposal In review 
                            <div className={`absolute inset-y-auto -right-4 transform rotate-45 ${data?.status === "COMPLETED" ? "bg-success500 " : data?.status === "PAUSED" ? " bg-[#FEF0C7] text-[#DC6803] " : " bg-error600 " } w-[40px] h-[40px] border-r-[19.01px] border-t-[19.01px] border-white `} />
                        </div>
                        <div className={` w-full relative flex z-10 justify-center h-[38px] items-center text-xs ${(data?.tasks && data?.status === "COMPLETED") ? "bg-success500 text-white" : " bg-gray100 text-gray800 "}  font-medium `} >
                            Project Started 
                            <div className={` absolute inset-y-auto -right-4 transform rotate-45 ${(data?.tasks && data?.status === "COMPLETED") ? "bg-success500 " : " bg-gray100 "} w-[40px] h-[40px] border-r-[19.01px] border-t-[19.01px] border-white `} />
                        </div>
                        <div className={` w-full relative flex justify-center h-[38px] rounded-r-full items-center text-xs bg-gray100 text-gray800 font-medium `} >
                            Project Completed
                        </div>
                    </div>
                </div>
                <Tabs defaultValue="documents" className="w-full flex flex-col gap-4 ">
                    <div className=" w-full flex justify-between items-center " >
                        <TabsList className="grid w-fit grid-cols-3 bg-white gap-4 h-fit ">
                            <TabsTrigger className=" h-[36px] rounded-full data-[state=active]:text-gray900 data-[state=active]:bg-gray200 flex gap-1 " value="documents">
                                <RiFolder2Line size={"15px"} />
                                Documents
                            </TabsTrigger>
                            <TabsTrigger className=" h-[36px] rounded-full data-[state=active]:text-gray900 data-[state=active]:bg-gray200 flex gap-1 " value="updates">
                                <RiRefreshLine size={"15px"} />
                                Updates
                            </TabsTrigger>
                            <TabsTrigger className=" h-[36px] rounded-full data-[state=active]:text-gray900 data-[state=active]:bg-gray200 flex gap-1 " value="track">
                                <RiTimerLine size={"15px"} />
                                Track Project
                            </TabsTrigger>
                        </TabsList>
                        <button onClick={() => navigate(`/dashboard/constructions/proposals/create?id=${data?.id}`)} className=" px-3 flex items-center gap-2 h-[36px] rounded-full text-white text-sm font-medium bg-primary500 " >
                            <RiEqualizer2Line size={"20px"} />
                            <p >Project Set up</p>
                        </button>
                    </div>
                    <TabsContent className=" w-full" value="track">
                        <ConstructionComment data={data as IConstruction} />
                    </TabsContent>
                    <TabsContent className=" w-full" value="documents">
                        <ConstructionDocument item={data as IConstruction} />
                    </TabsContent>
                    <TabsContent className=" w-full " value="updates">
                        <ConstructionUpdate />
                    </TabsContent>
                </Tabs>
            </div>
        </LoadingAnimation>
    )
}
