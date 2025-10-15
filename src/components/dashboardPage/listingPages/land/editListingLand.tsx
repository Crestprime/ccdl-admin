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

            formik?.setFieldValue("name", data?.modified?.name)
            formik?.setFieldValue("category", data?.modified?.category)
            formik?.setFieldValue("description", data?.modified?.description)
            formik?.setFieldValue("topography", data?.modified?.topography)
            formik?.setFieldValue("tags", data?.modified?.tags)
            formik?.setFieldValue("features", data?.modified?.features)
            formik?.setFieldValue("communityAmenities", data?.modified?.communityAmenities)
            formik?.setFieldValue("publicTransport", data?.modified?.publicTransport)
            formik?.setFieldValue("buildingRestrictions", data?.modified?.buildingRestrictions)
            formik?.setFieldValue("developmentRestriction", data?.modified?.developmentRestriction)
            formik?.setFieldValue("initalPaymentPercentage", data?.modified?.initalPaymentPercentage)
            formik?.setFieldValue("gisData", data?.modified?.gisData)
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

            // formik?.setFieldValue("plots", simplifiedData)
            updatePreview(data?.modified?.media)
        }
    }, [data])

    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full flex h-auto gap-6 flex-col  " >
                <div className=" w-full flex justify-end items-center " >
                    <div className=" flex gap-4  " >
                        <Button type="button" onClick={() => navigate(
                            `/dashboard/property/listings/details?id=${data?.modified?.id}&type=lands`
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