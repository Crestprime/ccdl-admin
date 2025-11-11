import { IAdminData } from "@/models/auth";
import httpService from "@/services/httpService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";


interface IProps {
    name: string,
    permissions: string[]
}

const useAdmin = () => {

    // const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const queryClient = useQueryClient()


    const { mutate: createAdmin, isPending: isLoading } = useMutation({
        mutationFn: (data: IAdminData) => httpService.post(`/admin-auth/create-invitation`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)
            // navigate("/auth/verify")
            console.log(data);

            setIsOpen(false)

        },
    });


    const addRoleManagement = useMutation({
        mutationFn: (data: IProps) => httpService.post("/admin-role", data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message) 
            setIsOpen(false)
            formikRole.resetForm()
            queryClient.invalidateQueries({ queryKey: ["role"] })
        },
    });



    const deleteRole = useMutation({
        mutationFn: (data: string) => httpService.delete(`/admin-role/${data}`),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)  
            setIsOpen(false)
            queryClient.invalidateQueries({ queryKey: ["role"] })
        },
    });


    const formik = useFormik({
        initialValues: {
            "firstName": "",
            "lastName": "",
            "email": "",
            "workspaces": [
                "CAPITAL_CITY"
            ],
            "position": "",
            // "profilePicture": ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            position: Yup.string().required('Required'),
        }),
        onSubmit: (data: IAdminData) => {
            createAdmin(data)
        },
    });

    const formikRole = useFormik({
        initialValues: {
            name: "",
            permissions: [],
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Role name is required"),
            permissions: Yup.array()
                .of(Yup.string().required())
                .min(1, "At least one permission is required"),
        }),
        onSubmit: (data: IProps) => { 
            addRoleManagement.mutate(data)
        },
    });


    return {
        formik,
        isLoading,
        isOpen, 
        setIsOpen,
        addRoleManagement,
        formikRole,
        deleteRole
    }

}

export default useAdmin