import { CustomButton, FormInput } from "@/components/shared";
import CustomMultiSelect from "@/components/shared/formMultiSelect";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter, Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import useAdmin from "@/hooks/useAdmin";
import { RiUserAddLine } from "@remixicon/react";
import { FormikProvider } from "formik";

export function RoleBtn(
    {
        variant
    }: {
        variant?: "outline" | "main"
    }
) {

    const { isOpen, setIsOpen, formikRole, addRoleManagement } = useAdmin()

    return (
        <>
            <FormikProvider value={formikRole}>
                <Button onClick={() => setIsOpen(true)} variant={variant ?? "main"} className=" h-[40px] text-sm font-medium rounded-full " >
                    Add Role
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
                            <DialogTitle >{"Role Creation"}</DialogTitle> 
                        </DialogHeader>
                        <div className=' w-full flex flex-col gap-3 pb-5 ' >
                            <FormInput setValue={formikRole.setFieldValue} errors={formikRole?.errors} touched={formikRole?.touched} value={formikRole?.values} label="Name" name="name" placeholder="e.g Flora" />
                            <CustomMultiSelect label="Permissions" options={[
                                {
                                    label: "HOME",
                                    value: "HOME"
                                },
                                {
                                    label: "PROPERTY",
                                    value: "PROPERTY"
                                }
                            ]} name={"permissions"} />
                        </div>
                        <DialogFooter >
                            <Button variant={"outline"} onClick={() => setIsOpen(false)} className=" w-full rounded-full " >Cancel</Button>
                            <CustomButton type='button' isLoading={addRoleManagement?.isPending} onClick={() => formikRole.handleSubmit()} variant={"main"} className=" w-full rounded-full " >Submit</CustomButton>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </FormikProvider> 
        </>
    )
}