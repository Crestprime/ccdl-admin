import { LoadingAnimation } from "@/components/shared";
import { useFetchData } from "@/hooks/useFetchData";
import { IConstruction } from "@/models/construction";
import { dateFormat } from "@/utils/dateFormat";
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CreateTaskBtn from "./components/createTaskBtn";
import { capitalizeFLetter } from "@/utils/capitalLetter";
import DeleteTaskBtn from "./components/deleteTaskBtn";

export default function CreateTask() {

    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");

    const [tab, setTab] = useState(-1)

    const { data, isLoading } = useFetchData<IConstruction>(`/admin-construction/projects/${id}`, ["projects"]);

    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full " >
                <div className=" w-full border rounded-2xl " >
                    <div className=" w-full px-6 py-4 border-b flex items-center justify-between   " >
                        <div className=" flex flex-col gap-2 " >
                            <div className=" flex gap-1 items-center " >
                                <p className=" font-semibold text-gray700 " >Project Set up</p>
                                <p className=" text-xs font-medium text-gray500 " >・{dateFormat(data?.createdAt)}</p>
                            </div>
                            <p className=" text-xs text-gray500 " >{data?.projectAddress}</p>
                        </div> 
                    </div>

                    <div className=" w-full flex flex-col p-4 gap-4 " >
                        {data?.tasks?.map((item, index) => {
                            return (
                                <div key={index} className=" w-full flex flex-col gap-4 bg-gray-100 rounded-2xl p-2 " >
                                    <div className=" w-full h-[58px] rounded-2xl  flex gap-3 items-center justify-between px-3 " >
                                        <div role="button" onClick={() => setTab((prev) => item?.SubTasks?.length > 0 ? prev === index ? -1 : index : -1)} className=" gap-3 flex items-center " >
                                            {tab === index ? (
                                                <RiArrowDownSLine />
                                            ) : (
                                                <RiArrowRightSLine />
                                            )}
                                            <p className=" font-semibold text-gray-700 w-[400px] " >{capitalizeFLetter(item?.name)}</p>
                                        </div>
                                        <div className=" gap-3 items-center flex justify-center " >
                                            {/* <RiAddLine size={"20px"} /> */}
                                            <CreateTaskBtn id={item?.id} type="subtask" />
                                            <DeleteTaskBtn type="task" id={item?.id} name={item?.name} />
                                        </div>
                                    </div>
                                    {(tab === index && item?.SubTasks?.length > 0) && (
                                        <div className=" flex flex-col w-full gap-4 " >
                                            {item?.SubTasks?.map((subitem, subindex) => {
                                                return (
                                                    <div key={subindex} className=" w-full h-[48px] rounded-[12px] bg-white shadow-sm flex gap-3 items-center justify-between px-3 " >
                                                        <div className=" flex gap-4 items-center " >
                                                            <DeleteTaskBtn type="subtask" id={subitem?.id} name={item?.name} />
                                                            <p className=" text-sm " >{capitalizeFLetter(subitem?.name)}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                        <CreateTaskBtn id={data?.id} type="task" />
                    </div>
                </div>
            </div>
        </LoadingAnimation>
    )
}