// import useListing from "@/hooks/useListing";
import { Button } from "../../../ui/button";
import { CustomButton, LoadingAnimation } from "@/components/shared"; 
import BuildingForm from "./buildingForm";
import { useFetchData } from "@/hooks/useFetchData";
import { IBuildingListingData } from "@/models/listing";
import { useEffect } from "react";
import { useImage } from "@/components/global-state/useImageData";
import useEditListing from "@/hooks/useEditListing";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function EditListingBuilding() {

    const [searchParams] = useSearchParams();
    const type: any = searchParams.get("type");
    const id: any = searchParams.get("id");

    const { formik, uploading, isPendingBuilding } = useEditListing(id)
    const { updatePreview } = useImage((state) => state)
    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<IBuildingListingData>(`/admin-property/property/${id}`, ["property", id]);

    useEffect(() =>{
        if(!formik.values?.name){
            formik?.setFieldValue("name", data?.modified?.name)
            formik?.setFieldValue("category", data?.modified?.category)
            formik?.setFieldValue("description", data?.modified?.description)
            formik?.setFieldValue("buildingType", data?.modified?.buildingType)
            formik?.setFieldValue("tags", data?.modified?.tags)
            formik?.setFieldValue("bedrooms", data?.modified?.bedrooms)
            formik?.setFieldValue("livingSpace", data?.modified?.livingSpace)
            formik?.setFieldValue("kitchen", data?.modified?.kitchen)
            formik?.setFieldValue("bathroom", data?.modified?.bathroom)
            formik?.setFieldValue("squareFoot", data?.modified?.squareFoot)
            formik?.setFieldValue("lotSize", data?.modified?.lotSize)
            formik?.setFieldValue("floors", data?.modified?.floors)
            formik?.setFieldValue("features", data?.modified?.features)
            formik?.setFieldValue("parkingSpace", data?.modified?.parkingSpace)
            formik?.setFieldValue("outdoorSpace", data?.modified?.outdoorSpace)
            formik?.setFieldValue("heatingAndCooling", data?.modified?.heatingAndCooling)
            formik?.setFieldValue("energyEfficiency", data?.modified?.energyEfficiency)
            formik?.setFieldValue("security", data?.modified?.security)
            formik?.setFieldValue("yearOfConstruction", data?.modified?.yearOfConstruction)
            formik?.setFieldValue("condition", data?.modified?.condition)
            formik?.setFieldValue("communityAmenities", data?.modified?.communityAmenities)
            formik?.setFieldValue("publicTransport", data?.modified?.publicTransport)
            formik?.setFieldValue("shellFinishedPrice", data?.modified?.shellFinishedPrice)
            formik?.setFieldValue("finishedPrice", data?.modified?.finishedPrice)
            formik?.setFieldValue("initalPaymentPercentage", data?.modified?.initalPaymentPercentage)
            formik?.setFieldValue("address", data?.modified?.address)
            formik?.setFieldValue("lga", data?.modified?.lga)
            formik?.setFieldValue("city", data?.modified?.city)
            formik?.setFieldValue("state", data?.modified?.state)
            formik?.setFieldValue("country", data?.modified?.country)
            formik?.setFieldValue("isDraft", data?.modified?.isDraft)
            formik?.setFieldValue("adminId", data?.modified?.adminId) 
            formik?.setFieldValue("level1", data?.modified?.level1) 
            formik?.setFieldValue("level2", data?.modified?.level2) 
            formik?.setFieldValue("level3", data?.modified?.level3) 
            updatePreview(data?.modified?.media)
        }
    }, [data]) 

    console.log(formik?.errors);
    
    

    return (
        <LoadingAnimation loading={isLoading} > 
            <div className=" w-full flex h-auto gap-6 flex-col  " >
                <div className=" w-full flex justify-end items-center " >
                    <div className=" flex gap-4  " >
                        <Button type="button" onClick={() => navigate("/dashboard/property/listings?type=BUILDING" )} variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
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