import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import httpService from '@/services/httpService';
import { toast } from 'react-hot-toast';
import { CreateBuildingListing, CreateLandListing } from '@/models/listing';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useImage } from '@/components/global-state/useImageData';
// import { transformTextToNumbers } from '@/utils/transformNumber';
import Cookies from "js-cookie";
import { transformTextToNumbers } from '@/utils/transformNumber';

const useEditListing = (id?: string) => {
    const userId = Cookies.get("userid")

    const navigate = useNavigate()
    const [payload, setPayload] = useState<CreateBuildingListing>({} as CreateBuildingListing)
    const [landPayload, setLandPayload] = useState<CreateLandListing>({} as CreateLandListing)
    const { image, preview } = useImage((state) => state)

    const { mutate: uploadImage, isPending: uploading } = useMutation({
        mutationFn: (data: any) => httpService.post(`/file-upload/upload-multiple?uploadType=ITEM_IMAGE`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            if (formik?.values?.name) {
                createBuildingMutate({ ...payload, media: [...preview, ...data?.data?.data] })
            } else {
                createLandMutate({ ...landPayload, media: [...preview, ...data?.data?.data], gisData: JSON.stringify({}) })
            }
        },
    });

    const { mutate: createBuildingMutate, isPending: isPendingBuilding } = useMutation({
        mutationFn: (data: CreateBuildingListing) => httpService.put(`/admin-property/building/${id}`, data),
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
        mutationFn: (data: CreateLandListing) => httpService.put(`/admin-property/land/${id}`, data),
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

    const { mutate: updatePlot, isPending: isPendingplots } = useMutation({
        mutationFn: (data: {
            id: string
            payload: {
                "plotSize": string,
                "price": string
            }
          }) => httpService.put(`/admin-property/plot/${data?.id}`, data.payload),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)
            // navigate({
            //     to: "/dashboard/property/listings?type=LAND"
            // })
        },
    });

    const formik = useFormik({
        initialValues: {
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
            "adminId": 33450660,
            "isDraft": false,
            "initalPaymentPercentage": null,
            "level1": null,
            "level2": null,
            "level3": null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            category: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            buildingType: Yup.string().required('Required'),
            // tags: Yup.array().of(Yup.string()),
            // bedrooms: Yup.number().min(0).required('Required'),
            // livingSpace: Yup.number().min(0).required('Required'),
            // kitchen: Yup.number().min(0).required('Required'),
            // bathroom: Yup.number().min(0).required('Required'),
            // squareFoot: Yup.number().min(0).required('Required'),
            // lotSize: Yup.number().min(0).required('Required'),
            // floors: Yup.number().min(0).required('Required'),
            // features: Yup.array().of(Yup.string()).required('Required'),
            // parkingSpace: Yup.array().of(Yup.string()).required('Required'),
            // outdorSpace: Yup.array().of(Yup.string()).required('Required'),
            // heatingAndCooling: Yup.array().of(Yup.string()).required('Required'),
            // energyEfficiency: Yup.array().of(Yup.string()).required('Required'),
            // security: Yup.array().of(Yup.string()).required('Required'),
            yearOfConstruction: Yup.string().required('Required'),
            condition: Yup.string().required('Required'),
            // communityAmenities: Yup.array().of(Yup.string()).required('Required'),
            // publicTransport: Yup.array().of(Yup.string()).required('Required'),
            shellFinishedPrice: Yup.number().min(0).required('Required'),
            finishedPrice: Yup.number().min(0).required('Required'),
            // media: Yup.array().of(Yup.string()).required('Required'),
            address: Yup.string().required('Required'),
            lga: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
            // adminId: Yup.number().required('Required'),
            isDraft: Yup.boolean().required('Required'),
            initalPaymentPercentage: Yup.number().min(0).max(100).required('Required'),
            level1: Yup.number().required('Required'),
            level2: Yup.number().required('Required'),
            level3: Yup.number().required('Required'),
        }),
        onSubmit: (data: CreateBuildingListing) => {
 
            const transformedData = transformTextToNumbers(data);
            if (image?.length > 0) {
                const formdata = new FormData()
                image.map((item) => { 
                    formdata.append("file", item)
                })
                uploadImage(formdata)
                setPayload(transformedData)
            } else if (image?.length === 0 && preview?.length === 0) {
                toast.error("Please Upload Image")
            } else {
                createBuildingMutate({ ...transformedData, media: preview })
            }

        },
    });

    const formikLand = useFormik({
        initialValues: {
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
            "isDraft": false,
            "initalPaymentPercentage": null,
            "level1": null,
            "level2": null,
            "level3": null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            category: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            // buildingType: Yup.string().required('Required'),
            // tags: Yup.array().of(Yup.string()),
            // bedrooms: Yup.number().min(0).required('Required'),
            // livingSpace: Yup.number().min(0).required('Required'),
            // kitchen: Yup.number().min(0).required('Required'),
            // bathroom: Yup.number().min(0).required('Required'),
            // squareFoot: Yup.number().min(0).required('Required'),
            // lotSize: Yup.number().min(0).required('Required'),
            // floors: Yup.number().min(0).required('Required'),
            // features: Yup.array().of(Yup.string()).required('Required'),
            // parkingSpace: Yup.array().of(Yup.string()).required('Required'),
            // outdorSpace: Yup.array().of(Yup.string()).required('Required'),
            // heatingAndCooling: Yup.array().of(Yup.string()).required('Required'),
            // energyEfficiency: Yup.array().of(Yup.string()).required('Required'),
            // security: Yup.array().of(Yup.string()).required('Required'),
            // yearOfConstruction: Yup.string().required('Required'),
            // condition: Yup.string().required('Required'),
            // communityAmenities: Yup.array().of(Yup.string()).required('Required'),
            // publicTransport: Yup.array().of(Yup.string()).required('Required'),
            // shellFinishedPrice: Yup.number().min(0).required('Required'),
            // finishedPrice: Yup.number().min(0).required('Required'),
            // media: Yup.array().of(Yup.string()).required('Required'),
            address: Yup.string().required('Required'),
            lga: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
            // adminId: Yup.number().required('Required'),
            isDraft: Yup.boolean().required('Required'),
            initalPaymentPercentage: Yup.number().min(0).max(100).required('Required'),
            level1: Yup.number().required('Required'),
            level2: Yup.number().required('Required'),
            level3: Yup.number().required('Required'),
        }),
        onSubmit: (data: CreateLandListing) => { 

            // if (image?.length <= 0) {
            //     toast.error("Please Upload Image")
            // } else {
            //     const formdata = new FormData()
            //     image.map((item) => {
            //         formdata.append("file", item)
            //     })

            //     const transformedData = transformTextToNumbers(data);
            //     uploadImage(formdata)
            //     setLandPayload(transformedData)
            // }

            // createLandMutate({ ...data, media: image })
            const transformedData = transformTextToNumbers(data);

            if (image?.length > 0) {
                const formdata = new FormData()
                image.map((item) => { 
                    formdata.append("file", item)
                })

                const transformedData = transformTextToNumbers(data);
                uploadImage(formdata)
                setLandPayload(transformedData)
            } else if (image?.length === 0 && preview?.length === 0) {
                toast.error("Please Upload Image")
            } else {
                createLandMutate({ ...transformedData, media: preview })
            }
        },
    });

    return {
        formik,
        uploading,
        isPendingland,
        isPendingBuilding,
        formikLand,
        updatePlot,
        isPendingplots
    }

}

export default useEditListing;