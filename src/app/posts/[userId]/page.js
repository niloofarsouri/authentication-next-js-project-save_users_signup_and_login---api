import { getById } from "@/action/Signup"




async function Posts({ params }) {

    const id  = (await params).userId
    const user = await getById(id)
    console.log({user})


    return (
        <>
            <h1>User of : {id}</h1>
            {JSON.stringify(user)}
        </>
    )

}


export default Posts