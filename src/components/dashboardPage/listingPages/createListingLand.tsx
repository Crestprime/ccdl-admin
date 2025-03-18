import useListing from "@/hooks/useListing";
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";
import { CustomButton, FormInput, FormTextArea } from "@/components/shared";
import { featuresData } from "@/models/dummydata";
import { ListingCheckBox, ListingImage } from "@/components/listingComponents";
import { useNavigate } from "@tanstack/react-router";
import PlotAndPrice from "@/components/listingComponents/plotAndPrice";
import { RiSearch2Line } from "@remixicon/react";

export default function CreateListingLand(
    { type }: { type: string }
) {

    const { listingLandForm, landControl, landValue, isPendingland, uploading } = useListing(true)
    const navigate = useNavigate()  

    return listingLandForm(
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-end items-center " >
                <div className=" flex gap-4  " >
                    <Button type="button" onClick={() => navigate({
                        to: "/dashboard/property/listings"
                    })} variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Cancel
                    </Button>
                    <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Save as Draft
                    </Button>
                    <CustomButton variant={"main"} className=" h-[40px] text-sm font-medium rounded-full " isLoading={isPendingland || uploading} >
                        Publish
                    </CustomButton>
                </div>
            </div>
            <div className=" w-full flex gap-4 " >
                <div className=" flex flex-col flex-1 border p-4 gap-6 rounded-2xl " >
                    <h3 className=" text-2xl font-semibold " >{type?.includes("estate") ? "Estate Land" : "Land"}</h3>
                    <p className=" font-semibold " >Basic information</p>
                    <div className=" w-full flex flex-col gap-4 " >
                        <FormInput label="Estate Name" name="name" />
                        {/* <FormSelect setValue={setValue} errors={landFormState?.errors} label="Category" optionData={listingCategory} name="category" placeholder="Select Category" /> */}
                        {/* <FormInput label="No. of Block/Apartment" name="name" /> */}
                        <FormInput label="Topography" name="topography" />
                        <FormTextArea label="Description" name="description" />
                        <div className=" pb-6 border-b " >
                            <FormInput hasFrontIcon={true} icon={<RiSearch2Line size={"20px"} />} label="Tags" name="tags[0]" placeholder="Search" />
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Key Features</p>
                            <ListingCheckBox name="features" value={landValue?.features} listData={featuresData?.keyfeature} label={""} control={landControl} />
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Development and Restrictions</p>
                            <ListingCheckBox name="developmentRestriction" value={landValue?.developmentRestriction} listData={featuresData?.developmentreststriction} label={""} control={landControl} />
                            <FormTextArea label="Building Restrictions" name="buildingRestrictions[0]" />
                        </div>
                        <div className=" flex flex-col gap-3 pb-6 border-b " >
                            <p className=" font-semibold " >Amenities and Community Features</p>
                            <div className=" flex flex-col gap-3 mt-2 " >
                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <ListingCheckBox name="communityAmenities" value={landValue?.communityAmenities} listData={featuresData?.communityamenities} label={"Community Amenities"} control={landControl} />
                                </div>
                                <div className=" flex gap-3 " >
                                    <Switch color="#17B26A" className=" mt-[2px] " id="airplane-mode" />
                                    <ListingCheckBox name="publicTransport" value={landValue?.publicTransport} listData={featuresData?.nearbypublictransport} label={"Nearby Public Transport"} control={landControl} />
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className=" w-fit " >
                    <div className=" w-[484px] relative flex flex-col gap-6 " >
                        <ListingImage />
                        <PlotAndPrice name={"plots"} value={landValue?.plots} control={landControl}  /> 
                        <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                            <p className=" font-semibold " >Initial Deposit %</p>
                            <div className=" w-full mt-1 flex flex-col gap-3 " >
                                <FormInput label="Enter percentage" type="number" name="initalPaymentPercentage" /> 
                            </div>
                        </div>
                        <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                            <p className=" font-semibold " >Commission</p>
                            <div className=" w-full mt-1 flex flex-col gap-3 " >
                                <FormInput label="Leve 1" type="number" name="level1" /> 
                                <FormInput label="Leve 2" type="number" name="level2" />
                                <FormInput label="Leve 3" type="number" name="level3" />
                            </div>
                        </div>
                        <div className=" w-full p-4 border flex gap-4 flex-col rounded-2xl " >
                            <p className=" font-semibold " >Location</p>
                            <div className=" w-full mt-1 flex flex-col gap-3 " >
                                <FormInput label="Address" name="address" />
                                <FormInput label="L.G.A" name="lga" />
                                <FormInput label="City" name="city" />
                                <FormInput label="State" name="state" />
                                <FormInput label="Country" name="country" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
