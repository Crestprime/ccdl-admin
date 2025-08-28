import { IAdminData } from "@/models/auth";
import httpService from "@/services/httpService";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useAdmin = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const { mutate: createAdmin, isPending: isLoading } = useMutation({
        mutationFn: (data: IAdminData) => httpService.post(`/admin-auth/login`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)
            navigate("/auth/verify")
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
            name: Yup.string().required('Required'),
            position: Yup.string().required('Required'),
        }),
        onSubmit: (data: IAdminData) => {
            createAdmin(data)
        },
    });

    return {
        formik,
        isLoading,
        isOpen, setIsOpen
    }

}

export default useAdmin