import { useFieldArray } from "react-hook-form";
import { FormInput } from "../shared"; 
import { Button } from "../ui/button";
import { RiAddLine, RiCloseCircleFill } from "@remixicon/react";

interface IProps { 
    name: string; 
    value: Array<any>;
    control: any
}

export default function PlotAndPrice(
    { 
        name, 
        value,
        control
    }: IProps
) {

    const { append, remove } = useFieldArray({
        control,
        name: name, // Name of the array in your form
    }); 

    const defultData = {
        price: "",
        size: "", 
    }  

    return (
        <div className=" w-full p-4 border flex gap-4 relative z-30 flex-col rounded-2xl " >
            <p className=" font-OpenRunde-SemiBold font-medium text-gray900 " >Plots & Price</p>
            {value?.map((item: {
                price: string,
                size: string,
                label: string
            }, index: number)=> (
                <div key={index+item?.price} className=" w-full flex gap-3 items-center  " >
                    <FormInput hasBackIcon={true} iconback={<p className=" text-gray900 " >SQM</p>} placeholder="0.00" type="number" name={`plots.${index}.size`} />
                    <FormInput hasFrontIcon={true} icon={<p className=" text-gray900 " >NGN</p>} type="number" placeholder="0.00" name={`plots[${index+""}].price`} />
                    {value?.length > 1 && (
                        <RiCloseCircleFill role="button" onClick={()=> remove(index)}  size={"35px"} />
                    )}
                </div>
            ))}
            <Button type="button" onClick={()=> append(defultData)} variant={"outline"} className=" px-2 w-fit rounded-full " >
                <RiAddLine size={"12px"} />
                Add more
            </Button>
        </div>
    )
}
