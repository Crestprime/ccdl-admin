import { CustomButton, FormInput, FormTextArea } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import useConstruction from "@/hooks/useConstruction";
import { RiAddLine, RiBuilding4Line } from "@remixicon/react";



export default function CreateTaskBtn(
    {
        type,
        id
    }: {
        type: "task" | "subtask",
        id?: string | any
    }
) {

    const { isLoading, isLoadingSub, isOpen, setIsOpen, formik, formikSub } = useConstruction()

    // useEffect(() => {
    //     if (type === "task") {
    //         formik.setFieldValue("projectId", id)
    //     } else if (type === "subtask") {
    //         formikSub.setFieldValue("projectTaskId", id)
    //     }
    // }, [id]) 

    console.log(formik.values); 

    const changeHandler = (name: string, item: string) => {
        formik.setFieldValue(name, item)
        formik.setFieldValue("projectId", id)
    } 

    const changeHandlerSub = (name: string, item: string) => {
        formikSub.setFieldValue(name, item)
        formikSub.setFieldValue("projectTaskId", id)
    } 
    

    return (
        <div className=" w-fit " >
            {type === "task" && (
                <button onClick={() => setIsOpen(true)} className=" text-white bg-primary600 font-medium text-xs h-[36px] w-fit flex justify-center items-center rounded-full px-4 " >
                    <RiAddLine size={"20px"} />
                    Create new task
                </button>
            )}
            {type === "subtask" && (
                <button className="" onClick={() => setIsOpen(true)} >
                    <RiAddLine size={"20px"} />
                </button>
            )}
            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <button className="hidden" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader className=' flex flex-col ' >
                        <div className=' w-[48px] h-[48px] mb-2 rounded-[10px] border border-gray200 flex justify-center items-center ' >
                            <RiBuilding4Line size={"24px"} />
                        </div>
                        <DialogTitle >{type === "task" ? "Create New Task" : "Sub Task for Foundation Phase"}</DialogTitle>
                        <DialogDescription>
                            Make name clear enough for all parties to understand
                        </DialogDescription>
                    </DialogHeader>
                    {type === "task" && (
                        <div className=' w-full flex flex-col gap-3 pb-5 ' >
                            <FormInput setValue={(name, value)=> changeHandler(name, value)} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Task Name" name="name" placeholder="e.g. Foundation Phase" />
                            <FormTextArea setValue={(name, value)=> changeHandler(name, value)} errors={formik?.errors} touched={formik?.touched} value={formik?.values} label="Task Description" name="description" />
                        </div>
                    )}
                    {type === "subtask" && (
                        <div className=' w-full flex flex-col gap-3 pb-5 ' >
                            <FormInput setValue={(name, value)=> changeHandlerSub(name, value)} errors={formikSub?.errors} touched={formikSub?.touched} value={formikSub?.values} label="Subtask" name="name" placeholder="e.g. Site Clearing and Preparation" />
                        </div>
                    )}
                    <DialogFooter >
                        <Button variant={"outline"} onClick={() => setIsOpen(false)} className=" w-full rounded-full " >Cancel</Button>
                        {type === "task" && (
                            <CustomButton type='button' isLoading={isLoading} onClick={() => formik.handleSubmit()} variant={"main"} className=" w-full rounded-full " >Confirm</CustomButton>
                        )}
                        {type === "subtask" && (
                            <CustomButton type='button' isLoading={isLoadingSub} onClick={() => formikSub.handleSubmit()} variant={"main"} className=" w-full rounded-full " >Confirm</CustomButton>
                        )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}