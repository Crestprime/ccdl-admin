import { useFetchData } from "@/hooks/useFetchData";
import { RiArrowRightSFill, RiAttachmentLine } from "@remixicon/react";
import { LoadingAnimation } from "../shared";
import { useNavigate } from "react-router-dom";
import { IConstruction } from "@/models/construction";
import { timeAgo } from "@/utils/dateFormat";
import { getOverallCompletion } from "@/utils/getPercentage";


export default function ProjectTable() {

    const { data, isLoading } = useFetchData<Array<IConstruction>>(`/admin-construction/projects`, ["projects"]);

    const navigate = useNavigate()

    function getTotalAttachments(project: any): any {
        let total = 0;
      
        if (!project?.tasks) return total;
      
        for (const task of project.tasks) {
          if (!task?.SubTasks) continue;
      
          for (const subTask of task.SubTasks) {
            total += subTask?.attachments?.length || 0;
          }
        }
      
        return total;
      }

    return (
        <LoadingAnimation loading={isLoading} length={data?.length} >
            <div className=" w-full overflow-x-auto flex " >
                <div className=" w-fit flex gap-4 " >
                    {data?.map((item, index) => {
                        return (
                            <div role="button" onClick={() => navigate(
                                `/dashboard/constructions/proposals/details?id=${item?.id}`
                            )} key={index} className=" w-[340px] border rounded-2xl flex flex-col gap-6 p-6 " >
                                <div className=" w-full pb-6 border-b flex justify-between items-center " >
                                    <div className=" flex gap-2 items-center " >
                                        <RiArrowRightSFill size={"24px"} />
                                        <p className=" font-semibold " >{item?.projectType}</p>
                                        <div className=" w-4 h-4 rounded-full flex justify-center items-center " >
                                            <p className=" font-medium text-xs " >5</p>
                                        </div>
                                    </div>
                                    {/* <RiMore2Fill className=" text-gray800 " /> */}
                                </div>
                                <div style={{ boxShadow: "0px 1px 2px 0px #1018280F" }} className={` ${item?.status === "PAUSED" ? " bg-yellow25 " : item?.status === "COMPLETED" ? " bg-teal25 " : item?.status === "CANCELLED" ? " bg-pink25 " : " "} w-full h-[300px] rounded-2xl p-3 flex flex-col gap-5 `} >
                                    <div className=" w-full flex justify-between items-center " >
                                        <div className=" px-2 py-[2px] bg-gray-100 rounded-2xl text-xs font-medium text-gray800 " >
                                            {timeAgo(item?.createdAt)}
                                        </div>
                                        {/* <RiMore2Fill /> */}
                                    </div>
                                    <p className=" text-gray800 text-sm my-auto font-semibold " >{item?.projectDescription}</p>
                                    <div className=" mt-auto w-full justify-between flex items-center " >
                                        <div className=" w-full flex flex-col gap-1 " >
                                            <p className=" font-medium text-xs " >Progress</p>
                                            <div className=" w-[80%] bg-gray100 h-2 rounded " >
                                                <div style={{ width: getOverallCompletion(item?.tasks) + "%" }} className={`  bg-primary600 h-2 rounded `} />
                                            </div>
                                        </div>
                                        <p className=" text-xs font-semibold text-primary500 " >{getOverallCompletion(item?.tasks)}%</p>
                                    </div>
                                    <div className=" w-full flex justify-between items-center " >
                                        <div className=" flex " >
                                            <div className=" w-6 h-6 bg-red-500 rounded-full " />
                                            <div className=" w-6 h-6 -ml-[6px] rounded-full border bg-blue-500 " />
                                            <div className=" w-6 h-6 -ml-[6px] rounded-full border bg-green-500 " />
                                            <div className=" w-6 h-6 -ml-[6px] rounded-full border bg-yellow-500 " />
                                        </div>
                                        <div className=" flex gap-4 " >
                                            {/* <div className=" flex gap-1 items-center " >
                                                <RiMailLine size={"14px"} />
                                                <p className=" text-sm text-gray800 font-medium " >12</p>
                                            </div> */}
                                            <div className=" flex gap-1 items-center " >
                                                <RiAttachmentLine size={"14px"} />
                                                <p className=" text-sm text-gray800 font-medium " >{getTotalAttachments(item)}</p>
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