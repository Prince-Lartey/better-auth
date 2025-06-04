"use server"

import { RegisterFormValues } from "@/components/auth/Signup";

export async function registerUser(data: RegisterFormValues) {
    try {
        console.log(data)
        return {
            success: true,
            data: data,
            error: null
        }
    } catch (error){
        console.log(error)
         return {
            success: null,
            data: null,
            error: "Something went wrong"
        }
    }
}