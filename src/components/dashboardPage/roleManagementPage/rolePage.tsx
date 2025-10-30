import { RoleTable } from "@/components/userComponents";
import { RoleBtn } from "./roleBtn";

export default function RolePage() {
    return(

        <div className=" w-full flex h-auto gap-6 flex-col  " >
            <div className=" w-full flex justify-between pb-4 border-b items-center " >
                <div className=" flex flex-col  " >
                    <h3 className=" font-semibold text-lg " >Role Management</h3>
                    <p className=" text-sm text-bodyTextColor " >View and manage all roles</p>
                </div> 
                <RoleBtn />
            </div>
            <RoleTable />
        </div>
    )
}