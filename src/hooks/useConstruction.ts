import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import httpService from '@/services/httpService';
import { toast } from 'react-hot-toast'; 
import { useState } from 'react';
import { ISubTask, ITask } from '@/models/construction';
import { useSearchParams } from 'react-router-dom';
import { removeEmpty } from '@/utils/removeEmptyValue';

const useConstruction = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const [searchParams] = useSearchParams();
    const id: any = searchParams.get("id");
    const queryClient = useQueryClient()
    
    const { mutate: createTaskMutate, isPending: isLoading } = useMutation({
        mutationFn: (data: ITask) => httpService.post(`/admin-construction/create/project-task`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            formik.resetForm()
            queryClient.refetchQueries({ queryKey: ["projects"] })
            toast.success(data?.data?.message) 
            setIsOpen(false)
        },
    });

    const formik = useFormik({
        initialValues: {
            "name": "",
            "description": "",
            "projectId": null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'), 
            description: Yup.string().required('Required'), 
            projectId: Yup.number().required('Required'), 
        }),
        onSubmit: (data: ITask) => { 
            createTaskMutate(data)
        },
    });

    const { mutate: createSubTaskMutate, isPending: isLoadingSub } = useMutation({
        mutationFn: (data: ISubTask) => httpService.post(`/admin-construction/create/sub-task`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            formikSub.resetForm()
            queryClient.refetchQueries({ queryKey: ["projects"] })
            toast.success(data?.data?.message) 
            setIsOpen(false)
        },
    });


    const { mutate: deleteTaskMutate, isPending: deletingTask } = useMutation({
        mutationFn: (data: string) => httpService.delete(`/admin-construction/tasks/${data}`),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            queryClient.refetchQueries({ queryKey: ["projects"] })
            toast.success(data?.data?.message) 
            setIsOpen(false)
        },
    });

    const { mutate: deleteSubTaskMutate, isPending: deletingSubTask } = useMutation({
        mutationFn: (data: string) => httpService.delete(`/admin-construction/subtasks/${data}`),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            queryClient.refetchQueries({ queryKey: ["projects"] })
            toast.success(data?.data?.message) 
            setIsOpen(false)
        },
    });

    const { mutate: updateConstructionStatusMutate, isPending: isLoadingStatus } = useMutation({
        mutationFn: (data: 
            {
                status?:  "ACCEPTED" | "PAUSED" | "COMPLETED" | "CANCELLED" | "IN_PROGRESS",
                priority?: "LOW" | "HIGH",
                adminId?: any
            }
        ) => httpService.put(`/admin-construction/projects/${id}`, 
            removeEmpty(data)
        ),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            queryClient.refetchQueries({ queryKey: ["projects"] })
            toast.success(data?.data?.message) 
        },
    });

    const formikSub = useFormik({
        initialValues: {
            "name": "", 
            "projectTaskId": null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),  
            projectTaskId: Yup.number().required('Required'), 
        }),
        onSubmit: (data: ISubTask) => { 
            createSubTaskMutate(data)
        },
    });

    return { 
        formik,
        formikSub,
        isLoading,
        isLoadingSub,
        isOpen,
        setIsOpen,
        updateConstructionStatusMutate,
        isLoadingStatus,
        deleteTaskMutate,
        deletingTask,
        deleteSubTaskMutate,
        deletingSubTask
    }
}

export default useConstruction;