import { LoadingAnimation } from "@/components/shared";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientConstruction, ClientSaleTable, ClientInvestmentTable, ClientWalletTable, ClientRefferalTable } from "@/components/userComponents";
import { useFetchData } from "@/hooks/useFetchData";
import { IUserInfo } from "@/models/user";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormatNaire } from "@/utils/formatNumberWithK";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiArrowLeftLine, RiBuilding2Fill, RiCoinsFill, RiMoneyDollarCircleFill, RiWalletFill } from "@remixicon/react";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function RealtorDetails() {


    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");
    const { data, isLoading } = useFetchData<IUserInfo | any>(`/admin/users/${id}`, ["user", id]);
    const navigate = useNavigate()

    return (
        <LoadingAnimation loading={isLoading} >

            <div className=" w-full flex h-auto gap-6 flex-col overflow-x-hidden " >
                <div className=" w-full flex justify-end pb-4 border-b items-center " >
                </div>
                <div className=" w-full p-6 gap-6 flex flex-col border border-gray-200 rounded-xl " >
                    <div className=" flex items-center gap-4 pb-6 border-b " >
                        <button onClick={() => navigate(-1)} >
                            <RiArrowLeftLine size={"20px"} />
                        </button>
                        <Avatar className=" w-10 " >
                            <AvatarImage src={data?.user?.profilePicture} alt="@shadcn" />
                            <AvatarFallback>{data?.user?.firstName?.slice(0, 1) + data?.user?.lastName?.slice(0, 1)}</AvatarFallback>
                        </Avatar>
                        <div className=" flex flex-col gap-1 " >
                            <div className=" flex gap-2 items-center " >
                                <p className=" text-xl font-semibold " >{data?.user?.firstName + " " + data?.user?.lastName}</p>
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

                    <Tabs defaultValue="investments" className="w-full ">
                        <TabsList className="grid w-fit grid-cols-5 gap-4 h-fit ">
                            <TabsTrigger className=" h-[36px] " value="investments">Investments</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="refferal">Refferal</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="sales">Sales & Reservations</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="wallet">Wallet</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="construction">Construction</TabsTrigger>
                        </TabsList>
                        <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="investments">
                            <ClientInvestmentTable id={data?.user?.id + ""} />
                        </TabsContent>
                        <TabsContent value="sales">
                            <ClientSaleTable id={data?.user?.id + ""} />
                        </TabsContent>
                        <TabsContent value="wallet">
                            <ClientWalletTable id={data?.user?.id + ""} />
                        </TabsContent>
                        <TabsContent value="refferal">
                            <ClientRefferalTable id={data?.user?.id + ""} />
                        </TabsContent>
                        <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="construction">
                            <ClientConstruction id={data?.user?.id + ""} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </LoadingAnimation>
    )
}
