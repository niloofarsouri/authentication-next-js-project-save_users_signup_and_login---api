import { readUser } from "@/action/Signup"
import Link from "next/link"

export const metadata = {
    title: "Dshboard",
    description: "dashboard page ",
  };


async function Dashboard() {

    const users = await readUser()



    return (
        <>

            <h1 className="text-2xl text-center p-6">My Dashboard</h1>

            <section className="flex justify-center">
                <div className="w-3/4 bg-sky-200 flex flex-wrap justify-center items-center p-3">
                    {
                        users.map(item => {
                            return (
                                <Link href={`/dashboard/user/${item.username}`} key={item.userId}>
                                    <div className="p-2 m-5 flex flex-col border-b-2">
                                        <p>username: {item.username}</p>
                                        <p>password: {item.password}</p>
                                        <p>userId: {item.userId}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}


export default Dashboard

