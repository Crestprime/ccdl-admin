import { LoadingAnimation } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientConstruction, ClientSaleTable, ClientWalletTable, ClientInvestmentTable } from "@/components/userComponents"; 
import { useFetchData } from "@/hooks/useFetchData";
import { IUserInfo } from "@/models/user";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormatNaire } from "@/utils/formatNumberWithK";
import { RiBuilding2Fill, RiCoinsFill, RiMoneyDollarCircleFill, RiMore2Fill, RiWalletFill } from "@remixicon/react";
import { useSearchParams } from "react-router-dom";


export default function ClientDetails() {


    const [searchParams] = useSearchParams(); 
    const id: any = searchParams.get("id");
    const { data, isLoading } = useFetchData<IUserInfo>(`/admin/users/${id}`, ["user"]); 

    return (
        <LoadingAnimation loading={isLoading} >

            <div className=" w-full flex h-auto gap-6 flex-col overflow-x-hidden " >
                <div className=" w-full flex justify-end pb-4 border-b items-center " >
                    <div className=" flex gap-4  " >
                        <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                            Edit
                        </Button>
                        <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                            <RiMore2Fill size={"25px"} />
                        </Button>
                    </div>
                </div>
                <div className=" w-full p-6 gap-6 flex flex-col border border-gray-200 rounded-xl " >
                    <div className=" flex items-center gap-4 pb-6 border-b " >
                        <div className=" w-12 h-12 rounded-full bg-yellow-300 " >

                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <div className=" flex gap-2 items-center " >
                                <p className=" text-xl font-semibold " >{data?.user?.firstName+" "+data?.user?.lastName}</p>
                                <div className=" px-2 py-[2px] rounded-2xl bg-warning100 text-warning800 ">
                                    <p className=" text-xs font-medium " >Pending</p>
                                </div>
                            </div>
                            <p className=" text-sm " >Online</p>
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
                            {/* <p className=" font-medium text-gray900 " >Status:</p>
                            <div className=" px-2 w-fit bg-success100 text-success800 py-[2px] " >
                                <p className=" text-xs font-medium " >Active</p>
                            </div> */}
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

                    <Tabs defaultValue="investments" className="w-full ">
                        <TabsList className="grid w-fit grid-cols-5 gap-4 h-fit ">
                            <TabsTrigger className=" h-[36px] " value="investments">Investments</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="sales">Sales & Reservations</TabsTrigger> 
                            <TabsTrigger className=" h-[36px] " value="wallet">Wallet</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="construction">Construction</TabsTrigger>
                        </TabsList>
                        <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="investments">
                            <ClientInvestmentTable id={data?.user?.id+""} />
                        </TabsContent>
                        <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="sales">
                            <ClientSaleTable id={data?.user?.id+""} />
                        </TabsContent>
                        <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="wallet">
                            <ClientWalletTable id={data?.user?.id+""} />
                        </TabsContent> 
                        <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="construction">
                            <ClientConstruction id={data?.user?.id+""} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </LoadingAnimation>
    )
}
