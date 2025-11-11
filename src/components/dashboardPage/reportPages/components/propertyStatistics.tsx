"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
import { IReport } from "@/models/analytics"

export const description = "A bar chart with a custom label" 

export default function PropertyStatistics({ analytics }: { analytics: IReport }) {

 
    const chartData = [
        { browser: "chrome", visitors: analytics?.totalListings, fill: "#17B26A" },
        { browser: "safari", visitors: analytics?.totalAvailableListing, fill: "#EAAA08" },
        { browser: "firefox", visitors: analytics?.totalReserved, fill: "#3170F3" },
        { browser: "edge", visitors: analytics?.totalSold, fill: "#FF692E" }, 
    ]
    
    const chartConfig = {
        visitors: {
            label: "Amount",
        },
        chrome: {
            label: "Total",
            color: "var(--chart-1)",
        },
        safari: {
            label: "Available",
            color: "var(--chart-2)",
        },
        firefox: {
            label: "Reserved",
            color: "var(--chart-3)",
        },
        edge: {
            label: "Sold",
            color: "var(--chart-4)",
        }, 
    } satisfies ChartConfig


    return (

        <div className=" w-full h-full flex-col flex gap-3 p-4 border border-gray200 rounded-2xl " >
            <div className=" w-full flex justify-between " >
                <p className=" text-gray-800 font-medium " >Property Statistics</p>
            </div>
           <Card className="border-0 shadow-none h-fit w-full mt-auto " >
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            layout="vertical"
                            margin={{
                                left: 0,
                            }}  
                        >
                            <YAxis
                                dataKey="browser"
                                type="category"
                                tickLine={false}
                                tickMargin={0}
                                axisLine={false}
                                tickFormatter={(value) =>
                                    chartConfig[value as keyof typeof chartConfig]?.label
                                }
                            />
                            <XAxis dataKey="visitors" type="number" hide />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />
                            <Bar dataKey="visitors" layout="vertical" radius={5} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>

        </div>
    )
}