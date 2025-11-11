import { useFetchData } from "@/hooks/useFetchData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { LoadingAnimation } from "../shared";
import { numberFormatNaire } from "@/utils/formatNumberWithK";
import { IinvestmentData } from "@/models/investment";
import { dateFormat } from "@/utils/dateFormat";

 

export default function ClientInvestmentTable({ id }: { id: string }) {

    const { data, isLoading } = useFetchData<Array<IinvestmentData>>(`/investment/user/${id}`, ["investmentuser", id+""]);
  
    return (
        <LoadingAnimation length={data?.length} loading={isLoading} >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Property Name</TableHead>
                        <TableHead>Tenor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Maturity Date</TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item, index) => {
                        return (
                            <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                <TableCell >
                                    00{index + 1}
                                </TableCell>
                                <TableCell>
                                    {item?.plan?.property?.name}
                                </TableCell>
                                <TableCell>
                                {/* {item?.plan?.property?.} */}
                                ----
                                </TableCell>
                                <TableCell>
                                    <div className={` ${item?.status?.includes("ACTIVE") ? " text-blue800 bg-blue100 " : item?.status?.includes("Matured") ? " text-success800  bg-success100 " : " text-error800 bg-error100 "} px-2 py-[2px] rounded-2xl w-fit text-xs font-medium `} >
                                        {item?.status}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {dateFormat(item?.createdAt)}
                                </TableCell>
                                <TableCell>
                                    {numberFormatNaire(item?.amount)}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </LoadingAnimation>
    )
}
