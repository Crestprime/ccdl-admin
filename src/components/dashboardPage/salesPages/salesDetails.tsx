import { LoadingAnimation } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { TableHeader, TableRow, TableHead, TableBody, Table } from "@/components/ui/table";
import { useFetchData } from "@/hooks/useFetchData";
import { ISale } from "@/models/sales"; 
import { formatNumberWithK } from "@/utils/formatNumberWithK";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function SalesDetails() {

    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");
    const navigate = useNavigate()


    const { data, isLoading } = useFetchData<ISale>(`/admin-property/reservation/${id}`, ["reservations", id]);

    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full flex h-auto gap-4 flex-col  " >
                <div className=" w-full grid grid-cols-4 gap-4 mt-4 " >
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Amount Paid</p>
                        <p className=" text-lg font-semibold text-gray900 " >{formatNumberWithK(data?.analytics?.totalAmountPaid, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Total Sale Price</p>
                        <p className=" text-lg font-semibold text-gray900 " >{formatNumberWithK(data?.analytics?.totalSalePrice, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Outstanding Balance</p>
                        <p className=" text-lg font-semibold text-error600 " >{formatNumberWithK(data?.analytics?.outstandingBalance, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <p className=" text-gray500 text-sm " >Payment Plan</p>
                        <p className=" text-lg font-semibold text-gray900 " >{data?.analytics?.paymentPlan}</p>
                    </div>
                </div>
                <div className=" w-full flex gap-4 " >
                    <div className=" w-full flex flex-col gap-4 " >

                        {/* <div className=" p-4 w-full flex flex-col gap-6 bg-primary50 rounded-2xl " >
                            <div className=" w-full flex justify-between items-center " >
                                <p className=" text-xl font-semibold " >Reservation Made</p>
                                <p className=" text-gray600 " >{dateFormat(data?.createdAt)}</p>
                            </div>
                            <p className=" text-gray900 " >Initial reservation request submitted by the buyer </p>
                            <div className=" w-full flex gap-3 " >
                                <div className=" w-full h-1 rounded-full bg-primaryColor " />
                                <div className=" w-full h-1 rounded-full bg-gray300 " />
                                <div className=" w-full h-1 rounded-full bg-gray300 " />
                                <div className=" w-full h-1 rounded-full bg-gray300 " />
                            </div>
                            <div className=" w-full flex gap-4 justify-between " >
                                <div className=" flex gap-4 " >
                                    <Button variant={"main"} className=" rounded-full " >Approve</Button>
                                    <Button variant={"ghost"} className=" text-error700 " >Decline</Button>
                                </div>
                                <Button variant={"outline"} className=" rounded-full " >View timeline</Button>
                            </div>
                        </div> */}
                        <div className=" w-full border rounded-2xl p-4 h-fit " >
                            <div className=" w-full h-[190px] rounded-t-2xl bg-slate-500 " >
                                <img alt="porperty" src={data?.property?.media[0]} className=" h-[190px] object-cover w-full rounded-2xl " />
                            </div>
                            <div className=" w-full border border-b-0 p-4  " >
                                <p className=" font-semibold " >{data?.property?.name}</p>
                                <p className=" text-gray500 " >{data?.property?.squareFoot}sqm</p>
                            </div>
                            <div className=" w-full border rounded-b-2xl p-4  " >
                                <Button onClick={() => navigate(`/dashboard/property/listings/details?id=${data?.property?.id}`)} variant={"main"} className=" h-9 rounded-full " >View property</Button>
                            </div>
                        </div>
                        <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                            <p className=" text-gray900 font-semibold " >Payment Breakdown</p>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Instalment No.</TableHead>
                                        <TableHead>Payment Date</TableHead>
                                        <TableHead>Amount </TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* {datasecond.map((item, index) => {
                                    return (
                                        <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                            <TableCell className="">{index + 1}</TableCell>
                                            <TableCell className="">{item?.date}</TableCell>
                                            <TableCell className="">{item?.amount}</TableCell>
                                            <TableCell>
                                                <div className={` ${item?.status?.includes("Complete") ? " text-success800 bg-success100 " : item?.status?.includes("Due") ? " text-error800 bg-error100 " : " text-gray800 bg-gray100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                    {item?.status}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })} */}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-4 " >
                        {/* repeat */}
                        <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                            <p className=" font-semibold " >Investor</p>
                            <div className=" flex items-center gap-3 " >
                                <div className=" rounded-full h-12 w-12 bg-gray-200 " >
                                    {data?.user?.profilePicture && (
                                        <img alt="user" src={data?.user?.profilePicture} className=" w-full h-full object-cover rounded-full " />
                                    )}
                                </div>
                                <div className=" flex flex-col " >
                                    <p className=" font-medium text-gray900 " >{data?.user?.firstName+" "+data?.user?.lastName}</p>
                                    <p className=" text-gray-500 text-sm " >{data?.user?.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                            <p className=" font-semibold " >Agent/ESP Information</p>
                            {/* <div className=" flex items-center gap-3 " >
                                <div className=" w-fit " >
                                    <div className=" rounded-full h-12 w-12 bg-green-300 " >

                                    </div>
                                </div>
                                <div className="w-full flex justify-between " >
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-gray900 " >Uriah Dylan</p>
                                        <p className=" text-gray-500 text-sm " >vmeadows@armstrong.org</p>
                                    </div>
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-gray900 " >₦200,000</p>
                                        <p className=" text-gray500 text-sm " >5%</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center gap-3 " >
                                <div className=" w-fit " >
                                    <div className=" rounded-full h-12 w-12 bg-green-300 " >

                                    </div>
                                </div>
                                <div className="w-full flex justify-between " >
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-gray900 " >Uriah Dylan</p>
                                        <p className=" text-gray-500 text-sm " >vmeadows@armstrong.org</p>
                                    </div>
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-gray900 " >₦200,000</p>
                                        <p className=" text-gray500 text-sm " >5%</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                            <p className=" text-gray900 font-semibold " >Document Status</p>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Document</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* {data.map((item, index) => {
                                    return (
                                        <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                            <TableCell className="">{item?.document}</TableCell>
                                            <TableCell>
                                                <div className=" text-gray800 h-[21px] rounded-2xl px-3 text-xs bg-gray100 w-fit flex justify-center items-center " >
                                                    {item?.status}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })} */}
                                </TableBody>
                            </Table>
                        </div>

                    </div>
                </div>

            </div>
        </LoadingAnimation>
    )
}

