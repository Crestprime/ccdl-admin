import CustomButton from "../shared/customButton";
import { RiArrowRightLine } from "@remixicon/react";
import { useUnsecureFetchData } from "@/hooks/useFetchData";
import { InviteData } from "@/models/auth";
import LoadingAnimation from "../shared/loadingAnimation";
import useAuth from "@/hooks/useAuth";
import Cookies from "js-cookie";


export default function InvitePage({ inviteId }: { inviteId: string }) {
 
    const { data, isLoading } = useUnsecureFetchData<InviteData>(`/admin-auth/invitation/${inviteId}`, ["invite", inviteId]); 
    const { acceptInvite, InvitePending } = useAuth()

    const submit = (event: any) => {
        event.preventDefault();
        Cookies.set("email", data?.email+"")  
        acceptInvite({
            id: inviteId
        })
    }

    return (
        <LoadingAnimation loading={isLoading} >
            <div className=' w-full h-screen flex flex-col items-center justify-center ' >
                <form onSubmit={submit} className=" max-w-[370px] flex flex-col items-center text-center " >
                    <img className=" w-[133px] " src="/images/logo.png" alt="logo" />
                    <h3 className=" text-headerTextColor font-semibold text-2xl mt-6 " >Welcome to Capital City</h3>
                    <div className=" w-[72px] h-[72px] my-4 " >
                        <img className=" w-full h-full" src="/images/avatar.png" alt="logo" />
                    </div>
                    <p className=" text-lg text-gray900 font-medium " >{data?.firstName + " " + data?.lastName}</p>
                    <p className=" text-sm text-gray500 " >{data?.position}</p>
                    {data?.workspaces && (
                        <div className=" mt-4 py-4 border-t w-full border-gray200 " >
                            <p className=" text-gray700 " >You have been invited to join {data?.workspaces[0]?.replace("_", " ")} {data?.workspaces?.length > 1 ? "& 1 Other workspace" : ""}</p>
                        </div>
                    )}
                    <CustomButton variant={"main"} type="submit" isLoading={InvitePending} className="w-full rounded-full mt-4 h-[44px] " >
                        Accept & Join <RiArrowRightLine size={"50px"} />
                    </CustomButton>
                    <p className=" text-sm mt-12 " >By clicking Accept & Join, you agree to our <span role="button" className=" text-primary600 font-medium " >Terms of Service</span> and <span role="button" className=" text-primary600 font-medium " >Privacy Policy</span>.</p>
                </form>
            </div>
        </LoadingAnimation>
    )
}
