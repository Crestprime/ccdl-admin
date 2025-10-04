import { LoadingAnimation } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { TableHeader, TableRow, TableHead, TableBody, Table, TableCell } from "@/components/ui/table";
import { useFetchData } from "@/hooks/useFetchData";
import { IUser } from "@/models/user";
import { capitalizeFLetter } from "@/utils/capitalLetter";
import { dateFormat } from "@/utils/dateFormat";
import { formatNumberWithK } from "@/utils/formatNumberWithK";
import { formatNumber } from "@/utils/numberFormat";
import { RiArrowLeftLine, RiArrowLeftSLine, RiCoinsFill, RiUser4Fill } from "@remixicon/react";
import { useNavigate, useSearchParams } from "react-router-dom";


interface IProps {
    "totalInvestedAmount": number,
    "totalProfit": number,
    "pendingPayout": number,
    "roi": number
}

interface IPropsInvestment {
    "id": number,
    "planId": number,
    "userId": number,
    "status": string,
    "isDeleted": boolean,
    "deletedAt": any,
    "createdBy": any,
    "createdAt": string,
    "updatedAt": string,
    "amount": number,
    "interest": number,
    "payoutDate": string,
    "plan": {
        "id": number,
        "duration": number,
        "roi": number,
        "paymentFrequency": number,
        "minimiumInvestmentAmount": number,
        "propertyId": number,
        "status": string,
        "isDeleted": boolean,
        "deletedAt": any,
        "createdBy": number,
        "createdAt": string,
        "updatedAt": string
    },
    "user": IUser
}

interface IDisbustment {
    id: string
    investmentId: number
    propertyId: number
    amount: number
    roi: number
    totalAmount: number
    note: string
    status: string
    disbursedAt: any
    createdAt: any
    updatedAt: any
}

export default function InvestmentDetails() {


    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");

    const { data: analytics, isLoading: loading } = useFetchData<IProps>(`/investment/analytics/${id}`, ["investment-analytics-detail", id]);


    const { data: history, isLoading: loadinghistory } = useFetchData<Array<IDisbustment>>(`/investment/disbursement-history/${id}`, ["investment-disbursement", id]);

    const { data, isLoading } = useFetchData<IPropsInvestment>(`/investment/${id}`, ["investment-details", id]);

    const navigate = useNavigate()

    return (
        <LoadingAnimation loading={isLoading || loading || loadinghistory} >
            <div className=" w-full flex h-auto gap-4 flex-col  " >
                <div className=" w-full flex items-center gap-4 pb-4 border-b " >
                    <button onClick={()=> navigate(-1)} >
                        <RiArrowLeftLine />
                    </button>

                    <h3 className=" font-semibold text-lg " >Investments Details</h3>
                    {/* <div className=" flex flex-col " >
                    <h3 className=" font-semibold text-lg " >Investments</h3>
                    <p className=" text-gray500 text-sm " >View and manage all investments</p>
                </div> */}
                    {/* <Button variant={"destructive"} className=" h-9 rounded-full w-fit text-sm " >
                        Cancel plan
                    </Button> */}
                </div>
                <div className=" w-full grid grid-cols-4 gap-4 mt-4 " >
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Investment</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalInvestedAmount, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Profit Paid Out</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalProfit, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Pending Payout</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.pendingPayout, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiUser4Fill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >ROI</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.roi, false) + "%"}</p>
                    </div>
                </div>
                <div className=" w-full flex gap-4 " >
                    <div className=" w-full flex flex-col gap-4 " >
                        <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                            <p className=" font-semibold " >Investor</p>
                            <div className=" flex items-center gap-3 " >
                                <div className=" rounded-full h-12 w-12 bg-gray-300 " >

                                </div>
                                <div className=" flex flex-col " >
                                    <p className=" font-medium text-gray900 " >{data?.user?.firstName + " " + data?.user?.lastName}</p>
                                    <p className=" text-gray-500 text-sm " >vmeadows@armstrong.org</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                            <p className=" font-semibold " >Investment Plan</p>
                            <div className=" w-full grid grid-cols-2 gap-6 " >
                                <p className=" font-medium " >Duration:</p>
                                <p className=" font-medium text-right " >{data?.plan?.duration} months</p>
                                <p className=" font-medium  " >Start Date:</p>
                                <p className=" font-medium text-right " >{dateFormat(data?.plan?.createdAt)}</p>
                                <p className=" font-medium  " >Maturity Date:</p>
                                <p className=" font-medium text-right " >{dateFormat(data?.plan?.updatedAt)}</p>
                                <p className=" font-medium  " >Status:</p>
                                <div className=" w-full flex justify-end " >

                                    <div className=" flex gap-2 items-center " >
                                        <div className={` ${data?.status?.includes("ACTIVE") ? " text-success800 bg-success100 " : data?.status?.includes("Withdrawn") ? " text-error800 bg-error100 " : " text-blue800 bg-blue100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                            {capitalizeFLetter(data?.status)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full border rounded-2xl p-4 h-fit " >
                        {/* <div className=" w-full h-[190px] rounded-t-2xl bg-slate-500 " >
                            <img src={data?.property?.media[0]} alt="property" className=" w-full h-full object-cover rounded-t-2xl" />
                        </div>
                        <div className=" w-full border border-b-0 p-4  " >
                            <p className=" font-semibold " >{data?.property?.name}</p>
                            <p className=" text-gray500 " >{data?.property?.squareFoot} sqm</p>
                        </div>
                        <div className=" w-full border rounded-b-2xl p-4  " >
                            <Button onClick={() => navigate(`/dashboard/property/listings/details?id=${data?.property?.id}`)} variant={"main"} className=" h-9 rounded-full " >View property</Button>
                        </div> */}
                    </div>
                </div>
                <div className=" w-full flex flex-col gap-4 " >
                    <p className=" text-gray900 font-semibold " >Disbursement History</p>
                    <LoadingAnimation loading={loadinghistory} length={history?.length} >
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Property Name</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead>Notes</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {history?.map((item, index) => {
                                    return (
                                        <TableRow role="button" className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                            <TableCell className="">{item?.propertyId}</TableCell>
                                            <TableCell className="">{formatNumber(item?.totalAmount)}</TableCell>
                                            <TableCell>
                                                <div className=" flex gap-2 items-center " >
                                                    <div className={` ${item?.status?.includes("Completed") ? " text-success800 bg-success100 " : " text-warning800 bg-warning100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                        {item?.status}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="">{"---"}</TableCell>
                                            <TableCell className="">{item?.note}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </LoadingAnimation>
                </div>

            </div>
        </LoadingAnimation>
    )
}
