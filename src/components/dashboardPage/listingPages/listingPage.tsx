import { useNavigate } from "@tanstack/react-router";
import { PropertyListing } from "../../listingComponents";
import { Button } from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";


export default function ListingPage() {

    const navigate = useNavigate()

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-between pb-4 border-b items-center " >
                <div className=" flex flex-col  " >
                    <h3 className=" font-semibold text-lg " >Listings</h3>
                    <p className=" text-sm text-bodyTextColor " >List and manage all properties in capital city</p>
                </div>
                <div className=" flex gap-4  " >
                    <Button onClick={()=> navigate({
                        to: "/dashboard/property/listings/create"
                    })} variant={"main"} className=" h-[40px] text-sm font-medium rounded-full " >
                        Add Listing
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="estates" className="w-full ">
                <TabsList className="grid w-fit grid-cols-3 h-fit ">
                    <TabsTrigger className=" h-[36px] " value="estates">Estates</TabsTrigger>
                    <TabsTrigger className=" h-[36px] " value="lands">Lands</TabsTrigger>
                    <TabsTrigger className=" h-[36px] " value="houses">Houses</TabsTrigger>
                </TabsList> 
                <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="estates">
                    <PropertyListing />
                </TabsContent>
            </Tabs>
        </div>
    )
}
