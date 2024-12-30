import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"


const data = [
    {
        name: "Sunset Villa - Unit A4",
        tenor: "6 months", 
        status: "Matured",
        date: "Nov 10, 2024",
        amount: "₦85,000,000 ",
    },
    {
        name: "Sunset Villa - Unit A4",
        tenor: "6 months", 
        status: "Withdrawn",
        date: "Nov 10, 2024",
        amount: "₦85,000,000 ",
    },
    {
        name: "Sunset Villa - Unit A4",
        tenor: "6 months", 
        status: "Active",
        date: "Nov 10, 2024",
        amount: "₦85,000,000 ",
    },
    {
        name: "Sunset Villa - Unit A4",
        tenor: "6 months", 
        status: "Matured",
        date: "Nov 10, 2024",
        amount: "₦85,000,000 ",
    }
]

export default function ClientInvestmentTable() {
    return (
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
                {data.map((item, index) => {
                    return (
                        <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                            <TableCell >
                                00{index+1}
                            </TableCell>
                            <TableCell>
                                {item?.name}
                            </TableCell>
                            <TableCell>
                                {item?.tenor}
                            </TableCell>
                            <TableCell>
                                <div className={` ${item?.status?.includes("Active") ? " text-blue800 bg-blue100 " : item?.status?.includes("Matured") ? " text-success800  bg-success100 " : " text-error800 bg-error100 "} px-2 py-[2px] rounded-2xl w-fit text-xs font-medium `} >
                                    {item?.status}
                                </div>
                            </TableCell>
                            <TableCell>
                                {item?.date}
                            </TableCell>
                            <TableCell>
                                {item?.amount}
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
