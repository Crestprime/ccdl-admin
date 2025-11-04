import { useFetchData } from "@/hooks/useFetchData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { LoadingAnimation } from "../shared"; 
import { dateFormat } from "@/utils/dateFormat";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"; 



export default function ProfileTable({ id }: { id: string }) {

    const { data, isLoading } = useFetchData<Array<any>>(`/profile/admin/${id}`, ["profile", id + ""]);

    console.log(data);

    return (
        <LoadingAnimation length={data?.length} loading={isLoading} >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Occupation</TableHead>
                        <TableHead>Created At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((item: any, index: number) => {
                        return (
                            <TableRow role="button" className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                <TableCell className="">
                                    <div className=" flex gap-2 items-center " >
                                        <Avatar>
                                            <AvatarImage src={item?.profilePicture} alt="@shadcn" />
                                            <AvatarFallback>{item?.firstName?.slice(0, 1) + item?.lastName?.slice(0, 1)}</AvatarFallback>
                                        </Avatar>
                                        <p>{item?.firstName + " " + item?.lastName}</p>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {item?.email}
                                </TableCell>
                                <TableCell>
                                    {item?.type}
                                </TableCell>
                                <TableCell>
                                    {item?.occupation}
                                </TableCell>
                                <TableCell>
                                    <div className=" flex flex-col " >
                                        <p>{dateFormat(item?.createdAt)}</p>
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
