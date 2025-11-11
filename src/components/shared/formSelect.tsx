import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'; 

interface optionProps {
    label: string,
    value: string,
}

interface IProps {
    name: string;
    placeholder?: string;
    value?: any;
    type?: "number" | "string"
    label?: string;
    optionData?: Array<optionProps>;
    setValue: (name: string, value: any) => void, 
    errors: any,
    touched: any
}

export default function FormSelect(
    {
        name,
        placeholder,
        value,
        label,
        optionData,
        setValue,
        errors,
        type,
        touched
    }: IProps) {


    const onValueChange = (item: string, value: any) => { 
        if(type === "number") {
            setValue(item, Number(value)) 
        } else {
            setValue(item, value) 
        }
    }  

    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' >
                <Select value={(value[name] === 0 || value[name] === null) ? "" : value[name]+""} onValueChange={(value)=> onValueChange(name, value)} >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={placeholder ?? "Select "+label} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {optionData?.map((item, index) => {
                                return (
                                    <SelectItem key={index} value={item.value}>{item?.label}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {(touched[name] && errors[name]) && <div className=' text-sm text-error600 font-OpenRunde-Medium ' >{errors[name]}</div>}
            </div>
        </div>
    )
}
