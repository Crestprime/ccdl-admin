import { IHome } from "@/models/analytics";
import { formatNumberWithK } from "@/utils/formatNumberWithK"; 
import { RiSafe2Fill, RiBuilding2Fill, RiCoinFill } from "@remixicon/react";


export default function HeaderCards(
    {
        data
    } : {
        data: IHome
    }
) {
    return ( 
        <div className=" w-full h-fit flex flex-col " >
            <div className=" w-full flex gap-4 " >
                <div className=" w-full h-[178px] flex flex-col p-4 border rounded-2xl " >
                    <p className=" text-bodyTextColor text-sm leading-5 " >Available Balance</p>
                    <p className=" text-[30px] font-medium leading-9 " >{formatNumberWithK(data?.balance, true)}</p>
                </div>
                <div className=" w-full h-[178px] flex flex-col p-4 border rounded-2xl " >
                    <div className=" w-10 h-10 rounded-full border flex justify-center items-center " >
                        <RiSafe2Fill color="#667085" />
                    </div>
                    <div className=" mt-auto  " >
                        <p className=" text-bodyTextColor text-sm leading-5 " >Total Investments</p>
                        <p className=" text-[30px] font-medium leading-9 " >{formatNumberWithK(data?.investments, true)}</p>
                    </div>
                </div>
                <div className=" w-fit flex gap-4 " >
                    <div className=" border flex flex-col rounded-2xl w-[202px] h-[178px] p-4 " >
                        <div className=" w-10 h-10 rounded-full border flex justify-center items-center " >
                            <RiBuilding2Fill color="#667085" />
                        </div>
                        <div className=" mt-auto  " >
                            <p className=" text-bodyTextColor text-sm leading-5 " >Ongoing Projects</p>
                            <p className=" text-[30px] font-medium leading-9 " >{formatNumberWithK(data?.ongoingProjects)}</p>
                        </div>
                    </div>
                    <div className=" border flex flex-col rounded-2xl w-[202px] h-[178px] p-4 " >
                        <div className=" w-10 h-10 rounded-full border flex justify-center items-center " >
                            <RiCoinFill color="#667085" />
                        </div>
                        <div className=" mt-auto  " >
                            <p className=" text-bodyTextColor text-sm leading-5 " >Reservations & Sales</p>
                            <p className=" text-[30px] font-medium leading-9 " >{formatNumberWithK(data?.reservations)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
