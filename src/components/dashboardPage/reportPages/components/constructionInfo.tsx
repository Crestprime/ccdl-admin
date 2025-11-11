import { IReport } from "@/models/analytics";


export default function ConstructionInfo({ analytics }: { analytics: IReport }) {

    let percAcc = (analytics.totalAcceptedProposals / analytics.totalRejectedProposals) * 100
    let percRej = (analytics.totalRejectedProposals / analytics.totalAcceptedProposals) * 100 

    return (
        <div className=" w-full flex gap-4 " >
            <div className=" w-full rounded-xl border p-4 flex flex-col " >
                <p className=" text-gray500 text-sm  " >Proposals Received</p>
                <p className=" text-[30px] font-semibold text-gray900 " >{analytics?.totqlProposals}</p>
            </div>
            <div className=" w-full " >
                <div className=" w-full rounded-xl border p-4 flex flex-col " >
                    <p className=" text-gray500 text-sm  " >Proposals Awaiting</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >{analytics?.totqlProposals - (analytics?.totalAcceptedProposals + analytics?.totalRejectedProposals)}</p>
                </div>
            </div>
            <div className=" w-full rounded-xl border p-4 flex flex-col " >
                <div className=" w-full  flex gap-4 flex-col  " >
                    <div className=" flex items-center gap-4  " >
                        <p className=" w-14 text-xs text-bodyTextColor " >Accepted</p>
                        <div style={percAcc >= 100 ? { width: "100%" } : { width: percAcc.toFixed(0).toString()+"%" }} className={` h-4 bg-purple-600 `} />
                        <p className=" text-xs font-semibold " >{analytics?.totalAcceptedProposals}</p>
                    </div>
                    <div className=" flex items-center gap-4  " >
                        <p className=" w-14 text-xs text-bodyTextColor " >Rejected</p>
                        <div style={percRej >= 100 ? { width: "100%" } : { width: percRej.toFixed(0).toString()+"%" }} className=" h-4 bg-fushsia600 " />
                        <p className=" text-xs font-semibold " >{analytics?.totalRejectedProposals}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}