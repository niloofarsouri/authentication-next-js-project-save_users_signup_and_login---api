// import { cookies } from "next/headers"
import LogoutClick from "@/components/log-out"
import Link from "next/link"



async function DashboardHeader() {


    // const cookieStore = await cookies()



    return (
        <>
            <header className="flex w-full h-auto mb-2 md:mb-5">
                <div className="w-full h-auto flex justify-between">
                    <ul className="flex justify-center">
                        <Link href={'/'}>
                            <li className="p-3 shadow-header hover:bg-slate-50 hover:text-sky-800">Home</li>
                        </Link>

                        <Link href={'/dashboard'}>
                            <li className='p-3 shadow-header hover:bg-slate-50 hover:text-sky-800'>Dashboard</li>
                        </Link>

                        <Link href={'/contact'}>
                            <li className='p-3 shadow-header hover:bg-slate-50 hover:text-sky-800'>Contact Us</li>
                        </Link>

                        <Link href={'/posts'}>
                            <li className='p-3 shadow-header hover:bg-slate-50 hover:text-sky-800'>Posts</li>
                        </Link>
                    </ul>


                    <ul>
                        <LogoutClick />
                    </ul>

                </div>
            </header>
        </>
    )
}


export default DashboardHeader