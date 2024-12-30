import { TansactionTab } from "@/components/walletComponents";
import { RiSettings4Line } from "@remixicon/react";


export default function Alltransaction() { 

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex items-center border-b pb-6 justify-between " >
                <div className=" flex flex-col " >
                    <h3 className=" font-semibold text-lg " >Wallets</h3>
                    <p className=" text-gray500 text-sm " >Manage and track all transactions</p>
                </div>
                <div className=" w-9 h-9 rounded-full text-gray25 bg-primary500 flex justify-center items-center " >
                    <RiSettings4Line size={"16px"} />
                </div>
            </div>
            <TansactionTab />
        </div>
    )
}
