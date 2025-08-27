import { IUpdate } from "@/models/construction";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useSearchParams } from "react-router-dom";
import { useFetchData } from "@/hooks/useFetchData";
import { LoadingAnimation } from "../shared";
import { timeAgo } from "@/utils/dateFormat";


export default function constructionUpdates() {


    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");

    const { data, isLoading } = useFetchData<Array<IUpdate>>(`/admin-construction/updates/${id}`, [`admin-construction`, id]);
 

    return (
        <LoadingAnimation loading={isLoading} length={data?.length} >
            <div className=" w-full flex flex-col gap-5 border rounded-2xl " >
                <div className=" w-full flex items-center border-b justify-between py-4 px-6 " >
                    <p className=" font-semibold text-gray700 " >Updates</p>
                    {/* <Select>
                        <SelectTrigger className="w-fit h-[28px] text-sm gap-2 rounded-[6px] text-gray700 font-medium ">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select> */}
                </div>
                <div className=" w-full p-6 maxh-h-[700px] overflow-y-auto flex gap-6 flex-col " >
                    {data?.map((item, index) => {
                        return (
                            <div key={index} className=" w-full flex flex-col gap-4 " >
                                <div className=" w-full flex items-center gap-2 " >
                                    <div className=" w-6 h-6 rounded-full bg-red-400 " />
                                    <div className=" flex gap-1 " >
                                        <p className=" font-medium text-gray700 " >{item?.user?.firstName+" "+item?.user?.lastName}</p>
                                        {/* <p className=" text-sm text-gray500 " >Mentioned you in the comments</p> */}
                                    </div>
                                </div>
                                <div className=" pb-4 ml-3 mt-[2px] border-l pl-6 flex flex-col gap-4 " >
                                    <p className=" font-medium text-gray500 text-sm -mt-4 " >{timeAgo(item?.updatedAt)}</p>
                                    <div className=" w-full flex p-6 bg-gray100 rounded-2xl text-gray700 " >
                                        <p>
                                           {item?.description}
                                        </p>
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
