'use server';

import path from 'path';
import fs from 'fs/promises';
import * as yup from 'yup';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers';

const FILE_PATH = path.join(process.cwd(), 'public/users.json')

const schema = yup.object().shape({
    username: yup.string().required("should fill username"),
    password: yup.string().required("should fill password"),
    number: yup.number().required("should fill password"),
})


export async function handleSignup(initialValue, formData) {

    console.log({ formData })

    const cookieStore = await cookies()
    // const cookie = cookieStore.get('accessToken').value
    const authToken = cookieStore.get('accessToken')
    console.log(authToken)

    const username = formData.get('username')
    const password = formData.get('password')
    const number = formData.get('number')
    // const userId = formData.get('userId')
    const user = { username, password, number, authToken}
    console.log({ user })

    try {
        const validData = await schema.validate(user)
        console.log(validData)

        const userData = await readUser()

        Object.assign(validData, { userId: (Math.floor(Math.random() * 1000000)) })

        userData.push(validData)
        await writeUser(userData)

    } catch (error) {
        return error.message
    }

    // return 'saved !'
    revalidatePath('/dashboard')
    redirect('/dashboard')
}



export const readUser = async () => {
    const readData = await fs.readFile(FILE_PATH)
    const data = await JSON.parse(readData)
    return data
}


export const writeUser = async (data) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(data))
}


export const getById = async (userId) => {
    const userData = await readUser()
    const selectId = userData.find(item => item.id === +userId)
    return selectId
}


export const getByUsername = async (usernameUser) => {
    const data = await readUser()
    const selected = data.find(item => item.username === usernameUser)
    return selected
}


export const getByPassword = async (passwordUser) => {
    const userData = await readUser()
    const data = userData.find(item => item.password == passwordUser)
    return data
}

