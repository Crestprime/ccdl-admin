import { RiFile2Line, RiUpload2Line } from "@remixicon/react"; 
import { LoadingAnimation } from "../shared"; 
import { IConstruction, IDocument } from "@/models/construction"; 
import { useFetchData } from "@/hooks/useFetchData";
import UploadDocuments from "../shared/uploadDocuments"; 


export default function ConstructionDocument(
    {
        item
    }: {
        item: IConstruction
    }
) {

    const { data, isLoading: loading } = useFetchData<Array<IDocument>>(`/documents/type/PROJECT/id/${item?.id}`, ["documents", item?.id+""]);

    return (

        <div className=" w-full flex flex-col border rounded-2xl " >
            <div className=" w-full flex items-center border-b justify-between h-[55px] px-6 " >
                <p className=" font-semibold text-gray700 " >Documents</p> 
                <UploadDocuments item={item?.id} type="PROJECT" />  
            </div>
            <LoadingAnimation loading={loading} length={data?.length} >
                <div className=" w-full flex gap-3 rounded-b-2xl bg-gray50 " >
                    <div className=" w-full max-h-[620px] p-6 grid overflow-y-auto grid-cols-4 gap-2 " >
                        {data?.map((item, index) => {
                            return (
                                <div key={index} className=" w-full hover:border-gray500 border border-white rounded-xl h-fit p-6 flex flex-col gap-4 bg-white " >
                                    <RiFile2Line size={"30px"} />
                                    <div className=" flex flex-col " >
                                        <p className=" text-gray800 text-xs " >{item?.documentItemType}</p>
                                        <p className=" text-gray600 text-xs " >{item?.documentType}</p>
                                    </div>
                                    <div className=" flex items-center gap-4 " >
                                        <a href={item?.link} target="_blank" >
                                            <RiUpload2Line size={"18px"} />
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </LoadingAnimation> 
        </div>
    )
}
