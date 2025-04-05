import Loginform from "@/components/form-login"



async function Login() {



    return (
        <>
            <section className="w-full m-auto">
                <div className="w-full max-h-screen mt-auto p-7 flex flex-col items-center justify-center">
                    <Loginform />
                </div>
            </section>
        </>
    )
}


export default Login