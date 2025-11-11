import { RiArrowDownSLine, RiArrowRightSLine, RiAttachmentLine, RiCloseLine, RiFile2Line, RiInformationLine, RiUpload2Line } from "@remixicon/react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { IConstruction } from "@/models/construction";
import { capitalizeFLetter } from "@/utils/capitalLetter";
import { useImage } from "../global-state/useImageData";
import useUploadAttachment from "@/hooks/useUploadAttachment";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { CustomButton, LoadingAnimation } from "../shared";
import { Button } from "../ui/button";
import CircularProgressBar from "../shared/circleGraph";
import { getCompletedPercentage } from "@/utils/getPercentage";


export default function ConstructionComment(
    {
        data
    }: {
        data: IConstruction
    }
) {

    const [tab, setTab] = useState(-1)

    const { updateImage, image, preview: previewData, updatePreview } = useImage((state) => state)
    const [preview, setPreview] = useState<Array<any>>([])

    const [subTaskId, setSubTaskId] = useState("")
    // const router = useRouter();

    const { uploading, isLoading, uploadImage, isOpen, setIsOpen, updateSubTaskStatus } = useUploadAttachment(
        {
            id: subTaskId,
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

    const openHandler = (item: any) => {
        setSubTaskId(item)
        setIsOpen(true)
    }

    const changeStatus = (item: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED", id: string) => {
        updateSubTaskStatus({
            subTaskId: id,
            taskStatus: item
        })
    }

    return (
        <div className=" w-full flex flex-col gap-5 border rounded-2xl " >
            <div className=" w-full h-[55px] items-center flex px-3 border-b justify-between " >
                <p className=" font-semibold text-gray-700 " >Track Project Progress</p>
                <div className=" gap-3 items-center " >
                    <div className=" flex items-center gap-2 " >
                        <RiInformationLine />
                    </div>
                </div>
            </div>
            <LoadingAnimation loading={false} length={data?.tasks?.length} >
                <div className=" w-full flex flex-col p-4 gap-4 " >
                    {data?.tasks?.map((item, index) => {
                        return (
                            <div key={index} className=" w-full flex flex-col gap-4 bg-gray-100 rounded-2xl p-2 " >
                                <div className=" w-full h-[58px] rounded-2xl  flex gap-3 items-center justify-between px-3 " >
                                    <div role="button" onClick={() => setTab((prev) => prev === index ? -1 : index)} className=" gap-3 flex items-center " >
                                        {tab === index ? (
                                            <RiArrowDownSLine />
                                        ) : (
                                            <RiArrowRightSLine />
                                        )}
                                        <p className=" font-semibold text-gray-700 w-[500px] " >{item?.name}</p>
                                    </div>
                                    <div className=" gap-3 items-center flex " > 
                                        <CircularProgressBar isEvent={true} size={35} strokeWidth={3} progress={getCompletedPercentage(data.tasks[index])} />
                                        <p className=" text-gray-500 font-medium text-sm " >{item?.SubTasks?.length} Tasks</p>
                                    </div>
                                </div>
                                {tab === index && (
                                    <>
                                        {item?.SubTasks?.map((subitem, subindex) => {
                                            return (
                                                <div key={subindex} className=" w-full h-[48px] rounded-[12px] bg-white shadow-sm flex gap-3 items-center justify-between px-3 " >
                                                    <div className=" flex gap-2 items-center " >
                                                        <p className=" text-sm " >{subitem?.name}</p>

                                                        <DropdownMenu >
                                                            <DropdownMenuTrigger className={` outline-none flex items-center gap-1 ${subitem?.status === "NOT_STARTED" ? " bg-[#F2F4F7] text-gray500 " : subitem?.status === "IN_PROGRESS" ? " bg-warning100 text-warning800 " : " bg-success100 text-success800 "} rounded-full h-[21px] pl-3 pr-1 text-xs font-medium `} >
                                                                {capitalizeFLetter(subitem?.status?.replace("_", " "))}
                                                                <RiArrowDownSLine />
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className=" ml-10 mt-6 " >
                                                                <DropdownMenuItem onClick={() => changeStatus("NOT_STARTED", subitem?.id + "")} >
                                                                    <div className=" flex gap-2 items-center " >
                                                                        <p className=" text-sm text-gray-700 font-medium" >Not started</p>
                                                                    </div>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => changeStatus("IN_PROGRESS", subitem?.id + "")} >
                                                                    <div className=" flex gap-2 items-center " >
                                                                        <p className=" text-sm text-gray-700 font-medium" >In Progress</p>
                                                                    </div>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => changeStatus("COMPLETED", subitem?.id + "")} >
                                                                    <div className=" flex gap-2 items-center " >
                                                                        <p className=" text-sm text-gray-700 font-medium" >Completed</p>
                                                                    </div>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                    <div onClick={() => openHandler(subitem?.id)} className=" flex gap-2 cursor-pointer text-sm items-center " >
                                                        <RiAttachmentLine size={"20px"} />
                                                        <p>{subitem?.attachments?.length} Attachments</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
            </LoadingAnimation>

            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <button className="hidden" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px] ">
                    <DialogHeader className=' flex flex-col ' >
                        <DialogTitle >Upload image Proof of Project</DialogTitle>
                        <DialogDescription >
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
