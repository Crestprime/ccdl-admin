
import { IPlots } from "@/models/listing";
import { CustomButton, CustomInput, FormInput } from "../shared";
import { Button } from "../ui/button";
import { RiAddLine, RiCloseCircleFill } from "@remixicon/react";
import { useEffect, useState } from "react";
import useEditListing from "@/hooks/useEditListing";

interface IProps {
    data?: Array<IPlots>
    name: string;
    value: Array<any>;
    setValue: (name: string, value: any) => void,
    formik: any
}

export default function PlotAndPrice(
    {
        name,
        value,
        setValue,
        formik,
        data
    }: IProps
) {

    const defultData = {
        price: "",
        size: "",
    }

    const [ plots, setPlots ] = useState<Array<IPlots>>([])
 
    const append = (item: any) => {
        // const clone = value;
        setValue(name, [...value, item])
        // value?.push(item)
    }

    const { updatePlot, isPendingplots } = useEditListing()
    

    const remove = (item: any) => {
        const clone = value;
        clone.splice(item, 1);
        setValue(name, clone)
    }

    const changeHandlerPlotSize = (
        index: number, plotSize: string
    ) => {

        let clone = [...plots]
        
        clone[index] = {...clone[index], plotSize: plotSize}

        setPlots(clone)
    }

    const changeHandlerPrice = (
        index: number, price: string
    ) => {

        let clone = [...plots]
        
        clone[index] = {...clone[index], price: price}

        setPlots(clone)
    }

    useEffect(()=> {
        if(data) {
            setPlots(data)
        }
    }, [])

    return (
        <div className=" w-full p-4 border flex gap-4 relative z-30 flex-col rounded-2xl " >
            <p className=" font-OpenRunde-SemiBold font-medium text-gray900 " >Plots & Price</p>
            {plots?.map((item, index: number) => (
                <div key={index} className=" w-full flex gap-3 items-center  " >
                    <CustomInput value={item?.plotSize} setValue={(value)=> changeHandlerPlotSize(index, value)} hasBackIcon={true} iconback={<p className=" text-gray900 " >SQM</p>} placeholder="0.00" type="number" name={`plots[${index}].size`} />
                    <CustomInput value={item?.price} setValue={(value)=> changeHandlerPrice(index, value)} hasFrontIcon={true} icon={<p className=" text-gray900 " >NGN</p>} type="number" placeholder="0.00" name={`plots[${index}].price`} />
                     
                    <CustomButton isLoading={isPendingplots} onClick={()=> updatePlot({
                        id: item?.id, 
                        payload: {
                            plotSize: item?.plotSize,
                            price: item?.price
                        }
                    })} className="  h-full mt-2 " >Update</CustomButton>
                </div>
            ))}
            {value?.map((item: {
                price: string,
                size: string
            }, index: number) => (
                <div key={index} className=" w-full flex gap-3 items-center  " >
                    <FormInput otherVaule={item?.size} setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} hasBackIcon={true} iconback={<p className=" text-gray900 " >SQM</p>} placeholder="0.00" type="number" name={`plots[${index}].size`} />
                    <FormInput otherVaule={item?.price} setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} hasFrontIcon={true} icon={<p className=" text-gray900 " >NGN</p>} type="number" placeholder="0.00" name={`plots[${index}].price`} />
                    {value?.length > 1 && (
                        <RiCloseCircleFill role="button" onClick={() => remove(index)} size={"35px"} />
                    )}
                </div>
            ))}
            <Button type="button" onClick={() => append(defultData)} variant={"outline"} className=" px-2 w-fit rounded-full " >
                <RiAddLine size={"12px"} />
                Add more
            </Button>
        </div>
    )
}
