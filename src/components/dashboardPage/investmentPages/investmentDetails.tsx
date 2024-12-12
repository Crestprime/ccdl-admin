import { Button } from "@/components/ui/button";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { RiCoinsFill, RiUser4Fill } from "@remixicon/react";
import { useNavigate } from "@tanstack/react-router";


export default function InvestmentDetails() {

    const dataplans = [
        {
            name: "Sunset Villa - Unit A4",
            price: "₦85,000,000 ",
            status: "Completed",
            method: "Bank Transfer",
            note: "First ROI installment paid.",
        },
        {
            name: "Sunset Villa - Unit A4",
            price: "₦85,000,000 ",
            status: "Pending",
            method: "Bank Transfer",
            note: "First ROI installment paid.",
        },
        {
            name: "Sunset Villa - Unit A4",
            price: "₦85,000,000 ",
            status: "Completed",
            method: "Bank Transfer",
            note: "First ROI installment paid.",
        },
        {
            name: "Sunset Villa - Unit A4",
            price: "₦85,000,000 ",
            status: "Completed",
            method: "Bank Transfer",
            note: "First ROI installment paid.",
        },
    ]

    const navigate = useNavigate()

    return (
        <div className=" w-full flex h-auto gap-4 flex-col  " >
            <div className=" w-full flex items-center pb-4 border-b justify-end " >
                {/* <div className=" flex flex-col " >
                    <h3 className=" font-semibold text-lg " >Investments</h3>
                    <p className=" text-gray500 text-sm " >View and manage all investments</p>
                </div> */}
                <Button variant={"destructive"} className=" h-9 rounded-full w-fit text-sm " >
                    Cancel plan
                </Button>
            </div>
            <div className=" w-full grid grid-cols-4 gap-4 mt-4 " >
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCoinsFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Total Investment</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >₦60,000,000.01</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCoinsFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Total Profit Paid Out</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >₦60,000,000.01</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCoinsFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Pending Payout</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >₦650,000.00</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiUser4Fill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >ROI</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >20</p>
                </div>
            </div>
            <div className=" w-full flex gap-4 " >
                <div className=" w-full flex flex-col gap-4 " >
                    <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                        <p className=" font-semibold " >Investor</p>
                        <div className=" flex items-center gap-3 " >
                            <div className=" rounded-full h-12 w-12 bg-green-300 " >

                            </div>
                            <div className=" flex flex-col " >
                                <p className=" font-medium text-gray900 " >Uriah Dylan</p>
                                <p className=" text-gray-500 text-sm " >vmeadows@armstrong.org</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                        <p className=" font-semibold " >Investor</p>
                        <div className=" w-full grid grid-cols-2 gap-6 " >
                            <p className=" font-medium " >Duration:</p>
                            <p className=" font-medium text-right " >6 months</p>
                            <p className=" font-medium  " >Start Date:</p>
                            <p className=" font-medium text-right " >June 1, 2024</p>
                            <p className=" font-medium  " >Maturity Date:</p>
                            <p className=" font-medium text-right " >December 1, 2024</p>
                            <p className=" font-medium  " >Status:</p>
                            <div className=" w-full flex justify-end " >
                                <div className=" w-fit rounded-2xl h-[21px] flex justify-center items-center bg-success100 text-success800 text-xs font-medium px-2 " >
                                    Active
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full border rounded-2xl p-4 h-fit " >
                    <div className=" w-full h-[190px] rounded-t-2xl bg-slate-500 " >

                    </div>
                    <div className=" w-full border border-b-0 p-4  " >
                        <p className=" font-semibold " >Green Valley Plot 12</p>
                        <p className=" text-gray500 " >600sqm</p>
                    </div>
                    <div className=" w-full border rounded-b-2xl p-4  " >
                        <Button variant={"main"} className=" h-9 rounded-full " >View property</Button>
                    </div>
                </div>
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <p className=" text-gray900 font-semibold " >Disbursement History</p>
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
                        {dataplans.map((item, index) => {
                            return (
                                <TableRow role="button" onClick={() => navigate({
                                    to: "/dashboard/property/investments/details"
                                })} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                    <TableCell className="">{item?.name}</TableCell>
                                    <TableCell className="">{item?.price}</TableCell>
                                    <TableCell>
                                        <div className=" flex gap-2 items-center " >
                                            <div className={` ${item?.status?.includes("Completed") ? " text-success800 bg-success100 " : " text-warning800 bg-warning100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                {item?.status}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="">{item?.method}</TableCell>
                                    <TableCell className="">{item?.note}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>

        </div>
    )
}
