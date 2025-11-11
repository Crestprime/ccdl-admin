import { CustomButton } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import useConstruction from "@/hooks/useConstruction";
import { RiCloseLine, RiDeleteBinLine } from "@remixicon/react"; 


export default function DeleteTaskBtn(
    {
        type,
        id, 
        name
    }: {
        type: "task" | "subtask",
        id?: string | any,
        name?: string
    }
) {

    const { isOpen, setIsOpen, deleteTaskMutate, deleteSubTaskMutate, deletingSubTask, deletingTask } = useConstruction()

    return (
        <div className=" w-fit " >
            {type === "task" && (
                <button onClick={() => setIsOpen(true)} >   
                    <RiDeleteBinLine size={"20px"} />
                </button>
            )}
            {type === "subtask" && (
                <button className=" mt-[6px] " onClick={() => setIsOpen(true)} >
                    <RiCloseLine size={"20px"} />
                </button>
            )}
            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <button className="hidden" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[300px] ">
                    <DialogHeader className=' flex flex-col ' >
                        <div className=' w-full mb-2 rounded-[10px] flex justify-center items-center ' >
                            <div className=" w-fit p-3 rounded-lg border " >
                                <RiDeleteBinLine color="red" size={"50px"} />
                            </div>
                        </div>
                        <DialogTitle className=" text-center " >{type === "task" ? `Delete Task` : `Delete Sub Task`}</DialogTitle>
                        <DialogDescription className=" text-center " >
                            Are you sure you want to delete {name} {type}
                        </DialogDescription>
                    </DialogHeader> 
                    <DialogFooter className=" flex flex-col " >
                        <Button variant={"outline"} onClick={() => setIsOpen(false)} className=" w-full rounded-full " >Cancel</Button>
                        {type === "task" && (
                            <CustomButton type='button' isLoading={deletingTask} onClick={() => deleteTaskMutate(id)} variant={"main"} className=" w-full rounded-full " >Confirm</CustomButton>
                        )}
                        {type === "subtask" && (
                            <CustomButton type='button' isLoading={deletingSubTask} onClick={() => deleteSubTaskMutate(id)} variant={"main"} className=" w-full rounded-full " >Confirm</CustomButton>
                        )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}