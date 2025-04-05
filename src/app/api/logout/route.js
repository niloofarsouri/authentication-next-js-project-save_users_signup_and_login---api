import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";




export async function POST(request) {

    const payload = await request.json()
    console.log({ payload })

    const cookiStore = await cookies()

    cookiStore.delete('accessToken')
    cookiStore.delete('__next_hmr_refresh_hash__')

    revalidatePath('/')
    redirect('/')

    return NextResponse.json({ message: 'hi from logout' })

}


