import { RiArrowUpCircleFill, RiAttachmentLine, RiChatAiLine, RiFilter3Line, RiSearchLine, RiUpload2Line } from "@remixicon/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";


export default function ConstructionDocument() {

    const data = [
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
    ]

    return (
        <div className=" w-full flex flex-col border rounded-2xl " >
            <div className=" w-full flex items-center border-b justify-between py-4 px-6 " >
                <p className=" font-semibold text-gray700 " >Documents</p>
                <div className=" flex gap-1 items-center text-gray500 font-medium text-sm " >
                    <RiUpload2Line size={"20px"} />
                    Upload Document
                </div>
            </div>
            <div className=" w-full  h-[620px] flex gap-6 rounded-b-2xl bg-gray50 " >
                <div className=" w-full max-h-[620px]  p-6 pr-0 grid overflow-y-auto grid-cols-4 gap-4 " >
                    {data?.map((item, index) => {
                        return (
                            <div key={index+item} className=" w-full hover:border border-gray500 rounded-xl h-fit p-6 flex flex-col gap-4 bg-white " >
                                <div className=" w-6 h-6 bg-red-700  " >

                                </div>
                                <div className=" flex flex-col " >
                                    <p className=" text-gray800 text-xs " >Document name .pdf</p>
                                    <p className=" text-gray600 text-xs " >345 kb</p>
                                </div>
                                <div className=" flex items-center gap-4 " >
                                    <RiUpload2Line size={"18px"} />
                                    <RiChatAiLine size={"18px"} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className=" w-fit  pl-0 p-6 " >
                    <div className=" w-[283px] bg-white h-full flex flex-col shadow-sm rounded-[8px]" >
                        <div className=" flex items-center gap-2 p-4 " >
                            <div className=" w-6 h-6 bg-red-700  " >

                            </div>
                            <div className=" flex flex-col " >
                                <p className=" text-gray800 text-xs " >Document name .pdf</p>
                                <p className=" text-gray600 text-xs " >345 kb</p>
                            </div>
                        </div>
                        <div className=" w-full px-4 py-2 border-t border-b text-gray500 justify-between flex items-center " >
                            <div className=" flex items-center " >
                                <Select>
                                    <SelectTrigger className="w-fit h-[28px] !outline-none border-transparent active:border-transparent text-xs gap-2 rounded-[6px] border-0 shadow-none text-gray600 font-medium ">

                                        <RiFilter3Line size={"12px"} />
                                        <SelectValue placeholder="Newest" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <RiSearchLine size={"16px"} />
                        </div>
                        <div className=" w-full flex-1 overflow-y-auto flex flex-col gap-4 p-4 " >
                            <div className=" flex flex-col gap-2 " >
                                <div className=" flex items-center gap-1 " >
                                    <div className=" w-5 h-5 rounded-full bg-blue-400 " />
                                    <p className=" font-semibold text-xs text-gray700 " >Bright Mba <span className=" font-medium text-xs text-gray500 " >3h</span></p>
                                </div>
                                <p className=" text-xs " ><span className=" text-primary500 font-medium " >daniel emmanuel</span>  I don't think you understand what you want to keep there</p>
                            </div>
                        </div>
                        <div className=" w-full p-4 h-fit mt-auto " >
                            <div className=" w-full h-9 flex items-center rounded-[10px] px-2 gap-1 text-gray300 bg-gray50 " >
                                <div className=" w-fit " >
                                    <div className=" w-[18px] h-[18px] bg-red-400 rounded-full " />
                                </div>
                                <Input placeholder="Add a comment..." className=" w-full placeholder:text-gray-400 focus-visible:ring-0 bg-gray50 outline-none shadow-none h-full hover:border-transparent active:border-transparent " />
                                <div className=" w-fit " >
                                    <RiAttachmentLine size={"16px"} className=" mt-[3px] " />
                                </div>
                                <p>@</p>
                                <div className=" w-fit " >
                                    <RiArrowUpCircleFill size={"20px"} className=" mt-[3px] " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
