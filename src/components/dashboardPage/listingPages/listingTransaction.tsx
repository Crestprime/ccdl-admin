import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export default function ListingTransaction() {

    const data = [
        {
            document: "Sale Agreement",
            status: "Not Ready"
        },
        {
            document: "Sale Agreement",
            status: "Not Ready"
        },
        {
            document: "Sale Agreement",
            status: "Not Ready"
        },
        {
            document: "Sale Agreement",
            status: "Not Ready"
        },
        {
            document: "Sale Agreement",
            status: "Not Ready"
        },
    ]

    const datasecond = [
        {
            date: "March 1, 2024",
            amount: "₦5,000,000",
            status: "Completed"
        },
        {
            date: "March 1, 2024",
            amount: "₦5,000,000",
            status: "Due"
        },
        {
            date: "March 1, 2024",
            amount: "₦5,000,000",
            status: "Not Paid"
        }, 
    ]

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full grid grid-cols-4 gap-4 " >
                <div className=" w-full rounded-xl border p-4 " >
                    <p>Amount Paid</p>
                    <p className=" text-lg font-semibold " >₦2,000,000 </p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <p>Total Sale Price</p>
                    <p className=" text-lg font-semibold " >₦20,800,000</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <p>Outstanding Balance</p>
                    <p className=" text-lg font-semibold text-error700 " >₦18,800,000 </p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <p>Payment Plan</p>
                    <p className=" text-lg font-semibold " >3-Months</p>
                </div>
            </div>
            <div className=" w-full flex gap-4 " >
                <div className=" w-full flex flex-col gap-6 " >
                    <div className=" p-4 w-full flex flex-col gap-6 bg-primary50 rounded-2xl " >
                        <div className=" w-full flex justify-between items-center " >
                            <p className=" text-xl font-semibold " >Reservation Made</p>
                            <p className=" text-gray600 " >Monday, November 20, 2024 </p>
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
                                {data.map((item, index) => {
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
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className=" w-full flex flex-col gap-4 " >

                    <div className=" w-full p-4 rounded-2xl flex flex-col gap-3 border " >
                        <p className=" font-semibold " >Buyer Information</p>
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
                        <p className=" font-semibold " >Agent/ESP Information</p>
                        <div className=" flex items-center gap-3 " >
                            <div className=" rounded-full h-12 w-12 bg-green-300 " >

                            </div>
                            <div className=" flex flex-col " >
                                <p className=" font-medium text-gray900 " >Uriah Dylan</p>
                                <p className=" text-gray-500 text-sm " >vmeadows@armstrong.org</p>
                            </div>
                        </div>
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
                                {datasecond.map((item, index) => {
                                    return (
                                        <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                            <TableCell className="">{index+1}</TableCell>
                                            <TableCell className="">{item?.date}</TableCell>
                                            <TableCell className="">{item?.amount}</TableCell>
                                            <TableCell>
                                                <div className={` ${item?.status?.includes("Complete") ? " text-success800 bg-success100 " : item?.status?.includes("Due") ? " text-error800 bg-error100 "  : " text-gray800 bg-gray100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                    {item?.status}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}
