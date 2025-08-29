import { CustomButton, LoadingAnimation } from "@/components/shared";
import SalesGraph from "./components/salesGraph";
import PropertiesChart from "./components/propertiesChart";
import InvestmentInfo from "./components/investmentInfo";
import ConstructionInfo from "./components/constructionInfo";
import CustomerChart from "./components/customerChart";
import PropertyStatistics from "./components/propertyStatistics";
import { PropertyPerformance } from "./components/propertyPerformance";
import { useFetchData } from "@/hooks/useFetchData";
import { IReport } from "@/models/analytics";


export default function ReportPage() {

    // /analytics/reports

    const { data, isLoading } = useFetchData<IReport>(`/analytics/reports`, ["analytics/reports"]);

    console.log(data);


    return (
        <LoadingAnimation loading={isLoading} > 
            <div className=" w-full flex flex-col h-full " >
                <div className=" w-full flex justify-between items-center border-b pb-5 px-4 " >
                    <div className=" flex flex-col " >
                        <h3 className=" font-semibold text-lg " >Reports & Analytics</h3>
                        <p className=" text-gray500 text-sm " >Track and analyze your real estate metrics</p>
                    </div>
                    <CustomButton variant={"main"} className=" w-fit px-4 rounded-full " >Export</CustomButton>
                </div>
                <div className=" w-full flex flex-col gap-4 p-4  " >
                    <div className=" w-full flex gap-4 " >
                        <SalesGraph />
                        <PropertiesChart />
                    </div>
                    <InvestmentInfo />
                    <ConstructionInfo />
                    <div className=" w-full flex gap-4 " >
                        <div className=" w-[40%] " >
                            <CustomerChart />
                        </div>
                        <div className=" w-full " >

                        </div>
                    </div>

                    <div className=" w-full flex gap-4 " >
                        <div className=" w-[45%] " >
                            <PropertyStatistics />
                        </div>
                        <div className=" w-full " >
                            <PropertyPerformance />
                        </div>
                    </div>
                </div>
            </div>
        </LoadingAnimation>
    )
}