import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { useFetchData } from "@/hooks/useFetchData"; 
import { LoadingAnimation } from "@/components/shared";
import { CreateListingBtn, PropertyListing } from "@/components/listingComponents";
import { useNavigate } from "@tanstack/react-router";


export default function ListingPage(
    { type }: { type: string }
)  {  

    const { data, isLoading} = useFetchData<any>(`/admin-property/property-by-category`, "property "+type, {
        category: type
    });  

    const navigate = useNavigate() 

    const clickHandler = (item: string) => { 
        
        navigate({
            to: `/dashboard/property/listings?type=${item}`
        })
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

            <Tabs defaultValue={type} onValueChange={(value)=> clickHandler(value)} className="w-full ">
                <TabsList className="grid w-fit grid-cols-2 h-fit ">
                    <TabsTrigger className=" h-[36px] " value="BUILDING">Houses</TabsTrigger>
                    <TabsTrigger className=" h-[36px] " value="LAND">Lands</TabsTrigger>
                    {/* <TabsTrigger className=" h-[36px] " value="estates">Estates</TabsTrigger> */}
                </TabsList>
                <LoadingAnimation loading={isLoading} >
                    <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="BUILDING">
                        <PropertyListing type="buildings" data={data} />
                    </TabsContent>
                    <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="LAND">
                        <PropertyListing type="lands" data={data} />
                    </TabsContent>
                </LoadingAnimation>
            </Tabs>
        </div>
    )
}
