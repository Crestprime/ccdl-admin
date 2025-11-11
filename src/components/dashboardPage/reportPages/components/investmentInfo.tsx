import { IReport } from "@/models/analytics";
import { formatNumberWithK } from "@/utils/formatNumberWithK";


export default function InvestmentInfo({ analytics }: { analytics: IReport }) {


    // const { data: analytics, isLoading: loading } = useFetchData<IAInvestment>(`/admin/investments/analytics`, ["analytics"], {}, true);

    return (
        <div className=" w-full grid grid-cols-4 gap-4 " >
            <div className=" w-full rounded-xl border p-4 " >
                <p className=" text-gray500 text-sm " >Total Investment</p>
                <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalInvestmentAmount, true)}</p>
            </div>
            <div className=" w-full rounded-xl border p-4 " >
                <p className=" text-gray500 text-sm " >Total Profit Paid Out</p>
                <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalInvestmentProfitPaid, true)}</p>
            </div>
            <div className=" w-full rounded-xl border p-4 " >
                <p className=" text-gray500 text-sm " >Total Investors</p>
                <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalInvestors)}</p>
            </div>
            <div className=" w-full rounded-xl border p-4 " >
                <p className=" text-gray500 text-sm " >Pending Payout</p>
                <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalPendingPayout, true)}</p>
            </div>
        </div>
    )
}