import { RiCloseLine, RiUploadCloud2Line } from '@remixicon/react'
import { useImage } from '../global-state/useImageData';
import { useEffect, useState } from 'react';


export default function ListingImage() {

    const { updateImage, image, preview: previewData, updatePreview } = useImage((state) => state)
    const [preview, setPreview] = useState<Array<any>>([])
    // const router = useRouter();


    useEffect(()=> {
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

    return (
        <div className={` w-full flex overflow-x-auto gap-2 h-fit relative `} >
            <div className=' w-fit flex gap-2 py-2 ' >
                <div className=' w-fit ' >

                    <label role='button' className=" w-[162px] h-[162px] rounded-[8px] bg-gray100 flex flex-col justify-center items-center " >
                        <div className=" w-8 h-8 rounded-[6px] text-gray600 bg-white text-center gap-1 shadow flex justify-center items-center " >
                            <RiUploadCloud2Line size={"13px"} />
                        </div>
                        <p className=" text-xs font-medium text-primary600 mt-3 " >Click to upload</p>
                        <p className=" text-xs " >or drag and drop</p>
                        <input
                            type="file"
                            className=' hidden '
                            multiple
                            accept="image/*"
                            onChange={handleImageChange} // Capture files for preview
                        />
                    </label>
                </div>
                {/* {preview[0] && (
                    <div className=" w-[162px] h-[162px] rounded-[8px] relative " >
                        <div role='button' onClick={() => removeData(0)} className=' w-6 h-6 flex justify-center items-center absolute -top-1 -right-1 rounded-full bg-red-600 ' >
                            <RiCloseLine color='white' className=' w-5 ' />
                        </div>
                        <img src={preview[0]} className=' w-full h-full rounded-[8px] object-cover ' alt='one' />
                    </div>
                )} */}
                {previewData?.length > 0 && (
                    <div className=" w-[162px] flex flex-col relative h-[162px] flex-wrap gap-2  " >
                        {previewData?.map((item, index) => {
                            return (
                                <div key={index} className=" w-full h-[76px] rounded-[8px] relative "
                                ><div role='button' onClick={() => removeData(index)} className=' w-6 h-6 flex justify-center items-center absolute -top-1 -right-1 rounded-full bg-red-600 ' >
                                        <RiCloseLine color='white' className=' w-5 ' />
                                    </div>
                                    <img src={item} className=' w-full h-full rounded-[8px] object-cover ' alt='one' />
                                </div>
                            )
                        })}
                    </div>
                )}
                <div className=" w-[162px] flex flex-col relative h-[162px] flex-wrap gap-2  " >
                    {preview?.map((item, index) => {
                        return (
                            <div key={index} className=" w-full h-[76px] rounded-[8px] relative "
                            ><div role='button' onClick={() => removeData(index)} className=' w-6 h-6 flex justify-center items-center absolute -top-1 -right-1 rounded-full bg-red-600 ' >
                                    <RiCloseLine color='white' className=' w-5 ' />
                                </div>
                                <img src={item} className=' w-full h-full rounded-[8px] object-cover ' alt='one' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
