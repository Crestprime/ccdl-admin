import { Label } from "@radix-ui/react-dropdown-menu";
import { Switch } from "../../ui/switch";
import { RiBarChartLine, RiDeleteBin2Line, RiFileCopyLine, RiFireFill, RiFlashlightLine, RiLink, RiPencilLine, RiVipCrown2Line } from "@remixicon/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { useFetchData } from "@/hooks/useFetchData";
import { IBuildingListingData } from "@/models/listing";
import { BathroomIcon, BedroomIcon, FloorIcon, HouseIcon, KitchenIcon, LivingroomIcon, PlotIcon } from "@/assets/svg";
import { dateFormat } from "@/utils/dateFormat";
import { numberFormat, numberFormatNaire } from "@/utils/formatNumberWithK";
import { LoadingAnimation } from "@/components/shared"; 
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ListingDetails() {


    const [searchParams] = useSearchParams();
    const type: any = searchParams.get("type");
    const id: any = searchParams.get("id");

    const { data, isLoading } = useFetchData<IBuildingListingData>(`/admin-property/property/${id}`, ["property", id+""]);

    const navigate = useNavigate()

    return (
        <LoadingAnimation loading={isLoading} >
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
                        <div role="button" onClick={() => navigate(
                            type === "buildings" ? `/dashboard/property/listings/edit-building?id=${data?.property?.id}&type=${type}` : `/dashboard/property/listings/edit-land?id=${data?.property?.id}&type=${type}`
                        )} className=" w-9 h-9 rounded-full border flex justify-center bg-[#3170F3] text-white items-center " >
                            <RiPencilLine size={"17px"} />
                        </div>
                    </div>
                </div>
                <div className=" w-full rounded-2xl flex h-[373px] gap-3 " >
                    <div className=" w-full rounded-2xl h-full bg-red-500 " >
                        <img src={data?.property?.media[0]} alt={data?.property?.media[0]} className=" w-full h-full object-cover rounded-2xl " />
                    </div>
                    <div className=" w-full grid grid-cols-2 gap-3 h-[373px] relative " >
                        {data?.property?.media?.map((item: string, index: number) => {
                            if (index !== 0 && index <= 4) {
                                return (
                                    <div key={index} className=" w-full h-[180px] rounded-2xl bg-gray-600 " >
                                        <img src={item} alt={item} className=" w-full h-[180px] object-cover rounded-2xl " />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className=" w-full flex gap-6 " >
                    <div className=" w-full flex flex-col p-4 gap-6 border rounded-2xl " >
                        <div className=" w-full flex flex-col gap-2 pb-6 border-b " >
                            <h3 className=" text-2xl font-semibold " >{data?.property?.name}</h3>
                            <p className=" text-sm text-bodyTextColor " >{data?.property?.address}</p>
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
                            <p>{data?.property?.description}</p>
                        </div>
                        <div className=" w-full flex gap-2 pb-5 border-b " >
                            <div className=" w-full " >
                                <p className=" font-medium " >Category: <span className=" font-normal " >{data?.property?.category}</span></p>
                            </div>
                            {data?.property?.category === "BUILDING" ?
                                <div className=" w-full " >
                                    <p className=" font-medium " >Building Type: <span className=" font-normal " >{data?.property?.buildingType}</span></p>
                                </div> :
                                <div className=" w-full " >
                                    <p className=" font-medium " >Topography: <span className=" font-normal " >{data?.property?.topography}</span></p>
                                </div>
                            }
                        </div>
                        {data?.property?.category === "BUILDING" ? (
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
                                        <TableRow className={` h-[72px] px-3 `} >
                                            <TableCell className="">Shell Finished</TableCell>
                                            <TableCell>{numberFormatNaire(data?.property?.shellFinishedPrice)}</TableCell>
                                            <TableCell>{numberFormatNaire(Number(data?.property?.shellFinishedPrice) / 3)}</TableCell>
                                            <TableCell>{numberFormatNaire(Number(data?.property?.shellFinishedPrice) / 6)}</TableCell>
                                            <TableCell>{numberFormatNaire(Number(data?.property?.shellFinishedPrice) / 12)}</TableCell>
                                        </TableRow>
                                        <TableRow className={` h-[72px] px-3 `} >
                                            <TableCell className="">Finished</TableCell>
                                            <TableCell>{numberFormatNaire(data?.property?.finishedPrice)}</TableCell>
                                            <TableCell>{numberFormatNaire(Number(data?.property?.finishedPrice) / 3)}</TableCell>
                                            <TableCell>{numberFormatNaire(Number(data?.property?.finishedPrice) / 6)}</TableCell>
                                            <TableCell>{numberFormatNaire(Number(data?.property?.finishedPrice) / 12)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                                <div className=" flex gap-4 items-center " >
                                    <p className=" font-semibold " >Plots & Price</p>
                                    {data?.plots && (
                                        <div className=" px-2 rounded-full bg-primary50 " >
                                            <p className=" font-OpenRunde-Medium font-medium text-xs " >{data?.plots?.length} {data?.plots?.length > 1 ? "plots" : "plot"}</p>
                                        </div>
                                    )}
                                </div>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Size (SQM)</TableHead>
                                            <TableHead>Outright</TableHead>
                                            <TableHead>3-Months</TableHead>
                                            <TableHead>6-Months</TableHead>
                                            <TableHead>12-Months</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {data?.plots?.map((item, index) => {
                                            return (
                                                <TableRow key={index} className={` h-[72px] px-3 `} >
                                                    <TableCell className="">{numberFormat(item?.plotSize)}</TableCell>
                                                    <TableCell>{numberFormatNaire(item?.price)}</TableCell>
                                                    <TableCell>{numberFormatNaire(Number(item?.price) / 3)}</TableCell>
                                                    <TableCell>{numberFormatNaire(Number(item?.price) / 6)}</TableCell>
                                                    <TableCell>{numberFormatNaire(Number(item?.price) / 12)}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                        )}
                        {data?.property?.category === "BUILDING" && (
                            <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                                <p className=" font-semibold " >Rooms and Layout</p>
                                <div className=" w-full grid grid-cols-4 " >
                                    <div className=" flex gap-3 items-center " >
                                        <BedroomIcon />
                                        <p className="  " >{data?.property?.bedrooms} Bedrooms</p>
                                    </div>
                                    <div className=" flex gap-3 items-center " >
                                        <BathroomIcon />
                                        <p className="  " >{data?.property?.bedrooms} Bathrooms</p>
                                    </div>
                                    <div className=" flex gap-3 items-center " >
                                        <KitchenIcon />
                                        <p className="  " >{data?.property?.kitchen} Kitchen</p>
                                    </div>
                                    <div className=" flex gap-3 items-center " >
                                        <LivingroomIcon />
                                        <p className="  " >{data?.property?.livingSpace} Living rooms</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {data?.property?.category === "BUILDING" && (
                            <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                                <p className=" font-semibold " >Property Size</p>
                                <div className=" w-full grid grid-cols-4 " >
                                    <div className=" flex gap-3 items-center " >
                                        <PlotIcon />
                                        <p className="  " >{data?.property?.squareFoot}sqm Plot</p>
                                    </div>
                                    <div className=" flex gap-3 items-center " >
                                        <HouseIcon />
                                        <p className="  " >{data?.property?.lotSize}sqm house</p>
                                    </div>
                                    <div className=" flex gap-3 items-center " >
                                        <FloorIcon />
                                        <p className="  " >{data?.property?.floors} floors</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                            <p className=" font-semibold " >Key Features</p>
                            <p>
                                {data?.property?.features?.map((item: string, index: number) => {
                                    if (data?.property?.features?.length === index + 1) {
                                        return (
                                            <span key={index} >{item}</span>
                                        )
                                    } else {
                                        return (
                                            <span key={index} >{item}, </span>
                                        )
                                    }
                                })}
                            </p>
                            {data?.property?.category === "BUILDING" && (
                                <div className=" w-full flex-col flex gap-2 mt-3 " >
                                    <div className=" flex items-center gap-1 " >
                                        <p className=" font-medium " >Parking space:</p>
                                        <p>{data?.property?.parkingSpace?.map((item: string, index: number) => {
                                            if (data?.property?.parkingSpace?.length === index + 1) {
                                                return (
                                                    <span key={index} >{item}</span>
                                                )
                                            } else {
                                                return (
                                                    <span key={index} >{item}, </span>
                                                )
                                            }
                                        })}</p>
                                    </div>
                                    <div className=" flex items-center gap-1 " >
                                        <p className=" font-medium " >Outdoor Space:</p>
                                        <p>
                                            {data?.property?.parkingSpace?.map((item: string, index: number) => {
                                                if (data?.property?.parkingSpace?.length === index + 1) {
                                                    return (
                                                        <span key={index} >{item}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <span key={index} >{item}, </span>
                                                    )
                                                }
                                            })}
                                        </p>
                                    </div>
                                    <div className=" flex items-center gap-1 " >
                                        <p className=" font-medium " >Heating and Cooling:</p>
                                        <p>
                                            {data?.property?.heatingAndCooling?.map((item: string, index: number) => {
                                                if (data?.property?.heatingAndCooling?.length === index + 1) {
                                                    return (
                                                        <span key={index} >{item}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <span key={index} >{item}, </span>
                                                    )
                                                }
                                            })}
                                        </p>
                                    </div>
                                    <div className=" flex items-center gap-1 " >
                                        <p className=" font-medium " >Energy Efficiency:</p>
                                        <p>
                                            {data?.property?.energyEfficiency?.map((item: string, index: number) => {
                                                if (data?.property?.energyEfficiency?.length === index + 1) {
                                                    return (
                                                        <span key={index} >{item}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <span key={index} >{item}, </span>
                                                    )
                                                }
                                            })}
                                        </p>
                                    </div>
                                    <div className=" flex items-center gap-1 " >
                                        <p className=" font-medium " >Security:</p>
                                        <p>
                                            {data?.property?.security?.map((item: string, index: number) => {
                                                if (data?.property?.security?.length === index + 1) {
                                                    return (
                                                        <span key={index} >{item}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <span key={index} >{item}, </span>
                                                    )
                                                }
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                            <p className=" font-semibold " >Amenities and Community Features</p>
                            <div className=" w-full flex-col flex gap-2 mt-3 " >
                                <div className=" flex items-center gap-1 " >
                                    <p className=" font-medium " >Community Amenities:</p>
                                    <p>
                                        {data?.property?.communityAmenities?.map((item: string, index: number) => {
                                            if (data?.property?.communityAmenities?.length === index + 1) {
                                                return (
                                                    <span key={index} >{item}</span>
                                                )
                                            } else {
                                                return (
                                                    <span key={index} >{item}, </span>
                                                )
                                            }
                                        })}
                                    </p>
                                </div>
                                <div className=" flex items-center gap-1 " >
                                    <p className=" font-medium " >Nearby Public Transport:</p>
                                    <p>
                                        {data?.property?.publicTransport?.map((item: string, index: number) => {
                                            if (data?.property?.publicTransport?.length === index + 1) {
                                                return (
                                                    <span key={index} >{item}</span>
                                                )
                                            } else {
                                                return (
                                                    <span key={index} >{item}, </span>
                                                )
                                            }
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full flex gap-2 flex-col pb-5 border-b " >
                            <p className=" font-semibold " >Development and Restrictions</p>
                            <div className=" w-full flex-col flex gap-2 mt-3 " >
                                <div className=" flex items-center gap-1 " >
                                    <p className=" font-medium " >Development:</p>
                                    <p>
                                        {data?.property?.developmentRestriction?.map((item: string, index: number) => {
                                            if (data?.property?.developmentRestriction?.length === index + 1) {
                                                return (
                                                    <span key={index} >{item}</span>
                                                )
                                            } else {
                                                return (
                                                    <span key={index} >{item}, </span>
                                                )
                                            }
                                        })}
                                    </p>
                                </div>
                                <div className=" flex items-center gap-1 " >
                                    <p className=" font-medium " >Restrictions:</p>
                                    <p>
                                        {data?.property?.buildingRestrictions}
                                    </p>
                                </div>
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
                                    <p className=" text-sm font-normal text-bodyTextColor ">Created {dateFormat(data?.property?.createdAt)} by Stephen Jude</p>
                                </div>
                            </div>
                            {/* <div className=" w-full border rounded-2xl flex flex-col p-4 gap-3 " >
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </LoadingAnimation>
    )
}