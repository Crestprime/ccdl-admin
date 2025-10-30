import { RiCalendarCheckFill, RiCoinsFill, RiKeyFill } from "@remixicon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs"; 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import CreateInvestmentBtn from "./createInvestmentBtn";
import { useFetchData } from "@/hooks/useFetchData";
import { InvestmentModel, InvestmentPlan } from "@/models/investment";
import { dateFormat } from "@/utils/dateFormat";
import { CustomButton, LoadingAnimation, SearchBar } from "@/components/shared";
import { formatNumberWithK, numberFormatNaire } from "@/utils/formatNumberWithK";
import { capitalizeFLetter } from "@/utils/capitalLetter";
import { useNavigate } from "react-router-dom";
import { IAInvestment } from "@/models/analytics";
import { usePagintion } from "@/store/usePagination";
import { useEffect } from "react";
import CustomPagination from "@/components/shared/customPagination";
import { useFilterStore } from "@/store/filterStore";
import Filter from "@/components/shared/filter";
import React from "react";
import { useReactToPrint } from "react-to-print";


export default function Investment() {

    const navigate = useNavigate()
    const { pageSize, page, updatePageSize, updatePage } = usePagintion((state) => state)
    const { search, status } = useFilterStore((state) => state);

    const contentRef = React.useRef<HTMLDivElement | any>(null);

    const reactToPrintFn = useReactToPrint({
        contentRef,
        documentTitle: "report " + dateFormat(new Date()),
        pageStyle: `
          @page {
            size: Legal landscape
          }   
        `,
    });

    const { data, isLoading } = useFetchData<any>(`/investment`, ["investment"], {
        limit: pageSize,
        page: page,
        search: search,
        status: status
    }, true);

    const { data: plans, isLoading: loadingPlans } = useFetchData<any>(`/investment-plan/admin`, ["investment-plans"], {
        limit: pageSize,
        page: page,
        search: search
    }, true);


    const { data: analytics, isLoading: loading } = useFetchData<IAInvestment>(`/admin/investments/analytics`, ["analytics"], {}, true);

    useEffect(() => {
        updatePage(1)
        updatePageSize(10)
    }, [])

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex items-center justify-between " >
                <div className=" w-full flex flex-col " >
                    <h3 className=" font-semibold text-lg " >Investments</h3>
                    <p className=" text-gray500 text-sm " >View and manage all investments</p>
                </div>
                <CreateInvestmentBtn />
            </div>
            <LoadingAnimation loading={loading} >

                <div className=" w-full grid grid-cols-4 gap-4 " >
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Investment</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalInvestmentsAmount, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCoinsFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Profit Paid Out</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.totalMaturedAmount, true)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiKeyFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Total Investors</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.uniqueInvestorsCount)}</p>
                    </div>
                    <div className=" w-full rounded-xl border p-4 " >
                        <div className=" w-10 h-10 text-gray500 rounded-full border flex justify-center items-center " >
                            <RiCalendarCheckFill size={"24px"} />
                        </div>
                        <p className=" text-gray500 text-sm mt-6 " >Pending Payout</p>
                        <p className=" text-[30px] font-semibold text-gray900 " >{formatNumberWithK(analytics?.pendingPayoutsCount, true)}</p>
                    </div>
                </div>
            </LoadingAnimation>

            <Tabs defaultValue="investments" className="w-full flex flex-col gap-4 ">
                <div className=" w-full flex items-center justify-between " >
                    <TabsList className="grid w-fit grid-cols-2 h-fit ">
                        <TabsTrigger className=" h-[36px] " value="investments">Investments</TabsTrigger>
                        <TabsTrigger className=" h-[36px] " value="plans">Plans</TabsTrigger>
                    </TabsList>
                    <SearchBar />
                </div>
                <div className=" flex gap-4 items-center " >
                    <Filter type="investment" />
                    <CustomButton variant={"main"} onClick={reactToPrintFn} className=" w-fit px-4 rounded-full " >Export</CustomButton>
                </div>

                <TabsContent ref={contentRef} className=" w-full flex flex-col gap-5 " value="investments">
                    <LoadingAnimation loading={isLoading} length={data?.length} >
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Property Name</TableHead>
                                    <TableHead>Client Name</TableHead>
                                    <TableHead>Tenor</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Maturity Date</TableHead>
                                    <TableHead>Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data?.data?.map((item: InvestmentPlan, index: number) => {
                                    return (
                                        <TableRow role="button" onClick={() => navigate(`/dashboard/property/investments/details?id=${item?.id}`
                                        )} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                            <TableCell className="">{item?.plan?.property?.name}</TableCell>
                                            <TableCell className="">{item?.user?.firstName + " " + item?.user?.lastName}</TableCell>
                                            <TableCell className="">{item?.plan?.duration} Months</TableCell>
                                            <TableCell>
                                                <div className=" flex gap-2 items-center " >
                                                    <div className={` ${item?.status?.includes("ACTIVE") ? " text-success800 bg-success100 " : item?.status?.includes("Withdrawn") ? " text-error800 bg-error100 " : " text-blue800 bg-blue100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                        {capitalizeFLetter(item?.status)}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="">{dateFormat(item?.createdAt)}</TableCell>
                                            <TableCell className="">{numberFormatNaire(item?.amount)}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </LoadingAnimation>
                    {data?.total > pageSize && (
                        <CustomPagination totalElement={data?.total} />
                    )}
                </TabsContent>

                <TabsContent className=" w-full flex flex-col gap-5 " value="plans">
                    <LoadingAnimation loading={loadingPlans} length={plans?.length} >
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Property Name</TableHead>
                                    <TableHead>Plan</TableHead>
                                    <TableHead>ROI</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Maturity Date</TableHead>
                                    <TableHead>Min Investment</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {plans?.data?.map((item: InvestmentModel, index: number) => {
                                    return (
                                        <TableRow role="button" onClick={() => navigate(`/dashboard/property/investments/details-plans?id=${item?.id}`
                                        )} className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                            <TableCell className="">{item?.property?.name}</TableCell>
                                            <TableCell className="">{item?.duration} months</TableCell>
                                            <TableCell className="">{item?.roi}%</TableCell>
                                            <TableCell>
                                                <div className=" flex gap-2 items-center " >
                                                    <div className={` ${item?.status?.includes("ACTIVE") ? " text-success800 bg-success100 " : " text-gray800 bg-gray100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                        {capitalizeFLetter(item?.status)}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="">{dateFormat(item?.createdAt)}</TableCell>
                                            <TableCell className="">{numberFormatNaire(item?.minimiumInvestmentAmount)}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </LoadingAnimation>
                    {plans?.total > pageSize && (
                        <CustomPagination totalElement={plans?.total} />
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}
