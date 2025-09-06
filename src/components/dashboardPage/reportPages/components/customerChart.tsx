"use client"
 
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A simple area chart"

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


export default function CustomerChart() {
    return (
        <div className=" w-full flex-col flex gap-3 p-4 border border-gray200 rounded-2xl " >
            <div className=" w-full flex justify-between " >
                <p className=" text-gray-800 font-medium " >Customers</p>
            </div>
            <div className=" flex flex-col " >
                <p className=" text-lg font-semibold text-gray-900 " >85</p>
                <p className=" text-[10px] text-success500 " >+23.5%</p>
            </div>
            <Card className="border-0 shadow-none h-fit w-full " >
                <CardContent>
                    <ChartContainer config={chartConfig} className=" w-full h-[160px] " >
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
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="#0BA25C26"
                                fillOpacity={0.4}
                                stroke="#0BA25C"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    )
}
