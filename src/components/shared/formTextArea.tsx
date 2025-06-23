import { Textarea } from '../ui/textarea';

interface IProps {
    name: string;
    placeholder?: string;
    value?: any;
    label?: string;
    setValue: (name: string, value: string) => void, 
    errors: any,
    touched: any
}

export default function FormTextArea(
    {
        name,
        placeholder,
        value,
        label,
        setValue,
        errors,
        touched
    }: IProps) {
 
    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' > 
                <Textarea className=" w-full h-[78px] "
                    value={value[name]} 
                    onChange={(e)=> setValue(name, e.target.value)}
                    placeholder={placeholder}
                />
                {(touched[name] && errors[name]) && <div className=' text-sm text-error600 font-OpenRunde-Medium ' >{errors[name]}</div>}
            </div>
        </div>
    )
}
