import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'; 

interface optionProps {
    label: string,
    value: string,
}

interface IProps { 
    placeholder?: string;
    value?: any;
    label?: string;
    optionData?: Array<optionProps>;
    setValue: (value: string) => void, 
}

export default function CustomSelect(
    { 
        placeholder,
        value,
        label,
        optionData,
        setValue
    }: IProps) { 

    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' >
                <Select value={value} onValueChange={(value)=> setValue(value)} >
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
            </div>
        </div>
    )
}
