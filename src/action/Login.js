'use server'

import { getByPassword, getByUsername } from './Signup';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import { NextResponse } from 'next/server';



export async function LoginAction(initialValue, formData) {

    const username = formData.get('username')
    const password = formData.get('password')
    const userLogin = { username, password }
    console.log({ userLogin })

    const userUsername = await getByUsername(username)
    console.log({ userUsername });
    const userPassword = await getByPassword(password)
    // console.log({userPassword})


    if (userUsername && userPassword) {

        const auth = userUsername.authToken
        console.log({ auth })
        const token = auth.value
        console.log({ token })


        const cookieStore = await cookies()
        const expires = new Date(Date.now() + 20 * 100000)
        cookieStore.set('accessToken', token, { httpOnly: true, expires })


        permanentRedirect('/')

        // permanentRedirect('/dashboard')
        // return <h5 className='text-sky-900'>YES !!</h5>

    } else {
        return <h3 className='text-red-600'>Sign up first !</h3>
    }

}