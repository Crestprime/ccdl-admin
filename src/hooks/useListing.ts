import { listingBuildingValidation, listingLandValidation } from "@/lib/validations";
import { useForm } from "./useForm";
import { useMutation } from "@tanstack/react-query";
import httpService from "@/services/httpService";
import toast from "react-hot-toast";

import { CreateBuildingListing, CreateLandListing } from "@/models/listing";
import { useImage } from "@/components/global-state/useImageData";
import { useState } from "react";
import { transformPlotPricesToNumbers, transformTextToNumbers } from "@/utils/transformNumber";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

const useListing = (land?: boolean) => {

    const { image } = useImage((state) => state)
    const [isDraft, setIsDraft] = useState(false)
    const [payload, setPayload] = useState<CreateBuildingListing>({} as CreateBuildingListing)
    const [landPayload, setLandPayload] = useState<CreateLandListing>({} as CreateLandListing)

    const navigate = useNavigate()

    const userId = Cookies.get("userid") 

    const { mutate: uploadImage, isPending: uploading } = useMutation({
        mutationFn: (data: any) => httpService.post(`/file-upload/upload-multiple?uploadType=ITEM_IMAGE`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {

            if(land) {
                createLandMutate({...landPayload, media: data?.data?.data, isDraft: isDraft, gisData: JSON.stringify({})})
            } else {
                createBuildingMutate({...payload, media: data?.data?.data, isDraft: isDraft})
            }
        },
    });

    const { mutate: createBuildingMutate, isPending: isPendingBuilding } = useMutation({
        mutationFn: (data: CreateBuildingListing) => httpService.post(`/admin-property/create-building`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            toast.success(data?.data?.message) 
            navigate({
                to: "/dashboard/property/listings?type=BUILDING"
            })
        },
    });

    const { mutate: createLandMutate, isPending: isPendingland } = useMutation({
        mutationFn: (data: CreateLandListing) => httpService.post(`/admin-property/create-land`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            toast.success(data?.data?.message) 
            navigate({
                to: "/dashboard/property/listings?type=LAND"
            })
        },
    });

    const {
        renderForm: listingBuildingForm,
        setValue,
        control,
        values,
        formState
        // formState: { isValid }, 
    } = useForm({
        defaultValues: {
            "name": "",
            "category": "BUILDING",
            "description": "",
            "buildingType": "",
            "tags": [],
            "bedrooms": null,
            "livingSpace": null,
            "kitchen": null,
            "bathroom": null,
            "squareFoot": null,
            "lotSize": null,
            "floors": null,
            "features": [],
            "parkingSpace": [],
            "outdoorSpace": [],
            "heatingAndCooling": [],
            "energyEfficiency": [],
            "security": [],
            "yearOfConstruction": "",
            "condition": "",
            "communityAmenities": [],
            "publicTransport": [],
            "shellFinishedPrice": null,
            "finishedPrice": null,
            "media": [],
            "address": "",
            "lga": "",
            "city": "",
            "state": "",
            "country": "",
            "adminId": Number(userId),
            "isDraft": false
        },
        validationSchema: listingBuildingValidation,
        submit: (data: CreateBuildingListing) => {

            if (image?.length <= 0) {
                toast.error("Please Upload Image")
            } else {

                const formdata = new FormData()

                image.map((item) => {
                    formdata.append("file", item)
                })
 
                const transformedData = transformTextToNumbers(data); 
                uploadImage(formdata)  
                setPayload(transformedData)
            }
        },
    });

    const {
        renderForm: listingLandForm,
        setValue: setLandValue,
        control: landControl,
        values: landValue,
        formState: landFormState
        // formState: { isValid }, 
    } = useForm({
        defaultValues: {
            "name": "",
            "category": "LAND",
            "description": "",
            "topography": "",
            "tags": [],
            "features": [],
            "communityAmenities": [],
            "publicTransport": [],
            "buildingRestrictions": [],
            "developmentRestriction": [],
            "plots": [{ 
                size: "",
                price: ""
            }],
            "media": [],
            "gisData": {},
            "address": "",
            "lga": "",
            "city": "",
            "state": "",
            "country": "", 
            "adminId": Number(userId),
            "isDraft": false
        },
        validationSchema: listingLandValidation,
        submit: (data: CreateBuildingListing) => {

            if (image?.length <= 0) {
                toast.error("Please Upload Image")
            } else {

                const formdata = new FormData()

                image.map((item) => {
                    formdata.append("file", item)
                })
 
                const transformedData = transformTextToNumbers(data); 

                const newpayload = transformPlotPricesToNumbers(transformedData) 
                
                uploadImage(formdata)  
                setLandPayload(newpayload)
            }
        },
    });

    return {
        listingBuildingForm,
        setValue,
        control,
        values,
        isPendingBuilding,
        uploading,
        createBuildingMutate,
        formState,
        setIsDraft,
        uploadImage,
        createLandMutate,
        isPendingland,
        listingLandForm,
        setLandValue,
        landControl,
        landFormState,
        landValue
    }
}

export default useListing