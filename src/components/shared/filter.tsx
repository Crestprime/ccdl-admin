import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuPortal,
    // DropdownMenuSeparator,
    // DropdownMenuShortcut,
    // DropdownMenuSub,
    // DropdownMenuSubContent,
    // DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useFilterStore } from "@/store/filterStore";
import { RiAddCircleLine } from "@remixicon/react"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Filter(
    {
        type
    }: { type?: "listing" | "investment" }
) {


    const { status, setStatus } = useFilterStore((state) => state);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"} className=" w-fit h-11 " >
                    <RiAddCircleLine size={"15px"} />
                    Add filter
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                    {type === "investment" && ( 
                        <RadioGroup defaultValue={status} >
                            <DropdownMenuItem>
                                <div onClick={() => setStatus("ACTIVE")} className="flex items-center gap-3">
                                    <RadioGroupItem value="ACTIVE" id="r1" />
                                    <Label htmlFor="r1">Active</Label>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div onClick={() => setStatus("NOT_STARTED")} className="flex items-center gap-3">
                                    <RadioGroupItem value={"NOT_STARTED"} id="r2" />
                                    <Label htmlFor="r2">Not Started</Label>
                                </div>
                            </DropdownMenuItem>
                        </RadioGroup>
                    )}
                    {/* <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem> */}
                </DropdownMenuGroup>
                {/* <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
