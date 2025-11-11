import { useFetchData } from '@/hooks/useFetchData';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { CreateBuildingListing, CreateLandListing } from '@/models/listing';

interface IProps {
    name: string;
    placeholder?: string;
    value?: any;
    label?: string; 
    setValue: (value: string) => void, 
    type: string
}

export default function SelectProperty(
    { 
        placeholder,
        value,
        label, 
        setValue, 
        type
    }: IProps) {

    const { data, isLoading } = useFetchData<Array<CreateBuildingListing & CreateLandListing & any>>(`/admin-property/property-by-category`, ["property ", type], {
        category: type
    });

    return (
        <div className=' w-full flex gap-2 flex-col ' >
            <p className=" font-medium text-sm " >{label}</p>
            <div className=' flex flex-col gap-1 ' >
                {!isLoading ? (
                    <Select value={value} onValueChange={(value) => setValue(value)} >
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
            </div>
        </div>
    )
}
