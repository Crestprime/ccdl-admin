import { LoadingAnimation } from "@/components/shared";
import { useFetchData } from "@/hooks/useFetchData";
import { dateFormat } from "@/utils/dateFormat";
// import { IUserInfo } from "@/models/user"; 
import { useSearchParams } from "react-router-dom";

interface IProps {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "workspaces": Array<string>,
    "position": string,
    "createdAt": string,
    "updatedAt": string,
    "profilePicture": string
}

export default function ClientDetails() {


    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");
    const { data, isLoading } = useFetchData<IProps>(`/admin/details/${id}`, ["admin", id]);

    console.log(data);


    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full flex h-auto gap-6 flex-col overflow-x-hidden " >
                <div className=" w-full p-6 gap-6 flex flex-col border border-gray-200 rounded-xl " >
                    <div className=" flex items-center gap-4 pb-6 border-b " >
                        <div className=" w-12 h-12 rounded-full bg-gray-300 " >
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <div className=" flex gap-2 items-center " >
                                <p className=" text-xl font-semibold " >{data?.firstName + " " + data?.lastName}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-3 " >
                        <p className=" text-sm text-gray-400 " >Personal Information</p>
                        <div className=" w-full flex " >
                            <div className=" w-full flex flex-col gap-1 " >
                                <div className="  w-full flex items-center" >
                                    <p className=" font-medium text-gray900 w-full max-w-[130px] " >Email:</p>
                                    <p className=" text-gray700 text-sm " >{data?.email}</p>
                                </div>
                                <div className="  w-full flex items-center" >
                                    <p className=" font-medium text-gray900 w-full max-w-[130px] " >Phone number:</p>
                                    <p className=" text-gray700 text-sm " >{"---"}</p>
                                </div>
                                <div className="  w-full flex items-center" >
                                    <p className=" font-medium text-gray900 w-full max-w-[130px] " >DOB:</p>
                                    <p className=" text-gray700 text-sm " >{"---"}</p>
                                </div>
                            </div>
                            <div className="  w-full flex items-center" >
                                <p className=" font-medium text-gray900 w-full max-w-[130px] " >Address:</p>
                                <p className=" text-gray700 text-sm " >{"---"}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-3 " >
                        <p className=" text-sm text-gray-400 " >Work Information</p>
                        <div className=" w-full grid grid-cols-2 gap-2 " >
                            <div className="  w-full flex items-center" >
                                <p className=" font-medium text-gray900 w-full max-w-[130px] " >Date Joined:</p>
                                <p className=" text-gray700 text-sm " >{dateFormat(data?.createdAt)}</p>
                            </div>
                            <div className="  w-full flex items-center" >
                                <p className=" font-medium text-gray900 w-full max-w-[130px] " >Active Projects</p>
                                <p className=" text-gray700 text-sm " >{"---"}</p>
                            </div>
                            <div className="  w-full flex items-center" >
                                <p className=" font-medium text-gray900 w-full max-w-[130px] " >Status:</p>
                                <p className=" text-gray700 text-sm " >{"---"}</p>
                            </div>
                            <div className="  w-full flex items-center" >
                                <p className=" font-medium text-gray900 w-full max-w-[130px] " >Last Activity:</p>
                                <p className=" text-gray700 text-sm " >{dateFormat(data?.updatedAt)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingAnimation>
    )
}
