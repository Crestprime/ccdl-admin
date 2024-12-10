import { RiAddCircleLine, RiCalendarCheckFill, RiCoinsFill, RiKeyFill, RiSearch2Line } from "@remixicon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { useNavigate } from "@tanstack/react-router";


export default function Investment() {

    const navigate = useNavigate()

    const data = [
        {
            name: "Sunset Villa - Unit A4",
            client: "Mr. John Doe",
            status: "Matured",
            tenor: "12 Months",
            date: "Feb 10, 2024",
            price: "₦85,000,000 "
        },
        {
            name: "Sunset Villa - Unit A4",
            client: "Mr. John Doe",
            status: "Withdrawn",
            tenor: "12 Months",
            date: "Feb 10, 2024",
            price: "₦85,000,000 "
        },
        {
            name: "Sunset Villa - Unit A4",
            client: "Mr. John Doe",
            status: "Active",
            tenor: "12 Months",
            date: "Feb 10, 2024",
            price: "₦85,000,000 "
        }, 
    ]


    const dataplans = [
        {
            name: "Sunset Villa - Unit A4",
            plan: "6 - 12 month",
            roi: "12 - 26%",
            client: "Mr. John Doe",
            status: "Open",
            date: "Feb 10, 2024",
            price: "₦85,000,000 "
        },
        {
            name: "Sunset Villa - Unit A4",
            plan: "6 - 12 month",
            roi: "12 - 26%",
            client: "Mr. John Doe",
            status: "Closed",
            date: "Feb 10, 2024",
            price: "₦85,000,000 "
        },
        {
            name: "Sunset Villa - Unit A4",
            plan: "6 - 12 month",
            roi: "12 - 26%",
            client: "Mr. John Doe",
            status: "Closed",
            date: "Feb 10, 2024",
            price: "₦85,000,000 "
        },
        {
            name: "Sunset Villa - Unit A4",
            plan: "6 - 12 month",
            roi: "12 - 26%",
            client: "Mr. John Doe",
            status: "Open",
            date: "Feb 10, 2024",
            price: "₦85,000,000 "
        },
    ]

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex items-center justify-between " >
                <div className=" flex flex-col " >
                    <h3 className=" font-semibold text-lg " >Investments</h3>
                    <p className=" text-gray500 text-sm " >View and manage all investments</p>
                </div>
                <Button variant={"main"} className=" h-9 rounded-full w-fit text-sm " >
                    Create plan
                </Button>
            </div>
            <div className=" w-full grid grid-cols-4 gap-4 " >
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
                        <RiKeyFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Total Investors</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >50</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCalendarCheckFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Pending Payout</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >20</p>
                </div>
            </div>

            <Tabs defaultValue="investments" className="w-full flex flex-col gap-4 ">
                <div className=" w-full justify-between flex items-center " >
                    <TabsList className="grid w-fit grid-cols-2 h-fit ">
                        <TabsTrigger className=" h-[36px] " value="investments">Investments</TabsTrigger>
                        <TabsTrigger className=" h-[36px] " value="plans">Plans</TabsTrigger>
                    </TabsList>
                    <div className=" w-[354px] relative h-[42px] " >
                        <div className=" w-fit px-2 absolute top-0 h-full flex justify-center items-center " >
                            <RiSearch2Line size={"20px"} />
                        </div>
                        <Input className=" h-[42px] w-full pl-8 " placeholder="Search for client name" />
                    </div>
                </div>
                <Button variant={"outline"} className=" w-fit h-11 " >
                    <RiAddCircleLine size={"15px"} />
                    Add filter
                </Button>
                <TabsContent className=" w-full flex flex-col gap-5 " value="investments">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Property Name</TableHead>
                                <TableHead>Client Name</TableHead>
                                <TableHead>Tenor</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Maturity Date</TableHead>
                                <TableHead>Price</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item, index) => {
                                return (
                                    <TableRow role="button" onClick={() => navigate({
                                        to: "/dashboard/property/sales/details"
                                    })} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                        <TableCell className="">{item?.name}</TableCell>
                                        <TableCell className="">{item?.client}</TableCell>
                                        <TableCell className="">{item?.tenor}</TableCell>
                                        <TableCell>
                                            <div className=" flex gap-2 items-center " >
                                                <div className={` ${item?.status?.includes("Matured") ? " text-success800 bg-success100 " : item?.status?.includes("Withdrawn") ? " text-error800 bg-error100 " : " text-blue800 bg-blue100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                    {item?.status}
                                                </div> 
                                            </div>
                                        </TableCell>
                                        <TableCell className="">{item?.date}</TableCell>
                                        <TableCell className="">{item?.price}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent className=" w-full flex flex-col gap-5 " value="plans">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Property Name</TableHead>
                                <TableHead>Plan</TableHead>
                                <TableHead>ROI</TableHead>
                                <TableHead>Client Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Maturity Date</TableHead>
                                <TableHead>Min Investment</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dataplans.map((item, index) => {
                                return (
                                    <TableRow role="button" onClick={() => navigate({
                                        to: "/dashboard/property/sales/details"
                                    })} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                        <TableCell className="">{item?.name}</TableCell>
                                        <TableCell className="">{item?.plan}</TableCell>
                                        <TableCell className="">{item?.roi}</TableCell>
                                        <TableCell className="">{item?.client}</TableCell>
                                        <TableCell>
                                            <div className=" flex gap-2 items-center " >
                                                <div className={` ${item?.status?.includes("Open") ? " text-success800 bg-success100 " : " text-gray800 bg-gray100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                    {item?.status}
                                                </div> 
                                            </div>
                                        </TableCell>
                                        <TableCell className="">{item?.date}</TableCell>
                                        <TableCell className="">{item?.price}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    )
}
