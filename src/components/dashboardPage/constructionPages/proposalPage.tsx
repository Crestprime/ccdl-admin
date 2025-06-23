import { ClientConstruction } from "@/components/userComponents";
import { useFetchData } from "@/hooks/useFetchData";
import { RiBuilding2Fill, RiCoinsFill } from "@remixicon/react";


export default function ConstructionPage() {


    const { data, isLoading } = useFetchData<Array<any>>(`/admin-construction/proposals`, "proposals");
    
    console.log(data);
    

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-between pb-4 border-b items-center " >
                <div className=" flex flex-col  " >
                    <h3 className=" font-semibold text-lg " >Proposals</h3>
                    <p className=" text-sm  text-bodyTextColor " >Manage and track all proposals</p>
                </div>
            </div>
            <div className=" w-full flex gap-4 " >
                <div className=" w-full rounded-xl border p-4 flex flex-col h-[180px] " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiBuilding2Fill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-auto " >Proposals Received</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >21</p>
                </div>
                <div className=" w-fit " >
                    <div className=" w-[202px] rounded-xl border p-4 flex flex-col h-[180px] " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-auto " >Proposals Awaiting</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >10</p>
                    </div>
                </div>
                <div className=" w-full rounded-xl border p-4 flex flex-col h-[180px] " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCoinsFill size={"24px"} />
                    </div>
                    <div className=" w-full mt-auto flex gap-4 flex-col  " >
                        <div className=" flex items-center gap-4  " >
                            <p className=" w-14 text-xs text-bodyTextColor " >Accepted</p>
                            <div className=" w-[239px] h-4 bg-purple-600 " />
                            <p className=" text-xs font-semibold " >9</p>
                        </div>
                        <div className=" flex items-center gap-4  " >
                            <p className=" w-14 text-xs text-bodyTextColor " >Rejected</p>
                            <div className=" w-[139px] h-4 bg-fushsia600 " />
                            <p className=" text-xs font-semibold " >7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full " >
                <ClientConstruction id={""} />
            </div>
        </div>
    )
}
