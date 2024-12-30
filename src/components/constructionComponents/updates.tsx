import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


export default function constructionUpdates() {
    return (
        <div className=" w-full flex flex-col gap-5 border rounded-2xl " > 
            <div className=" w-full flex items-center border-b justify-between py-4 px-6 " >
                <p className=" font-semibold text-gray700 " >Updates</p>
                <Select>
                    <SelectTrigger className="w-fit h-[28px] text-sm gap-2 rounded-[6px] text-gray700 font-medium ">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className=" w-full p-6 flex gap-6 flex-col " >
                <div className=" w-full relative h-[28px] flex justify-center items-center " >
                    <div className=" w-full h-[1px] bg-gray300 " />
                    <div className=" w-fit absolute z-10 px-2 h-[24px] text-gray700 text-sm font-medium bg-white flex justify-center items-center border rounded-[14px] " >
                        Today
                    </div>
                </div>
                <div className=" w-full flex flex-col gap-4 " >
                    <div className=" w-full flex items-center gap-2 " >
                        <div className=" w-6 h-6 rounded-full bg-red-400 " />
                        <div className=" flex gap-1 " >
                            <p className=" font-medium text-gray700 " >Bright Mba</p>
                            <p className=" text-sm text-gray500 " >Mentioned you in the comments</p>
                        </div>
                    </div>
                    <div className=" pb-4 ml-3 mt-[2px] border-l pl-6 flex flex-col gap-4 " >
                        <p className=" font-medium text-gray500 text-sm -mt-4 " >3 March  ・ 10.14 AM</p>
                        <div className=" w-full flex p-6 bg-gray100 rounded-2xl text-gray700 " >
                            <p>
                                Absolutely, <span className=" h-[24px] rounded-2xl py-[2px] px-2 bg-Indigo100 text-Indigo800 text-sm font-medium " >@micheal</span> I think the design of the framework should be prioritized so we can deliver on time, I hope you and everyone tagged to this proposal understands
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
