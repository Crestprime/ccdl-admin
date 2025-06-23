import { useFetchData } from "@/hooks/useFetchData";
import { RiArrowRightSFill, RiAttachmentLine, RiMailLine, RiMore2Fill } from "@remixicon/react"
import { useNavigate } from "@tanstack/react-router"
import { LoadingAnimation } from "../shared";


export default function ClientConstruction({ id }: { id: string }) {

    const datainfo = [
        "Received",
        "In review",
        "Accepted",
        "Rejected"
    ]

    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<Array<any>>(`/admin/users/${id}/proposals`, "proposals"); 

    return (
        <LoadingAnimation loading={isLoading} length={data?.length} >
            <div className=" w-full overflow-x-auto flex " >
                <div className=" w-fit flex gap-4 " >
                    {datainfo?.map((item, index) => {
                        return (
                            <div role="button" onClick={() => navigate({
                                to: "/dashboard/constructions/proposals/details"
                            })} key={index} className=" w-[340px] border rounded-2xl flex flex-col gap-6 p-6 " >
                                <div className=" w-full pb-6 border-b flex justify-between items-center " >
                                    <div className=" flex gap-2 items-center " >
                                        <RiArrowRightSFill size={"24px"} />
                                        <p className=" font-semibold " >{item}</p>
                                        <div className=" w-4 h-4 rounded-full flex justify-center items-center " >
                                            <p className=" font-medium text-xs " >5</p>
                                        </div>
                                    </div>
                                    <RiMore2Fill className=" text-gray800 " />
                                </div>
                                <div style={{ boxShadow: "0px 1px 2px 0px #1018280F" }} className={` ${item === "In review" ? " bg-yellow25 " : item === "Accepted" ? " bg-teal25 " : item === "Rejected" ? " bg-pink25 " : ""} w-full h-[300px] rounded-2xl p-3 flex flex-col gap-5 `} >
                                    <div className=" w-full flex justify-between items-center " >
                                        <div className=" px-2 py-[2px] bg-gray-100 rounded-2xl text-xs font-medium text-gray800 " >
                                            2h
                                        </div>
                                        <RiMore2Fill />
                                    </div>
                                    <p className=" text-gray800 text-sm my-auto font-semibold " >Proposal for the upcoming Port Harcourt Building Project</p>
                                    <div className=" mt-auto w-full justify-between flex items-center " >
                                        <div className=" w-full flex flex-col gap-1 " >
                                            <p className=" font-medium text-xs " >Progress</p>
                                            <div className=" w-[80%] bg-gray100 h-2 rounded " >
                                                <div className=" w-[40%] bg-primary600 h-2 rounded " />
                                            </div>
                                        </div>
                                        <p className=" text-xs font-semibold text-primary500 " >40%</p>
                                    </div>
                                    <div className=" w-full flex justify-between items-center " >
                                        <div className=" flex " >
                                            <div className=" w-6 h-6 bg-red-500 rounded-full " />
                                            <div className=" w-6 h-6 -ml-[6px] rounded-full border bg-blue-500 " />
                                            <div className=" w-6 h-6 -ml-[6px] rounded-full border bg-green-500 " />
                                            <div className=" w-6 h-6 -ml-[6px] rounded-full border bg-yellow-500 " />
                                        </div>
                                        <div className=" flex gap-4 " >
                                            <div className=" flex gap-1 items-center " >
                                                <RiMailLine size={"14px"} />
                                                <p className=" text-sm text-gray800 font-medium " >12</p>
                                            </div>
                                            <div className=" flex gap-1 items-center " >
                                                <RiAttachmentLine size={"14px"} />
                                                <p className=" text-sm text-gray800 font-medium " >12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </LoadingAnimation>
    )
}
