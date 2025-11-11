import httpService from "@/services/httpService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";



const useUploadAttachment = (
    {
        id, 
    } : {
        id: number | any, 
    }
) => { 

    const [ isOpen, setIsOpen ] = useState(false)
    const queryClient = useQueryClient()

    const { mutate: uploadImage, isPending: uploading } = useMutation({
        mutationFn: (data: any) => httpService.post(`/file-upload/upload-multiple?uploadType=ITEM_IMAGE`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            saveDocument({
                subTaskId: id,
                files: data?.data?.data
            })
        },
    });



    const { mutate: updateSubTaskStatus, isPending: isLoadingStatus } = useMutation({
        mutationFn: (data: {
            subTaskId: string,
            taskStatus: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
        }) => httpService.put(`/admin-construction/subtasks/${data?.subTaskId}/${data?.taskStatus}`),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            queryClient.refetchQueries({ queryKey: ["project"] })
            toast.success(data?.data?.message) 
        },
    });

    const { mutate: saveDocument, isPending: isLoading } = useMutation({
        mutationFn: (data: {
            "subTaskId": number | any,
            "files": Array<string>
          }) => httpService.post(`/admin-construction/attachments`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            queryClient.refetchQueries({ queryKey: ["project"] })
            toast.success(data?.data?.message) 
            setIsOpen(false)
        },
    });

    return {
        uploading,
        isLoading,
        uploadImage,
        isOpen,
        setIsOpen,
        isLoadingStatus,
        updateSubTaskStatus
    }
}


export default useUploadAttachment;