'use client'

import { handleSignup } from "@/action/Signup"
import { useActionState, useRef, useState } from "react"



function SignupForm() {

    const [data, formAction, isPending] = useActionState(handleSignup, 'Fill and sign up')
    const inputRefs = useRef({})
    const [error, setError] = useState(null)


    const handleSubmit = () => {
        const { username, password, number } = inputRefs.current

        fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify({ username: username.value, password: password.value, number: number.value })
        })
            .then((res) => { })
            .catch((error) => error)
    }

    return (
        <>
            <div className="w-3/5 max-h-screen flex flex-col items-center p-5 mt-3 border-2 rounded-sm">
                <h1>Sign Up</h1>

                {error && <div style={{ color: 'red' }}>{error}</div>}

                <form
                    action={formAction}
                    onSubmit={handleSubmit}
                    className="w-fit p-2 flex flex-col items-center"
                >

                    {/* <input type="hidden" name="userId" value={users.userId} /> */}


                    <input
                        placeholder="username"
                        name="username"
                        type="text"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                        // defaultValue={users?.username}
                        ref={(element) => { inputRefs.current.username = element }}
                    />

                    <input
                        placeholder="password"
                        name="password"
                        type="text"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                        // defaultValue={users?.password}
                        ref={(element) => { inputRefs.current.password = element }}
                    />

                    <input
                        placeholder="number"
                        name="number"
                        type="number"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                        // defaultValue={users?.number}
                        ref={(element) => { inputRefs.current.number = element }}
                    />

                    <input
                        type="submit"
                        className="w-full bg-black text-white border-2 p-2 m-2 rounded"
                        // value={users ? 'Edit' : 'Sign up'}
                        value='Sign up'
                    />

                    {isPending ? 'Loading...' : ''}

                </form>

                {data}

                {/* {JSON.stringify(users)} */}

            </div>
        </>
    )
}


export default SignupForm