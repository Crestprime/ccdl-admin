import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useFetchData } from "@/hooks/useFetchData";
import { IAgent } from "@/models/user";
import { LoadingAnimation } from "../shared";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormat } from "@/utils/formatNumberWithK";
import { useNavigate } from "react-router-dom";


export default function RealtorTable() {

    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<Array<IAgent>>(`/admin/users/agents`, ["agent"]);

    return (
        <LoadingAnimation loading={isLoading} >

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Client Name</TableHead>
                        {/* <TableHead>Account Type</TableHead> */}
                        <TableHead>Property sold</TableHead>
                        <TableHead>Referrals</TableHead>
                        {/* <TableHead>Status</TableHead> */}
                        <TableHead>Date Joined</TableHead>
                        <TableHead>Last Activity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item, index) => {
                        return (
                            <TableRow role="button" onClick={() => navigate(
                                `/dashboard/users/realtor/details?id=${item?.id}`
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
                                {/* <TableCell >
                                    {numberFormatNaire(item?.reservations)}
                                </TableCell> */}
                                <TableCell>
                                    {numberFormat(item?.statistics?.soldProperties)}
                                </TableCell>
                                <TableCell>
                                    {numberFormat(item?.statistics?.totalEarnings)}
                                </TableCell>
                                {/* <TableCell>
                                    <div className={` ${item?.status?.includes("Not") ? " text-error800 bg-error100 " : item?.status?.includes("Verified") ? " text-success800  bg-success100 " : " text-warning800 bg-warning100 "} px-2 py-[2px] rounded-2xl w-fit text-xs font-medium `} >
                                        {item?.status}
                                    </div>
                                </TableCell> */}
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
