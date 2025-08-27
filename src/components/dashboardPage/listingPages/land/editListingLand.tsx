import { useImage } from "@/components/global-state/useImageData";
import { CustomButton, LoadingAnimation } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useFetchData } from "@/hooks/useFetchData";
import { IBuildingListingData } from "@/models/listing"; 
import { useEffect } from "react";
import LandForm from "./landForm";
import useEditListing from "@/hooks/useEditListing";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function EditListingLand() {


    const [searchParams] = useSearchParams();
    const type: any = searchParams.get("type");
    const id: any = searchParams.get("id");
    
    const { formikLand: formik, isPendingland, uploading } = useEditListing(id)
    const { updatePreview } = useImage((state) => state)
    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<IBuildingListingData>(`/admin-property/property/${id}`, ["property", id+""]);

    useEffect(() => {
        if (!formik.values?.name) { 

            formik?.setFieldValue("name", data?.property?.name)
            formik?.setFieldValue("category", data?.property?.category)
            formik?.setFieldValue("description", data?.property?.description)
            formik?.setFieldValue("topography", data?.property?.topography)
            formik?.setFieldValue("tags", data?.property?.tags)
            formik?.setFieldValue("features", data?.property?.features)
            formik?.setFieldValue("communityAmenities", data?.property?.communityAmenities)
            formik?.setFieldValue("publicTransport", data?.property?.publicTransport)
            formik?.setFieldValue("buildingRestrictions", data?.property?.buildingRestrictions)
            formik?.setFieldValue("developmentRestriction", data?.property?.developmentRestriction)
            formik?.setFieldValue("initalPaymentPercentage", data?.property?.initalPaymentPercentage)
            formik?.setFieldValue("gisData", data?.property?.gisData)
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

            // formik?.setFieldValue("plots", simplifiedData)
            updatePreview(data?.property?.media)
        }
    }, [data])

    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full flex h-auto gap-6 flex-col  " >
                <div className=" w-full flex justify-end items-center " >
                    <div className=" flex gap-4  " >
                        <Button type="button" onClick={() => navigate(
                            `/dashboard/property/listings/details?id=${data?.property?.id}&type=lands`
                        )} variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                            Cancel
                        </Button>
                        <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                            Save as Draft
                        </Button>
                        <CustomButton variant={"main"} type="button"  onClick={() => formik?.handleSubmit()} className=" h-[40px] text-sm font-medium rounded-full " isLoading={isPendingland || uploading} >
                            Publish
                        </CustomButton>
                    </div>
                </div>
                <LandForm plots={data?.plots} formik={formik} type={type} />
            </div>
        </LoadingAnimation>
    )
}