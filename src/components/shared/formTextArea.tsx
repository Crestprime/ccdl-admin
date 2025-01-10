import { useFormContext } from 'react-hook-form';
import { Textarea } from '../ui/textarea';

interface IProps {
    name: string;
    placeholder?: string;
    value?: any;
    label?: string;
}

export default function FormTextArea(
    {
        name,
        placeholder,
        value,
        label
    }: IProps) {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' > 
                <Textarea className=" w-full h-[78px] "
                    value={value}
                    {...register(name, {
                        required: true,
                        pattern: /^[A-Za-z]+$/i
                    })}
                    placeholder={placeholder}
                />
                {errors[name] && <p className=' text-sm text-error600 font-OpenRunde-Medium ' >{errors[name]?.message as string}</p>}
            </div>
        </div>
    )
}
