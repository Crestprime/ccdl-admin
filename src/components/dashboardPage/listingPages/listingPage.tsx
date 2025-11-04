import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { useFetchData } from "@/hooks/useFetchData";
import { LoadingAnimation, SearchBar } from "@/components/shared";
import { CreateListingBtn, PropertyListing } from "@/components/listingComponents";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePagintion } from "@/store/usePagination";
import { useEffect } from "react";
import CustomPagination from "@/components/shared/customPagination";
import { useFilterStore } from "@/store/filterStore";
// import { useNavigate } from "@tanstack/react-router";


export default function ListingPage() {

    const [searchParams] = useSearchParams();
    const type: any = searchParams.get("type");
    const { pageSize, page, updatePageSize, updatePage } = usePagintion((state) => state)
    const { search } = useFilterStore((state) => state);

    const { data, isLoading } = useFetchData<any>(`/admin-property/property-by-category`, ["property", type, search], {
        category: type,
        limit: pageSize,
        page: page,
        search: search
    }, true);

    useEffect(() => {
        updatePage(1)
        updatePageSize(10)
    }, [])

    const navigate = useNavigate()

    const clickHandler = (item: string) => {
        navigate(`/dashboard/property/listings?type=${item}`)
    }

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-between pb-4 border-b items-center " >
                <div className=" flex flex-col  " >
                    <h3 className=" font-semibold text-lg " >Listings</h3>
                    <p className=" text-sm text-bodyTextColor " >List and manage all properties in capital city</p>
                </div>
                <div className=" flex gap-4  " >
                    <CreateListingBtn />
                </div>
            </div>

            <Tabs defaultValue={type} onValueChange={(value) => clickHandler(value)} className="w-full flex flex-col gap-4 ">
                <TabsList className="grid w-fit grid-cols-2 h-fit ">
                    <TabsTrigger className=" h-[36px] " value="BUILDING">Houses</TabsTrigger>
                    <TabsTrigger className=" h-[36px] " value="LAND">Lands</TabsTrigger>
                    {/* <TabsTrigger className=" h-[36px] " value="estates">Estates</TabsTrigger> */}
                </TabsList> 
                <SearchBar />
                <LoadingAnimation loading={isLoading} >
                    <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="BUILDING">
                        <PropertyListing type="buildings" data={data?.data} />
                    </TabsContent>
                    <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="LAND">
                        <PropertyListing type="lands" data={data?.data} />
                    </TabsContent>
                </LoadingAnimation>
            </Tabs>
            {data?.total > pageSize && (
                <CustomPagination totalElement={data?.total} />
            )}
        </div>
    )
}
