import { RiCompass4Fill, RiFireFill } from "@remixicon/react"
import { useNavigate } from "@tanstack/react-router"

export default function PropertyListing() {

    const data = ["hot", "sold", "hot", "hot", "sold", "sold", "hot", "hot"]

    const navigate = useNavigate()

    return (
        <div className=" w-full grid grid-cols-4 gap-6 pb-6" >
            {data?.map((item, index) => (
                <div onClick={()=> navigate({
                    to: '/dashboard/property/listings/details',
                  })} role="button" key={index} className=" w-full flex flex-col gap-2 " >
                    <div className=" w-full h-[212px] rounded-xl bg-green-500 pb-4 relative " >
                        <div className={` absolute ${item === "hot" ? "text-[#7A5AF8]" : "text-[#F04438]"} pl-[6px] pr-2 py-1 bg-white rounded-2xl top-4 left-4 flex gap-[2px] items-center `} >
                            {item === "hot" ? (
                                <RiFireFill size={"13px"} />
                            ): (
                                <RiCompass4Fill size={"13px"} />
                            )}
                            <p className=" font-semibold text-xs " >{item === "hot" ? "Hot" : "Sold"}</p>
                        </div>
                        <div className=" w-full bottom-4 absolute flex gap-2 justify-center items-center " >
                            <div className=" w-2 h-2 rounded-full bg-[#FCFCFD] " />
                            <div className=" w-2 h-2 rounded-full bg-[#FFFFFF99] " />
                            <div className=" w-2 h-2 rounded-full bg-[#FFFFFF99] " />
                        </div>
                    </div>
                    <p className=" font-semibold text-lg mt-3 leading-4 " >Ogbaku, Imo State</p>
                    <p className=" text-bodyTextColor text-sm leading-[14px] " >Crystal City Estates <span>Land</span></p>
                    <p className=" font-medium leading-5 " >₦40,000,000* <span className=" text-sm text-bodyTextColor " >Per plot</span></p>
                </div>
            ))}
        </div>
    )
}
