import { ILogin, IVerify, Iinvite } from "@/models/auth";
import { unsecureHttpService } from "@/services/httpService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useAuth = () => {  

    const navigate = useNavigate() 
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      if (seconds <= 0) return; 
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
  
      return () => clearInterval(timer); // Cleanup the interval
    }, [seconds]);

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

 
    const { mutate: acceptInvite, isPending: InvitePending } = useMutation({
        mutationFn: (data: Iinvite) => unsecureHttpService.post(`/admin-auth/accept-invitation/${data?.id}`),
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
            Cookies.set("userid", data?.data?.data?.admin?.id) 
            toast.success(data?.data?.message)

            navigate({
                to: "/dashboard"
            }) 
        },
    }); 

    const { mutate: resendOtp, isPending: resendPending } = useMutation({
        mutationFn: (data: ILogin) => unsecureHttpService.post(`/admin-auth/resent-otp`, data),
        onError: (error: any) => {  
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {  


            toast.success(data?.data?.message)
            
            setSeconds(59)
        },
    });

    return {
        signIn,
        signInPending, 
        verifyEmail,
        verifyPending,
        acceptInvite,
        InvitePending,
        resendPending,
        resendOtp,
        setSeconds,
        seconds
    }

}

export default useAuth