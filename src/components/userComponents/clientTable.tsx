import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useFetchData } from "@/hooks/useFetchData";
import { IUser } from "@/models/user";
import { LoadingAnimation } from "../shared";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormatNaire } from "@/utils/formatNumberWithK";
import { useNavigate } from "react-router-dom";

export default function ClientTable() {

    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<Array<IUser>>(`/admin/users`, "user");

    return (
        <LoadingAnimation loading={isLoading} >

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Client Name</TableHead>
                        <TableHead>No. of Property </TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Active Investments</TableHead>
                        <TableHead>Date Joined</TableHead>
                        <TableHead>Last Activity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item, index) => {
                        return (
                            <TableRow role="button" onClick={() => navigate(`/dashboard/users/clients/details?id=${item?.id}`
                            )} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                <TableCell className="">
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-fit " >
                                            <div className=" w-10 h-10 rounded-full bg-blue-400 " >
                                                {item?.profilePicture && (
                                                    <img src={item?.profilePicture} className=" rounded-full " alt={item?.password} />
                                                )}
                                            </div>
                                        </div>
                                        <p>{item?.firstName + " " + item?.lastName}</p>
                                    </div>
                                </TableCell>
                                <TableCell >
                                    {numberFormatNaire(item?.reservations)}
                                </TableCell>
                                <TableCell>
                                    {numberFormatNaire(item?.totalAmount)}
                                </TableCell>
                                <TableCell>
                                    {numberFormatNaire(item?.investments)}
                                </TableCell>
                                <TableCell>
                                    {dateFormat(item?.createdAt)}
                                </TableCell>
                                <TableCell>
                                    <div className=" flex flex-col " >
                                        <p>{dateFormat(item?.updatedAt)}</p>
                                        <p>(Login)</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </LoadingAnimation>
    )
}
