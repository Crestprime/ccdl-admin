import { CustomButton } from '@/components/shared'
import CustomInput from '@/components/shared/customInput'
import CustomSelect from '@/components/shared/customSelect'
import SelectProperty from '@/components/shared/selectProperty'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import useInvestment from '@/hooks/useInvestment'
import { durationData, propertyTypeData } from '@/models/dummydata'
import { RiPieChartLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function CreateInvestmentBtn() {

  const [type, setType] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const { isPending, mutate, isSuccess, payload, setPayload } = useInvestment()

  const clickHanlder = () => {
    if(!payload?.duration){
      toast.error("Enter Investment Duration")
    } else if(!payload?.roi){
      toast.error("Enter Return on Investment")
    } else if(!payload?.paymentFrequency){
      toast.error("Enter Frequency Payment")
    } else if(!payload?.minimiumInvestmentAmount){
      toast.error("Enter Minimium Investment Amount")
    } else if(!payload?.propertyId){
      toast.error("Enter Property ")
    } else {
      mutate(payload)
    }
  } 

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false)
    }
  }, [isSuccess])

  return (
    <div className=' w-fit ' >
      <Button type='button' onClick={()=> setIsOpen(true)} variant={"main"} className=" h-9 rounded-full w-fit text-sm " >
        Create plan
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen} >
        <DialogTrigger asChild>
          <button className="hidden" />

        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader className=' flex flex-col ' >
            <div className=' w-[48px] h-[48px] mb-2 rounded-[10px] border border-gray200 flex justify-center items-center ' >
              <RiPieChartLine size={"24px"} />
            </div>
            <DialogTitle >Create Investment plan</DialogTitle>
            <DialogDescription>
              CDefine the terms, ROI, and duration for your next investment opportunity
            </DialogDescription>
          </DialogHeader>
          <div className=' w-full flex flex-col gap-3 pb-5 ' >
            <CustomSelect label='Property Type' optionData={propertyTypeData} setValue={setType} />
            {type && (
              <SelectProperty label='Property Listing' name={'propertyId'}  setValue={(values: string) => setPayload({...payload, propertyId: values})} type={type} />
            )}
            <CustomSelect label='Duration' optionData={durationData}  setValue={(values: string) => setPayload({...payload, duration: values})} />
            <CustomInput setValue={(values: string) => setPayload({...payload, roi: values})} label="Return on Investment (ROI) %" type='number' name="roi" />
            <CustomInput setValue={(values: string) => setPayload({...payload, minimiumInvestmentAmount: values})} label="Min. Investment Amount" type='number' name="minimiumInvestmentAmount" />
            <CustomSelect label='Payment Frequency for ROI' optionData={durationData} setValue={(values: string) => setPayload({...payload, paymentFrequency: values})}  />
          </div>
          <DialogFooter >
            <Button variant={"outline"} onClick={()=> setIsOpen(false)} className=" w-full rounded-full " >Cancel</Button>
            <CustomButton isLoading={isPending} type='button' onClick={clickHanlder} variant={"main"} className=" w-full rounded-full " >Create</CustomButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
} 
