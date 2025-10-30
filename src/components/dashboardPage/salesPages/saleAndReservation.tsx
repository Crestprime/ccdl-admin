import { RiCalendarCheckFill, RiCoinsFill, RiKeyFill } from "@remixicon/react";
import { Tabs, TabsContent } from "../../ui/tabs"; 
import { useFetchData } from "@/hooks/useFetchData";
import ReservationTable from "@/components/reservationComponents/reservationTable";
import { IReservation } from "@/models/analytics";
import { CustomButton, LoadingAnimation, SearchBar } from "@/components/shared";
import { formatNumberWithK } from "@/utils/formatNumberWithK"; 
import React from "react";
import { useReactToPrint } from "react-to-print";
import { dateFormat } from "@/utils/dateFormat";
// import Filter from "@/components/shared/filter";


export default function SaleAndReservation() {

    const { data, isLoading } = useFetchData<IReservation | any>(`/analytics/reservation`, ["analytics/reservation"]);

    const contentRef = React.useRef<HTMLDivElement | any>(null);

    const reactToPrintFn = useReactToPrint({ contentRef, 
        documentTitle: "sales "+dateFormat(new Date()),
        pageStyle: `
          @page {
            size: Legal landscape
          }   
        `, });

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" flex flex-col " >
                <h3 className=" font-semibold text-lg " >Sales & Reservations</h3>
                <p className=" text-gray500 text-sm " >Manage all Sales & Reservations properties in capital city</p>
            </div>
            <LoadingAnimation loading={isLoading} >
                <div className=" w-full grid grid-cols-4 gap-4 " >
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Revenue</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(data?.totalRevenue, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Outstanding</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(data?.outstanding, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiKeyFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Properties Sold</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(data?.totalPropertiesSold, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCalendarCheckFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Reservations</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(data?.totalReservations, true)}</p>
                    </div>
                </div>
            </LoadingAnimation>

            <Tabs defaultValue="sale" className="w-full flex flex-col gap-4 ">
                <SearchBar />
                <CustomButton variant={"main"} onClick={reactToPrintFn} className=" w-fit px-4 rounded-full " >Export</CustomButton>
                {/* <Filter /> */}
                <TabsContent ref={contentRef} className=" w-full pt-3 flex flex-col gap-5 " value="sale"> 
                    <ReservationTable /> 
                </TabsContent>
            </Tabs>
        </div>
    )
}
