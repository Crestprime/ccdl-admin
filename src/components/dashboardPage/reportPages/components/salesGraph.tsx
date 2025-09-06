"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent, 
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export default function SalesGraph() {
    return (
        <div className=" w-full flex-col flex gap-3 p-4 border border-gray200 rounded-2xl " >
            <div className=" w-full flex justify-between " >
                <p className=" text-gray-800 font-medium " >Sales</p>
            </div>
            <div className=" w-full flex gap-3 h-full " >
                <div className=" flex flex-col gap-2 h-full " >
                    <div className=" bg-[#F8F9FC] rounded-[8px] mt-auto p-3 flex flex-col " >
                        <p className=" text-gray-500 text-xs " >Total Revenue</p>
                        <p className=" text-lg font-semibold text-gray-900 " >₦60,000,000.01</p>
                        <p className=" text-[10px] text-success500 " >+23.5%</p>
                    </div>
                    <div className=" bg-[#F8F9FC] rounded-[8px] p-3 flex flex-col " >
                        <p className=" text-gray-500 text-xs " >Orders</p>
                        <p className=" text-lg font-semibold text-gray-900 " >₦60,000,000.01</p>
                        <p className=" text-[10px] text-red-500 " >-5.5%</p>
                    </div>
                </div>
                <div className=" w-fit mt-auto " >
                    <div className=" w-[350px] " >
                        <Card className="border-0 shadow-none" >
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                    <BarChart accessibilityLayer data={chartData}>
                                        <CartesianGrid vertical={false}  />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            tickMargin={10}
                                            axisLine={false}
                                            tickFormatter={(value: any) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Bar dataKey="desktop" fill="#17B26A" radius={8} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
