import { RiUploadCloud2Line } from '@remixicon/react'
import { useImage } from '../global-state/useImageData';
import { useState } from 'react';


export default function ListingImage() {

    const { updateImage, image } = useImage((state) => state)
    const [preview, setPreview] = useState<Array<any>>([])

    const handleImageChange = (e: any) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file: any) => URL.createObjectURL(file));
        setPreview([...preview, ...previews])
        updateImage([...image, ...files]);
    }; 

    return (
        <div className={` w-full grid ${preview?.length === 1 ? "grid-cols-2" : preview?.length > 1 ? "grid-cols-3" : "grid-cols-1"} gap-2 h-[162px] relative `} >
            <label role='button' className=" w-full h-[162px] rounded-[8px] bg-gray100 flex flex-col justify-center items-center " >
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
            {preview[0] && (
                <div className=" w-full h-[162px] rounded-[8px] " >
                    <img src={preview[0]} className=' w-full h-full rounded-[8px] object-cover ' alt='one' />
                </div>
            )}
            <div className=" w-full flex flex-col relative h-[162px] gap-2  " >
                {preview[1] && (
                    <div className=" w-full h-[76px] rounded-[8px] " >
                        <img src={preview[1]} className=' w-full h-full rounded-[8px] object-cover ' alt='one' />
                    </div>
                )}
                {preview[2] && (
                    <div className=" w-full h-[76px] rounded-[8px] " >
                        <img src={preview[2]} className=' w-full h-full rounded-[8px] object-cover ' alt='one' />
                        {preview?.length > 3 && (
                            <div className=' w-full h-full rounded-[8px] absolute top-0 bg-black bg-opacity-30 flex justify-center items-center ' >
                                <div className=' h-[25px] rounded-full w-[63px] flex justify-center items-center bg-white '>
                                    <p className=' font-OpenRunde-Medium text-xs text-gray700 ' >{preview?.length - 3 + " more"}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
