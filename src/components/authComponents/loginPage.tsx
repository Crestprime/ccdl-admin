import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export default function LoginPage() {

    const navigate = useNavigate()

    return (
        <div className=" w-full h-screen flex flex-col items-center justify-center " >
            <div className=" max-w-[370px] flex flex-col items-center text-center " >
                <img className=" w-[133px] " src="/images/logo.png" alt="logo" />
                <h3 className=" text-headerTextColor font-semibold text-2xl mt-6 " >Welcome Back to Capital City</h3>
                <p className=" text-bodyTextColor mt-2 leading-[22.4px]  " >Login to continue to manage your projects, investments, and more.</p>
                <div className=" flex flex-col w-full gap-2 items-start mt-4 " >
                    <p className=" text-sm font-medium text-bodyTextColor " >Email</p>
                    <Input className=" h-[42px] " height={"42px"} width={"100%"} placeholder="example@domain.com" />
                    <Button onClick={()=> navigate({
                        to: "/dashboard"
                    })} variant={"main"} className="w-full rounded-full mt-4 h-[44px] " >Continue</Button>
                </div>
            </div>
        </div>
    )
}
