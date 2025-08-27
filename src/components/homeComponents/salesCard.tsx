import { RiMoneyDollarCircleLine, RiSafe2Fill } from "@remixicon/react";
import { Button } from "../ui/button"; 
import { IHome } from "@/models/analytics";
import { formatNumberWithK } from "@/utils/formatNumberWithK";
import { useFetchData } from "@/hooks/useFetchData";
import { ITransaction } from "@/models/transaction";
import { dateFormatDay, dateFormatMonth } from "@/utils/dateFormat";


export default function SalesCard(
    {
        data
    }: {
        data: IHome
    }
) {



    const { data: tnx } = useFetchData<Array<ITransaction>>(`/admin/transactions`, ["transactions"]);

    return (
        <div className=' w-full h-fit flex gap-4 ' >
            <div className=" w-full p-4 h-[374px] rounded-2xl flex flex-col border " >
                <p className=" text-bodyTextColor text-sm leading-5 " >Cashflow</p>
                <p className=" text-[30px] font-medium leading-9 " >{formatNumberWithK(data?.outflow, true)}</p>
                <Button variant={"outline"} className=" h-[40px] text-sm font-medium mt-auto w-fit rounded-full " >
                    See all
                </Button>
            </div>
            {/* <div className=" w-full p-4 h-[374px] rounded-2xl flex flex-col border " >
                <div className=" flex gap-2 items-center " >
                    <RiFireLine />
                    <p className=" font-medium " >Top selling</p>
                </div>
                <div className=" w-full mt-auto flex justify-between "  >
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label >Airplane Mode</Label>
                    </div>
                    <Button variant={"outline"} className=" h-[40px] text-sm font-medium mt-auto w-fit rounded-full " >
                        View more
                    </Button>
                </div>
            </div> */}
            <div className=" w-full p-4 h-[374px] rounded-2xl flex flex-col border  " >
                <div className=" flex gap-2 mb-5 items-center " >
                    <RiMoneyDollarCircleLine />
                    <p className=" font-medium " >Recent Transactions</p>
                </div> 
                <div className=" flex w-full max-h-fit overflow-y-auto flex-col gap-3 " >
                    {tnx?.map((item, index) => {
                        return (
                            <div key={index} className=" flex items-center justify-between w-full gap-2 " >
                                <div className=" flex items-center gap-1 " >
                                    <div className=" w-fit " >
                                        <div className=" w-10 h-10 flex justify-center items-center bg-[#ABEFC6] rounded-full " >
                                            <RiSafe2Fill />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-sm " >{item?.type}</p>
                                        <p className=" text-xs text-bodyTextColor " >Deposit from {item?.user[0].firstName}</p>
                                    </div>
                                </div>
                                <div className=" flex items-center gap-1 " >
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-sm " >{formatNumberWithK(item?.amount, true)}</p>
                                        <p className=" text-xs text-bodyTextColor text-right ">{dateFormatDay(item?.createdAt)}{" "}{dateFormatMonth(item?.createdAt)}</p>
                                    </div>
                                    {/* <RiArrowRightSLine /> */}
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className=" flex items-center justify-between w-full gap-2 " >
                        <div className=" w-fit " >
                            <div className=" w-10 h-10 flex justify-center items-center bg-[#ABEFC6] rounded-full " >
                                <RiSafe2Fill />
                            </div>
                        </div>
                        <div className=" flex flex-col " >
                            <p className=" font-medium text-sm " >Land Banking Investment</p>
                            <p className=" text-xs text-bodyTextColor " >Deposit from Mr. John Doe</p>
                        </div>
                        <div className=" flex items-center gap-1 " >
                            <div className=" flex flex-col " >
                                <p className=" font-medium text-sm " >₦3,500.00</p>
                                <p className=" text-xs text-bodyTextColor text-right ">Sep 18</p>
                            </div> 
                        </div>
                    </div>
                    <div className=" flex items-center justify-between w-full gap-2 " >
                        <div className=" w-fit " >
                            <div className=" w-10 h-10 flex justify-center items-center bg-[#ABEFC6] rounded-full " >
                                <RiBuildingFill />
                            </div>
                        </div>
                        <div className=" flex flex-col " >
                            <p className=" font-medium text-sm " >Land Banking Investment</p>
                            <p className=" text-xs text-bodyTextColor " >Deposit from Mr. John Doe</p>
                        </div>
                        <div className=" flex items-center gap-1 " >
                            <div className=" flex flex-col " >
                                <p className=" font-medium text-sm " >₦3,500.00</p>
                                <p className=" text-xs text-bodyTextColor text-right ">Sep 18</p>
                            </div> 
                        </div>
                    </div> */}
                </div>
                {/* </TabsContent>
                </Tabs> */}
            </div>
        </div>
    )
}
