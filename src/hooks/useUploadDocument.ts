import httpService from "@/services/httpService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";



const useUploadDocument = (
    {
        id,
        type,
        name,
    } : {
        id: number | any,
        type: "RESERVATION" | "PROJECT" | "INVESTMENT",
        name: string,
    }
) => {
    
    const queryClient = useQueryClient()
    const [ isOpen, setIsOpen ] = useState(false)

    const { mutate: uploadImage, isPending: uploading } = useMutation({
        mutationFn: (data: any) => httpService.post(`/file-upload/upload-multiple?uploadType=ITEM_IMAGE`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            saveDocument({
                type: type,
                typeId: id,
                documentType: name,
                link: data?.data?.data[0]
            })
        },
    });

    const { mutate: saveDocument, isPending: isLoading } = useMutation({
        mutationFn: (data: {
            "typeId": number | any,
            "type": "RESERVATION" | "PROJECT" | "INVESTMENT",
            "documentType":string,
            "link": string
          }) => httpService.post(`/documents/create`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message) 
            queryClient.refetchQueries({ queryKey: ["documents"] })
            setIsOpen(false)
        },
    });

    return {
        uploading,
        isLoading,
        uploadImage,
        isOpen,
        setIsOpen
    }
}


export default useUploadDocument;