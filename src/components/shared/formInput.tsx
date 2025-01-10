import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';
import React from 'react';

interface IProps {
    name: string;
    placeholder?: string;
    value?: any;
    label?: string;
    type?: React.HTMLInputTypeAttribute,
    hasFrontIcon?: boolean;
    hasBackIcon?: boolean,
    icon?: React.ReactNode,
    iconback?: React.ReactNode
}

export default function FormInput(
    {
        name,
        placeholder,
        value,
        label,
        type,
        hasFrontIcon,
        hasBackIcon,
        icon,
        iconback
    }: IProps) {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' >
                <div className=' relative h-[39px] ' >
                    {hasFrontIcon && (
                        <div className=' w-fit flex h-[39px] absolute top-0 left-0 justify-center items-center px-2 ' >
                            {icon}
                        </div>
                    )}
                    {hasBackIcon && (
                        <div className=' w-fit flex h-[39px] absolute top-0 right-0 justify-center items-center px-2 ' >
                            {iconback}
                        </div>
                    )}
                    <Input
                        type={type ?? "text"}
                        value={value}
                        {...register(name, {
                            required: true,
                            pattern: /^[A-Za-z]+$/i
                        })}
                        className={` ${hasFrontIcon ? " pl-12 " : ""} `}
                        placeholder={placeholder}
                    />
                </div>
                {errors[name] && <p className=' text-sm text-error600 font-OpenRunde-Medium ' >{errors[name]?.message as string}</p>}
            </div>
        </div>
    )
}
