import { useFetchData } from "@/hooks/useFetchData";
import { IAInvestment } from "@/models/analytics";
import { formatNumberWithK } from "@/utils/formatNumberWithK"; 


export default function InvestmentInfo() {


    const { data: analytics, isLoading: loading } = useFetchData<IAInvestment>(`/admin/investments/analytics`, ["analytics"], {}, true);

    return (
        <>
            {!loading && ( 
                <div className=" w-full grid grid-cols-4 gap-4 " >
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Total Investment</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalInvestmentsAmount, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Total Profit Paid Out</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalMaturedAmount, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Total Investors</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.uniqueInvestorsCount)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Pending Payout</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.pendingPayoutsCount, true)}</p>
                    </div>
                </div>
            )}
        </>
    )
}