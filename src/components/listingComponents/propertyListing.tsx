import { CreateBuildingListing, CreateLandListing } from "@/models/listing"
import { numberFormat } from "@/utils/formatNumberWithK"
import { textLimit } from "@/utils/textlimit"
// import { RiCompass4Fill, RiFireFill } from "@remixicon/react"
import { useNavigate } from "@tanstack/react-router"
// import { Key } from "react"

export default function PropertyListing({data, type}: {data: Array<CreateBuildingListing & CreateLandListing & any>, type: "buildings" | "lands"}) {

    // const data = ["hot", "sold", "hot", "hot", "sold", "sold", "hot", "hot"]

    const navigate = useNavigate()

    return (
        <div className=" w-full grid grid-cols-4 gap-6 pb-6" >
            {data?.map((item, index) => (
                <div onClick={()=> navigate({
                    to: `/dashboard/property/listings/details?id=${item?.id}&type=${type}`,
                  })} role="button" key={index} className=" w-full flex flex-col gap-2 pb-4 rounded-xl" >
                    <div className=" w-full h-[212px] rounded-xl relative " >
                        <img src={item?.media[0]} alt={item?.name} className=" w-full h-full object-cover rounded-xl " />
                        {/* <div className={` absolute ${item === "hot" ? "text-[#7A5AF8]" : "text-[#F04438]"} pl-[6px] pr-2 py-1 bg-white rounded-2xl top-4 left-4 flex gap-[2px] items-center `} >
                            {item === "hot" ? (
                                <RiFireFill size={"13px"} />
                            ): (
                                <RiCompass4Fill size={"13px"} />
                            )}
                            <p className=" font-semibold text-xs " >{item === "hot" ? "Hot" : "Sold"}</p>
                        </div> */}
                        <div className=" w-full bottom-4 absolute flex gap-2 justify-center items-center " >
                            <div className=" w-2 h-2 rounded-full bg-[#FCFCFD] " />
                            <div className=" w-2 h-2 rounded-full bg-[#FFFFFF99] " />
                            <div className=" w-2 h-2 rounded-full bg-[#FFFFFF99] " />
                        </div>
                    </div>
                    <p className=" font-semibold text-lg mt-3 leading-4 " >{textLimit(item?.address, 30)}</p>
                    <p className=" text-bodyTextColor text-sm leading-[14px] " >{item?.name} <span>{item?.category}</span></p>
                    <p className=" font-medium leading-5 " >{numberFormat(item?.finishedPrice)}<span className=" text-sm text-bodyTextColor " >Per plot</span></p>
                </div>
            ))}
        </div>
    )
}
