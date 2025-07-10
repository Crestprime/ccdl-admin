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
    iconback?: React.ReactNode,
    setValue: (value: string) => void, 
    errors?: any,
    touched?: any
}

export default function CustomInput(
    { 
        placeholder,
        value,
        label,
        type,
        hasFrontIcon,
        hasBackIcon,
        icon,
        iconback,
        setValue,
        errors,
        touched
    }: IProps) { 

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
                        onChange={(e)=> setValue(e.target.value)}
                        className={` ${hasFrontIcon ? " pl-12 " : ""} h-[39px] `}
                        placeholder={placeholder}
                    />
                </div>
                {touched && errors && <div className=' text-red-600 text-xs ' >{errors}</div>}
            </div>
        </div>
    )
}
