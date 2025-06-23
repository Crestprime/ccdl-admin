
import { FormInput } from "../shared";
import { Button } from "../ui/button";
import { RiAddLine, RiCloseCircleFill } from "@remixicon/react";

interface IProps { 
    name: string; 
    value: Array<any>; 
    setValue: (name: string, value: any)=> void,
    formik: any
}

export default function PlotAndPrice(
    { 
        name, 
        value,
        setValue,
        formik
    }: IProps
) {

    // const { append, remove } = useFieldArray({
    //     control,
    //     name: name, // Name of the array in your form
    // }); 

    const defultData = {
        price: "",
        size: "", 
    }  

    const append = (item: any) => { 
        // const clone = value;
        setValue(name, [...value, item])
        // value?.push(item)
    }

    const remove = (item: any) => {
        const clone = value;
        clone.splice(item, 1);
        setValue(name, clone)
    }
 
    return (
        <div className=" w-full p-4 border flex gap-4 relative z-30 flex-col rounded-2xl " >
            <p className=" font-OpenRunde-SemiBold font-medium text-gray900 " >Plots & Price</p>
            {value?.map((item: {
                price: string,
                size: string 
            }, index: number)=> (
                <div key={index} className=" w-full flex gap-3 items-center  " >
                    <FormInput otherVaule={item?.size} setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} hasBackIcon={true} iconback={<p className=" text-gray900 " >SQM</p>} placeholder="0.00" type="number" name={`plots[${index}].size`} />
                    <FormInput otherVaule={item?.price} setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} hasFrontIcon={true} icon={<p className=" text-gray900 " >NGN</p>} type="number" placeholder="0.00" name={`plots[${index}].price`} />
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
