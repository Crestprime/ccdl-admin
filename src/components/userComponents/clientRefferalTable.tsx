// import { useNavigate } from "@tanstack/react-router"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useFetchData } from "@/hooks/useFetchData";
import { IRefferal } from "@/models/sales";
import { LoadingAnimation } from "../shared";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormatNaire } from "@/utils/formatNumberWithK";

export default function ClientRefferalTable({ id }: { id: string }) {

    // const navigate = useNavigate()
    const { data, isLoading } = useFetchData<Array<IRefferal>>(`/admin/users/agents/${id}/referrals`, "referrals"+id);
    

    return (
        <LoadingAnimation loading={isLoading} length={data?.length} >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Reservation</TableHead>
                        <TableHead>Investment</TableHead>
                        <TableHead>Amount Spent</TableHead> 
                        <TableHead>Date</TableHead>
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
                                <TableCell className="">
                                    <div className=" flex gap-2 items-center " >
                                        {/* <div className=" w-fit " >
                                            <div className=" w-10 h-10 rounded-full bg-blue-400 " >
                                                {item?.profilePicture && (
                                                    <img src={item?.profilePicture} className=" rounded-full " alt={item?.password} />
                                                )}
                                            </div>
                                        </div> */}
                                        <p>{item?.firstName + " " + item?.lastName}</p>
                                    </div>
                                </TableCell>
                                <TableCell className="">{item?.email}</TableCell> 
                                <TableCell className="">{numberFormatNaire(item?.statistics?.reservations)}</TableCell>  
                                <TableCell className="">{numberFormatNaire(item?.statistics?.investments)}</TableCell>
                                <TableCell className="">{numberFormatNaire(item?.statistics?.totalSpent)}</TableCell>
                                <TableCell className="">{dateFormat(item?.createdAt)}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </LoadingAnimation>
    )
}