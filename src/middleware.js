import { cookies } from "next/headers";
import { NextResponse } from "next/server";



export async function middleware(request) {

    if (request.nextUrl.pathname.includes('dashboard')) {
        
        const cookieStore = await cookies()
        const token = cookieStore.get('accessToken')

        if (!token) {
            return NextResponse.redirect(new URL('/signup', request.url))
        } else {
            return NextResponse.next()
        }
    }
}