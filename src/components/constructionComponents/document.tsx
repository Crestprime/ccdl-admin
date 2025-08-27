import { RiCloseLine, RiFile2Line, RiUpload2Line } from "@remixicon/react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { CustomButton, LoadingAnimation } from "../shared";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useImage } from "../global-state/useImageData";
import useUploadDocument from "@/hooks/useUploadDocument";
import { IConstruction, IDocument } from "@/models/construction";
import CustomSelect from "../shared/customSelect";
import { DocumentData } from "@/models/dummydata";
import { useFetchData } from "@/hooks/useFetchData";


export default function ConstructionDocument(
    {
        item
    }: {
        item: IConstruction
    }
) { 

    const { updateImage, image, preview: previewData, updatePreview } = useImage((state) => state)
    const [preview, setPreview] = useState<Array<any>>([])

    const [documentType, setDocumentType] = useState("")
    // const router = useRouter();

    const { uploading, isLoading, uploadImage, isOpen, setIsOpen } = useUploadDocument(
        {
            id: item?.id,
            name: documentType,
            type: "PROJECT"
        }
    )


    useEffect(() => {
        updateImage([])
        setPreview([])
    }, [])

    const handleImageChange = (e: any) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file: any) => URL.createObjectURL(file));
        setPreview([...preview, ...previews])
        updateImage([...image, ...files]);
    };

    const removeData = (index: any) => {

        let clonepreview = [...preview]
        let cloneimage = [...image]
        let clonepreviewData = [...previewData]

        clonepreview.splice(index, 1);
        cloneimage.splice(index, 1);

        updateImage(cloneimage)
        setPreview(clonepreview)

        if (clonepreviewData?.length > 0) {

            clonepreviewData.splice(index, 1);
            updatePreview(clonepreviewData)
        }
    } 

    const clickHandler = () => {

        const formdata = new FormData()
        image.map((item) => {
            formdata.append("file", item)
        })
        uploadImage(formdata)
    }


    const { data, isLoading: loading } = useFetchData<Array<IDocument>>(`/documents/type/PROJECT/id/${item?.id}`, ["documents"]);

    // const downloadFromAws = async (url: string) => {
    //     // Extract extension from the URL (ignore query params)
    //     const cleanUrl = url.split("?")[0];
    //     const ext = cleanUrl.split(".").pop() || "bin";

    //     const response = await fetch(url);
    //     const blob = await response.blob();

    //     const link = document.createElement("a");
    //     link.href = URL.createObjectURL(blob);
    //     link.download = `file.${ext}`; // name it however you want
    //     link.click();

    //     URL.revokeObjectURL(link.href);
    //   };

    return (

        <div className=" w-full flex flex-col border rounded-2xl " >
            <div className=" w-full flex items-center border-b justify-between h-[55px] px-6 " >
                <p className=" font-semibold text-gray700 " >Documents</p>
                <button onClick={() => setIsOpen(true)} className=" flex gap-1 items-center text-gray500 font-medium text-sm " >
                    <RiUpload2Line size={"20px"} />
                    Upload Document
                </button>
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
            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <button className="hidden" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px] ">
                    <DialogHeader className=' flex flex-col ' >
                        <DialogTitle className=" text-center " >Upload Documents</DialogTitle>
                        <DialogDescription className=" text-center " >
                            Make them clear enough for client to see
                        </DialogDescription>
                    </DialogHeader>
                    <div className=" w-full max-h-[60vh] flex flex-col gap-3 " >
                        <label className=" w-full h-[125px] border rounded-2xl border-primary600 flex flex-col justify-center items-center " >
                            <div className=" w-[40px] h-[40px] flex justify-center items-center border rounded-[8px] " >
                                <RiUpload2Line size={"20px"} />
                            </div>
                            <p className=" text-gray-600 text-xs mt-2 " ><span className=" text-primary600 " >Click to upload </span>or drag and drop</p>
                            <p className=" text-gray-600 text-xs " >SVG, PNG, JPG or GIF (max. 800x400px)</p>
                            <input
                                type="file"
                                className=' hidden '
                                // accept="image/*"
                                onChange={handleImageChange} // Capture files for preview
                            />
                        </label>
                        {image?.map((item, index) => {
                            return (
                                <div key={index} className=" w-full h-[96px] rounded-[8px] relative flex items-center px-4 gap-2 border " >
                                    <div role='button' onClick={() => removeData(index)} className=' w-6 h-6 flex justify-center items-center absolute -top-1 -right-1 rounded-full bg-red-600 ' >
                                        <RiCloseLine color='white' className=' w-5 ' />
                                    </div>
                                    <RiFile2Line size={"30px"} />
                                    <div className=" flex flex-col text-gray-600 " >
                                        <p className=" text-sm font-medium " >{item?.name}</p>
                                        <p className=" text-xs " >{(item?.size / 1024).toFixed(2)} KB</p>
                                    </div>
                                </div>
                            )
                        })}
                        <CustomSelect label='Document Type' optionData={DocumentData} setValue={(values: string) => setDocumentType(values)} />
                    </div>
                    <DialogFooter className=" flex flex-col " >
                        <Button variant={"outline"} onClick={() => setIsOpen(false)} className=" w-full rounded-full " >Cancel</Button>
                        <CustomButton isLoading={isLoading || uploading} onClick={() => clickHandler()} type='button' variant={"main"} className=" w-full rounded-full " >Attach files</CustomButton>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
