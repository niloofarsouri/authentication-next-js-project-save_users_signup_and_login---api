import SignupForm from "@/components/form-signup"


export const metadata = {
    title: "Sign-up",
    description: "sign-up page ",
  };


async function Signup() {


    return (
        <>
            <div className="w-full max-h-screen flex flex-col items-center p-7">
                <SignupForm />
            </div>
        </>
    )
}


export default Signup