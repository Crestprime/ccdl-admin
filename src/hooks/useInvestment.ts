import { investmentValidation } from "@/lib/validations"; 
import { useForm } from "./useForm";
import { Iinvestment } from "@/models/investment";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import httpService from "@/services/httpService";
import toast from "react-hot-toast";




const useInvestment = () => {


    const userId = Cookies.get("userid") 

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (data: Iinvestment) => httpService.post(`/investment-plan/create`, data),
        onError: (error: any) => {
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => { 
            toast.success(data?.data?.message) 
        },
    });
    
    const {
        renderForm,
        setValue, 
        values,
        formState, 
        watch
        // formState: { isValid }, 
    } = useForm({
        defaultValues: {
            "duration": "",
            "roi": "",
            "paymentFrequency": "",
            "minimiumInvestmentAmount": "",
            "propertyId": "",
            "status": "PENDING",
            "createdBy": userId
        },
        validationSchema: investmentValidation,
        submit: (data: Iinvestment) => { 
            mutate(data)
            console.log(data);
            
            // if (image?.length <= 0) {
            //     toast.error("Please Upload Image")
            // } else {

                // const formdata = new FormData()

                // image.map((item) => {
                //     formdata.append("file", item)
                // })

                // const transformedData = transformTextToNumbers(data); 

                // const newpayload = transformPlotPricesToNumbers(transformedData) 

                // uploadImage(formdata)  
                // setLandPayload(newpayload)
            // }
        },
    });

    return {
        renderForm,
        setValue,
        values,
        formState,
        isPending, 
        watch,
        mutate,
        isSuccess
    }
}

export default useInvestment