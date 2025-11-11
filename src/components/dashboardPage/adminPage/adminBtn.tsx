import { FormSelect, CustomButton, FormInput } from "@/components/shared";
import { convertDataForSelect } from "@/components/shared/convertDataForSelect";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription  } from "@/components/ui/dialog";
import useAdmin from "@/hooks/useAdmin"; 
import { useFetchData } from "@/hooks/useFetchData";
import { RiUserAddLine } from "@remixicon/react"; 

export function AdminBtn(
    {
        variant
    } : {
        variant?: "outline" | "main"
    }
) {

    const { isOpen, setIsOpen, formik, isLoading } = useAdmin()

    const { data } = useFetchData<any>(`/admin-role`, ["role"], {
        limit: 30,
        page: 1,
    }, true);

    const options = convertDataForSelect(data?.data ?? [], ["name", "name"]);

    return (
        <>
            <Button onClick={()=> setIsOpen(true)} variant={variant ?? "main"} className=" h-[40px] text-sm font-medium rounded-full " >
                Invite Staff
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <button className="hidden" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader className=' flex flex-col ' >
                        <div className=' w-[48px] h-[48px] mb-2 rounded-[10px] border border-gray200 flex justify-center items-center ' >
                            <RiUserAddLine size={"24px"} />
                        </div>
                        <DialogTitle >{"Invite Staff"}</DialogTitle>
                        <DialogDescription>
                            Send invitations to new team members to join Capital City Estates
                        </DialogDescription>
                    </DialogHeader>
                    <div className=' w-full flex flex-col gap-3 pb-5 ' >
                        <FormInput setValue={formik.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="First Name" name="firstName" placeholder="e.g Flora" />
                        <FormInput setValue={formik.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Last Name" name="lastName" placeholder="e.g Silvia" /> 
                        <FormInput setValue={formik.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Email Address" name="email" placeholder="e.g john_doe@gmail.com" />
                        <FormInput setValue={formik.setFieldValue} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Position" name="position" placeholder="e.g Manager" /> 
                        <FormSelect setValue={formik.setFieldValue} errors={formik?.errors} optionData={options} touched={formik?.touched} value={formik?.values} label="Role" name="role" placeholder="Select Role" />
                    </div>
                    <DialogFooter >
                        <Button variant={"outline"} onClick={() => setIsOpen(false)} className=" w-full rounded-full " >Cancel</Button> 
                        <CustomButton type='button' isLoading={isLoading} onClick={() => formik.handleSubmit()} variant={"main"} className=" w-full rounded-full " >Invite</CustomButton> 
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}