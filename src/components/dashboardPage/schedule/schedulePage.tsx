import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

export default function SchedulePage() {

    const data = [
        {
            Id: 1,
            Subject: 'Meeting',
            StartTime: new Date(2023, 1, 15, 10, 0),
            EndTime: new Date(2023, 1, 15, 12, 30),
        },
        {
            Id: 2,
            Subject: 'Land Sale',
            StartTime: new Date(2023, 1, 16, 10, 0),
            EndTime: new Date(2023, 1, 16, 12, 30),
        },
        {
            Id: 3,
            Subject: 'Payment Due',
            StartTime: new Date(2023, 1, 20, 10, 0),
            EndTime: new Date(2023, 1, 20, 12, 30),
        },
        {
            Id: 4,
            Subject: 'Renewal of Rent',
            StartTime: new Date(2023, 1, 26, 10, 0),
            EndTime: new Date(2023, 1, 26, 12, 30),
        },
        // {
        //     Id: 1,
        //     Subject: 'Meeting',
        //     StartTime: new Date(2023, 1, 15, 10, 0),
        //     EndTime: new Date(2023, 1, 15, 12, 30),
        // },
    ];


    const datarequest = [
        {
            type: "Inspection",
            property: "Green Valley Plot 1",
            client: "Mr. John Doe",
            agent: "Daan Ylva",
            status: "Approved",
            date: "Nov 10, 2024",
            time: "02:30 PM"
        },
        {
            type: "Inspection",
            property: "Green Valley Plot 1",
            client: "Mr. John Doe",
            agent: "Daan Ylva",
            status: "Pending",
            date: "Nov 10, 2024",
            time: "02:30 PM"
        },
        {
            type: "Inspection",
            property: "Green Valley Plot 1",
            client: "Mr. John Doe",
            agent: "Daan Ylva",
            status: "Rescheduled",
            date: "Nov 10, 2024",
            time: "02:30 PM"
        },
        {
            type: "Inspection",
            property: "Green Valley Plot 1",
            client: "Mr. John Doe",
            agent: "Daan Ylva",
            status: "Rejected",
            date: "Nov 10, 2024",
            time: "02:30 PM"
        },
        {
            type: "Inspection",
            property: "Green Valley Plot 1",
            client: "Mr. John Doe",
            agent: "Daan Ylva",
            status: "Approved",
            date: "Nov 10, 2024",
            time: "02:30 PM"
        },
    ]

    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex items-center justify-between " >
                <div className=" flex flex-col " >
                    <h3 className=" font-semibold text-lg " >Schedule</h3>
                    <p className=" text-gray500 text-sm " >View and manage all your events, inspections, and allocations</p>
                </div>
                <Button variant={"main"} className=" h-9 rounded-full w-fit text-sm " >
                    New event
                </Button>
            </div>

            <Tabs defaultValue="calendar" className="w-full ">
                <TabsList className="grid w-fit grid-cols-2 h-fit ">
                    <TabsTrigger className=" h-[36px] " value="calendar">Calendar</TabsTrigger>
                    <TabsTrigger className=" h-[36px] " value="requests">Requests</TabsTrigger>
                </TabsList>
                <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="calendar">
                    <div className=" w-full " >
                        <ScheduleComponent
                            selectedDate={new Date(2023, 1, 15)}
                            eventSettings={{
                                dataSource: data,
                            }}
                        >
                            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                        </ScheduleComponent>
                    </div>
                </TabsContent>
                <TabsContent className=" w-full pt-3 flex flex-col gap-5 " value="requests">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Event Type</TableHead>
                                <TableHead>Property</TableHead>
                                <TableHead>Client </TableHead>
                                <TableHead>Agent</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {datarequest.map((item, index) => {
                                return (
                                    <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                        <TableCell className="">{item?.type}</TableCell>
                                        <TableCell className="">{item?.property}</TableCell>
                                        <TableCell className="">{item?.client}</TableCell>
                                        <TableCell className="">{item?.agent}</TableCell>
                                        <TableCell>
                                            <div className={` ${item?.status?.includes("Approved") ? " text-success800 bg-success100 " : item?.status?.includes("Rejected") ? " text-error800 bg-error100 " : item?.status?.includes("Rescheduled") ? " text-blue800 bg-blue100 " : " text-warning800 bg-warning100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                {item?.status}
                                            </div>
                                        </TableCell>
                                        <TableCell className="">
                                            <div className=" flex flex-col " >
                                                <p>{item?.date}</p>
                                                <p>{item?.time}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="">
                                            {item?.status === "Approved" && (
                                                <div className=" flex gap-3 justify-end " >
                                                    <p role="button" className=" text-sm font-medium text-gray600 " >Cancel</p>
                                                    <p role="button" className=" text-sm font-medium text-blue800 " >Edit</p>
                                                </div>
                                            )}
                                            {item?.status === "Pending" && (
                                                <div className=" flex gap-3 justify-end " >
                                                    <p role="button" className=" text-sm font-medium text-error700 " >Reject</p>
                                                    <p role="button" className=" text-sm font-medium text-blue800 " >Approve</p>
                                                </div>
                                            )}
                                            {item?.status === "Rescheduled" && (
                                                <div className=" flex gap-3 justify-end " >
                                                    <p role="button" className=" text-sm font-medium text-gray600 " >Cancel</p>
                                                    <p role="button" className=" text-sm font-medium text-blue800 " >Edit</p>
                                                </div>
                                            )}
                                            {item?.status === "Rejected" && (
                                                <div className=" flex gap-3 justify-end " > 
                                                    <p role="button" className=" text-sm font-medium text-blue800 " >Edit</p>
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>

        </div>
    )
}
