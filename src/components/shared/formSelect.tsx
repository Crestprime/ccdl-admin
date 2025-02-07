import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'; 

interface optionProps {
    label: string,
    value: string,
}

interface IProps {
    name: string;
    placeholder?: string;
    value?: any;
    label?: string;
    optionData?: Array<optionProps>;
    setValue: (name: string, value: string) => void,
    errors: any,
    watch?: any
}

export default function FormSelect(
    {
        name,
        placeholder,
        value,
        label,
        optionData,
        setValue,
        errors
    }: IProps) {

    // const { register, formState: { errors } } = useFormContext();

    const onValueChange = (item: string, value: string) => { 
        setValue(item, value)
        console.log(value);
        
    }

    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' >
                <Select value={value}  onValueChange={(value)=> onValueChange(name, value)} >
                    <SelectTrigger className="w-full">
                        <SelectValue  placeholder={placeholder ?? "Select "+label} />
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
                {errors[name] && <p className=' text-sm text-error600 font-OpenRunde-Medium ' >{errors[name]?.message as string}</p>}
            </div>
        </div>
    )
}
