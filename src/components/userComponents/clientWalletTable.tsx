// import { useNavigate } from "@tanstack/react-router"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useFetchData } from "@/hooks/useFetchData"; 
import { LoadingAnimation } from "../shared";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormatNaire } from "@/utils/formatNumberWithK";
import { ITransaction } from "@/models/transaction";

export default function ClientWalletTable({ id }: { id: string }) {
 
    // const navigate = useNavigate()
    const { data, isLoading } = useFetchData<Array<ITransaction>>(`/admin/users/${id}/transactions`, "transactions"+id); 
    return (
        <LoadingAnimation loading={isLoading} length={data?.length} >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Reference ID</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
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
                                <TableCell className="">{item?.paystackReference ?? "---"}</TableCell>
                                <TableCell className="">{dateFormat(item?.createdAt)}</TableCell>
                                <TableCell className="">{item?.itemType ?? "---"}</TableCell>
                                <TableCell>
                                    <div className=" flex gap-2 items-center " >
                                        <div className={` ${item?.status?.includes("SUCCESS") ?" text-success800 bg-success100 " : " text-orange-800 bg-orange100   "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                            {item?.status}
                                        </div> 
                                    </div>
                                </TableCell>
                                <TableCell className="">{numberFormatNaire(item?.amount)}</TableCell>
                                <TableCell className="">{item?.source}</TableCell> 
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </LoadingAnimation>
    )
}