
"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear area chart"

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

export default function PropertiesChart() {
    return (
        <div className=" w-full flex-col flex gap-3 p-4 border border-gray200 rounded-2xl " >
            <div className=" w-full flex justify-between " >
                <p className=" text-gray-800 font-medium " >Properties</p>
            </div>
            <div className=" w-full h-full flex gap-3 " >
                <div className=" w-full bg-[#F8F9FC] rounded-[8px] mt-auto p-3 flex flex-col " >
                    <p className=" text-gray-500 text-xs " >Total Listings</p>
                    <p className=" text-lg font-semibold text-gray-900 " >85</p>
                    <p className=" text-[10px] text-success500 " >+23.5%</p>
                </div>
                <div className=" w-full bg-[#F8F9FC] rounded-[8px] p-3 flex flex-col " >
                    <p className=" text-gray-500 text-xs " >Sold</p>
                    <p className=" text-lg font-semibold text-gray-900 " >30</p>
                    <p className=" text-[10px] text-red-500 " >-5.5%</p>
                </div>
            </div>
            <Card className="border-0 shadow-none h-fit w-full " >
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[100px] w-full " >
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" hideLabel />}
                            />
                            <Area
                                dataKey="desktop"
                                type="linear"
                                fill="transparent"
                                fillOpacity={0.4}
                                stroke="#7A5AF8"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    )
}
