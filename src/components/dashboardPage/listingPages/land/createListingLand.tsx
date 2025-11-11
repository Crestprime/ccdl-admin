import { Button } from "../../../ui/button"; 
import { CustomButton } from "@/components/shared";  
import useCreateListing from "@/hooks/useCreateListing";
import LandForm from "./landForm";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CreateListingLand() { 

    const [searchParams] = useSearchParams();
    const type: any = searchParams.get("type"); 

    const { formikLand: formik, isPendingland, uploading } = useCreateListing()
    const navigate = useNavigate()  

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-end items-center " >
                <div className=" flex gap-4  " >
                    <Button type="button" onClick={() => navigate(
                         "/dashboard/property/listings?type=BUILDING"
                    )} variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Cancel
                    </Button>
                    <Button variant={"outline"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Save as Draft
                    </Button>
                    <CustomButton variant={"main"} onClick={()=> formik?.handleSubmit()} className=" h-[40px] text-sm font-medium rounded-full " isLoading={isPendingland || uploading} >
                        Publish
                    </CustomButton>
                </div>
            </div>
            <LandForm formik={formik} type={type} />
        </div>
    )
}
