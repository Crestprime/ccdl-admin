// import useListing from "@/hooks/useListing";
import { Button } from "../../../ui/button";
import { CustomButton, LoadingAnimation } from "@/components/shared";
import { useNavigate } from "@tanstack/react-router"; 
import BuildingForm from "./buildingForm";
import { useFetchData } from "@/hooks/useFetchData";
import { IBuildingListingData } from "@/models/listing";
import { useEffect } from "react";
import { useImage } from "@/components/global-state/useImageData";
import useEditListing from "@/hooks/useEditListing";

export default function EditListingBuilding(
    { type, id }: { type: string, id: string }
) {

    const { formik, uploading, isPendingBuilding } = useEditListing(id)
    const { updatePreview } = useImage((state) => state)
    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<IBuildingListingData>(`/admin-property/property/${id}`, "property" + id);

    useEffect(() =>{
        if(!formik.values?.name){
            formik?.setFieldValue("name", data?.property?.name)
            formik?.setFieldValue("category", data?.property?.category)
            formik?.setFieldValue("description", data?.property?.description)
            formik?.setFieldValue("buildingType", data?.property?.buildingType)
            formik?.setFieldValue("tags", data?.property?.tags)
            formik?.setFieldValue("bedrooms", data?.property?.bedrooms)
            formik?.setFieldValue("livingSpace", data?.property?.livingSpace)
            formik?.setFieldValue("kitchen", data?.property?.kitchen)
            formik?.setFieldValue("bathroom", data?.property?.bathroom)
            formik?.setFieldValue("squareFoot", data?.property?.squareFoot)
            formik?.setFieldValue("lotSize", data?.property?.lotSize)
            formik?.setFieldValue("floors", data?.property?.floors)
            formik?.setFieldValue("features", data?.property?.features)
            formik?.setFieldValue("parkingSpace", data?.property?.parkingSpace)
            formik?.setFieldValue("outdorSpace", data?.property?.outdoorSpace)
            formik?.setFieldValue("heatingAndCooling", data?.property?.heatingAndCooling)
            formik?.setFieldValue("energyEfficiency", data?.property?.energyEfficiency)
            formik?.setFieldValue("security", data?.property?.security)
            formik?.setFieldValue("yearOfConstruction", data?.property?.yearOfConstruction)
            formik?.setFieldValue("condition", data?.property?.condition)
            formik?.setFieldValue("communityAmenities", data?.property?.communityAmenities)
            formik?.setFieldValue("publicTransport", data?.property?.publicTransport)
            formik?.setFieldValue("shellFinishedPrice", data?.property?.shellFinishedPrice)
            formik?.setFieldValue("finishedPrice", data?.property?.finishedPrice)
            formik?.setFieldValue("initalPaymentPercentage", data?.property?.initalPaymentPercentage)
            formik?.setFieldValue("address", data?.property?.address)
            formik?.setFieldValue("lga", data?.property?.lga)
            formik?.setFieldValue("city", data?.property?.city)
            formik?.setFieldValue("state", data?.property?.state)
            formik?.setFieldValue("country", data?.property?.country)
            formik?.setFieldValue("isDraft", data?.property?.isDraft)
            formik?.setFieldValue("adminId", data?.property?.adminId) 
            formik?.setFieldValue("level1", data?.property?.level1) 
            formik?.setFieldValue("level2", data?.property?.level2) 
            formik?.setFieldValue("level3", data?.property?.level3) 
            updatePreview(data?.property?.media)
        }
    }, [data]) 

    console.log(formik?.errors);
    
    

    return (
        <LoadingAnimation loading={isLoading} > 
            <div className=" w-full flex h-auto gap-6 flex-col  " >
                <div className=" w-full flex justify-end items-center " >
                    <div className=" flex gap-4  " >
                        <Button type="button" onClick={() => navigate({
                            to: "/dashboard/property/listings?type=BUILDING"
                        })} variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                            Cancel
                        </Button>
                        <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                            Save as Draft
                        </Button>
                        <CustomButton type="button" onClick={() => formik?.handleSubmit()} isLoading={uploading || isPendingBuilding} variant={"main"} className=" h-[40px] text-sm font-medium rounded-full " >
                            Publish
                        </CustomButton>
                    </div>
                </div>
                <BuildingForm formik={formik} type={type} />
            </div>
        </LoadingAnimation>
    )
}