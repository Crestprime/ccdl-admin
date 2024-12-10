import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";


export default function CreateListing() {

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-end items-center " >
                <div className=" flex gap-4  " >
                    <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Cancel
                    </Button>
                    <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Save as Draft
                    </Button>
                    <Button variant={"main"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Publish
                    </Button>
                </div>
            </div>
            <div className=" w-full flex gap-4 " >
                <div className=" flex flex-col flex-1 border p-4 gap-6 rounded-2xl " >
                    <h3 className=" text-2xl font-semibold " >Estate Building</h3>
                    <p className=" font-semibold " >Basic information</p>
                    <div className=" w-full flex flex-col gap-4 " >
                        <div className=" flex flex-col gap-2 " >
                            <label className=" font-medium text-sm " >Estate Name</label>
                            <Input />
                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <label className=" font-medium text-sm " >Category</label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Data</SelectLabel>
                                        <SelectItem value={"option"}>Option</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <label className=" font-medium text-sm " >No. of Block/Apartment</label>
                            <Input />
                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <label className=" font-medium text-sm " >Type of Building</label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Data</SelectLabel>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <label className=" font-medium text-sm " >Description</label>
                            <Textarea className=" w-full h-[78px] " />
                        </div>
                        <div className=" flex flex-col gap-2 pb-6 border-b " >
                            <label className=" font-medium text-sm " >Tags</label>
                            <Input placeholder="Search" />
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Rooms and Layout</p>
                            <div className=" w-full grid grid-cols-2 gap-4 " >
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >No. of Bedroom</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >No. of Living Spaces</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className=" flex flex-col gap-2" >
                                    <label className=" font-medium text-sm " >No. of Kitchen</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className=" flex flex-col gap-2" >
                                    <label className=" font-medium text-sm " >No. of Bathroom</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Property Size</p>
                            <div className=" w-full grid grid-cols-2 gap-4 " >
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Square Footage</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Lot Size</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className=" flex flex-col gap-2" >
                                    <label className=" font-medium text-sm " >Number of Floors</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Key Features</p>
                            <div className=" flex flex-col gap-3 mt-2 " >

                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <div className=" flex flex-col gap-2 " >
                                        <p className=" font-medium " >Parking space</p>
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Garage</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Driverway</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Street parking</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <div className=" flex flex-col gap-2 " >
                                        <p className=" font-medium " >Outdoor Space</p>
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Yard</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Garden</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Patio</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Balcony</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Swimming Pool</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <div className=" flex flex-col gap-2 " >
                                        <p className=" font-medium " >Heating and Cooling</p>
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Central</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Furnace</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Air Conditioning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <div className=" flex flex-col gap-2 " >
                                        <p className=" font-medium " >Energy Efficiency</p>
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Solar</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Thermostats</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Insulation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <div className=" flex flex-col gap-2 " >
                                        <p className=" font-medium " >Security</p>
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Alarm</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Camera</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Gated Community</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Year Built and Condition</p>
                            <div className=" w-full grid grid-cols-2 gap-4 " >
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Year of Construction</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Conditions</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Data</SelectLabel>
                                                <SelectItem value={"option"}>Option</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2 " >
                                <label className=" font-medium text-sm " >Renovations</label>
                                <Input />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Amenities and Community Features</p>
                            <div className=" flex flex-col gap-3 mt-2 " >

                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <div className=" flex flex-col gap-2 " >
                                        <p className=" font-medium " >Community Amenities</p>
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Clubhouse</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Gym</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Parks</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Nearby School</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <div className=" flex flex-col gap-2 " >
                                        <p className=" font-medium " >Nearby Public Transport</p>
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Busstop</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Train Station</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Airport</p>
                                            </div>
                                            <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                                <Checkbox className=" !border-bodyTextColor " />
                                                <p className=" font-medium text-sm " >Sea Port</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 " >
                            <p className=" font-semibold " >Legal</p>
                            <div className=" flex flex-wrap gap-3 mt-2 " >
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Deed of Assignment</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >(C of O)</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Survey Plan</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Building Approval Plan</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Sales Agreement</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Receipts</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Letter of Allocation</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Governor's Consent</p>
                                </div>
                                <div className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                                    <Checkbox className=" !border-bodyTextColor " />
                                    <p className=" font-medium text-sm " >Utility Bills and Clearance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-fit " >
                    <div className=" w-[484px] flex flex-col gap-6 " >
                        <div className=" w-full grid grid-cols-3 gap-2 h-[162px] " >
                            <div className=" w-full h-full rounded-[8px] bg-[#F2F4F7] flex flex-col justify-center items-center " >

                            </div>
                            <div className=" w-full h-full bg-[#11101045] rounded-[8px] " >

                            </div>
                            <div className=" w-full flex flex-col h-full gap-2  " >
                                <div className=" w-full h-full rounded-[8px] bg-green-200 " >

                                </div>
                                <div className=" w-full h-full rounded-[8px] bg-green-200 " >

                                </div>
                            </div>
                        </div>
                        <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                            <p className=" font-semibold " >Price</p>
                            <div className=" w-full mt-1 flex flex-col gap-3 " >
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Shell finished</label>
                                    <Input />
                                </div>
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Finished</label>
                                    <Input />
                                </div>
                            </div>
                        </div>
                        <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                            <p className=" font-semibold " >Location</p>
                            <div className=" w-full mt-1 flex flex-col gap-3 " >
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Address</label>
                                    <Input />
                                </div>
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >L.G.A</label>
                                    <Input />
                                </div>
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >State</label>
                                    <Input />
                                </div>
                                <div className=" flex flex-col gap-2 " >
                                    <label className=" font-medium text-sm " >Country</label>
                                    <Input />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
