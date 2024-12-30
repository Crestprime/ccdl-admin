import { ILogin, IVerify } from "@/models/auth";
import { unsecureHttpService } from "@/services/httpService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const useAuth = () => {  

    const navigate = useNavigate()

    const { mutate: signIn, isPending: signInPending } = useMutation({
        mutationFn: (data: ILogin) => unsecureHttpService.post(`/admin-auth/login`, data),
        onError: (error: any) => { 
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            toast.success(data?.data?.message)

            navigate({
                to: "/auth/verify"
            }) 
        },
    }); 

    const { mutate: verifyEmail, isPending: verifyPending } = useMutation({
        mutationFn: (data: IVerify) => unsecureHttpService.post(`/admin-auth/verify-token`, data),
        onError: (error: any) => {  
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            
            Cookies.set("access_token", data?.data?.data?.jwtToken) 
            toast.success(data?.data?.message)

            navigate({
                to: "/dashboard"
            }) 
        },
    });

    return {
        signIn,
        signInPending, 
        verifyEmail,
        verifyPending
    }

}

export default useAuth