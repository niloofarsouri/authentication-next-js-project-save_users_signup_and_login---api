import { getByUsername } from "@/action/Signup"



export async function generateMetadata({ params }) {

    const username = (await params).username
    const title = await getByUsername(username)
    return {
        title: title.title
    }
};


export default async function DashboardUserId({ params }) {

    // const userId = (await params).userId
    // const user = await getById(userId)
    // console.log({ user })

    const username = (await params).username
    const user = await getByUsername(username)
    console.log({ user })


    return (
        <>
            <h1>user dashboard: <span className="text-sky-800 p-2 text-3xl">{username}</span></h1>
            {/* {JSON.stringify(user)} */}
            <div className="p-2 m-5 flex flex-col border-b-2">
                <p>username: {user.username}</p>
                <p>password: {user.password}</p>
                <p>userId: {user.userId}</p>
            </div>
        </>
    )
}

