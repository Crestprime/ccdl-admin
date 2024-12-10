import { Label } from "@radix-ui/react-dropdown-menu";
import { Switch } from "../ui/switch";
import { RiBarChartLine, RiDeleteBin2Line, RiFileCopyLine, RiFireFill, RiFlashlightLine, RiHome2Line, RiLink, RiPencilLine, RiVipCrown2Line } from "@remixicon/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { BedIcon } from "lucide-react";


const data = [
    {
        type: "Shell Finished",
        outright: "₦85,000,000 ",
        threeMonths: "₦85,000,000 ",
        sixmonth: "₦85,000,000 ",
        twelvemonth: "₦85,000,000 "
    },
    {
        type: "Shell Finished",
        outright: "₦85,000,000 ",
        threeMonths: "₦85,000,000 ",
        sixmonth: "₦85,000,000 ",
        twelvemonth: "₦85,000,000 "
    },
    {
        type: "Shell Finished",
        outright: "₦85,000,000 ",
        threeMonths: "₦85,000,000 ",
        sixmonth: "₦85,000,000 ",
        twelvemonth: "₦85,000,000 "
    },
    {
        type: "Shell Finished",
        outright: "₦85,000,000 ",
        threeMonths: "₦85,000,000 ",
        sixmonth: "₦85,000,000 ",
        twelvemonth: "₦85,000,000 "
    },
]

