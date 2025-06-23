// import { useNavigate } from "@tanstack/react-router"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useFetchData } from "@/hooks/useFetchData";
import { ISale } from "@/models/sales";
import { LoadingAnimation } from "../shared";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormatNaire } from "@/utils/formatNumberWithK";

export default function ClientSaleTable({ id }: { id: string }) {
 
    // const navigate = useNavigate()
    const { data, isLoading } = useFetchData<Array<ISale>>(`/admin/users/${id}/reservations`, "reservations");
    
    return (
        <LoadingAnimation loading={isLoading} length={data?.length} >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Property Name</TableHead>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Sale Date</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Last Payment date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item, index) => {
                        return (
                            <TableRow role="button"
                            //  onClick={() => navigate({
                            //     to: "/dashboard/property/sales/details"
                            // })} 
                            className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                <TableCell className="">{item?.propertyId}</TableCell>
                                <TableCell className="">{item?.userId}</TableCell>
                                <TableCell>
                                    <div className=" flex gap-2 items-center " >
                                        <div className={` ${item?.status?.includes("AWAITING_ALLOCATION") ? " text-orange-800 bg-orange100   " : " text-success800 bg-success100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                            {item?.status}
                                        </div>
                                        {/* <div className=" text-blue800 h-[21px] rounded-2xl px-3 text-xs bg-blue100 w-fit flex justify-center items-center " >
                                            Fully Paid
                                        </div> */}
                                    </div>
                                </TableCell>
                                <TableCell className="">{dateFormat(item?.nextPaymentDate)}</TableCell>
                                <TableCell className="">{numberFormatNaire(item?.totalPayment)}</TableCell>
                                <TableCell className="">{dateFormat(item?.updatedAt)}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </LoadingAnimation>
    )
}