import { useNavigate } from "@tanstack/react-router"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const data = [
    {
        name: "Noémie Caliste",
        propertyno: "1",
        amount: "₦85,000,000 ",
        active: "2",
        status: "Verified",
        date: "Nov 10, 2024",
        activity: "(Login)",
    },
    {
        name: "Noémie Caliste",
        propertyno: "1",
        amount: "₦85,000,000 ",
        active: "2",
        status: "Not Verified",
        date: "Nov 10, 2024",
        activity: "(Login)",
    },
    {
        name: "Noémie Caliste",
        propertyno: "1",
        amount: "₦85,000,000 ",
        active: "2",
        status: "Pending",
        date: "Nov 10, 2024",
        activity: "(Login)",
    },
    {
        name: "Noémie Caliste",
        propertyno: "1",
        amount: "₦85,000,000 ",
        active: "2",
        status: "Verified",
        date: "Nov 10, 2024",
        activity: "(Login)",
    },
    {
        name: "Noémie Caliste",
        propertyno: "1",
        amount: "₦85,000,000 ",
        active: "2",
        status: "Verified",
        date: "Nov 10, 2024",
        activity: "(Login)",
    },
    {
        name: "Noémie Caliste",
        propertyno: "1",
        amount: "₦85,000,000 ",
        active: "2",
        status: "Verified",
        date: "Nov 10, 2024",
        activity: "(Login)",
    },
]

export default function ClientTable() {

    const navigate = useNavigate()

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Client Name</TableHead>
                    <TableHead>No. of Property </TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Active Investments</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Joined</TableHead>
                    <TableHead>Last Activity</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => {
                    return (
                        <TableRow onClick={() => navigate({
                            to: "/dashboard/users/clients/details"
                        })} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                            <TableCell className="">
                                <div className=" flex gap-2 items-center " >
                                    <div className=" w-10 h-10 rounded-full bg-blue-400 " />
                                    <p>{item?.name}</p>
                                </div>
                            </TableCell>
                            <TableCell >
                                {item?.propertyno}
                            </TableCell>
                            <TableCell>
                                {item?.amount}
                            </TableCell>
                            <TableCell>
                                {item?.active}
                            </TableCell>
                            <TableCell>
                                <div className={` ${item?.status?.includes("Not") ? " text-error800 bg-error100 " : item?.status?.includes("Verified") ? " text-success800  bg-success100 " : " text-warning800 bg-warning100 "} px-2 py-[2px] rounded-2xl w-fit text-xs font-medium `} >
                                    {item?.status}
                                </div>
                            </TableCell>
                            <TableCell>
                                {item?.date}
                            </TableCell>
                            <TableCell>
                                <div className=" flex flex-col " >
                                    <p>{item?.date}</p>
                                    <p>{item?.activity}</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
