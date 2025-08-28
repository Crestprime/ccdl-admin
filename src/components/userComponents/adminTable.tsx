import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useFetchData } from "@/hooks/useFetchData";
import { IUser } from "@/models/user";
import { LoadingAnimation } from "../shared";
import { dateFormat } from "@/utils/dateFormat"; 
import { useNavigate } from "react-router-dom"; 

export default function AdminTable() {

    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<Array<IUser>>(`/admin`, ["admin"]);

    console.log(data);
    

    return (
        <LoadingAnimation loading={isLoading} >

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Staff Name</TableHead>
                        <TableHead>Role</TableHead>
                        {/* <TableHead>Department</TableHead> */}
                        <TableHead>Active Projects</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date Joined</TableHead>
                        <TableHead>Last Activity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item, index) => {
                        return (
                            <TableRow role="button" onClick={() => navigate(`/dashboard/users/admin/details?id=${item?.id}`
                            )} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                <TableCell className="">
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-fit " >
                                            <div className=" w-10 h-10 rounded-full bg-gray-200 " >
                                                {item?.profilePicture && (
                                                    <img src={item?.profilePicture} className=" rounded-full " alt={item?.password} />
                                                )}
                                            </div>
                                        </div>
                                        <p>{item?.firstName + " " + item?.lastName}</p>
                                    </div>
                                </TableCell>
                                <TableCell >
                                    {item?.position}
                                </TableCell>
                                <TableCell>
                                    0
                                </TableCell>
                                <TableCell>
                                    <div className=" px-4 flex h-[21px] justify-center items-center w-fit font-medium text-sm rounded-full bg-success100 text-success800 " >
                                        Verified
                                    </div>
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
