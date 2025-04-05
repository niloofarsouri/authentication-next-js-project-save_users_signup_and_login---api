import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SignJWT } from "jose"



export async function POST(request) {

    const payload = await request.json()
    console.log(payload)

    const cookieStore = await cookies()
    const token = await generateJWT(payload)
    const expires = new Date(Date.now() + 10 * 100000)
    cookieStore.set('accessToken', token, { httpOnly: true, expires })

    return NextResponse.redirect(new URL('/dashboard', request.url))
}



const generateJWT = async (payload) => {
    const header = {
        alg: "HS256",
        typ: "JWT"
    }

    const secretKey = new TextEncoder().encode('niloo')

    const token = await new SignJWT(payload)
        .setProtectedHeader(header)
        .setIssuedAt()
        .setExpirationTime('2 minute')
        .sign(secretKey)

    return token;
}
