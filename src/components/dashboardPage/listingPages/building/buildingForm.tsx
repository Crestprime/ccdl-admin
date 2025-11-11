import { ListingCheckBox, ListingImage } from "@/components/listingComponents";
import { FormInput, FormSelect, FormTextArea } from "@/components/shared";
import { buildingTypes, numberData, featuresData } from "@/models/dummydata";
import { Switch } from "@radix-ui/react-switch";
import { RiSearch2Line } from "@remixicon/react"; 


export default function BuildingForm ({ formik, type } : { formik: any, type?: string }) {
    return (
        <div className=" w-full flex gap-4 " >
            <div className=" flex flex-col flex-1 border p-4 gap-6 rounded-2xl " >
                <h3 className=" text-2xl font-semibold " >{type?.includes("estate") ? "Estate Building" : "Building"}</h3>
                <p className=" font-semibold " >Basic information</p>
                <div className=" w-full flex flex-col gap-4 " >
                    <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Estate Name" name="name" /> 
                    {/* <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="No. of Block/Apartment" name="name" /> */}
                    <FormSelect setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Type of Building" optionData={buildingTypes} name="buildingType" />
                    <FormTextArea setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Description" name="description" />
                    <div className=" pb-6 border-b " >
                        <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} hasFrontIcon={true} icon={<RiSearch2Line size={"20px"} />} label="Tags" name="tags[0]" placeholder="Search" />
                    </div>
                    <div className=" flex flex-col gap-3 pb-6 border-b " >
                        <p className=" font-semibold " >Rooms and Layout</p>
                        <div className=" w-full grid grid-cols-2 gap-4 " >
                            <FormSelect setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="No. of Bedroom" optionData={numberData} name="bedrooms" />
                            <FormSelect setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="No. of Living Spaces" optionData={numberData} name="livingSpace" />
                            <FormSelect setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="No. of Kitchen" optionData={numberData} name="kitchen" />
                            <FormSelect setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="No. of Bathroom" optionData={numberData} name="bathroom" />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-3 pb-6 border-b " >
                        <p className=" font-semibold " >Property Size</p>
                        <div className=" w-full grid grid-cols-2 gap-4 " >
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Square Footage" type="number" name="squareFoot" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Lot Size" type="number" name="lotSize" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Number of Floors" type="number" name="floors" />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-3 pb-6 border-b " >
                        <p className=" font-semibold " >Key Features</p>
                        <div className=" flex flex-col gap-3 mt-2 " >
                            <div className=" flex gap-3 " >
                                <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                <ListingCheckBox name="parkingSpace" setValue={formik?.setFieldValue} value={formik?.values} listData={featuresData?.parking} label={"Parking space"} />
                            </div>
                            <div className=" flex gap-3 " >
                                <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                <ListingCheckBox name="outdoorSpace" setValue={formik?.setFieldValue} value={formik?.values}  listData={featuresData?.outdoor} label={"Outdoor Space"} />
                            </div>
                            <div className=" flex gap-3 " >
                                <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                <ListingCheckBox name="heatingAndCooling"  setValue={formik?.setFieldValue} value={formik?.values}  listData={featuresData?.heatingcooling} label={"Heating and Cooling"} />
                            </div>
                            <div className=" flex gap-3 " >
                                <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                <ListingCheckBox name="energyEfficiency" setValue={formik?.setFieldValue} value={formik?.values}  listData={featuresData?.energyefficiency} label={"Energy Efficiency"} />
                            </div>
                            <div className=" flex gap-3 " >
                                <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                <ListingCheckBox name="security" setValue={formik?.setFieldValue} value={formik?.values} listData={featuresData?.security} label={"Security"} />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-3 pb-6 border-b " >
                        <p className=" font-semibold " >Year Built and Condition</p>
                        <div className=" w-full grid grid-cols-2 gap-4 " > 
                            <FormInput  setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Year of Construction" name="yearOfConstruction" />
                            <FormInput  setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Conditions" name="condition" />
                        </div>
                        {/* <FormInput label="Renovations" name="floors" /> */}
                    </div>
                    <div className=" flex flex-col gap-3 pb-6 border-b " >
                        <p className=" font-semibold " >Amenities and Community Features</p>
                        <div className=" flex flex-col gap-3 mt-2 " >
                            <div className=" flex gap-3 " >
                                <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                <ListingCheckBox name="communityAmenities" setValue={formik?.setFieldValue} value={formik?.values} listData={featuresData?.communityamenities} label={"Community Amenities"} />
                            </div>
                            <div className=" flex gap-3 " >
                                <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                <ListingCheckBox name="publicTransport" setValue={formik?.setFieldValue} value={formik?.values} listData={featuresData?.nearbypublictransport} label={"Nearby Public Transport"} />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className=" w-fit " >
                <div className=" w-[484px] flex flex-col gap-6 " >
                    <ListingImage />
                    <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                        <p className=" font-semibold " >Price</p>
                        <div className=" w-full mt-1 flex flex-col gap-3 " >
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} type="number" label="Shell finished" name="shellFinishedPrice" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} type="number" label="Finished" name="finishedPrice" />
                        </div>
                    </div>
                    <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                        <p className=" font-semibold " >Initial Deposit %</p>
                        <div className=" w-full mt-1 flex flex-col gap-3 " >
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Enter percentage" type="number" name="initalPaymentPercentage" /> 
                        </div>
                    </div>
                    <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                        <p className=" font-semibold " >Commission</p>
                        <div className=" w-full mt-1 flex flex-col gap-3 " >
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Leve 1" type="number" name="level1" /> 
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Leve 2" type="number" name="level2" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Leve 3" type="number" name="level3" />
                        </div>
                    </div>
                    <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                        <p className=" font-semibold " >Location</p>
                        <div className=" w-full mt-1 flex flex-col gap-3 " >
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Address" name="address" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="L.G.A" name="lga" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="City" name="city" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="State" name="state" />
                            <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Country" name="country" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}