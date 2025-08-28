import { LoadingAnimation } from "@/components/shared"; 
import { useFetchData } from "@/hooks/useFetchData";
// import { IUserInfo } from "@/models/user"; 
import { useSearchParams } from "react-router-dom";


export default function ClientDetails() {


    const [searchParams] = useSearchParams(); 
    const id: any = searchParams.get("id");
    const { data, isLoading } = useFetchData<any>(`/admin/details/${id}`, ["admin", id]); 

    console.log(data);
    

    return (
        <LoadingAnimation loading={isLoading} >
            <>
            </>
            {/* <div className=" w-full flex h-auto gap-6 flex-col overflow-x-hidden " > 
                <div className=" w-full p-6 gap-6 flex flex-col border border-gray-200 rounded-xl " >
                    <div className=" flex items-center gap-4 pb-6 border-b " >
                        <div className=" w-12 h-12 rounded-full bg-gray-300 " > 
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <div className=" flex gap-2 items-center " >
                                <p className=" text-xl font-semibold " >{data?.user?.firstName+" "+data?.user?.lastName}</p> 
                            </div> 
                        </div>
                    </div>
                    <div className=" w-full grid grid-cols-2 " >
                        <div className=" w-[70%] grid grid-cols-2 gap-2  " >
                            <p className=" font-medium text-gray900 " >Email:</p>
                            <p className=" text-gray700 " >{data?.user?.email}</p>
                            <p className=" font-medium text-gray900 " >Phone number:</p>
                            <p className=" text-gray700 " >{data?.user?.phone ?? "none"}</p>
                            <p className=" font-medium text-gray900 " >DOB:</p>
                            <p className=" text-gray700 " >{"---"}</p> 
                        </div>
                        <div className=" w-[70%] grid grid-cols-2 gap-2  " >
                            <p className=" font-medium text-gray900 " >Date Joined:</p>
                            <p className=" text-gray700 " >{dateFormat(data?.user?.createdAt)}</p>
                            <p className=" font-medium text-gray900 " >Transaction PIN Status:</p>
                            <p className=" text-gray700 " >N/A</p>
                            <p className=" font-medium text-gray900 " >Address:</p>
                            <p className=" text-gray700 " >{"none"}</p>
                            <p className=" font-medium text-gray900 " >Identification Details:</p>
                            <p className=" text-gray700 " >--</p>
                        </div>
                    </div>
                    <div className=" w-full grid grid-cols-4 gap-4 " >
                        <div className=" w-full rounded-xl border p-4 " >
                            <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                                <RiWalletFill size={"24px"} />
                            </div>
                            <p className=" text-gray500 text-sm mt-6 " >Wallet Balance</p>
                            <p className=" text-[30px] font-medium text-gray900 " >{numberFormatNaire(data?.wallet?.balance)}</p>
                        </div>
                        <div className=" w-full rounded-xl border p-4 " >
                            <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                                <RiCoinsFill size={"24px"} />
                            </div>
                            <p className=" text-gray500 text-sm mt-6 " >Active Investments</p>
                            <p className=" text-[30px] font-medium text-gray900 " >{numberFormatNaire(data?.investments?.total)}</p>
                        </div>
                        <div className=" w-full rounded-xl border p-4 " >
                            <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                                <RiMoneyDollarCircleFill size={"24px"} />
                            </div>
                            <p className=" text-gray500 text-sm mt-6 " >Pending Payments</p>
                            <p className=" text-[30px] font-medium text-gray900 " >{numberFormatNaire(data?.pendingPayments?.total)}</p>
                        </div>
                        <div className=" w-full rounded-xl border p-4 " >
                            <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                                <RiBuilding2Fill size={"24px"} />
                            </div>
                            <p className=" text-gray500 text-sm mt-6 " >Properties Owned</p>
                            <p className=" text-[30px] font-medium text-gray900 " >{data?.reservations?.count}</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </LoadingAnimation>
    )
}