export default function ListingDetails() {

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-end items-center " >
                <div className=" flex gap-4  " >
                    <div className="flex items-center space-x-2">
                        <Switch color="#17B26A" id="airplane-mode" />
                        <Label >Active</Label>
                    </div>
                    <div role="button" className=" w-9 h-9 rounded-full border flex justify-center items-center " >
                        <RiLink size={"17px"} />
                    </div>
                    <div role="button" className=" w-9 h-9 rounded-full border flex justify-center items-center " >
                        <RiFileCopyLine size={"17px"} />
                    </div>
                    <div role="button" className=" w-9 h-9 rounded-full border flex justify-center items-center " >
                        <RiBarChartLine size={"17px"} />
                    </div>
                    <div role="button" className=" w-9 h-9 rounded-full border border-[#FECDCA] text-[#D92D20] bg-[#FEF3F2] flex justify-center items-center " >
                        <RiDeleteBin2Line size={"17px"} />
                    </div>
                    <div role="button" className=" w-9 h-9 rounded-full border flex justify-center bg-[#3170F3] text-white items-center " >
                        <RiPencilLine size={"17px"} />
                    </div>
                </div>
            </div>
            <div className=" w-full rounded-2xl flex h-[373px] gap-3 " >
                <div className=" w-full rounded-2xl h-full bg-red-500 " >

                </div>
                <div className=" w-full grid grid-cols-2 gap-3 " >
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                </div>
            </div>
            <div className=" w-full flex gap-6 " >
                <div className=" w-full flex flex-col p-4 gap-6 border rounded-2xl " >
                    <div className=" w-full flex flex-col gap-2 pb-6 border-b " >
                        <h3 className=" text-2xl font-semibold " >Block C, Gold Town Estate</h3>
                        <p className=" text-sm text-bodyTextColor " >Eliogbolo, Port Harcourt, Rivers State</p>
                        <div className={` text-[#7A5AF8]  rounded-2xl top-4 left-4 flex gap-[2px] items-center `} >
                            <RiFireFill size={"20px"} />
                            <p className=" font-semibold text-sm " > Hot</p>
                        </div>
                    </div>
                    <div className=" w-full flex gap-2 pb-5 border-b " >
                        <div className=" flex gap-2 " >
                            <RiVipCrown2Line size={"22px"} />
                            <div className=" flex flex-col " >
                                <p className=" font-semibold " >Popular</p>
                                <p className=" text-sm text-bodyTextColor " >Over 100+ people have viewed this property</p>
                            </div>
                        </div>
                        <div className=" flex gap-2 " >
                            <RiFlashlightLine size={"22px"} />
                            <div className=" flex flex-col " >
                                <p className=" font-semibold " >Fast Developing</p>
                                <p className=" text-sm text-bodyTextColor " >This property is situated in a fast growing neigbourhood</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-2 pb-5 border-b " >
                        <p className=" font-semibold " >Description</p>
                        <p>Welcome to Gold Town Estate, Eliogbolo, Port Harcourt. At Capital City Estates, we are dedicated to providing luxurious and comfortable living spaces tailored to meet your lifestyle needs. Our 4 Bedroom Semi-Detached Duplexes offer the perfect blend of modern design and practicality, set within a secure and eco-friendly environment. With flexible payment plans and a commitment to quality, we strive to make your dream home a reality. Discover your ideal living space with us today.</p>
                    </div>
                    <div className=" w-full flex gap-2 pb-5 border-b " >
                        <div className=" w-full " >
                            <p className=" font-medium " >Category: <span className=" font-normal " >Residential</span></p>
                        </div>
                        <div className=" w-full " >
                            <p className=" font-medium " >Building Type: <span className=" font-normal " >Semi-detached</span></p>
                        </div>
                    </div>
                    <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                        <p className=" font-semibold " >Units & Price</p>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Outright</TableHead>
                                    <TableHead>3-Months</TableHead>
                                    <TableHead>6-Months</TableHead>
                                    <TableHead>12-Months</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((item, index) => {
                                    return (
                                        <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-[#f2f4f7]" : ""} `} key={index}>
                                            <TableCell className="">{item?.type}</TableCell>
                                            <TableCell>{item?.outright}</TableCell>
                                            <TableCell>{item?.threeMonths}</TableCell>
                                            <TableCell>{item?.sixmonth}</TableCell>
                                            <TableCell>{item?.twelvemonth}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                        <p className=" font-semibold " >Rooms and Layout</p>
                        <div className=" w-full grid grid-cols-4 " >
                            <div className=" flex gap-3 items-center " >
                                <BedIcon />
                                <p className="  " >4 Bedrooms</p>
                            </div>
                            <div className=" flex gap-3 items-center " >
                                <BedIcon />
                                <p className="  " >4 Bedrooms</p>
                            </div>
                            <div className=" flex gap-3 items-center " >
                                <BedIcon />
                                <p className="  " >4 Bedrooms</p>
                            </div>
                            <div className=" flex gap-3 items-center " >
                                <BedIcon />
                                <p className="  " >4 Bedrooms</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                        <p className=" font-semibold " >Property Size</p>
                        <div className=" w-full grid grid-cols-3 " >
                            <div className=" flex gap-3 items-center " >
                                <RiHome2Line />
                                <p className="  " >4 Bedrooms</p>
                            </div>
                            <div className=" flex gap-3 items-center " >
                                <BedIcon />
                                <p className="  " >4 Bedrooms</p>
                            </div>
                            <div className=" flex gap-3 items-center " >
                                <BedIcon />
                                <p className="  " >4 Bedrooms</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                        <p className=" font-semibold " >Key Features</p>
                        <div className=" w-full flex-col flex gap-2 mt-3 " >
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Parking space:</p>
                                <p>Garage, Driver Way</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Outdoor Space:</p>
                                <p>Yard, Garden</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Heating and Cooling:</p>
                                <p>Central, Air Conditioning</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Energy Efficiency:</p>
                                <p>Solar, Thermostats</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Security:</p>
                                <p>Solar, Thermostats</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                        <p className=" font-semibold " >Amenities and Community Features</p>
                        <div className=" w-full flex-col flex gap-2 mt-3 " >
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Community Amenities:</p>
                                <p>Gym, Clubhouse</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Nearby Public Transport:</p>
                                <p>Bus Stop, Train Station</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Heating and Cooling:</p>
                                <p>Central, Air Conditioning</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Energy Efficiency:</p>
                                <p>Solar, Thermostats</p>
                            </div>
                            <div className=" flex items-center gap-1 " >
                                <p className=" font-medium " >Security:</p>
                                <p>Solar, Thermostats</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex gap-2 flex-col pb-5 " >
                        <p className=" font-semibold " >Legal Documents</p>
                        <div className=" w-full flex-col flex gap-2 mt-3 " >
                            <p>Deed of Assignment, Certificate of Occupancy (C of O), Survey Plan, Building Approval Plan, Sales Agreement, Receipts, Governor's Consent, Transfer of Title, Letter of Allocation, Utility Bills and Clearance.</p>
                        </div>
                    </div>
                </div>
                <div className=" w-fit " >
                    <div className=" w-[440px] flex flex-col gap-4 " >
                        <div className=" w-full border rounded-2xl flex p-4 gap-3 " >
                            <div className=" w-10 h-10 rounded-full bg-blue-600 " >

                            </div>
                            <div className=" flex flex-col gap-2 " >
                                <div className=" flex flex-col pb-2 border-b " >
                                    <p className=" font-semibold " >Sold by Capital City</p>
                                    <p className=" text-sm text-bodyTextColor " >12 year leading as a Real Estate Company</p>
                                </div>
                                <p className=" text-sm font-normal text-bodyTextColor ">Created 29/10/2024 by Stephen Jude</p>
                            </div>
                        </div>
                        <div className=" w-full border rounded-2xl flex flex-col p-4 gap-3 " >
                            <p className=" font-semibold " >Legal Documents</p>
                            <div className=" w-full flex-col flex gap-2 " >
                                <p className=" text-bodyTextColor " >Deed of Assignment, Certificate of Occupancy (C of O), Survey Plan, Building Approval Plan, Sales Agreement, Receipts, Governor's Consent, Transfer of Title, Letter of Allocation, Utility Bills and Clearance.</p>
                            </div>
                        </div>
                        <div className=" w-full border rounded-2xl flex flex-col p-4 gap-3 " >
                            <p className=" font-semibold " >Property Location</p>
                            <div className=" w-full rounded-2xl h-[400px] border " >

                            </div>
                            <p className=" text-bodyTextColor " >Satellite view of palmgroove estate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}