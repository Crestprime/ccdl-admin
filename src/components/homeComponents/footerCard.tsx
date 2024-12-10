import { RiArrowRightSLine, RiFolderOpenLine, RiStarSmileLine } from "@remixicon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";


export default function FooterCard() {


    const data = [
        {
            buildingname: "Luxury Duplex Construction",
            address: "12 Greenfield Avenue, Lekki, Lagos",
            user: "Dishari Tania",
            date: "August 1, 2024",
            status: "pending"
        },
        {
            buildingname: "Luxury Duplex Construction",
            address: "12 Greenfield Avenue, Lekki, Lagos",
            user: "Dishari Tania",
            date: "August 1, 2024",
            status: "success"
        },
        {
            buildingname: "Luxury Duplex Construction",
            address: "12 Greenfield Avenue, Lekki, Lagos",
            user: "Dishari Tania",
            date: "August 1, 2024",
            status: "pending"
        },
        {
            buildingname: "Luxury Duplex Construction",
            address: "12 Greenfield Avenue, Lekki, Lagos",
            user: "Dishari Tania",
            date: "August 1, 2024",
            status: "pending"
        },
    ]

    return (
        <div className=' w-full h-fit flex gap-4 ' >
            <div className=" w-full p-4 h-[374px] rounded-2xl flex flex-col border " >
                <div className=" flex gap-2 items-center " >
                    <RiFolderOpenLine />
                    <p className=" font-medium " >Construction</p>
                </div>
                <Tabs defaultValue="proposals" className="w-full mt-4 ">
                    <TabsList className="grid w-fit grid-cols-2 h-fit ">
                        <TabsTrigger className=" h-[36px] " value="proposals">Proposals</TabsTrigger>
                        <TabsTrigger className=" h-[36px] " value="ongoing">Ongoing</TabsTrigger>
                    </TabsList>
                    <TabsContent className=" w-full pt-3 max-h-[245px] overflow-y-auto " value="proposals">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Address</TableHead>
                                    <TableHead>User</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((item, index) => { 
                                        return (
                                            <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-[#f2f4f7]" : ""} `} key={index}>
                                                <TableCell className="">
                                                    <div className=" flex flex-col w-[280px] " >
                                                        <p className=" text-sm font-medium " >{item?.buildingname}</p>
                                                        <p className=" text-sm text-bodyTextColor " >{item?.address}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className=" flex items-center gap-2 " >
                                                        <div className=" w-8 h-8 rounded-full bg-red-600 " />
                                                        <p className=" text-sm " >{item?.user}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className={` h-[21px] w-fit px-3 gap-1 rounded-[8px] ${item?.status === "pending" ? "bg-[#FEF0C7]" : "bg-[#DCFAE6]"} flex items-center `} >
                                                        <div className={` w-[6px] h-[6px] rounded-full ${item?.status === "pending" ? "bg-[#F79009]" : "bg-[#17B26A]"} `} />
                                                        <p className={` ${item?.status === "pending" ? "text-[#93370D]" : "text-[#085D3A]"}  text-xs font-medium `} >{item?.status === "pending" ? "Pending" : "Accepted"}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right"> 
                                                    <p className=" text-sm " >{item?.date}</p>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </div>
            <div className=" w-fit " >
                <div className=" w-[352px] p-4 h-[374px] rounded-2xl flex flex-col border  " >
                    <div className=" flex gap-2 items-center " >
                        <RiStarSmileLine />
                        <p className=" font-medium " >Employe Spotlight</p>
                    </div>
                    <Tabs defaultValue="overview" className="w-full mt-4 ">
                        <TabsList className="grid w-full grid-cols-3 h-fit ">
                            <TabsTrigger className=" h-[36px] " value="overview">Overview</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="comments">Comments</TabsTrigger>
                            <TabsTrigger className=" h-[36px] " value="rewards">Rewards</TabsTrigger>
                        </TabsList>
                        <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="overview">
                            <div className=" flex items-center justify-between w-full gap-2 " >
                                <div className=" flex flex-col " >
                                    <p className=" font-medium text-sm " >Ashirbad Rudra</p>
                                    <p className=" text-xs text-bodyTextColor " >Staff of the Month, August 2024</p>
                                </div>
                                <div className=" flex items-center gap-1 " >
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-sm " >₦20,000</p>
                                        <p className=" text-xs text-bodyTextColor text-right ">Sep 18</p>
                                    </div>
                                    <RiArrowRightSLine />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-full gap-2 " >
                                <div className=" flex flex-col " >
                                    <p className=" font-medium text-sm " >Ashirbad Rudra</p>
                                    <p className=" text-xs text-bodyTextColor " >Staff of the Month, August 2024</p>
                                </div>
                                <div className=" flex items-center gap-1 " >
                                    <div className=" flex flex-col " >
                                        <p className=" font-medium text-sm " >₦20,000</p>
                                        <p className=" text-xs text-bodyTextColor text-right ">Sep 18</p>
                                    </div>
                                    <RiArrowRightSLine />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
