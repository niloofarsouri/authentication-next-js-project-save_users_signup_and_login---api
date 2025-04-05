import Loginform from "@/components/form-login"
import Localstorage from "@/components/local-storage"



async function Login() {



    return (
        <>
            <section className="w-full m-auto">
                <div className="w-full max-h-screen mt-auto p-7 flex flex-col items-center justify-center">
                    <Loginform />
                </div>

                <Localstorage/>
            </section>
        </>
    )
}


export default Login