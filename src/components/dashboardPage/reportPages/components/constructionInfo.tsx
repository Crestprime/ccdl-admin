

export default function ConstructionInfo() {
    return ( 
        <div className=" w-full flex gap-4 " >
            <div className=" w-full rounded-xl border p-4 flex flex-col " > 
                <p className=" text-gray500 text-sm  " >Proposals Received</p>
                <p className=" text-[30px] font-semibold text-gray900 " >21</p>
            </div>
            <div className=" w-full " >
                <div className=" w-full rounded-xl border p-4 flex flex-col " > 
                    <p className=" text-gray500 text-sm  " >Proposals Awaiting</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >10</p>
                </div>
            </div>
            <div className=" w-full rounded-xl border p-4 flex flex-col " > 
                <div className=" w-full  flex gap-4 flex-col  " >
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
    )
}