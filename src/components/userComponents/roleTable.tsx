import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useFetchData } from "@/hooks/useFetchData";
import { IRole } from "@/models/user";
import { CustomButton, LoadingAnimation } from "../shared";
import { dateFormat } from "@/utils/dateFormat";
import { usePagintion } from "@/store/usePagination";
import { useEffect, useState } from "react";
import CustomPagination from "../shared/customPagination";
import { capitalizeFLetter } from "@/utils/capitalLetter";
import { RiDeleteBin2Line } from "@remixicon/react";
import { DialogHeader, DialogFooter, DialogTrigger, Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import useAdmin from "@/hooks/useAdmin";

export default function RoleTable() {

    const { pageSize, page, updatePageSize, updatePage } = usePagintion((state) => state) 
    const [roleId, setRoleId] = useState<IRole>({} as IRole)

    const { deleteRole, isOpen, setIsOpen } = useAdmin()

    const { data, isLoading } = useFetchData<any>(`/admin-role`, ["role"], {
        limit: pageSize,
        page: page,
    }, true);

    useEffect(() => {
        updatePage(1)
        updatePageSize(10)
    }, [])

    const clickHandler = (item: IRole) => {
        setIsOpen(true)
        setRoleId(item)
    }

    return (
        <div className=" w-full flex flex-col gap-6 " >

            <LoadingAnimation loading={isLoading} >

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Role Name</TableHead>
                            <TableHead>Permissions</TableHead>
                            <TableHead>Statue</TableHead>
                            <TableHead>Date Joined</TableHead> 
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map((item: IRole, index: number) => {
                            return (
                                <TableRow className={` h-[72px] px-3 ${(index % 2 === 0) ? "bg-gray25" : ""} `} key={index}>
                                    <TableCell className="">
                                        {item?.name}
                                    </TableCell>
                                    <TableCell className="">
                                        {item?.permissions?.map((item, index) => {
                                            return (
                                                <p key={index} >{capitalizeFLetter(item)}</p>
                                            )
                                        })}
                                    </TableCell>
                                    <TableCell >
                                        <div className=" flex gap-2 items-center " >
                                            <div className={` ${item?.isActive ? " text-success800 bg-success100 " : " text-error800 bg-error100 "} h-[21px] rounded-2xl px-3 text-xs  w-fit flex justify-center items-center `} >
                                                {item?.isActive ? "Active" : "Inactive"}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {dateFormat(item?.createdAt)}
                                    </TableCell> 
                                    <TableCell>
                                        <button onClick={() => clickHandler(item)} className=" text-error600 " >
                                            <RiDeleteBin2Line size={20} className="text-destructive" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </LoadingAnimation>
            {data?.total > pageSize && (
                <CustomPagination totalElement={data?.total} />
            )}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <button className="hidden" />
                </DialogTrigger>

                <DialogContent className="sm:max-w-[320px]">
                    <DialogHeader className="flex flex-col items-start gap-2">
                        <div className="w-[48px] h-[48px] rounded-[10px] border border-gray-200 flex justify-center items-center">
                            <RiDeleteBin2Line size={24} className="text-destructive" />
                        </div>
                        <DialogTitle>Delete Role</DialogTitle>
                    </DialogHeader>

                    <div className="w-full flex flex-col gap-3 pb-5">
                        <p className="text-sm text-muted-foreground">
                            Are you sure you want to delete the{" "}
                            <span className="font-semibold text-foreground">
                                {roleId?.name}
                            </span>{" "}
                            role? This action cannot be undone.
                        </p>
                    </div>

                    <DialogFooter className="flex flex-col gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                            className="w-full rounded-full"
                        >
                            Cancel
                        </Button>

                        <CustomButton
                            isLoading={deleteRole.isPending}
                            type="button"
                            onClick={() => deleteRole.mutate(roleId?.id)}
                            variant="destructive"
                            className="w-full rounded-full"
                        >
                            Delete
                        </CustomButton>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}
