'use client'


import { useEffect } from "react"


function Localstorage({ token }) {

    useEffect(() => {
        // localStorage.setItem('accessToken', (token))


        try {
            localStorage.setItem('accessToken', JSON.stringify(token));
        } catch (error) {
            console.error("Local storage error:", error);
        }
    }, [token])

    console.log({ token })

    // return (
    //     <>

    //     </>
    // )
}


export default Localstorage