// import { useFieldArray } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox'
import { optionProps } from '@/models/select'

interface IProps {
    listData: Array<optionProps>;
    name: string;
    label: string;
    value?: any;
    setValue: (name: string, value: any) => void,
}

export default function ListingCheckBox(
    {
        listData,
        name,
        label,
        value,
        setValue
    }: IProps
) {

    // const { append, remove } = useFieldArray({
    //     control,
    //     name: name, // Name of the array in your form
    // });

    const clickHandler = (item: string) => {

        if (value[name]?.includes(item)) {
            const updatedTags = value[name].filter((tag: string) => tag !== item);
            setValue(name, updatedTags)

        } else {
            setValue(name, [...value[name], item])
        }
    }


    return (
        <div className=" flex flex-col gap-2 " >
            {label && (
                <p className=" font-medium " >{label}</p>
            )}
            <div className=" flex flex-wrap gap-2 items-center " >
                {listData?.map((item, index) => {
                    return (
                        <div key={index} className=" p-1 w-fit text-bodyTextColor flex gap-1 border items-center rounded-[6px] " >
                            <Checkbox
                                onClick={() => clickHandler(item.value)} checked={value[name]?.includes(item.value) ? true : false}
                                className=" !border-bodyTextColor " />
                            <p className=" font-medium text-sm " >{item?.label}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
