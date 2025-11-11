import { RiSearch2Line } from "@remixicon/react";
import { Input } from "../ui/input";
import { useFilterStore } from "@/store/filterStore";


export default function SearchBar() {

    const { search, setSearch } = useFilterStore((state) => state);

    return (
        <div className=" w-[354px] relative h-[42px] " >
            <div className=" w-fit px-2 absolute top-0 h-full flex justify-center items-center " >
                <RiSearch2Line size={"20px"} />
            </div>
            <Input value={search} type="search" onChange={(e) => setSearch(e.target.value)} className=" h-[42px] w-full pl-8 " placeholder="Search for property or client name" />
        </div>
    )
}