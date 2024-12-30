import { ChatBtn } from '@/components/constructionComponents' 

export default function ProposalListingDetailPage() {
    return (
        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-end items-center " >
                <ChatBtn />
            </div>
            <div className=" w-full rounded-2xl flex h-[373px] gap-3 " >
                <div className=" w-full rounded-2xl h-full bg-red-500 " >

                </div>
                <div className=" w-full grid grid-cols-2 gap-3 " >
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                    <div className=" w-full h-full rounded-2xl bg-gray-600 " >

                    </div>
                </div>
            </div>
            <div className=" w-full flex gap-6 " >
                <div className=" w-full flex flex-col p-4 gap-6 border rounded-2xl " >
                    <div className=" w-full flex flex-col gap-2 pb-6 border-b " >
                        <div className=' flex items-center gap-2 ' >
                            <p className=' text-sm text-gray500 ' >Jan 12, 2024</p>
                            <div className=" flex items-center gap-1 h-[21px] text-xs text-warning600 font-medium rounded-2xl border border-warning600 justify-center px-2 " >
                                <div className=" w-2 h-2 rounded-full bg-warning600 " />PENDING
                            </div>
                        </div>
                        <h3 className=" text-2xl font-semibold " >Residential Construction</h3>
                        <p className=" text-sm text-gray700 " >12 Greenfield Avenue, Lekki, Lagos</p>
                    </div>
                    <div className=" w-full flex text-gray500 flex-col gap-2 pb-5 border-b " >
                        <p className=" font-semibold text-gray900 " >Description</p>
                        <p>Construction of a 5-bedroom duplex with modern amenities, covering 450 sqm.</p>
                        <ul className="list-disc pl-6 ">
                            <li>Site preparation and foundation work</li>
                            <li>Construction of the building structure, roofing, and exterior finishing</li>
                            <li>Installation of plumbing, electrical, and HVAC systems</li>
                            <li>Interior finishing, including flooring, painting, and fixtures</li>
                            <li>Landscaping and external works</li>
                        </ul>
                    </div>
                    <div className=" w-full flex text-gray500 flex-col gap-2 pb-5 border-b " >
                        <p className=" font-semibold text-gray900 " >Materials and Specifications</p>
                        <ul className="list-disc pl-6 ">
                            <li>Cement: Grade 42.5N</li>
                            <li>Roofing: Aluminum sheets</li>
                            <li>Flooring: Porcelain tiles</li>
                            <li>Windows: Double-glazed PVC</li>
                            <li>Doors: Hardwood</li>
                        </ul>
                    </div>
                    <div className=" w-full flex text-gray500 flex-col gap-2 pb-5 border-b " >
                        <p className=" font-semibold text-gray900 text-lg " >₦400,000,000</p>
                        <p>Total budget</p>
                    </div>
                </div>
                <div className=" w-fit " >
                    <div className=" w-[440px] flex flex-col gap-4 " > 
                        <div className=" w-full flex rounded-2xl text-gray500 flex-col gap-2 p-4 border " >
                            <p className=" font-semibold text-gray900 text-lg " >Mr. John Doe</p>
                            <p>12/09/1996, Designer, +234 700 123 4567, johndoe@gmail.com</p>
                        </div>
                        <div className=" w-full flex rounded-2xl text-gray500 flex-col gap-2 p-4 border " >
                            <p className=" font-semibold text-gray900 text-lg " >Owerri Nta, Owerri</p>
                            <p>123 Luxury Avenue, Owerri Nta, Owerri , Imo State, Nigeria</p>
                        </div>
                        <div className=" w-full flex rounded-2xl text-gray500 flex-col gap-2 p-4 border " >
                            <p className=" font-semibold text-gray900 " >Residential Construction</p>
                            {/* <p>123 Luxury Avenue, Owerri Nta, Owerri , Imo State, Nigeria</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
