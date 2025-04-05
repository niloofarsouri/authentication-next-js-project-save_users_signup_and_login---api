import { getById } from "@/action/Signup"




export async function EditUser({ params }) {


    const id = (await params).userId
    const user = await getById(id)
    console.log({ user })


    return (
        <>
            <h1>edit user: {id}</h1>
            {JSON.stringify(user)}
        </>
    )
}