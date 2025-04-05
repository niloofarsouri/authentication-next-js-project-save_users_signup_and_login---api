'use client'

import { LoginAction } from "@/action/Login"
import { useActionState } from "react"


function Loginform() {

    const [data, formAction, isPending] = useActionState(LoginAction, "Enter your username and password")



    return (
        <>
            <div className="flex flex-col items-center p-9 m-auto border-2 rounded-sm">

                <h1>Login </h1>

                <form className="w-fit p-2 flex flex-col items-center" action={formAction}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                    />

                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                    />

                    <input
                        type="submit"
                        value="Log in"
                        className="w-full bg-black text-white p-2 my-2 border-slate-300 border-2 rounded"
                    />

                    {isPending ? 'Loading...' : ''}

                </form>

                {data}

            </div>
        </>
    )
}


export default Loginform

