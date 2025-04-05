'use client'

import { useRouter } from "next/navigation"


export default function ReadMore() {

    const router = useRouter()

    return (
        <div className="text-center m-3 text-sky-950">
            <button onClick={() => router.push('/contact')} className="underline">
                Click here to contact us
            </button>
        </div>
    )
}