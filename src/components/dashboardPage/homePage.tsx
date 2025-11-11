import { useFetchData } from "@/hooks/useFetchData";
import { FooterCard, HeaderCard, SalesCard } from "../homeComponents";
import { Button } from "../ui/button";
import { IHome } from "@/models/analytics";
import { LoadingAnimation } from "../shared";
import { AdminBtn } from "./adminPage/adminBtn";


export default function HomePage() {

    const { data, isLoading } = useFetchData<IHome>(`/analytics/home`, ["home"]);

    console.log(data);


    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full flex h-auto gap-6 flex-col  " >
                <div className=" w-full flex justify-between pb-4 border-b items-center " >
                    <div className=" flex flex-col  " >
                        <h3 className=" font-semibold text-lg " >Hey, Arthur!</h3>
                        <p className=" text-sm text-bodyTextColor " >Wednesday, October 09, 2024</p>
                    </div>
                    <div className=" flex gap-4  " >
                        <Button variant={"main"} className=" h-[40px] text-sm font-medium rounded-full " >
                            Add Listing
                        </Button>
                        <AdminBtn variant="outline" />
                    </div>
                </div>
                <HeaderCard data={data as IHome} />
                <SalesCard data={data as IHome} />
                <FooterCard />
            </div>
        </LoadingAnimation>
    )
}
