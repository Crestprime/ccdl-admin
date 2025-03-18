import { RiChatAiLine } from "@remixicon/react";


export default function ConstructionComment() {

    const AtUser = (props: { name: string }) => {
        return (
            <span className=" py-1 rounded-2xl px-2 bg-gray100 text-gray800 text-xs font-medium " >@{props?.name}</span>
        )
    }

    return (
        <div className=" w-full flex flex-col gap-5 border rounded-2xl " >
            <div className=" w-full flex items-center border-b justify-between py-4 px-6 " >
                <p className=" font-semibold text-gray700 " >Updates</p>
                <div className=" flex items-center gap-2 text-gray500 " >
                    <RiChatAiLine size={"16px"} />
                    <p className=" font-medium text-sm  " >Add Comment</p>
                </div>
            </div>
            <div className=" w-full p-6 flex gap-6 flex-col " >
                <div className=" w-full relative h-[28px] flex justify-center items-center " >
                    <div className=" w-full h-[1px] bg-gray300 " />
                    <div className=" w-fit absolute z-10 px-2 h-[24px] text-gray700 text-sm font-medium bg-white flex justify-center items-center border rounded-[14px] " >
                        Today
                    </div>
                </div>
                <div className=" w-full flex flex-col gap-4 " >
                    <div className=" w-full flex items-center gap-3 " >
                        <div className=" w-6 h-6 rounded-full bg-red-400 " />
                        <div className=" flex gap-1 " >
                            <p className=" font-medium text-gray700 " >Bright Mba</p>
                            <p className=" text-sm text-gray500 " >Mentioned you in the comments</p>
                        </div>
                    </div>
                    <div className=" pb-4 ml-3 mt-[2px] pl-6 flex text-gray500 flex-col gap-4 " >
                        <p className=" font-medium  text-sm -mt-4 " >3 March  ・ 10.14 AM</p>
                        <div className=" flex flex-col gap-1 " >
                            <p className=" text-sm " >
                                <span className=" text-primary500 " >daniel emmanuel</span> Absolutely,  I don't think you understand what you want to keep there
                            </p>
                            <p className=" text-sm font-medium " >2 replies ・ <span className=" text-primary700 " >Show less</span></p>
                        </div>
                        <div className=" ml-5 flex flex-col gap-1 " >
                            <p className=" text-sm " >Hey <span className=" text-primary500 " >daniel emmanuel</span> Ask him to review thi document and send it back so we can make our amend as instructed on the call </p>
                            <p className=" text-sm " >2h ・ by <AtUser name="Bright Mba" /></p>
                        </div>
                        <div className=" ml-5 flex flex-col gap-1 " >
                            <p className=" text-sm " >Hey <span className=" text-primary500 " >daniel emmanuel</span> Ask him to review thi document and send it back so we can make our amend as instructed on the call </p>
                            <p className=" text-sm " >2h ・ by <AtUser name="Bright Mba" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
