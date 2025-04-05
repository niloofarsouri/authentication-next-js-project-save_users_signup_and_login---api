// import { readUser } from "@/action/Signup"
// import Link from "next/link"




// async function Postspage() {

//     const users = await readUser()


//     return (
//         <>
//             <h1>users:</h1>

//             <section className="flex justify-center">
//                 <div className="w-3/4 bg-sky-200 flex justify-center items-center p-3">
//                     {
//                         users.map(item => {
//                             return (
//                                 <Link href={`/posts/${item.userId}`} key={item.userId}>
//                                     <div className="p-2 m-5 flex flex-col border-b-2">
//                                         <p>username: {item.username}</p>
//                                         <p>password: {item.password}</p>
//                                         <p>userId: {item.userId}</p>
//                                     </div>
//                                 </Link>
//                             )
//                         })
//                     }
//                 </div>
//             </section>
//         </>
//     )
// }


// export default Postspage


'use client'

import { usePathname } from "next/navigation"



function Posts() {

    const path = usePathname()

    if (path === '/posts') {
        alert('hi')
    }

    return (
        <>
            <h1>{path}</h1>
        </>
    )
}


export default Posts