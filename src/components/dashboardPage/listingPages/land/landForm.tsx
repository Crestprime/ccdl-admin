import { ListingCheckBox, ListingImage } from "@/components/listingComponents";
import PlotAndPrice from "@/components/listingComponents/plotAndPrice";
import { FormTextArea, FormInput } from "@/components/shared";
import { featuresData } from "@/models/dummydata";
import { Switch } from "@radix-ui/react-switch";
import { RiSearch2Line } from "@remixicon/react";  


export default function LandForm(
    {formik, type} : {formik: any, type: string}
) { 
    

    return (

        <div className=" w-full flex gap-4 " >
            <div className=" flex flex-col flex-1 border p-4 gap-6 rounded-2xl " >
                <h3 className=" text-2xl font-semibold " >{type?.includes("estate") ? "Estate Land" : "Land"}</h3>
                <p className=" font-semibold " >Basic information</p>
                <div className=" w-full flex flex-col gap-4 " >
                    <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Estate Name" name="name" />
                    {/* <FormSelect setValue={setValue} errors={landFormState?.errors} label="Category" optionData={listingCategory} name="category" placeholder="Select Category" /> */}
                    {/* <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="No. of Block/Apartment" name="name" /> */}
                    <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Topography" name="topography" />
                    <FormTextArea setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Description" name="description" />
                    <div className=" pb-6 border-b " >
                        <FormInput setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} hasFrontIcon={true} icon={<RiSearch2Line size={"20px"} />} label="Tags" name="tags[0]" placeholder="Search" />
                    </div>
                    <div className=" flex flex-col gap-3 pb-6 border-b " >
                        <p className=" font-semibold " >Key Features</p>
                        <ListingCheckBox name="features" setValue={formik?.setFieldValue} value={formik?.values} listData={featuresData?.keyfeature} label={""} />
                    </div>
                    <div className=" flex flex-col gap-3 pb-6 border-b " >
                        <p className=" font-semibold " >Development and Restrictions</p>
                        <ListingCheckBox name="developmentRestriction" setValue={formik?.setFieldValue} value={formik?.values} listData={featuresData?.developmentreststriction} label={""} />
                        <FormTextArea setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Building Restrictions" name="buildingRestrictions[0]" />
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
                <div className=" w-[484px] relative flex flex-col gap-6 " >
                    <ListingImage />
                    <PlotAndPrice formik={formik} name={"plots"} value={formik?.values?.plots} setValue={formik?.setFieldValue}  /> 
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