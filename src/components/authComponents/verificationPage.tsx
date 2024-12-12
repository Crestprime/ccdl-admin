import { Button } from "../ui/button";
import PinInput from 'react-pin-input';


export default function LoginPage() {
    return (
        <div className=" w-full h-screen flex flex-col items-center justify-center " >
            <div className=" max-w-[438px] flex flex-col items-center text-center " >
                <img className=" w-[133px] " src="/images/logo.png" alt="logo" />
                <h3 className=" text-headerTextColor font-semibold text-2xl mt-6 " >Check your email for a code</h3>
                <p className=" text-bodyTextColor mt-2 leading-[22.4px]  " >We sent an OTP code sent to <span className=" text-headerTextColor " >suttonnicole@anderson.com</span></p>
                <div className=" flex flex-col w-full gap-2 items-center mt-4 " > 
                    <PinInput
                        length={6}
                        initialValue=""
                        secret
                        secretDelay={100}
                        onChange={(value, index) => { console.log(value+" "+index) }}
                        type="numeric"
                        inputMode="number"
                        style={{ padding: '0px' }}
                        inputStyle={{ borderColor: '#D0D5DD', borderRadius: "8px" }}
                        inputFocusStyle={{ borderColor: 'blue' }}
                        onComplete={(value, index) => { console.log(value+" "+index) }}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                    <Button disabled={true} variant={"main"} className="w-[370px] rounded-full mt-4 h-[44px] " >Continue</Button>
                    <p className=" text-sm text-center mt-3 " >{`Didn't get any code?`} <span role="button" className=" text-primaryColor font-medium underline " >Resend Code</span></p>
                </div>
            </div>
        </div>
    )
}
