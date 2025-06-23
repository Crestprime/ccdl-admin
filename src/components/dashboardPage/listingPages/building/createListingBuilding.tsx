// import useListing from "@/hooks/useListing";
import { Button } from "../../../ui/button"; 
import { CustomButton } from "@/components/shared"; 
import { useNavigate } from "@tanstack/react-router"; 
import useCreateListing from "@/hooks/useCreateListing";
import BuildingForm from "./buildingForm";

export default function CreateListingBuilding(
    { type }: { type: string }
) {

    const { formik, uploading, isPendingBuilding } = useCreateListing()
    const navigate = useNavigate()
    
    console.log(formik?.errors);
    

    return (
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
                    <CustomButton type="button" onClick={()=> formik?.handleSubmit()} isLoading={uploading || isPendingBuilding} variant={"main"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Publish
                    </CustomButton>
                </div>
            </div>
            <BuildingForm formik={formik} type={type} />
        </div>
    )
}
