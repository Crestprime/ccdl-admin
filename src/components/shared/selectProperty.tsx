import { useFetchData } from '@/hooks/useFetchData';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { CreateBuildingListing, CreateLandListing } from '@/models/listing';

interface IProps {
    name: string;
    placeholder?: string;
    value?: any;
    label?: string; 
    setValue: (name: string, value: string) => void,
    errors: any,
    type: string
}

export default function SelectProperty(
    {
        name,
        placeholder,
        value,
        label, 
        setValue,
        errors,
        type
    }: IProps) {

    const { data, isLoading } = useFetchData<Array<CreateBuildingListing & CreateLandListing & any>>(`/admin-property/property-by-category`, "property " + type, {
        category: type
    });

    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' >
                {!isLoading ? (
                    <Select value={value} onValueChange={(value) => setValue(name, value)} >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={placeholder ?? "Select " + label} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {data?.map((item, index) => {
                                    return (
                                        <SelectItem key={index} value={item.id+""}>{item?.name}</SelectItem>
                                    )
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                ): (
                    <div className='w-full flex justify-center ' >
                        Loading...
                    </div>
                )}
                {errors[name] && <p className=' text-sm text-error600 font-OpenRunde-Medium ' >{errors[name]?.message as string}</p>}
            </div>
        </div>
    )
}
