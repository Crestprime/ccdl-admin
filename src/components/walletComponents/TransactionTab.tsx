import { RiDownload2Line, RiFileCopyFill, RiMoneyDollarCircleLine, RiSafe2Fill } from "@remixicon/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useFetchData } from "@/hooks/useFetchData";
import { ITransaction } from "@/models/transaction";
import { LoadingAnimation } from "../shared";
import { numberFormatNaire } from "@/utils/formatNumberWithK";
import { dateFormat } from "@/utils/dateFormat";
// import { useFetchData } from "@/hooks/useFetchData";


export default function TransactionTab() {

    const datainfo = [
        {
            name: "TBF Bakery",
            email: "olivia@gmail.com",
            date: "Tue 5:40am",
            amount: "₦300,000.00",
            bonus: "10% Bonus",
            property: "Palmgrove  Estate, Ikot Akpan Etok, Ibesikpo Asutan, Akwa ibom State",
            type: "438 sqm ・Residential ・ Land"
        },
        {
            name: "TBF Bakery",
            email: "olivia@gmail.com",
            date: "Tue 5:40am",
            amount: "₦300,000.00",
            bonus: "10% Bonus",
            property: "Palmgrove  Estate, Ikot Akpan Etok, Ibesikpo Asutan, Akwa ibom State",
            type: "438 sqm ・Residential ・ Land"
        },
        {
            name: "TBF Bakery",
            email: "olivia@gmail.com",
            date: "Tue 5:40am",
            amount: "₦300,000.00",
            bonus: "10% Bonus",
            property: "Palmgrove  Estate, Ikot Akpan Etok, Ibesikpo Asutan, Akwa ibom State",
            type: "438 sqm ・Residential ・ Land"
        },
        {
            name: "TBF Bakery",
            email: "olivia@gmail.com",
            date: "Tue 5:40am",
            amount: "₦300,000.00",
            bonus: "10% Bonus",
            property: "Palmgrove  Estate, Ikot Akpan Etok, Ibesikpo Asutan, Akwa ibom State",
            type: "438 sqm ・Residential ・ Land"
        },
        {
            name: "TBF Bakery",
            email: "olivia@gmail.com",
            date: "Tue 5:40am",
            amount: "₦300,000.00",
            bonus: "10% Bonus",
            property: "Palmgrove  Estate, Ikot Akpan Etok, Ibesikpo Asutan, Akwa ibom State",
            type: "438 sqm ・Residential ・ Land"
        }
    ]


    const { data, isLoading } = useFetchData<Array<ITransaction>>(`/admin/transactions`, "transactions");

    console.log(data);


    return (
        <LoadingAnimation loading={isLoading} > 
            <div className=" w-full flex gap-6 flex-col " >
                <div className=" w-full h-fit flex flex-col " >
                    <div className=" w-full flex gap-4 " >
                        <div className=" w-full h-[178px] flex flex-col p-4 border rounded-2xl " >
                            <p className=" text-bodyTextColor text-sm leading-5 " >Available Balance</p>
                            <p className=" text-[30px] font-medium leading-9 " >₦200,480,000.24</p>
                        </div>
                        <div className=" w-full h-[178px] flex flex-col p-4 border rounded-2xl " >
                            <div className=" w-10 h-10 rounded-full border flex justify-center items-center " >
                                <RiSafe2Fill color="#667085" />
                            </div>
                            <div className=" mt-auto  " >
                                <p className=" text-bodyTextColor text-sm leading-5 " >Total Investments</p>
                                <p className=" text-[30px] font-medium leading-9 " >₦60,000,000.01</p>
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
                            {data?.map((item, index) => {
                                return (
                                    <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                        <TableCell className=" flex gap-2 items-center ">
                                            <div className=" w-10 h-10 rounded-full bg-green-500 " />
                                            <div className=" flex flex-col " >
                                                <p className=" text-sm text-gray800 font-medium " >{item?.userId}</p>
                                                {/* <p className=" text-sm text-gray500 " >{item?.email}</p> */}
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
            </div>
        </LoadingAnimation>
    )
}
