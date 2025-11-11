import { RiDownload2Line, RiFileCopyFill, RiMoneyDollarCircleLine, RiSafe2Fill } from "@remixicon/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useFetchData } from "@/hooks/useFetchData";
import { ITransaction } from "@/models/transaction";
import { LoadingAnimation } from "../shared";
import { formatNumberWithK, numberFormatNaire } from "@/utils/formatNumberWithK";
import { dateFormat } from "@/utils/dateFormat";
import { IAWallet } from "@/models/analytics";
import { usePagintion } from "@/store/usePagination";
import { useEffect } from "react";
import CustomPagination from "../shared/customPagination";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { useFetchData } from "@/hooks/useFetchData";


export default function TransactionTab() {


    const { pageSize, page, updatePageSize, updatePage } = usePagintion((state) => state)
    const { data, isLoading } = useFetchData<any>(`/admin/transactions`, ["transactions"], {
        limit: pageSize,
        page: page
    }, true);

    const { data: wallet, isLoading: loading } = useFetchData<IAWallet>(`/analytics/wallet`, ["analytics"]);


    useEffect(() => {
        updatePage(1)
        updatePageSize(10)
    }, [])

    return (
        <LoadingAnimation loading={isLoading || loading} >
            <div className=" w-full flex gap-6 flex-col " >
                <div className=" w-full h-fit flex flex-col " >
                    <div className=" w-full flex gap-4 " >
                        <div className=" w-full h-[178px] flex flex-col p-4 border rounded-2xl " >
                            <p className=" text-bodyTextColor text-sm leading-5 " >Available Balance</p>
                            <p className=" text-[30px] font-medium leading-9 " >{formatNumberWithK(wallet?.balance, true)}</p>
                        </div>
                        <div className=" w-full h-[178px] flex flex-col p-4 border rounded-2xl " >
                            <div className=" w-10 h-10 rounded-full border flex justify-center items-center " >
                                <RiSafe2Fill color="#667085" />
                            </div>
                            <div className=" mt-auto  " >
                                <p className=" text-bodyTextColor text-sm leading-5 " >Total Investments</p>
                                <p className=" text-[30px] font-medium leading-9 " >{formatNumberWithK(wallet?.totalInvestments, true)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" w-full flex flex-col p-4 gap-4 border rounded-2xl " >
                    <div className=" flex items-center " >
                        <RiMoneyDollarCircleLine />
                        <p className=" font-medium text-gray900 " >Genra</p>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ESP</TableHead>
                                <TableHead>Date/Time</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Property</TableHead>
                                <TableHead>More</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.data?.map((item: ITransaction, index: number) => {
                                return (
                                    <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                        <TableCell className=" flex gap-2 items-center ">
                                            <div className=" flex gap-2 items-center " >
                                                <Avatar>
                                                    <AvatarImage src={item?.user[0]?.profilePicture} alt="@shadcn" />
                                                    <AvatarFallback>{item?.user[0]?.firstName?.slice(0, 1) + item?.user[0]?.lastName?.slice(0, 1)}</AvatarFallback>
                                                </Avatar>
                                                <p>{item?.user[0]?.firstName + " " + item?.user[0]?.lastName}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="">{dateFormat(item?.createdAt)}</TableCell>
                                        <TableCell>
                                            <div className=" flex flex-col " >
                                                <p className=" text-sm text-gray800 " >{numberFormatNaire(item?.amount)}</p>
                                                {/* <p className=" text-sm text-gray500 " >{item?.bonus}</p> */}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className=" flex flex-col " >
                                                {/* <p className=" text-sm text-gray800 " >{item?.property}</p> */}
                                                <p className=" text-sm text-gray500 " >{item?.itemType}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="">
                                            <div className=" flex items-center gap-4 " >
                                                <RiFileCopyFill />
                                                <RiDownload2Line />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                {data?.total > pageSize && (
                    <CustomPagination totalElement={data?.total} />
                )}
            </div>
        </LoadingAnimation>
    )
}
