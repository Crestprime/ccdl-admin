import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useNavigate } from "@tanstack/react-router";
// import { BuildingImage, EstateBuildingImage, EstateLandImage, LandImage } from "@/assets/svg";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { useState } from "react";




export default function CreateListingBtn() {

    const navigate = useNavigate()
    const [tab, setTab] = useState("estate-building")
    const [isOpen, setIsOpen] = useState(false);

    const clickHanlder = () => {
        if (tab.includes("building")) {
            navigate({
                to: `/dashboard/property/listings/create-building?type=${tab}`
            })
        } else {
            navigate({
                to: `/dashboard/property/listings/create-land?type=${tab}`
            })
        }
    }

    return (
        <>
            <Button variant={"main"} type="button" onClick={() => setIsOpen(true)} className=" h-[40px] text-sm font-medium rounded-full " >
                Add Listing
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <button className="hidden" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[375px]">
                    <DialogHeader>
                        <DialogTitle>Create Listing</DialogTitle>
                        <DialogDescription>
                            Choose the type of listing you want to create
                        </DialogDescription>
                    </DialogHeader>
                    <RadioGroup onValueChange={setTab} defaultValue={tab} >
                        <div className="grid grid-cols-2 gap-4 py-4  " >
                            <div className=" w-full p-2 rounded-[8px] bg-primary25 flex flex-col gap-2 " >
                                <div style={{ boxShadow: "0px 0px 0px 2px #0000000D" }} className=" relative bg-white rounded-[8px] " >
                                    {/* <EstateBuildingImage /> */}
                                    <img src="/images/estatebuilding.png" alt="estatebuildiing" />
                                    <RadioGroupItem className=" absolute top-2 right-2 text-primary500 " value="estate-building" />
                                </div>
                                <p className=" text-gray900 font-OpenRunde-Medium text-sm " >Estate Buildings</p>
                            </div>
                            <div className=" w-full p-2 rounded-[8px] bg-primary25 flex flex-col gap-2 " >
                                <div style={{ boxShadow: "0px 0px 0px 2px #0000000D" }} className=" relative bg-white rounded-[8px] " >
                                    {/* <EstateLandImage /> */}
                                    <img src="/images/estateland.png" alt="estateland" />
                                    <RadioGroupItem className=" absolute top-2 right-2 text-primary500 " value="estate-lands" />
                                </div>
                                <p className=" text-gray900 font-OpenRunde-Medium text-sm " >Estate Lands</p>
                            </div>
                            <div className=" w-full p-2 rounded-[8px] bg-primary25 flex flex-col gap-2 " >
                                <div style={{ boxShadow: "0px 0px 0px 2px #0000000D" }} className=" relative bg-white rounded-[8px] " >
                                    {/* <BuildingImage /> */}
                                    <img src="/images/building.png" alt="building" />
                                    <RadioGroupItem className=" absolute top-2 right-2 text-primary500 " value="buildings" />
                                </div>
                                <p className=" text-gray900 font-OpenRunde-Medium text-sm " >Buildings</p>
                            </div>
                            <div className=" w-full p-2 rounded-[8px] bg-primary25 flex flex-col gap-2 " >
                                <div style={{ boxShadow: "0px 0px 0px 2px #0000000D" }} className=" relative bg-white rounded-[8px] " >
                                    {/* <LandImage /> */}
                                    <img src="/images/land.png" alt="land" />
                                    <RadioGroupItem className=" absolute top-2 right-2 text-primary500 " value="lands" />
                                </div>
                                <p className=" text-gray900 font-OpenRunde-Medium text-sm " >Lands</p>
                            </div>
                        </div>
                    </RadioGroup>
                    <DialogFooter>
                        <Button variant={"outline"} onClick={() => setIsOpen(false)} className=" rounded-full " >Cancel</Button>
                        <Button variant={"main"} onClick={() => clickHanlder()} className=" rounded-full " >Create</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>


    )
}
