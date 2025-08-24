import { RiAddCircleLine, RiCalendarCheckFill, RiCoinsFill, RiKeyFill, RiSearch2Line } from "@remixicon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"; 
import { useNavigate } from "react-router-dom";


export default function SaleAndReservation() {

    const navigate = useNavigate()

    const data = [
        {
            name: "Sunset Villa - Unit A4",
            client: "Mr. John Doe", 
            status: "Completed",
            sale: "Feb 10, 2024",
            price: "₦85,000,000 ",
            allocated: "March 15, 2024"
        },
        {
            name: "Sunset Villa - Unit A4",
            client: "Mr. John Doe", 
            status: "Allocating",
            sale: "Feb 10, 2024",
            price: "₦85,000,000 ",
            allocated: "March 15, 2024"
        },
        {
            name: "Sunset Villa - Unit A4",
            client: "Mr. John Doe", 
            status: "Allocating",
            sale: "Feb 10, 2024",
            price: "₦85,000,000 ",
            allocated: "March 15, 2024"
        },
        {
            name: "Sunset Villa - Unit A4",
            client: "Mr. John Doe", 
            status: "Completed",
            sale: "Feb 10, 2024",
            price: "₦85,000,000 ",
            allocated: "March 15, 2024"
        }
    ]

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" flex flex-col " >
                <h3 className=" font-semibold text-lg " >Sales & Reservations</h3>
                <p className=" text-gray500 text-sm " >Manage all Sales & Reservations properties in capital city</p>
            </div>
            <div className=" w-full grid grid-cols-4 gap-4 " >
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCoinsFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Total Revenue</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >₦60,000,000.01</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCoinsFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Outstanding</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >₦60,000,000.01</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiKeyFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Total Properties Sold</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >50</p>
                </div>
                <div className=" w-full rounded-xl border p-4 " >
                    <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                        <RiCalendarCheckFill size={"24px"} />
                    </div>
                    <p className=" text-gray500 text-sm mt-6 " >Total Reservations</p>
                    <p className=" text-[30px] font-semibold text-gray900 " >20</p>
                </div>
            </div>

            <Tabs defaultValue="sale" className="w-full flex flex-col gap-4 ">
                <div className=" w-full justify-between flex items-center " >
                    <TabsList className="grid w-fit grid-cols-2 h-fit ">
                        <TabsTrigger className=" h-[36px] " value="sale">Sales</TabsTrigger>
                        <TabsTrigger className=" h-[36px] " value="reservation">Reservation</TabsTrigger>
                    </TabsList>
                    <div className=" w-[354px] relative h-[42px] " >
                        <div className=" w-fit px-2 absolute top-0 h-full flex justify-center items-center " >
                            <RiSearch2Line size={"20px"} />
                        </div>
                        <Input className=" h-[42px] w-full pl-8 " placeholder="Search for property or client name" />
                    </div>
                </div>
                <Button variant={"outline"} className=" w-fit h-11 " >
                    <RiAddCircleLine size={"15px"} />
                    Add filter
                </Button>
                <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="sale">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Property Name</TableHead>
                                <TableHead>Client Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Sale Date</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Allocation date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item, index) => {
                                return (
                                    <TableRow role="button" onClick={()=> navigate("/dashboard/property/sales/details")} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                        <TableCell className="">{item?.name}</TableCell>
                                        <TableCell className="">{item?.client}</TableCell>
                                        <TableCell>
                                            <div className=" flex gap-2 items-center " > 
                                            <div className={` ${item?.status?.includes("Complete") ? " text-success800 bg-success100 " : " text-orange-800 bg-orange100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                {item?.status}
                                            </div>
                                            <div className=" text-blue800 h-[21px] rounded-2xl px-3 text-xs bg-blue100 w-fit flex justify-center items-center " >
                                                Fully Paid
                                            </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="">{item?.sale}</TableCell>
                                        <TableCell className="">{item?.price}</TableCell>
                                        <TableCell className="">{item?.allocated}</TableCell>
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
